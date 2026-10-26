"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { Award, LoaderCircle, ShieldAlert } from "lucide-react";
import { useRouter } from "next/navigation";

import { issueCertificateAction } from "@/lib/certificates/actions";
import {
  initialCertificateActionState,
  type CertificateActionState,
} from "@/lib/certificates/types";
import { cn } from "@/lib/utils";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      aria-disabled={pending}
      className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full bg-brand-navy px-3.5 text-xs font-semibold text-white transition-colors hover:bg-brand-navy-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? (
        <LoaderCircle className="size-3.5 animate-spin" aria-hidden="true" />
      ) : (
        <Award className="size-3.5" aria-hidden="true" />
      )}
      {pending ? "Issuing…" : "Issue certificate"}
    </button>
  );
}

function Feedback({ state }: { state: CertificateActionState }) {
  if (state.status === "idle") {
    return null;
  }

  const success = state.status === "success";
  const forbidden = state.status === "forbidden";

  return (
    <p
      role={success ? "status" : "alert"}
      className={cn(
        "mt-2 flex items-start gap-1.5 text-xs font-semibold leading-5",
        success
          ? "text-brand-teal-deep"
          : forbidden
            ? "text-amber-800"
            : "text-red-700",
      )}
    >
      {!success ? (
        <ShieldAlert className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
      ) : null}
      {state.message ?? "Something went wrong."}
    </p>
  );
}

export function CertificateIssueForm({ courseSlug }: { courseSlug: string }) {
  const [state, formAction] = useActionState(
    issueCertificateAction,
    initialCertificateActionState,
  );
  const router = useRouter();
  const refreshed = useRef(false);

  useEffect(() => {
    if (state.status === "success" && !refreshed.current) {
      refreshed.current = true;
      router.refresh();
    }
  }, [state.status, router]);

  return (
    <form action={formAction} className="mt-3">
      <input type="hidden" name="courseSlug" value={courseSlug} />
      <SubmitButton />
      <Feedback state={state} />
    </form>
  );
}
