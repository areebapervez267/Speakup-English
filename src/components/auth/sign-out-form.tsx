"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";

import { AUTH_STATE_EVENT } from "@/components/auth/use-auth-session";
import { signOutAction } from "@/lib/auth/actions";
import type { SignOutState } from "@/lib/auth/types";
import { cn } from "@/lib/utils";

type SignOutFormProps = {
  variant?: "menu" | "button" | "mobile" | "dashboard";
};

export function SignOutForm({ variant = "button" }: SignOutFormProps) {
  const router = useRouter();
  const [state, formAction, pending] = useActionState<SignOutState, FormData>(
    signOutAction,
    "idle",
  );

  useEffect(() => {
    if (state === "success") {
      window.dispatchEvent(new Event(AUTH_STATE_EVENT));
      router.replace("/");
      router.refresh();
    }
  }, [state, router]);

  return (
    <form action={formAction}>
      <button
        type="submit"
        aria-busy={pending}
        disabled={pending}
        className={cn(
          "inline-flex items-center justify-center gap-2 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60",
          variant === "menu" &&
            "w-full rounded-xl px-3 py-2 text-left text-red-700 hover:bg-red-50",
          variant === "button" &&
            "h-10 rounded-full border border-brand-line bg-white px-4 text-brand-navy hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2",
          variant === "mobile" &&
            "h-11 w-full rounded-full border border-brand-line bg-white px-4 text-brand-navy hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2",
          variant === "dashboard" &&
            "h-10 rounded-full border border-white/20 bg-white/5 px-4 text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy",
        )}
      >
        <LogOut className="size-4" aria-hidden="true" />
        {pending ? "Signing out…" : "Sign out"}
      </button>
    </form>
  );
}
