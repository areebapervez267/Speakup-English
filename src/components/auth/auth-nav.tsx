"use client";

import Link from "next/link";
import {
  ChevronDown,
  LayoutDashboard,
  LockKeyhole,
  UserRound,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { SignOutForm } from "@/components/auth/sign-out-form";
import { useAuthSession } from "@/components/auth/use-auth-session";
import { buttonVariants } from "@/components/ui/button";
import { getDisplayName, getInitials } from "@/lib/auth/user";
import { cn } from "@/lib/utils";

export function AuthNav({ configured }: { configured: boolean }) {
  const { user, ready } = useAuthSession(configured);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (!ready || !user) {
    return (
      <div className="hidden items-center gap-1 lg:flex">
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "ghost", size: "lg" }),
            "h-10 rounded-full px-4 text-sm font-semibold text-brand-navy hover:bg-brand-mist",
          )}
        >
          Log in
        </Link>
        <Link
          href="/signup"
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-10 rounded-full bg-brand-teal px-4 text-sm font-semibold text-white shadow-sm hover:bg-brand-teal-deep",
          )}
        >
          Sign up
        </Link>
      </div>
    );
  }

  const displayName = getDisplayName(user);

  return (
    <div className="relative hidden lg:block" ref={menuRef}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="account-menu"
        aria-label={`Account menu for ${displayName}`}
        className="flex h-10 items-center gap-2 rounded-full border border-brand-line bg-white pl-1 pr-2.5 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-teal/40 hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
      >
        <span className="grid size-8 place-items-center rounded-full bg-brand-navy text-[0.68rem] font-bold text-white">
          {getInitials(displayName)}
        </span>
        <span className="hidden max-w-28 truncate xl:inline">{displayName}</span>
        <ChevronDown
          className={cn(
            "size-4 text-brand-body transition-transform duration-200",
            open && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>

      {open ? (
        <div
          id="account-menu"
          className="absolute right-0 top-[calc(100%+0.55rem)] z-50 w-64 overflow-hidden rounded-2xl border border-brand-line bg-white p-1.5 shadow-lift"
        >
          <div className="px-3 py-2.5">
            <p className="truncate text-sm font-semibold text-brand-navy">
              {displayName}
            </p>
            <p className="mt-0.5 truncate text-xs text-brand-body">
              {user.email}
            </p>
          </div>

          <div className="my-1 h-px bg-brand-line" />

          <Link
            href="/premium"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
          >
            <LockKeyhole
              className="size-4 text-brand-teal-deep"
              aria-hidden="true"
            />
            Premium membership
          </Link>

          <Link
            href="/dashboard"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
          >
            <LayoutDashboard
              className="size-4 text-brand-teal-deep"
              aria-hidden="true"
            />
            Dashboard
          </Link>

          <Link
            href="/account"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
          >
            <UserRound className="size-4 text-brand-teal-deep" aria-hidden="true" />
            Your account
          </Link>

          <div className="mt-1 border-t border-brand-line pt-1">
            <SignOutForm variant="menu" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
