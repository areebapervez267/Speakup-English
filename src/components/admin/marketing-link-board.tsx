"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { cn } from "@/lib/utils";

type TrackedLink = {
  label: string;
  href: string;
  note: string;
};

/**
 * The exact links to paste into each platform. Copying is the only action here,
 * so it must work on a phone as well as a desktop.
 */
export function MarketingLinkBoard({ links }: { links: TrackedLink[] }) {
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(link: TrackedLink) {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(link.href);
      } else {
        const field = document.createElement("textarea");
        field.value = link.href;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        document.execCommand("copy");
        document.body.removeChild(field);
      }
      setCopied(link.href);
      window.setTimeout(() => setCopied((current) => (current === link.href ? null : current)), 2000);
    } catch {
      setCopied(null);
    }
  }

  return (
    <ul className="divide-y divide-brand-line">
      {links.map((link) => {
        const isCopied = copied === link.href;

        return (
          <li key={link.href} className="px-5 py-3.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold text-brand-navy">
                {link.label}
              </p>
              <button
                type="button"
                onClick={() => copy(link)}
                aria-label={`Copy the ${link.label} link`}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border border-brand-line bg-white px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-brand-teal-deep transition-colors hover:bg-brand-teal-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal",
                  isCopied && "border-brand-teal-deep bg-brand-teal-deep text-white",
                )}
              >
                {isCopied ? (
                  <Check className="size-3.5" aria-hidden="true" />
                ) : (
                  <Copy className="size-3.5" aria-hidden="true" />
                )}
                {isCopied ? "Copied" : "Copy"}
              </button>
            </div>
            <p className="mt-1 break-all font-mono text-[0.72rem] leading-5 text-brand-body">
              {link.href}
            </p>
            <p className="mt-1 text-xs leading-5 text-brand-body/80">
              {link.note}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
