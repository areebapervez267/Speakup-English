import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock3 } from "lucide-react";

import { SkillIcon } from "@/components/skill-icon";
import type { Course } from "@/data/courses";
import { getLevel, getSkill } from "@/data/curriculum";
import { cn } from "@/lib/utils";

export function CourseCard({ course }: { course: Course }) {
  const level = getLevel(course.level);
  const skill = getSkill(course.skill);
  const titleId = `course-${course.slug}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-line bg-white transition-[border-color,box-shadow] duration-300 hover:border-brand-teal/45 hover:shadow-card"
    >
      <Link
        href={`/courses/${course.slug}`}
        className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-teal"
      >
        <span className="sr-only">View {course.title}</span>
      </Link>

      <div
        className={cn(
          "relative flex h-32 flex-col justify-between overflow-hidden border-b px-5 py-4",
          course.premium
            ? "border-white/10 bg-brand-navy"
            : "border-brand-line bg-brand-mist",
        )}
      >
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0",
            course.premium
              ? "bg-dot-light opacity-40"
              : "bg-dot-faint opacity-60",
          )}
        />
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -bottom-7 right-1 select-none font-display text-[7rem] font-medium leading-none tracking-[-0.04em]",
            course.premium
              ? "text-white/[0.07]"
              : "text-brand-navy/[0.06]",
          )}
        >
          {level.label}
        </span>

        <div className="relative flex items-start justify-between">
          <span
            className={cn(
              "grid size-11 place-items-center rounded-xl border shadow-sm",
              course.premium
                ? "border-white/10 bg-white/10 text-white"
                : "border-brand-line bg-white text-brand-navy",
            )}
          >
            <SkillIcon skill={course.skill} />
          </span>

          <span
            className={cn(
              "rounded-full px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.13em]",
              course.premium
                ? "bg-brand-teal text-brand-navy"
                : "border border-brand-line bg-white text-brand-teal-deep",
            )}
          >
            {course.premium ? "Premium" : "Free"}
          </span>
        </div>

        <p
          className={cn(
            "relative inline-flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em]",
            course.premium ? "text-white/70" : "text-brand-body",
          )}
        >
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-brand-teal"
          />
          {skill.label}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="whitespace-nowrap text-[0.68rem] font-bold uppercase tracking-[0.14em] text-brand-teal-deep">
          {level.label} · {level.name}
        </p>

        <h3
          id={titleId}
          className="mt-2.5 text-balance text-lg font-bold leading-snug tracking-[-0.015em] text-brand-navy"
        >
          {course.title}
        </h3>

        <p className="mb-5 mt-2 line-clamp-3 text-sm leading-6 text-brand-body">
          {course.summary}
        </p>

        <div className="mt-auto flex items-center gap-4 border-t border-brand-line pt-4 text-xs font-medium text-brand-body">
          <span className="inline-flex items-center gap-1.5">
            <BookOpen
              aria-hidden="true"
              className="size-3.5 text-brand-teal-deep"
            />
            {course.lessons} lessons
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3
              aria-hidden="true"
              className="size-3.5 text-brand-teal-deep"
            />
            {course.hours} hours
          </span>
          <ArrowUpRight
            aria-hidden="true"
            className="ml-auto size-4 text-brand-teal-deep transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </article>
  );
}
