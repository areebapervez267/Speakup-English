import { CalendarClock, Mail } from "lucide-react";

import {
  adminCardClass,
  adminHelpClass,
  adminMonoClass,
  adminSectionTitleClass,
} from "@/components/admin/styles";
import { manualPayments } from "@/config/manual-payments";
import { formatMembershipDate } from "@/lib/premium/display";
import type { RenewalItem, RenewalReport } from "@/lib/premium/renewals";
import { describeRenewal } from "@/lib/premium/renewals";
import { cn } from "@/lib/utils";

function reminderMailto(item: RenewalItem): string {
  const ends =
    formatMembershipDate(item.currentPeriodEnd) ?? item.currentPeriodEnd;
  const state =
    item.daysLeft < 0
      ? `ended on ${ends}`
      : `renews on ${ends} — ${describeRenewal(item).toLowerCase()}`;

  const subject = `Your SpeakUp English Premium access ${
    item.daysLeft < 0 ? "has ended" : "is due to renew"
  }`;

  const body = [
    "Assalam o Alaikum,",
    "",
    `Your SpeakUp English Premium access ${state}.`,
    "",
    "To continue without a break:",
    `1. Transfer ${manualPayments.priceLabel} to ${manualPayments.bankName}`,
    `   Account title: ${manualPayments.accountTitle}`,
    `   IBAN: ${manualPayments.iban}`,
    `2. Email the receipt or TRN to ${manualPayments.supportEmail} from this address.`,
    "",
    "Your courses, progress and certificates are safe either way — you can open",
    "Premium again later by repeating the same two steps.",
    "",
    "SpeakUp English",
  ].join("\n");

  return `mailto:${item.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

function RenewalRow({
  item,
  tone,
}: {
  item: RenewalItem;
  tone: "due" | "overdue";
}) {
  return (
    <li className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-brand-line px-5 py-3.5 first:border-t-0">
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-brand-navy">
          {item.email}
        </p>
        <p className={cn(adminMonoClass, "mt-0.5")}>
          {formatMembershipDate(item.currentPeriodEnd) ??
            item.currentPeriodEnd ??
            "No end date"}
        </p>
      </div>
      <span
        className={cn(
          "rounded-full px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.1em]",
          tone === "overdue"
            ? "bg-destructive/10 text-destructive"
            : "bg-brand-teal-soft text-brand-teal-deep",
        )}
      >
        {describeRenewal(item)}
      </span>
      <a
        href={reminderMailto(item)}
        className="inline-flex items-center gap-1.5 rounded-full border border-brand-line bg-white px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-brand-teal-deep transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
      >
        <Mail className="size-3" aria-hidden="true" />
        Email reminder
      </a>
    </li>
  );
}

export function RenewalPanel({ report }: { report: RenewalReport }) {
  const flagged = report.dueSoon.length + report.overdue.length;

  if (flagged === 0 && report.healthyCount === 0) {
    return null;
  }

  if (flagged === 0) {
    return (
      <section
        aria-labelledby="renewal-watchlist-heading"
        className={cn(adminCardClass, "px-5 py-4")}
      >
        <p className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-brand-teal-deep">
          <CalendarClock className="size-3.5" aria-hidden="true" />
          Renewal watch-list
        </p>
        <p className={cn(adminSectionTitleClass, "mt-1.5")} id="renewal-watchlist-heading">
          Nothing to chase this week
        </p>
        <p className={cn(adminHelpClass, "mt-1")}>
          {report.healthyCount} active premium member
          {report.healthyCount === 1 ? "" : "s"}{" "}
          {report.healthyCount === 1 ? "is" : "are"} all renewed for more than{" "}
          {report.windowDays} days. This list fills itself as a renewal date
          comes close.
          {report.untrackedCount > 0 &&
            ` (${report.untrackedCount} record${
              report.untrackedCount === 1 ? "" : "s"
            } have no renewal date or email, so they are not tracked.)`}
        </p>
      </section>
    );
  }

  return (
    <section
      aria-labelledby="renewal-watchlist-heading"
      className={cn(adminCardClass, "overflow-hidden")}
    >
      <header className="border-b border-brand-line bg-brand-mist/70 px-5 py-4">
        <p className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-brand-teal-deep">
          <CalendarClock className="size-3.5" aria-hidden="true" />
          Renewal watch-list
        </p>
        <h2 className={cn(adminSectionTitleClass, "mt-1.5")}>
          {report.overdue.length > 0
            ? `${report.overdue.length} access${
                report.overdue.length === 1 ? "" : "es"
              } already lapsed`
            : `${report.dueSoon.length} renewal${
                report.dueSoon.length === 1 ? "" : "s"
              } due within ${report.windowDays} days`}
        </h2>
        <p className={cn(adminHelpClass, "mt-1")}>
          Premium is opened by hand, so a lapse nobody notices is a student
          quietly lost. Email these accounts, then grant the next month from the
          form below.
        </p>
      </header>

      {report.overdue.length > 0 && (
        <div>
          <p className="bg-white px-5 pt-4 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-destructive">
            Needs a renewal now
          </p>
          <ul className="mt-2 px-0 pb-1">
            {report.overdue.map((item) => (
              <RenewalRow key={item.id} item={item} tone="overdue" />
            ))}
          </ul>
        </div>
      )}

      {report.dueSoon.length > 0 && (
        <div>
          <p className="border-t border-brand-line bg-white px-5 pt-4 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-brand-teal-deep">
            Ending soon
          </p>
          <ul className="mt-2 px-0 pb-1">
            {report.dueSoon.map((item) => (
              <RenewalRow key={item.id} item={item} tone="due" />
            ))}
          </ul>
        </div>
      )}

      <p className={cn(adminHelpClass, "border-t border-brand-line px-5 py-3")}>
        {report.healthyCount} member
        {report.healthyCount === 1 ? "" : "s"} renewed beyond{" "}
        {report.windowDays} days
        {report.untrackedCount > 0 &&
          ` · ${report.untrackedCount} record${
            report.untrackedCount === 1 ? "" : "s"
          } without a renewal date or email, not tracked here`}
        .
      </p>
    </section>
  );
}
