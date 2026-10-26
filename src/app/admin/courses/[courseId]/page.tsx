import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  CircleDashed,
  ExternalLink,
  Eye,
  FilePlus2,
  PlusCircle,
  ShieldAlert,
  TriangleAlert,
  XCircle,
} from "lucide-react";

import { AdminAccessPanel } from "@/components/admin/admin-access-panel";
import { AdminActionForm } from "@/components/admin/admin-action-form";
import { AdminCourseForm } from "@/components/admin/admin-course-form";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { AdminStatusBadge } from "@/components/admin/admin-status-badge";
import { AdminUnitCreateForm, AdminUnitEditForm } from "@/components/admin/admin-unit-forms";
import { buttonVariants } from "@/components/ui/button";
import { getLevel, getSkill } from "@/data/curriculum";
import {
  archiveCourseAction,
  deleteUnitAction,
  markCourseReadyAction,
  moveLessonAction,
  moveUnitAction,
  publishCourseAction,
  restoreCourseAction,
  unpublishCourseAction,
} from "@/lib/admin/actions";
import { requireAdminPage } from "@/lib/admin/guard";
import {
  fetchAdminCourseTree,
  fetchAdminPublishedState,
} from "@/lib/admin/queries";
import { validateBlocks, validateQuiz } from "@/lib/admin/validation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Course workspace",
  description: "Edit a course, its units and lessons.",
  robots: { index: false, follow: false },
};

type PageParams = Promise<{ courseId: string }>;
type PageSearchParams = Promise<{
  created?: string | string[];
  imported?: string | string[];
  lessonDeleted?: string | string[];
}>;

function hasFlag(value: string | string[] | undefined) {
  return value === "1" || (Array.isArray(value) && value[0] === "1");
}

function formatDateTime(value: string | null) {
  if (!value) {
    return "Never";
  }
  try {
    return `${new Intl.DateTimeFormat("en-GB", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "UTC",
    }).format(new Date(value))} UTC`;
  } catch {
    return value;
  }
}

function ChecklistItem({
  ok,
  label,
  detail,
}: {
  ok: boolean;
  label: string;
  detail: string;
}) {
  const Icon = ok ? CheckCircle2 : CircleDashed;
  return (
    <li className="flex items-start gap-2.5">
      <Icon
        className={cn(
          "mt-0.5 size-4 shrink-0",
          ok ? "text-brand-teal-deep" : "text-amber-700",
        )}
        aria-hidden="true"
      />
      <div>
        <p className="text-xs font-semibold text-brand-navy">{label}</p>
        <p className="mt-0.5 text-[0.68rem] leading-5 text-brand-body">{detail}</p>
      </div>
    </li>
  );
}

export default async function AdminCoursePage({
  params,
  searchParams,
}: {
  params: PageParams;
  searchParams: PageSearchParams;
}) {
  const { courseId } = await params;
  const access = await requireAdminPage(`/admin/courses/${courseId}`);

  if (access.status !== "granted") {
    return <AdminAccessPanel access={access} />;
  }

  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    return (
      <AdminAccessPanel
        access={{
          status: "unconfigured",
          issue: "supabase",
          message:
            "Supabase is not connected. Add your project URL and publishable key to .env.local, then restart the app.",
        }}
      />
    );
  }

  const [treeResult, snapshotResult, flags] = await Promise.all([
    fetchAdminCourseTree(supabase, courseId),
    fetchAdminPublishedState(supabase, courseId),
    searchParams,
  ]);

  if (treeResult.status === "error") {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm leading-6 text-red-800">
        <TriangleAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
        <div>
          <p className="font-semibold">Course unavailable</p>
          <p className="mt-1">{treeResult.message}</p>
        </div>
      </div>
    );
  }

  if (!treeResult.data) {
    notFound();
  }

  const course = treeResult.data;
  const snapshot = snapshotResult.status === "ok" ? snapshotResult.data : null;
  const archived = course.status === "archived";
  const level = getLevel(course.level);
  const skill = getSkill(course.skill);
  const lessonCount = course.units.reduce(
    (count, unit) => count + unit.lessons.length,
    0,
  );
  const publishedLessonCount = course.units.reduce(
    (count, unit) =>
      count + unit.lessons.filter((lesson) => lesson.status === "published").length,
    0,
  );

  const publishedUnits = course.units.filter((unit) => unit.status === "published");
  const publishableLessons = publishedUnits.flatMap((unit) =>
    unit.lessons.filter((lesson) => lesson.status === "published"),
  );
  const invalidPublishedLessons = publishableLessons.filter((lesson) => {
    const blocks = validateBlocks(lesson.blocks);
    const quiz = validateQuiz(lesson.quiz);
    return (
      !blocks.ok ||
      blocks.value.length === 0 ||
      !quiz.ok ||
      quiz.value.length === 0
    );
  });

  const checklist = {
    fields: course.description.trim().length > 0 && course.outcomes.length > 0,
    units: course.units.length > 0 && publishedUnits.length > 0,
    lessons: publishableLessons.length > 0,
    content:
      publishableLessons.length > 0 && invalidPublishedLessons.length === 0,
  };
  const ready = Object.values(checklist).every(Boolean);
  const firstUnitId = course.units[0]?.id;

  return (
    <div>
      <AdminPageHeader
        eyebrow={`${level.label} ${skill.label} course`}
        title={course.title}
        description={course.summary}
        backLink={{ href: "/admin/courses", label: "All courses" }}
        actions={
          <>
            <Link
              href={`/admin/courses/${course.id}/preview`}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-10 rounded-full px-4 text-sm font-semibold",
              )}
            >
              <Eye className="size-4 text-brand-teal-deep" aria-hidden="true" />
              Preview
            </Link>
            {course.status === "published" && snapshot ? (
              <Link
                href={`/courses/${course.slug}`}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-10 rounded-full px-4 text-sm font-semibold",
                )}
              >
                View public page
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </Link>
            ) : null}
            {!archived && firstUnitId ? (
              <Link
                href={`/admin/courses/${course.id}/lessons/new?unit=${firstUnitId}`}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-10 rounded-full px-4 text-sm font-semibold",
                )}
              >
                <FilePlus2 className="size-4" aria-hidden="true" />
                New lesson
              </Link>
            ) : null}
          </>
        }
      />

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <AdminStatusBadge
          tone={
            course.status === "published"
              ? "published"
              : course.status === "archived"
                ? "archived"
                : "draft"
          }
        >
          {course.status}
        </AdminStatusBadge>
        <AdminStatusBadge tone="neutral">{level.label}</AdminStatusBadge>
        <AdminStatusBadge tone="neutral">{skill.label}</AdminStatusBadge>
        {course.premium ? (
          <AdminStatusBadge tone="teal">Premium label</AdminStatusBadge>
        ) : null}
        <span className="font-mono text-[0.68rem] text-brand-body">
          /courses/{course.slug}
        </span>
        <span className="text-[0.68rem] text-brand-body">
          · {course.hours} hours · {course.units.length} units · {lessonCount} lessons
        </span>
      </div>

      {archived ? (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          <ShieldAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          <div>
            <p className="font-semibold">This course is archived</p>
            <p className="mt-1 text-xs leading-5">
              It is hidden from public pages and cannot be edited. Restore it to
              draft from the publishing panel, then make changes and publish when
              ready. Student progress and quiz attempts are preserved.
            </p>
          </div>
        </div>
      ) : null}

      {hasFlag(flags.created) ? (
        <p
          role="status"
          className="mt-5 flex items-center gap-2 rounded-2xl border border-brand-teal/30 bg-brand-teal-soft px-4 py-3 text-sm font-medium text-brand-teal-deep"
        >
          <CheckCircle2 className="size-4 shrink-0" aria-hidden="true" />
          Draft course created. Add units and lessons next.
        </p>
      ) : null}
      {hasFlag(flags.imported) ? (
        <p
          role="status"
          className="mt-5 flex items-center gap-2 rounded-2xl border border-brand-teal/30 bg-brand-teal-soft px-4 py-3 text-sm font-medium text-brand-teal-deep"
        >
          <CheckCircle2 className="size-4 shrink-0" aria-hidden="true" />
          Built-in content imported as drafts. Review it, then mark it ready and
          publish.
        </p>
      ) : null}
      {hasFlag(flags.lessonDeleted) ? (
        <p
          role="status"
          className="mt-5 flex items-center gap-2 rounded-2xl border border-brand-teal/30 bg-brand-teal-soft px-4 py-3 text-sm font-medium text-brand-teal-deep"
        >
          <CheckCircle2 className="size-4 shrink-0" aria-hidden="true" />
          Lesson deleted.
        </p>
      ) : null}

      <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_20rem] xl:items-start">
        <div className="min-w-0 space-y-6">
          <AdminCourseForm course={course} locked={archived} />

          <section className="rounded-2xl border border-brand-line bg-white shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brand-line px-5 py-4">
              <div>
                <h2 className="text-lg font-bold text-brand-navy">
                  Units and lessons
                </h2>
                <p className="mt-0.5 text-xs leading-5 text-brand-body">
                  Order units and lessons, then add content. Published states
                  only affect public pages after the course is published.
                </p>
              </div>
              {!archived && firstUnitId ? (
                <Link
                  href={`/admin/courses/${course.id}/lessons/new?unit=${firstUnitId}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-brand-line bg-white px-3 py-1.5 text-xs font-semibold text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                >
                  <PlusCircle className="size-3.5 text-brand-teal-deep" aria-hidden="true" />
                  Add lesson
                </Link>
              ) : null}
            </div>

            {course.units.length === 0 ? (
              <div className="px-5 py-10 text-center">
                <p className="font-display text-xl font-medium text-brand-navy">
                  This course has no units yet
                </p>
                <p className="mx-auto mt-1 max-w-md text-sm leading-6 text-brand-body">
                  Add the first unit below. A unit groups lessons in the course
                  outline, for example “Getting started” or “At work”.
                </p>
              </div>
            ) : (
              <div className="space-y-4 p-4 sm:p-5">
                {course.units.map((unit, unitIndex) => (
                  <article
                    key={unit.id}
                    className="overflow-hidden rounded-2xl border border-brand-line"
                  >
                    <div className="flex flex-wrap items-start gap-3 bg-brand-mist/60 px-4 py-3">
                      <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white text-xs font-bold text-brand-navy shadow-sm">
                        {unitIndex + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-sm font-bold text-brand-navy">
                            {unit.title}
                          </h3>
                          <AdminStatusBadge
                            tone={unit.status === "published" ? "published" : "draft"}
                          >
                            {unit.status}
                          </AdminStatusBadge>
                        </div>
                        <p className="mt-0.5 text-[0.68rem] text-brand-body">
                          {unit.lessons.length}{" "}
                          {unit.lessons.length === 1 ? "lesson" : "lessons"} ·{" "}
                          {
                            unit.lessons.filter(
                              (lesson) => lesson.status === "published",
                            ).length
                          }{" "}
                          published
                        </p>
                      </div>
                      {!archived ? (
                        <div className="flex flex-wrap items-center gap-1.5">
                          <AdminActionForm
                            action={moveUnitAction}
                            hiddenFields={{
                              courseId: course.id,
                              unitId: unit.id,
                              direction: "up",
                            }}
                            submitLabel="Up"
                            submitVariant="outline"
                            submitSize="xs"
                            feedback="after"
                            disabled={unitIndex === 0}
                            buttonClassName="px-2"
                          />
                          <AdminActionForm
                            action={moveUnitAction}
                            hiddenFields={{
                              courseId: course.id,
                              unitId: unit.id,
                              direction: "down",
                            }}
                            submitLabel="Down"
                            submitVariant="outline"
                            submitSize="xs"
                            feedback="after"
                            disabled={unitIndex === course.units.length - 1}
                            buttonClassName="px-2"
                          />
                          <AdminActionForm
                            action={deleteUnitAction}
                            hiddenFields={{ courseId: course.id, unitId: unit.id }}
                            submitLabel="Delete"
                            submitVariant="destructive"
                            submitSize="xs"
                            confirmMessage={`Delete the unit "${unit.title}" and its ${unit.lessons.length} ${unit.lessons.length === 1 ? "lesson" : "lessons"}? Deletion is refused if a lesson has student progress or quiz attempts.`}
                            feedback="after"
                            buttonClassName="px-2"
                          />
                        </div>
                      ) : null}
                    </div>

                    {unit.lessons.length === 0 ? (
                      <p className="border-t border-brand-line px-4 py-4 text-xs text-brand-body">
                        No lessons in this unit yet.
                        {!archived ? (
                          <>
                            {" "}
                            <Link
                              href={`/admin/courses/${course.id}/lessons/new?unit=${unit.id}`}
                              className="font-semibold text-brand-teal-deep underline decoration-brand-teal/40 underline-offset-4"
                            >
                              Add the first lesson
                            </Link>
                            .
                          </>
                        ) : null}
                      </p>
                    ) : (
                      <ul className="divide-y divide-brand-line border-t border-brand-line">
                        {unit.lessons.map((lesson, lessonIndex) => (
                          <li
                            key={lesson.id}
                            className="flex flex-wrap items-center gap-x-3 gap-y-2 px-4 py-3"
                          >
                            <span className="text-[0.65rem] font-bold tabular-nums text-brand-body/70">
                              {unitIndex + 1}.{lessonIndex + 1}
                            </span>
                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <Link
                                  href={`/admin/courses/${course.id}/lessons/${lesson.id}/edit`}
                                  className="rounded-sm text-sm font-semibold text-brand-navy transition-colors hover:text-brand-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                                >
                                  {lesson.title}
                                </Link>
                                <AdminStatusBadge
                                  tone={
                                    lesson.status === "published" ? "published" : "draft"
                                  }
                                >
                                  {lesson.status}
                                </AdminStatusBadge>
                              </div>
                              <p className="mt-0.5 text-[0.68rem] text-brand-body">
                                {lesson.minutes} min · {lesson.blocks.length} blocks ·{" "}
                                {lesson.quiz.length} quiz{" "}
                                {lesson.quiz.length === 1 ? "question" : "questions"}
                                <span className="mx-1.5 text-brand-line" aria-hidden="true">
                                  |
                                </span>
                                <span className="font-mono">{lesson.slug}</span>
                              </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-1.5">
                              {!archived ? (
                                <>
                                  <AdminActionForm
                                    action={moveLessonAction}
                                    hiddenFields={{
                                      courseId: course.id,
                                      unitId: unit.id,
                                      lessonId: lesson.id,
                                      direction: "up",
                                    }}
                                    submitLabel="Up"
                                    submitVariant="outline"
                                    submitSize="xs"
                                    feedback="after"
                                    disabled={lessonIndex === 0}
                                    buttonClassName="px-2"
                                  />
                                  <AdminActionForm
                                    action={moveLessonAction}
                                    hiddenFields={{
                                      courseId: course.id,
                                      unitId: unit.id,
                                      lessonId: lesson.id,
                                      direction: "down",
                                    }}
                                    submitLabel="Down"
                                    submitVariant="outline"
                                    submitSize="xs"
                                    feedback="after"
                                    disabled={lessonIndex === unit.lessons.length - 1}
                                    buttonClassName="px-2"
                                  />
                                </>
                              ) : null}
                              <Link
                                href={`/admin/courses/${course.id}/lessons/${lesson.id}/preview`}
                                className="inline-flex h-6 items-center rounded-full border border-brand-line bg-white px-2 text-[0.65rem] font-semibold text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                              >
                                Preview
                              </Link>
                              <Link
                                href={`/admin/courses/${course.id}/lessons/${lesson.id}/edit`}
                                className="inline-flex h-6 items-center gap-0.5 rounded-full bg-brand-navy px-2 text-[0.65rem] font-semibold text-white transition-colors hover:bg-brand-navy-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                              >
                                Edit
                              </Link>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap items-center justify-between gap-2 border-t border-brand-line bg-brand-mist/30 px-4 py-2">
                      <details className="group">
                        <summary className="cursor-pointer list-none rounded-sm text-[0.68rem] font-semibold text-brand-body transition-colors hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal [&::-webkit-details-marker]:hidden">
                          Edit unit details
                        </summary>
                        <div className="w-full pt-2">
                          <AdminUnitEditForm
                            courseId={course.id}
                            unit={unit}
                            disabled={archived}
                          />
                        </div>
                      </details>
                      {!archived ? (
                        <Link
                          href={`/admin/courses/${course.id}/lessons/new?unit=${unit.id}`}
                          className="inline-flex items-center gap-1 text-[0.68rem] font-semibold text-brand-teal-deep transition-colors hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                        >
                          <PlusCircle className="size-3.5" aria-hidden="true" />
                          Add lesson to this unit
                        </Link>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            )}

            <div className="border-t border-brand-line p-4 sm:p-5">
              <AdminUnitCreateForm courseId={course.id} disabled={archived} />
            </div>
          </section>
        </div>

        <aside className="space-y-4 xl:sticky xl:top-24">
          <section className="rounded-2xl border border-brand-line bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-brand-navy">Publishing</h2>
            <dl className="mt-3 space-y-2.5 text-xs">
              <div className="flex items-center justify-between gap-3">
                <dt className="text-brand-body">Course state</dt>
                <dd>
                  <AdminStatusBadge
                    tone={
                      course.status === "published"
                        ? "published"
                        : course.status === "archived"
                          ? "archived"
                          : "draft"
                    }
                  >
                    {course.status}
                  </AdminStatusBadge>
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="text-brand-body">Last snapshot</dt>
                <dd className="text-right font-semibold text-brand-navy">
                  {formatDateTime(snapshot?.publishedAt ?? course.lastPublishedAt)}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-brand-body">Published lessons</dt>
                <dd className="font-semibold text-brand-navy">
                  {publishedLessonCount} of {lessonCount}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-brand-body">Snapshot lessons</dt>
                <dd className="font-semibold text-brand-navy">
                  {snapshot?.lessonCount ?? 0}
                </dd>
              </div>
            </dl>

            <div className="mt-5 space-y-3">
              {archived ? (
                <AdminActionForm
                  action={restoreCourseAction}
                  hiddenFields={{ courseId: course.id }}
                  submitLabel="Restore to draft"
                  pendingLabel="Restoring…"
                  feedback="after"
                  buttonClassName="w-full rounded-full"
                />
              ) : (
                <>
                  <AdminActionForm
                    action={publishCourseAction}
                    hiddenFields={{ courseId: course.id }}
                    submitLabel={
                      snapshot ? "Publish changes" : "Publish course"
                    }
                    pendingLabel="Publishing…"
                    feedback="after"
                    buttonClassName="w-full rounded-full"
                  />
                  <p className="text-[0.68rem] leading-5 text-brand-body">
                    Publishing validates published lessons and replaces the
                    public snapshot in one transaction.
                  </p>

                  {snapshot ? (
                    <AdminActionForm
                      action={unpublishCourseAction}
                      hiddenFields={{ courseId: course.id }}
                      submitLabel="Unpublish"
                      pendingLabel="Unpublishing…"
                      submitVariant="outline"
                      submitSize="sm"
                      confirmMessage={`Unpublish "${course.title}"? The public page will no longer show this course. Student progress is kept.`}
                      feedback="after"
                      buttonClassName="w-full rounded-full"
                    />
                  ) : null}

                  <AdminActionForm
                    action={markCourseReadyAction}
                    hiddenFields={{ courseId: course.id }}
                    submitLabel="Mark all units and lessons published"
                    pendingLabel="Updating…"
                    submitVariant="outline"
                    submitSize="sm"
                    confirmMessage="Mark every unit and lesson in this course as published? They remain invisible to students until the course itself is published."
                    feedback="after"
                    buttonClassName="w-full rounded-full"
                  />

                  <div className="border-t border-brand-line pt-3">
                    <AdminActionForm
                      action={archiveCourseAction}
                      hiddenFields={{ courseId: course.id }}
                      submitLabel="Archive course"
                      pendingLabel="Archiving…"
                      submitVariant="ghost"
                      submitSize="sm"
                      confirmMessage={`Archive "${course.title}"? It will be hidden from public pages and locked for editing. Student records are kept.`}
                      feedback="after"
                      buttonClassName="w-full rounded-full text-red-700 hover:bg-red-50"
                    />
                  </div>
                </>
              )}
            </div>
          </section>

          <section className="rounded-2xl border border-brand-line bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm font-bold text-brand-navy">
                Publish readiness
              </h2>
              <AdminStatusBadge tone={ready ? "published" : "draft"}>
                {ready ? "Ready" : "Not ready"}
              </AdminStatusBadge>
            </div>
            <ul className="mt-4 space-y-3">
              <ChecklistItem
                ok={checklist.fields}
                label="Course details complete"
                detail="Add a description and at least one learning outcome."
              />
              <ChecklistItem
                ok={checklist.units}
                label="Published unit available"
                detail={`${course.units.length} total units · ${publishedUnits.length} published.`}
              />
              <ChecklistItem
                ok={checklist.lessons}
                label="Published lesson available"
                detail="At least one published lesson inside a published unit."
              />
              <ChecklistItem
                ok={checklist.content}
                label="Published content is valid"
                detail={
                  publishableLessons.length === 0
                    ? "No publishable lessons yet."
                    : invalidPublishedLessons.length === 0
                      ? `${publishableLessons.length} publishable lessons have valid blocks and quizzes.`
                      : `${invalidPublishedLessons.length} publishable lessons need valid content blocks and a quiz.`
                }
              />
            </ul>
            {!ready ? (
              <p className="mt-4 flex items-start gap-2 rounded-xl bg-amber-50 px-3 py-2 text-[0.68rem] leading-5 text-amber-900">
                <XCircle className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                Publishing will be refused until every publish requirement is
                met. The checklist mirrors server-side validation.
              </p>
            ) : null}
          </section>

          <section className="rounded-2xl border border-brand-line bg-brand-mist p-5 text-xs leading-5 text-brand-body">
            <p className="inline-flex items-center gap-1.5 font-semibold text-brand-navy">
              <ArrowRight className="size-3.5 text-brand-teal-deep" aria-hidden="true" />
              Content after publishing
            </p>
            <p className="mt-1.5">
              Editing a published course does not change student pages until you
              press Publish changes. Draft previews always show the latest saved
              version.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
