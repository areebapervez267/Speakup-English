import type { Metadata } from "next";
import { Info, KeyRound, ShieldCheck, UsersRound } from "lucide-react";

import { AdminAccessPanel } from "@/components/admin/admin-access-panel";
import { AdminActionForm } from "@/components/admin/admin-action-form";
import { AdminField } from "@/components/admin/admin-field";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { AdminStatusBadge } from "@/components/admin/admin-status-badge";
import {
  adminCardClass,
  adminInputClass,
  adminTextareaClass,
} from "@/components/admin/styles";
import {
  grantMembershipAction,
  revokeMembershipAction,
} from "@/lib/admin/membership-actions";
import { requireAdminPage } from "@/lib/admin/guard";
import { fetchAdminMemberships } from "@/lib/admin/queries";
import type { AdminMembershipRow } from "@/lib/admin/types";
import {
  formatMembershipDate,
  MEMBERSHIP_STATUS_LABELS,
} from "@/lib/premium/display";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Premium memberships",
  description: "Review Premium access and grant or revoke complimentary access.",
  robots: { index: false, follow: false },
};

function statusTone(row: AdminMembershipRow) {
  if (row.isActive) {
    return "published" as const;
  }

  if (row.status === "pending" || row.status === "past_due") {
    return "draft" as const;
  }

  return "archived" as const;
}

export default async function AdminMembershipsPage() {
  const access = await requireAdminPage("/admin/memberships");

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

  const memberships = await fetchAdminMemberships(supabase);
  const rows = memberships.status === "ok" ? memberships.data : [];
  const activeCount = rows.filter((row) => row.isActive).length;
  const complimentaryCount = rows.filter(
    (row) => row.isActive && row.source === "admin",
  ).length;

  return (
    <>
      <AdminPageHeader
        eyebrow="Premium access"
        title="Memberships"
        description="Review the membership records stored in Supabase, then grant or revoke complimentary Premium access. Paid access is granted only by verified payment webhooks."
        backLink={{ href: "/admin", label: "Back to overview" }}
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-brand-line bg-white p-5 shadow-sm">
          <p className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-brand-body">
            <UsersRound className="size-3.5 text-brand-teal-deep" aria-hidden="true" />
            Membership records
          </p>
          <p className="mt-2 font-display text-3xl font-medium text-brand-navy">
            {rows.length}
          </p>
        </div>
        <div className="rounded-2xl border border-brand-line bg-white p-5 shadow-sm">
          <p className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-brand-body">
            <ShieldCheck className="size-3.5 text-brand-teal-deep" aria-hidden="true" />
            Active now
          </p>
          <p className="mt-2 font-display text-3xl font-medium text-brand-navy">
            {activeCount}
          </p>
        </div>
        <div className="rounded-2xl border border-brand-line bg-white p-5 shadow-sm">
          <p className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-brand-body">
            <KeyRound className="size-3.5 text-brand-teal-deep" aria-hidden="true" />
            Complimentary active
          </p>
          <p className="mt-2 font-display text-3xl font-medium text-brand-navy">
            {complimentaryCount}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
        <section
          aria-labelledby="membership-list-heading"
          className={adminCardClass}
        >
          <div className="border-b border-brand-line px-5 py-4">
            <h2
              id="membership-list-heading"
              className="text-lg font-bold text-brand-navy"
            >
              Membership records
            </h2>
            <p className="mt-0.5 text-xs leading-5 text-brand-body">
              Newest first, up to 500 records. Access is recalculated from the
              status and end date each time a student opens a Premium lesson.
            </p>
          </div>

          {memberships.status === "error" ? (
            <div className="px-5 py-6">
              <p
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800"
              >
                {memberships.message}
              </p>
            </div>
          ) : rows.length === 0 ? (
            <div className="px-5 py-10 text-center">
              <p className="text-sm font-semibold text-brand-navy">
                No membership records yet
              </p>
              <p className="mx-auto mt-1 max-w-md text-xs leading-5 text-brand-body">
                Paid memberships appear here after a verified provider webhook.
                Complimentary access can be granted with the form on this page.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-brand-line">
              {rows.map((row) => (
                <MembershipRow key={row.id} row={row} />
              ))}
            </ul>
          )}
        </section>

        <aside className={`${adminCardClass} p-5`}>
          <h2 className="text-lg font-bold text-brand-navy">
            Grant complimentary access
          </h2>
          <p className="mt-1 text-xs leading-5 text-brand-body">
            This writes an audited membership record. Use it for support cases,
            review accounts or scholarships — not as a way to bypass payments.
          </p>

          <AdminActionForm
            action={grantMembershipAction}
            submitLabel="Grant Premium access"
            pendingLabel="Granting…"
            feedback="top"
            className="mt-5"
          >
            <AdminField
              label="Student email"
              htmlFor="grant-email"
              help="The email must belong to an existing student account."
            >
              <input
                id="grant-email"
                name="email"
                type="email"
                required
                maxLength={254}
                autoComplete="off"
                placeholder="student@example.com"
                className={adminInputClass}
              />
            </AdminField>

            <AdminField
              label="Access ends (optional)"
              htmlFor="grant-expiry"
              help="Leave empty for access with no end date."
              className="mt-4"
            >
              <input
                id="grant-expiry"
                name="expiresAt"
                type="date"
                className={adminInputClass}
              />
            </AdminField>

            <AdminField
              label="Administrator note"
              htmlFor="grant-note"
              help="Stored in the record and audit log. Never shown publicly."
              className="mt-4"
            >
              <textarea
                id="grant-note"
                name="note"
                rows={3}
                maxLength={500}
                placeholder="Reason for complimentary access"
                className={adminTextareaClass}
              />
            </AdminField>
          </AdminActionForm>

          <p className="mt-4 flex items-start gap-2 rounded-xl bg-brand-mist/70 px-3 py-2.5 text-xs leading-5 text-brand-body">
            <Info className="mt-0.5 size-3.5 shrink-0 text-brand-teal-deep" aria-hidden="true" />
            The database function checks administrator access again and writes
            the audit entry itself, so a forged form cannot bypass it.
          </p>
        </aside>
      </div>
    </>
  );
}

function MembershipRow({ row }: { row: AdminMembershipRow }) {
  const activated = formatMembershipDate(row.activatedAt);
  const periodEnd = formatMembershipDate(row.currentPeriodEnd);
  const updated = formatMembershipDate(row.updatedAt);

  return (
    <li className="px-5 py-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="break-words text-sm font-semibold text-brand-navy">
            {row.email ?? "Unknown student"}
          </p>
          <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
            <AdminStatusBadge tone={statusTone(row)}>
              {MEMBERSHIP_STATUS_LABELS[row.status]}
            </AdminStatusBadge>
            <AdminStatusBadge tone="neutral">
              {row.source === "admin" ? "Complimentary" : "Provider"}
            </AdminStatusBadge>
            {row.provider ? (
              <AdminStatusBadge tone="neutral">{row.provider}</AdminStatusBadge>
            ) : null}
          </div>
        </div>

        {row.isActive ? (
          <AdminActionForm
            action={revokeMembershipAction}
            hiddenFields={{ userId: row.userId }}
            submitLabel="Revoke"
            pendingLabel="Revoking…"
            submitVariant="outline"
            submitSize="sm"
            buttonClassName="rounded-full px-3"
            confirmMessage={`Revoke Premium access for ${row.email ?? "this student"}?`}
            feedback="after"
            showFieldErrors={false}
          >
            <input
              name="note"
              type="text"
              maxLength={500}
              placeholder="Reason (optional)"
              aria-label="Revocation note"
              className={`${adminInputClass} h-9 text-xs`}
            />
          </AdminActionForm>
        ) : null}
      </div>

      <dl className="mt-3 grid gap-x-6 gap-y-1 text-xs leading-5 text-brand-body sm:grid-cols-2">
        {activated ? (
          <div className="flex gap-1.5">
            <dt className="font-semibold text-brand-navy">Activated:</dt>
            <dd>{activated}</dd>
          </div>
        ) : null}
        {periodEnd ? (
          <div className="flex gap-1.5">
            <dt className="font-semibold text-brand-navy">
              {row.isActive ? "Access until:" : "Period end:"}
            </dt>
            <dd>{periodEnd}</dd>
          </div>
        ) : row.isActive && row.source === "admin" ? (
          <div className="flex gap-1.5">
            <dt className="font-semibold text-brand-navy">Access until:</dt>
            <dd>No end date</dd>
          </div>
        ) : null}
        {row.grantedByEmail ? (
          <div className="flex gap-1.5">
            <dt className="font-semibold text-brand-navy">Granted by:</dt>
            <dd>{row.grantedByEmail}</dd>
          </div>
        ) : null}
        {updated ? (
          <div className="flex gap-1.5">
            <dt className="font-semibold text-brand-navy">Updated:</dt>
            <dd>{updated}</dd>
          </div>
        ) : null}
      </dl>

      {row.note ? (
        <p className="mt-2 rounded-lg bg-brand-mist/70 px-3 py-2 text-xs leading-5 text-brand-body">
          <span className="font-semibold text-brand-navy">Note:</span>{" "}
          {row.note}
        </p>
      ) : null}
    </li>
  );
}
