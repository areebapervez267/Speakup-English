"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { markLessonCompleteAction } from "@/lib/progress/actions";

type CompletionState =
  | "idle"
  | "saving"
  | "done"
  | "signed-out"
  | "unavailable"
  | "premium-required"
  | "error";

export function LessonCompletionButton({
  courseSlug,
  lessonSlug,
  returnPath,
}: {
  courseSlug: string;
  lessonSlug: string;
  returnPath: string;
}) {
  const router = useRouter();
  const lock = useRef(false);
  const [state, setState] = useState<CompletionState>("idle");
  const [message, setMessage] = useState<string | null>(null);

  const loginHref = `/login?next=${encodeURIComponent(returnPath)}`;

  async function completeLesson() {
    if (lock.current) {
      return;
    }

    lock.current = true;
    setState("saving");
    setMessage(null);

    try {
      const result = await markLessonCompleteAction({
        courseSlug,
        lessonSlug,
      });

      switch (result.status) {
        case "completed":
          setState("done");
          router.refresh();
          break;
        case "unauthenticated":
          setState("signed-out");
          break;
        case "unconfigured":
          setState("unavailable");
          setMessage(
            "Progress saving isn't available yet. You can keep learning without it.",
          );
          break;
        case "premium-required":
          setState("premium-required");
          setMessage(result.message);
          break;
        case "invalid":
        case "error":
          setState("error");
          setMessage(result.message);
          break;
      }
    } catch {
      setState("error");
      setMessage(
        "We couldn't save your completion. Check your connection and try again.",
      );
    } finally {
      lock.current = false;
    }
  }

  if (state === "done") {
    return (
      <p
        role="status"
        className="mt-3 inline-flex items-center gap-2 rounded-xl bg-brand-teal-soft px-3.5 py-2.5 text-sm font-semibold text-brand-teal-deep"
      >
        <CheckCircle2 className="size-4 shrink-0" aria-hidden="true" />
        Lesson marked complete
      </p>
    );
  }

  if (state === "premium-required") {
    return (
      <div
        role="alert"
        className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-3.5 py-3 text-sm leading-6 text-amber-950"
      >
        {message}{" "}
        <Link
          href="/premium"
          className="font-semibold underline decoration-amber-700/40 underline-offset-4 hover:text-amber-800"
        >
          View Premium plans
        </Link>
      </div>
    );
  }

  if (state === "signed-out") {
    return (
      <div
        role="alert"
        className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-3.5 py-3 text-sm leading-6 text-amber-950"
      >
        Your session has ended.{" "}
        <Link
          href={loginHref}
          className="font-semibold underline decoration-amber-700/40 underline-offset-4 hover:text-amber-800"
        >
          Log in
        </Link>{" "}
        to save your completion.
      </div>
    );
  }

  return (
    <div className="mt-3">
      <Button
        type="button"
        onClick={completeLesson}
        disabled={state === "saving"}
        className="h-10 rounded-full bg-brand-navy px-4 text-sm font-semibold text-white hover:bg-brand-teal-deep"
      >
        {state === "saving" ? (
          <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <CheckCircle2 className="size-4" aria-hidden="true" />
        )}
        {state === "saving"
          ? "Saving…"
          : state === "error" || state === "unavailable"
            ? "Try again"
            : "Mark lesson complete"}
      </Button>

      {state === "error" || state === "unavailable" ? (
        <p role="alert" className="mt-2 text-xs leading-5 text-amber-800">
          {message}
        </p>
      ) : null}
    </div>
  );
}
