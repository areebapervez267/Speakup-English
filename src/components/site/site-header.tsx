import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { AuthNav } from "@/components/auth/auth-nav";
import { BrandMark } from "@/components/brand-mark";
import { MobileNav } from "@/components/site/mobile-nav";
import { buttonVariants } from "@/components/ui/button";
import { primaryNav } from "@/config/brand";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-line/80 bg-white/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/75">
      <div className="site-container flex h-[4.5rem] items-center justify-between gap-4">
        <BrandMark />

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-brand-body transition-colors hover:bg-brand-mist hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/courses"
            className={cn(
              buttonVariants({ size: "lg" }),
              "hidden h-10 rounded-full bg-brand-navy px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-teal-deep sm:inline-flex",
            )}
          >
            Find your course
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          <AuthNav configured={isSupabaseConfigured} />
          <MobileNav configured={isSupabaseConfigured} />
        </div>
      </div>
    </header>
  );
}
