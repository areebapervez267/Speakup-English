"use client";

import { useActionState, useMemo, useState } from "react";
import {
  Eye,
  FileJson2,
  LockKeyhole,
  Sparkles,
  TriangleAlert,
  WandSparkles,
} from "lucide-react";

import { LessonContent } from "@/components/lessons/lesson-blocks";
import type { LessonBlock } from "@/data/lessons/types";
import {
  createLessonAction,
  deleteLessonAction,
  updateLessonAction,
} from "@/lib/admin/actions";
import {
  initialAdminActionState,
  type AdminActionState,
} from "@/lib/admin/types";
import { normalizeSlug, validateBlocks } from "@/lib/admin/validation";
import type { AdminLessonRecord } from "@/lib/content/types";
import { cn } from "@/lib/utils";

import { AdminActionForm } from "./admin-action-form";
import { AdminFeedback } from "./admin-feedback";
import { AdminField } from "./admin-field";
import { AdminQuizBuilder } from "./admin-quiz-builder";
import { AdminSubmitButton } from "./admin-submit-button";
import {
  adminCardClass,
  adminInputClass,
  adminSelectClass,
  adminTextareaClass,
} from "./styles";

type AdminAction = (
  state: AdminActionState,
  formData: FormData,
) => Promise<AdminActionState>;

const STARTER_BLOCKS: LessonBlock[] = [
  {
    type: "text",
    title: "Why this matters",
    paragraphs: [
      "Start with a short, friendly introduction that tells the student what they will practise and why it is useful.",
    ],
  },
  {
    type: "rules",
    title: "The key pattern",
    items: [
      "Write one clear rule per line.",
      "Keep each rule short enough to scan.",
    ],
  },
  {
    type: "examples",
    title: "Examples in context",
    items: [
      { text: "She works in a small design studio.", note: "Present simple for a routine." },
      { text: "They meet every Monday morning.", note: "The verb takes no -s with they." },
    ],
  },
  {
    type: "tip",
    title: "Remember",
    text: "Add one practical tip that students can apply immediately.",
  },
  {
    type: "practice",
    title: "Quick practice",
    instructions: "Complete each prompt, then reveal the answer to check.",
    items: [
      { prompt: "He ___ (work) from home on Fridays.", answer: "works" },
    ],
  },
];

const BLOCK_TYPES = [
  "text",
  "rules",
  "examples",
  "table",
  "tip",
  "practice",
  "passage",
  "wordbank",
  "dialogue",
  "transcript",
  "sound",
  "exercise",
];

export function AdminLessonEditor({
  mode,
  courseId,
  courseSlug,
  units,
  lesson,
  initialUnitId,
  archived = false,
}: {
  mode: "create" | "edit";
  courseId: string;
  courseSlug: string;
  units: Array<{ id: string; title: string }>;
  lesson?: AdminLessonRecord;
  initialUnitId?: string;
  archived?: boolean;
}) {
  const isEdit = mode === "edit" && Boolean(lesson);
  const action: AdminAction = isEdit ? updateLessonAction : createLessonAction;
  const [state, formAction] = useActionState(action, initialAdminActionState);
  const fieldErrors = state.fieldErrors ?? {};

  const [title, setTitle] = useState(lesson?.title ?? "");
  const [slug, setSlug] = useState(lesson?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(isEdit);
  const [blocksText, setBlocksText] = useState(() =>
    JSON.stringify(lesson?.blocks ?? [], null, 2),
  );

  const preview = useMemo(() => {
    let parsed: unknown;
    try {
      parsed = JSON.parse(blocksText);
    } catch {
      return {
        ok: false as const,
        message: "Blocks are not valid JSON yet.",
        details: [] as string[],
      };
    }

    const result = validateBlocks(parsed);

    if (!result.ok) {
      return {
        ok: false as const,
        message: result.errors.blocks ?? "The blocks are not valid.",
        details: [] as string[],
      };
    }

    return {
      ok: true as const,
      blocks: result.value,
    };
  }, [blocksText]);

  function loadStarterBlocks() {
    if (blocksText.trim() !== "[]" && blocksText.trim() !== "") {
      const replace = window.confirm(
        "Replace the current block JSON with the starter example?",
      );
      if (!replace) {
        return;
      }
    }
    setBlocksText(JSON.stringify(STARTER_BLOCKS, null, 2));
  }

  return (
    <div className="space-y-6">
      {isEdit && lesson ? (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-brand-line bg-white px-4 py-3 shadow-sm">
          <div className="flex flex-wrap items-center gap-2 text-xs text-brand-body">
            <span className="font-semibold text-brand-navy">Lesson workspace</span>
            <span className="text-brand-body/50">·</span>
            <span className="font-mono text-[0.7rem]">
              {courseSlug}/{lesson.slug}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={`/admin/courses/${courseId}/lessons/${lesson.id}/preview`}
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-line bg-white px-3 py-1.5 text-xs font-semibold text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
            >
              <Eye className="size-3.5 text-brand-teal-deep" aria-hidden="true" />
              Preview with answers
            </a>
          </div>
        </div>
      ) : null}

      <form action={formAction} className="space-y-6">
        <input type="hidden" name="courseId" value={courseId} />
        {lesson ? (
          <input type="hidden" name="lessonId" value={lesson.id} />
        ) : null}
        {lesson ? (
          <input type="hidden" name="unitId" value={lesson.unitId} />
        ) : null}

        <AdminFeedback state={state} showFieldErrors={false} />

        <section className={cn(adminCardClass, "p-5 sm:p-6")}>
          <h2 className="text-lg font-bold text-brand-navy">Lesson details</h2>
          <p className="mt-1 text-sm leading-6 text-brand-body">
            These details appear in the course outline and at the top of the
            lesson page.
          </p>

          <div className="mt-5 grid gap-5">
            {!lesson ? (
              <AdminField label="Unit" htmlFor="lesson-unit">
                <select
                  id="lesson-unit"
                  name="unitId"
                  defaultValue={initialUnitId ?? units[0]?.id ?? ""}
                  required
                  className={adminSelectClass}
                  disabled={archived}
                >
                  {units.map((unit) => (
                    <option key={unit.id} value={unit.id}>
                      {unit.title}
                    </option>
                  ))}
                </select>
              </AdminField>
            ) : null}

            <AdminField
              label="Lesson title"
              htmlFor="lesson-title"
              error={fieldErrors.title}
              hint={`${title.length}/200`}
            >
              <input
                id="lesson-title"
                name="title"
                value={title}
                onChange={(event) => {
                  const value = event.target.value;
                  setTitle(value);
                  if (!slugTouched) {
                    setSlug(normalizeSlug(value));
                  }
                }}
                maxLength={200}
                required
                disabled={archived}
                className={adminInputClass}
                placeholder="Talking about your daily routine"
              />
            </AdminField>

            <AdminField
              label="Lesson URL slug"
              htmlFor="lesson-slug"
              error={fieldErrors.slug}
              help={
                isEdit
                  ? "Lesson URLs are permanent so saved progress and shared links keep working."
                  : "Lowercase letters, numbers and single hyphens. Unique within this course."
              }
            >
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  id="lesson-slug"
                  name="slug"
                  value={slug}
                  onChange={(event) => {
                    setSlugTouched(true);
                    setSlug(event.target.value);
                  }}
                  onBlur={() => setSlug((current) => normalizeSlug(current))}
                  maxLength={120}
                  readOnly={isEdit}
                  required
                  disabled={archived}
                  className={cn(adminInputClass, "flex-1 read-only:text-brand-body")}
                  placeholder="daily-routine"
                />
                {!isEdit ? (
                  <button
                    type="button"
                    onClick={() => {
                      setSlug(normalizeSlug(title));
                      setSlugTouched(true);
                    }}
                    className="inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-xl border border-brand-line bg-white px-3 text-xs font-semibold text-brand-navy shadow-sm transition-colors hover:bg-brand-mist"
                  >
                    <WandSparkles className="size-3.5 text-brand-teal-deep" aria-hidden="true" />
                    From title
                  </button>
                ) : (
                  <span className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-xl border border-brand-line bg-brand-mist px-3 text-xs font-semibold text-brand-body">
                    <LockKeyhole className="size-3.5" aria-hidden="true" />
                    Permanent
                  </span>
                )}
              </div>
            </AdminField>

            <AdminField
              label="Summary"
              htmlFor="lesson-summary"
              error={fieldErrors.summary}
              hint="Shown in the sidebar and course outline"
            >
              <textarea
                id="lesson-summary"
                name="summary"
                defaultValue={lesson?.summary ?? ""}
                maxLength={1000}
                rows={2}
                required
                disabled={archived}
                className={adminTextareaClass}
                placeholder="A short description of what the lesson covers."
              />
            </AdminField>

            <AdminField
              label="Learning objective"
              htmlFor="lesson-objective"
              error={fieldErrors.objective}
            >
              <textarea
                id="lesson-objective"
                name="objective"
                defaultValue={lesson?.objective ?? ""}
                maxLength={1000}
                rows={2}
                required
                disabled={archived}
                className={adminTextareaClass}
                placeholder="By the end of this lesson, you can…"
              />
            </AdminField>

            <div className="grid gap-5 sm:grid-cols-2">
              <AdminField
                label="Duration in minutes"
                htmlFor="lesson-minutes"
                error={fieldErrors.minutes}
              >
                <input
                  id="lesson-minutes"
                  name="minutes"
                  type="number"
                  min={1}
                  max={600}
                  step={1}
                  defaultValue={lesson?.minutes ?? 10}
                  required
                  disabled={archived}
                  className={adminInputClass}
                />
              </AdminField>

              <AdminField
                label="Publishing status"
                htmlFor="lesson-status"
                error={fieldErrors.status}
                help="Published lessons appear publicly only after the unit and course are published too."
              >
                <select
                  id="lesson-status"
                  name="status"
                  defaultValue={lesson?.status ?? "draft"}
                  disabled={archived}
                  className={adminSelectClass}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </AdminField>
            </div>
          </div>
        </section>

        <section className={cn(adminCardClass, "p-5 sm:p-6")}>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-brand-navy">
                Lesson content blocks
              </h2>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-brand-body">
                Content is stored as typed JSON blocks and rendered with the same
                components students see. Supported types:{" "}
                <span className="font-medium text-brand-navy">
                  {BLOCK_TYPES.join(", ")}
                </span>
                .
              </p>
            </div>
            <button
              type="button"
              onClick={loadStarterBlocks}
              disabled={archived}
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-line bg-white px-3 py-1.5 text-xs font-semibold text-brand-navy shadow-sm transition-colors hover:bg-brand-mist disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Sparkles className="size-3.5 text-brand-teal-deep" aria-hidden="true" />
              Load example blocks
            </button>
          </div>

          <AdminField
            label="Blocks JSON"
            htmlFor="lesson-blocks"
            error={fieldErrors.blocks}
            help="Use the block types documented in src/data/lessons/types.ts. The preview below only renders when the JSON is valid."
            className="mt-5"
          >
            <textarea
              id="lesson-blocks"
              name="blocks"
              value={blocksText}
              onChange={(event) => setBlocksText(event.target.value)}
              rows={16}
              spellCheck={false}
              disabled={archived}
              className={cn(adminTextareaClass, "font-mono text-[0.72rem] leading-5")}
            />
          </AdminField>

          <details className="group mt-4 rounded-xl border border-brand-line bg-brand-mist/50">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-xs font-semibold text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-teal [&::-webkit-details-marker]:hidden">
              <span className="inline-flex items-center gap-1.5">
                <FileJson2 className="size-3.5 text-brand-teal-deep" aria-hidden="true" />
                Block format reference
              </span>
              <span aria-hidden="true" className="text-brand-body transition-transform group-open:rotate-180">
                ▾
              </span>
            </summary>
            <div className="border-t border-brand-line px-4 py-3 text-xs leading-5 text-brand-body">
              <p>
                Every block needs a <code className="font-mono text-brand-navy">type</code>.
                Titles are optional for text, examples, table and tip blocks, and
                required for the other types.
              </p>
              <pre className="mt-3 overflow-x-auto rounded-lg bg-brand-navy p-3 font-mono text-[0.68rem] leading-5 text-white/90">
{`[
  {
    "type": "text",
    "title": "Section title",
    "paragraphs": ["First paragraph.", "Second paragraph."]
  },
  {
    "type": "examples",
    "title": "Examples",
    "items": [{ "text": "A full sentence.", "note": "Optional note" }]
  },
  {
    "type": "exercise",
    "title": "Choose the answer",
    "instructions": "Select one option.",
    "items": [{
      "prompt": "She ___ here.",
      "options": ["works", "work"],
      "correctIndex": 0,
      "explanation": "Third person takes -s."
    }]
  }
]`}
              </pre>
            </div>
          </details>

          <details className="group mt-4 rounded-xl border border-brand-line bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-xs font-semibold text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-teal [&::-webkit-details-marker]:hidden">
              <span className="inline-flex items-center gap-1.5">
                <Eye className="size-3.5 text-brand-teal-deep" aria-hidden="true" />
                Preview content blocks
              </span>
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.08em]",
                  preview.ok
                    ? "bg-brand-teal-soft text-brand-teal-deep"
                    : "bg-red-50 text-red-700",
                )}
              >
                {preview.ok ? `${preview.blocks.length} blocks` : "Invalid JSON"}
              </span>
            </summary>
            <div className="border-t border-brand-line px-4 py-4 sm:px-5">
              {preview.ok ? (
                preview.blocks.length > 0 ? (
                  <LessonContent blocks={preview.blocks} />
                ) : (
                  <p className="text-sm leading-6 text-brand-body">
                    No blocks yet. Load the example blocks or paste your own JSON.
                  </p>
                )
              ) : (
                <p className="flex items-start gap-2 rounded-xl bg-red-50 px-3 py-2 text-xs leading-5 text-red-700">
                  <TriangleAlert className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                  {preview.message}
                </p>
              )}
            </div>
          </details>
        </section>

        <section className={cn(adminCardClass, "p-5 sm:p-6")}>
          <h2 className="text-lg font-bold text-brand-navy">Lesson quiz</h2>
          <p className="mt-1 text-sm leading-6 text-brand-body">
            Questions are saved with the lesson but only shown to students one
            at a time. Correct answers are stored in the private answer key and
            never sent to the browser before submission.
          </p>
          {fieldErrors.quiz ? (
            <p className="mt-3 rounded-xl bg-red-50 px-3 py-2 text-xs font-semibold leading-5 text-red-700">
              {fieldErrors.quiz}
            </p>
          ) : null}
          <div className="mt-4">
            <AdminQuizBuilder initialQuestions={lesson?.quiz ?? []} />
          </div>
        </section>

        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-brand-line bg-white p-4 shadow-sm">
          <p className="text-xs leading-5 text-brand-body">
            {archived
              ? "Restore this course from the archive before editing its lessons."
              : isEdit
                ? "Saving updates the draft. Publish the course again to update public pages."
                : "The lesson is created in the chosen unit. You can keep editing after it is saved."}
          </p>
          <AdminSubmitButton
            label={isEdit ? "Save lesson" : "Create lesson"}
            pendingLabel={isEdit ? "Saving…" : "Creating…"}
            disabled={archived}
            className="rounded-full px-5"
          />
        </div>
      </form>

      {isEdit && lesson ? (
        <section className="rounded-2xl border border-red-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-red-700">Delete this lesson</h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-brand-body">
            Deleting removes the draft lesson. The delete is refused if any
            student has progress or quiz attempts for this lesson, so learning
            records are never silently destroyed.
          </p>
          <AdminActionForm
            action={deleteLessonAction}
            hiddenFields={{ courseId, lessonId: lesson.id }}
            submitLabel="Delete lesson permanently"
            pendingLabel="Deleting…"
            submitVariant="destructive"
            submitSize="sm"
            confirmMessage={`Delete "${lesson.title}"? This cannot be undone. Student records block the deletion if they exist.`}
            className="mt-4"
            feedback="after"
            buttonClassName="rounded-full px-4"
          />
        </section>
      ) : null}
    </div>
  );
}
