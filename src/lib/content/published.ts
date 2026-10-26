import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { cacheLife, cacheTag } from "next/cache";

import type { Course } from "@/data/courses";
import { courses } from "@/data/courses";
import {
  getCourseDetail,
  type CourseDetail,
} from "@/data/course-details";
import { getLessonEntries, getLessonEntry } from "@/data/lessons";
import type { LessonBlock } from "@/data/lessons/types";
import type { CefrLevelId, SkillId } from "@/data/curriculum";
import { isCefrLevelId, isSkillId } from "@/data/curriculum";
import { toPublicQuizQuestions } from "@/lib/admin/validation";
import { getSupabaseConfig } from "@/lib/supabase/config";

import type {
  ContentSlugState,
  PublicQuizQuestion,
  PublishedCourseOutline,
  PublishedLessonBody,
  PublishedLessonOutline,
  PublishedUnitOutline,
} from "./types";

export const PUBLISHED_CONTENT_TAG = "published-content";

export type ContentSource = "published" | "static";

export type ResolvedCourse = {
  detail: CourseDetail;
  source: ContentSource;
  content: PublishedCourseOutline | null;
};

export type ResolvedLesson = {
  course: ResolvedCourse;
  lesson: {
    slug: string;
    title: string;
    summary: string;
    objective: string;
    minutes: number;
  };
  unitTitle: string;
  unitIndex: number;
  number: number;
  totalLessons: number;
  previous: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function asNumber(value: unknown, fallback = 0): number {
  return typeof value === "number" && Number.isFinite(value)
    ? value
    : fallback;
}

function asTimestamp(value: unknown): string | null {
  if (
    typeof value === "string" &&
    value.length > 0 &&
    !Number.isNaN(Date.parse(value))
  ) {
    return value;
  }

  return null;
}

function asLevel(value: unknown): CefrLevelId | null {
  const normalized = asString(value).toLowerCase();
  return isCefrLevelId(normalized) ? normalized : null;
}

function asSkill(value: unknown): SkillId | null {
  const normalized = asString(value).toLowerCase();
  return isSkillId(normalized) ? normalized : null;
}

function asPublicQuestions(value: unknown): PublicQuizQuestion[] {
  if (!Array.isArray(value)) {
    return [];
  }

  const questions: PublicQuizQuestion[] = [];

  for (const item of value) {
    if (!isRecord(item)) {
      continue;
    }

    const id = asString(item.id);
    const question = asString(item.question);
    const options = Array.isArray(item.options)
      ? item.options.filter((option): option is string => typeof option === "string")
      : [];

    if (!id || !question || options.length < 2) {
      continue;
    }

    questions.push({ id, question, options });
  }

  return questions;
}

function asBlocks(value: unknown): LessonBlock[] {
  return Array.isArray(value) ? (value as LessonBlock[]) : [];
}

function getPublicSupabaseClient(): SupabaseClient | null {
  const config = getSupabaseConfig();

  if (!config) {
    return null;
  }

  return createClient(config.url, config.publishableKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}

export async function getContentSlugStates(): Promise<ContentSlugState[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag(PUBLISHED_CONTENT_TAG);

  const supabase = getPublicSupabaseClient();

  if (!supabase) {
    return [];
  }

  try {
    const { data, error } = await supabase.rpc("get_content_slug_states");

    if (error || !Array.isArray(data)) {
      return [];
    }

    return data.flatMap((item) => {
      if (!isRecord(item)) {
        return [];
      }

      const slug = asString(item.slug);
      const status = item.status;

      if (
        !slug ||
        (status !== "draft" && status !== "published" && status !== "archived")
      ) {
        return [];
      }

      return [
        {
          slug,
          status,
          lastPublishedAt: asTimestamp(item.last_published_at),
        } satisfies ContentSlugState,
      ];
    });
  } catch {
    return [];
  }
}

function mapLessonOutline(row: unknown): PublishedLessonOutline | null {
  if (!isRecord(row)) {
    return null;
  }

  const id = asString(row.id);
  const unitId = asString(row.unit_id);
  const slug = asString(row.slug);

  if (!id || !unitId || !slug) {
    return null;
  }

  return {
    id,
    unitId,
    slug,
    title: asString(row.title),
    summary: asString(row.summary),
    objective: asString(row.objective),
    minutes: asNumber(row.minutes, 10),
    sortOrder: asNumber(row.sort_order),
  };
}

function mapPublishedCourseOutline(
  courseRow: Record<string, unknown>,
  unitRows: readonly unknown[],
  lessonRows: readonly unknown[],
): PublishedCourseOutline | null {
  const courseId = asString(courseRow.course_id);
  const slug = asString(courseRow.slug);
  const title = asString(courseRow.title);
  const level = asLevel(courseRow.level);
  const skill = asSkill(courseRow.skill);

  if (!courseId || !slug || !title || !level || !skill) {
    return null;
  }

  const lessonsByUnit = new Map<string, PublishedLessonOutline[]>();

  for (const row of lessonRows) {
    const lesson = mapLessonOutline(row);

    if (!lesson) {
      continue;
    }

    const current = lessonsByUnit.get(lesson.unitId) ?? [];
    current.push(lesson);
    lessonsByUnit.set(lesson.unitId, current);
  }

  const units: PublishedUnitOutline[] = [];

  for (const row of unitRows) {
    if (!isRecord(row)) {
      continue;
    }

    const id = asString(row.id);

    if (!id) {
      continue;
    }

    units.push({
      id,
      title: asString(row.title),
      description: asString(row.description),
      sortOrder: asNumber(row.sort_order),
      lessons: (lessonsByUnit.get(id) ?? []).sort(
        (a, b) => a.sortOrder - b.sortOrder,
      ),
    });
  }

  return {
    courseId,
    slug,
    title,
    summary: asString(courseRow.summary),
    description: asString(courseRow.description),
    level,
    skill,
    outcomes: Array.isArray(courseRow.outcomes)
      ? courseRow.outcomes.filter(
          (outcome): outcome is string => typeof outcome === "string",
        )
      : [],
    metadata: isRecord(courseRow.metadata) ? courseRow.metadata : {},
    premium: courseRow.premium === true,
    hours: asNumber(courseRow.hours, 1),
    lessonCount: asNumber(courseRow.lesson_count),
    publishedAt: asTimestamp(courseRow.published_at),
    units,
  };
}

/**
 * Public course structure. Lesson bodies and quiz questions are intentionally
 * excluded: premium bodies are only readable through a member session.
 */
export async function getPublishedCourseOutline(
  slug: string,
): Promise<PublishedCourseOutline | null> {
  "use cache";
  cacheLife("minutes");
  cacheTag(PUBLISHED_CONTENT_TAG);

  const supabase = getPublicSupabaseClient();

  if (!supabase || !slug) {
    return null;
  }

  try {
    const courseResult = await supabase
      .from("published_courses")
      .select(
        "course_id, slug, title, summary, description, level, skill, outcomes, metadata, premium, hours, lesson_count, published_at",
      )
      .eq("slug", slug)
      .maybeSingle();

    if (courseResult.error || !isRecord(courseResult.data)) {
      return null;
    }

    const courseId = asString(courseResult.data.course_id);

    if (!courseId) {
      return null;
    }

    const unitsResult = await supabase
      .from("published_units")
      .select("id, title, description, sort_order")
      .eq("course_id", courseId)
      .order("sort_order", { ascending: true });

    if (unitsResult.error) {
      return null;
    }

    const outlineResult = await supabase.rpc("get_published_lesson_outline", {
      p_course_slug: slug,
    });

    let lessonRows: readonly unknown[] = [];

    if (!outlineResult.error && Array.isArray(outlineResult.data)) {
      lessonRows = outlineResult.data;
    } else {
      // Older installs without the Phase 8 migration still get public outline
      // metadata. The application still enforces premium access on its own.
      const fallback = await supabase
        .from("published_lessons")
        .select("id, unit_id, slug, title, summary, objective, minutes, sort_order")
        .eq("course_id", courseId)
        .order("sort_order", { ascending: true });

      if (fallback.error) {
        return null;
      }

      lessonRows = fallback.data ?? [];
    }

    return mapPublishedCourseOutline(
      courseResult.data,
      unitsResult.data ?? [],
      lessonRows,
    );
  } catch {
    return null;
  }
}

/**
 * Loads the full lesson body through the caller's Supabase client. The Phase 8
 * row-level policy returns no premium rows unless the caller has an active
 * membership, so this is a second line of defence after the application check.
 */
export async function getPublishedLessonBody(
  courseSlug: string,
  lessonSlug: string,
  supabase: SupabaseClient,
): Promise<PublishedLessonBody | null> {
  if (!courseSlug || !lessonSlug) {
    return null;
  }

  try {
    const courseResult = await supabase
      .from("published_courses")
      .select("course_id")
      .eq("slug", courseSlug)
      .maybeSingle();

    if (courseResult.error || !isRecord(courseResult.data)) {
      return null;
    }

    const courseId = asString(courseResult.data.course_id);

    if (!courseId) {
      return null;
    }

    const { data, error } = await supabase
      .from("published_lessons")
      .select("blocks, questions")
      .eq("course_id", courseId)
      .eq("slug", lessonSlug)
      .maybeSingle();

    if (error || !isRecord(data)) {
      return null;
    }

    return {
      blocks: asBlocks(data.blocks),
      questions: asPublicQuestions(data.questions),
    };
  } catch {
    return null;
  }
}

export async function getPublishedCourseList(): Promise<Course[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag(PUBLISHED_CONTENT_TAG);

  const supabase = getPublicSupabaseClient();

  if (!supabase) {
    return [];
  }

  try {
    const { data, error } = await supabase
      .from("published_courses")
      .select(
        "slug, title, summary, level, skill, hours, lesson_count, premium, published_at",
      )
      .order("published_at", { ascending: false });

    if (error || !Array.isArray(data)) {
      return [];
    }

    return data.flatMap((row) => {
      if (!isRecord(row)) {
        return [];
      }

      const slug = asString(row.slug);
      const title = asString(row.title);
      const level = asLevel(row.level);
      const skill = asSkill(row.skill);

      if (!slug || !title || !level || !skill) {
        return [];
      }

      return [
        {
          slug,
          title,
          summary: asString(row.summary),
          level,
          skill,
          lessons: asNumber(row.lesson_count),
          hours: asNumber(row.hours, 1),
          premium: row.premium === true,
        } satisfies Course,
      ];
    });
  } catch {
    return [];
  }
}

function publishedContentToDetail(
  content: PublishedCourseOutline,
): CourseDetail {
  let number = 0;

  const units = content.units.map((unit) => ({
    title: unit.title,
    description: unit.description || undefined,
    lessons: unit.lessons.map((lesson) => {
      number += 1;

      return {
        title: lesson.title,
        number,
        minutes: lesson.minutes,
        slug: lesson.slug,
      };
    }),
  }));

  return {
    course: {
      slug: content.slug,
      title: content.title,
      summary: content.summary,
      level: content.level,
      skill: content.skill,
      lessons: content.lessonCount,
      hours: content.hours,
      premium: content.premium,
    },
    overview: content.description || content.summary,
    outcomes: content.outcomes,
    units,
    lessonMinutes:
      content.lessonCount > 0
        ? Math.round((content.hours * 60) / content.lessonCount)
        : 0,
    hasFullContent: true,
  };
}

function isStaticCourseSuppressed(state: ContentSlugState | undefined) {
  if (!state) {
    return false;
  }

  if (state.status === "archived") {
    return true;
  }

  return state.status === "draft" && state.lastPublishedAt !== null;
}

export async function resolveCourseDetail(
  slug: string,
): Promise<ResolvedCourse | null> {
  "use cache";
  cacheLife("minutes");
  cacheTag(PUBLISHED_CONTENT_TAG);

  if (!slug) {
    return null;
  }

  const states = await getContentSlugStates();
  const state = states.find((candidate) => candidate.slug === slug);
  const staticDetail = getCourseDetail(slug);

  if (state?.status === "published") {
    const content = await getPublishedCourseOutline(slug);

    if (content) {
      return {
        detail: publishedContentToDetail(content),
        source: "published",
        content,
      };
    }

    return staticDetail
      ? { detail: staticDetail, source: "static", content: null }
      : null;
  }

  if (isStaticCourseSuppressed(state)) {
    return null;
  }

  return staticDetail
    ? { detail: staticDetail, source: "static", content: null }
    : null;
}

/**
 * Cached lesson outline: metadata, ordering and navigation only. It is safe to
 * serve to guests because it contains no blocks or quiz questions.
 */
export async function resolveLessonOutline(
  courseSlug: string,
  lessonSlug: string,
): Promise<ResolvedLesson | null> {
  "use cache";
  cacheLife("minutes");
  cacheTag(PUBLISHED_CONTENT_TAG);

  const course = await resolveCourseDetail(courseSlug);

  if (!course) {
    return null;
  }

  if (course.source === "published" && course.content) {
    const flat = course.content.units.flatMap((unit, unitIndex) =>
      unit.lessons.map((lesson) => ({ unit, unitIndex, lesson })),
    );
    const index = flat.findIndex((item) => item.lesson.slug === lessonSlug);

    if (index === -1) {
      return null;
    }

    const current = flat[index];
    const previous = index > 0 ? flat[index - 1] : null;
    const next = index < flat.length - 1 ? flat[index + 1] : null;

    return {
      course,
      lesson: {
        slug: current.lesson.slug,
        title: current.lesson.title,
        summary: current.lesson.summary,
        objective: current.lesson.objective,
        minutes: current.lesson.minutes,
      },
      unitTitle: current.unit.title,
      unitIndex: current.unitIndex,
      number: index + 1,
      totalLessons: flat.length,
      previous: previous
        ? { slug: previous.lesson.slug, title: previous.lesson.title }
        : null,
      next: next
        ? { slug: next.lesson.slug, title: next.lesson.title }
        : null,
    };
  }

  const entry = getLessonEntry(courseSlug, lessonSlug);

  if (!entry) {
    return null;
  }

  const entries = getLessonEntries(courseSlug);
  const index = entries.findIndex(
    (candidate) => candidate.lesson.slug === lessonSlug,
  );
  const previous = index > 0 ? entries[index - 1] : null;
  const next =
    index >= 0 && index < entries.length - 1 ? entries[index + 1] : null;

  return {
    course,
    lesson: {
      slug: entry.lesson.slug,
      title: entry.lesson.title,
      summary: entry.lesson.summary,
      objective: entry.lesson.objective,
      minutes: entry.lesson.minutes,
    },
    unitTitle: entry.unit.title,
    unitIndex: entry.unitIndex,
    number: entry.number,
    totalLessons: entries.length,
    previous: previous
      ? { slug: previous.lesson.slug, title: previous.lesson.title }
      : null,
    next: next
      ? { slug: next.lesson.slug, title: next.lesson.title }
      : null,
  };
}

/**
 * Full static lesson body for authored built-in courses. Built-in interactive
 * lessons are all free today; callers must still check the course access policy
 * before rendering this content.
 */
export function getStaticLessonBody(
  courseSlug: string,
  lessonSlug: string,
): PublishedLessonBody | null {
  const entry = getLessonEntry(courseSlug, lessonSlug);

  if (!entry) {
    return null;
  }

  return {
    blocks: entry.lesson.blocks,
    questions: toPublicQuizQuestions(entry.lesson.quiz),
  };
}

export async function getCatalogCourses(): Promise<Course[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag(PUBLISHED_CONTENT_TAG);

  const [published, states] = await Promise.all([
    getPublishedCourseList(),
    getContentSlugStates(),
  ]);

  const statesBySlug = new Map(states.map((state) => [state.slug, state]));
  const publishedBySlug = new Map(
    published.map((course) => [course.slug, course]),
  );
  const staticSlugs = new Set(courses.map((course) => course.slug));
  const merged: Course[] = [];

  for (const course of courses) {
    const state = statesBySlug.get(course.slug);
    const publishedCourse = publishedBySlug.get(course.slug);

    if (publishedCourse) {
      merged.push(publishedCourse);
    } else if (!isStaticCourseSuppressed(state)) {
      merged.push(course);
    }
  }

  for (const course of published) {
    if (!staticSlugs.has(course.slug)) {
      merged.push(course);
    }
  }

  return merged;
}

export async function getPublicCourseSlugs(): Promise<string[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag(PUBLISHED_CONTENT_TAG);

  const catalog = await getCatalogCourses();

  return catalog.map((course) => course.slug);
}

export async function getPublicLessonParams(): Promise<
  Array<{ slug: string; lessonSlug: string }>
> {
  "use cache";
  cacheLife("minutes");
  cacheTag(PUBLISHED_CONTENT_TAG);

  const catalog = await getCatalogCourses();
  const params: Array<{ slug: string; lessonSlug: string }> = [];

  for (const course of catalog) {
    const resolved = await resolveCourseDetail(course.slug);

    if (!resolved) {
      continue;
    }

    if (resolved.source === "published" && resolved.content) {
      for (const unit of resolved.content.units) {
        for (const lesson of unit.lessons) {
          params.push({ slug: course.slug, lessonSlug: lesson.slug });
        }
      }
    } else {
      for (const entry of getLessonEntries(course.slug)) {
        params.push({ slug: course.slug, lessonSlug: entry.lesson.slug });
      }
    }
  }

  return params;
}
