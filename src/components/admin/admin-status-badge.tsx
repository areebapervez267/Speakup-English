import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type AdminBadgeTone =
  | "draft"
  | "published"
  | "archived"
  | "warning"
  | "neutral"
  | "teal";

const toneClasses: Record<AdminBadgeTone, string> = {
  draft: "border-amber-200 bg-amber-50 text-amber-800",
  published: "border-brand-teal/30 bg-brand-teal-soft text-brand-teal-deep",
  archived: "border-brand-line bg-brand-mist text-brand-body",
  warning: "border-red-200 bg-red-50 text-red-700",
  neutral: "border-brand-line bg-white text-brand-navy",
  teal: "border-brand-teal/30 bg-white text-brand-teal-deep",
};

export function AdminStatusBadge({
  tone = "neutral",
  children,
  className,
}: {
  tone?: AdminBadgeTone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.1em] whitespace-nowrap",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
