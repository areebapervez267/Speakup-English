import type {
  CourseProgressRow,
  CourseProgressSummary,
  CourseProgressTarget,
  CourseQuizStatsRow,
  LessonProgressRow,
  LessonProgressSnapshot,
  QuizAttemptRow,
  QuizReviewItem,
  QuizValidation,
  RecentLearningActivity,
} from "./types";

type ScorableQuestion = {
  id: string;
  options: readonly unknown[];
  correctIndex: number;
  explanation?: string;
};

type LessonIdentity = {
  courseTitle: string;
  lessonTitle: string;
};

const INVALID_QUIZ_MESSAGE =
  "That quiz submission was incomplete. Reset the quiz and try again.";

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

function latestTimestamp(...values: Array<string | null>): string | null {
  let latest: string | null = null;
  let latestTime = Number.NEGATIVE_INFINITY;

  for (const value of values) {
    if (!isValidTimestamp(value)) {
      continue;
    }

    const time = Date.parse(value);
    if (time > latestTime) {
      latest = value;
      latestTime = time;
    }
  }

  return latest;
}

export function parseQuizAnswers(
  questions: readonly Pick<ScorableQuestion, "id" | "options">[],
  answers: unknown,
): Record<string, number> | null {
  if (questions.length === 0) {
    return null;
  }

  if (!answers || typeof answers !== "object" || Array.isArray(answers)) {
    return null;
  }

  const submitted = answers as Record<string, unknown>;

  if (Object.keys(submitted).length !== questions.length) {
    return null;
  }

  const parsed: Record<string, number> = {};
  const seen = new Set<string>();

  for (const question of questions) {
    if (seen.has(question.id)) {
      return null;
    }

    seen.add(question.id);

    const selectedIndex = submitted[question.id];

    if (
      typeof selectedIndex !== "number" ||
      !Number.isInteger(selectedIndex) ||
      selectedIndex < 0 ||
      selectedIndex >= question.options.length
    ) {
      return null;
    }

    parsed[question.id] = selectedIndex;
  }

  return parsed;
}

export function scoreQuiz(
  questions: readonly ScorableQuestion[],
  answers: unknown,
): QuizValidation {
  if (questions.length === 0) {
    return { ok: false, message: "This lesson does not have a quiz yet." };
  }

  const seenIds = new Set<string>();

  for (const question of questions) {
    if (
      !question ||
      typeof question.id !== "string" ||
      question.id.length === 0 ||
      !Array.isArray(question.options) ||
      question.options.length === 0 ||
      !Number.isInteger(question.correctIndex) ||
      question.correctIndex < 0 ||
      question.correctIndex >= question.options.length ||
      seenIds.has(question.id)
    ) {
      return {
        ok: false,
        message: "This quiz could not be checked. Refresh the page and try again.",
      };
    }

    seenIds.add(question.id);
  }

  const parsed = parseQuizAnswers(questions, answers);

  if (!parsed) {
    return { ok: false, message: INVALID_QUIZ_MESSAGE };
  }

  let score = 0;
  const review: QuizReviewItem[] = [];

  for (const question of questions) {
    if (parsed[question.id] === question.correctIndex) {
      score += 1;
    }

    review.push({
      id: question.id,
      correctIndex: question.correctIndex,
      explanation:
        typeof question.explanation === "string" ? question.explanation : "",
    });
  }

  return { ok: true, score, total: questions.length, review };
}

export function isBetterQuizScore(
  candidateScore: unknown,
  candidateTotal: unknown,
  bestScore: unknown,
  bestTotal: unknown,
): boolean {
  const nextScore = toNonNegativeInteger(candidateScore);
  const nextTotal = toNonNegativeInteger(candidateTotal);

  if (
    nextScore === null ||
    nextTotal === null ||
    nextTotal === 0 ||
    nextScore > nextTotal
  ) {
    return false;
  }

  const currentScore = toNonNegativeInteger(bestScore);
  const currentTotal = toNonNegativeInteger(bestTotal);

  if (
    currentScore === null ||
    currentTotal === null ||
    currentTotal === 0
  ) {
    return true;
  }

  const nextRatio = nextScore * currentTotal;
  const currentRatio = currentScore * nextTotal;

  if (nextRatio !== currentRatio) {
    return nextRatio > currentRatio;
  }

  return nextScore > currentScore;
}

export function toCompletionPercent(completed: unknown, total: unknown): number {
  const totalLessons = toNonNegativeInteger(total);
  const completedLessons = toNonNegativeInteger(completed);

  if (
    totalLessons === null ||
    completedLessons === null ||
    totalLessons === 0
  ) {
    return 0;
  }

  const clamped = Math.min(completedLessons, totalLessons);
  return Math.min(100, Math.max(0, Math.round((clamped / totalLessons) * 100)));
}

export function mapLessonProgressRow(
  row: LessonProgressRow | null | undefined,
): LessonProgressSnapshot | null {
  if (!row) {
    return null;
  }

  const bestScoreTotal = toNonNegativeInteger(row.best_score_total) ?? 0;
  const rawBestScore = toNonNegativeInteger(row.best_score) ?? 0;
  const bestScore = Math.min(rawBestScore, bestScoreTotal);

  return {
    isCompleted: row.is_completed === true,
    completedAt: isValidTimestamp(row.completed_at)
      ? row.completed_at
      : null,
    bestScore,
    bestScoreTotal,
    updatedAt: isValidTimestamp(row.updated_at) ? row.updated_at : null,
  };
}

export function buildCourseProgressSummaries(
  targets: readonly CourseProgressTarget[],
  progressRows: readonly CourseProgressRow[],
  quizStatsRows: readonly CourseQuizStatsRow[],
): CourseProgressSummary[] {
  const progressByCourse = new Map<string, CourseProgressRow>();
  const statsByCourse = new Map<string, CourseQuizStatsRow>();

  for (const row of progressRows) {
    if (row && typeof row.course_slug === "string") {
      progressByCourse.set(row.course_slug, row);
    }
  }

  for (const row of quizStatsRows) {
    if (row && typeof row.course_slug === "string") {
      statsByCourse.set(row.course_slug, row);
    }
  }

  return targets.map((target) => {
    const totalLessons = toNonNegativeInteger(target.totalLessons) ?? 0;
    const progress = progressByCourse.get(target.courseSlug);
    const stats = target.trackable
      ? statsByCourse.get(target.courseSlug)
      : undefined;

    const rawCompleted = toNonNegativeInteger(progress?.lessons_completed) ?? 0;
    const lessonsCompleted = target.trackable
      ? Math.min(rawCompleted, totalLessons)
      : 0;

    const quizAttempts = stats
      ? (toNonNegativeInteger(stats.attempt_count) ?? 0)
      : 0;

    const bestTotal = toNonNegativeInteger(stats?.best_score_total);
    const bestScore = toNonNegativeInteger(stats?.best_score);
    const hasBest =
      bestTotal !== null &&
      bestTotal > 0 &&
      bestScore !== null &&
      bestScore <= bestTotal;

    const progressActivity =
      target.trackable && progress && isValidTimestamp(progress.last_activity_at)
        ? progress.last_activity_at
        : null;
    const attemptActivity =
      stats && isValidTimestamp(stats.last_attempt_at)
        ? stats.last_attempt_at
        : null;

    return {
      ...target,
      lessonsCompleted,
      completionPercent: toCompletionPercent(lessonsCompleted, totalLessons),
      quizAttempts,
      bestQuizScore: hasBest ? bestScore : null,
      bestQuizTotal: hasBest ? bestTotal : null,
      lastActivityAt: latestTimestamp(progressActivity, attemptActivity),
    };
  });
}

export function buildRecentLearningActivity(
  progressRows: readonly LessonProgressRow[],
  attemptRows: readonly QuizAttemptRow[],
  resolveLesson: (
    courseSlug: string,
    lessonSlug: string,
  ) => LessonIdentity | null,
  limit = 6,
): RecentLearningActivity[] {
  const activities: RecentLearningActivity[] = [];

  for (const row of progressRows) {
    if (
      row.is_completed !== true ||
      !isValidTimestamp(row.completed_at) ||
      typeof row.course_slug !== "string" ||
      typeof row.lesson_slug !== "string"
    ) {
      continue;
    }

    const lesson = resolveLesson(row.course_slug, row.lesson_slug);
    if (!lesson) {
      continue;
    }

    activities.push({
      kind: "completion",
      courseSlug: row.course_slug,
      courseTitle: lesson.courseTitle,
      lessonSlug: row.lesson_slug,
      lessonTitle: lesson.lessonTitle,
      occurredAt: row.completed_at,
    });
  }

  for (const row of attemptRows) {
    if (
      typeof row.course_slug !== "string" ||
      typeof row.lesson_slug !== "string" ||
      !isValidTimestamp(row.attempted_at)
    ) {
      continue;
    }

    const score = toNonNegativeInteger(row.score);
    const total = toNonNegativeInteger(row.total_questions);

    if (score === null || total === null || total === 0 || score > total) {
      continue;
    }

    const lesson = resolveLesson(row.course_slug, row.lesson_slug);
    if (!lesson) {
      continue;
    }

    activities.push({
      kind: "quiz",
      courseSlug: row.course_slug,
      courseTitle: lesson.courseTitle,
      lessonSlug: row.lesson_slug,
      lessonTitle: lesson.lessonTitle,
      score,
      total,
      occurredAt: row.attempted_at,
    });
  }

  const safeLimit = Number.isFinite(limit)
    ? Math.max(0, Math.floor(limit))
    : 6;

  return activities
    .sort((a, b) => Date.parse(b.occurredAt) - Date.parse(a.occurredAt))
    .slice(0, safeLimit);
}

export function formatBestQuizScore(score: unknown, total: unknown): string {
  const scoreValue = toNonNegativeInteger(score);
  const totalValue = toNonNegativeInteger(total);

  if (scoreValue === null || totalValue === null || totalValue === 0) {
    return "No quiz attempts yet";
  }

  return `${Math.min(scoreValue, totalValue)} / ${totalValue}`;
}

export function formatCompletionDate(value: string | null | undefined) {
  if (!isValidTimestamp(value)) {
    return null;
  }

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}
