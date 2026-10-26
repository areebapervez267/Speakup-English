import Link from "next/link";
import { ArrowRight, BadgeCheck, LockKeyhole, ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { cefrLevels } from "@/data/curriculum";
import { totalCourses } from "@/data/courses";
import { cn } from "@/lib/utils";

export function LevelPath() {
  return (
    <section id="levels" className="border-b border-brand-line/80 bg-white">
      <div className="site-container py-20 sm:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="The learning path"
              title={
                <>
                  A clear path from
                  <br className="hidden sm:block" />{" "}
                  <span className="italic text-brand-teal-deep">
                    first words to mastery.
                  </span>
                </>
              }
              description="Six CEFR levels, each built around what you can actually do. Start where you are and move forward with a structure you can see."
            />

            <div className="mt-8 rounded-2xl border border-brand-line bg-brand-mist p-5">
              <div className="flex gap-3.5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-brand-teal-deep shadow-sm">
                  <BadgeCheck className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-navy">
                    Free through B2
                  </p>
                  <p className="mt-1 text-sm leading-6 text-brand-body">
                    Four complete CEFR levels at no cost. Premium unlocks the
                    full C1 and C2 path.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/courses"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "mt-6 h-11 rounded-full border-brand-line bg-white px-5 text-sm font-semibold text-brand-navy hover:bg-brand-mist",
              )}
            >
              See all {totalCourses} courses
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <ol className="space-y-3">
            {cefrLevels.map((level) => (
              <li key={level.id}>
                <Link
                  href={`/courses?level=${level.id}`}
                  className={cn(
                    "group grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl border p-4 transition-[border-color,background-color,transform] duration-300 sm:gap-4 sm:p-5",
                    level.premium
                      ? "border-brand-navy bg-brand-navy text-white hover:-translate-y-0.5 hover:bg-brand-navy-deep"
                      : "border-brand-line bg-white hover:-translate-y-0.5 hover:border-brand-teal/50 hover:bg-brand-mist/60",
                  )}
                >
                  <span
                    className={cn(
                      "grid size-12 place-items-center rounded-xl font-display text-xl",
                      level.premium
                        ? "bg-white/10 text-white"
                        : "bg-brand-mist text-brand-navy",
                    )}
                  >
                    {level.label}
                  </span>

                  <span className="min-w-0">
                    <span className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                      <span
                        className={cn(
                          "font-semibold tracking-[-0.01em]",
                          level.premium ? "text-white" : "text-brand-navy",
                        )}
                      >
                        {level.name}
                      </span>
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-[0.12em]",
                          level.premium
                            ? "bg-white/10 text-brand-teal"
                            : "bg-brand-teal-soft text-brand-teal-deep",
                        )}
                      >
                        {level.premium && (
                          <LockKeyhole
                            className="size-2.5"
                            aria-hidden="true"
                          />
                        )}
                        {level.premium ? "Premium" : "Free"}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "mt-1 block text-sm leading-6",
                        level.premium ? "text-white/65" : "text-brand-body",
                      )}
                    >
                      {level.summary}
                    </span>
                  </span>

                  <span
                    className={cn(
                      "grid size-9 place-items-center rounded-full border transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                      level.premium
                        ? "border-white/15 text-white/70 group-hover:border-white/30 group-hover:text-white"
                        : "border-brand-line text-brand-body group-hover:border-brand-teal/40 group-hover:text-brand-teal-deep",
                    )}
                  >
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
