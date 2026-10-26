import type { SupabaseClient } from "@supabase/supabase-js";

import type { CefrLevelId, SkillId } from "@/data/curriculum";
import { isCefrLevelId, isSkillId } from "@/data/curriculum";
import type {
  AdminAuditEntry,
  AdminCourseRecord,
  AdminCourseTree,
  AdminLessonRecord,
  AdminOverviewData,
  AdminUnitRecord,
  ContentCourseStatus,
  ContentLessonStatus,
} from "@/lib/content/types";
import { isSchemaSetupError } from "@/lib/progress/errors";
import {
  isMembershipSource,
  isMembershipStatus,
} from "@/lib/premium/types";

import type {
  AdminCourseListRow,
  AdminMembershipRow,
  AdminMembershipStudent,
  AdminPublishedState,
  AdminQueryResult,
} from "./types";

const OVERVIEW_ERROR =
  "We couldn't load the admin overview from Supabase. Refresh the page to try again.";
const COURSE_LIST_ERROR =
  "We couldn't load the managed courses. Refresh the page to try again.";
const COURSE_ERROR =
  "We couldn't load this course. Refresh the page to try again.";

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
  if (typeof value === "string" && value.length > 0 && !Number.isNaN(Date.parse(value))) {
    return value;
  }

  return null;
}

function asStringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

function asRecord(value: unknown): Record<string, unknown> {
  return isRecord(value) ? value : {};
}

function asLevel(value: unknown): CefrLevelId | null {
  const normalized = asString(value).toLowerCase();
  return isCefrLevelId(normalized) ? normalized : null;
}

function asSkill(value: unknown): SkillId | null {
  const normalized = asString(value).toLowerCase();
  return isSkillId(normalized) ? normalized : null;
}

function asCourseStatus(value: unknown): ContentCourseStatus | null {
  return value === "draft" || value === "published" || value === "archived"
    ? value
    : null;
}

function asLessonStatus(value: unknown): ContentLessonStatus | null {
  return value === "draft" || value === "published" ? value : null;
}

function mapCourseRow(row: unknown): AdminCourseRecord | null {
  if (!isRecord(row)) {
    return null;
  }

  const id = asString(row.id);
  const slug = asString(row.slug);
  const level = asLevel(row.level);
  const skill = asSkill(row.skill);
  const status = asCourseStatus(row.status);

  if (!id || !slug || !level || !skill || !status) {
    return null;
  }

  return {
    id,
    slug,
    title: asString(row.title),
    summary: asString(row.summary),
    description: asString(row.description),
    level,
    skill,
    outcomes: asStringArray(row.outcomes),
    metadata: asRecord(row.metadata),
    premium: row.premium === true,
    hours: asNumber(row.hours, 1),
    status,
    sortOrder: asNumber(row.sort_order),
    lastPublishedAt: asTimestamp(row.last_published_at),
    createdAt: asString(row.created_at),
    updatedAt: asString(row.updated_at),
  };
}

function mapUnitRow(row: unknown): AdminUnitRecord | null {
  if (!isRecord(row)) {
    return null;
  }

  const id = asString(row.id);
  const courseId = asString(row.course_id);
  const status = asLessonStatus(row.status);

  if (!id || !courseId || !status) {
    return null;
  }

  return {
    id,
    courseId,
    title: asString(row.title),
    description: asString(row.description),
    status,
    sortOrder: asNumber(row.sort_order),
    createdAt: asString(row.created_at),
    updatedAt: asString(row.updated_at),
  };
}

function mapLessonRow(row: unknown): AdminLessonRecord | null {
  if (!isRecord(row)) {
    return null;
  }

  const id = asString(row.id);
  const courseId = asString(row.course_id);
  const unitId = asString(row.unit_id);
  const slug = asString(row.slug);
  const status = asLessonStatus(row.status);

  if (!id || !courseId || !unitId || !slug || !status) {
    return null;
  }

  return {
    id,
    courseId,
    unitId,
    slug,
    title: asString(row.title),
    summary: asString(row.summary),
    objective: asString(row.objective),
    minutes: asNumber(row.minutes, 10),
    blocks: Array.isArray(row.blocks) ? (row.blocks as AdminLessonRecord["blocks"]) : [],
    quiz: Array.isArray(row.quiz) ? (row.quiz as AdminLessonRecord["quiz"]) : [],
    status,
    sortOrder: asNumber(row.sort_order),
    createdAt: asString(row.created_at),
    updatedAt: asString(row.updated_at),
  };
}

function mapAuditRow(row: unknown): AdminAuditEntry | null {
  if (!isRecord(row)) {
    return null;
  }

  const id = asString(row.id);
  const createdAt = asTimestamp(row.created_at);

  if (!id || !createdAt) {
    return null;
  }

  return {
    id,
    actorEmail: typeof row.actor_email === "string" ? row.actor_email : null,
    action: asString(row.action),
    entityType: asString(row.entity_type),
    entityId: typeof row.entity_id === "string" ? row.entity_id : null,
    summary: asString(row.summary),
    createdAt,
  };
}

export async function fetchAdminOverview(
  supabase: SupabaseClient,
): Promise<AdminQueryResult<AdminOverviewData>> {
  try {
    const [coursesResult, lessonsResult, snapshotsResult, auditResult] =
      await Promise.all([
        supabase.from("content_courses").select("id, slug, status"),
        supabase.from("content_lessons").select("id, status"),
        supabase.from("published_courses").select("course_id"),
        supabase
          .from("admin_audit_log")
          .select(
            "id, actor_email, action, entity_type, entity_id, summary, created_at",
          )
          .order("created_at", { ascending: false })
          .limit(8),
      ]);

    if (
      coursesResult.error ||
      lessonsResult.error ||
      snapshotsResult.error ||
      auditResult.error
    ) {
      return { status: "error", message: OVERVIEW_ERROR };
    }

    const courses = (coursesResult.data ?? []).filter(isRecord);
    const lessons = (lessonsResult.data ?? []).filter(isRecord);
    const snapshots = snapshotsResult.data ?? [];

    const publishedCourses = courses.filter(
      (course) => course.status === "published",
    ).length;
    const archivedCourses = courses.filter(
      (course) => course.status === "archived",
    ).length;
    const publishedLessons = lessons.filter(
      (lesson) => lesson.status === "published",
    ).length;

    return {
      status: "ok",
      data: {
        counts: {
          totalCourses: courses.length,
          publishedCourses,
          draftCourses: courses.length - publishedCourses - archivedCourses,
          archivedCourses,
          totalLessons: lessons.length,
          publishedLessons,
          draftLessons: lessons.length - publishedLessons,
          publishedSnapshots: snapshots.length,
        },
        recentAudit: (auditResult.data ?? [])
          .map(mapAuditRow)
          .filter((entry): entry is AdminAuditEntry => entry !== null),
        managedSlugs: courses
          .map((course) => asString(course.slug))
          .filter((slug) => slug.length > 0),
      },
    };
  } catch {
    return { status: "error", message: OVERVIEW_ERROR };
  }
}

export async function fetchAdminCourses(
  supabase: SupabaseClient,
): Promise<AdminQueryResult<AdminCourseListRow[]>> {
  try {
    const [coursesResult, unitsResult, lessonsResult, snapshotsResult] =
      await Promise.all([
        supabase.from("content_courses").select("*").order("updated_at", {
          ascending: false,
        }),
        supabase.from("content_units").select("id, course_id, status"),
        supabase.from("content_lessons").select("id, course_id, status"),
        supabase
          .from("published_courses")
          .select("course_id, published_at, lesson_count"),
      ]);

    if (
      coursesResult.error ||
      unitsResult.error ||
      lessonsResult.error ||
      snapshotsResult.error
    ) {
      return { status: "error", message: COURSE_LIST_ERROR };
    }

    const courses = (coursesResult.data ?? [])
      .map(mapCourseRow)
      .filter((course): course is AdminCourseRecord => course !== null);

    const unitStats = new Map<
      string,
      { total: number; published: number }
    >();
    for (const row of unitsResult.data ?? []) {
      if (!isRecord(row) || typeof row.course_id !== "string") {
        continue;
      }
      const current = unitStats.get(row.course_id) ?? {
        total: 0,
        published: 0,
      };
      current.total += 1;
      if (row.status === "published") {
        current.published += 1;
      }
      unitStats.set(row.course_id, current);
    }

    const lessonStats = new Map<
      string,
      { total: number; published: number }
    >();
    for (const row of lessonsResult.data ?? []) {
      if (!isRecord(row) || typeof row.course_id !== "string") {
        continue;
      }
      const current = lessonStats.get(row.course_id) ?? {
        total: 0,
        published: 0,
      };
      current.total += 1;
      if (row.status === "published") {
        current.published += 1;
      }
      lessonStats.set(row.course_id, current);
    }

    const snapshots = new Map<string, { publishedAt: string | null; lessonCount: number }>();
    for (const row of snapshotsResult.data ?? []) {
      if (!isRecord(row) || typeof row.course_id !== "string") {
        continue;
      }
      snapshots.set(row.course_id, {
        publishedAt: asTimestamp(row.published_at),
        lessonCount: asNumber(row.lesson_count),
      });
    }

    return {
      status: "ok",
      data: courses.map((course) => {
        const units = unitStats.get(course.id) ?? { total: 0, published: 0 };
        const lessons = lessonStats.get(course.id) ?? { total: 0, published: 0 };
        const snapshot = snapshots.get(course.id);

        return {
          ...course,
          unitCount: units.total,
          publishedUnitCount: units.published,
          lessonCount: lessons.total,
          publishedLessonCount: lessons.published,
          hasPublishedSnapshot: Boolean(snapshot),
          publishedAt: snapshot?.publishedAt ?? null,
        };
      }),
    };
  } catch {
    return { status: "error", message: COURSE_LIST_ERROR };
  }
}

export async function fetchAdminCourseTree(
  supabase: SupabaseClient,
  courseId: string,
): Promise<AdminQueryResult<AdminCourseTree | null>> {
  try {
    const courseResult = await supabase
      .from("content_courses")
      .select("*")
      .eq("id", courseId)
      .maybeSingle();

    if (courseResult.error) {
      return { status: "error", message: COURSE_ERROR };
    }

    const course = mapCourseRow(courseResult.data);

    if (!course) {
      return { status: "ok", data: null };
    }

    const [unitsResult, lessonsResult] = await Promise.all([
      supabase
        .from("content_units")
        .select("*")
        .eq("course_id", courseId)
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: true }),
      supabase
        .from("content_lessons")
        .select("*")
        .eq("course_id", courseId)
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: true }),
    ]);

    if (unitsResult.error || lessonsResult.error) {
      return { status: "error", message: COURSE_ERROR };
    }

    const lessons = (lessonsResult.data ?? [])
      .map(mapLessonRow)
      .filter((lesson): lesson is AdminLessonRecord => lesson !== null);
    const lessonsByUnit = new Map<string, AdminLessonRecord[]>();

    for (const lesson of lessons) {
      const current = lessonsByUnit.get(lesson.unitId) ?? [];
      current.push(lesson);
      lessonsByUnit.set(lesson.unitId, current);
    }

    const units = (unitsResult.data ?? [])
      .map(mapUnitRow)
      .filter((unit): unit is AdminUnitRecord => unit !== null)
      .map((unit) => ({
        ...unit,
        lessons: lessonsByUnit.get(unit.id) ?? [],
      }));

    return {
      status: "ok",
      data: {
        ...course,
        units,
      },
    };
  } catch {
    return { status: "error", message: COURSE_ERROR };
  }
}

export async function fetchAdminPublishedState(
  supabase: SupabaseClient,
  courseId: string,
): Promise<AdminQueryResult<AdminPublishedState>> {
  try {
    const { data, error } = await supabase
      .from("published_courses")
      .select("published_at, lesson_count")
      .eq("course_id", courseId)
      .maybeSingle();

    if (error) {
      return { status: "error", message: COURSE_ERROR };
    }

    if (!isRecord(data)) {
      return { status: "ok", data: null };
    }

    return {
      status: "ok",
      data: {
        publishedAt: asTimestamp(data.published_at),
        lessonCount: asNumber(data.lesson_count),
      },
    };
  } catch {
    return { status: "error", message: COURSE_ERROR };
  }
}

const MEMBERSHIP_LIST_ERROR =
  "We couldn't load the membership records. Refresh the page to try again.";
const MEMBERSHIP_SCHEMA_ERROR =
  "The Premium membership tables are not installed in this Supabase project yet. Apply supabase/migrations/20261026130000_create_premium_memberships.sql.";

function isMembershipSchemaError(error: {
  code?: string;
  message?: string;
}) {
  return (
    isSchemaSetupError(error) ||
    /admin_list_memberships|admin_lookup_student_email|memberships/i.test(
      error.message ?? "",
    )
  );
}

function asNullableString(value: unknown): string | null {
  return typeof value === "string" && value.length > 0 ? value : null;
}

function mapMembershipRow(row: unknown): AdminMembershipRow | null {
  if (!isRecord(row)) {
    return null;
  }

  const id = asString(row.id);
  const userId = asString(row.user_id);

  if (
    !id ||
    !userId ||
    row.tier !== "premium" ||
    !isMembershipStatus(row.status) ||
    !isMembershipSource(row.source)
  ) {
    return null;
  }

  return {
    id,
    userId,
    email: asNullableString(row.email),
    tier: "premium",
    status: row.status,
    source: row.source,
    provider: asNullableString(row.provider),
    activatedAt: asTimestamp(row.activated_at),
    currentPeriodEnd: asTimestamp(row.current_period_end),
    cancelledAt: asTimestamp(row.cancelled_at),
    grantedByEmail: asNullableString(row.granted_by_email),
    note: asString(row.note).slice(0, 500),
    isActive: row.is_active === true,
    createdAt: asTimestamp(row.created_at),
    updatedAt: asTimestamp(row.updated_at),
  };
}

export async function fetchAdminMemberships(
  supabase: SupabaseClient,
): Promise<AdminQueryResult<AdminMembershipRow[]>> {
  try {
    const { data, error } = await supabase.rpc("admin_list_memberships");

    if (error) {
      return {
        status: "error",
        message: isMembershipSchemaError(error)
          ? MEMBERSHIP_SCHEMA_ERROR
          : MEMBERSHIP_LIST_ERROR,
      };
    }

    if (!Array.isArray(data)) {
      return { status: "ok", data: [] };
    }

    return {
      status: "ok",
      data: data
        .map(mapMembershipRow)
        .filter((row): row is AdminMembershipRow => row !== null),
    };
  } catch {
    return { status: "error", message: MEMBERSHIP_LIST_ERROR };
  }
}

export async function lookupAdminStudentEmail(
  supabase: SupabaseClient,
  email: string,
): Promise<AdminQueryResult<AdminMembershipStudent | null>> {
  try {
    const { data, error } = await supabase.rpc("admin_lookup_student_email", {
      p_email: email,
    });

    if (error) {
      return {
        status: "error",
        message: isMembershipSchemaError(error)
          ? MEMBERSHIP_SCHEMA_ERROR
          : MEMBERSHIP_LIST_ERROR,
      };
    }

    const row = Array.isArray(data) ? data[0] : null;

    if (!isRecord(row)) {
      return { status: "ok", data: null };
    }

    const userId = asString(row.user_id);
    const resolvedEmail = asNullableString(row.email);

    if (!userId || !resolvedEmail) {
      return { status: "ok", data: null };
    }

    return {
      status: "ok",
      data: { userId, email: resolvedEmail },
    };
  } catch {
    return { status: "error", message: MEMBERSHIP_LIST_ERROR };
  }
}
