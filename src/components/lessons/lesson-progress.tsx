import Link from "next/link";
import { Suspense } from "react";
import {
  Bookmark,
  CheckCircle2,
  CircleAlert,
  Info,
} from "lucide-react";

import {
  formatBestQuizScore,
  formatCompletionDate,
} from "@/lib/progress/calculate";
import { getLessonProgressView } from "@/lib/progress/lesson-view";
import type { LessonProgressSnapshot } from "@/lib/progress/types";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { cn } from "@/lib/utils";

import { LessonCompletionButton } from "./lesson-completion-button";

type LessonProgressSectionProps = {
  courseSlug: string;
  lessonSlug: string;
  returnPath: string;
};

export function LessonProgressSection({
  courseSlug,
  lessonSlug,
  returnPath,
}: LessonProgressSectionProps) {
  if (!isSupabaseConfigured) {
    return (
      <div className="mt-8">
        <UnconfiguredNote />
      </div>
    );
  }

  return (
    <div className="mt-8">
      <Suspense fallback={<LessonProgressSkeleton />}>
        <LessonProgressContent
          courseSlug={courseSlug}
          lessonSlug={lessonSlug}
          returnPath={returnPath}
        />
      </Suspense>
    </div>
  );
}

async function LessonProgressContent({
  courseSlug,
  lessonSlug,
  returnPath,
}: LessonProgressSectionProps) {
  const view = await getLessonProgressView(courseSlug, lessonSlug);

  switch (view.state) {
    case "unconfigured":
      return <UnconfiguredNote />;
    case "signed-out":
      return <SignedOutCard returnPath={returnPath} />;
    case "unavailable":
      return <UnavailableCard message={view.message} />;
    case "ready":
      return (
        <StudentProgressCard
          courseSlug={courseSlug}
          lessonSlug={lessonSlug}
          returnPath={returnPath}
          progress={view.progress}
        />
      );
  }
}

function SignedOutCard({ returnPath }: { returnPath: string }) {
  const loginHref = `/login?next=${encodeURIComponent(returnPath)}`;

  return (
    <section
      aria-labelledby="save-progress-heading"
      className="rounded-3xl border border-brand-line bg-white p-5 shadow-sm sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-brand-teal-soft text-brand-teal-deep">
          <Bookmark className="size-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h2
            id="save-progress-heading"
            className="text-lg font-bold tracking-[-0.01em] text-brand-navy"
          >
            Save your progress
          </h2>
          <p className="mt-1.5 text-sm leading-6 text-brand-body">
            Create a free account to keep your lesson completion and quiz
            scores across devices. Guest quiz results are not saved
            permanently, but you can keep browsing and learning without an
            account.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href={loginHref}
              className="inline-flex h-10 items-center justify-center rounded-full bg-brand-navy px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="inline-flex h-10 items-center justify-center rounded-full border border-brand-line bg-white px-4 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
            >
              Create free account
            </Link>
          </div>
          <p className="mt-3 text-xs leading-5 text-brand-body/80">
            No payment details are needed. A1–B2 courses are free.
          </p>
        </div>
      </div>
    </section>
  );
}

function UnconfiguredNote() {
  return (
    <div className="flex gap-3 rounded-2xl border border-brand-line bg-brand-mist/60 p-4 sm:p-5">
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-brand-body shadow-sm">
        <Info className="size-4" aria-hidden="true" />
      </span>
      <div>
        <p className="text-sm font-bold text-brand-navy">
          Progress saving isn&apos;t connected
        </p>
        <p className="mt-1 text-sm leading-6 text-brand-body">
          You can browse and take quizzes as a guest. Lesson completion and
          quiz scores are not stored until the Supabase database is
          configured.
        </p>
      </div>
    </div>
  );
}

function UnavailableCard({ message }: { message: string }) {
  return (
    <section
      aria-labelledby="progress-unavailable-heading"
      role="status"
      className="rounded-3xl border border-amber-200 bg-amber-50/70 p-5 sm:p-6"
    >
      <div className="flex gap-3">
        <CircleAlert
          className="mt-0.5 size-5 shrink-0 text-amber-700"
          aria-hidden="true"
        />
        <div>
          <h2
            id="progress-unavailable-heading"
            className="text-base font-bold text-brand-navy"
          >
            Saved progress is unavailable
          </h2>
          <p className="mt-1 text-sm leading-6 text-amber-950">{message}</p>
          <p className="mt-1 text-sm leading-6 text-amber-900">
            You can keep using this lesson; the quiz still works. Refresh the
            page to try again.
          </p>
        </div>
      </div>
    </section>
  );
}

function StudentProgressCard({
  courseSlug,
  lessonSlug,
  returnPath,
  progress,
}: LessonProgressSectionProps & {
  progress: LessonProgressSnapshot | null;
}) {
  const completed = progress?.isCompleted ?? false;
  const completedOn = formatCompletionDate(progress?.completedAt);
  const hasAttempts = (progress?.bestScoreTotal ?? 0) > 0;
  const bestLabel = formatBestQuizScore(
    progress?.bestScore,
    progress?.bestScoreTotal,
  );

  return (
    <section
      aria-labelledby="lesson-progress-heading"
      className="rounded-3xl border border-brand-line bg-white p-5 shadow-sm sm:p-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-brand-teal-deep">
            Saved progress
          </p>
          <h2
            id="lesson-progress-heading"
            className="mt-2 text-balance font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-brand-navy sm:text-[1.8rem]"
          >
            Your lesson progress
          </h2>
        </div>
        {completed ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-teal-soft px-3 py-1.5 text-xs font-bold text-brand-teal-deep">
            <CheckCircle2 className="size-3.5" aria-hidden="true" />
            Completed
          </span>
        ) : null}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="flex flex-col rounded-2xl border border-brand-line bg-brand-mist/50 p-4">
          <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-brand-body">
            Lesson completion
          </p>
          {completed ? (
            <>
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-brand-navy">
                <CheckCircle2
                  className="size-4 shrink-0 text-brand-teal-deep"
                  aria-hidden="true"
                />
                {completedOn ? `Completed on ${completedOn}` : "Completed"}
              </p>
              <p className="mt-1.5 text-xs leading-5 text-brand-body">
                Saved to your student account.
              </p>
            </>
          ) : (
            <>
              <p className="mt-2 text-sm leading-6 text-brand-body">
                Not marked complete yet. Mark it when you have finished reading
                and practising.
              </p>
              <LessonCompletionButton
                courseSlug={courseSlug}
                lessonSlug={lessonSlug}
                returnPath={returnPath}
              />
            </>
          )}
        </div>

        <div className="flex flex-col rounded-2xl border border-brand-line bg-brand-mist/50 p-4">
          <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-brand-body">
            Best quiz score
          </p>
          <p
            className={cn(
              "mt-2 tracking-[-0.02em]",
              hasAttempts
                ? "font-display text-3xl font-medium text-brand-navy"
                : "text-sm font-semibold leading-6 text-brand-body",
            )}
          >
            {bestLabel}
          </p>
          <p className="mt-1.5 text-xs leading-5 text-brand-body">
            {hasAttempts
              ? "Your best result for this lesson so far."
              : "Submit the quiz above to record a score."}
          </p>
        </div>
      </div>

      <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-brand-body">
        <Info
          className="mt-0.5 size-3.5 shrink-0 text-brand-teal-deep"
          aria-hidden="true"
        />
        Marking a lesson complete is separate from submitting its quiz.
        Lessons are never completed automatically.
      </p>
    </section>
  );
}

function LessonProgressSkeleton() {
  return (
    <div
      aria-busy="true"
      className="rounded-3xl border border-brand-line bg-white p-5 shadow-sm sm:p-6"
    >
      <div className="h-3 w-24 animate-pulse rounded-full bg-brand-line" />
      <div className="mt-3 h-6 w-52 max-w-full animate-pulse rounded-full bg-brand-line" />
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="h-32 animate-pulse rounded-2xl bg-brand-mist" />
        <div className="h-32 animate-pulse rounded-2xl bg-brand-mist" />
      </div>
      <span className="sr-only">Loading your saved progress</span>
    </div>
  );
}
