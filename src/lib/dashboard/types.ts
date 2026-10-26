import type { CefrLevelId, SkillId } from "@/data/curriculum";
import type {
  CourseProgressSummary,
  LessonProgressRow,
  QuizAttemptRow,
  RecentLearningActivity,
} from "@/lib/progress/types";

export type DashboardLessonRef = {
  lessonSlug: string;
  lessonTitle: string;
  lessonNumber: number;
};

export type DashboardCourse = {
  courseSlug: string;
  courseTitle: string;
  level: CefrLevelId;
  skill: SkillId;
  lessonsCompleted: number;
  totalLessons: number;
  completionPercent: number;
  isComplete: boolean;
  nextLesson: DashboardLessonRef | null;
  lastActivityAt: string | null;
  quizAttempts: number;
  bestQuizScore: number | null;
  bestQuizTotal: number | null;
};

export type DashboardContinueTarget = {
  kind: "continue" | "start";
  courseSlug: string;
  courseTitle: string;
  lessonSlug: string;
  lessonTitle: string;
  lessonNumber: number;
};

export type DashboardMetrics = {
  lessonsCompleted: number;
  startedCourses: number;
  overallCompletionPercent: number;
  totalQuizAttempts: number;
  totalInteractiveLessons: number;
  interactiveCourseCount: number;
};

export type DashboardQuizAttempt = {
  courseSlug: string;
  courseTitle: string;
  lessonSlug: string;
  lessonTitle: string;
  score: number;
  total: number;
  percent: number;
  attemptedAt: string;
};

export type CanonicalLesson = {
  slug: string;
  title: string;
  number: number;
};

export type CanonicalCourseLessons = Readonly<
  Record<string, readonly CanonicalLesson[]>
>;

export type DashboardLearningInput = {
  summaries: readonly CourseProgressSummary[];
  progressRows: readonly LessonProgressRow[];
  canonicalLessons: CanonicalCourseLessons;
};

export type DashboardLearningSnapshot = {
  metrics: DashboardMetrics;
  courses: DashboardCourse[];
  continueTarget: DashboardContinueTarget | null;
};

export type DashboardQuizInput = {
  attempts: readonly QuizAttemptRow[];
  resolveLesson: (
    courseSlug: string,
    lessonSlug: string,
  ) => { courseTitle: string; lessonTitle: string } | null;
};

export type DashboardData = DashboardLearningSnapshot & {
  displayName: string;
  quizAttempts: DashboardQuizAttempt[];
  recentActivity: RecentLearningActivity[];
};
