"use client";

import Link from "next/link";
import { MailCheck } from "lucide-react";
import { useActionState, useState } from "react";

import { FormField } from "@/components/auth/form-field";
import { SetupNotice } from "@/components/auth/setup-notice";
import { SubmitButton } from "@/components/auth/submit-button";
import { requestPasswordResetAction } from "@/lib/auth/actions";
import {
  initialAuthFormState,
  type AuthFieldErrors,
} from "@/lib/auth/types";
import { normalizeEmail, validateEmail } from "@/lib/auth/validation";

export function ForgotPasswordForm({ configured }: { configured: boolean }) {
  const [state, formAction] = useActionState(
    requestPasswordResetAction,
    initialAuthFormState,
  );
  const [clientErrors, setClientErrors] = useState<AuthFieldErrors>({});

  const errors = { ...state.fieldErrors, ...clientErrors };
  const disabled = !configured;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (disabled) {
      event.preventDefault();
      return;
    }

    const formData = new FormData(event.currentTarget);
    const email = normalizeEmail(String(formData.get("email") ?? ""));
    const emailError = validateEmail(email);

    if (emailError) {
      event.preventDefault();
      setClientErrors({ email: emailError });
      document.getElementById("forgot-email")?.focus();
      return;
    }

    setClientErrors({});
  }

  if (state.status === "success") {
    return (
      <div>
        <span className="grid size-12 place-items-center rounded-full bg-brand-teal-soft text-brand-teal-deep">
          <MailCheck className="size-6" aria-hidden="true" />
        </span>
        <h2 className="mt-4 font-display text-3xl text-brand-navy">
          Check your inbox
        </h2>
        <p className="mt-3 text-sm leading-6 text-brand-body">{state.message}</p>
        {state.values?.email ? (
          <p className="mt-4 rounded-xl bg-brand-mist px-3.5 py-2.5 text-sm font-semibold text-brand-navy">
            {state.values.email}
          </p>
        ) : null}
        <p className="mt-4 text-sm leading-6 text-brand-body">
          The link returns you to a secure page where you can choose a new
          password. For your security, it can only be used once.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="/login"
            className="inline-flex h-11 items-center justify-center rounded-full bg-brand-navy px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            Back to login
          </Link>
          <Link
            href="/signup"
            className="inline-flex h-11 items-center justify-center rounded-full border border-brand-line px-5 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            Create a free account
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold tracking-[-0.02em] text-brand-navy">
        Send a reset link
      </h2>
      <p className="mt-1.5 text-sm leading-6 text-brand-body">
        Use the email address on your account.
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

      <form
        action={formAction}
        onSubmit={handleSubmit}
        noValidate
        className="mt-5 space-y-4"
      >
        <FormField
          id="forgot-email"
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

        <SubmitButton disabled={disabled} pendingLabel="Sending link…">
          Send reset link
        </SubmitButton>
      </form>

      <p className="mt-5 text-center text-sm text-brand-body">
        Remembered your password?{" "}
        <Link
          href="/login"
          className="font-semibold text-brand-navy underline decoration-brand-teal/50 underline-offset-4 transition-colors hover:text-brand-teal-deep"
        >
          Log in
        </Link>
      </p>
    </div>
  );
}
