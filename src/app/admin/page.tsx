import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  FilePlus2,
  History,
  Layers3,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

import { AdminAccessPanel } from "@/components/admin/admin-access-panel";
import { AdminActionForm } from "@/components/admin/admin-action-form";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { AdminStatusBadge } from "@/components/admin/admin-status-badge";
import { buttonVariants } from "@/components/ui/button";
import { courses } from "@/data/courses";
import { getAuthoredCourseSlugs } from "@/data/lessons";
import { requireAdminPage } from "@/lib/admin/guard";
import { importBuiltInCourseAction } from "@/lib/admin/actions";
import {
  fetchAdminCourses,
  fetchAdminOverview,
} from "@/lib/admin/queries";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Overview",
  description: "Content counts and recent administrator activity.",
  robots: { index: false, follow: false },
};

const builtInCourses = getAuthoredCourseSlugs()
  .map((slug) => courses.find((course) => course.slug === slug))
  .filter((course): course is (typeof courses)[number] => Boolean(course));

function formatDateTime(value: string) {
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

function actionLabel(action: string) {
  return action
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default async function AdminOverviewPage() {
  const access = await requireAdminPage("/admin");

  if (access.status !== "granted") {
    return (
      <div className="mt-8">
        <AdminAccessPanel access={access} />
      </div>
    );
  }

  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    return (
      <div className="mt-8">
        <AdminAccessPanel
          access={{
            status: "unconfigured",
            issue: "supabase",
            message:
              "Supabase is not connected. Add your project URL and publishable key to .env.local, then restart the app.",
          }}
        />
      </div>
    );
  }

  const [overview, managedCourses] = await Promise.all([
    fetchAdminOverview(supabase),
    fetchAdminCourses(supabase),
  ]);

  if (overview.status === "error") {
    return (
      <div className="mt-8 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm leading-6 text-red-800">
        <TriangleAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
        <div>
          <p className="font-semibold">Overview unavailable</p>
          <p className="mt-1">{overview.message}</p>
        </div>
      </div>
    );
  }

  const managedRows =
    managedCourses.status === "ok" ? managedCourses.data : [];
  const managedBySlug = new Map(
    managedRows.map((course) => [course.slug, course]),
  );
  const counts = overview.data.counts;
  const importedSlugs = builtInCourses.filter((course) =>
    managedBySlug.has(course.slug),
  ).length;

  const stats = [
    {
      label: "Managed courses",
      value: counts.totalCourses,
      hint: `${counts.publishedCourses} published · ${counts.draftCourses} draft · ${counts.archivedCourses} archived`,
      icon: BookOpen,
    },
    {
      label: "Published lessons",
      value: counts.publishedLessons,
      hint: `${counts.draftLessons} draft ${counts.draftLessons === 1 ? "lesson" : "lessons"}`,
      icon: Layers3,
    },
    {
      label: "Live snapshots",
      value: counts.publishedSnapshots,
      hint: "Courses currently visible on public pages",
      icon: ShieldCheck,
    },
    {
      label: "Total lessons",
      value: counts.totalLessons,
      hint: "Across every managed unit",
      icon: Clock3,
    },
  ];

  return (
    <>
      <AdminPageHeader
        eyebrow="Content overview"
        title="Admin workspace"
        description="Manage course drafts, publish reviewed content and see exactly what changed. Every number below comes from your Supabase content tables."
        actions={
          <>
            <Link
              href="/admin/courses"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-10 rounded-full px-4 text-sm font-semibold",
              )}
            >
              Manage courses
            </Link>
            <Link
              href="/admin/courses/new"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-10 rounded-full px-4 text-sm font-semibold",
              )}
            >
              <FilePlus2 className="size-4" aria-hidden="true" />
              New course
            </Link>
          </>
        }
      />

      <div className="mt-8 space-y-8">
        <div className="rounded-2xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-body shadow-sm">
          Signed in as{" "}
          <span className="font-semibold text-brand-navy">
            {access.email ?? access.displayName}
          </span>
          . Access was verified on the server for this request.
        </div>

      <section aria-labelledby="counts-heading">
        <h2 id="counts-heading" className="sr-only">
          Content counts
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-brand-line bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[0.64rem] font-bold uppercase tracking-[0.12em] text-brand-body">
                    {stat.label}
                  </p>
                  <span className="grid size-8 place-items-center rounded-lg bg-brand-teal-soft text-brand-teal-deep">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                </div>
                <p className="mt-3 font-display text-3xl font-medium text-brand-navy">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-5 text-brand-body">{stat.hint}</p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
        <section className="rounded-2xl border border-brand-line bg-white shadow-sm">
          <div className="flex items-center justify-between gap-3 border-b border-brand-line px-5 py-4">
            <div>
              <h2 className="text-lg font-bold text-brand-navy">Recent changes</h2>
              <p className="mt-0.5 text-xs text-brand-body">
                Latest entries from the administration audit log.
              </p>
            </div>
            <History className="size-5 text-brand-teal-deep" aria-hidden="true" />
          </div>

          {overview.data.recentAudit.length === 0 ? (
            <div className="px-5 py-10 text-center">
              <p className="text-sm font-semibold text-brand-navy">
                No content changes recorded yet
              </p>
              <p className="mx-auto mt-1 max-w-sm text-xs leading-5 text-brand-body">
                Creating a course, saving a lesson or publishing content will
                appear here. Unlike a demo feed, this list is empty until a real
                change happens.
              </p>
            </div>
          ) : (
            <ol className="divide-y divide-brand-line">
              {overview.data.recentAudit.map((entry) => (
                <li key={entry.id} className="flex gap-3 px-5 py-3.5">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-brand-teal" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium leading-6 text-brand-navy">
                      {entry.summary}
                    </p>
                    <p className="mt-0.5 flex flex-wrap items-center gap-x-2 text-[0.68rem] text-brand-body">
                      <span className="font-semibold uppercase tracking-[0.06em]">
                        {actionLabel(entry.action)}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{entry.actorEmail ?? "System"}</span>
                      <span aria-hidden="true">·</span>
                      <time dateTime={entry.createdAt}>
                        {formatDateTime(entry.createdAt)}
                      </time>
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </section>

        <section className="space-y-4">
          <div className="rounded-2xl border border-brand-line bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-brand-navy">
              How publishing works
            </h2>
            <ol className="mt-3 space-y-3 text-sm leading-6 text-brand-body">
              <li className="flex gap-2.5">
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand-mist text-[0.62rem] font-bold text-brand-navy">
                  1
                </span>
                Edit courses, units and lessons as drafts. Students never see
                draft content.
              </li>
              <li className="flex gap-2.5">
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand-mist text-[0.62rem] font-bold text-brand-navy">
                  2
                </span>
                Preview lessons with answers and mark units and lessons as
                published in the workspace.
              </li>
              <li className="flex gap-2.5">
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand-mist text-[0.62rem] font-bold text-brand-navy">
                  3
                </span>
                Publish the course. A validated snapshot replaces the public
                course atomically; answer keys stay private.
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-brand-line bg-brand-navy p-5 text-white shadow-sm">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand-teal">
              Built-in library
            </p>
            <p className="mt-2 font-display text-2xl font-medium leading-snug">
              {builtInCourses.length} interactive A1 courses
            </p>
            <p className="mt-2 text-sm leading-6 text-white/65">
              {importedSlugs} of {builtInCourses.length} are now in the admin
              workspace. Built-in content stays live until you import and
              publish it.
            </p>
          </div>
        </section>
      </div>

      <section
        id="import-built-in"
        className="rounded-2xl border border-brand-line bg-white shadow-sm"
      >
        <div className="border-b border-brand-line px-5 py-4">
          <h2 className="text-lg font-bold text-brand-navy">
            Import built-in A1 courses
          </h2>
          <p className="mt-1 max-w-3xl text-xs leading-6 text-brand-body">
            Importing copies the existing authored units, lessons and quizzes
            into the admin workspace as drafts. Nothing public changes until you
            publish. Use the import when you want to edit previously built-in
            content.
          </p>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3">
          {builtInCourses.map((course) => {
            const managed = managedBySlug.get(course.slug);
            const hasUnits = managed ? managed.unitCount > 0 : false;

            return (
              <article
                key={course.slug}
                className="flex flex-col rounded-2xl border border-brand-line bg-brand-mist/40 p-4"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <AdminStatusBadge tone="neutral">
                    {course.level.toUpperCase()} · {course.skill}
                  </AdminStatusBadge>
                  {managed ? (
                    <AdminStatusBadge
                      tone={
                        managed.status === "published"
                          ? "published"
                          : managed.status === "archived"
                            ? "archived"
                            : "draft"
                      }
                    >
                      {managed.status}
                    </AdminStatusBadge>
                  ) : null}
                </div>
                <h3 className="mt-2.5 font-display text-lg font-medium leading-snug text-brand-navy">
                  {course.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-brand-body">
                  {course.summary}
                </p>

                <div className="mt-auto pt-4">
                  {managed && hasUnits ? (
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[0.68rem] font-semibold text-brand-teal-deep">
                        Already in workspace
                      </span>
                      <Link
                        href={`/admin/courses/${managed.id}`}
                        className="inline-flex items-center gap-1 rounded-full border border-brand-line bg-white px-3 py-1.5 text-xs font-semibold text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                      >
                        Open
                        <ArrowRight className="size-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  ) : (
                    <AdminActionForm
                      action={importBuiltInCourseAction}
                      hiddenFields={{ slug: course.slug }}
                      submitLabel={managed ? "Fill empty course" : "Import as draft"}
                      pendingLabel="Importing…"
                      submitVariant="outline"
                      submitSize="sm"
                      confirmMessage={`Import "${course.title}" into the admin workspace as a draft? Public pages stay unchanged until you publish.`}
                      feedback="after"
                      buttonClassName="rounded-full px-3"
                    />
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
      </div>
    </>
  );
}
