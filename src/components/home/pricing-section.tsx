import Link from "next/link";
import { ArrowRight, Check, LockKeyhole } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { freeCourseCount, premiumCourseCount } from "@/data/courses";
import { cn } from "@/lib/utils";

const freeFeatures = [
  `Full A1–B2 course library (${freeCourseCount} courses)`,
  "All seven skills at every level",
  "Clear CEFR outcomes for each course",
  "Learn at your own pace, on any device",
];

const premiumFeatures = [
  `Complete C1 & C2 library (${premiumCourseCount} courses)`,
  "Advanced tracks in all seven skills",
  "Everything included in Free",
  "A complete path to near-native mastery",
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="border-b border-brand-line/80 bg-brand-mist"
    >
      <div className="site-container py-20 sm:py-24 lg:py-28">
        <SectionHeading
          align="center"
          eyebrow="Simple access"
          title={
            <>
              Start free.{" "}
              <span className="italic text-brand-teal-deep">
                Go further
              </span>{" "}
              when you are ready.
            </>
          }
          description="Every learner can build a strong foundation at no cost. Premium opens the advanced levels for learners who want precision, nuance and complete confidence."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 lg:grid-cols-2">
          <article className="flex h-full flex-col rounded-3xl border border-brand-line bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-brand-navy">Free</h3>
                <p className="mt-1 text-sm text-brand-body">
                  For a confident foundation
                </p>
              </div>
              <span className="rounded-full bg-brand-teal-soft px-3 py-1 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-brand-teal-deep">
                Always free
              </span>
            </div>

            <div className="mt-7 flex items-end gap-2">
              <span className="font-display text-6xl leading-none text-brand-navy">
                $0
              </span>
              <span className="pb-2 text-sm text-brand-body">
                no card needed
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-brand-body">
              Four complete CEFR levels, every core skill and a clear structure
              from your first lesson.
            </p>

            <Link
              href="/courses"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-6 h-11 w-full rounded-full bg-brand-navy px-5 text-sm font-semibold text-white hover:bg-brand-teal-deep",
              )}
            >
              Browse free courses
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>

            <div className="my-7 border-t border-brand-line" />

            <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-brand-body">
              What is included
            </p>
            <ul className="mt-4 space-y-3">
              {freeFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm leading-6 text-brand-ink"
                >
                  <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-brand-teal-soft text-brand-teal-deep">
                    <Check className="size-2.5" aria-hidden="true" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </article>

          <article className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-brand-navy p-6 text-white shadow-lift sm:p-8">
            <div className="absolute inset-0 bg-dot-light opacity-30" />
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 size-56 rounded-full border border-white/10"
            />

            <div className="relative flex flex-1 flex-col">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Premium</h3>
                  <p className="mt-1 text-sm text-white/60">
                    For advanced mastery
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-brand-teal">
                  <LockKeyhole className="size-2.5" aria-hidden="true" />
                  Membership
                </span>
              </div>

              <div className="mt-7 flex items-end gap-2">
                <span className="font-display text-5xl leading-none text-white sm:text-6xl">
                  C1–C2
                </span>
                <span className="pb-2 text-sm text-white/55">full path</span>
              </div>

              <p className="mt-4 text-sm leading-6 text-white/65">
                Advanced courses across all seven skills, designed for learners
                ready to go beyond fluent.
              </p>

              <Link
                href="/premium"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "mt-6 h-11 w-full rounded-full border-white/20 bg-white/5 px-5 text-sm font-semibold text-white hover:bg-white/10 hover:text-white",
                )}
              >
                Explore Premium membership
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>

              <div className="my-7 border-t border-white/10" />

              <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-white/45">
                What is included
              </p>
              <ul className="mt-4 space-y-3">
                {premiumFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm leading-6 text-white/85"
                  >
                    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-white/10 text-brand-teal">
                      <Check className="size-2.5" aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="mt-auto pt-7 text-xs leading-5 text-white/40">
                C1 and C2 lessons require an active Premium membership. Check
                the membership page for current availability and pricing.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
