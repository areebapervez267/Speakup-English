import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Layers3,
  Sparkles,
} from "lucide-react";

import { Hero } from "@/components/home/hero";
import { LevelPath } from "@/components/home/level-path";
import { FeaturedCourses } from "@/components/home/featured-courses";
import { PricingSection } from "@/components/home/pricing-section";
import { FaqSection } from "@/components/home/faq-section";
import { SectionHeading } from "@/components/section-heading";
import { SkillIcon } from "@/components/skill-icon";
import { buttonVariants } from "@/components/ui/button";
import { cefrLevels, skills } from "@/data/curriculum";
import {
  freeCourseCount,
  premiumCourseCount,
  totalCourses,
} from "@/data/courses";
import { cn } from "@/lib/utils";
import { pageCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageCanonical("/"),
};

const stats = [
  { label: "CEFR levels, A1–C2", value: String(cefrLevels.length) },
  { label: "Skills in every level", value: String(skills.length) },
  { label: "Structured courses", value: String(totalCourses) },
  { label: "Free A1–B2 courses", value: String(freeCourseCount) },
];

const methodSteps = [
  {
    title: "Know your level",
    description:
      "Choose from six CEFR levels and start where you can already communicate. Every course makes its outcomes clear before you begin.",
    icon: GraduationCap,
  },
  {
    title: "Train all seven skills",
    description:
      "Grammar, listening, speaking, pronunciation, vocabulary, reading and writing connect within each level, so your progress holds together.",
    icon: Layers3,
  },
  {
    title: "Build lasting confidence",
    description:
      "Short, focused lessons help you turn knowledge into natural use — in real conversations, study, travel and work.",
    icon: Sparkles,
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section
        aria-label="SpeakUp English at a glance"
        className="border-b border-brand-line bg-brand-line"
      >
        <dl className="grid grid-cols-2 gap-px lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white px-5 py-7 sm:px-7 sm:py-8"
            >
              <dt className="text-[0.64rem] font-bold uppercase tracking-[0.16em] text-brand-body">
                {stat.label}
              </dt>
              <dd className="mt-2 font-display text-3xl font-medium leading-none text-brand-navy sm:text-[2.15rem]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        id="skills"
        className="border-b border-brand-line/80 bg-brand-mist"
      >
        <div className="site-container py-20 sm:py-24 lg:py-28">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="The complete curriculum"
              title={
                <>
                  One language.
                  <br />
                  <span className="italic text-brand-teal-deep">
                    Seven essential skills.
                  </span>
                </>
              }
              description="English is more than a list of grammar rules. Every level brings all seven skills together, so each course makes the next one easier."
            />
            <p className="max-w-xs text-sm leading-6 text-brand-body sm:text-right">
              <span className="font-semibold text-brand-navy">
                {totalCourses} courses
              </span>
              <br />
              Six levels · Seven skills
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <Link
                key={skill.id}
                href={`/courses?skill=${skill.id}`}
                className="group flex h-full flex-col rounded-2xl border border-brand-line bg-white p-5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-brand-teal/45 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-brand-mist text-brand-navy transition-colors duration-300 group-hover:bg-brand-teal-soft group-hover:text-brand-teal-deep">
                    <SkillIcon skill={skill.id} />
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-display text-sm italic text-brand-body/35"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-7 text-base font-bold tracking-[-0.01em] text-brand-navy transition-colors group-hover:text-brand-teal-deep">
                  {skill.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-brand-body">
                  {skill.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand-teal-deep transition-opacity duration-200 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
                  Explore courses
                  <ArrowUpRight className="size-3" aria-hidden="true" />
                </span>
              </Link>
            ))}

            <Link
              href="/courses"
              className="group relative flex h-full min-h-[13rem] flex-col justify-between overflow-hidden rounded-2xl bg-brand-navy p-5 text-white transition-[background-color,transform] duration-300 hover:-translate-y-1 hover:bg-brand-navy-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-dot-light opacity-30"
              />
              <div className="relative flex items-start justify-between">
                <span className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/10 text-brand-teal">
                  <Layers3 className="size-5" aria-hidden="true" />
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-5 text-white/50 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                />
              </div>
              <div className="relative mt-8">
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-brand-teal">
                  The full library
                </p>
                <h3 className="mt-1.5 font-display text-2xl leading-tight text-white">
                  Find your next course.
                </h3>
                <p className="mt-2 text-sm text-white/55">
                  {totalCourses} courses. One clear path.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <LevelPath />

      <FeaturedCourses />

      <section
        id="method"
        className="border-b border-brand-line/80 bg-white"
      >
        <div className="site-container py-20 sm:py-24 lg:py-28">
          <SectionHeading
            align="center"
            eyebrow="The SpeakUp method"
            title={
              <>
                Structure you can feel.{" "}
                <span className="italic text-brand-teal-deep">
                  Progress that lasts.
                </span>
              </>
            }
            description="A simple, connected approach designed for learners who want to use English with real confidence."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {methodSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="relative overflow-hidden rounded-2xl border border-brand-line bg-white p-6 transition-shadow duration-300 hover:shadow-card sm:p-7"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-1 -top-5 select-none font-display text-[5.5rem] leading-none text-brand-navy/[0.045]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="relative grid size-11 place-items-center rounded-xl bg-brand-mist text-brand-teal-deep">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="relative mt-7 text-lg font-bold text-brand-navy">
                    {step.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-7 text-brand-body">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <PricingSection />
      <FaqSection />

      <section className="bg-white py-16 sm:py-20">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-navy px-6 py-14 text-center sm:rounded-[2.5rem] sm:px-12 lg:px-20 lg:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-dot-light opacity-25"
            />
            <div
              aria-hidden="true"
              className="absolute -left-24 top-1/2 size-72 -translate-y-1/2 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="absolute -right-16 top-1/2 size-56 -translate-y-1/2 rounded-full border border-white/10"
            />

            <div className="relative">
              <p className="text-[0.64rem] font-bold uppercase tracking-[0.2em] text-brand-teal">
                Your next level
              </p>
              <h2 className="mx-auto mt-4 max-w-3xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl lg:text-[3.5rem]">
                Ready when you are.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                Six CEFR levels. Seven connected skills. Start free and build a
                foundation that takes you further.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/courses"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 w-full justify-center rounded-full bg-white px-6 text-sm font-semibold text-brand-navy hover:bg-brand-teal-soft sm:w-auto",
                  )}
                >
                  Browse courses
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/#levels"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 w-full justify-center rounded-full border-white/20 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10 hover:text-white sm:w-auto",
                  )}
                >
                  See the levels
                </Link>
              </div>
              <p className="mt-6 text-xs text-white/40">
                A1–B2 free · {premiumCourseCount} premium courses at C1–C2
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
