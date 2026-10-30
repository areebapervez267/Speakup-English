import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { LevelTest } from "@/components/level-test/level-test";
import { SectionHeading } from "@/components/section-heading";
import { manualPayments } from "@/config/manual-payments";
import { cefrLevels } from "@/data/curriculum";
import { getCatalogCourses } from "@/lib/content/published";
import { breadcrumbSchema, pageCanonical } from "@/lib/seo";
import { getPaymentsDisplay } from "@/lib/premium/config";

export const metadata: Metadata = {
  title: "Free English Level Test — find your CEFR level in 3 minutes",
  description:
    "A free 24-question English placement test for Urdu and Hindi speakers. Get your CEFR level from A1 to C2, see which structures you are missing, and start the right course — no sign-up needed.",
  ...pageCanonical("/level-test"),
};

export default async function LevelTestPage() {
  const catalog = await getCatalogCourses();
  const display = getPaymentsDisplay();
  const priceLabel = display.priceLabel ?? manualPayments.priceLabel;

  return (
    <div className="site-container py-16 lg:py-24">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Free English level test", path: "/level-test" },
        ])}
      />

      <SectionHeading
        eyebrow="Free level test"
        title="What is your English level, really?"
        description="Most learners either stay on beginner material for a year or jump straight into advanced lessons and get lost. Twenty-four questions will tell you which CEFR level you are actually at — A1 to C2 — and which free course to start today."
      />

      <LevelTest courses={catalog} priceLabel={priceLabel} />

      <section
        aria-labelledby="how-scoring-works-heading"
        className="mt-16 rounded-[1.75rem] border border-brand-line bg-white p-6 shadow-sm sm:p-9"
      >
        <h2
          id="how-scoring-works-heading"
          className="text-balance font-display text-2xl font-medium tracking-[-0.02em] text-brand-navy sm:text-3xl"
        >
          How this test places you
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-teal-deep">
              Four questions per level
            </h3>
            <p className="mt-2.5 text-sm leading-6 text-brand-body">
              Every CEFR band carries the same weight, so a lucky guess on a hard
              question cannot push you up a level you are not ready for.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-teal-deep">
              You must clear the level below
            </h3>
            <p className="mt-2.5 text-sm leading-6 text-brand-body">
              We only place you at a level once the levels underneath it are
              solid. Being over-levelled is the fastest way to quit a course.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-teal-deep">
              Nothing leaves your browser
            </h3>
            <p className="mt-2.5 text-sm leading-6 text-brand-body">
              Scoring happens on your device. No account, no email, no payment
              details — and no result saved anywhere.
            </p>
          </div>
        </div>

        <h3 className="mt-10 text-lg font-bold tracking-[-0.01em] text-brand-navy">
          The six levels, in plain words
        </h3>
        <ul className="mt-4 divide-y divide-brand-line border-y border-brand-line">
          {cefrLevels.map((level) => (
            <li key={level.id} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-3">
              <Link
                href={`/courses?level=${level.id}`}
                className="text-sm font-bold uppercase tracking-[0.12em] text-brand-teal-deep hover:underline"
              >
                {level.label}
              </Link>
              <span className="text-sm font-semibold text-brand-navy">
                {level.name}
              </span>
              <span className="min-w-60 flex-1 text-sm leading-6 text-brand-body">
                {level.summary}
              </span>
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.13em] text-brand-body/70">
                {level.premium ? "Premium" : "Free"}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs leading-5 text-brand-body/80">
          A self-check like this is a signpost, not a certificate. For an
          official CEFR grade, take a recognised exam such as IELTS, TOEFL or
          Cambridge. Use this test to choose what to study next — and retake it
          every month to see real movement.
        </p>
      </section>

      <div className="mt-16 rounded-3xl border border-brand-line bg-brand-mist px-6 py-10 text-center sm:px-10">
        <h2 className="font-display text-2xl font-medium tracking-[-0.02em] text-brand-navy sm:text-3xl">
          Know your level. Now start the course.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-brand-body">
          All A1 to B2 courses are free — {catalog.filter((course) => !course.premium).length}{" "}
          of them, covering grammar, speaking, listening, pronunciation,
          vocabulary, reading and writing.
        </p>
        <Link
          href="/courses"
          className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-brand-navy px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
        >
          Browse free courses
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
