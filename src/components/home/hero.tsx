import Link from "next/link";
import { ArrowRight, Check, Clock3, Headphones } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cefrLevels } from "@/data/curriculum";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-line/70 bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-faint opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_78%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 size-[32rem] rounded-full bg-brand-teal/[0.055] blur-3xl"
      />

      <div className="site-container relative">
        <div className="grid items-center gap-16 py-14 sm:py-20 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14 lg:py-24 xl:gap-20">
          <div className="rise">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-line bg-white px-3.5 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.17em] text-brand-navy shadow-sm">
              <span className="size-1.5 rounded-full bg-brand-teal" />
              CEFR-aligned · A1 to C2
            </div>

            <h1 className="mt-7 text-balance font-display text-[2.45rem] font-medium leading-[0.98] tracking-[-0.035em] text-brand-navy sm:text-[3.6rem] md:text-[4rem] lg:text-[3.8rem] xl:text-[4.4rem]">
              Learn English.
              <br />
              Build{" "}
              <span className="relative inline-block italic text-brand-teal-deep">
                confidence.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-2.5 w-full text-brand-teal/60"
                >
                  <path
                    d="M2 9C68 3.5 194 2.5 297 6.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-brand-body sm:text-xl sm:leading-9">
              A clear, structured path from your first words to near-native
              mastery. Build all seven English skills at the CEFR level that
              fits you.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/courses"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 w-full justify-center gap-2 rounded-full bg-brand-navy px-6 text-[0.95rem] font-semibold text-white shadow-sm transition-colors hover:bg-brand-teal-deep sm:w-auto",
                )}
              >
                Browse courses
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/level-test"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 w-full justify-center gap-2 rounded-full border-brand-line bg-white px-6 text-[0.95rem] font-semibold text-brand-navy hover:bg-brand-mist sm:w-auto",
                )}
              >
                Find my level (3 min)
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-brand-body">
              <li className="inline-flex items-center gap-1.5">
                <Check
                  aria-hidden="true"
                  className="size-4 text-brand-teal-deep"
                />
                A1–B2 free
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Check
                  aria-hidden="true"
                  className="size-4 text-brand-teal-deep"
                />
                Seven core skills
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Check
                  aria-hidden="true"
                  className="size-4 text-brand-teal-deep"
                />
                Learn at your own pace
              </li>
            </ul>
          </div>

          <div
            aria-hidden="true"
            className="rise rise-delay-2 relative mx-auto w-full max-w-[31rem] lg:mr-0"
          >
            <div className="absolute -inset-4 rounded-[2.6rem] border border-brand-line/80 sm:-inset-5" />
            <div className="absolute -bottom-5 -right-3 size-28 rounded-3xl bg-brand-teal-soft/80" />

            <div className="relative overflow-hidden rounded-[2rem] bg-brand-navy p-5 shadow-lift sm:p-7">
              <div className="absolute inset-0 bg-dot-light opacity-40" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white/50">
                      Your learning path
                    </p>
                    <p className="mt-1.5 font-display text-2xl text-white">
                      From A1 to C2
                    </p>
                  </div>
                  <span className="hidden shrink-0 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/70 min-[360px]:inline-flex">
                    6 levels
                  </span>
                </div>

                <div className="mt-5 flex items-start justify-between gap-1">
                  {cefrLevels.map((level, index) => {
                    const active = level.id === "b1";
                    const complete = index < 2;

                    return (
                      <div
                        key={level.id}
                        className="flex flex-1 flex-col items-center gap-2"
                      >
                        <span
                          className={cn(
                            "grid size-8 place-items-center rounded-full border text-[0.64rem] font-bold transition-colors sm:size-9 sm:text-[0.7rem]",
                            active &&
                              "border-brand-teal bg-brand-teal text-brand-navy",
                            complete &&
                              "border-white/20 bg-white/10 text-white",
                            !active &&
                              !complete &&
                              !level.premium &&
                              "border-white/20 text-white/70",
                            !active &&
                              !complete &&
                              level.premium &&
                              "border-white/10 text-white/35",
                          )}
                        >
                          {level.label}
                        </span>
                        <span
                          className={cn(
                            "text-[0.52rem] font-semibold uppercase tracking-[0.1em]",
                            active && "text-brand-teal",
                            !active && level.premium && "text-white/30",
                            !active && !level.premium && "text-white/45",
                          )}
                        >
                          {level.premium ? "Premium" : "Free"}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-2xl bg-white p-5 shadow-lg">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-teal-soft px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-brand-teal-deep">
                      <Headphones className="size-3" />
                      B1 · Listening
                    </span>
                    <span className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-brand-body">
                      Lesson 04
                    </span>
                  </div>

                  <p className="mt-3 text-balance font-display text-[1.4rem] leading-[1.15] text-brand-navy">
                    Following a conversation at work
                  </p>
                  <p className="mt-1.5 text-sm leading-6 text-brand-body">
                    Listen for context, key phrases and implied meaning.
                  </p>

                  <div className="mt-4 flex items-center justify-between text-[0.7rem] font-medium text-brand-body">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="size-3.5 text-brand-teal-deep" />
                      12 min
                    </span>
                    <span>4 of 10 complete</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-brand-mist">
                    <div className="h-full w-[40%] rounded-full bg-brand-teal" />
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                    <p className="text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-white/45">
                      This week
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      4 lessons
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                    <p className="text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-white/45">
                      Skills connected
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">7 / 7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
