import {
  BookMarked,
  BookOpen,
  Check,
  ChevronDown,
  Headphones,
  Lightbulb,
  ListChecks,
  MessagesSquare,
  Mic,
} from "lucide-react";

import { LessonExercise } from "@/components/lessons/lesson-exercise";
import {
  AudioRateToggle,
  SpeakButton,
  SpeakPill,
} from "@/components/lessons/lesson-audio";
import type { DialogueLine, LessonBlock } from "@/data/lessons/types";
import { gendersForLines } from "@/lib/speaker-gender";
import { cn } from "@/lib/utils";

function joinForReading(lines: readonly string[]) {
  return lines
    .map((line) => line.trim())
    .filter(Boolean)
    .join(". ");
}

/**
 * Give every line of a conversation the voice of its speaker, so "Hey, my name
 * is Ben" is a man and "Hey, my name is Anna" is a woman.
 */
function withVoices(lines: readonly DialogueLine[]) {
  const voices = gendersForLines(lines);
  return lines.map((line, index) => ({
    speaker: line.speaker,
    text: line.text,
    gender: voices[index],
  }));
}

export function LessonContent({ blocks }: { blocks: LessonBlock[] }) {
  return (
    <div>
      <div className="flex items-center justify-end gap-2.5 pb-5">
        <p className="mr-auto text-xs leading-5 text-brand-body">
          <span className="font-semibold text-brand-teal-deep">
            Tap ▶ to hear it
          </span>{" "}
          — spoken by your browser, free and offline.
        </p>
        <AudioRateToggle />
      </div>
      <div className="space-y-9">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "text":
            return (
              <section key={index}>
                {block.title && (
                  <h2 className="text-balance font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-brand-navy sm:text-[1.75rem]">
                    {block.title}
                  </h2>
                )}
                <div className={cn("space-y-4", block.title && "mt-3")}>
                  {block.paragraphs.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="text-pretty text-[0.95rem] leading-7 text-brand-body"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            );

          case "rules":
            return (
              <section
                key={index}
                className="rounded-2xl border border-brand-line bg-brand-mist/70 p-5 sm:p-6"
              >
                <h2 className="flex items-center gap-2.5 font-display text-xl font-medium leading-snug text-brand-navy sm:text-2xl">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white text-brand-teal-deep shadow-sm">
                    <ListChecks className="size-4" aria-hidden="true" />
                  </span>
                  {block.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {block.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-sm leading-6 text-brand-ink"
                    >
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-teal-soft text-brand-teal-deep">
                        <Check className="size-3" aria-hidden="true" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            );

          case "examples":
            return (
              <section key={index}>
                <h2 className="font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-brand-navy sm:text-[1.75rem]">
                  {block.title ?? "Examples"}
                </h2>
                {block.intro && (
                  <p className="mt-2 text-sm leading-6 text-brand-body">
                    {block.intro}
                  </p>
                )}
                <ul className="mt-4 space-y-3">
                  {block.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 rounded-xl border border-brand-line bg-white py-3.5 pl-4 pr-4 shadow-sm sm:pl-5"
                    >
                      <div className="min-w-0 flex-1 border-l-2 border-brand-teal pl-3.5">
                        <p className="text-[0.95rem] font-medium leading-6 text-brand-navy">
                          {item.text}
                        </p>
                        {item.note && (
                          <p className="mt-1.5 text-sm leading-6 text-brand-body">
                            {item.note}
                          </p>
                        )}
                      </div>
                      <SpeakButton
                        text={item.text}
                        label={`Listen to: ${item.text}`}
                        className="mt-0.5"
                      />
                    </li>
                  ))}
                </ul>
              </section>
            );

          case "table":
            return (
              <section key={index}>
                {block.title && (
                  <h2 className="font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-brand-navy sm:text-[1.75rem]">
                    {block.title}
                  </h2>
                )}
                <div className="mt-4 overflow-hidden rounded-2xl border border-brand-line bg-white shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                      {block.caption && (
                        <caption className="border-b border-brand-line px-4 py-2.5 text-left text-xs leading-5 text-brand-body">
                          {block.caption}
                        </caption>
                      )}
                      <thead className="bg-brand-navy text-white">
                        <tr>
                          {block.columns.map((column, columnIndex) => (
                            <th
                              key={columnIndex}
                              scope="col"
                              className="whitespace-nowrap px-4 py-3 text-[0.68rem] font-bold uppercase tracking-[0.1em]"
                            >
                              {column}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-brand-line">
                        {block.rows.map((row, rowIndex) => (
                          <tr
                            key={rowIndex}
                            className="even:bg-brand-mist/50"
                          >
                            {row.map((cell, cellIndex) => (
                              <td
                                key={cellIndex}
                                className={cn(
                                  "px-4 py-3 align-top leading-6",
                                  cellIndex === 0
                                    ? "font-semibold text-brand-navy"
                                    : "text-brand-body",
                                )}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            );

          case "tip":
            return (
              <aside
                key={index}
                className="flex gap-3.5 rounded-2xl border border-brand-teal/25 bg-brand-teal-soft/70 p-4 sm:p-5"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-brand-teal-deep shadow-sm">
                  <Lightbulb className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-sm font-bold text-brand-navy">
                    {block.title ?? "Remember"}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-brand-ink/80">
                    {block.text}
                  </p>
                </div>
              </aside>
            );

          case "practice":
            return (
              <section
                key={index}
                className="rounded-3xl border border-brand-line bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-brand-navy">
                    {block.title}
                  </h2>
                  <span className="rounded-full bg-brand-mist px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-brand-body">
                    {block.items.length} exercises
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-brand-body">
                  {block.instructions}
                </p>

                <ol className="mt-5 space-y-3">
                  {block.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="rounded-2xl border border-brand-line bg-brand-mist/40 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="grid size-6 shrink-0 place-items-center rounded-full bg-white text-xs font-bold text-brand-teal-deep shadow-sm">
                          {itemIndex + 1}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium leading-6 text-brand-navy">
                            {item.prompt}
                          </p>
                          {item.hint && (
                            <p className="mt-1.5 text-xs leading-5 text-brand-body">
                              <span className="font-semibold text-brand-teal-deep">
                                Hint:
                              </span>{" "}
                              {item.hint}
                            </p>
                          )}
                          <details className="group mt-3 overflow-hidden rounded-xl border border-brand-line bg-white">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-3.5 py-2.5 text-xs font-semibold text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-teal [&::-webkit-details-marker]:hidden">
                              Reveal answer
                              <ChevronDown
                                aria-hidden="true"
                                className="size-4 text-brand-teal-deep transition-transform duration-200 group-open:rotate-180"
                              />
                            </summary>
                            <p className="border-t border-brand-line px-3.5 py-3 text-sm leading-6 text-brand-teal-deep">
                              {item.answer}
                            </p>
                          </details>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            );

          case "passage":
            return (
              <section
                key={index}
                aria-labelledby={`passage-${index}`}
                className="overflow-hidden rounded-3xl border border-brand-line bg-white shadow-sm"
              >
                <header className="flex flex-wrap items-start justify-between gap-3 border-b border-brand-line bg-brand-mist/70 px-5 py-4 sm:px-6">
                  <div className="min-w-0">
                    <p className="flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-brand-teal-deep">
                      <BookOpen className="size-3.5" aria-hidden="true" />
                      Reading passage
                    </p>
                    <h2
                      id={`passage-${index}`}
                      className="mt-1.5 text-balance font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-brand-navy"
                    >
                      {block.title}
                    </h2>
                  </div>
                  <SpeakPill
                    text={joinForReading(block.paragraphs)}
                    label="Listen to the whole passage"
                  >
                    Play passage
                  </SpeakPill>
                </header>
                <div className="px-5 py-5 sm:px-6">
                  <div className="space-y-4">
                    {block.paragraphs.map((paragraph, paragraphIndex) => (
                      <div key={paragraphIndex} className="flex gap-3">
                        <p className="min-w-0 flex-1 text-pretty text-[0.95rem] leading-7 text-brand-ink">
                          {paragraph}
                        </p>
                        <SpeakButton
                          text={paragraph}
                          label={`Listen to paragraph ${paragraphIndex + 1}`}
                          className="mt-0.5"
                        />
                      </div>
                    ))}
                  </div>

                  {block.glossary && block.glossary.length > 0 && (
                    <div className="mt-5 rounded-2xl bg-brand-mist p-4">
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand-teal-deep">
                        Words to know
                      </p>
                      <dl className="mt-2.5 space-y-2">
                        {block.glossary.map((word) => (
                          <div
                            key={word.term}
                            className="flex flex-col gap-0.5 text-sm leading-6 sm:flex-row sm:gap-2"
                          >
                            <dt className="flex shrink-0 items-center gap-2 font-semibold text-brand-navy">
                              {word.term}
                              <SpeakButton
                                text={word.term}
                                label={`Listen to: ${word.term}`}
                              />
                            </dt>
                            <dd className="text-brand-body">
                              {word.meaning}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  )}
                </div>
              </section>
            );

          case "wordbank":
            return (
              <section key={index}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-brand-teal-deep">
                      <BookMarked className="size-3.5" aria-hidden="true" />
                      Word bank
                    </p>
                    <h2 className="mt-1.5 font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-brand-navy sm:text-[1.75rem]">
                      {block.title}
                    </h2>
                  </div>
                  <SpeakPill
                    text={block.words.map((word) => word.term).join(", ")}
                    label="Listen to every word in this list"
                  >
                    Play all words
                  </SpeakPill>
                </div>
                {block.intro && (
                  <p className="mt-2 text-sm leading-6 text-brand-body">
                    {block.intro}
                  </p>
                )}

                <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                  {block.words.map((word) => (
                    <div
                      key={word.term}
                      className="rounded-2xl border border-brand-line bg-white p-4 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <dt className="text-base font-bold text-brand-navy">
                          {word.term}
                        </dt>
                        <SpeakButton
                          text={word.term}
                          label={`Listen to: ${word.term}`}
                        />
                      </div>
                      <dd className="mt-1 text-sm leading-6 text-brand-body">
                        {word.meaning}
                      </dd>
                      {word.example && (
                        <dd className="mt-2.5 flex items-start gap-2.5 border-l-2 border-brand-teal pl-3">
                          <p className="min-w-0 flex-1 text-sm leading-6 text-brand-ink">
                            <span className="sr-only">Example: </span>
                            {word.example}
                          </p>
                          <SpeakButton
                            text={word.example}
                            label={`Listen to the example for ${word.term}`}
                            className="mt-0.5"
                          />
                        </dd>
                      )}
                    </div>
                  ))}
                </dl>
              </section>
            );

          case "dialogue": {
            const lines = withVoices(block.lines);
            return (
              <section
                key={index}
                aria-labelledby={`dialogue-${index}`}
                className="rounded-3xl border border-brand-line bg-brand-mist/50 p-5 sm:p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-brand-teal-deep">
                      <MessagesSquare className="size-3.5" aria-hidden="true" />
                      Model dialogue
                    </p>
                    <h2
                      id={`dialogue-${index}`}
                      className="mt-1.5 font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-brand-navy"
                    >
                      {block.title}
                    </h2>
                  </div>
                  <SpeakPill
                    parts={lines.map((line) => ({
                      text: line.text,
                      gender: line.gender,
                    }))}
                    label="Listen to the whole dialogue"
                  >
                    Play dialogue
                  </SpeakPill>
                </div>
                {block.intro && (
                  <p className="mt-2 text-sm leading-6 text-brand-body">
                    {block.intro}
                  </p>
                )}
                <p className="mt-2 text-xs leading-5 text-brand-body">
                  A man and a woman read the lines, so it sounds like a real
                  conversation.
                </p>
                <ol className="mt-4 space-y-2.5">
                  {lines.map((line, lineIndex) => (
                    <li
                      key={lineIndex}
                      className="flex items-start gap-3 rounded-2xl border border-brand-line bg-white px-4 py-3 shadow-sm"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-brand-teal-deep">
                          {line.speaker}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-brand-ink">
                          {line.text}
                        </p>
                      </div>
                      <SpeakButton
                        text={line.text}
                        gender={line.gender}
                        label={`Listen to ${line.speaker}`}
                        className="mt-0.5"
                      />
                    </li>
                  ))}
                </ol>
              </section>
            );
          }

          case "transcript": {
            const lines = withVoices(block.lines);
            return (
              <section
                key={index}
                aria-labelledby={`transcript-${index}`}
                className="overflow-hidden rounded-3xl border border-brand-line bg-white shadow-sm"
              >
                <header className="border-b border-brand-line bg-brand-navy px-5 py-4 text-white sm:px-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-brand-teal">
                      <Headphones className="size-3.5" aria-hidden="true" />
                      Listening transcript
                    </p>
                    <SpeakPill
                      parts={lines.map((line) => ({
                        text: line.text,
                        gender: line.gender,
                      }))}
                      label="Listen to the whole transcript"
                    >
                      Play transcript
                    </SpeakPill>
                  </div>
                  <h2
                    id={`transcript-${index}`}
                    className="mt-2 font-display text-2xl font-medium leading-snug tracking-[-0.02em]"
                  >
                    {block.title}
                  </h2>
                </header>
                <div className="px-5 py-5 sm:px-6">
                  <p className="rounded-xl bg-brand-mist px-3.5 py-2.5 text-xs leading-5 text-brand-body">
                    Press ▶ to hear a line, then cover the text and answer the
                    questions from what you heard. Each speaker gets their own
                    voice. Use{" "}
                    <span className="font-semibold text-brand-teal-deep">
                      Slow
                    </span>{" "}
                    for a slower voice.
                  </p>
                  {block.context && (
                    <p className="mt-3 text-sm leading-6 text-brand-body">
                      {block.context}
                    </p>
                  )}
                  <ol className="mt-4 space-y-3">
                    {lines.map((line, lineIndex) => (
                      <li
                        key={lineIndex}
                        className="grid gap-1 border-l-2 border-brand-line pl-3.5 sm:grid-cols-[7rem_minmax(0,1fr)_auto] sm:gap-3"
                      >
                        <p className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-brand-teal-deep">
                          {line.speaker}
                        </p>
                        <p className="text-sm leading-6 text-brand-ink">
                          {line.text}
                        </p>
                        <SpeakButton
                          text={line.text}
                          gender={line.gender}
                          label={`Listen to ${line.speaker}`}
                          className="mt-0.5 justify-self-start sm:justify-self-end"
                        />
                      </li>
                    ))}
                  </ol>
                </div>
              </section>
            );
          }

          case "sound":
            return (
              <section
                key={index}
                aria-labelledby={`sound-${index}`}
                className="overflow-hidden rounded-3xl border border-brand-line bg-white shadow-sm"
              >
                <header className="border-b border-brand-line bg-brand-mist/70 px-5 py-4 sm:px-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-brand-teal-deep">
                      <Mic className="size-3.5" aria-hidden="true" />
                      Sound focus
                    </p>
                    <span className="rounded-full border border-brand-line bg-white px-2.5 py-1 text-[0.55rem] font-bold uppercase tracking-[0.1em] text-brand-body">
                      Audio + written guide
                    </span>
                  </div>
                  <h2
                    id={`sound-${index}`}
                    className="mt-2 font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-brand-navy"
                  >
                    {block.title}
                  </h2>
                  <p className="mt-2 inline-flex rounded-full bg-brand-teal-soft px-3 py-1 text-sm font-bold text-brand-teal-deep">
                    {block.sound}
                  </p>
                </header>
                <div className="px-5 py-5 sm:px-6">
                  <p className="text-sm leading-6 text-brand-ink">
                    {block.guidance}
                  </p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {block.words.map((word) => (
                      <li
                        key={word.word}
                        className="rounded-2xl border border-brand-line bg-brand-mist/40 p-4"
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-base font-bold text-brand-navy">
                            {word.word}
                          </p>
                          <SpeakButton
                            text={word.word}
                            label={`Listen to: ${word.word}`}
                          />
                          <span className="ml-auto rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-brand-teal-deep shadow-sm">
                            {word.respelling}
                          </span>
                        </div>
                        {word.example && (
                          <div className="mt-2 flex items-start gap-2.5">
                            <p className="min-w-0 flex-1 text-sm leading-6 text-brand-body">
                              {word.example}
                            </p>
                            <SpeakButton
                              text={word.example}
                              label={`Listen to the example for ${word.word}`}
                              className="mt-0.5"
                            />
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs leading-5 text-brand-body">
                    Press ▶ to hear each word in your browser&apos;s English
                    voice — try{" "}
                    <span className="font-semibold text-brand-teal-deep">
                      Slow
                    </span>{" "}
                    first, then repeat it aloud at normal speed. The written
                    respellings are a backup; the site does not record or assess
                    your pronunciation.
                  </p>
                </div>
              </section>
            );

          case "exercise":
            return (
              <LessonExercise
                key={index}
                title={block.title}
                instructions={block.instructions}
                items={block.items}
              />
            );

          default:
            return null;
        }
      })}
      </div>
    </div>
  );
}
