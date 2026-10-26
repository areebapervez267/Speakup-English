import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { CourseCard } from "@/components/course-card";
import { SectionHeading } from "@/components/section-heading";
import { featuredCourses, totalCourses } from "@/data/courses";

export function FeaturedCourses() {
  return (
    <section className="border-b border-brand-line/80 bg-brand-mist">
      <div className="site-container py-20 sm:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Featured courses"
            title={
              <>
                Learn something you can{" "}
                <span className="italic text-brand-teal-deep">use today.</span>
              </>
            }
            description="Focused courses at every stage of the path. Each one builds a single skill while keeping you connected to the level as a whole."
          />
          <Link
            href="/courses"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-brand-line bg-white px-4 py-2.5 text-sm font-semibold text-brand-navy shadow-sm transition-colors hover:border-brand-teal/40 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal sm:self-auto"
          >
            View all {totalCourses} courses
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 text-brand-teal-deep transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {featuredCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
