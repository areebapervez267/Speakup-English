import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShieldAlert, TriangleAlert } from "lucide-react";

import { AdminAccessPanel } from "@/components/admin/admin-access-panel";
import { AdminLessonEditor } from "@/components/admin/admin-lesson-editor";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { requireAdminPage } from "@/lib/admin/guard";
import { fetchAdminCourseTree } from "@/lib/admin/queries";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Edit lesson",
  description: "Edit lesson content, blocks and quiz.",
  robots: { index: false, follow: false },
};

type PageParams = Promise<{ courseId: string; lessonId: string }>;

export default async function AdminEditLessonPage({
  params,
}: {
  params: PageParams;
}) {
  const { courseId, lessonId } = await params;
  const access = await requireAdminPage(
    `/admin/courses/${courseId}/lessons/${lessonId}/edit`,
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
          <p className="font-semibold">Lesson editor unavailable</p>
          <p className="mt-1">{result.message}</p>
        </div>
      </div>
    );
  }

  if (!result.data) {
    notFound();
  }

  const course = result.data;
  const lesson = course.units
    .flatMap((unit) => unit.lessons)
    .find((candidate) => candidate.id === lessonId);

  if (!lesson) {
    notFound();
  }

  const units = course.units.map((unit) => ({
    id: unit.id,
    title: unit.title,
  }));

  return (
    <div>
      <AdminPageHeader
        eyebrow="Lesson editor"
        title={lesson.title}
        description={lesson.summary}
        backLink={{
          href: `/admin/courses/${course.id}`,
          label: "Back to course workspace",
        }}
      />

      {course.status === "archived" ? (
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          <ShieldAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          <div>
            <p className="font-semibold">This course is archived</p>
            <p className="mt-1 text-xs leading-5">
              Restore the course to draft before changing this lesson.
            </p>
          </div>
        </div>
      ) : null}

      <div className="mt-8">
        <AdminLessonEditor
          mode="edit"
          courseId={course.id}
          courseSlug={course.slug}
          units={units}
          lesson={lesson}
          archived={course.status === "archived"}
        />
      </div>
    </div>
  );
}
