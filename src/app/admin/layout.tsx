import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

import { AdminNav } from "@/components/admin/admin-nav";

// Admin access is verified on the server before anything renders, so navigation may block.
export const instant = false;

export const metadata: Metadata = {
  title: {
    default: "Admin workspace",
    template: "%s | SpeakUp Admin",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-brand-mist/70">
      <div className="border-b border-white/10 bg-brand-navy-deep text-white">
        <div className="site-container flex flex-wrap items-center justify-between gap-3 py-3">
          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 rounded-sm font-display text-sm font-semibold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
            >
              <span className="grid size-7 place-items-center rounded-lg bg-brand-teal text-[0.62rem] font-bold uppercase tracking-[0.08em] text-brand-navy-deep">
                SU
              </span>
              SpeakUp
              <span className="rounded-full border border-white/20 px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-[0.14em] text-white/65">
                Admin
              </span>
            </Link>
            <span className="hidden items-center gap-1 text-[0.62rem] font-semibold text-white/40 sm:inline-flex">
              <ShieldCheck className="size-3.5" aria-hidden="true" />
              Server-verified access
            </span>
          </div>
          <AdminNav />
        </div>
      </div>

      <div className="site-container py-8 sm:py-10 lg:py-12">{children}</div>
    </div>
  );
}
