"use server";

import { revalidatePath, updateTag } from "next/cache";
import { redirect } from "next/navigation";
import type { SupabaseClient } from "@supabase/supabase-js";

import { courses } from "@/data/courses";
import { getAllCourseSlugs } from "@/data/course-details";
import { getAuthoredCourse, getAuthoredCourseSlugs } from "@/data/lessons";
import { PUBLISHED_CONTENT_TAG } from "@/lib/content/published";
import { isSchemaSetupError } from "@/lib/progress/errors";

import { getAdminContext } from "./auth";
import type { AdminActionState } from "./types";
import {
  normalizeSlug,
  parseMetadataJson,
  parseOutcomeLines,
  validateCourseFields,
  validateLessonFields,
  validateUnitFields,
  type CourseDraftValues,
  type LessonDraftValues,
  type UnitDraftValues,
} from "./validation";

const GENERIC_SAVE_ERROR =
  "We couldn't save that change. Refresh the page and try again.";
const GENERIC_LOAD_ERROR =
  "We couldn't load that record. Refresh the page and try again.";
const INVALID_REQUEST = "That request was incomplete. Refresh the page and try again.";
const SCHEMA_ERROR =
  "The content tables are not installed in this Supabase project yet. Apply the Phase 7 migrations first.";
const ARCHIVED_ERROR =
  "Restore this course from the archive before editing its content.";
const CHECK_FIELDS = "Check the highlighted fields and try again.";

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const staticCourseSlugs = new Set(getAllCourseSlugs());
const authoredStaticSlugs = new Set(getAuthoredCourseSlugs());

type Parsed<T> =
  | { ok: true; value: T }
  | { ok: false; state: AdminActionState };

type CourseGuard = {
  id: string;
  slug: string;
  title: string;
  status: "draft" | "published" | "archived";
  lastPublishedAt: string | null;
};

function errorState(
  message: string,
  fieldErrors?: Record<string, string>,
  warnings?: string[],
): AdminActionState {
  return {
    status: "error",
    message,
    ...(fieldErrors ? { fieldErrors } : {}),
    ...(warnings && warnings.length > 0 ? { warnings } : {}),
  };
}

function successState(
  message: string,
  warnings?: string[],
): AdminActionState {
  return {
    status: "success",
    message,
    ...(warnings && warnings.length > 0 ? { warnings } : {}),
  };
}

function readText(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

function readId(formData: FormData, key: string): string | null {
  const value = readText(formData, key).trim();
  return UUID_PATTERN.test(value) ? value : null;
}

function readDirection(formData: FormData): "up" | "down" | null {
  const value = readText(formData, "direction");
  return value === "up" || value === "down" ? value : null;
}

function parseJsonField(
  formData: FormData,
  key: string,
  label: string,
): Parsed<unknown> {
  const raw = readText(formData, key).trim() || "[]";

  try {
    return { ok: true, value: JSON.parse(raw) as unknown };
  } catch {
    return {
      ok: false,
      state: errorState(CHECK_FIELDS, {
        [key]: `${label} is not valid JSON.`,
      }),
    };
  }
}

function parseCourseForm(formData: FormData): Parsed<CourseDraftValues> {
  const metadata = parseMetadataJson(formData.get("metadata"));

  if (!metadata.ok) {
    return {
      ok: false,
      state: errorState(CHECK_FIELDS, metadata.errors),
    };
  }

  const result = validateCourseFields({
    slug: formData.get("slug"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    description: formData.get("description"),
    outcomes: parseOutcomeLines(formData.get("outcomes")),
    level: formData.get("level"),
    skill: formData.get("skill"),
    premium: formData.get("premium") === "on",
    hours: formData.get("hours"),
    metadata: metadata.value,
  });

  if (!result.ok) {
    return { ok: false, state: errorState(CHECK_FIELDS, result.errors) };
  }

  return { ok: true, value: result.value };
}

function parseUnitForm(formData: FormData): Parsed<UnitDraftValues> {
  const result = validateUnitFields({
    title: formData.get("title"),
    description: formData.get("description"),
    status: formData.get("status"),
  });

  if (!result.ok) {
    return { ok: false, state: errorState(CHECK_FIELDS, result.errors) };
  }

  return { ok: true, value: result.value };
}

function parseLessonForm(formData: FormData): Parsed<LessonDraftValues> {
  const blocksJson = parseJsonField(formData, "blocks", "Lesson content");

  if (!blocksJson.ok) {
    return blocksJson;
  }

  const quizJson = parseJsonField(formData, "quiz", "Quiz");

  if (!quizJson.ok) {
    return quizJson;
  }

  const result = validateLessonFields({
    slug: formData.get("slug"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    objective: formData.get("objective"),
    minutes: formData.get("minutes"),
    status: formData.get("status"),
    blocks: blocksJson.value,
    quiz: quizJson.value,
  });

  if (!result.ok) {
    return {
      ok: false,
      state: errorState(CHECK_FIELDS, result.errors),
    };
  }

  return { ok: true, value: result.value };
}

function dbMessage(
  error: { code?: string; message?: string } | null | undefined,
  fallback: string,
): string {
  if (isSchemaSetupError(error)) {
    return SCHEMA_ERROR;
  }

  const message = error?.message?.trim();

  if (message && message.length <= 320) {
    return message;
  }

  return fallback;
}

async function loadCourse(
  supabase: SupabaseClient,
  courseId: string,
): Promise<{ ok: true; course: CourseGuard } | { ok: false; state: AdminActionState }> {
  try {
    const { data, error } = await supabase
      .from("content_courses")
      .select("id, slug, title, status, last_published_at")
      .eq("id", courseId)
      .maybeSingle();

    if (error) {
      return { ok: false, state: errorState(dbMessage(error, GENERIC_LOAD_ERROR)) };
    }

    if (
      !data ||
      typeof data.id !== "string" ||
      typeof data.slug !== "string" ||
      typeof data.title !== "string" ||
      (data.status !== "draft" &&
        data.status !== "published" &&
        data.status !== "archived")
    ) {
      return {
        ok: false,
        state: errorState("That course no longer exists."),
      };
    }

    return {
      ok: true,
      course: {
        id: data.id,
        slug: data.slug,
        title: data.title,
        status: data.status,
        lastPublishedAt:
          typeof data.last_published_at === "string"
            ? data.last_published_at
            : null,
      },
    };
  } catch {
    return { ok: false, state: errorState(GENERIC_LOAD_ERROR) };
  }
}

async function loadEditableCourse(
  supabase: SupabaseClient,
  courseId: string,
): Promise<{ ok: true; course: CourseGuard } | { ok: false; state: AdminActionState }> {
  const result = await loadCourse(supabase, courseId);

  if (!result.ok) {
    return result;
  }

  if (result.course.status === "archived") {
    return { ok: false, state: errorState(ARCHIVED_ERROR) };
  }

  return result;
}

function revalidateAdmin(courseId?: string) {
  revalidatePath("/admin");
  revalidatePath("/admin/courses");
  if (courseId) {
    revalidatePath(`/admin/courses/${courseId}`);
  }
}

function revalidatePublic(slug: string) {
  updateTag(PUBLISHED_CONTENT_TAG);
  revalidatePath("/");
  revalidatePath("/courses");
  revalidatePath(`/courses/${slug}`);
  revalidatePath("/dashboard");
}

async function findManagedSlug(
  supabase: SupabaseClient,
  slug: string,
  excludeId?: string,
): Promise<{ ok: true; exists: boolean } | { ok: false; state: AdminActionState }> {
  let query = supabase.from("content_courses").select("id").eq("slug", slug);

  if (excludeId) {
    query = query.neq("id", excludeId);
  }

  const { data, error } = await query.maybeSingle();

  if (error) {
    return { ok: false, state: errorState(dbMessage(error, GENERIC_SAVE_ERROR)) };
  }

  return { ok: true, exists: Boolean(data) };
}

// Courses ---------------------------------------------------------------------

export async function createCourseAction(
  _previous: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  const context = await getAdminContext();

  if (!context.ok) {
    return context.state;
  }

  const parsed = parseCourseForm(formData);

  if (!parsed.ok) {
    return parsed.state;
  }

  const values = parsed.value;

  if (authoredStaticSlugs.has(values.slug)) {
    return errorState(CHECK_FIELDS, {
      slug:
        "That URL belongs to a built-in interactive course. Import the built-in content instead of creating a duplicate.",
    });
  }

  const duplicate = await findManagedSlug(context.supabase, values.slug);

  if (!duplicate.ok) {
    return duplicate.state;
  }

  if (duplicate.exists) {
    return errorState(CHECK_FIELDS, {
      slug: "A managed course already uses this URL.",
    });
  }

  try {
    const { data, error } = await context.supabase
      .from("content_courses")
      .insert({
        slug: values.slug,
        title: values.title,
        summary: values.summary,
        description: values.description,
        level: values.level,
        skill: values.skill,
        outcomes: values.outcomes,
        metadata: values.metadata,
        premium: values.premium,
        hours: values.hours,
        status: "draft",
        created_by: context.userId,
      })
      .select("id")
      .single();

    if (error || !data || typeof data.id !== "string") {
      if (error?.code === "23505") {
        return errorState(CHECK_FIELDS, {
          slug: "A managed course already uses this URL.",
        });
      }

      return errorState(dbMessage(error, GENERIC_SAVE_ERROR));
    }

    revalidateAdmin(data.id);
    redirect(`/admin/courses/${data.id}?created=1`);
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "digest" in error &&
      typeof (error as { digest?: unknown }).digest === "string" &&
      (error as { digest: string }).digest.startsWith("NEXT_REDIRECT")
    ) {
      throw error;
    }

    return errorState(GENERIC_SAVE_ERROR);
  }
}

export async function updateCourseAction(
  _previous: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  const context = await getAdminContext();

  if (!context.ok) {
    return context.state;
  }

  const courseId = readId(formData, "courseId");

  if (!courseId) {
    return errorState(INVALID_REQUEST);
  }

  const parsed = parseCourseForm(formData);

  if (!parsed.ok) {
    return parsed.state;
  }

  const values = parsed.value;
  const loaded = await loadEditableCourse(context.supabase, courseId);

  if (!loaded.ok) {
    return loaded.state;
  }

  const slugChanged = values.slug !== loaded.course.slug;

  if (slugChanged && loaded.course.lastPublishedAt) {
    return errorState(CHECK_FIELDS, {
      slug:
        "The course URL is locked after the first publish so student links keep working.",
    });
  }

  if (slugChanged && authoredStaticSlugs.has(values.slug)) {
    return errorState(CHECK_FIELDS, {
      slug:
        "That URL belongs to a built-in interactive course. Choose a different URL.",
    });
  }

  const duplicate = await findManagedSlug(
    context.supabase,
    values.slug,
    courseId,
  );

  if (!duplicate.ok) {
    return duplicate.state;
  }

  if (duplicate.exists) {
    return errorState(CHECK_FIELDS, {
      slug: "Another managed course already uses this URL.",
    });
  }

  try {
    const { error } = await context.supabase
      .from("content_courses")
      .update({
        slug: values.slug,
        title: values.title,
        summary: values.summary,
        description: values.description,
        level: values.level,
        skill: values.skill,
        outcomes: values.outcomes,
        metadata: values.metadata,
        premium: values.premium,
        hours: values.hours,
      })
      .eq("id", courseId);

    if (error) {
      if (error.code === "23505") {
        return errorState(CHECK_FIELDS, {
          slug: "Another managed course already uses this URL.",
        });
      }

      return errorState(dbMessage(error, GENERIC_SAVE_ERROR));
    }

    revalidateAdmin(courseId);

    return successState(
      "Course details saved.",
      loaded.course.status === "published"
        ? [
            "This course is published. The public pages keep showing the last published version until you publish again.",
          ]
        : undefined,
    );
  } catch {
    return errorState(GENERIC_SAVE_ERROR);
  }
}

export async function publishCourseAction(
  _previous: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  const context = await getAdminContext();

  if (!context.ok) {
    return context.state;
  }

  const courseId = readId(formData, "courseId");

  if (!courseId) {
    return errorState(INVALID_REQUEST);
  }

  const loaded = await loadCourse(context.supabase, courseId);

  if (!loaded.ok) {
    return loaded.state;
  }

  try {
    const { error } = await context.supabase.rpc("publish_content_course", {
      p_course_id: courseId,
    });

    if (error) {
      return errorState(dbMessage(error, GENERIC_SAVE_ERROR));
    }

    revalidatePublic(loaded.course.slug);
    revalidateAdmin(courseId);

    return successState(
      `Published "${loaded.course.title}". Public pages now use this version.`,
    );
  } catch {
    return errorState(GENERIC_SAVE_ERROR);
  }
}

export async function unpublishCourseAction(
  _previous: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  const context = await getAdminContext();

  if (!context.ok) {
    return context.state;
  }

  const courseId = readId(formData, "courseId");

  if (!courseId) {
    return errorState(INVALID_REQUEST);
  }

  const loaded = await loadCourse(context.supabase, courseId);

  if (!loaded.ok) {
    return loaded.state;
  }

  try {
    const { error } = await context.supabase.rpc(
      "unpublish_content_course",
      { p_course_id: courseId },
    );

    if (error) {
      return errorState(dbMessage(error, GENERIC_SAVE_ERROR));
    }

    revalidatePublic(loaded.course.slug);
    revalidateAdmin(courseId);

    return successState(
      `Unpublished "${loaded.course.title}". It is no longer visible on public pages.`,
      staticCourseSlugs.has(loaded.course.slug)
        ? [
            "This URL also belongs to built-in content. Because the course was published from the admin workspace, unpublishing hides that URL instead of restoring the built-in version.",
          ]
        : undefined,
    );
  } catch {
    return errorState(GENERIC_SAVE_ERROR);
  }
}

export async function archiveCourseAction(
  _previous: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  const context = await getAdminContext();

  if (!context.ok) {
    return context.state;
  }

  const courseId = readId(formData, "courseId");

  if (!courseId) {
    return errorState(INVALID_REQUEST);
  }

  const loaded = await loadCourse(context.supabase, courseId);

  if (!loaded.ok) {
    return loaded.state;
  }

  try {
    const { error } = await context.supabase.rpc("archive_content_course", {
      p_course_id: courseId,
    });

    if (error) {
      return errorState(dbMessage(error, GENERIC_SAVE_ERROR));
    }

    revalidatePublic(loaded.course.slug);
    revalidateAdmin(courseId);

    return successState(
      `Archived "${loaded.course.title}". Its student progress and quiz attempts are kept.`,
      staticCourseSlugs.has(loaded.course.slug)
        ? [
            "The built-in course at this URL stays hidden while the archive entry exists.",
          ]
        : undefined,
    );
  } catch {
    return errorState(GENERIC_SAVE_ERROR);
  }
}

export async function restoreCourseAction(
  _previous: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  const context = await getAdminContext();

  if (!context.ok) {
    return context.state;
  }

  const courseId = readId(formData, "courseId");

  if (!courseId) {
    return errorState(INVALID_REQUEST);
  }

  const loaded = await loadCourse(context.supabase, courseId);

  if (!loaded.ok) {
    return loaded.state;
  }

  try {
    const { error } = await context.supabase.rpc("restore_content_course", {
      p_course_id: courseId,
    });

    if (error) {
      return errorState(dbMessage(error, GENERIC_SAVE_ERROR));
    }

    revalidateAdmin(courseId);

    return successState(
      `Restored "${loaded.course.title}" to draft. Preview it, then publish when ready.`,
    );
  } catch {
    return errorState(GENERIC_SAVE_ERROR);
  }
}

export async function markCourseReadyAction(
  _previous: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  const context = await getAdminContext();

  if (!context.ok) {
    return context.state;
  }

  const courseId = readId(formData, "courseId");

  if (!courseId) {
    return errorState(INVALID_REQUEST);
  }

  const loaded = await loadEditableCourse(context.supabase, courseId);

  if (!loaded.ok) {
    return loaded.state;
  }

  try {
    const { data, error } = await context.supabase.rpc(
      "mark_content_course_ready",
      { p_course_id: courseId },
    );

    if (error) {
      return errorState(dbMessage(error, GENERIC_SAVE_ERROR));
    }

    revalidateAdmin(courseId);

    const count = typeof data === "number" ? data : 0;

    return successState(
      `${count} ${count === 1 ? "lesson" : "lessons"} marked ready. Check the preview, then publish the course.`,
    );
  } catch {
    return errorState(GENERIC_SAVE_ERROR);
  }
}

export async function importBuiltInCourseAction(
  _previous: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  const context = await getAdminContext();

  if (!context.ok) {
    return context.state;
  }

  const slug = normalizeSlug(readText(formData, "slug"));
  const course = courses.find((candidate) => candidate.slug === slug);
  const authored = getAuthoredCourse(slug);

  if (!course || !authored) {
    return errorState("That built-in course could not be found.");
  }

  const payload = {
    slug: course.slug,
    title: course.title,
    summary: course.summary,
    description: authored.overview,
    level: course.level.toUpperCase(),
    skill: course.skill,
    outcomes: authored.outcomes,
    metadata: {},
    premium: course.premium,
    hours: course.hours,
    units: authored.units.map((unit) => ({
      title: unit.title,
      description: unit.description ?? "",
      lessons: unit.lessons.map((lesson) => ({
        slug: lesson.slug,
        title: lesson.title,
        summary: lesson.summary,
        objective: lesson.objective,
        minutes: lesson.minutes,
        blocks: lesson.blocks,
        quiz: lesson.quiz,
      })),
    })),
  };

  try {
    const { data, error } = await context.supabase.rpc(
      "import_content_course",
      { p_course: payload },
    );

    if (error || typeof data !== "string") {
      return errorState(
        dbMessage(
          error,
          "We couldn't import that course. It may already have units.",
        ),
      );
    }

    revalidateAdmin(data);
    redirect(`/admin/courses/${data}?imported=1`);
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "digest" in error &&
      typeof (error as { digest?: unknown }).digest === "string" &&
      (error as { digest: string }).digest.startsWith("NEXT_REDIRECT")
    ) {
      throw error;
    }

    return errorState(GENERIC_SAVE_ERROR);
  }
}

// Units -----------------------------------------------------------------------

export async function createUnitAction(
  _previous: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  const context = await getAdminContext();

  if (!context.ok) {
    return context.state;
  }

  const courseId = readId(formData, "courseId");

  if (!courseId) {
    return errorState(INVALID_REQUEST);
  }

  const loaded = await loadEditableCourse(context.supabase, courseId);

  if (!loaded.ok) {
    return loaded.state;
  }

  const parsed = parseUnitForm(formData);

  if (!parsed.ok) {
    return parsed.state;
  }

  try {
    const orderResult = await context.supabase
      .from("content_units")
      .select("sort_order")
      .eq("course_id", courseId)
      .order("sort_order", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (orderResult.error) {
      return errorState(dbMessage(orderResult.error, GENERIC_SAVE_ERROR));
    }

    const nextOrder =
      typeof orderResult.data?.sort_order === "number"
        ? orderResult.data.sort_order + 1
        : 0;

    const { error } = await context.supabase.from("content_units").insert({
      course_id: courseId,
      title: parsed.value.title,
      description: parsed.value.description,
      status: parsed.value.status,
      sort_order: nextOrder,
    });

    if (error) {
      return errorState(dbMessage(error, GENERIC_SAVE_ERROR));
    }

    revalidateAdmin(courseId);

    return successState("Unit added.");
  } catch {
    return errorState(GENERIC_SAVE_ERROR);
  }
}

export async function updateUnitAction(
  _previous: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  const context = await getAdminContext();

  if (!context.ok) {
    return context.state;
  }

  const courseId = readId(formData, "courseId");
  const unitId = readId(formData, "unitId");

  if (!courseId || !unitId) {
    return errorState(INVALID_REQUEST);
  }

  const loaded = await loadEditableCourse(context.supabase, courseId);

  if (!loaded.ok) {
    return loaded.state;
  }

  const parsed = parseUnitForm(formData);

  if (!parsed.ok) {
    return parsed.state;
  }

  try {
    const { data, error } = await context.supabase
      .from("content_units")
      .update({
        title: parsed.value.title,
        description: parsed.value.description,
        status: parsed.value.status,
      })
      .eq("id", unitId)
      .eq("course_id", courseId)
      .select("id")
      .maybeSingle();

    if (error) {
      return errorState(dbMessage(error, GENERIC_SAVE_ERROR));
    }

    if (!data) {
      return errorState("That unit no longer exists.");
    }

    revalidateAdmin(courseId);

    return successState(
      "Unit saved.",
      loaded.course.status === "published"
        ? ["Publish the course again to update the public snapshot."]
        : undefined,
    );
  } catch {
    return errorState(GENERIC_SAVE_ERROR);
  }
}

export async function deleteUnitAction(
  _previous: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  const context = await getAdminContext();

  if (!context.ok) {
    return context.state;
  }

  const courseId = readId(formData, "courseId");
  const unitId = readId(formData, "unitId");

  if (!courseId || !unitId) {
    return errorState(INVALID_REQUEST);
  }

  const loaded = await loadEditableCourse(context.supabase, courseId);

  if (!loaded.ok) {
    return loaded.state;
  }

  try {
    const { error } = await context.supabase.rpc("delete_content_unit", {
      p_unit_id: unitId,
    });

    if (error) {
      return errorState(dbMessage(error, GENERIC_SAVE_ERROR));
    }

    revalidateAdmin(courseId);

    return successState(
      "Unit deleted.",
      loaded.course.status === "published"
        ? ["Publish the course again to remove this unit from public pages."]
        : undefined,
    );
  } catch {
    return errorState(GENERIC_SAVE_ERROR);
  }
}

export async function moveUnitAction(
  _previous: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  const context = await getAdminContext();

  if (!context.ok) {
    return context.state;
  }

  const courseId = readId(formData, "courseId");
  const unitId = readId(formData, "unitId");
  const direction = readDirection(formData);

  if (!courseId || !unitId || !direction) {
    return errorState(INVALID_REQUEST);
  }

  const loaded = await loadEditableCourse(context.supabase, courseId);

  if (!loaded.ok) {
    return loaded.state;
  }

  try {
    const { data, error } = await context.supabase
      .from("content_units")
      .select("id, sort_order")
      .eq("course_id", courseId)
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: true });

    if (error || !Array.isArray(data)) {
      return errorState(dbMessage(error, GENERIC_LOAD_ERROR));
    }

    const ids = data
      .map((row) => (typeof row.id === "string" ? row.id : null))
      .filter((id): id is string => id !== null);
    const index = ids.indexOf(unitId);

    if (index === -1) {
      return errorState("That unit no longer exists.");
    }

    const target = direction === "up" ? index - 1 : index + 1;

    if (target < 0 || target >= ids.length) {
      return successState("That unit is already at the edge of the order.");
    }

    [ids[index], ids[target]] = [ids[target], ids[index]];

    const reorder = await context.supabase.rpc("reorder_content_units", {
      p_course_id: courseId,
      p_unit_ids: ids,
    });

    if (reorder.error) {
      return errorState(dbMessage(reorder.error, GENERIC_SAVE_ERROR));
    }

    revalidateAdmin(courseId);
    return successState("Unit order updated.");
  } catch {
    return errorState(GENERIC_SAVE_ERROR);
  }
}

// Lessons ---------------------------------------------------------------------

export async function createLessonAction(
  _previous: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  const context = await getAdminContext();

  if (!context.ok) {
    return context.state;
  }

  const courseId = readId(formData, "courseId");
  const unitId = readId(formData, "unitId");

  if (!courseId || !unitId) {
    return errorState("Choose a unit for this lesson.");
  }

  const loaded = await loadEditableCourse(context.supabase, courseId);

  if (!loaded.ok) {
    return loaded.state;
  }

  const parsed = parseLessonForm(formData);

  if (!parsed.ok) {
    return parsed.state;
  }

  try {
    const unitResult = await context.supabase
      .from("content_units")
      .select("id")
      .eq("id", unitId)
      .eq("course_id", courseId)
      .maybeSingle();

    if (unitResult.error) {
      return errorState(dbMessage(unitResult.error, GENERIC_SAVE_ERROR));
    }

    if (!unitResult.data) {
      return errorState("That unit no longer exists.");
    }

    const duplicate = await context.supabase
      .from("content_lessons")
      .select("id")
      .eq("course_id", courseId)
      .eq("slug", parsed.value.slug)
      .maybeSingle();

    if (duplicate.error) {
      return errorState(dbMessage(duplicate.error, GENERIC_SAVE_ERROR));
    }

    if (duplicate.data) {
      return errorState(CHECK_FIELDS, {
        slug: "A lesson in this course already uses that URL.",
      });
    }

    const orderResult = await context.supabase
      .from("content_lessons")
      .select("sort_order")
      .eq("unit_id", unitId)
      .order("sort_order", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (orderResult.error) {
      return errorState(dbMessage(orderResult.error, GENERIC_SAVE_ERROR));
    }

    const nextOrder =
      typeof orderResult.data?.sort_order === "number"
        ? orderResult.data.sort_order + 1
        : 0;

    const { data, error } = await context.supabase
      .from("content_lessons")
      .insert({
        course_id: courseId,
        unit_id: unitId,
        slug: parsed.value.slug,
        title: parsed.value.title,
        summary: parsed.value.summary,
        objective: parsed.value.objective,
        minutes: parsed.value.minutes,
        blocks: parsed.value.blocks,
        quiz: parsed.value.quiz,
        status: parsed.value.status,
        sort_order: nextOrder,
      })
      .select("id")
      .single();

    if (error || !data || typeof data.id !== "string") {
      if (error?.code === "23505") {
        return errorState(CHECK_FIELDS, {
          slug: "A lesson in this course already uses that URL.",
        });
      }

      return errorState(dbMessage(error, GENERIC_SAVE_ERROR));
    }

    revalidateAdmin(courseId);
    redirect(`/admin/courses/${courseId}/lessons/${data.id}/edit?created=1`);
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "digest" in error &&
      typeof (error as { digest?: unknown }).digest === "string" &&
      (error as { digest: string }).digest.startsWith("NEXT_REDIRECT")
    ) {
      throw error;
    }

    return errorState(GENERIC_SAVE_ERROR);
  }
}

export async function updateLessonAction(
  _previous: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  const context = await getAdminContext();

  if (!context.ok) {
    return context.state;
  }

  const courseId = readId(formData, "courseId");
  const lessonId = readId(formData, "lessonId");

  if (!courseId || !lessonId) {
    return errorState(INVALID_REQUEST);
  }

  const loaded = await loadEditableCourse(context.supabase, courseId);

  if (!loaded.ok) {
    return loaded.state;
  }

  const parsed = parseLessonForm(formData);

  if (!parsed.ok) {
    return parsed.state;
  }

  try {
    const existing = await context.supabase
      .from("content_lessons")
      .select("id, slug")
      .eq("id", lessonId)
      .eq("course_id", courseId)
      .maybeSingle();

    if (existing.error) {
      return errorState(dbMessage(existing.error, GENERIC_LOAD_ERROR));
    }

    if (!existing.data) {
      return errorState("That lesson no longer exists.");
    }

    if (
      typeof existing.data.slug === "string" &&
      existing.data.slug !== parsed.value.slug
    ) {
      return errorState(CHECK_FIELDS, {
        slug:
          "Lesson URLs are permanent so saved progress and shared links keep working.",
      });
    }

    const { error } = await context.supabase
      .from("content_lessons")
      .update({
        title: parsed.value.title,
        summary: parsed.value.summary,
        objective: parsed.value.objective,
        minutes: parsed.value.minutes,
        blocks: parsed.value.blocks,
        quiz: parsed.value.quiz,
        status: parsed.value.status,
      })
      .eq("id", lessonId)
      .eq("course_id", courseId);

    if (error) {
      return errorState(dbMessage(error, GENERIC_SAVE_ERROR));
    }

    revalidateAdmin(courseId);

    return successState(
      "Lesson saved.",
      loaded.course.status === "published"
        ? ["Publish the course again to update the public snapshot."]
        : undefined,
    );
  } catch {
    return errorState(GENERIC_SAVE_ERROR);
  }
}

export async function deleteLessonAction(
  _previous: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  const context = await getAdminContext();

  if (!context.ok) {
    return context.state;
  }

  const courseId = readId(formData, "courseId");
  const lessonId = readId(formData, "lessonId");

  if (!courseId || !lessonId) {
    return errorState(INVALID_REQUEST);
  }

  const loaded = await loadEditableCourse(context.supabase, courseId);

  if (!loaded.ok) {
    return loaded.state;
  }

  try {
    const { error } = await context.supabase.rpc("delete_content_lesson", {
      p_lesson_id: lessonId,
    });

    if (error) {
      return errorState(dbMessage(error, GENERIC_SAVE_ERROR));
    }

    revalidateAdmin(courseId);
    redirect(`/admin/courses/${courseId}?lessonDeleted=1`);
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "digest" in error &&
      typeof (error as { digest?: unknown }).digest === "string" &&
      (error as { digest: string }).digest.startsWith("NEXT_REDIRECT")
    ) {
      throw error;
    }

    return errorState(GENERIC_SAVE_ERROR);
  }
}

export async function moveLessonAction(
  _previous: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  const context = await getAdminContext();

  if (!context.ok) {
    return context.state;
  }

  const courseId = readId(formData, "courseId");
  const unitId = readId(formData, "unitId");
  const lessonId = readId(formData, "lessonId");
  const direction = readDirection(formData);

  if (!courseId || !unitId || !lessonId || !direction) {
    return errorState(INVALID_REQUEST);
  }

  const loaded = await loadEditableCourse(context.supabase, courseId);

  if (!loaded.ok) {
    return loaded.state;
  }

  try {
    const { data, error } = await context.supabase
      .from("content_lessons")
      .select("id, sort_order")
      .eq("unit_id", unitId)
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: true });

    if (error || !Array.isArray(data)) {
      return errorState(dbMessage(error, GENERIC_LOAD_ERROR));
    }

    const ids = data
      .map((row) => (typeof row.id === "string" ? row.id : null))
      .filter((id): id is string => id !== null);
    const index = ids.indexOf(lessonId);

    if (index === -1) {
      return errorState("That lesson no longer exists in this unit.");
    }

    const target = direction === "up" ? index - 1 : index + 1;

    if (target < 0 || target >= ids.length) {
      return successState("That lesson is already at the edge of the order.");
    }

    [ids[index], ids[target]] = [ids[target], ids[index]];

    const reorder = await context.supabase.rpc("reorder_content_lessons", {
      p_unit_id: unitId,
      p_lesson_ids: ids,
    });

    if (reorder.error) {
      return errorState(dbMessage(reorder.error, GENERIC_SAVE_ERROR));
    }

    revalidateAdmin(courseId);
    return successState("Lesson order updated.");
  } catch {
    return errorState(GENERIC_SAVE_ERROR);
  }
}
