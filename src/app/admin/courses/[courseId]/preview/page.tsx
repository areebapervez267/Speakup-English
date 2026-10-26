import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  Clock3,
  Eye,
  PencilLine,
  ShieldAlert,
  TriangleAlert,
  XCircle,
} from "lucide-react";

import { AdminAccessPanel } from "@/components/admin/admin-access-panel";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { AdminStatusBadge } from "@/components/admin/admin-status-badge";
import { buttonVariants } from "@/components/ui/button";
import { getLevel, getSkill } from "@/data/curriculum";
import { requireAdminPage } from "@/lib/admin/guard";
import { fetchAdminCourseTree } from "@/lib/admin/queries";
import { validateBlocks, validateQuiz } from "@/lib/admin/validation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Course preview",
  description: "Preview draft course content as an administrator.",
  robots: { index: false, follow: false },
};

type PageParams = Promise<{ courseId: string }>;

export default async function AdminCoursePreviewPage({
  params,
}: {
  params: PageParams;
}) {
  const { courseId } = await params;
  const access = await requireAdminPage(
    `/admin/courses/${courseId}/preview`,
  );

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

  const result = await fetchAdminCourseTree(supabase, courseId);

  if (result.status === "error") {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm leading-6 text-red-800">
        <TriangleAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
        <div>
          <p className="font-semibold">Preview unavailable</p>
          <p className="mt-1">{result.message}</p>
        </div>
      </div>
    );
  }

  if (!result.data) {
    notFound();
  }

  const course = result.data;
  const level = getLevel(course.level);
  const skill = getSkill(course.skill);
  const lessons = course.units.flatMap((unit) => unit.lessons);
  const problems = lessons.flatMap((lesson) => {
    const blocks = validateBlocks(lesson.blocks);
    const quiz = validateQuiz(lesson.quiz);
    const messages: string[] = [];

    if (!blocks.ok) {
      messages.push(`${lesson.title}: ${blocks.errors.blocks}`);
    } else if (blocks.value.length === 0) {
      messages.push(`${lesson.title}: no content blocks yet.`);
    }

    if (!quiz.ok) {
      messages.push(`${lesson.title}: ${quiz.errors.quiz}`);
    } else if (quiz.value.length === 0) {
      messages.push(`${lesson.title}: no quiz questions yet.`);
    }

    return messages;
  });

  return (
    <div>
      <AdminPageHeader
        eyebrow="Draft preview"
        title={course.title}
        description="This preview shows the latest saved draft, exactly as content is stored. It is not the published snapshot."
        backLink={{
          href: `/admin/courses/${course.id}`,
          label: "Back to course workspace",
        }}
        actions={
          <>
            <Link
              href={`/admin/courses/${course.id}`}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-10 rounded-full px-4 text-sm font-semibold",
              )}
            >
              <PencilLine className="size-4 text-brand-teal-deep" aria-hidden="true" />
              Edit course
            </Link>
            {course.status === "published" ? (
              <Link
                href={`/courses/${course.slug}`}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-10 rounded-full px-4 text-sm font-semibold",
                )}
              >
                View published page
              </Link>
            ) : null}
          </>
        }
      />

      <div className="mt-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
        <ShieldAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
        <div>
          <p className="font-semibold">Administrator preview</p>
          <p className="mt-1 text-xs leading-5">
            Draft content may be incomplete. Lesson previews include correct
            answers and explanations; students never receive those before
            submitting a quiz.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        <section className="overflow-hidden rounded-3xl bg-brand-navy text-white shadow-lift">
          <div className="bg-dot-light px-6 py-8 sm:px-8 sm:py-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white/80">
                {level.label} · {level.name}
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white/80">
                {skill.label}
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white/80">
                {course.premium ? "Premium label" : "Free access"}
              </span>
              <span className="rounded-full bg-brand-teal px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-brand-navy-deep">
                {course.status}
              </span>
            </div>
            <h2 className="mt-4 max-w-3xl text-balance font-display text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl">
              {course.title}
            </h2>
            <p className="mt-3 max-w-3xl text-pretty text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
              {course.summary}
            </p>
            <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-xs">
              <div>
                <dt className="text-white/50">Units</dt>
                <dd className="mt-0.5 text-base font-bold">{course.units.length}</dd>
              </div>
              <div>
                <dt className="text-white/50">Lessons</dt>
                <dd className="mt-0.5 text-base font-bold">{lessons.length}</dd>
              </div>
              <div>
                <dt className="text-white/50">Estimated time</dt>
                <dd className="mt-0.5 text-base font-bold">{course.hours} hours</dd>
              </div>
            </dl>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <div className="space-y-6">
            <section className="rounded-2xl border border-brand-line bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-lg font-bold text-brand-navy">About this course</h2>
              <p className="mt-2 whitespace-pre-line text-sm leading-7 text-brand-body">
                {course.description || "No description yet."}
              </p>
            </section>

            <section className="rounded-2xl border border-brand-line bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-lg font-bold text-brand-navy">Learning outcomes</h2>
              {course.outcomes.length === 0 ? (
                <p className="mt-2 text-sm leading-6 text-brand-body">
                  No outcomes yet. Add at least one before publishing.
                </p>
              ) : (
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {course.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="rounded-xl bg-brand-mist/60 px-3 py-2.5 text-sm leading-6 text-brand-ink"
                    >
                      {outcome}
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <section className="rounded-2xl border border-brand-line bg-white shadow-sm">
              <div className="flex items-center gap-2 border-b border-brand-line px-5 py-4">
                <BookOpen className="size-5 text-brand-teal-deep" aria-hidden="true" />
                <h2 className="text-lg font-bold text-brand-navy">Course outline</h2>
              </div>
              {course.units.length === 0 ? (
                <p className="px-5 py-8 text-center text-sm text-brand-body">
                  This course has no units yet.
                </p>
              ) : (
                <ol className="divide-y divide-brand-line">
                  {course.units.map((unit, unitIndex) => (
                    <li key={unit.id} className="px-5 py-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="grid size-6 place-items-center rounded-full bg-brand-mist text-[0.65rem] font-bold text-brand-navy">
                          {unitIndex + 1}
                        </span>
                        <h3 className="text-sm font-bold text-brand-navy">
                          {unit.title}
                        </h3>
                        <AdminStatusBadge
                          tone={unit.status === "published" ? "published" : "draft"}
                        >
                          {unit.status}
                        </AdminStatusBadge>
                      </div>
                      {unit.description ? (
                        <p className="mt-1 pl-8 text-xs leading-5 text-brand-body">
                          {unit.description}
                        </p>
                      ) : null}

                      {unit.lessons.length === 0 ? (
                        <p className="mt-2 pl-8 text-xs text-brand-body">
                          No lessons in this unit.
                        </p>
                      ) : (
                        <ul className="mt-2 space-y-1 pl-8">
                          {unit.lessons.map((lesson, lessonIndex) => (
                            <li
                              key={lesson.id}
                              className="flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg px-2 py-1.5 text-xs transition-colors hover:bg-brand-mist/60"
                            >
                              <span className="font-medium tabular-nums text-brand-body">
                                {unitIndex + 1}.{lessonIndex + 1}
                              </span>
                              <Link
                                href={`/admin/courses/${course.id}/lessons/${lesson.id}/preview`}
                                className="font-semibold text-brand-navy underline decoration-brand-line underline-offset-4 transition-colors hover:text-brand-teal-deep"
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
                              <span className="inline-flex items-center gap-1 text-brand-body">
                                <Clock3 className="size-3" aria-hidden="true" />
                                {lesson.minutes} min
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ol>
              )}
            </section>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24">
            <section className="rounded-2xl border border-brand-line bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <Eye className="size-4 text-brand-teal-deep" aria-hidden="true" />
                <h2 className="text-sm font-bold text-brand-navy">Validation</h2>
              </div>
              <p className="mt-2 text-xs leading-5 text-brand-body">
                {problems.length === 0
                  ? `${lessons.length} lessons have valid content blocks and quizzes.`
                  : `${problems.length} content ${problems.length === 1 ? "issue needs" : "issues need"} attention before publishing.`}
              </p>
              {problems.length > 0 ? (
                <ul className="mt-3 space-y-2">
                  {problems.map((problem) => (
                    <li
                      key={problem}
                      className="flex items-start gap-1.5 rounded-lg bg-amber-50 px-2.5 py-2 text-[0.68rem] leading-5 text-amber-900"
                    >
                      <XCircle className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                      {problem}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>

            <Link
              href={`/admin/courses/${course.id}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-line bg-white px-4 py-2 text-xs font-semibold text-brand-navy shadow-sm transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
            >
              <ArrowLeft className="size-3.5" aria-hidden="true" />
              Back to workspace
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
