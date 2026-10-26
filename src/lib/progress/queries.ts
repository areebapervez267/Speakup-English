import type { SupabaseClient } from "@supabase/supabase-js";

import { courses } from "@/data/courses";
import { getLessonEntries, getLessonEntry } from "@/data/lessons";

import {
  buildCourseProgressSummaries,
  buildRecentLearningActivity,
  mapLessonProgressRow,
} from "./calculate";
import type {
  CourseProgressRow,
  CourseProgressSummary,
  CourseProgressTarget,
  CourseQuizStatsRow,
  LessonProgressRow,
  LessonProgressSnapshot,
  ProgressQueryResult,
  QuizAttemptRow,
  RecentLearningActivity,
  StudentLearningOverview,
} from "./types";

const LESSON_LOAD_ERROR =
  "We couldn't load your saved progress right now.";
const COURSE_LOAD_ERROR =
  "We couldn't load your course progress right now.";
const ACTIVITY_LOAD_ERROR =
  "We couldn't load your recent learning activity right now.";

const courseBySlug = new Map(courses.map((course) => [course.slug, course]));

const courseProgressTargets: CourseProgressTarget[] = courses.map((course) => {
  const entries = getLessonEntries(course.slug);
  const trackable = entries.length > 0;

  return {
    courseSlug: course.slug,
    courseTitle: course.title,
    level: course.level,
    skill: course.skill,
    totalLessons: trackable ? entries.length : course.lessons,
    trackable,
  };
});

function resolveLesson(courseSlug: string, lessonSlug: string) {
  const course = courseBySlug.get(courseSlug);
  const entry = getLessonEntry(courseSlug, lessonSlug);

  if (!course || !entry) {
    return null;
  }

  return {
    courseTitle: course.title,
    lessonTitle: entry.lesson.title,
  };
}

export async function fetchLessonProgress(
  supabase: SupabaseClient,
  userId: string,
  courseSlug: string,
  lessonSlug: string,
): Promise<ProgressQueryResult<LessonProgressSnapshot | null>> {
  try {
    const { data, error } = await supabase
      .from("lesson_progress")
      .select(
        "course_slug, lesson_slug, is_completed, completed_at, best_score, best_score_total, updated_at",
      )
      .eq("user_id", userId)
      .eq("course_slug", courseSlug)
      .eq("lesson_slug", lessonSlug)
      .maybeSingle();

    if (error) {
      return { status: "error", message: LESSON_LOAD_ERROR };
    }

    return {
      status: "ok",
      data: mapLessonProgressRow(data as LessonProgressRow | null),
    };
  } catch {
    return { status: "error", message: LESSON_LOAD_ERROR };
  }
}

export async function fetchCourseProgressSummaries(
  supabase: SupabaseClient,
  userId: string,
): Promise<ProgressQueryResult<CourseProgressSummary[]>> {
  try {
    const [progressResult, quizResult] = await Promise.all([
      supabase
        .from("student_course_progress")
        .select(
          "course_slug, lessons_completed, lessons_tracked, last_activity_at",
        )
        .eq("user_id", userId),
      supabase
        .from("student_course_quiz_stats")
        .select(
          "course_slug, attempt_count, last_attempt_at, best_score, best_score_total",
        )
        .eq("user_id", userId),
    ]);

    if (progressResult.error || quizResult.error) {
      return { status: "error", message: COURSE_LOAD_ERROR };
    }

    return {
      status: "ok",
      data: buildCourseProgressSummaries(
        courseProgressTargets,
        (progressResult.data ?? []) as CourseProgressRow[],
        (quizResult.data ?? []) as CourseQuizStatsRow[],
      ),
    };
  } catch {
    return { status: "error", message: COURSE_LOAD_ERROR };
  }
}

export async function fetchRecentLearningActivity(
  supabase: SupabaseClient,
  userId: string,
  limit = 6,
): Promise<ProgressQueryResult<RecentLearningActivity[]>> {
  try {
    const [progressResult, attemptResult] = await Promise.all([
      supabase
        .from("lesson_progress")
        .select(
          "course_slug, lesson_slug, is_completed, completed_at, best_score, best_score_total, updated_at",
        )
        .eq("user_id", userId)
        .order("updated_at", { ascending: false })
        .limit(50),
      supabase
        .from("quiz_attempts")
        .select(
          "course_slug, lesson_slug, score, total_questions, attempted_at",
        )
        .eq("user_id", userId)
        .order("attempted_at", { ascending: false })
        .limit(50),
    ]);

    if (progressResult.error || attemptResult.error) {
      return { status: "error", message: ACTIVITY_LOAD_ERROR };
    }

    return {
      status: "ok",
      data: buildRecentLearningActivity(
        (progressResult.data ?? []) as LessonProgressRow[],
        (attemptResult.data ?? []) as QuizAttemptRow[],
        resolveLesson,
        limit,
      ),
    };
  } catch {
    return { status: "error", message: ACTIVITY_LOAD_ERROR };
  }
}

export async function fetchStudentLearningOverview(
  supabase: SupabaseClient,
  userId: string,
): Promise<ProgressQueryResult<StudentLearningOverview>> {
  const [courseResult, activityResult] = await Promise.all([
    fetchCourseProgressSummaries(supabase, userId),
    fetchRecentLearningActivity(supabase, userId, 6),
  ]);

  if (courseResult.status === "error") {
    return courseResult;
  }

  if (activityResult.status === "error") {
    return activityResult;
  }

  return {
    status: "ok",
    data: {
      courses: courseResult.data,
      recentActivity: activityResult.data,
    },
  };
}
