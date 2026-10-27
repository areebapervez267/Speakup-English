import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  LockKeyhole,
  TriangleAlert,
} from "lucide-react";

import { CertificateIssueForm } from "@/components/certificates/certificate-issue-form";
import { courses } from "@/data/courses";
import { getAuthoredCourseSlugs } from "@/data/lessons";
import {
  certificateEligibilityLabel,
  certificateProgressLabel,
  formatCertificateDate,
} from "@/lib/certificates/format";
import type {
  CertificateOverview,
  CertificateOverviewRow,
} from "@/lib/certificates/types";
import { cn } from "@/lib/utils";

const authoredCount = getAuthoredCourseSlugs().length;
const outlineOnlyCount = Math.max(courses.length - authoredCount, 0);

function badgeTone(row: CertificateOverviewRow) {
  if (row.certificate?.revokedAt) {
    return "border-red-200 bg-red-50 text-red-700";
  }

  if (row.certificate) {
    return "border-brand-teal/30 bg-brand-teal-soft text-brand-teal-deep";
  }

  if (row.eligible) {
    return "border-brand-navy/20 bg-brand-mist text-brand-navy";
  }

  return "border-brand-line bg-white text-brand-body";
}

export function CertificatesPanel({
  overview,
}: {
  overview: CertificateOverview;
}) {
  return (
    <section
      aria-labelledby="certificates-heading"
      className="rounded-3xl border border-brand-line bg-white p-5 shadow-sm sm:p-6"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-brand-navy text-white">
            <Award className="size-5" aria-hidden="true" />
          </span>
          <div>
            <h2
              id="certificates-heading"
              className="text-lg font-bold tracking-[-0.01em] text-brand-navy"
            >
              Certificates
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-brand-body">
              Certificates are checked against your saved lesson completions and
              best quiz scores in Supabase. Finish every lesson in a complete
              course, then issue your certificate here.
            </p>
          </div>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-brand-line bg-brand-mist px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-brand-navy">
          <BookOpenCheck className="size-3.5 text-brand-teal-deep" aria-hidden="true" />
          {authoredCount} eligible courses
        </span>
      </div>

      {overview.status === "unavailable" ? (
        <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900">
          <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <p>{overview.message}</p>
        </div>
      ) : overview.status === "error" ? (
        <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-800">
          <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <p>{overview.message}</p>
        </div>
      ) : overview.rows.length === 0 ? (
        <p className="mt-5 rounded-xl bg-brand-mist/70 px-4 py-3 text-sm leading-6 text-brand-body">
          Certificates are not enabled yet. Check back later.
        </p>
      ) : (
        <ul className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {overview.rows.map((row) => (
            <CertificateCard key={row.courseSlug} row={row} />
          ))}
        </ul>
      )}

      <p className="mt-5 flex items-start gap-2 border-t border-brand-line pt-4 text-xs leading-5 text-brand-body">
        <LockKeyhole
          className="mt-0.5 size-3.5 shrink-0 text-brand-teal-deep"
          aria-hidden="true"
        />
        Only the {authoredCount} complete A1 courses can award certificates.{" "}
        {outlineOnlyCount} outline-only courses are not certificate-eligible
        because their lessons are not built yet.
      </p>
    </section>
  );
}

function CertificateCard({ row }: { row: CertificateOverviewRow }) {
  const certificate = row.certificate;
  const issued = certificate ? formatCertificateDate(certificate.issuedAt) : null;
  const completed = certificate
    ? formatCertificateDate(certificate.completedAt)
    : null;
  const progressPercent =
    row.totalLessons > 0
      ? Math.min(100, Math.round((row.completedLessons / row.totalLessons) * 100))
      : 0;

  return (
    <li className="flex min-w-0 flex-col rounded-2xl border border-brand-line bg-brand-mist/35 p-4">
      <div className="flex items-start justify-between gap-2">
        <h3 className="min-w-0 text-sm font-bold leading-snug text-brand-navy">
          {row.courseTitle}
        </h3>
        <span
          className={cn(
            "shrink-0 rounded-full border px-2.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.1em]",
            badgeTone(row),
          )}
        >
          {certificateEligibilityLabel(row)}
        </span>
      </div>

      {row.premium ? (
        <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-[0.1em] text-amber-800">
          <LockKeyhole className="size-3" aria-hidden="true" />
          Premium course
        </span>
      ) : null}

      <div className="mt-3">
        <div className="flex items-center justify-between gap-2 text-[0.68rem] font-semibold text-brand-body">
          <span>
            {row.completedLessons} / {row.totalLessons} lessons
          </span>
          <span className="text-brand-navy">{progressPercent}%</span>
        </div>
        <div
          role="progressbar"
          aria-label={`${row.courseTitle} certificate progress`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progressPercent}
          className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-brand-line"
        >
          <div
            aria-hidden="true"
            className="h-full rounded-full bg-brand-teal"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="mt-2 text-xs leading-5 text-brand-body">
          {certificateProgressLabel(row)}
        </p>
      </div>

      <div className="mt-auto pt-4">
        {certificate ? (
          <div className="space-y-1.5">
            <Link
              href={`/certificates/${certificate.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-navy transition-colors hover:text-brand-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
            >
              {certificate.revokedAt ? "View revoked certificate" : "View and print"}
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
            {issued ? (
              <p className="flex items-center gap-1.5 text-[0.68rem] text-brand-body">
                <CalendarDays className="size-3" aria-hidden="true" />
                Issued {issued}
                {completed ? ` · Completed ${completed}` : ""}
              </p>
            ) : null}
          </div>
        ) : row.eligible ? (
          <>
            <p className="flex items-center gap-1.5 text-[0.68rem] font-semibold text-brand-teal-deep">
              <CheckCircle2 className="size-3.5" aria-hidden="true" />
              All requirements met
            </p>
            <CertificateIssueForm courseSlug={row.courseSlug} />
          </>
        ) : (
          <Link
            href={
              row.premium && row.completedLessons >= row.totalLessons
                ? "/premium"
                : `/courses/${row.courseSlug}`
            }
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-navy transition-colors hover:text-brand-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            {row.premium && row.completedLessons >= row.totalLessons
              ? "Check Premium access"
              : "Continue this course"}
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        )}
      </div>
    </li>
  );
}
