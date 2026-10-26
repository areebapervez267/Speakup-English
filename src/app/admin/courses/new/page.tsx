import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";

import { AdminAccessPanel } from "@/components/admin/admin-access-panel";
import { AdminCourseForm } from "@/components/admin/admin-course-form";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { requireAdminPage } from "@/lib/admin/guard";

export const metadata: Metadata = {
  title: "New course",
  description: "Create a draft course.",
  robots: { index: false, follow: false },
};

export default async function NewCoursePage() {
  const access = await requireAdminPage("/admin/courses/new");

  if (access.status !== "granted") {
    return <AdminAccessPanel access={access} />;
  }

  return (
    <div>
      <AdminPageHeader
        eyebrow="Create course"
        title="New course"
        description="Start with the public-facing details. The course is saved as a draft, so nothing appears on student pages until you add content and publish."
        backLink={{ href: "/admin/courses", label: "All courses" }}
      />

      <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_19rem] xl:items-start">
        <AdminCourseForm />

        <aside className="space-y-4 xl:sticky xl:top-24">
          <div className="rounded-2xl border border-brand-line bg-white p-5 shadow-sm">
            <h2 className="flex items-center gap-2 text-sm font-bold text-brand-navy">
              <Info className="size-4 text-brand-teal-deep" aria-hidden="true" />
              What happens next
            </h2>
            <ol className="mt-3 space-y-3 text-xs leading-5 text-brand-body">
              <li>1. Add at least one unit, then add lessons to it.</li>
              <li>2. Paste or import lesson blocks and build the lesson quiz.</li>
              <li>3. Preview every lesson with answers before marking it published.</li>
              <li>4. Publish the course to create the public snapshot.</li>
            </ol>
            <Link
              href="/admin#import-built-in"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-teal-deep underline decoration-brand-teal/40 underline-offset-4 transition-colors hover:text-brand-navy"
            >
              Or import a built-in A1 course
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="rounded-2xl border border-brand-line bg-brand-mist p-5 text-xs leading-5 text-brand-body">
            <p className="font-semibold text-brand-navy">URLs stay stable</p>
            <p className="mt-1.5">
              A course URL can be changed until the first publish. After that it
              is locked, so student links and saved progress keep working.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
