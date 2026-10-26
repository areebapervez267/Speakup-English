"use client";

import { useId, useState } from "react";
import { CheckCircle2, RotateCcw, Sparkles, XCircle } from "lucide-react";

import type { ExerciseItem } from "@/data/lessons/types";
import { cn } from "@/lib/utils";

export function LessonExercise({
  title,
  instructions,
  items,
}: {
  title: string;
  instructions: string;
  items: ExerciseItem[];
}) {
  const baseId = useId();
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  function selectAnswer(itemIndex: number, optionIndex: number) {
    setSelected((current) => ({ ...current, [itemIndex]: optionIndex }));
    setChecked((current) => ({ ...current, [itemIndex]: false }));
  }

  function checkAnswer(itemIndex: number) {
    if (selected[itemIndex] === undefined) {
      return;
    }

    setChecked((current) => ({ ...current, [itemIndex]: true }));
  }

  function resetItem(itemIndex: number) {
    setSelected((current) => {
      const next = { ...current };
      delete next[itemIndex];
      return next;
    });
    setChecked((current) => ({ ...current, [itemIndex]: false }));
  }

  return (
    <section
      aria-labelledby={`${baseId}-heading`}
      className="rounded-3xl border border-brand-teal/25 bg-brand-teal-soft/35 p-5 shadow-sm sm:p-6"
    >
      <header>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-brand-teal-deep">
            <Sparkles className="size-3.5" aria-hidden="true" />
            Interactive exercise
          </p>
          <span className="rounded-full border border-brand-teal/20 bg-white px-3 py-1 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-brand-teal-deep">
            Instant feedback
          </span>
        </div>
        <h2
          id={`${baseId}-heading`}
          className="mt-2 font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-brand-navy"
        >
          {title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-brand-body">
          {instructions}
        </p>
      </header>

      <ol className="mt-5 space-y-3">
        {items.map((item, itemIndex) => {
          const itemId = `${baseId}-item-${itemIndex}`;
          const selectedIndex = selected[itemIndex];
          const isChecked = Boolean(checked[itemIndex]);
          const chosenCorrect = selectedIndex === item.correctIndex;

          return (
            <li key={itemId}>
              <fieldset
                aria-describedby={
                  isChecked ? `${itemId}-feedback` : undefined
                }
                className="min-w-0 rounded-2xl border border-brand-line bg-white p-4 shadow-sm sm:p-5"
              >
                <legend className="sr-only">
                  Question {itemIndex + 1}: {item.prompt}
                </legend>

                <div className="flex items-start gap-3" aria-hidden="true">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-mist text-xs font-bold text-brand-teal-deep">
                    {itemIndex + 1}
                  </span>
                  <p className="text-sm font-semibold leading-6 text-brand-navy">
                    {item.prompt}
                  </p>
                </div>

                <div className="mt-3 space-y-2">
                  {item.options.map((option, optionIndex) => {
                    const inputId = `${itemId}-option-${optionIndex}`;
                    const isSelected = selectedIndex === optionIndex;
                    const isCorrectOption = item.correctIndex === optionIndex;
                    const showCorrect = isChecked && isCorrectOption;
                    const showWrong =
                      isChecked && isSelected && !isCorrectOption;

                    return (
                      <label
                        key={inputId}
                        htmlFor={inputId}
                        className={cn(
                          "flex cursor-pointer items-start gap-3 rounded-xl border px-3.5 py-2.5 text-sm leading-6 transition-colors",
                          !isChecked &&
                            isSelected &&
                            "border-brand-teal bg-brand-teal-soft/60 text-brand-navy",
                          !isChecked &&
                            !isSelected &&
                            "border-brand-line bg-white text-brand-ink hover:border-brand-teal/50 hover:bg-brand-mist/60",
                          showCorrect &&
                            "border-brand-teal/50 bg-brand-teal-soft/70 text-brand-navy",
                          showWrong &&
                            "border-destructive/30 bg-destructive/5 text-brand-navy",
                          isChecked &&
                            !isSelected &&
                            !isCorrectOption &&
                            "border-brand-line bg-white text-brand-body",
                        )}
                      >
                        <input
                          id={inputId}
                          type="radio"
                          name={`${itemId}-answer`}
                          value={optionIndex}
                          checked={isSelected}
                          onChange={() =>
                            selectAnswer(itemIndex, optionIndex)
                          }
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

                {item.hint && !isChecked && (
                  <p className="mt-2.5 text-xs leading-5 text-brand-body">
                    <span className="font-semibold text-brand-teal-deep">
                      Hint:
                    </span>{" "}
                    {item.hint}
                  </p>
                )}

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {isChecked ? (
                    <button
                      type="button"
                      onClick={() => resetItem(itemIndex)}
                      className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-brand-line bg-white px-3.5 text-xs font-semibold text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                    >
                      <RotateCcw className="size-3.5" aria-hidden="true" />
                      Try again
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => checkAnswer(itemIndex)}
                      disabled={selectedIndex === undefined}
                      className="inline-flex h-9 items-center justify-center rounded-full bg-brand-navy px-3.5 text-xs font-semibold text-white transition-colors hover:bg-brand-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal disabled:pointer-events-none disabled:opacity-40"
                    >
                      Check answer
                    </button>
                  )}
                </div>

                <div
                  id={`${itemId}-feedback`}
                  aria-live="polite"
                  role="status"
                >
                  {isChecked && (
                    <p
                      className={cn(
                        "mt-3 rounded-xl px-3.5 py-2.5 text-sm leading-6",
                        chosenCorrect
                          ? "bg-brand-teal-soft text-brand-teal-deep"
                          : "bg-brand-mist text-brand-body",
                      )}
                    >
                      <span className="font-semibold">
                        {chosenCorrect
                          ? "Correct."
                          : `Not quite. The answer is “${item.options[item.correctIndex]}”.`}
                      </span>{" "}
                      {item.explanation}
                    </p>
                  )}
                </div>
              </fieldset>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
