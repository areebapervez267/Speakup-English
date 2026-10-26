import type { ReactNode } from "react";
import { AlertCircle } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  adminFieldErrorClass,
  adminHelpClass,
  adminLabelClass,
} from "./styles";

export function AdminField({
  label,
  htmlFor,
  error,
  help,
  hint,
  className,
  children,
}: {
  label: string;
  htmlFor?: string;
  error?: string;
  help?: ReactNode;
  hint?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("min-w-0", className)}>
      <div className="flex flex-wrap items-baseline justify-between gap-1">
        <label htmlFor={htmlFor} className={adminLabelClass}>
          {label}
        </label>
        {hint ? (
          <span className="text-[0.65rem] font-medium text-brand-body">
            {hint}
          </span>
        ) : null}
      </div>
      <div className="mt-1.5">{children}</div>
      {error ? (
        <p className={adminFieldErrorClass}>
          <AlertCircle className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : help ? (
        <p className={adminHelpClass}>{help}</p>
      ) : null}
    </div>
  );
}
