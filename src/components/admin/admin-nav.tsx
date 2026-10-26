"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Award,
  BookOpen,
  Crown,
  ExternalLink,
  LayoutDashboard,
} from "lucide-react";

import { cn } from "@/lib/utils";

const links = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/courses", label: "Courses", icon: BookOpen },
  { href: "/admin/memberships", label: "Memberships", icon: Crown },
  { href: "/admin/certificates", label: "Certificates", icon: Award },
];

export function AdminNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Admin workspace" className="flex flex-wrap items-center gap-1">
      {links.map((link) => {
        const active =
          link.href === "/admin"
            ? pathname === "/admin"
            : pathname === link.href || pathname.startsWith(`${link.href}/`);
        const Icon = link.icon;

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal",
              active
                ? "bg-white/15 text-white"
                : "text-white/65 hover:bg-white/5 hover:text-white",
            )}
          >
            <Icon className="size-3.5" aria-hidden="true" />
            {link.label}
          </Link>
        );
      })}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white/65 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
      >
        View site
        <ExternalLink className="size-3.5" aria-hidden="true" />
      </Link>
    </nav>
  );
}
