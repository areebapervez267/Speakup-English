import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { brand, footerNav } from "@/config/brand";
import { cefrLevels } from "@/data/curriculum";
import { freeCourseCount } from "@/data/courses";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 size-96 bg-dot-light opacity-20 [mask-image:linear-gradient(to_bottom_left,black,transparent_75%)]"
      />

      <div className="site-container relative py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-10">
          <div className="max-w-sm">
            <BrandMark onDark />
            <p className="mt-7 font-display text-2xl leading-snug text-white">
              Learn English.
              <br />
              <span className="italic text-white/70">Build confidence.</span>
            </p>
            <p className="mt-4 text-sm leading-6 text-white/60">
              A structured path through CEFR levels A1 to C2, with all seven
              English skills connected to your level.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/75">
              <span className="size-1.5 rounded-full bg-brand-teal" />
              {freeCourseCount} free courses · A1–B2
            </div>
          </div>

          <FooterColumn title="Explore" links={footerNav.explore} />

          <FooterColumn title="Skills" links={footerNav.skills} />

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              Levels
            </h2>
            <ul className="mt-5 space-y-3">
              {cefrLevels.map((level) => (
                <li key={level.id}>
                  <Link
                    href={`/courses?level=${level.id}`}
                    className="group inline-flex items-center gap-2 rounded-sm text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                  >
                    <span className="font-semibold text-white/90">
                      {level.label}
                    </span>
                    <span className="text-white/45 transition-colors group-hover:text-white/65">
                      {level.name}
                    </span>
                    {level.premium && (
                      <span className="rounded-full border border-white/15 px-1.5 py-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.12em] text-brand-teal">
                        Premium
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {brand.name}. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>CEFR-aligned curriculum</span>
            <span aria-hidden="true" className="text-white/20">
              /
            </span>
            <span>Seven skills, six levels</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
        {title}
      </h2>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="rounded-sm text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
