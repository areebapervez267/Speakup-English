import type { ReactNode } from "react";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo";

export function ProsePage({
  path,
  navName,
  eyebrow,
  title,
  intro,
  updated,
  children,
}: {
  path: string;
  navName: string;
  eyebrow: string;
  title: string;
  intro: ReactNode;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <div className="site-container py-16 lg:py-20">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: navName, path },
        ])}
      />

      <p className="text-[0.62rem] font-bold uppercase tracking-[0.17em] text-brand-teal-deep">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-balance font-display text-3xl font-medium leading-[1.08] tracking-[-0.03em] text-brand-navy sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h1>
      <div className="mt-5 max-w-2xl text-pretty text-[0.95rem] leading-7 text-brand-body">
        {intro}
      </div>
      {updated && (
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-body/80">
          Last updated: {updated}
        </p>
      )}

      <div className="mt-10 max-w-3xl space-y-9">{children}</div>

      <p className="mt-12 border-t border-brand-line pt-6 text-sm text-brand-body">
        Need help right away?{" "}
        <Link
          href="/contact"
          className="font-semibold text-brand-teal-deep underline-offset-4 hover:underline"
        >
          Contact us
        </Link>{" "}
        or start with the{" "}
        <Link
          href="/level-test"
          className="font-semibold text-brand-teal-deep underline-offset-4 hover:underline"
        >
          free English level test
        </Link>
        .
      </p>
    </div>
  );
}

export function ProseSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id}>
      <h2
        id={id}
        className="text-balance font-display text-xl font-medium tracking-[-0.02em] text-brand-navy sm:text-2xl"
      >
        {title}
      </h2>
      <div className="mt-3 space-y-3.5 text-[0.95rem] leading-7 text-brand-body [&_a]:font-semibold [&_a]:text-brand-teal-deep [&_a]:underline-offset-4 [&_a:hover]:underline [&_li]:leading-7 [&_strong]:text-brand-ink">
        {children}
      </div>
    </section>
  );
}
