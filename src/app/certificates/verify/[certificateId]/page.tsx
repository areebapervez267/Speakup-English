import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  CalendarDays,
  SearchX,
  ShieldX,
  TriangleAlert,
} from "lucide-react";

import { brand } from "@/config/brand";
import { formatCertificateDate, isCertificateId } from "@/lib/certificates/format";
import { verifyPublicCertificate } from "@/lib/certificates/queries";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type VerifyPageProps = {
  params: Promise<{ certificateId: string }>;
};

export const instant = false;

export const metadata: Metadata = {
  title: "Verify a certificate",
  description:
    "Check whether a SpeakUp English course certificate is valid, revoked or not found.",
  robots: { index: false, follow: false },
};

export default async function VerifyCertificatePage({
  params,
}: VerifyPageProps) {
  const { certificateId } = await params;

  return (
    <section className="relative overflow-hidden border-b border-brand-line/70 bg-brand-mist">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-faint opacity-55 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
      />
      <div className="site-container relative max-w-3xl py-10 sm:py-14">
        <p className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-white px-3 py-1.5 text-[0.64rem] font-bold uppercase tracking-[0.17em] text-brand-navy shadow-sm">
          <span className="size-1.5 rounded-full bg-brand-teal" />
          Public verification
        </p>
        <h1 className="mt-5 text-balance font-display text-[2.2rem] font-medium leading-[1.05] tracking-[-0.03em] text-brand-navy sm:text-4xl">
          Certificate verification
        </h1>
        <p className="mt-3 text-sm leading-6 text-brand-body">
          This page checks a certificate issued by {brand.name}. It shows only
          the name printed on the certificate, the course and the relevant
          dates. Email addresses and account details are never published here.
        </p>

        <div className="mt-7">
          <VerificationResult certificateId={certificateId} />
        </div>

        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full text-xs font-semibold text-brand-body transition-colors hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          Back to {brand.name}
        </Link>
      </div>
    </section>
  );
}

async function VerificationResult({
  certificateId,
}: {
  certificateId: string;
}) {
  if (!isCertificateId(certificateId)) {
    return <NotFoundState />;
  }

  if (!isSupabaseConfigured) {
    return (
      <StatePanel
        tone="warning"
        icon={TriangleAlert}
        title="Verification is not connected yet"
        description="The certificate database is not configured in this environment. An administrator must add the Supabase project settings before certificates can be checked."
      />
    );
  }

  const supabase = await createSupabaseServerClient().catch(() => null);

  if (!supabase) {
    return (
      <StatePanel
        tone="warning"
        icon={TriangleAlert}
        title="Verification is unavailable"
        description="We couldn't connect to the certificate service. Try again in a moment."
      />
    );
  }

  const result = await verifyPublicCertificate(supabase, certificateId);

  if (result.status === "unavailable") {
    return (
      <StatePanel
        tone="warning"
        icon={TriangleAlert}
        title="Verification is not installed yet"
        description={result.message}
      />
    );
  }

  if (result.status === "error") {
    return (
      <StatePanel
        tone="warning"
        icon={TriangleAlert}
        title="We couldn't check that certificate"
        description={result.message}
      />
    );
  }

  const certificate = result.data;

  if (certificate.status === "not_found") {
    return <NotFoundState />;
  }

  const completed = formatCertificateDate(certificate.completedAt);
  const issued = formatCertificateDate(certificate.issuedAt);
  const revoked = formatCertificateDate(certificate.revokedAt);
  const valid = certificate.status === "valid";

  return (
    <div
      className={`overflow-hidden rounded-3xl border bg-white shadow-sm ${
        valid ? "border-brand-teal/30" : "border-red-200"
      }`}
    >
      <div
        className={`flex items-start gap-3 px-5 py-5 sm:px-6 ${
          valid ? "bg-brand-teal-soft" : "bg-red-50"
        }`}
      >
        <span
          className={`grid size-11 shrink-0 place-items-center rounded-2xl ${
            valid
              ? "bg-white text-brand-teal-deep"
              : "bg-white text-red-700"
          }`}
        >
          {valid ? (
            <BadgeCheck className="size-6" aria-hidden="true" />
          ) : (
            <ShieldX className="size-6" aria-hidden="true" />
          )}
        </span>
        <div>
          <p
            className={`text-[0.62rem] font-bold uppercase tracking-[0.16em] ${
              valid ? "text-brand-teal-deep" : "text-red-700"
            }`}
          >
            {valid ? "Valid certificate" : "Revoked certificate"}
          </p>
          <h2 className="mt-1 text-lg font-bold leading-snug text-brand-navy">
            {valid
              ? "This certificate was issued by SpeakUp English."
              : "This certificate is no longer valid."}
          </h2>
          {!valid && revoked ? (
            <p className="mt-1 text-sm text-red-800">Revoked on {revoked}.</p>
          ) : null}
        </div>
      </div>

      <dl className="grid gap-5 px-5 py-6 sm:grid-cols-2 sm:px-6">
        <div className="sm:col-span-2">
          <dt className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-brand-body">
            Awarded to
          </dt>
          <dd className="mt-1 break-words font-display text-2xl font-medium text-brand-navy">
            {certificate.studentName ?? "Name not available"}
          </dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-brand-body">
            Course
          </dt>
          <dd className="mt-1 text-base font-semibold text-brand-navy">
            {certificate.courseTitle ?? "Course not available"}
          </dd>
        </div>
        <div>
          <dt className="flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-brand-body">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            Completed
          </dt>
          <dd className="mt-1 text-sm font-semibold text-brand-navy">
            {completed ?? "Not recorded"}
          </dd>
        </div>
        <div>
          <dt className="flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-brand-body">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            Issued
          </dt>
          <dd className="mt-1 text-sm font-semibold text-brand-navy">
            {issued ?? "Not recorded"}
          </dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-brand-body">
            Certificate ID
          </dt>
          <dd className="mt-1 break-all font-mono text-xs leading-5 text-brand-navy">
            {certificateId}
          </dd>
        </div>
      </dl>

      <p className="border-t border-brand-line bg-brand-mist/50 px-5 py-3 text-[0.68rem] leading-5 text-brand-body sm:px-6">
        {brand.name} certificates recognise completion of our own online
        courses. They are not accredited qualifications or official CEFR
        certificates.
      </p>
    </div>
  );
}

function NotFoundState() {
  return (
    <StatePanel
      tone="neutral"
      icon={SearchX}
      title="Certificate not found"
      description="No certificate matches this verification link. Check that the full link was copied correctly. If it still fails, the certificate may never have been issued."
    />
  );
}

function StatePanel({
  tone,
  icon: Icon,
  title,
  description,
}: {
  tone: "warning" | "neutral";
  icon: typeof TriangleAlert;
  title: string;
  description: string;
}) {
  return (
    <div
      role="status"
      className={`flex items-start gap-3 rounded-3xl border p-5 text-sm leading-6 shadow-sm sm:p-6 ${
        tone === "warning"
          ? "border-amber-200 bg-amber-50 text-amber-900"
          : "border-brand-line bg-white text-brand-body"
      }`}
    >
      <Icon className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
      <div>
        <h2 className="font-semibold text-brand-navy">{title}</h2>
        <p className="mt-1">{description}</p>
      </div>
    </div>
  );
}
