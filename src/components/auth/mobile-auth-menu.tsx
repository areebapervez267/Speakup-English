"use client";

import Link from "next/link";
import { LayoutDashboard, UserRound } from "lucide-react";

import { SignOutForm } from "@/components/auth/sign-out-form";
import { useAuthSession } from "@/components/auth/use-auth-session";
import { buttonVariants } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { getDisplayName, getInitials } from "@/lib/auth/user";
import { cn } from "@/lib/utils";

export function MobileAuthMenu({ configured }: { configured: boolean }) {
  const { user, ready } = useAuthSession(configured);

  if (!ready || !user) {
    return (
      <div className="rounded-2xl border border-brand-line bg-white p-3">
        <p className="px-1 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-brand-body">
          Student account
        </p>
        <div className="mt-2 grid gap-2">
          <SheetClose asChild>
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 w-full rounded-full border-brand-line bg-white text-sm font-semibold text-brand-navy hover:bg-brand-mist",
              )}
            >
              Log in
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/signup"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 w-full rounded-full bg-brand-navy text-sm font-semibold text-white hover:bg-brand-teal-deep",
              )}
            >
              Create free account
            </Link>
          </SheetClose>
        </div>
      </div>
    );
  }

  const displayName = getDisplayName(user);

  return (
    <div className="rounded-2xl border border-brand-line bg-white p-3">
      <div className="flex items-center gap-3 px-1 py-1">
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-navy text-xs font-bold text-white">
          {getInitials(displayName)}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-brand-navy">
            {displayName}
          </p>
          <p className="truncate text-xs text-brand-body">{user.email}</p>
        </div>
      </div>

      <div className="mt-2 grid gap-2">
        <SheetClose asChild>
          <Link
            href="/dashboard"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 w-full justify-start rounded-full border-brand-line bg-white px-4 text-sm font-semibold text-brand-navy hover:bg-brand-mist",
            )}
          >
            <LayoutDashboard
              className="size-4 text-brand-teal-deep"
              aria-hidden="true"
            />
            Dashboard
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link
            href="/account"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 w-full justify-start rounded-full border-brand-line bg-white px-4 text-sm font-semibold text-brand-navy hover:bg-brand-mist",
            )}
          >
            <UserRound className="size-4 text-brand-teal-deep" aria-hidden="true" />
            Your account
          </Link>
        </SheetClose>
        <SignOutForm variant="mobile" />
      </div>
    </div>
  );
}
