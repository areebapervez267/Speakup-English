"use client";

import Link from "next/link";
import { useActionState, useState } from "react";

import { FormField } from "@/components/auth/form-field";
import { SubmitButton } from "@/components/auth/submit-button";
import { updatePasswordAction } from "@/lib/auth/actions";
import {
  initialAuthFormState,
  type AuthFieldErrors,
} from "@/lib/auth/types";
import { validateResetFields } from "@/lib/auth/validation";

const FIELD_IDS: Record<"password" | "confirmPassword", string> = {
  password: "reset-password",
  confirmPassword: "reset-confirm-password",
};

export function ResetPasswordForm({ email }: { email: string }) {
  const [state, formAction] = useActionState(
    updatePasswordAction,
    initialAuthFormState,
  );
  const [clientErrors, setClientErrors] = useState<AuthFieldErrors>({});

  const errors = { ...state.fieldErrors, ...clientErrors };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget);
    const nextErrors = validateResetFields({
      password: String(formData.get("password") ?? ""),
      confirmPassword: String(formData.get("confirmPassword") ?? ""),
    });

    if (Object.keys(nextErrors).length > 0) {
      event.preventDefault();
      setClientErrors(nextErrors);
      const firstField = (
        ["password", "confirmPassword"] as const
      ).find((field) => nextErrors[field]);
      if (firstField) {
        document.getElementById(FIELD_IDS[firstField])?.focus();
      }
      return;
    }

    setClientErrors({});
  }

  return (
    <div>
      <h2 className="text-2xl font-bold tracking-[-0.02em] text-brand-navy">
        New password
      </h2>
      <p className="mt-1.5 text-sm leading-6 text-brand-body">
        You are resetting the password for{" "}
        <span className="font-semibold text-brand-navy">{email}</span>.
      </p>

      {state.status === "error" && state.message ? (
        <div
          role="alert"
          className="mt-5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm leading-6 text-red-800"
        >
          <p>{state.message}</p>
          <Link
            href="/forgot-password"
            className="mt-2 inline-flex font-semibold underline decoration-red-300 underline-offset-4 hover:text-red-950"
          >
            Request a new reset link
          </Link>
        </div>
      ) : null}

      <form
        action={formAction}
        onSubmit={handleSubmit}
        noValidate
        className="mt-5 space-y-4"
      >
        <FormField
          id={FIELD_IDS.password}
          name="password"
          label="New password"
          type="password"
          autoComplete="new-password"
          hint="At least 8 characters. Use something you have not used before."
          error={errors.password}
          required
        />

        <FormField
          id={FIELD_IDS.confirmPassword}
          name="confirmPassword"
          label="Confirm new password"
          type="password"
          autoComplete="new-password"
          error={errors.confirmPassword}
          required
        />

        <SubmitButton pendingLabel="Updating password…">
          Update password
        </SubmitButton>
      </form>

      <p className="mt-5 text-center text-sm text-brand-body">
        Signing in from another device?{" "}
        <Link
          href="/login"
          className="font-semibold text-brand-navy underline decoration-brand-teal/50 underline-offset-4 transition-colors hover:text-brand-teal-deep"
        >
          Return to login
        </Link>
      </p>
    </div>
  );
}
