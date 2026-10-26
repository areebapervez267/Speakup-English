import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type LessonLink = {
  slug: string;
  title: string;
};

export function LessonPagination({
  courseSlug,
  previous,
  next,
}: {
  courseSlug: string;
  previous: LessonLink | null;
  next: LessonLink | null;
}) {
  const courseHref = `/courses/${courseSlug}`;

  return (
    <nav
      aria-label="Lesson navigation"
      className="mt-12 grid gap-3 border-t border-brand-line pt-8 sm:grid-cols-2"
    >
      {previous ? (
        <Link
          href={`${courseHref}/lessons/${previous.slug}`}
          className="group flex items-start gap-3 rounded-2xl border border-brand-line bg-white p-4 transition-colors hover:border-brand-teal/40 hover:bg-brand-mist/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal sm:p-5"
        >
          <ArrowLeft
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-brand-teal-deep transition-transform duration-200 group-hover:-translate-x-0.5"
          />
          <span className="min-w-0">
            <span className="block text-[0.6rem] font-bold uppercase tracking-[0.14em] text-brand-body">
              Previous lesson
            </span>
            <span className="mt-1 block text-sm font-semibold leading-6 text-brand-navy">
              {previous.title}
            </span>
          </span>
        </Link>
      ) : (
        <Link
          href={courseHref}
          className="group flex items-start gap-3 rounded-2xl border border-brand-line bg-white p-4 transition-colors hover:border-brand-teal/40 hover:bg-brand-mist/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal sm:p-5"
        >
          <ArrowLeft
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-brand-teal-deep transition-transform duration-200 group-hover:-translate-x-0.5"
          />
          <span className="min-w-0">
            <span className="block text-[0.6rem] font-bold uppercase tracking-[0.14em] text-brand-body">
              Course overview
            </span>
            <span className="mt-1 block text-sm font-semibold leading-6 text-brand-navy">
              All lessons in this course
            </span>
          </span>
        </Link>
      )}

      {next ? (
        <Link
          href={`${courseHref}/lessons/${next.slug}`}
          className="group flex items-start justify-between gap-4 rounded-2xl bg-brand-navy p-4 text-white transition-colors hover:bg-brand-navy-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 sm:col-start-2 sm:p-5 sm:text-right"
        >
          <span className="min-w-0">
            <span className="block text-[0.6rem] font-bold uppercase tracking-[0.14em] text-white/55">
              Next lesson
            </span>
            <span className="mt-1 block text-sm font-semibold leading-6">
              {next.title}
            </span>
          </span>
          <ArrowRight
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-brand-teal transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </Link>
      ) : (
        <Link
          href={courseHref}
          className="group flex items-start justify-between gap-4 rounded-2xl bg-brand-navy p-4 text-white transition-colors hover:bg-brand-navy-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 sm:col-start-2 sm:p-5 sm:text-right"
        >
          <span className="min-w-0">
            <span className="block text-[0.6rem] font-bold uppercase tracking-[0.14em] text-white/55">
              End of course
            </span>
            <span className="mt-1 block text-sm font-semibold leading-6">
              Review the course outline
            </span>
          </span>
          <ArrowRight
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-brand-teal transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </Link>
      )}
    </nav>
  );
}
