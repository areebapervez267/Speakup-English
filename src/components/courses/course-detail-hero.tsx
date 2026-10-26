import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  Layers3,
  LockKeyhole,
} from "lucide-react";

import { SkillIcon } from "@/components/skill-icon";
import { buttonVariants } from "@/components/ui/button";
import type { CourseDetail } from "@/data/course-details";
import { getLevel, getSkill } from "@/data/curriculum";
import { courseHasAccess, isPremiumCourse } from "@/lib/premium/policy";
import type { PremiumAccess } from "@/lib/premium/types";
import { cn } from "@/lib/utils";

export function CourseDetailHero({
  detail,
  access,
}: {
  detail: CourseDetail;
  access: PremiumAccess;
}) {
  const { course } = detail;
  const level = getLevel(course.level);
  const skill = getSkill(course.skill);
  const premium = isPremiumCourse(course);
  const unlocked = courseHasAccess(course, access.active);
  const firstLesson = detail.units
    .flatMap((unit) => unit.lessons)
    .find((lesson) => lesson.slug);
  const canStart = detail.hasFullContent && Boolean(firstLesson?.slug);
  const premiumLocked = premium && !unlocked;
  const primaryHref =
    canStart && !premiumLocked
      ? `/courses/${course.slug}/lessons/${firstLesson?.slug}`
      : premiumLocked
        ? "/premium"
        : "#outline";
  const primaryLabel =
    canStart && !premiumLocked
      ? "Start lesson 1"
      : premiumLocked
        ? "View Premium plans"
        : "View the full outline";

  const facts: Array<[string, string]> = [
    ["Level", `${level.label} · ${level.name}`],
    ["Skill", skill.label],
    ["Units", `${detail.units.length}`],
    ["Lessons", `${course.lessons}`],
    ["Total time", `${course.hours} hours`],
    ["Access", premium ? (unlocked ? "Premium · Included" : "Premium") : "Free"],
  ];

  return (
    <section className="relative overflow-hidden border-b border-brand-line bg-brand-mist">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-faint opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 size-[30rem] rounded-full border border-brand-line/80"
      />

      <div className="site-container relative py-9 sm:py-12 lg:py-16">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-brand-body">
            <li>
              <Link
                href="/"
                className="rounded-sm transition-colors hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-brand-body/40">
              /
            </li>
            <li>
              <Link
                href="/courses"
                className="rounded-sm transition-colors hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
              >
                Courses
              </Link>
            </li>
            <li aria-hidden="true" className="text-brand-body/40">
              /
            </li>
            <li aria-current="page" className="min-w-0 text-brand-navy">
              <span className="block max-w-[15rem] truncate sm:max-w-sm">
                {course.title}
              </span>
            </li>
          </ol>
        </nav>

        <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start lg:gap-14">
          <div className="min-w-0">
            <ul className="flex flex-wrap items-center gap-2">
              <li className="inline-flex items-center rounded-full bg-brand-teal-soft px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand-teal-deep">
                {level.label} · {level.name}
              </li>
              <li className="inline-flex items-center gap-1.5 rounded-full border border-brand-line bg-white px-3 py-1.5 text-xs font-semibold text-brand-navy shadow-sm">
                <SkillIcon
                  skill={course.skill}
                  className="size-3.5 text-brand-teal-deep"
                />
                {skill.label}
              </li>
              <li
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em]",
                  course.premium
                    ? "bg-brand-navy text-white"
                    : "border border-brand-line bg-white text-brand-teal-deep shadow-sm",
                )}
              >
                {premium && (
                  <LockKeyhole className="size-3" aria-hidden="true" />
                )}
                {premium ? (unlocked ? "Premium · Included" : "Premium") : "Free"}
              </li>
            </ul>

            <h1 className="mt-5 text-balance font-display text-[2.15rem] font-medium leading-[1.02] tracking-[-0.03em] text-brand-navy sm:text-[2.8rem] lg:text-[3.25rem]">
              {course.title}
            </h1>

            <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-brand-ink sm:text-lg sm:leading-8">
              {course.summary}
            </p>
            <p className="mt-3 max-w-2xl text-pretty text-sm leading-7 text-brand-body sm:text-[0.95rem]">
              {detail.overview}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs font-medium text-brand-body sm:text-sm">
              <span className="inline-flex items-center gap-1.5">
                <BookOpen
                  aria-hidden="true"
                  className="size-4 text-brand-teal-deep"
                />
                {course.lessons} lessons
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Layers3
                  aria-hidden="true"
                  className="size-4 text-brand-teal-deep"
                />
                {detail.units.length} units
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3
                  aria-hidden="true"
                  className="size-4 text-brand-teal-deep"
                />
                {course.hours} hours
              </span>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={primaryHref}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 rounded-full bg-brand-navy px-5 text-sm font-semibold text-white shadow-sm hover:bg-brand-teal-deep",
                )}
              >
                {primaryLabel}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/courses"
                className="inline-flex h-11 items-center justify-center rounded-full border border-brand-line bg-white px-5 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-teal/40 hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
              >
                Back to all courses
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl border border-brand-line bg-white p-5 shadow-card sm:p-6">
            <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-brand-teal-deep">
              At a glance
            </p>

            <dl className="mt-3 divide-y divide-brand-line text-sm">
              {facts.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 py-2.5"
                >
                  <dt className="text-brand-body">{label}</dt>
                  <dd className="text-right font-semibold text-brand-navy">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="my-4 border-t border-brand-line" />

            <div className="flex gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-teal-soft text-brand-teal-deep">
                <BookOpen className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold text-brand-navy">
                  {detail.hasFullContent
                    ? "Full lesson content"
                    : "Complete course outline"}
                </p>
                <p className="mt-1 text-xs leading-5 text-brand-body">
                  {detail.hasFullContent
                    ? "Every lesson includes explanations, examples, guided practice, instant-feedback exercises and an end-of-lesson quiz."
                    : "The full planned syllabus is shown below so you can see exactly what the course covers."}
                </p>
              </div>
            </div>

            {premium && (
              <p className="mt-4 rounded-xl bg-brand-mist px-3.5 py-2.5 text-xs leading-5 text-brand-body">
                {unlocked ? (
                  "Included with your active Premium membership. Open any lesson to continue."
                ) : (
                  <>
                    Premium course. Lesson pages stay as a preview until you
                    have an active membership.{" "}
                    <Link
                      href="/premium"
                      className="font-semibold text-brand-teal-deep underline decoration-brand-teal/40 underline-offset-4 hover:text-brand-navy"
                    >
                      See Premium plans
                    </Link>
                    .
                  </>
                )}
              </p>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
