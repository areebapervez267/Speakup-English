import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

export function AdminPageHeader({
  eyebrow = "Admin workspace",
  title,
  description,
  actions,
  backLink,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  actions?: ReactNode;
  backLink?: { href: string; label: string };
}) {
  return (
    <header className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div className="min-w-0 max-w-3xl">
        {backLink ? (
          <Link
            href={backLink.href}
            className="mb-3 inline-flex items-center gap-1.5 rounded-sm text-xs font-semibold text-brand-body transition-colors hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
          >
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            {backLink.label}
          </Link>
        ) : null}
        <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-brand-teal-deep">
          {eyebrow}
        </p>
        <h1 className="mt-2 text-balance font-display text-3xl font-medium leading-tight tracking-[-0.03em] text-brand-navy sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <div className="mt-3 text-pretty text-sm leading-6 text-brand-body sm:text-[0.95rem]">
            {description}
          </div>
        ) : null}
      </div>
      {actions ? (
        <div className="flex shrink-0 flex-wrap items-center gap-2">
          {actions}
        </div>
      ) : null}
    </header>
  );
}
