"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Menu } from "lucide-react";

import { MobileAuthMenu } from "@/components/auth/mobile-auth-menu";
import { BrandMark } from "@/components/brand-mark";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { brand, primaryNav } from "@/config/brand";
import { cn } from "@/lib/utils";

export function MobileNav({ configured }: { configured: boolean }) {
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open menu"
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon-lg" }),
          "size-11 rounded-full border border-brand-line bg-white text-brand-navy hover:bg-brand-mist lg:hidden",
        )}
      >
        <Menu className="size-5" aria-hidden="true" />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[90vw] max-w-sm gap-0 border-brand-line bg-white p-0"
      >
        <SheetHeader className="border-b border-brand-line px-5 py-5 text-left">
          <SheetTitle className="sr-only">Site menu</SheetTitle>
          <SheetDescription className="sr-only">
            Explore SpeakUp English courses, CEFR levels, our method and pricing.
          </SheetDescription>
          <BrandMark />
        </SheetHeader>

        <nav
          aria-label="Mobile navigation"
          className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4"
        >
          {primaryNav.map((item, index) => (
            <SheetClose key={item.href} asChild>
              <Link
                href={item.href}
                className="group flex items-center justify-between rounded-xl px-3 py-3.5 text-[1.05rem] font-semibold text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
              >
                <span className="flex items-baseline gap-3">
                  <span className="font-display text-xs italic text-brand-teal-deep">
                    0{index + 1}
                  </span>
                  {item.label}
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 text-brand-body transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </SheetClose>
          ))}

          <div className="mt-2 border-t border-brand-line pt-3">
            <MobileAuthMenu configured={configured} />
          </div>
        </nav>

        <div className="border-t border-brand-line bg-brand-mist/60 px-5 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal-deep">
            {brand.tagline}
          </p>
          <SheetClose asChild>
            <Link
              href="/courses"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-3 h-11 w-full rounded-full bg-brand-navy px-5 text-sm font-semibold text-white hover:bg-brand-teal-deep",
              )}
            >
              Browse all courses
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </SheetClose>
          <p className="mt-3 text-center text-xs text-brand-body">
            A1–B2 free · C1–C2 premium
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
