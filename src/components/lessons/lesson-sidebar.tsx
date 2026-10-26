import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";

import type { CourseDetail } from "@/data/course-details";
import { cn } from "@/lib/utils";

export function LessonSidebar({
  detail,
  currentSlug,
  currentNumber,
  locked = false,
}: {
  detail: CourseDetail;
  currentSlug: string;
  currentNumber: number;
  locked?: boolean;
}) {
  return (
    <nav
      aria-label={`${detail.course.title} lessons`}
      className="rounded-2xl border border-brand-line bg-white p-4 shadow-sm"
    >
      <Link
        href={`/courses/${detail.course.slug}`}
        className="inline-flex items-center gap-1.5 rounded-full text-xs font-semibold text-brand-body transition-colors hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
      >
        <ArrowLeft className="size-3.5" aria-hidden="true" />
        Course overview
      </Link>

      <p className="mt-4 text-sm font-bold leading-snug text-brand-navy">
        {detail.course.title}
      </p>
      <p className="mt-1 text-xs text-brand-body">
        Lesson {currentNumber} of {detail.course.lessons}
      </p>

      {locked ? (
        <p className="mt-3 flex items-start gap-2 rounded-lg bg-brand-mist px-2.5 py-2 text-[0.7rem] leading-5 text-brand-body">
          <Lock className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
          Premium lessons open with an active membership.
        </p>
      ) : null}

      <div className="mt-4 max-h-[calc(100vh-15rem)] space-y-4 overflow-y-auto pr-1">
        {detail.units.map((unit, unitIndex) => (
          <div key={unit.title}>
            <p className="px-2 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-brand-body/80">
              Unit {unitIndex + 1} · {unit.title}
            </p>
            <ul className="mt-1.5 space-y-0.5">
              {unit.lessons.map((lesson) =>
                lesson.slug ? (
                  <li key={lesson.number}>
                    <Link
                      href={`/courses/${detail.course.slug}/lessons/${lesson.slug}`}
                      aria-current={
                        lesson.slug === currentSlug ? "page" : undefined
                      }
                      className={cn(
                        "flex gap-2 rounded-lg px-2 py-1.5 text-xs leading-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal",
                        lesson.slug === currentSlug
                          ? "bg-brand-navy font-semibold text-white"
                          : "text-brand-body hover:bg-brand-mist hover:text-brand-navy",
                      )}
                    >
                      <span
                        className={cn(
                          "w-4 shrink-0 text-right tabular-nums",
                          lesson.slug === currentSlug
                            ? "text-white/60"
                            : "text-brand-body/60",
                        )}
                      >
                        {lesson.number}
                      </span>
                      <span className="min-w-0">{lesson.title}</span>
                    </Link>
                  </li>
                ) : null,
              )}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
