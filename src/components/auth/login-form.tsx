"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState, useState } from "react";

import { FormField } from "@/components/auth/form-field";
import { SetupNotice } from "@/components/auth/setup-notice";
import { SubmitButton } from "@/components/auth/submit-button";
import { signInAction } from "@/lib/auth/actions";
import {
  initialAuthFormState,
  type AuthField,
  type AuthFieldErrors,
} from "@/lib/auth/types";
import {
  normalizeEmail,
  safeRedirectPath,
  validateLoginFields,
} from "@/lib/auth/validation";

const FIELD_IDS: Record<"email" | "password", string> = {
  email: "login-email",
  password: "login-password",
};

function queryErrorMessage(error: string | null) {
  switch (error) {
    case "reset-session":
      return "Your reset link is invalid or has expired. Request a new link below.";
    case "session":
      return "Your session has expired. Sign in again to continue.";
    case "not-configured":
      return "Authentication is not configured yet.";
    default:
      return null;
  }
}

export function LoginForm({ configured }: { configured: boolean }) {
  const searchParams = useSearchParams();
  const next = safeRedirectPath(searchParams.get("next"), "/account");
  const queryMessage = queryErrorMessage(searchParams.get("error"));
  const [state, formAction] = useActionState(
    signInAction,
    initialAuthFormState,
  );
  const [clientErrors, setClientErrors] = useState<AuthFieldErrors>({});

  const errors = { ...state.fieldErrors, ...clientErrors };
  const disabled = !configured;
  const showQueryMessage = state.status !== "error" && queryMessage;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (disabled) {
      event.preventDefault();
      return;
    }

    const formData = new FormData(event.currentTarget);
    const nextErrors = validateLoginFields({
      email: normalizeEmail(String(formData.get("email") ?? "")),
      password: String(formData.get("password") ?? ""),
    });

    if (Object.keys(nextErrors).length > 0) {
      event.preventDefault();
      setClientErrors(nextErrors);
      const firstField = (["email", "password"] as const).find(
        (field) => nextErrors[field],
      ) as Exclude<AuthField, "fullName" | "confirmPassword"> | undefined;
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
        Welcome back
      </h2>
      <p className="mt-1.5 text-sm leading-6 text-brand-body">
        Sign in to open your student account.
      </p>

      {!configured ? (
        <div className="mt-5">
          <SetupNotice />
        </div>
      ) : null}

      {state.status === "error" && state.message ? (
        <div
          role="alert"
          className="mt-5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm leading-6 text-red-800"
        >
          {state.message}
        </div>
      ) : null}

      {showQueryMessage ? (
        <div
          role="alert"
          className="mt-5 rounded-xl border border-amber-200 bg-amber-50 px-3.5 py-3 text-sm leading-6 text-amber-950"
        >
          {queryMessage}
        </div>
      ) : null}

      <form
        action={formAction}
        onSubmit={handleSubmit}
        noValidate
        className="mt-5 space-y-4"
      >
        <input type="hidden" name="next" value={next} />

        <FormField
          id={FIELD_IDS.email}
          name="email"
          label="Email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          defaultValue={state.values?.email}
          error={errors.email}
          disabled={disabled}
          required
        />

        <FormField
          id={FIELD_IDS.password}
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          error={errors.password}
          disabled={disabled}
          required
        />

        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-sm font-semibold text-brand-teal-deep underline decoration-brand-teal/40 underline-offset-4 transition-colors hover:text-brand-navy"
          >
            Forgot password?
          </Link>
        </div>

        <SubmitButton disabled={disabled} pendingLabel="Signing in…">
          Log in
        </SubmitButton>
      </form>

      <p className="mt-5 text-center text-sm text-brand-body">
        New to SpeakUp?{" "}
        <Link
          href="/signup"
          className="font-semibold text-brand-navy underline decoration-brand-teal/50 underline-offset-4 transition-colors hover:text-brand-teal-deep"
        >
          Create a free account
        </Link>
      </p>
    </div>
  );
}
