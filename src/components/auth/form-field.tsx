import type { ComponentProps } from "react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type FormFieldProps = {
  id: string;
  name: string;
  label: string;
  error?: string;
  hint?: string;
} & Omit<ComponentProps<typeof Input>, "id" | "name">;

export function FormField({
  id,
  name,
  label,
  error,
  hint,
  className,
  ...props
}: FormFieldProps) {
  const describedBy =
    [hint ? `${id}-hint` : null, error ? `${id}-error` : null]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-brand-navy"
      >
        {label}
      </label>
      <Input
        id={id}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={cn(
          "h-11 rounded-xl border-brand-line bg-white px-3.5 text-[0.95rem] text-brand-navy shadow-none placeholder:text-brand-body/55 focus-visible:border-brand-teal focus-visible:ring-brand-teal/25",
          className,
        )}
        {...props}
      />
      {hint ? (
        <p id={`${id}-hint`} className="text-xs leading-5 text-brand-body">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-sm font-medium text-destructive"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
