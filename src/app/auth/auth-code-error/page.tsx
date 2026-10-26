import type { Metadata } from "next";
import Link from "next/link";
import { Link2Off } from "lucide-react";

import { AuthShell } from "@/components/auth/auth-shell";

export const metadata: Metadata = {
  title: "Authentication link problem",
  description:
    "The authentication link could not be used. Request a new link or sign in again.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AuthCodeErrorPage() {
  return (
    <AuthShell
      eyebrow="Account security"
      title="That link didn't work"
      description="Authentication links are time-limited and can only be used once. The link may have expired, already been used, or been opened in a different browser."
      points={[
        "Request a fresh password reset link if you were changing your password.",
        "Sign in again if you were confirming an email address.",
        "Contact support if the problem continues.",
      ]}
    >
      <div>
        <span className="grid size-12 place-items-center rounded-full bg-amber-50 text-amber-700">
          <Link2Off className="size-6" aria-hidden="true" />
        </span>
        <h2 className="mt-4 font-display text-3xl text-brand-navy">
          Request a new link
        </h2>
        <p className="mt-3 text-sm leading-6 text-brand-body">
          Start the flow again from this device. If you requested a password
          reset, a new link will replace the old one.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="/forgot-password"
            className="inline-flex h-11 items-center justify-center rounded-full bg-brand-navy px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            Request a password reset
          </Link>
          <Link
            href="/login"
            className="inline-flex h-11 items-center justify-center rounded-full border border-brand-line px-5 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            Back to login
          </Link>
          <Link
            href="/signup"
            className="inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold text-brand-body transition-colors hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            Create a new account
          </Link>
        </div>
      </div>
    </AuthShell>
  );
}
