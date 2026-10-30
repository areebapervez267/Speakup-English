import type { Metadata } from "next";
import Link from "next/link";

import { ProsePage, ProseSection } from "@/components/site/prose-page";
import { brand } from "@/config/brand";
import { manualPayments } from "@/config/manual-payments";
import { cefrLevels } from "@/data/curriculum";
import { freeCourseCount, premiumCourseCount, totalCourses } from "@/data/courses";
import { getAuthoredCourseSlugs, getLessonEntries } from "@/data/lessons";
import { pageCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About SpeakUp English — built for Urdu and Hindi speakers",
  description:
    "SpeakUp English is a CEFR-aligned English course library from A1 to C2 covering seven skills, with free access to A1–B2. Meet the teacher behind it and see how the courses are built.",
  ...pageCanonical("/about"),
};

const authoredLessons = getAuthoredCourseSlugs().reduce(
  (total, slug) => total + getLessonEntries(slug).length,
  0,
);

export default function AboutPage() {
  return (
    <ProsePage
      path="/about"
      navName="About"
      eyebrow="About us"
      title="An English school that starts where you already are"
      intro={
        <p>
          {brand.name} exists because most learners in Pakistan and India are
          taught English as a list of rules to memorise, then asked to speak it in
          a job interview. We organise the same language the way exams,
          universities and employers describe it — CEFR levels A1 to C2 — and
          teach all seven skills inside each level.
        </p>
      }
    >
      <ProseSection id="numbers" title="What is on the site today">
        <dl className="grid gap-3 sm:grid-cols-2">
          {[
            { term: `${totalCourses} courses`, detail: "One per skill, per level." },
            {
              term: `${authoredLessons} written lessons`,
              detail: "With exercises, answer keys and model dialogue.",
            },
            {
              term: `${freeCourseCount} free / ${premiumCourseCount} premium`,
              detail: "Everything from A1 to B2 is free.",
            },
            {
              term: `${cefrLevels.length} CEFR bands`,
              detail: "A1, A2, B1, B2, C1, C2.",
            },
          ].map((item) => (
            <div
              key={item.term}
              className="rounded-2xl border border-brand-line bg-white p-4"
            >
              <dt className="text-base font-bold text-brand-navy">{item.term}</dt>
              <dd className="mt-1 text-sm leading-6 text-brand-body">
                {item.detail}
              </dd>
            </div>
          ))}
        </dl>
      </ProseSection>

      <ProseSection id="method" title="How the courses are built">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <strong>Level first, not topic first.</strong> Every lesson says which
            CEFR descriptor it trains, so you know what you are actually allowed to
            do after it.
          </li>
          <li>
            <strong>Written, then spoken.</strong> Lessons are built as readable
            pages with a ▶ Play button on examples, dialogues, transcripts and word
            lists, so you hear the sentence your browser just showed you. Nothing
            to download and nothing to buffer.
          </li>
          <li>
            <strong>Practice with answers visible.</strong> Each exercise carries a
            worked answer and a short reason, because a wrong answer you never
            understand is wasted time.
          </li>
          <li>
            <strong>Designed around Urdu and Hindi speakers.</strong> The examples
            take on the mistakes those languages actually cause — articles,
            present perfect, <em>went</em> versus <em>have gone</em>, and
            pronunciation of English vowel sounds.
          </li>
        </ul>
      </ProseSection>

      <ProseSection id="who" title="Who runs it">
        <p>
          SpeakUp English is created and maintained by{" "}
          <strong>Areeba Pervez</strong>, who writes the curriculum and answers
          support email personally at{" "}
          <Link href={`mailto:${manualPayments.supportEmail}`}>
            {manualPayments.supportEmail}
          </Link>
          . It is an independent project, not affiliated with the British Council,
          Cambridge Assessment or any exam board. CEFR is used here as a
          descriptive framework.
        </p>
      </ProseSection>

      <ProseSection id="roadmap" title="What is coming next">
        <p>
          Next on the list: more written lesson sets for B2–C2, listening
          transcripts with two distinct voices, and a self-update reminder for
          premium members so nothing lapses by accident. Suggestions from learners
          decide the order.
        </p>
        <p>
          Not sure where to start? Take the{" "}
          <Link href="/level-test">free 3-minute level test</Link>, then go
          straight to the{" "}
          <Link href="/courses">course library</Link>.
        </p>
      </ProseSection>
    </ProsePage>
  );
}
