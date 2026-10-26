"use client";

import { Printer } from "lucide-react";

export function CertificatePrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-brand-navy px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 print:hidden"
    >
      <Printer className="size-4" aria-hidden="true" />
      Print or save as PDF
    </button>
  );
}
