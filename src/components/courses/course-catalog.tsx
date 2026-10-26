import Link from "next/link";
import type { ReactNode } from "react";
import { LockKeyhole, Search, SearchX, X } from "lucide-react";

import { CourseCard } from "@/components/course-card";
import { SkillIcon } from "@/components/skill-icon";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  cefrLevels,
  getLevel,
  getSkill,
  isCefrLevelId,
  isSkillId,
  skills,
  type CefrLevelId,
  type SkillId,
} from "@/data/curriculum";
import { filterCourseList } from "@/data/courses";
import { getCatalogCourses } from "@/lib/content/published";
import { cn } from "@/lib/utils";

type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export async function CourseCatalog({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const levelParam = firstValue(params.level);
  const skillParam = firstValue(params.skill);
  const queryParam = firstValue(params.q)?.trim().slice(0, 80) ?? "";

  const level: CefrLevelId | "all" = isCefrLevelId(levelParam)
    ? levelParam
    : "all";
  const skill: SkillId | "all" = isSkillId(skillParam) ? skillParam : "all";
  const query = queryParam;

  const catalog = await getCatalogCourses();
  const filtered = filterCourseList(catalog, { level, skill, query });
  const hasFilters = level !== "all" || skill !== "all" || query.length > 0;

  function buildHref({
    nextLevel = level,
    nextSkill = skill,
    nextQuery = query,
  }: {
    nextLevel?: CefrLevelId | "all";
    nextSkill?: SkillId | "all";
    nextQuery?: string;
  }) {
    const nextParams = new URLSearchParams();

    if (nextLevel !== "all") {
      nextParams.set("level", nextLevel);
    }
    if (nextSkill !== "all") {
      nextParams.set("skill", nextSkill);
    }
    if (nextQuery.trim()) {
      nextParams.set("q", nextQuery.trim());
    }

    const queryString = nextParams.toString();
    return queryString ? `/courses?${queryString}` : "/courses";
  }

  const contextLabel =
    level === "all"
      ? "all levels"
      : `${getLevel(level).label} ${getLevel(level).name}`;
  const skillLabel =
    skill === "all" ? "all skills" : getSkill(skill).label;

  return (
    <div>
      <h2 className="sr-only">Filter the course library</h2>

      <div className="rounded-3xl border border-brand-line bg-white p-4 shadow-sm sm:p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="min-w-0 flex-1 space-y-3.5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-3">
              <span className="w-14 shrink-0 pt-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-brand-body sm:w-16">
                Level
              </span>
              <div className="flex flex-wrap gap-2">
                <FilterPill
                  href={buildHref({ nextLevel: "all" })}
                  active={level === "all"}
                >
                  All levels
                </FilterPill>
                {cefrLevels.map((item) => (
                  <FilterPill
                    key={item.id}
                    href={buildHref({ nextLevel: item.id })}
                    active={level === item.id}
                  >
                    {item.label}
                    {item.premium && (
                      <>
                        <LockKeyhole
                          className="size-3 opacity-70"
                          aria-hidden="true"
                        />
                        <span className="sr-only"> premium</span>
                      </>
                    )}
                  </FilterPill>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-3">
              <span className="w-14 shrink-0 pt-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-brand-body sm:w-16">
                Skill
              </span>
              <div className="flex flex-wrap gap-2">
                <FilterPill
                  href={buildHref({ nextSkill: "all" })}
                  active={skill === "all"}
                >
                  All skills
                </FilterPill>
                {skills.map((item) => (
                  <FilterPill
                    key={item.id}
                    href={buildHref({ nextSkill: item.id })}
                    active={skill === item.id}
                  >
                    <SkillIcon skill={item.id} className="size-3.5" />
                    {item.label}
                  </FilterPill>
                ))}
              </div>
            </div>
          </div>

          <form
            action="/courses"
            method="get"
            role="search"
            className="w-full shrink-0 lg:max-w-xs"
          >
            {level !== "all" && (
              <input type="hidden" name="level" value={level} />
            )}
            {skill !== "all" && (
              <input type="hidden" name="skill" value={skill} />
            )}
            <label htmlFor="course-search" className="sr-only">
              Search courses
            </label>
            <div className="flex gap-2">
              <div className="relative min-w-0 flex-1">
                <Search
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-brand-body"
                />
                <Input
                  id="course-search"
                  name="q"
                  type="search"
                  defaultValue={query}
                  placeholder="Search courses"
                  maxLength={80}
                  className="h-11 rounded-full border-brand-line bg-brand-mist/60 pl-10 pr-4 text-sm placeholder:text-brand-body/70 focus-visible:border-brand-teal focus-visible:ring-brand-teal/20"
                />
              </div>
              <Button
                type="submit"
                className="h-11 shrink-0 rounded-full bg-brand-navy px-4 text-sm font-semibold text-white hover:bg-brand-teal-deep"
              >
                Search
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-brand-body">
          Showing{" "}
          <span className="font-semibold text-brand-navy">
            {filtered.length}
          </span>{" "}
          {filtered.length === 1 ? "course" : "courses"} · {contextLabel} ·{" "}
          {skillLabel}
          {query && (
            <>
              {" "}
              for{" "}
              <span className="font-medium text-brand-navy">“{query}”</span>
            </>
          )}
        </p>
        {hasFilters && (
          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 rounded-full text-xs font-semibold text-brand-body transition-colors hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
          >
            <X className="size-3.5" aria-hidden="true" />
            Clear everything
          </Link>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-3xl border border-dashed border-brand-line bg-brand-mist/50 px-6 py-16 text-center">
          <span className="mx-auto grid size-12 place-items-center rounded-full bg-white text-brand-teal-deep shadow-sm">
            <SearchX className="size-5" aria-hidden="true" />
          </span>
          <h2 className="mt-5 font-display text-2xl text-brand-navy">
            No courses match those filters
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-brand-body">
            Try a different CEFR level, skill or search term. The full library
            covers all six levels, from A1 to C2.
          </p>
          <Link
            href="/courses"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-6 h-11 rounded-full bg-brand-navy px-5 text-sm font-semibold text-white hover:bg-brand-teal-deep",
            )}
          >
            Clear filters
          </Link>
        </div>
      )}

      <p className="mt-8 text-xs leading-5 text-brand-body">
        A1–B2 courses are always free. C1 and C2 are part of the Premium path.
        All {catalog.length} courses follow the same CEFR-aligned structure.
      </p>
    </div>
  );
}

function FilterPill({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "inline-flex h-9 items-center gap-1.5 rounded-full border px-3 text-[0.78rem] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-1",
        active
          ? "border-brand-navy bg-brand-navy text-white shadow-sm"
          : "border-brand-line bg-white text-brand-body hover:border-brand-teal/40 hover:text-brand-navy",
      )}
    >
      {children}
    </Link>
  );
}

export function CatalogSkeleton() {
  return (
    <div role="status" aria-label="Loading courses">
      <div aria-hidden="true">
        <div className="h-44 animate-pulse rounded-3xl border border-brand-line bg-brand-mist motion-reduce:animate-none sm:h-40" />
        <div className="mt-8 flex items-center justify-between">
          <div className="h-4 w-48 animate-pulse rounded-full bg-brand-mist motion-reduce:animate-none" />
          <div className="h-4 w-20 animate-pulse rounded-full bg-brand-mist motion-reduce:animate-none" />
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-[21rem] animate-pulse rounded-2xl border border-brand-line bg-brand-mist/70 motion-reduce:animate-none"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
