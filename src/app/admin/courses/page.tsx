import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FilterX,
  FolderSearch,
  Search,
  TriangleAlert,
} from "lucide-react";

import { AdminAccessPanel } from "@/components/admin/admin-access-panel";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { AdminStatusBadge } from "@/components/admin/admin-status-badge";
import {
  adminInputClass,
  adminSelectClass,
} from "@/components/admin/styles";
import { buttonVariants } from "@/components/ui/button";
import { cefrLevels, getLevel, getSkill, isCefrLevelId, isSkillId, skills } from "@/data/curriculum";
import { requireAdminPage } from "@/lib/admin/guard";
import { fetchAdminCourses } from "@/lib/admin/queries";
import type { AdminCourseFilters } from "@/lib/admin/types";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Courses",
  description: "Search, filter and manage course drafts.",
  robots: { index: false, follow: false },
};

type CourseSearchParams = Promise<{
  q?: string | string[];
  level?: string | string[];
  skill?: string | string[];
  status?: string | string[];
}>;

function firstValue(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }
  return value ?? "";
}

function parseFilters(params: Awaited<CourseSearchParams>): AdminCourseFilters {
  const rawLevel = firstValue(params.level);
  const rawSkill = firstValue(params.skill);
  const rawStatus = firstValue(params.status);

  return {
    query: firstValue(params.q).trim().slice(0, 120),
    level: isCefrLevelId(rawLevel) ? rawLevel : "all",
    skill: isSkillId(rawSkill) ? rawSkill : "all",
    status:
      rawStatus === "draft" ||
      rawStatus === "published" ||
      rawStatus === "archived"
        ? rawStatus
        : "all",
  };
}

function formatDate(value: string) {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      dateStyle: "medium",
      timeZone: "UTC",
    }).format(new Date(value));
  } catch {
    return value;
  }
}

export default async function AdminCoursesPage({
  searchParams,
}: {
  searchParams: CourseSearchParams;
}) {
  const access = await requireAdminPage("/admin/courses");

  if (access.status !== "granted") {
    return (
      <div className="mt-8">
        <AdminAccessPanel access={access} />
      </div>
    );
  }

  return (
    <>
      <AdminPageHeader
        eyebrow="Course library"
        title="Managed courses"
        description="Search and filter the courses saved in your Supabase workspace. Drafts stay private; published courses appear on public pages."
        actions={
          <Link
            href="/admin/courses/new"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-10 rounded-full px-4 text-sm font-semibold",
            )}
          >
            New course
          </Link>
        }
      />

      <CoursesContent searchParams={searchParams} />
    </>
  );
}

async function CoursesContent({
  searchParams,
}: {
  searchParams: CourseSearchParams;
}) {
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

  const filters = parseFilters(await searchParams);
  const result = await fetchAdminCourses(supabase);

  if (result.status === "error") {
    return (
      <div className="mt-8 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm leading-6 text-red-800">
        <TriangleAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
        <div>
          <p className="font-semibold">Courses unavailable</p>
          <p className="mt-1">{result.message}</p>
        </div>
      </div>
    );
  }

  const hasFilters =
    filters.query.length > 0 ||
    filters.level !== "all" ||
    filters.skill !== "all" ||
    filters.status !== "all";

  const normalizedQuery = filters.query.toLowerCase();
  const visible = result.data.filter((course) => {
    if (filters.level !== "all" && course.level !== filters.level) {
      return false;
    }
    if (filters.skill !== "all" && course.skill !== filters.skill) {
      return false;
    }
    if (filters.status !== "all" && course.status !== filters.status) {
      return false;
    }
    if (!normalizedQuery) {
      return true;
    }

    const searchable = [
      course.title,
      course.slug,
      course.summary,
      getLevel(course.level).label,
      getSkill(course.skill).label,
    ]
      .join(" ")
      .toLowerCase();

    return searchable.includes(normalizedQuery);
  });

  return (
    <div className="mt-8 space-y-6">
      <form
        method="get"
        action="/admin/courses"
        className="rounded-2xl border border-brand-line bg-white p-4 shadow-sm sm:p-5"
      >
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_9rem_10rem_9rem_auto] lg:items-end">
          <div className="min-w-0">
            <label
              htmlFor="course-search"
              className="block text-[0.68rem] font-bold uppercase tracking-[0.12em] text-brand-navy"
            >
              Search
            </label>
            <div className="relative mt-1.5">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-brand-body/60"
                aria-hidden="true"
              />
              <input
                id="course-search"
                name="q"
                defaultValue={filters.query}
                className={cn(adminInputClass, "pl-9")}
                placeholder="Title, slug or summary"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="course-level-filter"
              className="block text-[0.68rem] font-bold uppercase tracking-[0.12em] text-brand-navy"
            >
              Level
            </label>
            <select
              id="course-level-filter"
              name="level"
              defaultValue={filters.level}
              className={cn(adminSelectClass, "mt-1.5")}
            >
              <option value="all">All levels</option>
              {cefrLevels.map((level) => (
                <option key={level.id} value={level.id}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="course-skill-filter"
              className="block text-[0.68rem] font-bold uppercase tracking-[0.12em] text-brand-navy"
            >
              Skill
            </label>
            <select
              id="course-skill-filter"
              name="skill"
              defaultValue={filters.skill}
              className={cn(adminSelectClass, "mt-1.5")}
            >
              <option value="all">All skills</option>
              {skills.map((skill) => (
                <option key={skill.id} value={skill.id}>
                  {skill.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="course-status-filter"
              className="block text-[0.68rem] font-bold uppercase tracking-[0.12em] text-brand-navy"
            >
              Status
            </label>
            <select
              id="course-status-filter"
              name="status"
              defaultValue={filters.status}
              className={cn(adminSelectClass, "mt-1.5")}
            >
              <option value="all">All statuses</option>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="submit"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-10 rounded-full px-4 text-sm font-semibold",
              )}
            >
              Apply
            </button>
            {hasFilters ? (
              <Link
                href="/admin/courses"
                className="inline-flex h-10 items-center gap-1.5 rounded-full border border-brand-line bg-white px-3 text-xs font-semibold text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
              >
                <FilterX className="size-3.5" aria-hidden="true" />
                Reset
              </Link>
            ) : null}
          </div>
        </div>
      </form>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-brand-body" role="status">
          Showing{" "}
          <span className="font-semibold text-brand-navy">{visible.length}</span>{" "}
          of {result.data.length} managed{" "}
          {result.data.length === 1 ? "course" : "courses"}
          {hasFilters ? " matching your filters" : ""}.
        </p>
        <Link
          href="/admin#import-built-in"
          className="text-xs font-semibold text-brand-teal-deep underline decoration-brand-teal/40 underline-offset-4 transition-colors hover:text-brand-navy"
        >
          Import a built-in A1 course
        </Link>
      </div>

      {result.data.length === 0 ? (
        <section className="rounded-3xl border border-dashed border-brand-line bg-white px-6 py-12 text-center">
          <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-brand-teal-soft text-brand-teal-deep">
            <BookOpen className="size-5" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-display text-2xl font-medium text-brand-navy">
            No managed courses yet
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-brand-body">
            Create a new draft from scratch, or import one of the built-in A1
            courses to start from existing content. The built-in library remains
            available until a managed version is published.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <Link
              href="/admin/courses/new"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-10 rounded-full px-4 text-sm font-semibold",
              )}
            >
              Create a course
            </Link>
            <Link
              href="/admin#import-built-in"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-10 rounded-full px-4 text-sm font-semibold",
              )}
            >
              Import built-in content
            </Link>
          </div>
        </section>
      ) : visible.length === 0 ? (
        <section className="rounded-3xl border border-dashed border-brand-line bg-white px-6 py-12 text-center">
          <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-brand-mist text-brand-body">
            <FolderSearch className="size-5" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-display text-2xl font-medium text-brand-navy">
            No courses match those filters
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-brand-body">
            Try a shorter search, a different level or skill, or reset the
            filters to see every managed course.
          </p>
          <Link
            href="/admin/courses"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-5 h-10 rounded-full px-4 text-sm font-semibold",
            )}
          >
            Reset filters
          </Link>
        </section>
      ) : (
        <ul className="grid gap-4 xl:grid-cols-2">
          {visible.map((course) => {
            const level = getLevel(course.level);
            const skill = getSkill(course.skill);

            return (
              <li key={course.id}>
                <article className="flex h-full flex-col rounded-2xl border border-brand-line bg-white p-5 shadow-sm transition-shadow hover:shadow-card">
                  <div className="flex flex-wrap items-center gap-2">
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
                    <AdminStatusBadge tone="neutral">
                      {level.label} · {skill.label}
                    </AdminStatusBadge>
                    {course.premium ? (
                      <AdminStatusBadge tone="teal">Premium label</AdminStatusBadge>
                    ) : null}
                  </div>

                  <h2 className="mt-3 font-display text-xl font-medium leading-snug tracking-[-0.015em] text-brand-navy">
                    <Link
                      href={`/admin/courses/${course.id}`}
                      className="rounded-sm transition-colors hover:text-brand-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                    >
                      {course.title}
                    </Link>
                  </h2>
                  <p className="mt-0.5 font-mono text-[0.68rem] text-brand-body">
                    /courses/{course.slug}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-brand-body">
                    {course.summary}
                  </p>

                  <dl className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-xl bg-brand-mist/70 px-3 py-2">
                      <dt className="font-semibold text-brand-body">Units</dt>
                      <dd className="mt-0.5 font-bold text-brand-navy">
                        {course.unitCount}{" "}
                        <span className="font-medium text-brand-body">
                          ({course.publishedUnitCount} published)
                        </span>
                      </dd>
                    </div>
                    <div className="rounded-xl bg-brand-mist/70 px-3 py-2">
                      <dt className="font-semibold text-brand-body">Lessons</dt>
                      <dd className="mt-0.5 font-bold text-brand-navy">
                        {course.lessonCount}{" "}
                        <span className="font-medium text-brand-body">
                          ({course.publishedLessonCount} published)
                        </span>
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-4">
                    <p className="text-[0.68rem] text-brand-body">
                      Updated {formatDate(course.updatedAt)}
                      {course.hasPublishedSnapshot
                        ? " · live snapshot exists"
                        : ""}
                    </p>
                    <Link
                      href={`/admin/courses/${course.id}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-brand-line bg-white px-3 py-1.5 text-xs font-semibold text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                    >
                      Open workspace
                      <ArrowRight className="size-3.5 text-brand-teal-deep" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
