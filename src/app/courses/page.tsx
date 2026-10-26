import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, BadgeCheck, Layers3, LockKeyhole } from "lucide-react";

import {
  CatalogSkeleton,
  CourseCatalog,
} from "@/components/courses/course-catalog";
import { cefrLevels, skills } from "@/data/curriculum";
import { getCatalogCourses } from "@/lib/content/published";

export async function generateMetadata(): Promise<Metadata> {
  const catalog = await getCatalogCourses();

  return {
    title: "English courses A1–C2",
    description: `Explore ${catalog.length} CEFR-aligned English courses across grammar, listening, speaking, pronunciation, vocabulary, reading and writing. A1–B2 are free; C1–C2 are part of Premium.`,
  };
}

type CoursesPageProps = {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

export default async function CoursesPage({
  searchParams,
}: CoursesPageProps) {
  const catalog = await getCatalogCourses();
  const totalCourses = catalog.length;
  const freeCourseCount = catalog.filter((course) => !course.premium).length;
  const premiumCourseCount = totalCourses - freeCourseCount;

  return (
    <>
      <section className="relative overflow-hidden border-b border-brand-line bg-brand-mist">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid-faint opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-40 size-[30rem] rounded-full border border-brand-line/80"
        />

        <div className="site-container relative py-12 sm:py-16 lg:py-20">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs font-medium text-brand-body">
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
              <li aria-current="page" className="text-brand-navy">
                Courses
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_19rem] lg:items-end lg:gap-16">
            <div className="max-w-3xl">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-brand-teal-deep">
                The course library
              </p>
              <h1 className="mt-4 text-balance font-display text-[2.6rem] font-medium leading-[0.98] tracking-[-0.03em] text-brand-navy sm:text-5xl lg:text-[3.6rem]">
                Every level. Every skill.{" "}
                <span className="italic text-brand-teal-deep">
                  One clear path.
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-brand-body sm:text-lg sm:leading-8">
                Explore {totalCourses} structured English courses from A1 to C2.
                Focus on one skill or build a complete level — every course
                shows exactly where you are heading.
              </p>

              <ul className="mt-7 flex flex-wrap gap-2">
                <li className="inline-flex items-center gap-1.5 rounded-full border border-brand-line bg-white px-3 py-1.5 text-xs font-semibold text-brand-navy shadow-sm">
                  <BadgeCheck
                    className="size-3.5 text-brand-teal-deep"
                    aria-hidden="true"
                  />
                  {cefrLevels.length} CEFR levels
                </li>
                <li className="inline-flex items-center gap-1.5 rounded-full border border-brand-line bg-white px-3 py-1.5 text-xs font-semibold text-brand-navy shadow-sm">
                  <Layers3
                    className="size-3.5 text-brand-teal-deep"
                    aria-hidden="true"
                  />
                  {skills.length} core skills
                </li>
                <li className="inline-flex items-center gap-1.5 rounded-full border border-brand-line bg-white px-3 py-1.5 text-xs font-semibold text-brand-navy shadow-sm">
                  {freeCourseCount} free A1–B2 courses
                </li>
                <li className="inline-flex items-center gap-1.5 rounded-full border border-brand-line bg-white px-3 py-1.5 text-xs font-semibold text-brand-navy shadow-sm">
                  <LockKeyhole
                    className="size-3.5 text-brand-teal-deep"
                    aria-hidden="true"
                  />
                  {premiumCourseCount} premium C1–C2
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-brand-line bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-brand-navy">
                Not sure where to begin?
              </p>
              <p className="mt-1.5 text-sm leading-6 text-brand-body">
                Compare the six CEFR levels and choose the one that matches
                what you can already do.
              </p>
              <Link
                href="/#levels"
                className="group mt-4 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-brand-navy transition-colors hover:text-brand-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
              >
                Compare levels
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="site-container py-10 sm:py-14 lg:py-16">
          <Suspense fallback={<CatalogSkeleton />}>
            <CourseCatalog searchParams={searchParams} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
