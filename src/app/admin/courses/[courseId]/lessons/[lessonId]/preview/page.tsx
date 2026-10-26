import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  CheckCircle2,
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
import { LessonContent } from "@/components/lessons/lesson-blocks";
import { buttonVariants } from "@/components/ui/button";
import { requireAdminPage } from "@/lib/admin/guard";
import { fetchAdminCourseTree } from "@/lib/admin/queries";
import { validateBlocks, validateLessonFields, validateQuiz } from "@/lib/admin/validation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Lesson preview",
  description: "Preview lesson content and answer key.",
  robots: { index: false, follow: false },
};

type PageParams = Promise<{ courseId: string; lessonId: string }>;

export default async function AdminLessonPreviewPage({
  params,
}: {
  params: PageParams;
}) {
  const { courseId, lessonId } = await params;
  const access = await requireAdminPage(
    `/admin/courses/${courseId}/lessons/${lessonId}/preview`,
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
  const unit = course.units.find((candidate) =>
    candidate.lessons.some((lesson) => lesson.id === lessonId),
  );
  const lesson = unit?.lessons.find((candidate) => candidate.id === lessonId);

  if (!unit || !lesson) {
    notFound();
  }

  const blocksCheck = validateBlocks(lesson.blocks);
  const quizCheck = validateQuiz(lesson.quiz);
  const fields = validateLessonFields({
    slug: lesson.slug,
    title: lesson.title,
    summary: lesson.summary,
    objective: lesson.objective,
    minutes: lesson.minutes,
    status: lesson.status,
    blocks: lesson.blocks,
    quiz: lesson.quiz,
  });
  const fieldErrors = fields.ok ? {} : fields.errors;
  const warnings = fields.ok ? fields.warnings : [];
  const publicQuestions = lesson.quiz.map((question) => ({
    id: question.id,
    question: question.question,
    options: question.options,
  }));

  return (
    <div>
      <AdminPageHeader
        eyebrow={`Admin preview · ${unit.title}`}
        title={lesson.title}
        description={lesson.summary}
        backLink={{
          href: `/admin/courses/${course.id}`,
          label: "Back to course workspace",
        }}
        actions={
          <>
            <Link
              href={`/admin/courses/${course.id}/lessons/${lesson.id}/edit`}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-10 rounded-full px-4 text-sm font-semibold",
              )}
            >
              <PencilLine className="size-4 text-brand-teal-deep" aria-hidden="true" />
              Edit lesson
            </Link>
            <Link
              href={`/admin/courses/${course.id}/preview`}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-10 rounded-full px-4 text-sm font-semibold",
              )}
            >
              Course preview
            </Link>
          </>
        }
      />

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <AdminStatusBadge tone={lesson.status === "published" ? "published" : "draft"}>
          {lesson.status}
        </AdminStatusBadge>
        <span className="inline-flex items-center gap-1 text-[0.68rem] font-semibold text-brand-body">
          <Clock3 className="size-3.5" aria-hidden="true" />
          {lesson.minutes} minutes
        </span>
        <span className="font-mono text-[0.68rem] text-brand-body">
          /courses/{course.slug}/lessons/{lesson.slug}
        </span>
      </div>

      <div className="mt-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
        <ShieldAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
        <div>
          <p className="font-semibold">Answer key visible — admin only</p>
          <p className="mt-1 text-xs leading-5">
            Correct answers and explanations are shown below for review. The
            public lesson passes only sanitised questions to students and grades
            submissions on the server.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_19rem] xl:items-start">
        <div className="min-w-0 space-y-6">
          <section className="rounded-2xl border border-brand-line bg-white p-5 shadow-sm sm:p-6">
            <p className="text-[0.64rem] font-bold uppercase tracking-[0.14em] text-brand-teal-deep">
              Learning objective
            </p>
            <p className="mt-2 text-pretty font-display text-xl font-medium leading-snug text-brand-navy">
              {lesson.objective}
            </p>
          </section>

          <section className="rounded-2xl border border-brand-line bg-white p-5 shadow-sm sm:p-7">
            {blocksCheck.ok ? (
              blocksCheck.value.length > 0 ? (
                <LessonContent blocks={blocksCheck.value} />
              ) : (
                <p className="text-sm text-brand-body">
                  This lesson has no content blocks yet.
                </p>
              )
            ) : (
              <div className="rounded-xl bg-red-50 p-4 text-sm leading-6 text-red-700">
                <p className="font-semibold">Content blocks are invalid</p>
                <p className="mt-1 text-xs">{blocksCheck.errors.blocks}</p>
              </div>
            )}
          </section>

          <section className="rounded-2xl border border-brand-line bg-white shadow-sm">
            <div className="border-b border-brand-line px-5 py-4">
              <h2 className="text-lg font-bold text-brand-navy">
                Quiz answer key
              </h2>
              <p className="mt-0.5 text-xs text-brand-body">
                {lesson.quiz.length}{" "}
                {lesson.quiz.length === 1 ? "question" : "questions"}
                {quizCheck.ok ? " · valid" : " · needs attention"}
              </p>
            </div>

            {!quizCheck.ok ? (
              <p className="m-5 flex items-start gap-2 rounded-xl bg-red-50 px-3 py-2 text-xs leading-5 text-red-700">
                <XCircle className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                {quizCheck.errors.quiz}
              </p>
            ) : lesson.quiz.length === 0 ? (
              <p className="px-5 py-8 text-center text-sm text-brand-body">
                No quiz questions yet.
              </p>
            ) : (
              <ol className="divide-y divide-brand-line">
                {lesson.quiz.map((question, questionIndex) => (
                  <li key={question.id} className="px-5 py-4">
                    <p className="text-sm font-semibold leading-6 text-brand-navy">
                      {questionIndex + 1}. {question.question}
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {question.options.map((option, optionIndex) => {
                        const correct = optionIndex === question.correctIndex;
                        return (
                          <li
                            key={optionIndex}
                            className={cn(
                              "flex items-start gap-2 rounded-lg border px-3 py-1.5 text-xs leading-5",
                              correct
                                ? "border-brand-teal/40 bg-brand-teal-soft text-brand-teal-deep"
                                : "border-brand-line bg-white text-brand-body",
                            )}
                          >
                            {correct ? (
                              <CheckCircle2
                                className="mt-0.5 size-3.5 shrink-0"
                                aria-hidden="true"
                              />
                            ) : (
                              <span className="mt-0.5 grid size-3.5 shrink-0 place-items-center rounded-full border border-brand-line text-[0.5rem] font-bold">
                                {String.fromCharCode(65 + optionIndex)}
                              </span>
                            )}
                            <span className="font-medium">{option}</span>
                            {correct ? (
                              <span className="ml-auto shrink-0 text-[0.58rem] font-bold uppercase tracking-[0.08em]">
                                Correct
                              </span>
                            ) : null}
                          </li>
                        );
                      })}
                    </ul>
                    <p className="mt-2 rounded-lg bg-brand-mist px-3 py-2 text-xs leading-5 text-brand-ink">
                      <span className="font-semibold text-brand-navy">
                        Explanation:{" "}
                      </span>
                      {question.explanation}
                    </p>
                  </li>
                ))}
              </ol>
            )}
          </section>

          <details className="rounded-2xl border border-brand-line bg-white shadow-sm">
            <summary className="cursor-pointer list-none px-5 py-4 text-sm font-bold text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-teal [&::-webkit-details-marker]:hidden">
              Public question payload
            </summary>
            <div className="border-t border-brand-line px-5 py-4">
              <p className="text-xs leading-5 text-brand-body">
                This is what a published lesson stores for students. It contains
                no correct answer index and no explanation.
              </p>
              <pre className="mt-3 max-h-80 overflow-auto rounded-xl bg-brand-navy p-3 font-mono text-[0.68rem] leading-5 text-white/90">
                {JSON.stringify(publicQuestions, null, 2)}
              </pre>
            </div>
          </details>
        </div>

        <aside className="space-y-4 xl:sticky xl:top-24">
          <section className="rounded-2xl border border-brand-line bg-white p-5 shadow-sm">
            <h2 className="flex items-center gap-2 text-sm font-bold text-brand-navy">
              <Eye className="size-4 text-brand-teal-deep" aria-hidden="true" />
              Validation
            </h2>
            <ul className="mt-3 space-y-2 text-xs leading-5 text-brand-body">
              <li className="flex items-start gap-2">
                {lesson.blocks.length > 0 ? (
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-brand-teal-deep" aria-hidden="true" />
                ) : (
                  <AlertTriangle className="mt-0.5 size-3.5 shrink-0 text-amber-700" aria-hidden="true" />
                )}
                {lesson.blocks.length} content blocks
              </li>
              <li className="flex items-start gap-2">
                {lesson.quiz.length > 0 ? (
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-brand-teal-deep" aria-hidden="true" />
                ) : (
                  <AlertTriangle className="mt-0.5 size-3.5 shrink-0 text-amber-700" aria-hidden="true" />
                )}
                {lesson.quiz.length} quiz questions
              </li>
              <li className="flex items-start gap-2">
                {blocksCheck.ok && quizCheck.ok ? (
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-brand-teal-deep" aria-hidden="true" />
                ) : (
                  <XCircle className="mt-0.5 size-3.5 shrink-0 text-red-600" aria-hidden="true" />
                )}
                {blocksCheck.ok && quizCheck.ok
                  ? "Blocks and quiz structure valid"
                  : "Fix content structure issues"}
              </li>
            </ul>

            {Object.keys(fieldErrors).length > 0 ? (
              <div className="mt-3 rounded-xl bg-red-50 px-3 py-2 text-[0.68rem] leading-5 text-red-700">
                <p className="font-semibold">Validation errors</p>
                <ul className="mt-1 list-disc space-y-0.5 pl-4">
                  {Object.entries(fieldErrors).map(([field, message]) => (
                    <li key={field}>{message}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {warnings.length > 0 ? (
              <div className="mt-3 rounded-xl bg-amber-50 px-3 py-2 text-[0.68rem] leading-5 text-amber-900">
                <p className="font-semibold">Warnings</p>
                <ul className="mt-1 list-disc space-y-0.5 pl-4">
                  {warnings.map((warning) => (
                    <li key={warning}>{warning}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>

          <section className="rounded-2xl border border-brand-line bg-brand-mist p-5 text-xs leading-5 text-brand-body">
            <p className="font-semibold text-brand-navy">Quiz security</p>
            <p className="mt-1.5">
              Correct answers live only in draft tables and a private published
              answer-key table. The public lesson payload excludes them and
              grading happens on the server after submission.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
