"use client";

import { Check, Copy, Mail } from "lucide-react";
import { useState } from "react";

import type { ManualPaymentSettings } from "@/config/manual-payments";
import { cn } from "@/lib/utils";

type ManualPaymentPanelProps = {
  settings: ManualPaymentSettings;
};

const steps = [
  "Create a free SpeakUp account and note the email you used.",
  "Transfer the monthly amount to the account below. Put your SpeakUp email in the transfer remarks.",
  "Email a screenshot or the transaction ID to the address below with the subject “Premium”.",
  "An administrator checks the payment and opens C1–C2 on your account, usually within 24 hours.",
];

export function ManualPaymentPanel({ settings }: ManualPaymentPanelProps) {
  const [copied, setCopied] = useState(false);

  async function copyIban() {
    try {
      await navigator.clipboard.writeText(settings.iban);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // The IBAN stays selectable, so a blocked clipboard is not a blocker.
    }
  }

  const mailHref = `mailto:${settings.supportEmail}?subject=${encodeURIComponent(
    "Premium",
  )}`;

  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-4 sm:p-5">
      <p className="text-sm font-semibold text-white">
        How to join with a bank transfer
      </p>
      <p className="mt-1 text-xs leading-5 text-white/55">
        {settings.priceLabel} · {settings.periodMonths} month of the full C1–C2
        library. Card checkout is not used yet, so no card details are ever
        shared.
      </p>

      <ol className="mt-4 space-y-2.5">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-2.5 text-xs leading-5 text-white/80">
            <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand-teal/15 text-[0.62rem] font-bold text-brand-teal">
              {index + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>

      <dl className="mt-4 space-y-2 rounded-xl border border-white/10 bg-brand-navy/40 p-3 text-xs">
        <div className="flex items-start justify-between gap-3">
          <dt className="text-white/45">Bank</dt>
          <dd className="text-right font-semibold text-white">
            {settings.bankName}
          </dd>
        </div>
        <div className="flex items-start justify-between gap-3">
          <dt className="text-white/45">Account title</dt>
          <dd className="text-right font-semibold text-white">
            {settings.accountTitle}
          </dd>
        </div>
        <div className="flex items-start justify-between gap-3">
          <dt className="text-white/45">IBAN</dt>
          <dd className="select-all text-right font-mono font-semibold tracking-tight text-white">
            {settings.iban}
          </dd>
        </div>
      </dl>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={copyIban}
          className={cn(
            "inline-flex h-9 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 text-xs font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal",
            copied && "border-brand-teal/40 text-brand-teal",
          )}
        >
          {copied ? (
            <Check className="size-3.5" aria-hidden="true" />
          ) : (
            <Copy className="size-3.5" aria-hidden="true" />
          )}
          {copied ? "IBAN copied" : "Copy IBAN"}
        </button>
        <a
          href={mailHref}
          className="inline-flex h-9 items-center gap-2 rounded-full bg-brand-teal px-4 text-xs font-semibold text-brand-navy transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <Mail className="size-3.5" aria-hidden="true" />
          Send payment receipt
        </a>
      </div>
    </div>
  );
}
