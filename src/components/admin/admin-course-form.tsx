"use client";

import { useActionState, useState } from "react";
import { LockKeyhole, WandSparkles } from "lucide-react";

import { cefrLevels, skills } from "@/data/curriculum";
import {
  createCourseAction,
  updateCourseAction,
} from "@/lib/admin/actions";
import { normalizeSlug } from "@/lib/admin/validation";
import {
  initialAdminActionState,
  type AdminActionState,
} from "@/lib/admin/types";
import type { AdminCourseRecord } from "@/lib/content/types";
import { cn } from "@/lib/utils";

import { AdminFeedback } from "./admin-feedback";
import { AdminField } from "./admin-field";
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

export function AdminCourseForm({
  course,
  locked = false,
}: {
  course?: AdminCourseRecord;
  locked?: boolean;
}) {
  const isEdit = Boolean(course);
  const action: AdminAction = isEdit ? updateCourseAction : createCourseAction;
  const [state, formAction] = useActionState(action, initialAdminActionState);

  const [title, setTitle] = useState(course?.title ?? "");
  const [slug, setSlug] = useState(course?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(isEdit);
  const slugLocked = Boolean(course?.lastPublishedAt);
  const fieldErrors = state.fieldErrors ?? {};

  return (
    <form action={formAction} className="space-y-6">
      {course ? <input type="hidden" name="courseId" value={course.id} /> : null}

      <AdminFeedback state={state} showFieldErrors={false} />

      <section className={cn(adminCardClass, "p-5 sm:p-6")}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-brand-navy">
              Course identity
            </h2>
            <p className="mt-1 text-sm leading-6 text-brand-body">
              The title and URL students see in the catalogue and on course
              pages.
            </p>
          </div>
          {slugLocked ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-line bg-brand-mist px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.08em] text-brand-body">
              <LockKeyhole className="size-3" aria-hidden="true" />
              URL locked
            </span>
          ) : null}
        </div>

        <fieldset disabled={locked} className="mt-5 grid gap-5">
          <AdminField
            label="Course title"
            htmlFor="course-title"
            error={fieldErrors.title}
            hint={`${title.length}/160`}
          >
            <input
              id="course-title"
              name="title"
              value={title}
              onChange={(event) => {
                const value = event.target.value;
                setTitle(value);
                if (!slugTouched) {
                  setSlug(normalizeSlug(value));
                }
              }}
              maxLength={160}
              required
              className={adminInputClass}
              placeholder="Everyday Business English"
            />
          </AdminField>

          <AdminField
            label="URL slug"
            htmlFor="course-slug"
            error={fieldErrors.slug}
            help={
              slugLocked
                ? "The URL is permanent after the first publish so student links and saved progress keep working."
                : "Lowercase letters, numbers and single hyphens. The course will live at /courses/{slug}."
            }
          >
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="flex min-w-0 flex-1 items-center rounded-xl border border-brand-line bg-white shadow-sm focus-within:border-brand-teal focus-within:ring-2 focus-within:ring-brand-teal/30">
                <span className="pl-3 text-xs font-medium text-brand-body">
                  /courses/
                </span>
                <input
                  id="course-slug"
                  name="slug"
                  value={slug}
                  onChange={(event) => {
                    setSlugTouched(true);
                    setSlug(event.target.value);
                  }}
                  onBlur={() => setSlug((current) => normalizeSlug(current))}
                  maxLength={120}
                  readOnly={slugLocked}
                  required
                  className="h-10 min-w-0 flex-1 rounded-r-xl border-0 bg-transparent px-1.5 text-sm text-brand-ink outline-none placeholder:text-brand-body/60 read-only:text-brand-body"
                  placeholder="everyday-business-english"
                />
              </div>
              {!slugLocked ? (
                <button
                  type="button"
                  onClick={() => {
                    setSlug(normalizeSlug(title));
                    setSlugTouched(true);
                  }}
                  className="inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-xl border border-brand-line bg-white px-3 text-xs font-semibold text-brand-navy shadow-sm transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                >
                  <WandSparkles className="size-3.5 text-brand-teal-deep" aria-hidden="true" />
                  From title
                </button>
              ) : null}
            </div>
          </AdminField>

          <AdminField
            label="Short summary"
            htmlFor="course-summary"
            error={fieldErrors.summary}
            hint="Shown on course cards — max 500 characters"
          >
            <textarea
              id="course-summary"
              name="summary"
              defaultValue={course?.summary ?? ""}
              maxLength={500}
              required
              rows={2}
              className={adminTextareaClass}
              placeholder="A practical course for everyday workplace conversations."
            />
          </AdminField>

          <AdminField
            label="Full description"
            htmlFor="course-description"
            error={fieldErrors.description}
            hint="Shown on the course page — max 4000 characters"
          >
            <textarea
              id="course-description"
              name="description"
              defaultValue={course?.description ?? ""}
              maxLength={4000}
              required
              rows={6}
              className={adminTextareaClass}
              placeholder="Explain who the course is for, what it covers and how students will practise."
            />
          </AdminField>
        </fieldset>
      </section>

      <section className={cn(adminCardClass, "p-5 sm:p-6")}>
        <h2 className="text-lg font-bold text-brand-navy">Classification</h2>
        <p className="mt-1 text-sm leading-6 text-brand-body">
          Level and skill control catalogue filters. Free and premium labels do
          not process payments — they only describe access.
        </p>

        <fieldset disabled={locked} className="mt-5 grid gap-5 sm:grid-cols-2">
          <AdminField label="CEFR level" htmlFor="course-level" error={fieldErrors.level}>
            <select
              id="course-level"
              name="level"
              defaultValue={course?.level ?? "a1"}
              className={adminSelectClass}
            >
              {cefrLevels.map((level) => (
                <option key={level.id} value={level.id}>
                  {level.label} — {level.name}
                </option>
              ))}
            </select>
          </AdminField>

          <AdminField label="Primary skill" htmlFor="course-skill" error={fieldErrors.skill}>
            <select
              id="course-skill"
              name="skill"
              defaultValue={course?.skill ?? "grammar"}
              className={adminSelectClass}
            >
              {skills.map((skill) => (
                <option key={skill.id} value={skill.id}>
                  {skill.label}
                </option>
              ))}
            </select>
          </AdminField>

          <AdminField
            label="Estimated hours"
            htmlFor="course-hours"
            error={fieldErrors.hours}
            help="A whole number from 1 to 200."
          >
            <input
              id="course-hours"
              name="hours"
              type="number"
              min={1}
              max={200}
              step={1}
              defaultValue={course?.hours ?? 6}
              required
              className={adminInputClass}
            />
          </AdminField>

          <div>
            <span className="block text-[0.68rem] font-bold uppercase tracking-[0.12em] text-brand-navy">
              Access label
            </span>
            <label className="mt-3 flex cursor-pointer items-start gap-3 rounded-xl border border-brand-line bg-brand-mist/60 p-3 text-sm leading-6 text-brand-ink">
              <input
                type="checkbox"
                name="premium"
                defaultChecked={course?.premium ?? false}
                className="mt-0.5 size-4 rounded border-brand-line accent-brand-teal"
              />
              <span>
                <span className="font-semibold text-brand-navy">Premium course</span>
                <span className="block text-xs leading-5 text-brand-body">
                  C1–C2 content is labelled Premium. No payment is collected or
                  simulated.
                </span>
              </span>
            </label>
          </div>
        </fieldset>
      </section>

      <section className={cn(adminCardClass, "p-5 sm:p-6")}>
        <h2 className="text-lg font-bold text-brand-navy">
          Outcomes and metadata
        </h2>
        <p className="mt-1 text-sm leading-6 text-brand-body">
          Outcomes appear on the public course page. Metadata is optional
          structured data stored with the course.
        </p>

        <fieldset disabled={locked} className="mt-5 grid gap-5">
          <AdminField
            label="Learning outcomes"
            htmlFor="course-outcomes"
            error={fieldErrors.outcomes}
            help="One outcome per line. Between 1 and 12 outcomes."
          >
            <textarea
              id="course-outcomes"
              name="outcomes"
              defaultValue={(course?.outcomes ?? []).join("\n")}
              rows={6}
              className={adminTextareaClass}
              placeholder={"Introduce yourself clearly in a work meeting\nAsk and answer follow-up questions"}
            />
          </AdminField>

          <AdminField
            label="Metadata (JSON)"
            htmlFor="course-metadata"
            error={fieldErrors.metadata}
            help="Optional JSON object, for example lesson notes or internal tags. Keep it under 20 KB."
          >
            <textarea
              id="course-metadata"
              name="metadata"
              defaultValue={JSON.stringify(course?.metadata ?? {}, null, 2)}
              rows={5}
              spellCheck={false}
              className={cn(adminTextareaClass, "font-mono text-xs")}
            />
          </AdminField>
        </fieldset>
      </section>

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-brand-line bg-white p-4 shadow-sm">
        <p className="text-xs leading-5 text-brand-body">
          {locked
            ? "This course is archived. Restore it before changing any details."
            : isEdit
              ? "Saving changes updates the draft. Published pages change only after you publish again."
              : "The course is created as a draft. You can add units and lessons before publishing."}
        </p>
        <AdminSubmitButton
          label={isEdit ? "Save course details" : "Create draft course"}
          pendingLabel={isEdit ? "Saving…" : "Creating…"}
          disabled={locked}
          className="rounded-full px-5"
        />
      </div>
    </form>
  );
}
