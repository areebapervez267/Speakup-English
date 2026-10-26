"use client";

import { useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  CirclePlus,
  Trash2,
  TriangleAlert,
} from "lucide-react";

import type { LessonQuizQuestion } from "@/data/lessons/types";
import { cn } from "@/lib/utils";

import { adminInputClass, adminTextareaClass } from "./styles";

function createQuestionId(counter: number) {
  return `q-${Date.now().toString(36)}-${counter}`;
}

function emptyQuestion(id: string): LessonQuizQuestion {
  return {
    id,
    question: "",
    options: ["", ""],
    correctIndex: 0,
    explanation: "",
  };
}

export function AdminQuizBuilder({
  initialQuestions,
}: {
  initialQuestions: LessonQuizQuestion[];
}) {
  const [questions, setQuestions] =
    useState<LessonQuizQuestion[]>(initialQuestions);
  const counter = useRef(initialQuestions.length + 1);

  function addQuestion() {
    counter.current += 1;
    setQuestions((current) => [
      ...current,
      emptyQuestion(createQuestionId(counter.current)),
    ]);
  }

  function updateQuestion(
    index: number,
    update: (question: LessonQuizQuestion) => LessonQuizQuestion,
  ) {
    setQuestions((current) =>
      current.map((question, questionIndex) =>
        questionIndex === index ? update(question) : question,
      ),
    );
  }

  function moveQuestion(index: number, direction: -1 | 1) {
    setQuestions((current) => {
      const target = index + direction;
      if (target < 0 || target >= current.length) {
        return current;
      }
      const next = [...current];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  function removeQuestion(index: number) {
    setQuestions((current) =>
      current.filter((_, questionIndex) => questionIndex !== index),
    );
  }

  function setOption(index: number, optionIndex: number, value: string) {
    updateQuestion(index, (question) => ({
      ...question,
      options: question.options.map((option, currentIndex) =>
        currentIndex === optionIndex ? value : option,
      ),
    }));
  }

  function addOption(index: number) {
    updateQuestion(index, (question) =>
      question.options.length >= 8
        ? question
        : { ...question, options: [...question.options, ""] },
    );
  }

  function removeOption(index: number, optionIndex: number) {
    updateQuestion(index, (question) => {
      if (question.options.length <= 2) {
        return question;
      }
      const options = question.options.filter(
        (_, currentIndex) => currentIndex !== optionIndex,
      );
      const correctIndex =
        question.correctIndex === optionIndex
          ? 0
          : question.correctIndex > optionIndex
            ? question.correctIndex - 1
            : question.correctIndex;
      return { ...question, options, correctIndex };
    });
  }

  const issues = questions.flatMap((question, index) => {
    const label = `Question ${index + 1}`;
    const found: string[] = [];
    if (question.question.trim().length === 0) {
      found.push(`${label} needs question text`);
    }
    if (question.options.some((option) => option.trim().length === 0)) {
      found.push(`${label} has an empty option`);
    }
    if (
      question.correctIndex < 0 ||
      question.correctIndex >= question.options.length
    ) {
      found.push(`${label} needs exactly one correct answer`);
    }
    if (question.explanation.trim().length === 0) {
      found.push(`${label} needs an explanation`);
    }
    return found;
  });

  return (
    <div className="space-y-4">
      <input type="hidden" name="quiz" value={JSON.stringify(questions)} />

      <div
        className={cn(
          "flex flex-wrap items-center justify-between gap-2 rounded-xl px-3 py-2 text-xs leading-5",
          issues.length === 0
            ? "bg-brand-teal-soft text-brand-teal-deep"
            : "bg-amber-50 text-amber-900",
        )}
      >
        <span className="font-semibold">
          {questions.length === 0
            ? "No questions yet"
            : issues.length === 0
              ? `${questions.length} ${questions.length === 1 ? "question" : "questions"} ready`
              : `${issues.length} ${issues.length === 1 ? "issue" : "issues"} to fix`}
        </span>
        <span>
          Each question needs one correct answer and an explanation.
        </span>
      </div>

      {issues.length > 0 ? (
        <ul className="grid gap-1 rounded-xl border border-amber-200 bg-white px-4 py-3 text-xs leading-5 text-amber-900 sm:grid-cols-2">
          {issues.map((issue) => (
            <li key={issue} className="flex items-start gap-1.5">
              <TriangleAlert className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
              {issue}
            </li>
          ))}
        </ul>
      ) : null}

      {questions.map((question, index) => (
        <fieldset
          key={question.id}
          className="rounded-2xl border border-brand-line bg-brand-mist/40 p-4"
        >
          <legend className="sr-only">{`Question ${index + 1}`}</legend>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-brand-teal-deep">
              Question {index + 1}
            </p>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => moveQuestion(index, -1)}
                disabled={index === 0}
                aria-label={`Move question ${index + 1} up`}
                className="grid size-7 place-items-center rounded-lg border border-brand-line bg-white text-brand-body transition-colors hover:text-brand-navy disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowUp className="size-3.5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => moveQuestion(index, 1)}
                disabled={index === questions.length - 1}
                aria-label={`Move question ${index + 1} down`}
                className="grid size-7 place-items-center rounded-lg border border-brand-line bg-white text-brand-body transition-colors hover:text-brand-navy disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowDown className="size-3.5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => removeQuestion(index)}
                aria-label={`Remove question ${index + 1}`}
                className="grid size-7 place-items-center rounded-lg border border-red-200 bg-white text-red-600 transition-colors hover:bg-red-50"
              >
                <Trash2 className="size-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="mt-3 space-y-3">
            <label className="block">
              <span className="text-xs font-semibold text-brand-navy">
                Question text
              </span>
              <input
                value={question.question}
                onChange={(event) =>
                  updateQuestion(index, (current) => ({
                    ...current,
                    question: event.target.value,
                  }))
                }
                maxLength={1000}
                className={cn(adminInputClass, "mt-1.5")}
                placeholder="Choose the correct sentence."
              />
            </label>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold text-brand-navy">
                  Options
                </span>
                <span className="text-[0.65rem] font-medium text-brand-body">
                  2–8 options · select the correct one
                </span>
              </div>
              <ul className="mt-2 space-y-2">
                {question.options.map((option, optionIndex) => (
                  <li key={optionIndex} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={`correct-${question.id}`}
                      checked={question.correctIndex === optionIndex}
                      onChange={() =>
                        updateQuestion(index, (current) => ({
                          ...current,
                          correctIndex: optionIndex,
                        }))
                      }
                      aria-label={`Mark option ${optionIndex + 1} as correct for question ${index + 1}`}
                      className="size-4 shrink-0 accent-brand-teal"
                    />
                    <span
                      className={cn(
                        "grid size-6 shrink-0 place-items-center rounded-md text-[0.65rem] font-bold uppercase",
                        question.correctIndex === optionIndex
                          ? "bg-brand-teal-soft text-brand-teal-deep"
                          : "bg-white text-brand-body",
                      )}
                    >
                      {String.fromCharCode(65 + optionIndex)}
                    </span>
                    <input
                      value={option}
                      onChange={(event) =>
                        setOption(index, optionIndex, event.target.value)
                      }
                      maxLength={500}
                      aria-label={`Option ${optionIndex + 1} for question ${index + 1}`}
                      className={cn(adminInputClass, "h-9 flex-1")}
                      placeholder={`Option ${optionIndex + 1}`}
                    />
                    <button
                      type="button"
                      onClick={() => removeOption(index, optionIndex)}
                      disabled={question.options.length <= 2}
                      aria-label={`Remove option ${optionIndex + 1} from question ${index + 1}`}
                      className="grid size-8 shrink-0 place-items-center rounded-lg border border-brand-line bg-white text-brand-body transition-colors hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Trash2 className="size-3.5" aria-hidden="true" />
                    </button>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => addOption(index)}
                disabled={question.options.length >= 8}
                className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-brand-line bg-white px-3 py-1.5 text-xs font-semibold text-brand-navy transition-colors hover:bg-brand-mist disabled:cursor-not-allowed disabled:opacity-40"
              >
                <CirclePlus className="size-3.5 text-brand-teal-deep" aria-hidden="true" />
                Add option
              </button>
            </div>

            <label className="block">
              <span className="text-xs font-semibold text-brand-navy">
                Explanation
              </span>
              <textarea
                value={question.explanation}
                onChange={(event) =>
                  updateQuestion(index, (current) => ({
                    ...current,
                    explanation: event.target.value,
                  }))
                }
                rows={2}
                maxLength={2000}
                className={cn(adminTextareaClass, "mt-1.5 text-xs leading-5")}
                placeholder="Explain why the answer is correct. Students see this after submitting."
              />
            </label>
          </div>
        </fieldset>
      ))}

      <button
        type="button"
        onClick={addQuestion}
        className="inline-flex items-center gap-1.5 rounded-full border border-brand-line bg-white px-4 py-2 text-xs font-semibold text-brand-navy shadow-sm transition-colors hover:bg-brand-mist"
      >
        <CirclePlus className="size-3.5 text-brand-teal-deep" aria-hidden="true" />
        Add question
      </button>
    </div>
  );
}
