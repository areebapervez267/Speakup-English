"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  RotateCcw,
  Share2,
} from "lucide-react";

import { CourseCard } from "@/components/course-card";
import { Button } from "@/components/ui/button";
import { absoluteUrl } from "@/config/site";
import type { Course } from "@/data/courses";
import { getLevel } from "@/data/curriculum";
import { levelTestQuestions } from "@/data/level-test/questions";
import {
  PREREQUISITE_MARK,
  gradeLevelTest,
  type LevelTestAnswers,
} from "@/lib/level-test/scoring";
import { cn } from "@/lib/utils";

const TOTAL = levelTestQuestions.length;
const ADVANCE_DELAY_MS = 220;
const SHARE_TEXT = `I just found my English level with this free test — try yours: ${absoluteUrl(
  "/level-test",
)}`;

type LevelTestProps = {
  /** The live course catalogue, passed from the server so recommendations are real. */
  courses: Course[];
  /** Premium price label, e.g. "Rs 799 / month". */
  priceLabel: string;
};

export function LevelTest({ courses, priceLabel }: LevelTestProps) {
  const [answers, setAnswers] = useState<LevelTestAnswers>({});
  const [cursor, setCursor] = useState(0);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timer.current !== null) {
        window.clearTimeout(timer.current);
      }
    },
    [],
  );

  const question = levelTestQuestions[cursor];
  const chosen = answers[question?.id];
  const answeredCount = Object.keys(answers).length;

  function select(optionIndex: number) {
    if (!question || timer.current !== null) {
      return;
    }

    setAnswers((current) => ({ ...current, [question.id]: optionIndex }));

    timer.current = window.setTimeout(() => {
      timer.current = null;

      if (cursor === TOTAL - 1) {
        setFinished(true);
        return;
      }

      setCursor(cursor + 1);
    }, ADVANCE_DELAY_MS);
  }

  function restart() {
    if (timer.current !== null) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }

    setAnswers({});
    setCursor(0);
    setFinished(false);
    setStarted(true);
  }

  if (!started) {
    return (
      <section
        aria-labelledby="level-test-intro-heading"
        className="mt-12 rounded-[1.75rem] border border-brand-line bg-white p-6 shadow-sm sm:p-9"
      >
        <h2
          id="level-test-intro-heading"
          className="text-balance font-display text-2xl font-medium tracking-[-0.02em] text-brand-navy sm:text-3xl"
        >
          24 questions. About 3 minutes. No sign-up.
        </h2>
        <p className="mt-3 max-w-2xl text-pretty text-[0.95rem] leading-7 text-brand-body">
          Each question checks one thing you can already do in English. When you
          finish you get your CEFR level, a breakdown by level, and the exact
          free course to start with. Nothing you type leaves your browser — no
          account, no email, no payment.
        </p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            "Four questions per CEFR level, A1 to C2",
            "Instant result with a level you can act on",
            "Recommendations from the real course library",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 rounded-2xl border border-brand-line bg-brand-mist px-4 py-3 text-sm leading-6 text-brand-navy"
            >
              <BadgeCheck
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-brand-teal-deep"
              />
              {item}
            </li>
          ))}
        </ul>

        <Button
          type="button"
          size="lg"
          onClick={() => setStarted(true)}
          className="mt-7 h-11 rounded-full bg-brand-navy px-7 text-sm font-semibold text-white hover:bg-brand-teal-deep"
        >
          Start the free level test
          <ArrowRight aria-hidden="true" />
        </Button>
      </section>
    );
  }

  if (finished) {
    const result = gradeLevelTest(answers, levelTestQuestions);
    const level = getLevel(result.level);
    const nextLevel = result.nextLevel ? getLevel(result.nextLevel) : null;
    const nextBand = result.bands.find(
      (band) => band.level === result.nextLevel,
    );
    const readyForNext = Boolean(nextBand && nextBand.correct >= PREREQUISITE_MARK);

    const levelCourses = courses
      .filter((course) => course.level === result.level)
      .slice(0, 3);
    const nextCourses = nextLevel
      ? courses.filter((course) => course.level === result.nextLevel).slice(0, 1)
      : [];
    const recommended = [...levelCourses, ...nextCourses];

    return (
      <section
        aria-labelledby="level-test-result-heading"
        className="mt-12 space-y-8"
      >
        <div className="overflow-hidden rounded-[1.75rem] border border-brand-line bg-brand-navy px-6 py-8 text-white shadow-sm sm:px-9">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-white/55">
            Your result
          </p>
          <h2
            id="level-test-result-heading"
            className="mt-3 text-balance font-display text-4xl font-medium leading-[1.05] tracking-[-0.025em] sm:text-5xl"
          >
            {level.label} — {level.name}
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-[0.95rem] leading-7 text-white/75">
            {level.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
            <span>
              <span className="font-semibold text-white">{result.score}</span>{" "}
              of {result.total} correct ({result.percentage}%)
            </span>
            <span>
              {result.level === "c2"
                ? "Top band reached"
                : `Next stop: ${getLevel(result.nextLevel ?? "c2").label}`}
            </span>
          </div>

          <dl className="mt-7 grid gap-2 sm:grid-cols-2">
            {result.bands.map((band) => {
              const share =
                band.total === 0
                  ? 0
                  : Math.round((band.correct / band.total) * 100);
              const placed = band.level === result.level;

              return (
                <div
                  key={band.level}
                  className={cn(
                    "flex items-center gap-3 rounded-xl border px-3.5 py-2.5",
                    placed
                      ? "border-brand-teal/60 bg-white/10"
                      : "border-white/10 bg-white/[0.04]",
                  )}
                >
                  <dt className="w-8 shrink-0 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white/80">
                    {getLevel(band.level).label}
                  </dt>
                  <dd className="flex-1">
                    <span
                      aria-hidden="true"
                      className="block h-1.5 overflow-hidden rounded-full bg-white/15"
                    >
                      <span
                        className="block h-full rounded-full bg-brand-teal transition-[width] duration-500"
                        style={{ width: `${share}%` }}
                      />
                    </span>
                    <span className="sr-only">
                      {band.correct} of {band.total} correct
                    </span>
                  </dd>
                  <span className="w-9 shrink-0 text-right text-xs font-semibold tabular-nums text-white/70">
                    {band.correct}/{band.total}
                  </span>
                </div>
              );
            })}
          </dl>
        </div>

        <div className="rounded-[1.75rem] border border-brand-line bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-balance text-xl font-bold tracking-[-0.015em] text-brand-navy">
            {result.level === "c1" || result.level === "c2"
              ? `You are working at ${level.label}. Here is your path.`
              : `Start with ${level.label} — it is free.`}
          </h3>
          <p className="mt-3 text-pretty text-sm leading-6 text-brand-body">
            {result.level === "c1" || result.level === "c2" ? (
              <>
                You are past the free library. The C1 and C2 courses are part of
                Premium at <strong>{priceLabel}</strong> — and at this level you
                will use them.
              </>
            ) : readyForNext && nextLevel ? (
              <>
                Your basics are solid, so start {level.label} and move up to{" "}
                {nextLevel.label} as soon as you finish it.{" "}
                <strong>Do not skip the level you tested at</strong> — the
                mistakes that cost you marks live there.
              </>
            ) : (
              <>
                Start at {level.label} and finish it before moving up. Every A1
                to B2 course is free, and each one takes about the same time.
              </>
            )}
          </p>

          {recommended.length > 0 ? (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {recommended.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          ) : (
            <p className="mt-6 text-sm text-brand-body">
              Courses for this level are being published — browse the full
              library in the meantime.
            </p>
          )}

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={`/courses?level=${result.level}`}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-brand-navy px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
            >
              Browse {level.label} courses
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>

            {result.level === "c1" || result.level === "c2" ? (
              <Link
                href="/premium"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-brand-teal px-6 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-teal/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
              >
                See Premium · {priceLabel}
              </Link>
            ) : (
              <Link
                href="/premium"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-brand-line bg-white px-6 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
              >
                What is in Premium?
              </Link>
            )}

            <Button
              type="button"
              variant="ghost"
              size="lg"
              onClick={restart}
              className="h-11 rounded-full px-5 text-sm font-semibold text-brand-body hover:text-brand-navy"
            >
              <RotateCcw aria-hidden="true" />
              Retake
            </Button>
          </div>

          <a
            href={`https://wa.me/?text=${encodeURIComponent(SHARE_TEXT)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal-deep hover:underline"
          >
            <Share2 aria-hidden="true" className="size-4" />
            Share your result on WhatsApp
          </a>

          <p className="mt-6 border-t border-brand-line pt-4 text-xs leading-5 text-brand-body/80">
            This is a quick self-check to point you at the right course, not an
            official CEFR certificate. Take it again in a month to see real
            movement.
          </p>
        </div>
      </section>
    );
  }

  const progress = Math.round(((cursor + 1) / TOTAL) * 100);

  return (
    <section
      aria-labelledby="level-test-quiz-heading"
      className="mt-12 rounded-[1.75rem] border border-brand-line bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="flex items-center justify-between gap-4">
        <h2
          id="level-test-quiz-heading"
          className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-brand-teal-deep"
        >
          Question {cursor + 1} of {TOTAL}
        </h2>
        <p className="text-xs font-medium text-brand-body">
          {answeredCount} answered
        </p>
      </div>

      <div
        aria-hidden="true"
        className="mt-3 h-1.5 overflow-hidden rounded-full bg-brand-mist"
      >
        <div
          className="h-full rounded-full bg-brand-teal transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <fieldset className="mt-7 border-0 p-0">
        <legend className="text-balance text-xl font-bold leading-snug tracking-[-0.015em] text-brand-navy sm:text-2xl">
          {question.prompt}
        </legend>

        <div className="mt-5 grid gap-2.5">
          {question.options.map((option, optionIndex) => {
            const isSelected = chosen === optionIndex;

            return (
              <label
                key={option}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3.5 text-[0.95rem] font-medium transition-colors",
                  isSelected
                    ? "border-brand-teal bg-brand-mist text-brand-navy"
                    : "border-brand-line bg-white text-brand-body hover:border-brand-teal/45 hover:bg-brand-mist/60",
                )}
              >
                <input
                  type="radio"
                  name={question.id}
                  value={optionIndex}
                  checked={isSelected}
                  onChange={() => select(optionIndex)}
                  className="sr-only"
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    "grid size-6 shrink-0 place-items-center rounded-full border text-[0.7rem] font-bold",
                    isSelected
                      ? "border-brand-teal bg-brand-teal text-brand-navy"
                      : "border-brand-line bg-white text-brand-body",
                  )}
                >
                  {String.fromCharCode(65 + optionIndex)}
                </span>
                {option}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-7 flex items-center justify-between gap-4 border-t border-brand-line pt-5">
        <Button
          type="button"
          variant="ghost"
          size="lg"
          disabled={cursor === 0}
          onClick={() => setCursor(Math.max(0, cursor - 1))}
          className="h-10 rounded-full px-4 text-sm font-semibold text-brand-body hover:text-brand-navy"
        >
          <ArrowLeft aria-hidden="true" />
          Back
        </Button>
        <p className="text-xs text-brand-body">
          Pick an answer — it moves on by itself.
        </p>
      </div>
    </section>
  );
}
