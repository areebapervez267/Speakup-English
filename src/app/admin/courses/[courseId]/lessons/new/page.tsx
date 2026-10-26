import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ShieldAlert, TriangleAlert } from "lucide-react";

import { AdminAccessPanel } from "@/components/admin/admin-access-panel";
import { AdminLessonEditor } from "@/components/admin/admin-lesson-editor";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { buttonVariants } from "@/components/ui/button";
import { requireAdminPage } from "@/lib/admin/guard";
import { fetchAdminCourseTree } from "@/lib/admin/queries";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "New lesson",
  description: "Create a lesson draft.",
  robots: { index: false, follow: false },
};

type PageParams = Promise<{ courseId: string }>;
type PageSearchParams = Promise<{ unit?: string | string[] }>;

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? (value[0] ?? "") : (value ?? "");
}

export default async function AdminNewLessonPage({
  params,
  searchParams,
}: {
  params: PageParams;
  searchParams: PageSearchParams;
}) {
  const { courseId } = await params;
  const access = await requireAdminPage(
    `/admin/courses/${courseId}/lessons/new`,
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

  const [treeResult, query] = await Promise.all([
    fetchAdminCourseTree(supabase, courseId),
    searchParams,
  ]);

  if (treeResult.status === "error") {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm leading-6 text-red-800">
        <TriangleAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
        <div>
          <p className="font-semibold">Lesson editor unavailable</p>
          <p className="mt-1">{treeResult.message}</p>
        </div>
      </div>
    );
  }

  if (!treeResult.data) {
    notFound();
  }

  const course = treeResult.data;
  const units = course.units.map((unit) => ({
    id: unit.id,
    title: unit.title,
  }));
  const requestedUnit = firstValue(query.unit);
  const initialUnitId = units.some((unit) => unit.id === requestedUnit)
    ? requestedUnit
    : units[0]?.id;

  return (
    <div>
      <AdminPageHeader
        eyebrow="New lesson"
        title="Create a lesson"
        description={`Add a lesson to ${course.title}. It starts as a draft and stays private until the lesson, its unit and the course are all published.`}
        backLink={{
          href: `/admin/courses/${course.id}`,
          label: "Back to course workspace",
        }}
      />

      {course.status === "archived" ? (
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          <ShieldAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          <div>
            <p className="font-semibold">Restore the course first</p>
            <p className="mt-1 text-xs leading-5">
              Archived courses cannot be edited. Return to the course workspace
              and restore it to draft.
            </p>
          </div>
        </div>
      ) : units.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-brand-line bg-white px-6 py-10 text-center">
          <h2 className="font-display text-2xl font-medium text-brand-navy">
            Add a unit first
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-brand-body">
            Lessons live inside units. Create the first unit in the course
            workspace, then come back to add a lesson.
          </p>
          <Link
            href={`/admin/courses/${course.id}`}
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-5 h-10 rounded-full px-4 text-sm font-semibold",
            )}
          >
            Go to course workspace
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      ) : (
        <div className="mt-8">
          <AdminLessonEditor
            mode="create"
            courseId={course.id}
            courseSlug={course.slug}
            units={units}
            initialUnitId={initialUnitId}
          />
        </div>
      )}
    </div>
  );
}
