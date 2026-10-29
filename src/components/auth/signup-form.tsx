"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useActionState, useState } from "react";

import { FormField } from "@/components/auth/form-field";
import { SetupNotice } from "@/components/auth/setup-notice";
import { SubmitButton } from "@/components/auth/submit-button";
import { signUpAction } from "@/lib/auth/actions";
import {
  initialAuthFormState,
  type AuthField,
  type AuthFieldErrors,
} from "@/lib/auth/types";
import {
  normalizeEmail,
  normalizeFullName,
  validateSignUpFields,
} from "@/lib/auth/validation";

const FIELD_IDS: Record<AuthField, string> = {
  fullName: "signup-name",
  email: "signup-email",
  password: "signup-password",
  confirmPassword: "signup-confirm-password",
};

export function SignupForm({ configured }: { configured: boolean }) {
  const [state, formAction] = useActionState(
    signUpAction,
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
    const nextErrors = validateSignUpFields({
      fullName: normalizeFullName(String(formData.get("fullName") ?? "")),
      email: normalizeEmail(String(formData.get("email") ?? "")),
      password: String(formData.get("password") ?? ""),
      confirmPassword: String(formData.get("confirmPassword") ?? ""),
    });

    if (Object.keys(nextErrors).length > 0) {
      event.preventDefault();
      setClientErrors(nextErrors);
      const firstField = (
        ["fullName", "email", "password", "confirmPassword"] as const
      ).find((field) => nextErrors[field]);
      if (firstField) {
        document.getElementById(FIELD_IDS[firstField])?.focus();
      }
      return;
    }

    setClientErrors({});
  }

  if (state.status === "success") {
    return (
      <div>
        <span className="grid size-12 place-items-center rounded-full bg-brand-teal-soft text-brand-teal-deep">
          <CheckCircle2 className="size-6" aria-hidden="true" />
        </span>
        <h2 className="mt-4 font-display text-3xl text-brand-navy">
          Check your email
        </h2>
        <p className="mt-3 text-sm leading-6 text-brand-body">{state.message}</p>
        {state.values?.email ? (
          <p className="mt-4 rounded-xl bg-brand-mist px-3.5 py-2.5 text-sm font-semibold text-brand-navy">
            {state.values.email}
          </p>
        ) : null}
        <p className="mt-4 text-sm leading-6 text-brand-body">
          The link opens a secure confirmation page. Once confirmed, you can
          sign in and visit your account.
        </p>
        <p className="mt-3 text-sm leading-6 text-brand-body">
          Cannot find the email? Please also check your Spam or Junk folder.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="/login"
            className="inline-flex h-11 items-center justify-center rounded-full bg-brand-navy px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            Go to login
          </Link>
          <Link
            href="/courses"
            className="inline-flex h-11 items-center justify-center rounded-full border border-brand-line px-5 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            Browse courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold tracking-[-0.02em] text-brand-navy">
            Join SpeakUp
          </h2>
          <p className="mt-1.5 text-sm leading-6 text-brand-body">
            It takes less than a minute. No card required.
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-brand-teal-soft px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-brand-teal-deep">
          Free
        </span>
      </div>

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
          id={FIELD_IDS.fullName}
          name="fullName"
          label="Full name"
          type="text"
          autoComplete="name"
          placeholder="Alex Morgan"
          defaultValue={state.values?.fullName}
          error={errors.fullName}
          disabled={disabled}
          required
        />

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
          autoComplete="new-password"
          hint="At least 8 characters."
          error={errors.password}
          disabled={disabled}
          required
        />

        <FormField
          id={FIELD_IDS.confirmPassword}
          name="confirmPassword"
          label="Confirm password"
          type="password"
          autoComplete="new-password"
          error={errors.confirmPassword}
          disabled={disabled}
          required
        />

        <SubmitButton disabled={disabled} pendingLabel="Creating account…">
          Create account
        </SubmitButton>
      </form>

      <p className="mt-5 text-center text-sm text-brand-body">
        Already have an account?{" "}
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
