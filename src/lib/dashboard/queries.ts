import type { SupabaseClient } from "@supabase/supabase-js";

import { courses } from "@/data/courses";
import { getLessonEntries, getLessonEntry } from "@/data/lessons";
import { buildRecentLearningActivity } from "@/lib/progress/calculate";
import { fetchCourseProgressSummaries } from "@/lib/progress/queries";
import type {
  LessonProgressRow,
  ProgressQueryResult,
  QuizAttemptRow,
} from "@/lib/progress/types";

import {
  buildDashboardLearningSnapshot,
  buildDashboardQuizPerformance,
  normalizeDisplayName,
} from "./calculate";
import type {
  CanonicalCourseLessons,
  CanonicalLesson,
  DashboardData,
} from "./types";

const RECENT_QUIZ_LIMIT = 6;
const RECENT_ACTIVITY_LIMIT = 5;
const DASHBOARD_LOAD_ERROR =
  "We couldn't load your learning data right now. Refresh the page to try again.";

const courseBySlug = new Map(courses.map((course) => [course.slug, course]));

const canonicalLessons: CanonicalCourseLessons = courses.reduce<
  Record<string, readonly CanonicalLesson[]>
>((result, course) => {
  const entries = getLessonEntries(course.slug);

  if (entries.length > 0) {
    result[course.slug] = entries.map((entry) => ({
      slug: entry.lesson.slug,
      title: entry.lesson.title,
      number: entry.number,
    }));
  }

  return result;
}, {});

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

export async function fetchDashboardData(
  supabase: SupabaseClient,
  userId: string,
  fallbackDisplayName: string,
): Promise<ProgressQueryResult<DashboardData>> {
  try {
    const [summaryResult, progressResult, attemptResult, profileResult] =
      await Promise.all([
        fetchCourseProgressSummaries(supabase, userId),
        supabase
          .from("lesson_progress")
          .select(
            "course_slug, lesson_slug, is_completed, completed_at, best_score, best_score_total, updated_at",
          )
          .eq("user_id", userId),
        supabase
          .from("quiz_attempts")
          .select(
            "course_slug, lesson_slug, score, total_questions, attempted_at",
          )
          .eq("user_id", userId)
          .order("attempted_at", { ascending: false })
          .limit(RECENT_QUIZ_LIMIT),
        supabase
          .from("profiles")
          .select("display_name")
          .eq("id", userId)
          .maybeSingle(),
      ]);

    if (
      summaryResult.status === "error" ||
      progressResult.error ||
      attemptResult.error
    ) {
      return { status: "error", message: DASHBOARD_LOAD_ERROR };
    }

    const progressRows = (progressResult.data ?? []) as LessonProgressRow[];
    const attemptRows = (attemptResult.data ?? []) as QuizAttemptRow[];
    const profileRow = profileResult.error
      ? null
      : (profileResult.data as { display_name?: unknown } | null);
    const displayName =
      normalizeDisplayName(profileRow?.display_name) ??
      normalizeDisplayName(fallbackDisplayName) ??
      "Student";
    const learning = buildDashboardLearningSnapshot({
      summaries: summaryResult.data,
      progressRows,
      canonicalLessons,
    });

    return {
      status: "ok",
      data: {
        displayName,
        ...learning,
        quizAttempts: buildDashboardQuizPerformance(
          { attempts: attemptRows, resolveLesson },
          RECENT_QUIZ_LIMIT,
        ),
        recentActivity: buildRecentLearningActivity(
          progressRows,
          attemptRows,
          resolveLesson,
          RECENT_ACTIVITY_LIMIT,
        ),
      },
    };
  } catch {
    return { status: "error", message: DASHBOARD_LOAD_ERROR };
  }
}
