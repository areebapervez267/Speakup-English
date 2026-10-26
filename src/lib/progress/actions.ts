"use server";

import type { SupabaseClient } from "@supabase/supabase-js";

import type { Course } from "@/data/courses";
import { getLessonEntry } from "@/data/lessons";
import {
  getPublishedLessonBody,
  getStaticLessonBody,
  resolveLessonOutline,
  type ResolvedLesson,
} from "@/lib/content/published";
import type {
  PublicQuizQuestion,
  PublishedLessonBody,
} from "@/lib/content/types";
import { fetchMembershipSnapshot } from "@/lib/premium/access";
import { isPremiumCourse } from "@/lib/premium/policy";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

import { parseQuizAnswers, scoreQuiz } from "./calculate";
import {
  isMissingSessionError,
  isNetworkError,
  isSchemaSetupError,
} from "./errors";
import type {
  LessonCompletionResult,
  QuizOutcome,
  QuizReviewItem,
  QuizSaveResult,
} from "./types";

const SAVE_ERROR =
  "We couldn't save your score. Check your connection and try again.";
const CHECK_ERROR =
  "We couldn't check your answers. Check your connection and try again.";
const COMPLETE_ERROR =
  "We couldn't save your completion. Check your connection and try again.";
const AUTH_ERROR =
  "We couldn't verify your session. Refresh the page and try again.";
const NETWORK_ERROR =
  "We couldn't reach the service. Check your connection and try again.";
const INVALID_INPUT =
  "That request was incomplete. Refresh the page and try again.";
const INVALID_QUIZ =
  "That quiz submission was incomplete. Reset the quiz and try again.";
const LESSON_UNAVAILABLE =
  "We couldn't find that lesson. Refresh the page and try again.";
const NO_QUIZ = "This lesson does not have a quiz yet.";
const PREMIUM_REQUIRED =
  "An active Premium membership is required for this lesson. Open the Premium plans page to see how to continue.";
const PREMIUM_CHECK_ERROR =
  "We couldn't check your Premium access right now. Refresh the page and try again.";

type IdentityInput = {
  courseSlug: string;
  lessonSlug: string;
};

type QuizInput = IdentityInput & {
  answers: unknown;
};

type SavedUserId =
  | { status: "ok"; userId: string }
  | { status: "unauthenticated" }
  | { status: "error"; message: string };

function readIdentity(input: unknown): IdentityInput | null {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return null;
  }

  const record = input as Record<string, unknown>;
  const courseSlug = record.courseSlug;
  const lessonSlug = record.lessonSlug;

  if (
    typeof courseSlug !== "string" ||
    typeof lessonSlug !== "string" ||
    courseSlug.length === 0 ||
    lessonSlug.length === 0 ||
    courseSlug.length > 120 ||
    lessonSlug.length > 120
  ) {
    return null;
  }

  return { courseSlug, lessonSlug };
}

function readQuizInput(input: unknown): QuizInput | null {
  const identity = readIdentity(input);

  if (!identity) {
    return null;
  }

  return {
    ...identity,
    answers: (input as Record<string, unknown>).answers,
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function parseQuizReview(
  value: unknown,
  questions: readonly PublicQuizQuestion[],
): QuizReviewItem[] | null {
  if (!Array.isArray(value) || value.length !== questions.length) {
    return null;
  }

  const reviewById = new Map<string, QuizReviewItem>();

  for (const item of value) {
    if (!isRecord(item)) {
      return null;
    }

    const id = item.id;
    const correctIndex = item.correctIndex;
    const explanation = item.explanation;

    if (typeof id !== "string" || reviewById.has(id)) {
      return null;
    }

    const question = questions.find((candidate) => candidate.id === id);

    if (!question) {
      return null;
    }

    if (
      typeof correctIndex !== "number" ||
      !Number.isInteger(correctIndex) ||
      correctIndex < 0 ||
      correctIndex >= question.options.length ||
      typeof explanation !== "string"
    ) {
      return null;
    }

    reviewById.set(id, { id, correctIndex, explanation });
  }

  const review = questions
    .map((question) => reviewById.get(question.id))
    .filter((item): item is QuizReviewItem => Boolean(item));

  return review.length === questions.length ? review : null;
}

function parsePublishedOutcome(
  value: unknown,
  questions: readonly PublicQuizQuestion[],
): QuizOutcome | null {
  if (!isRecord(value)) {
    return null;
  }

  const score = value.score;
  const total = value.total;

  if (
    typeof score !== "number" ||
    !Number.isInteger(score) ||
    score < 0 ||
    typeof total !== "number" ||
    !Number.isInteger(total) ||
    total !== questions.length ||
    score > total
  ) {
    return null;
  }

  const review = parseQuizReview(value.review, questions);

  if (!review) {
    return null;
  }

  return { score, total, review };
}

type PublishedGradeResult =
  | { status: "ok"; outcome: QuizOutcome }
  | { status: "premium-required"; message: string }
  | { status: "invalid"; message: string }
  | { status: "error"; message: string };

async function gradePublishedQuiz(
  supabase: SupabaseClient,
  courseSlug: string,
  lessonSlug: string,
  questions: readonly PublicQuizQuestion[],
  answers: Record<string, number>,
): Promise<PublishedGradeResult> {
  try {
    const { data, error } = await supabase.rpc(
      "grade_published_lesson_quiz",
      {
        p_course_slug: courseSlug,
        p_lesson_slug: lessonSlug,
        p_answers: answers,
      },
    );

    if (error) {
      if (error.code === "42501") {
        return { status: "premium-required", message: PREMIUM_REQUIRED };
      }

      if (error.code === "P0002") {
        return { status: "invalid", message: LESSON_UNAVAILABLE };
      }

      if (error.code === "22023") {
        return { status: "invalid", message: INVALID_QUIZ };
      }

      return { status: "error", message: CHECK_ERROR };
    }

    const outcome = parsePublishedOutcome(data, questions);

    if (!outcome) {
      return { status: "error", message: CHECK_ERROR };
    }

    return { status: "ok", outcome };
  } catch {
    return { status: "error", message: CHECK_ERROR };
  }
}

type RecordQuizResult =
  | { status: "ok"; outcome: QuizOutcome }
  | { status: "premium-required"; message: string }
  | { status: "invalid"; message: string }
  | { status: "unconfigured" }
  | { status: "error"; message: string };

function mapRecordError(error: { code?: string }): RecordQuizResult {
  if (error.code === "42501") {
    return { status: "premium-required", message: PREMIUM_REQUIRED };
  }

  if (error.code === "P0002") {
    return { status: "invalid", message: LESSON_UNAVAILABLE };
  }

  if (error.code === "22023") {
    return { status: "invalid", message: INVALID_QUIZ };
  }

  if (isSchemaSetupError(error)) {
    return { status: "unconfigured" };
  }

  return { status: "error", message: SAVE_ERROR };
}

async function recordPublishedQuiz(
  supabase: SupabaseClient,
  courseSlug: string,
  lessonSlug: string,
  questions: readonly PublicQuizQuestion[],
  answers: Record<string, number>,
): Promise<RecordQuizResult> {
  try {
    const { data, error } = await supabase.rpc(
      "record_published_quiz_attempt",
      {
        p_course_slug: courseSlug,
        p_lesson_slug: lessonSlug,
        p_answers: answers,
      },
    );

    if (error) {
      return mapRecordError(error);
    }

    const outcome = parsePublishedOutcome(data, questions);

    if (!outcome) {
      return { status: "error", message: SAVE_ERROR };
    }

    return { status: "ok", outcome };
  } catch {
    return { status: "error", message: SAVE_ERROR };
  }
}

async function recordStaticQuiz(
  supabase: SupabaseClient,
  courseSlug: string,
  lessonSlug: string,
  questions: readonly PublicQuizQuestion[],
  answers: Record<string, number>,
  outcome: QuizOutcome,
): Promise<RecordQuizResult> {
  try {
    const { data, error } = await supabase.rpc("record_static_quiz_attempt", {
      p_course_slug: courseSlug,
      p_lesson_slug: lessonSlug,
      p_answers: answers,
    });

    if (error) {
      return mapRecordError(error);
    }

    if (!isRecord(data)) {
      return { status: "error", message: SAVE_ERROR };
    }

    const score = data.score;
    const total = data.total;

    if (
      typeof score !== "number" ||
      !Number.isInteger(score) ||
      typeof total !== "number" ||
      !Number.isInteger(total) ||
      total !== questions.length ||
      score < 0 ||
      score > total ||
      score !== outcome.score ||
      total !== outcome.total
    ) {
      return { status: "error", message: SAVE_ERROR };
    }

    return { status: "ok", outcome };
  } catch {
    return { status: "error", message: SAVE_ERROR };
  }
}

async function verifyStudent(
  supabase: SupabaseClient,
): Promise<SavedUserId> {
  try {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      if (isMissingSessionError(error)) {
        return { status: "unauthenticated" };
      }

      return {
        status: "error",
        message: isNetworkError(error) ? NETWORK_ERROR : AUTH_ERROR,
      };
    }

    if (!data.user) {
      return { status: "unauthenticated" };
    }

    return { status: "ok", userId: data.user.id };
  } catch {
    return { status: "error", message: NETWORK_ERROR };
  }
}

type PremiumCheck =
  | { ok: true }
  | {
      ok: false;
      status: "premium-required" | "error";
      message: string;
    };

async function checkLessonAccess(
  supabase: SupabaseClient | null,
  course: Pick<Course, "premium" | "level">,
  auth: SavedUserId | null,
): Promise<PremiumCheck> {
  if (!isPremiumCourse(course)) {
    return { ok: true };
  }

  if (!supabase || !auth || auth.status === "unauthenticated") {
    return { ok: false, status: "premium-required", message: PREMIUM_REQUIRED };
  }

  if (auth.status === "error") {
    return { ok: false, status: "error", message: auth.message };
  }

  const lookup = await fetchMembershipSnapshot(supabase);

  if (lookup.status === "ok" && lookup.membership?.isActive) {
    return { ok: true };
  }

  if (lookup.status === "error") {
    return { ok: false, status: "error", message: PREMIUM_CHECK_ERROR };
  }

  return { ok: false, status: "premium-required", message: PREMIUM_REQUIRED };
}

async function loadLessonBody(
  resolved: ResolvedLesson,
  courseSlug: string,
  lessonSlug: string,
  supabase: SupabaseClient | null,
): Promise<PublishedLessonBody | null> {
  if (resolved.course.source === "published") {
    if (!supabase) {
      return null;
    }

    return getPublishedLessonBody(courseSlug, lessonSlug, supabase);
  }

  return getStaticLessonBody(courseSlug, lessonSlug);
}

export async function submitQuizAttemptAction(
  input: unknown,
): Promise<QuizSaveResult> {
  const parsed = readQuizInput(input);

  if (!parsed) {
    return { status: "invalid", message: INVALID_INPUT };
  }

  const resolved = await resolveLessonOutline(
    parsed.courseSlug,
    parsed.lessonSlug,
  );

  if (!resolved) {
    return { status: "invalid", message: LESSON_UNAVAILABLE };
  }

  const supabase = isSupabaseConfigured
    ? await createSupabaseServerClient()
    : null;
  const auth = supabase ? await verifyStudent(supabase) : null;
  const access = await checkLessonAccess(
    supabase,
    resolved.course.detail.course,
    auth,
  );

  if (!access.ok) {
    return { status: access.status, message: access.message };
  }

  const body = await loadLessonBody(
    resolved,
    parsed.courseSlug,
    parsed.lessonSlug,
    supabase,
  );

  if (!body) {
    return { status: "invalid", message: LESSON_UNAVAILABLE };
  }

  if (body.questions.length === 0) {
    return { status: "invalid", message: NO_QUIZ };
  }

  const answers = parseQuizAnswers(body.questions, parsed.answers);

  if (!answers) {
    return { status: "invalid", message: INVALID_QUIZ };
  }

  let outcome: QuizOutcome;

  if (resolved.course.source === "published") {
    if (!supabase) {
      return { status: "error", message: CHECK_ERROR };
    }

    const graded = await gradePublishedQuiz(
      supabase,
      parsed.courseSlug,
      parsed.lessonSlug,
      body.questions,
      answers,
    );

    if (graded.status !== "ok") {
      return graded;
    }

    outcome = graded.outcome;
  } else {
    const entry = getLessonEntry(parsed.courseSlug, parsed.lessonSlug);

    if (!entry) {
      return { status: "invalid", message: LESSON_UNAVAILABLE };
    }

    const validation = scoreQuiz(entry.lesson.quiz, answers);

    if (!validation.ok) {
      return { status: "invalid", message: validation.message };
    }

    outcome = {
      score: validation.score,
      total: validation.total,
      review: validation.review,
    };
  }

  if (!isSupabaseConfigured || !supabase || !auth) {
    return { status: "unconfigured", ...outcome };
  }

  if (auth.status === "unauthenticated") {
    return { status: "unauthenticated", ...outcome };
  }

  if (auth.status === "error") {
    return { status: "error", message: auth.message };
  }

  if (resolved.course.source === "published") {
    const recorded = await recordPublishedQuiz(
      supabase,
      parsed.courseSlug,
      parsed.lessonSlug,
      body.questions,
      answers,
    );

    if (recorded.status !== "ok") {
      if (recorded.status === "unconfigured") {
        return { status: "unconfigured", ...outcome };
      }

      return recorded;
    }

    if (
      recorded.outcome.score !== outcome.score ||
      recorded.outcome.total !== outcome.total
    ) {
      return { status: "error", message: SAVE_ERROR };
    }
  } else {
    const recorded = await recordStaticQuiz(
      supabase,
      parsed.courseSlug,
      parsed.lessonSlug,
      body.questions,
      answers,
      outcome,
    );

    if (recorded.status !== "ok") {
      if (recorded.status === "unconfigured") {
        return { status: "unconfigured", ...outcome };
      }

      return recorded;
    }
  }

  let bestScore: number | null = null;
  let bestScoreTotal: number | null = null;

  try {
    const { data, error } = await supabase
      .from("lesson_progress")
      .select("best_score, best_score_total")
      .eq("user_id", auth.userId)
      .eq("course_slug", parsed.courseSlug)
      .eq("lesson_slug", parsed.lessonSlug)
      .maybeSingle();

    if (!error && data) {
      const score = data.best_score;
      const total = data.best_score_total;

      if (
        Number.isInteger(score) &&
        Number.isInteger(total) &&
        score >= 0 &&
        total > 0 &&
        score <= total
      ) {
        bestScore = score;
        bestScoreTotal = total;
      }
    }
  } catch {
    // The attempt is saved; the lesson progress card can refresh separately.
  }

  return {
    status: "saved",
    ...outcome,
    bestScore,
    bestScoreTotal,
  };
}

export async function markLessonCompleteAction(
  input: unknown,
): Promise<LessonCompletionResult> {
  const parsed = readIdentity(input);

  if (!parsed) {
    return { status: "invalid", message: INVALID_INPUT };
  }

  const resolved = await resolveLessonOutline(
    parsed.courseSlug,
    parsed.lessonSlug,
  );

  if (!resolved) {
    return { status: "invalid", message: LESSON_UNAVAILABLE };
  }

  if (!isSupabaseConfigured) {
    return { status: "unconfigured" };
  }

  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    return { status: "unconfigured" };
  }

  const auth = await verifyStudent(supabase);
  const access = await checkLessonAccess(
    supabase,
    resolved.course.detail.course,
    auth,
  );

  if (!access.ok) {
    return { status: access.status, message: access.message };
  }

  if (auth.status === "unauthenticated") {
    return { status: "unauthenticated" };
  }

  if (auth.status === "error") {
    return { status: "error", message: auth.message };
  }

  try {
    const { data, error } = await supabase.rpc("mark_lesson_complete", {
      target_course_slug: parsed.courseSlug,
      target_lesson_slug: parsed.lessonSlug,
    });

    if (error) {
      if (error.code === "42501") {
        return { status: "premium-required", message: PREMIUM_REQUIRED };
      }

      if (error.code === "P0002") {
        return { status: "invalid", message: LESSON_UNAVAILABLE };
      }

      if (isSchemaSetupError(error)) {
        return { status: "unconfigured" };
      }

      return { status: "error", message: COMPLETE_ERROR };
    }

    const row = (Array.isArray(data) ? data[0] : data) as
      | { completed_at?: unknown }
      | null
      | undefined;

    if (!row || typeof row.completed_at !== "string") {
      return { status: "error", message: COMPLETE_ERROR };
    }

    return { status: "completed", completedAt: row.completed_at };
  } catch {
    return { status: "error", message: COMPLETE_ERROR };
  }
}
