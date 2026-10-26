import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import {
  ArrowLeft,
  BadgeCheck,
  CalendarDays,
  ShieldAlert,
  TriangleAlert,
} from "lucide-react";

import { CertificatePrintButton } from "@/components/certificates/certificate-print-button";
import { brand } from "@/config/brand";
import {
  formatCertificateDate,
  isCertificateId,
} from "@/lib/certificates/format";
import { getCertificateVerificationUrl } from "@/lib/certificates/links";
import { fetchOwnCertificate } from "@/lib/certificates/queries";
import { isMissingSessionError } from "@/lib/progress/errors";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type CertificatePageProps = {
  params: Promise<{ certificateId: string }>;
};

// A certificate belongs to one signed-in student, so it is never prerendered.
export const instant = false;

export const metadata: Metadata = {
  title: "Your certificate",
  description: "View, print or save your SpeakUp English course certificate.",
  robots: { index: false, follow: false },
};

export default async function CertificatePage({
  params,
}: CertificatePageProps) {
  const { certificateId } = await params;

  if (!isCertificateId(certificateId)) {
    notFound();
  }

  await cookies();

  if (!isSupabaseConfigured) {
    return (
      <CertificateShell>
        <Problem
          title="Certificates are not connected yet"
          message="Add your Supabase project URL and publishable key to .env.local, then restart the app."
        />
      </CertificateShell>
    );
  }

  const supabase = await createSupabaseServerClient().catch(() => null);

  if (!supabase) {
    return (
      <CertificateShell>
        <Problem
          title="Certificates are not available"
          message="We couldn't connect to the certificate service. Refresh the page to try again."
        />
      </CertificateShell>
    );
  }

  const auth = await supabase.auth.getUser().catch(() => null);

  if (!auth) {
    return (
      <CertificateShell>
        <Problem
          title="We couldn't verify your session"
          message="The authentication service could not be reached. Check your connection and try again."
        />
      </CertificateShell>
    );
  }

  if (auth.error && !isMissingSessionError(auth.error)) {
    return (
      <CertificateShell>
        <Problem
          title="We couldn't verify your session"
          message="Your session could not be checked right now. Refresh the page to try again."
        />
      </CertificateShell>
    );
  }

  if (!auth.data.user) {
    redirect(
      `/login?next=${encodeURIComponent(`/certificates/${certificateId}`)}`,
    );
  }

  const result = await fetchOwnCertificate(supabase, certificateId);

  if (result.status === "unavailable" || result.status === "error") {
    return (
      <CertificateShell>
        <Problem title="Certificate unavailable" message={result.message} />
      </CertificateShell>
    );
  }

  if (!result.data) {
    notFound();
  }

  const certificate = result.data;
  const verificationUrl = await getCertificateVerificationUrl(certificate.id);
  const issued = formatCertificateDate(certificate.issuedAt);
  const completed = formatCertificateDate(certificate.completedAt);
  const revoked = formatCertificateDate(certificate.revokedAt);
  const isRevoked = Boolean(certificate.revokedAt);

  return (
    <CertificateShell wide>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 rounded-full text-xs font-semibold text-brand-body transition-colors hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          Back to dashboard
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={`/certificates/verify/${certificate.id}`}
            className="inline-flex h-10 items-center justify-center rounded-full border border-brand-line bg-white px-4 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
          >
            Public verification
          </Link>
          {!isRevoked ? <CertificatePrintButton /> : null}
        </div>
      </div>

      {isRevoked ? (
        <div className="mb-5 flex items-start gap-2.5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-800 print:hidden">
          <ShieldAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <p>
            This certificate was revoked{revoked ? ` on ${revoked}` : ""} and is
            no longer valid. Contact SpeakUp English support if you believe this
            is a mistake.
          </p>
        </div>
      ) : null}

      <article
        aria-labelledby="certificate-title"
        className="certificate-print relative mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-brand-line bg-white px-6 py-8 shadow-lift sm:px-10 sm:py-12 print:max-w-none print:rounded-none print:border-0 print:px-0 print:py-0 print:shadow-none"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid-faint opacity-40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-brand-teal/10 blur-3xl"
        />

        <div className="relative border-[3px] border-brand-navy/15 px-5 py-8 sm:px-10 sm:py-12 print:border-brand-navy/25">
          <header className="flex flex-col items-center text-center">
            <span className="grid size-12 place-items-center rounded-2xl bg-brand-navy text-sm font-bold uppercase tracking-[0.08em] text-white">
              SU
            </span>
            <p className="mt-3 font-display text-xl font-semibold tracking-tight text-brand-navy">
              {brand.name}
            </p>
            <p className="mt-0.5 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-brand-teal-deep">
              {brand.tagline}
            </p>
          </header>

          <div className="mt-9 text-center">
            <p className="text-[0.64rem] font-bold uppercase tracking-[0.28em] text-brand-body">
              Certificate of completion
            </p>
            <h1
              id="certificate-title"
              className="mt-4 text-balance font-display text-[2.6rem] font-medium leading-[1.05] tracking-[-0.03em] text-brand-navy sm:text-5xl"
            >
              {certificate.studentName}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-brand-body sm:text-base">
              has successfully completed every required lesson in
            </p>
            <p className="mx-auto mt-3 max-w-2xl font-display text-2xl font-medium leading-snug text-brand-navy sm:text-3xl">
              {certificate.courseTitle}
            </p>
          </div>

          <dl className="mx-auto mt-9 grid max-w-2xl gap-4 border-y border-brand-line py-5 text-center sm:grid-cols-2 sm:text-left">
            <div>
              <dt className="flex items-center justify-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-brand-body sm:justify-start">
                <CalendarDays className="size-3.5" aria-hidden="true" />
                Completed
              </dt>
              <dd className="mt-1 text-sm font-semibold text-brand-navy">
                {completed ?? "Recorded in Supabase"}
              </dd>
            </div>
            <div>
              <dt className="flex items-center justify-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-brand-body sm:justify-start">
                <BadgeCheck className="size-3.5" aria-hidden="true" />
                Issued
              </dt>
              <dd className="mt-1 text-sm font-semibold text-brand-navy">
                {issued ?? "Just now"}
              </dd>
            </div>
          </dl>

          <div className="mx-auto mt-6 max-w-2xl text-center">
            <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-brand-body">
              Certificate ID
            </p>
            <p className="mt-1 break-all font-mono text-[0.72rem] leading-5 text-brand-navy">
              {certificate.id}
            </p>
            {verificationUrl ? (
              <>
                <p className="mt-3 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-brand-body">
                  Verify at
                </p>
                <p className="mt-1 break-all font-mono text-[0.68rem] leading-5 text-brand-teal-deep">
                  {verificationUrl}
                </p>
              </>
            ) : null}
          </div>

          <footer className="mx-auto mt-10 max-w-2xl border-t border-brand-line pt-5 text-center">
            <p className="text-xs font-semibold text-brand-navy">
              Issued by {brand.name}
            </p>
            <p className="mx-auto mt-1 max-w-lg text-[0.66rem] leading-5 text-brand-body">
              This certificate recognises completion of a SpeakUp English
              online course. It is not an accredited qualification or an
              official CEFR certificate.
            </p>
            {isRevoked ? (
              <p className="mt-3 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-red-700">
                Revoked — not valid
              </p>
            ) : null}
          </footer>
        </div>
      </article>
    </CertificateShell>
  );
}

function CertificateShell({
  children,
  wide = false,
}: {
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <section className="relative overflow-hidden border-b border-brand-line/70 bg-brand-mist">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-faint opacity-55 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
      />
      <div
        className={`site-container relative py-10 sm:py-14 print:p-0 ${
          wide ? "max-w-5xl" : ""
        }`}
      >
        {children}
      </div>
    </section>
  );
}

function Problem({ title, message }: { title: string; message: string }) {
  return (
    <div className="mx-auto flex max-w-xl items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
      <TriangleAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
      <div>
        <h1 className="font-semibold">{title}</h1>
        <p className="mt-1">{message}</p>
        <Link
          href="/dashboard"
          className="mt-3 inline-flex items-center gap-1.5 font-semibold underline underline-offset-2"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          Back to dashboard
        </Link>
      </div>
    </div>
  );
}
