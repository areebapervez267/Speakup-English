import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";

import { CourseCard } from "@/components/course-card";
import { CourseDetailHero } from "@/components/courses/course-detail-hero";
import { CourseOutline } from "@/components/courses/course-outline";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { brand } from "@/config/brand";
import { getRelatedCoursesFrom } from "@/data/course-details";
import { getLevel, getSkill } from "@/data/curriculum";
import {
  getCatalogCourses,
  getPublicCourseSlugs,
  resolveCourseDetail,
} from "@/lib/content/published";
import { getPremiumAccess } from "@/lib/premium/access";
import { courseHasAccess, isPremiumCourse } from "@/lib/premium/policy";
import { cn } from "@/lib/utils";

type CoursePageProps = {
  params: Promise<{ slug: string }>;
};

// Course content is fully static, so navigation may block while the route renders.
export const instant = false;

export async function generateStaticParams() {
  const slugs = await getPublicCourseSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const resolved = await resolveCourseDetail(slug);

  if (!resolved) {
    return { title: "Course not found" };
  }

  const { course } = resolved.detail;
  const level = getLevel(course.level);
  const skill = getSkill(course.skill);

  return {
    title: `${course.title} — ${level.label} ${skill.label} course`,
    description: course.summary,
    openGraph: {
      title: `${course.title} | ${brand.name}`,
      description: course.summary,
      siteName: brand.name,
      type: "website",
    },
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const resolved = await resolveCourseDetail(slug);

  if (!resolved) {
    notFound();
  }

  const detail = resolved.detail;
  const { course } = detail;
  const level = getLevel(course.level);
  const skill = getSkill(course.skill);
  const access = await getPremiumAccess();
  const catalog = await getCatalogCourses();
  const related = getRelatedCoursesFrom(catalog, course);
  const locked = isPremiumCourse(course) && !courseHasAccess(course, access.active);

  return (
    <>
      <CourseDetailHero detail={detail} access={access} />

      <section className="border-b border-brand-line bg-white">
        <div className="site-container py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-14">
            <SectionHeading
              eyebrow="Learning outcomes"
              title={
                <>
                  What you will be
                  <br className="hidden sm:block" /> able to do
                </>
              }
              description="Each course is built around a small set of practical outcomes, so you always know what progress looks like."
            />

            <ul className="grid gap-3 sm:grid-cols-2">
              {detail.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-3 rounded-2xl border border-brand-line bg-brand-mist/50 p-4 text-sm leading-6 text-brand-ink"
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-teal-soft text-brand-teal-deep">
                    <Check className="size-3" aria-hidden="true" />
                  </span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="outline"
        className="border-b border-brand-line bg-brand-mist/60"
      >
        <div className="site-container py-12 lg:py-16">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Curriculum"
              title="Course outline"
              description={
                detail.hasFullContent
                  ? "Work through the units in order. Every lesson includes clear explanations, examples, practice exercises and a quiz."
                  : "The complete planned syllabus, unit by unit. Lesson content for this course will be added as the library expands."
              }
            />
            <p className="shrink-0 rounded-full border border-brand-line bg-white px-4 py-2 text-xs font-semibold text-brand-navy shadow-sm">
              {detail.units.length} units · {course.lessons} lessons ·{" "}
              {course.hours} hours
            </p>
          </div>

          <div className="mt-8">
            <CourseOutline detail={detail} locked={locked} />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-white">
          <div className="site-container py-12 lg:py-16">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Keep going"
                title="Related courses"
                description={`More ${skill.label.toLowerCase()} courses and ${level.label} options to explore next.`}
              />
              <Link
                href="/courses"
                className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-brand-line bg-white px-4 py-2.5 text-sm font-semibold text-brand-navy shadow-sm transition-colors hover:border-brand-teal/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal sm:self-auto"
              >
                View all courses
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 text-brand-teal-deep transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedCourse) => (
                <CourseCard key={relatedCourse.slug} course={relatedCourse} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-brand-line bg-brand-mist">
        <div className="site-container py-10 sm:py-12">
          <div className="flex flex-col gap-5 rounded-3xl bg-brand-navy p-6 text-white shadow-lift sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-brand-teal">
                Not sure about the level?
              </p>
              <p className="mt-2 max-w-xl text-pretty font-display text-2xl leading-snug text-white sm:text-[1.7rem]">
                Compare what you can already do at each CEFR level.
              </p>
            </div>
            <Link
              href="/#levels"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 shrink-0 rounded-full bg-white px-5 text-sm font-semibold text-brand-navy hover:bg-brand-teal-soft",
              )}
            >
              Compare levels
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
