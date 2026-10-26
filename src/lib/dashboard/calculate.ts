import type { CourseProgressSummary } from "@/lib/progress/types";

import type {
  DashboardContinueTarget,
  DashboardCourse,
  DashboardLearningInput,
  DashboardLearningSnapshot,
  DashboardMetrics,
  DashboardQuizAttempt,
  DashboardQuizInput,
} from "./types";

const DISPLAY_NAME_MAX_LENGTH = 80;
const QUIZ_ATTEMPT_LIMIT = 6;

function toNonNegativeInteger(value: unknown): number | null {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return null;
  }

  if (!Number.isInteger(value) || value < 0) {
    return null;
  }

  return value;
}

function isValidTimestamp(value: unknown): value is string {
  return (
    typeof value === "string" &&
    value.length > 0 &&
    !Number.isNaN(Date.parse(value))
  );
}

function percentage(completed: unknown, total: unknown): number {
  const totalValue = toNonNegativeInteger(total);
  const completedValue = toNonNegativeInteger(completed);

  if (totalValue === null || completedValue === null || totalValue === 0) {
    return 0;
  }

  const clamped = Math.min(completedValue, totalValue);
  return Math.min(100, Math.max(0, Math.round((clamped / totalValue) * 100)));
}

export function toDashboardPercent(completed: unknown, total: unknown): number {
  return percentage(completed, total);
}

export function toQuizPercent(score: unknown, total: unknown): number {
  return percentage(score, total);
}

export function normalizeDisplayName(value: unknown): string | null {
  if (typeof value !== "string") {
    return null;
  }

  const cleaned = value.replace(/\s+/g, " ").trim();
  if (!cleaned) {
    return null;
  }

  return Array.from(cleaned).slice(0, DISPLAY_NAME_MAX_LENGTH).join("");
}

export function formatDashboardDate(value: string | null | undefined) {
  if (!isValidTimestamp(value)) {
    return null;
  }

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}

function hasStartedSummary(
  summary: CourseProgressSummary,
  lessonsCompleted: number,
) {
  return (
    lessonsCompleted > 0 ||
    (toNonNegativeInteger(summary.quizAttempts) ?? 0) > 0 ||
    isValidTimestamp(summary.lastActivityAt)
  );
}

function bestQuizResult(summary: CourseProgressSummary) {
  const total = toNonNegativeInteger(summary.bestQuizTotal);
  const score = toNonNegativeInteger(summary.bestQuizScore);

  if (total === null || total === 0 || score === null || score > total) {
    return { bestQuizScore: null, bestQuizTotal: null };
  }

  return { bestQuizScore: score, bestQuizTotal: total };
}

export function buildDashboardMetrics(
  summaries: readonly CourseProgressSummary[],
): DashboardMetrics {
  let lessonsCompleted = 0;
  let startedCourses = 0;
  let totalQuizAttempts = 0;
  let totalInteractiveLessons = 0;
  let interactiveCourseCount = 0;

  for (const summary of summaries) {
    if (!summary || summary.trackable !== true) {
      continue;
    }

    interactiveCourseCount += 1;

    const total = toNonNegativeInteger(summary.totalLessons) ?? 0;
    const completed = Math.min(
      toNonNegativeInteger(summary.lessonsCompleted) ?? 0,
      total,
    );

    totalInteractiveLessons += total;
    lessonsCompleted += completed;
    totalQuizAttempts += toNonNegativeInteger(summary.quizAttempts) ?? 0;

    if (hasStartedSummary(summary, completed)) {
      startedCourses += 1;
    }
  }

  return {
    lessonsCompleted,
    startedCourses,
    overallCompletionPercent: percentage(
      lessonsCompleted,
      totalInteractiveLessons,
    ),
    totalQuizAttempts,
    totalInteractiveLessons,
    interactiveCourseCount,
  };
}

function collectCompletedLessons(progressRows: DashboardLearningInput["progressRows"]) {
  const completedByCourse = new Map<string, Set<string>>();

  for (const row of progressRows) {
    if (
      !row ||
      row.is_completed !== true ||
      typeof row.course_slug !== "string" ||
      row.course_slug.length === 0 ||
      typeof row.lesson_slug !== "string" ||
      row.lesson_slug.length === 0
    ) {
      continue;
    }

    const completed = completedByCourse.get(row.course_slug) ?? new Set<string>();
    completed.add(row.lesson_slug);
    completedByCourse.set(row.course_slug, completed);
  }

  return completedByCourse;
}

export function buildDashboardCourses({
  summaries,
  progressRows,
  canonicalLessons,
}: DashboardLearningInput): DashboardCourse[] {
  const completedByCourse = collectCompletedLessons(progressRows);
  const summaryPosition = new Map(
    summaries.map((summary, index) => [summary.courseSlug, index]),
  );
  const courses: DashboardCourse[] = [];

  for (const summary of summaries) {
    if (!summary || summary.trackable !== true) {
      continue;
    }

    const entries = canonicalLessons[summary.courseSlug] ?? [];
    const summaryTotal = toNonNegativeInteger(summary.totalLessons) ?? 0;
    const totalLessons = entries.length > 0 ? entries.length : summaryTotal;
    const lessonsCompleted = Math.min(
      toNonNegativeInteger(summary.lessonsCompleted) ?? 0,
      totalLessons,
    );

    if (!hasStartedSummary(summary, lessonsCompleted)) {
      continue;
    }

    const completedSet =
      completedByCourse.get(summary.courseSlug) ?? new Set<string>();
    const isComplete = totalLessons > 0 && lessonsCompleted >= totalLessons;
    const nextLesson = isComplete
      ? null
      : (entries.find((entry) => !completedSet.has(entry.slug)) ?? null);

    courses.push({
      courseSlug: summary.courseSlug,
      courseTitle: summary.courseTitle,
      level: summary.level,
      skill: summary.skill,
      lessonsCompleted,
      totalLessons,
      completionPercent: percentage(lessonsCompleted, totalLessons),
      isComplete,
      nextLesson: nextLesson
        ? {
            lessonSlug: nextLesson.slug,
            lessonTitle: nextLesson.title,
            lessonNumber: nextLesson.number,
          }
        : null,
      lastActivityAt: isValidTimestamp(summary.lastActivityAt)
        ? summary.lastActivityAt
        : null,
      quizAttempts: toNonNegativeInteger(summary.quizAttempts) ?? 0,
      ...bestQuizResult(summary),
    });
  }

  return courses.sort((a, b) => {
    const aTime = a.lastActivityAt
      ? Date.parse(a.lastActivityAt)
      : Number.NEGATIVE_INFINITY;
    const bTime = b.lastActivityAt
      ? Date.parse(b.lastActivityAt)
      : Number.NEGATIVE_INFINITY;

    if (aTime !== bTime) {
      return bTime - aTime;
    }

    return (
      (summaryPosition.get(a.courseSlug) ?? 0) -
      (summaryPosition.get(b.courseSlug) ?? 0)
    );
  });
}

function buildStartTargets(
  summaries: readonly CourseProgressSummary[],
  canonicalLessons: DashboardLearningInput["canonicalLessons"],
  startedCourses: readonly DashboardCourse[],
): DashboardContinueTarget[] {
  const startedSlugs = new Set(
    startedCourses.map((course) => course.courseSlug),
  );
  const targets: DashboardContinueTarget[] = [];

  for (const summary of summaries) {
    if (
      !summary ||
      summary.trackable !== true ||
      startedSlugs.has(summary.courseSlug)
    ) {
      continue;
    }

    const firstLesson = canonicalLessons[summary.courseSlug]?.[0];
    if (!firstLesson) {
      continue;
    }

    targets.push({
      kind: "start",
      courseSlug: summary.courseSlug,
      courseTitle: summary.courseTitle,
      lessonSlug: firstLesson.slug,
      lessonTitle: firstLesson.title,
      lessonNumber: firstLesson.number,
    });
  }

  return targets;
}

export function pickContinueTarget(
  courses: readonly DashboardCourse[],
  startTargets: readonly DashboardContinueTarget[],
): DashboardContinueTarget | null {
  for (const course of courses) {
    if (!course.nextLesson) {
      continue;
    }

    return {
      kind: "continue",
      courseSlug: course.courseSlug,
      courseTitle: course.courseTitle,
      lessonSlug: course.nextLesson.lessonSlug,
      lessonTitle: course.nextLesson.lessonTitle,
      lessonNumber: course.nextLesson.lessonNumber,
    };
  }

  return startTargets[0] ?? null;
}

export function buildDashboardLearningSnapshot(
  input: DashboardLearningInput,
): DashboardLearningSnapshot {
  const metrics = buildDashboardMetrics(input.summaries);
  const courses = buildDashboardCourses(input);
  const startTargets = buildStartTargets(
    input.summaries,
    input.canonicalLessons,
    courses,
  );

  return {
    metrics,
    courses,
    continueTarget: pickContinueTarget(courses, startTargets),
  };
}

export function buildDashboardQuizPerformance(
  { attempts, resolveLesson }: DashboardQuizInput,
  limit = QUIZ_ATTEMPT_LIMIT,
): DashboardQuizAttempt[] {
  const safeLimit = Number.isFinite(limit)
    ? Math.max(0, Math.floor(limit))
    : QUIZ_ATTEMPT_LIMIT;
  const validAttempts: DashboardQuizAttempt[] = [];

  for (const attempt of attempts) {
    if (
      !attempt ||
      typeof attempt.course_slug !== "string" ||
      attempt.course_slug.length === 0 ||
      typeof attempt.lesson_slug !== "string" ||
      attempt.lesson_slug.length === 0 ||
      !isValidTimestamp(attempt.attempted_at)
    ) {
      continue;
    }

    const score = toNonNegativeInteger(attempt.score);
    const total = toNonNegativeInteger(attempt.total_questions);

    if (score === null || total === null || total === 0 || score > total) {
      continue;
    }

    const lesson = resolveLesson(attempt.course_slug, attempt.lesson_slug);
    if (!lesson) {
      continue;
    }

    validAttempts.push({
      courseSlug: attempt.course_slug,
      courseTitle: lesson.courseTitle,
      lessonSlug: attempt.lesson_slug,
      lessonTitle: lesson.lessonTitle,
      score,
      total,
      percent: percentage(score, total),
      attemptedAt: attempt.attempted_at,
    });
  }

  return validAttempts
    .sort((a, b) => Date.parse(b.attemptedAt) - Date.parse(a.attemptedAt))
    .slice(0, safeLimit);
}
