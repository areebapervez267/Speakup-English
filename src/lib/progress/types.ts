import type { CefrLevelId, SkillId } from "@/data/curriculum";

export type QuizAnswerMap = Record<string, number>;

export type QuizReviewItem = {
  id: string;
  correctIndex: number;
  explanation: string;
};

export type QuizOutcome = {
  score: number;
  total: number;
  review: QuizReviewItem[];
};

export type QuizValidation =
  | ({ ok: true } & QuizOutcome)
  | { ok: false; message: string };

export type QuizSaveResult =
  | ({
      status: "saved";
      bestScore: number | null;
      bestScoreTotal: number | null;
    } & QuizOutcome)
  | ({ status: "unauthenticated" } & QuizOutcome)
  | ({ status: "unconfigured" } & QuizOutcome)
  | { status: "premium-required"; message: string }
  | { status: "invalid"; message: string }
  | { status: "error"; message: string };

export type LessonCompletionResult =
  | { status: "completed"; completedAt: string }
  | { status: "unauthenticated" }
  | { status: "unconfigured" }
  | { status: "premium-required"; message: string }
  | { status: "invalid"; message: string }
  | { status: "error"; message: string };

export type LessonProgressSnapshot = {
  isCompleted: boolean;
  completedAt: string | null;
  bestScore: number;
  bestScoreTotal: number;
  updatedAt: string | null;
};

export type LessonProgressView =
  | { state: "unconfigured" }
  | { state: "signed-out" }
  | { state: "ready"; progress: LessonProgressSnapshot | null }
  | { state: "unavailable"; message: string };

export type LessonProgressRow = {
  course_slug: string;
  lesson_slug: string;
  is_completed: boolean;
  completed_at: string | null;
  best_score: number;
  best_score_total: number;
  updated_at: string | null;
};

export type QuizAttemptRow = {
  course_slug: string;
  lesson_slug: string;
  score: number;
  total_questions: number;
  attempted_at: string;
};

export type CourseProgressRow = {
  course_slug: string;
  lessons_completed: number;
  lessons_tracked: number;
  last_activity_at: string | null;
};

export type CourseQuizStatsRow = {
  course_slug: string;
  attempt_count: number;
  last_attempt_at: string | null;
  best_score: number | null;
  best_score_total: number | null;
};

export type CourseProgressTarget = {
  courseSlug: string;
  courseTitle: string;
  level: CefrLevelId;
  skill: SkillId;
  totalLessons: number;
  trackable: boolean;
};

export type CourseProgressSummary = CourseProgressTarget & {
  lessonsCompleted: number;
  completionPercent: number;
  quizAttempts: number;
  bestQuizScore: number | null;
  bestQuizTotal: number | null;
  lastActivityAt: string | null;
};

export type RecentLearningActivity =
  | {
      kind: "completion";
      courseSlug: string;
      courseTitle: string;
      lessonSlug: string;
      lessonTitle: string;
      occurredAt: string;
    }
  | {
      kind: "quiz";
      courseSlug: string;
      courseTitle: string;
      lessonSlug: string;
      lessonTitle: string;
      score: number;
      total: number;
      occurredAt: string;
    };

export type StudentLearningOverview = {
  courses: CourseProgressSummary[];
  recentActivity: RecentLearningActivity[];
};

export type ProgressQueryResult<T> =
  | { status: "ok"; data: T }
  | { status: "error"; message: string };
