import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, LockKeyhole } from "lucide-react";

import type { CourseDetail } from "@/data/course-details";

function formatUnitTime(minutes: number) {
  if (minutes < 60) {
    return `${minutes} min`;
  }

  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  const hourLabel = `${hours} ${hours === 1 ? "hour" : "hours"}`;

  return remainder === 0 ? hourLabel : `${hourLabel} ${remainder} min`;
}

export function CourseOutline({
  detail,
  locked = false,
}: {
  detail: CourseDetail;
  locked?: boolean;
}) {
  const { course, units, hasFullContent } = detail;

  return (
    <div>
      {locked && (
        <div className="mb-6 flex gap-3 rounded-2xl border border-brand-line bg-white p-4 shadow-sm sm:items-start">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-navy text-white">
            <LockKeyhole className="size-4" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-bold text-brand-navy">
              Premium curriculum
            </p>
            <p className="mt-1 text-sm leading-6 text-brand-body">
              Lesson pages show a preview. Full lessons, quizzes and saved
              progress open with an active Premium membership.
            </p>
          </div>
        </div>
      )}

      {!hasFullContent && (
        <div className="mb-6 flex gap-3 rounded-2xl border border-brand-line bg-white p-4 shadow-sm sm:items-start">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-teal-soft text-brand-teal-deep">
            <BookOpen className="size-4" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-bold text-brand-navy">
              This is the complete planned syllabus
            </p>
            <p className="mt-1 text-sm leading-6 text-brand-body">
              The lesson list below shows exactly what this course will cover.
              Interactive lesson content is available for all seven A1 courses.
              At other levels, lessons become interactive as they are
              published.
            </p>
          </div>
        </div>
      )}

      <div className="grid gap-5 lg:grid-cols-2">
        {units.map((unit, unitIndex) => (
          <section
            key={unit.title}
            aria-labelledby={`course-unit-${unitIndex + 1}`}
            className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand-line bg-white shadow-sm"
          >
            <div className="border-b border-brand-line px-5 py-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-brand-teal-deep">
                  Unit {String(unitIndex + 1).padStart(2, "0")}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-brand-body">
                  <Clock3 className="size-3.5" aria-hidden="true" />
                  {formatUnitTime(
                    unit.lessons.reduce(
                      (total, lesson) => total + lesson.minutes,
                      0,
                    ),
                  )}
                </span>
              </div>
              <h3
                id={`course-unit-${unitIndex + 1}`}
                className="mt-2 text-lg font-bold leading-snug text-brand-navy"
              >
                {unit.title}
              </h3>
              {unit.description && (
                <p className="mt-1.5 text-sm leading-6 text-brand-body">
                  {unit.description}
                </p>
              )}
            </div>

            <ol className="flex-1 px-2 py-2">
              {unit.lessons.map((lesson) => {
                const rowContent = (
                  <>
                    <span className="w-5 shrink-0 text-right text-xs font-semibold tabular-nums text-brand-body/70">
                      {lesson.number}
                    </span>
                    <span className="min-w-0 flex-1 text-sm font-medium leading-6 text-brand-navy">
                      {lesson.title}
                    </span>
                    <span className="hidden shrink-0 items-center gap-1 text-[0.68rem] text-brand-body min-[420px]:inline-flex">
                      <Clock3 className="size-3" aria-hidden="true" />
                      {lesson.minutes}m
                    </span>
                    {lesson.slug ? (
                      locked ? (
                        <LockKeyhole
                          aria-hidden="true"
                          className="size-4 shrink-0 text-brand-teal-deep"
                        />
                      ) : (
                        <ArrowRight
                          aria-hidden="true"
                          className="size-4 shrink-0 text-brand-teal-deep transition-transform duration-200 group-hover:translate-x-0.5"
                        />
                      )
                    ) : (
                      <span className="shrink-0 rounded-full border border-brand-line bg-brand-mist px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-[0.1em] text-brand-body">
                        Outline
                      </span>
                    )}
                  </>
                );

                return (
                  <li key={lesson.number}>
                    {lesson.slug ? (
                      <Link
                        href={`/courses/${course.slug}/lessons/${lesson.slug}`}
                        className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                      >
                        {rowContent}
                      </Link>
                    ) : (
                      <div className="flex items-start gap-3 px-3 py-2.5">
                        {rowContent}
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
