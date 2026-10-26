"use client";

import { useActionState } from "react";

import {
  createUnitAction,
  updateUnitAction,
} from "@/lib/admin/actions";
import {
  initialAdminActionState,
  type AdminActionState,
} from "@/lib/admin/types";
import type { AdminUnitRecord } from "@/lib/content/types";
import { cn } from "@/lib/utils";

import { AdminFeedback } from "./admin-feedback";
import { AdminField } from "./admin-field";
import { AdminSubmitButton } from "./admin-submit-button";
import {
  adminInputClass,
  adminSelectClass,
  adminTextareaClass,
} from "./styles";

type AdminAction = (
  state: AdminActionState,
  formData: FormData,
) => Promise<AdminActionState>;

export function AdminUnitCreateForm({
  courseId,
  disabled = false,
}: {
  courseId: string;
  disabled?: boolean;
}) {
  const [state, formAction] = useActionState<AdminActionState, FormData>(
    createUnitAction as AdminAction,
    initialAdminActionState,
  );
  const fieldErrors = state.fieldErrors ?? {};

  return (
    <form
      action={formAction}
      className="rounded-2xl border border-dashed border-brand-line bg-brand-mist/50 p-4 sm:p-5"
    >
      <input type="hidden" name="courseId" value={courseId} />
      <AdminFeedback state={state} className="mb-4" />
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-sm font-bold text-brand-navy">Add a unit</h3>
        <span className="text-[0.65rem] font-medium text-brand-body">
          New units start as drafts
        </span>
      </div>

      <div className="mt-4 grid gap-4">
        <AdminField
          label="Unit title"
          htmlFor="new-unit-title"
          error={fieldErrors.title}
        >
          <input
            id="new-unit-title"
            name="title"
            required
            maxLength={200}
            disabled={disabled}
            className={adminInputClass}
            placeholder="Unit 1 — First conversations"
          />
        </AdminField>
        <AdminField
          label="Description"
          htmlFor="new-unit-description"
          error={fieldErrors.description}
        >
          <textarea
            id="new-unit-description"
            name="description"
            rows={2}
            maxLength={2000}
            disabled={disabled}
            className={adminTextareaClass}
            placeholder="What this unit covers and why it matters."
          />
        </AdminField>
        <input type="hidden" name="status" value="draft" />
      </div>

      <AdminSubmitButton
        label="Add unit"
        pendingLabel="Adding…"
        disabled={disabled}
        size="sm"
        className="mt-4 rounded-full px-4"
      />
    </form>
  );
}

export function AdminUnitEditForm({
  courseId,
  unit,
  disabled = false,
}: {
  courseId: string;
  unit: AdminUnitRecord;
  disabled?: boolean;
}) {
  const [state, formAction] = useActionState<AdminActionState, FormData>(
    updateUnitAction as AdminAction,
    initialAdminActionState,
  );
  const fieldErrors = state.fieldErrors ?? {};

  return (
    <form action={formAction} className="mt-3 space-y-4">
      <input type="hidden" name="courseId" value={courseId} />
      <input type="hidden" name="unitId" value={unit.id} />
      <AdminFeedback state={state} className="mb-3" />

      <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_10rem]">
        <AdminField label="Unit title" htmlFor={`unit-title-${unit.id}`} error={fieldErrors.title}>
          <input
            id={`unit-title-${unit.id}`}
            name="title"
            defaultValue={unit.title}
            required
            maxLength={200}
            disabled={disabled}
            className={cn(adminInputClass, "h-9")}
          />
        </AdminField>
        <AdminField label="Status" htmlFor={`unit-status-${unit.id}`} error={fieldErrors.status}>
          <select
            id={`unit-status-${unit.id}`}
            name="status"
            defaultValue={unit.status}
            disabled={disabled}
            className={cn(adminSelectClass, "h-9")}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </AdminField>
      </div>

      <AdminField label="Description" htmlFor={`unit-description-${unit.id}`} error={fieldErrors.description}>
        <textarea
          id={`unit-description-${unit.id}`}
          name="description"
          defaultValue={unit.description}
          rows={2}
          maxLength={2000}
          disabled={disabled}
          className={cn(adminTextareaClass, "text-xs leading-5")}
        />
      </AdminField>

      <AdminSubmitButton
        label="Save unit"
        pendingLabel="Saving…"
        size="sm"
        variant="outline"
        disabled={disabled}
        className="rounded-full px-4"
      />
    </form>
  );
}
