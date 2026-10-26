"use client";

import { ArrowUpRight, LoaderCircle, LockKeyhole } from "lucide-react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { startCheckoutAction } from "@/lib/premium/actions";
import {
  initialCheckoutActionState,
  type CheckoutActionState,
} from "@/lib/premium/types";

function CheckoutSubmitButton({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending || disabled}
      className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-brand-teal px-5 text-sm font-semibold text-brand-navy transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? (
        <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
      ) : (
        <LockKeyhole className="size-4" aria-hidden="true" />
      )}
      {pending ? "Opening secure checkout…" : "Continue to secure checkout"}
      {!pending ? (
        <ArrowUpRight className="size-4" aria-hidden="true" />
      ) : null}
    </button>
  );
}

export function PremiumCheckoutButton({
  disabled = false,
}: {
  disabled?: boolean;
}) {
  const [state, formAction] = useActionState<CheckoutActionState, FormData>(
    startCheckoutAction,
    initialCheckoutActionState,
  );

  return (
    <form action={formAction} className="mt-6">
      <CheckoutSubmitButton disabled={disabled} />

      {state.status !== "idle" ? (
        <p
          role={state.status === "error" ? "alert" : "status"}
          className="mt-3 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs leading-5 text-white/80"
        >
          {state.message}
        </p>
      ) : null}

      <p className="mt-3 text-xs leading-5 text-white/45">
        Payment is completed on the provider&apos;s hosted page. Your card
        details never pass through SpeakUp English.
      </p>
    </form>
  );
}
