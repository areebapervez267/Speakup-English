import type { Metadata } from "next";
import { Award, ShieldCheck, ShieldX, TriangleAlert } from "lucide-react";

import { AdminAccessPanel } from "@/components/admin/admin-access-panel";
import { AdminActionForm } from "@/components/admin/admin-action-form";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { AdminStatusBadge } from "@/components/admin/admin-status-badge";
import {
  adminCardClass,
  adminInputClass,
  adminMonoClass,
} from "@/components/admin/styles";
import { revokeCertificateAction } from "@/lib/admin/certificate-actions";
import { requireAdminPage } from "@/lib/admin/guard";
import { formatCertificateDate } from "@/lib/certificates/format";
import { fetchAdminCertificates } from "@/lib/certificates/queries";
import type { AdminCertificateRow } from "@/lib/certificates/types";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Certificates",
  description: "Review issued course certificates and revoke them with a recorded reason.",
  robots: { index: false, follow: false },
};

export default async function AdminCertificatesPage() {
  const access = await requireAdminPage("/admin/certificates");

  if (access.status !== "granted") {
    return (
      <div className="mt-8">
        <AdminAccessPanel access={access} />
      </div>
    );
  }

  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    return (
      <div className="mt-8">
        <AdminAccessPanel
          access={{
            status: "unconfigured",
            issue: "supabase",
            message:
              "Supabase is not connected. Add your project URL and publishable key to .env.local, then restart the app.",
          }}
        />
      </div>
    );
  }

  const result = await fetchAdminCertificates(supabase);
  const rows = result.status === "ok" ? result.data : [];
  const validCount = rows.filter((row) => !row.revokedAt).length;
  const revokedCount = rows.length - validCount;

  return (
    <>
      <AdminPageHeader
        eyebrow="Student records"
        title="Certificates"
        description="Every certificate is issued by a database function after it re-checks lesson completion, quiz scores and Premium entitlement. Review issued records here and revoke any certificate that should no longer verify."
        backLink={{ href: "/admin", label: "Back to overview" }}
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <StatCard icon={Award} label="Total issued" value={rows.length} />
        <StatCard icon={ShieldCheck} label="Currently valid" value={validCount} />
        <StatCard icon={ShieldX} label="Revoked" value={revokedCount} />
      </div>

      <section aria-labelledby="certificate-records-heading" className={`mt-8 ${adminCardClass}`}>
        <div className="border-b border-brand-line px-5 py-4">
          <h2
            id="certificate-records-heading"
            className="text-lg font-bold text-brand-navy"
          >
            Certificate records
          </h2>
          <p className="mt-0.5 text-xs leading-5 text-brand-body">
            Newest first, up to 500 records. Revocation requires a written
            justification and is written to the administration audit log.
          </p>
        </div>

        {result.status === "unavailable" || result.status === "error" ? (
          <div className="px-5 py-6">
            <p
              role="alert"
              className="flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"
            >
              <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {result.message}
            </p>
          </div>
        ) : rows.length === 0 ? (
          <div className="px-5 py-10 text-center">
            <p className="text-sm font-semibold text-brand-navy">
              No certificates issued yet
            </p>
            <p className="mx-auto mt-1 max-w-md text-xs leading-5 text-brand-body">
              Students can issue a certificate from their dashboard once they
              complete every required lesson and meet the configured quiz
              minimum.
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-brand-line">
            {rows.map((row) => (
              <CertificateRow key={row.id} row={row} />
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Award;
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-2xl border border-brand-line bg-white p-5 shadow-sm">
      <p className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-brand-body">
        <Icon className="size-3.5 text-brand-teal-deep" aria-hidden="true" />
        {label}
      </p>
      <p className="mt-2 font-display text-3xl font-medium text-brand-navy">
        {value}
      </p>
    </div>
  );
}

function CertificateRow({ row }: { row: AdminCertificateRow }) {
  const issued = formatCertificateDate(row.issuedAt);
  const completed = formatCertificateDate(row.completedAt);
  const revoked = formatCertificateDate(row.revokedAt);
  const active = !row.revokedAt;

  return (
    <li className="px-5 py-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="break-words text-sm font-semibold text-brand-navy">
            {row.studentName}
          </p>
          <p className="mt-0.5 break-all text-xs text-brand-body">
            {row.studentEmail ?? "Email unavailable"}
          </p>
          <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
            <AdminStatusBadge tone={active ? "published" : "warning"}>
              {active ? "Valid" : "Revoked"}
            </AdminStatusBadge>
            <AdminStatusBadge tone="neutral">{row.courseTitle}</AdminStatusBadge>
          </div>
        </div>

        {active ? (
          <AdminActionForm
            action={revokeCertificateAction}
            hiddenFields={{ certificateId: row.id }}
            submitLabel="Revoke"
            pendingLabel="Revoking…"
            submitVariant="outline"
            submitSize="sm"
            buttonClassName="rounded-full px-3"
            confirmMessage={`Revoke the certificate for ${row.studentName} (${row.courseTitle})? It will no longer verify as valid.`}
            feedback="after"
            showFieldErrors={false}
          >
            <input
              name="reason"
              type="text"
              required
              minLength={5}
              maxLength={500}
              placeholder="Reason for revocation (required)"
              aria-label="Revocation reason"
              className={`${adminInputClass} h-9 text-xs`}
            />
          </AdminActionForm>
        ) : null}
      </div>

      <dl className="mt-3 grid gap-x-6 gap-y-1 text-xs leading-5 text-brand-body sm:grid-cols-2">
        {completed ? (
          <div className="flex gap-1.5">
            <dt className="font-semibold text-brand-navy">Completed:</dt>
            <dd>{completed}</dd>
          </div>
        ) : null}
        {issued ? (
          <div className="flex gap-1.5">
            <dt className="font-semibold text-brand-navy">Issued:</dt>
            <dd>{issued}</dd>
          </div>
        ) : null}
        {revoked ? (
          <div className="flex gap-1.5">
            <dt className="font-semibold text-brand-navy">Revoked:</dt>
            <dd>{revoked}</dd>
          </div>
        ) : null}
        <div className="flex gap-1.5 sm:col-span-2">
          <dt className="font-semibold text-brand-navy">Certificate ID:</dt>
          <dd className={`break-all ${adminMonoClass}`}>{row.id}</dd>
        </div>
      </dl>

      {row.revocationReason ? (
        <p className="mt-2 rounded-lg bg-red-50 px-3 py-2 text-xs leading-5 text-red-800">
          <span className="font-semibold">Revocation reason:</span>{" "}
          {row.revocationReason}
          {row.revokedByEmail ? ` · by ${row.revokedByEmail}` : ""}
        </p>
      ) : null}
    </li>
  );
}
