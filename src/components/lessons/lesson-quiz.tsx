"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState, type FormEvent } from "react";
import {
  Bookmark,
  CheckCircle2,
  Info,
  LoaderCircle,
  RotateCcw,
  XCircle,
} from "lucide-react";

import { useAuthSession } from "@/components/auth/use-auth-session";
import { Button } from "@/components/ui/button";
import type { PublicQuizQuestion } from "@/lib/content/types";
import { submitQuizAttemptAction } from "@/lib/progress/actions";
import { formatBestQuizScore } from "@/lib/progress/calculate";
import type { QuizOutcome } from "@/lib/progress/types";
import { cn } from "@/lib/utils";

type SaveState =
  | "idle"
  | "saving"
  | "saved"
  | "guest"
  | "unconfigured"
  | "premium-required"
  | "error";

export function LessonQuiz({
  questions,
  courseSlug,
  lessonSlug,
  configured,
}: {
  questions: PublicQuizQuestion[];
  courseSlug: string;
  lessonSlug: string;
  configured: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, ready } = useAuthSession(configured);
  const saveLock = useRef(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<QuizOutcome | null>(null);
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [bestScore, setBestScore] = useState<{
    score: number;
    total: number;
  } | null>(null);

  const answeredCount = questions.filter(
    (question) => answers[question.id] !== undefined,
  ).length;
  const allAnswered = answeredCount === questions.length;
  const reviewById = new Map(
    (result?.review ?? []).map((item) => [item.id, item]),
  );

  const loginHref = `/login?next=${encodeURIComponent(
    pathname || `/courses/${courseSlug}/lessons/${lessonSlug}`,
  )}`;

  async function gradeAttempt(snapshot: Record<string, number>) {
    if (saveLock.current) {
      return;
    }

    saveLock.current = true;
    setSaveState("saving");
    setSaveMessage(null);

    try {
      const response = await submitQuizAttemptAction({
        courseSlug,
        lessonSlug,
        answers: snapshot,
      });

      switch (response.status) {
        case "saved":
          setResult({
            score: response.score,
            total: response.total,
            review: response.review,
          });
          setSubmitted(true);
          setSaveState("saved");
          setBestScore(
            response.bestScore !== null && response.bestScoreTotal !== null
              ? { score: response.bestScore, total: response.bestScoreTotal }
              : null,
          );
          router.refresh();
          break;
        case "unauthenticated":
          setResult({
            score: response.score,
            total: response.total,
            review: response.review,
          });
          setSubmitted(true);
          setSaveState("guest");
          break;
        case "unconfigured":
          setResult({
            score: response.score,
            total: response.total,
            review: response.review,
          });
          setSubmitted(true);
          setSaveState("unconfigured");
          break;
        case "premium-required":
          setSaveState("premium-required");
          setSaveMessage(response.message);
          break;
        case "invalid":
        case "error":
          setSaveState("error");
          setSaveMessage(response.message);
          break;
      }
    } catch {
      setSaveState("error");
      setSaveMessage(
        "We couldn't check your answers. Check your connection and try again.",
      );
    } finally {
      saveLock.current = false;
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitted || !allAnswered || saveLock.current) {
      return;
    }

    void gradeAttempt({ ...answers });
  }

  function resetQuiz() {
    if (saveLock.current) {
      return;
    }

    setAnswers({});
    setSubmitted(false);
    setResult(null);
    setSaveState("idle");
    setSaveMessage(null);
    setBestScore(null);
  }

  function retryGrade() {
    if (saveLock.current || !allAnswered) {
      return;
    }

    void gradeAttempt({ ...answers });
  }

  const HintIcon = !configured
    ? Info
    : !ready
      ? LoaderCircle
      : user
        ? CheckCircle2
        : Bookmark;

  const hint = !configured
    ? "Progress saving isn't connected, so this quiz is practice only."
    : !ready
      ? "Checking whether your score can be saved…"
      : user
        ? "Your score will be saved to your account when you check answers."
        : "Log in to keep your quiz scores and lesson progress.";

  if (questions.length === 0) {
    return (
      <section
        aria-labelledby="quiz-heading"
        className="rounded-3xl border border-brand-line bg-brand-mist/60 p-5 sm:p-7"
      >
        <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-brand-teal-deep">
          Lesson quiz
        </p>
        <h2
          id="quiz-heading"
          className="mt-2 text-balance font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-brand-navy sm:text-[1.8rem]"
        >
          Check your understanding
        </h2>
        <p className="mt-2 rounded-xl bg-white px-3.5 py-3 text-sm leading-6 text-brand-body">
          This lesson does not have a quiz yet.
        </p>
      </section>
    );
  }

  return (
    <section
      aria-labelledby="quiz-heading"
      className="rounded-3xl border border-brand-line bg-brand-mist/60 p-5 sm:p-7"
    >
      <header>
        <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-brand-teal-deep">
          Lesson quiz
        </p>
        <h2
          id="quiz-heading"
          className="mt-2 text-balance font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-brand-navy sm:text-[1.8rem]"
        >
          Check your understanding
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-brand-body">
          Answer all {questions.length} questions, then check your score. You
          can retry as often as you like.
        </p>
        {!submitted ? (
          <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-brand-body">
            <HintIcon
              className={cn(
                "mt-0.5 size-3.5 shrink-0",
                configured && !ready && "animate-spin",
                configured && ready && user
                  ? "text-brand-teal-deep"
                  : "text-brand-body/70",
              )}
              aria-hidden="true"
            />
            <span>
              {hint}
              {configured && ready && !user ? (
                <>
                  {" "}
                  <Link
                    href={loginHref}
                    className="font-semibold text-brand-teal-deep underline decoration-brand-teal/40 underline-offset-4 transition-colors hover:text-brand-navy"
                  >
                    Log in
                  </Link>
                </>
              ) : null}
            </span>
          </p>
        ) : null}
      </header>

      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          {questions.map((question, questionIndex) => {
            const selectedIndex = answers[question.id];
            const review = reviewById.get(question.id);
            const chosenCorrect =
              review !== undefined && selectedIndex === review.correctIndex;

            return (
              <fieldset
                key={question.id}
                disabled={submitted || saveState === "saving"}
                className="min-w-0 rounded-2xl border border-brand-line bg-white p-4 shadow-sm sm:p-5"
              >
                <legend className="sr-only">
                  Question {questionIndex + 1}: {question.question}
                </legend>

                <div className="flex items-start gap-3" aria-hidden="true">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-mist text-xs font-bold text-brand-teal-deep">
                    {questionIndex + 1}
                  </span>
                  <p className="text-sm font-semibold leading-6 text-brand-navy">
                    {question.question}
                  </p>
                </div>

                <div className="mt-3 space-y-2">
                  {question.options.map((option, optionIndex) => {
                    const inputId = `${question.id}-option-${optionIndex}`;
                    const isSelected = selectedIndex === optionIndex;
                    const showCorrect =
                      submitted &&
                      review !== undefined &&
                      review.correctIndex === optionIndex;
                    const showWrong =
                      submitted &&
                      isSelected &&
                      review !== undefined &&
                      review.correctIndex !== optionIndex;

                    return (
                      <label
                        key={inputId}
                        htmlFor={inputId}
                        className={cn(
                          "flex items-start gap-3 rounded-xl border px-3.5 py-2.5 text-sm leading-6 transition-colors",
                          submitted ? "cursor-default" : "cursor-pointer",
                          !submitted &&
                            isSelected &&
                            "border-brand-teal bg-brand-teal-soft/60 text-brand-navy",
                          !submitted &&
                            !isSelected &&
                            "border-brand-line bg-white text-brand-ink hover:border-brand-teal/50 hover:bg-brand-mist/60",
                          submitted &&
                            review !== undefined &&
                            review.correctIndex === optionIndex &&
                            "border-brand-teal/50 bg-brand-teal-soft/70 text-brand-navy",
                          submitted &&
                            isSelected &&
                            review !== undefined &&
                            review.correctIndex !== optionIndex &&
                            "border-destructive/30 bg-destructive/5 text-brand-navy",
                          submitted &&
                            !isSelected &&
                            (review === undefined ||
                              review.correctIndex !== optionIndex) &&
                            "border-brand-line bg-white text-brand-body",
                        )}
                      >
                        <input
                          id={inputId}
                          type="radio"
                          name={question.id}
                          value={optionIndex}
                          checked={isSelected}
                          onChange={() => {
                            setAnswers((current) => ({
                              ...current,
                              [question.id]: optionIndex,
                            }));
                          }}
                          aria-label={
                            showCorrect
                              ? `${option} — correct answer`
                              : showWrong
                                ? `${option} — your answer, incorrect`
                                : undefined
                          }
                          className="mt-1 size-4 shrink-0 accent-brand-teal-deep"
                        />
                        <span className="min-w-0 flex-1">{option}</span>
                        {showCorrect && (
                          <CheckCircle2
                            aria-hidden="true"
                            className="mt-0.5 size-4 shrink-0 text-brand-teal-deep"
                          />
                        )}
                        {showWrong && (
                          <XCircle
                            aria-hidden="true"
                            className="mt-0.5 size-4 shrink-0 text-destructive"
                          />
                        )}
                      </label>
                    );
                  })}
                </div>

                {submitted && review ? (
                  <p
                    className={cn(
                      "mt-3 rounded-xl px-3.5 py-2.5 text-sm leading-6",
                      chosenCorrect
                        ? "bg-brand-teal-soft text-brand-teal-deep"
                        : "bg-brand-mist text-brand-body",
                    )}
                  >
                    <span className="font-semibold">
                      {chosenCorrect ? "Correct." : "Review this one."}
                    </span>{" "}
                    {review.explanation}
                  </p>
                ) : null}
              </fieldset>
            );
          })}
        </div>

        <div className="mt-5 flex flex-col gap-4 border-t border-brand-line pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div aria-live="polite" role="status" className="space-y-1.5">
            {submitted && result ? (
              <p className="text-sm leading-6 text-brand-body">
                You scored{" "}
                <span className="font-bold text-brand-navy">
                  {result.score} out of {result.total}
                </span>
                .{" "}
                {result.score === result.total
                  ? "A perfect score."
                  : "Read the explanations and try again whenever you are ready."}
              </p>
            ) : (
              <p className="text-sm text-brand-body">
                {answeredCount} of {questions.length} answered
              </p>
            )}

            {saveState === "saving" ? (
              <p className="flex items-center gap-1.5 text-xs font-semibold text-brand-body">
                <LoaderCircle
                  className="size-3.5 animate-spin"
                  aria-hidden="true"
                />
                Checking your answers…
              </p>
            ) : null}

            {saveState === "saved" ? (
              <p className="flex items-start gap-1.5 text-xs font-semibold leading-5 text-brand-teal-deep">
                <CheckCircle2
                  className="mt-0.5 size-3.5 shrink-0"
                  aria-hidden="true"
                />
                <span>
                  Score saved to your account.
                  {bestScore
                    ? ` Best so far: ${formatBestQuizScore(
                        bestScore.score,
                        bestScore.total,
                      )}.`
                    : ""}
                </span>
              </p>
            ) : null}

            {saveState === "guest" ? (
              <p className="text-xs leading-5 text-brand-body">
                This score is not saved.{" "}
                <Link
                  href={loginHref}
                  className="font-semibold text-brand-teal-deep underline decoration-brand-teal/40 underline-offset-4 transition-colors hover:text-brand-navy"
                >
                  Log in
                </Link>{" "}
                to keep your quiz scores and lesson progress.
              </p>
            ) : null}

            {saveState === "unconfigured" ? (
              <p className="text-xs leading-5 text-brand-body">
                Progress saving isn&apos;t connected, so this score is practice
                only.
              </p>
            ) : null}

            {saveState === "premium-required" ? (
              <p className="text-xs leading-5 text-brand-body">
                <Link
                  href="/premium"
                  className="font-semibold text-brand-teal-deep underline decoration-brand-teal/40 underline-offset-4 transition-colors hover:text-brand-navy"
                >
                  Premium access
                </Link>{" "}
                is needed to check this quiz.
              </p>
            ) : null}
          </div>

          <div className="flex shrink-0 flex-wrap gap-2">
            {submitted ? (
              <Button
                type="button"
                variant="outline"
                onClick={resetQuiz}
                disabled={saveState === "saving"}
                className="h-10 rounded-full border-brand-line bg-white px-4 text-sm font-semibold text-brand-navy hover:bg-brand-mist disabled:cursor-not-allowed disabled:opacity-60"
              >
                <RotateCcw className="size-4" aria-hidden="true" />
                Try again
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={!allAnswered || saveState === "saving"}
                className="h-10 rounded-full bg-brand-navy px-4 text-sm font-semibold text-white hover:bg-brand-teal-deep"
              >
                {saveState === "saving" ? (
                  <LoaderCircle
                    className="size-4 animate-spin"
                    aria-hidden="true"
                  />
                ) : (
                  <CheckCircle2 className="size-4" aria-hidden="true" />
                )}
                {saveState === "saving" ? "Checking…" : "Check answers"}
              </Button>
            )}
          </div>
        </div>

        {saveState === "error" ? (
          <div
            role="alert"
            className="mt-4 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm leading-6 text-red-800"
          >
            <p>{saveMessage || "We couldn't check your answers."}</p>
            <button
              type="button"
              onClick={retryGrade}
              disabled={!allAnswered}
              className="mt-1 inline-flex items-center gap-1 font-semibold underline decoration-red-700/40 underline-offset-4 transition-colors hover:text-red-900 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <RotateCcw className="size-3.5" aria-hidden="true" />
              Try checking again
            </button>
          </div>
        ) : null}
      </form>
    </section>
  );
}
