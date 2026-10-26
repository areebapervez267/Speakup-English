"use client";

import { useActionState, type ReactNode } from "react";

import { initialAdminActionState, type AdminActionState } from "@/lib/admin/types";
import { cn } from "@/lib/utils";

import { AdminFeedback } from "./admin-feedback";
import { AdminSubmitButton } from "./admin-submit-button";

type AdminAction = (
  state: AdminActionState,
  formData: FormData,
) => Promise<AdminActionState>;

export function AdminActionForm({
  action,
  children,
  hiddenFields,
  submitLabel,
  pendingLabel,
  confirmMessage,
  submitVariant = "default",
  submitSize = "default",
  buttonClassName,
  className,
  feedback = "top",
  showFieldErrors = true,
  disabled = false,
}: {
  action: AdminAction;
  children?: ReactNode;
  hiddenFields?: Record<string, string>;
  submitLabel: string;
  pendingLabel?: string;
  confirmMessage?: string;
  submitVariant?: React.ComponentProps<typeof AdminSubmitButton>["variant"];
  submitSize?: React.ComponentProps<typeof AdminSubmitButton>["size"];
  buttonClassName?: string;
  className?: string;
  feedback?: "top" | "after" | "none";
  showFieldErrors?: boolean;
  disabled?: boolean;
}) {
  const [state, formAction] = useActionState(action, initialAdminActionState);

  return (
    <form
      action={formAction}
      className={className}
      onSubmit={(event) => {
        if (confirmMessage && !window.confirm(confirmMessage)) {
          event.preventDefault();
        }
      }}
    >
      {Object.entries(hiddenFields ?? {}).map(([name, value]) => (
        <input key={name} type="hidden" name={name} value={value} />
      ))}

      {feedback === "top" ? (
        <AdminFeedback
          state={state}
          showFieldErrors={showFieldErrors}
          className="mb-4"
        />
      ) : null}

      {children}

      <AdminSubmitButton
        label={submitLabel}
        pendingLabel={pendingLabel}
        variant={submitVariant}
        size={submitSize}
        disabled={disabled}
        className={cn(children ? "mt-4" : undefined, buttonClassName)}
      />

      {feedback === "after" ? (
        <AdminFeedback
          state={state}
          showFieldErrors={showFieldErrors}
          compact
          className="mt-2"
        />
      ) : null}
    </form>
  );
}
