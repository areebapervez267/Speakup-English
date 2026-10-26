"use client";

import { AlertTriangle, CheckCircle2, ShieldAlert } from "lucide-react";

import type { AdminActionState } from "@/lib/admin/types";
import { cn } from "@/lib/utils";

export function AdminFeedback({
  state,
  showFieldErrors = true,
  compact = false,
  className,
}: {
  state: AdminActionState;
  showFieldErrors?: boolean;
  compact?: boolean;
  className?: string;
}) {
  if (state.status === "idle") {
    return null;
  }

  const isSuccess = state.status === "success";
  const isForbidden = state.status === "forbidden";
  const tone = isSuccess
    ? "border-brand-teal/30 bg-brand-teal-soft text-brand-teal-deep"
    : isForbidden
      ? "border-amber-200 bg-amber-50 text-amber-900"
      : "border-red-200 bg-red-50 text-red-800";
  const Icon = isSuccess
    ? CheckCircle2
    : isForbidden
      ? ShieldAlert
      : AlertTriangle;
  const fieldErrors = showFieldErrors
    ? Object.entries(state.fieldErrors ?? {})
    : [];
  const compactTone = isSuccess
    ? "text-brand-teal-deep"
    : isForbidden
      ? "text-amber-900"
      : "text-red-700";

  if (compact) {
    return (
      <div className={cn("text-xs leading-5", className)}>
        <p
          role={isSuccess ? "status" : "alert"}
          className={cn("flex items-start gap-1.5 font-semibold", compactTone)}
        >
          <Icon className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
          {state.message ?? (isSuccess ? "Saved." : "Something went wrong.")}
        </p>
        {fieldErrors.length > 0 ? (
          <ul className="mt-1 list-disc space-y-0.5 pl-4 text-red-700">
            {fieldErrors.map(([field, message]) => (
              <li key={field}>{message}</li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }

  return (
    <div
      role={isSuccess ? "status" : "alert"}
      aria-live={isSuccess ? "polite" : "assertive"}
      className={cn("rounded-xl border px-4 py-3 text-sm leading-6", tone, className)}
    >
      <div className="flex items-start gap-2.5">
        <Icon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
        <div className="min-w-0">
          <p className="font-semibold">
            {state.message ??
              (isSuccess ? "Your changes were saved." : "Something went wrong.")}
          </p>
          {fieldErrors.length > 0 ? (
            <ul className="mt-1 list-disc space-y-0.5 pl-4 text-xs leading-5">
              {fieldErrors.map(([field, message]) => (
                <li key={field}>{message}</li>
              ))}
            </ul>
          ) : null}
          {state.warnings && state.warnings.length > 0 ? (
            <ul className="mt-2 list-disc space-y-1 pl-4 text-xs leading-5">
              {state.warnings.map((warning) => (
                <li key={warning}>{warning}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}
