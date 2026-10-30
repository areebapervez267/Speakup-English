import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock3, Info, TriangleAlert, Target } from "lucide-react";

import { LessonContent } from "@/components/lessons/lesson-blocks";
import { LessonLocked } from "@/components/lessons/lesson-locked";
import { LessonPagination } from "@/components/lessons/lesson-pagination";
import { LessonProgressSection } from "@/components/lessons/lesson-progress";
import { LessonQuiz } from "@/components/lessons/lesson-quiz";
import { LessonSidebar } from "@/components/lessons/lesson-sidebar";
import { brand } from "@/config/brand";
import { getLevel } from "@/data/curriculum";
import {
  getPublishedLessonBody,
  getPublicLessonParams,
  getStaticLessonBody,
  resolveLessonOutline,
} from "@/lib/content/published";
import type { PublishedLessonBody } from "@/lib/content/types";
import { getPremiumAccess } from "@/lib/premium/access";
import { courseHasAccess, isPremiumCourse } from "@/lib/premium/policy";
import { pageCanonical } from "@/lib/seo";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type LessonPageProps = {
  params: Promise<{ slug: string; lessonSlug: string }>;
};

// Lesson access depends on the signed-in student's membership.
export const instant = false;

export async function generateStaticParams() {
  return getPublicLessonParams();
}

export async function generateMetadata({
  params,
}: LessonPageProps): Promise<Metadata> {
  const { slug, lessonSlug } = await params;
  const resolved = await resolveLessonOutline(slug, lessonSlug);

  if (!resolved) {
    return { title: "Lesson not found" };
  }

  return {
    title: `${resolved.lesson.title} — ${resolved.course.detail.course.title}`,
    description: resolved.lesson.summary,
    openGraph: {
      title: `${resolved.lesson.title} | ${brand.name}`,
      description: resolved.lesson.summary,
      siteName: brand.name,
      type: "website",
      url: `/courses/${slug}/lessons/${lessonSlug}`,
    },
    ...pageCanonical(`/courses/${slug}/lessons/${lessonSlug}`),
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug, lessonSlug } = await params;
  const [resolved, access] = await Promise.all([
    resolveLessonOutline(slug, lessonSlug),
    getPremiumAccess(),
  ]);

  if (!resolved) {
    notFound();
  }

  const { course: resolvedCourse, lesson, unitTitle, unitIndex, number } =
    resolved;
  const { detail } = resolvedCourse;
  const { course } = detail;
  const premium = isPremiumCourse(course);
  const allowed = courseHasAccess(course, access.active);

  let body: PublishedLessonBody | null = null;

  if (allowed) {
    if (resolvedCourse.source === "published") {
      const supabase = isSupabaseConfigured
        ? await createSupabaseServerClient().catch(() => null)
        : null;

      body = supabase
        ? await getPublishedLessonBody(slug, lessonSlug, supabase)
        : null;
    } else {
      body = getStaticLessonBody(slug, lessonSlug);
    }
  }

  const locked = premium && !allowed;
  const level = getLevel(course.level);

  return (
    <article>
      <header className="border-b border-brand-line bg-brand-mist">
        <div className="site-container py-8 sm:py-12">
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
              <li>
                <Link
                  href={`/courses/${course.slug}`}
                  className="block max-w-[11rem] truncate rounded-sm transition-colors hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal sm:max-w-xs"
                >
                  {course.title}
                </Link>
              </li>
              <li aria-hidden="true" className="text-brand-body/40">
                /
              </li>
              <li aria-current="page" className="text-brand-navy">
                Lesson {number}
              </li>
            </ol>
          </nav>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-brand-teal-soft px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-brand-teal-deep">
              Unit {unitIndex + 1} · {unitTitle}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-line bg-white px-3 py-1.5 text-xs font-semibold text-brand-navy shadow-sm">
              Lesson {number} of {resolved.totalLessons}
            </span>
            {premium ? (
              <span className="inline-flex items-center rounded-full bg-brand-navy px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-white">
                {level.label} Premium
              </span>
            ) : null}
            <span className="inline-flex items-center gap-1.5 px-1 text-xs font-medium text-brand-body">
              <Clock3 className="size-3.5" aria-hidden="true" />
              {lesson.minutes} minutes
            </span>
          </div>

          <h1 className="mt-4 max-w-3xl text-balance font-display text-[2.1rem] font-medium leading-[1.04] tracking-[-0.03em] text-brand-navy sm:text-[2.7rem] lg:text-[3rem]">
            {lesson.title}
          </h1>
          <p className="mt-3 max-w-2xl text-pretty text-base leading-7 text-brand-body sm:text-lg sm:leading-8">
            {lesson.summary}
          </p>

          <div className="mt-6 max-w-3xl rounded-2xl border border-brand-line bg-white p-4 shadow-sm sm:p-5">
            <p className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-brand-teal-deep">
              <Target className="size-3.5" aria-hidden="true" />
              Your goal for this lesson
            </p>
            <p className="mt-2 text-sm leading-6 text-brand-ink sm:text-[0.95rem]">
              {lesson.objective}
            </p>
          </div>

          {detail.practiceNote && (
            <div
              role="note"
              className="mt-3 flex max-w-3xl gap-3 rounded-2xl border border-brand-teal/25 bg-brand-teal-soft/40 p-4"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-brand-teal-deep shadow-sm">
                <Info className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold text-brand-navy">
                  {detail.practiceNote.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-brand-body">
                  {detail.practiceNote.text}
                </p>
              </div>
            </div>
          )}

          <Link
            href={`/courses/${course.slug}#outline`}
            className="group mt-5 inline-flex items-center gap-1.5 rounded-full text-sm font-semibold text-brand-teal-deep transition-colors hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal lg:hidden"
          >
            View all {course.lessons} lessons
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </header>

      <div className="bg-white">
        <div className="site-container grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-12 lg:py-14">
          <div className="min-w-0">
            <div className="max-w-3xl">
              {locked ? (
                <LessonLocked
                  access={access}
                  courseSlug={course.slug}
                  lessonSlug={lesson.slug}
                  levelLabel={level.label}
                />
              ) : body ? (
                <>
                  <LessonContent blocks={body.blocks} />

                  <div className="mt-12">
                    <LessonQuiz
                      questions={body.questions}
                      courseSlug={course.slug}
                      lessonSlug={lesson.slug}
                      configured={isSupabaseConfigured}
                    />
                  </div>

                  <LessonProgressSection
                    courseSlug={course.slug}
                    lessonSlug={lesson.slug}
                    returnPath={`/courses/${course.slug}/lessons/${lesson.slug}`}
                  />
                </>
              ) : (
                <div
                  role="alert"
                  className="flex gap-3 rounded-3xl border border-amber-200 bg-amber-50/70 p-5 text-sm leading-6 text-amber-950 sm:p-6"
                >
                  <TriangleAlert
                    className="mt-0.5 size-5 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-bold">Lesson content is unavailable</p>
                    <p className="mt-1">
                      We couldn&apos;t load this lesson right now. Refresh the
                      page to try again, or check your membership status on the
                      Premium plans page.
                    </p>
                    <Link
                      href="/premium"
                      className="mt-2 inline-flex font-semibold underline decoration-amber-700/40 underline-offset-4 hover:text-amber-800"
                    >
                      Check membership status
                    </Link>
                  </div>
                </div>
              )}

              <LessonPagination
                courseSlug={course.slug}
                previous={resolved.previous}
                next={resolved.next}
              />
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <LessonSidebar
                detail={detail}
                currentSlug={lesson.slug}
                currentNumber={number}
                locked={locked}
              />
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
