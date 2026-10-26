import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Database,
  LockKeyhole,
  ShieldAlert,
  TriangleAlert,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import type { AdminAccess } from "@/lib/admin/types";
import { cn } from "@/lib/utils";

export function AdminAccessPanel({ access }: { access: AdminAccess }) {
  if (access.status === "granted") {
    return null;
  }

  if (access.status === "denied") {
    return (
      <section className="mx-auto max-w-2xl rounded-3xl border border-red-200 bg-white p-6 shadow-sm sm:p-8">
        <span className="grid size-12 place-items-center rounded-2xl bg-red-50 text-red-700">
          <LockKeyhole className="size-5" aria-hidden="true" />
        </span>
        <h2 className="mt-5 font-display text-2xl font-medium text-brand-navy">
          Administrator access required
        </h2>
        <p className="mt-2 text-sm leading-6 text-brand-body">
          You are signed in{access.email ? ` as ${access.email}` : ""}, but this
          account is not on the administrator allow-list. Student accounts have
          no access to the admin workspace or its database tables.
        </p>
        <div className="mt-5 rounded-2xl bg-brand-mist p-4 text-sm leading-6 text-brand-body">
          Ask an existing administrator to add your user ID to{" "}
          <code className="rounded bg-white px-1.5 py-0.5 font-mono text-[0.75rem] text-brand-navy">
            public.admin_users
          </code>{" "}
          with SQL, following{" "}
          <span className="font-semibold text-brand-navy">
            docs/admin-database-setup.md
          </span>
          . Changing a display name or other account metadata never grants
          admin access.
        </div>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Link
            href="/dashboard"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-10 rounded-full px-4 text-sm font-semibold",
            )}
          >
            Go to your dashboard
          </Link>
          <Link
            href="/courses"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-10 rounded-full px-4 text-sm font-semibold",
            )}
          >
            Browse courses
          </Link>
        </div>
      </section>
    );
  }

  if (access.status === "signed-out") {
    return (
      <section className="mx-auto max-w-2xl rounded-3xl border border-brand-line bg-white p-6 shadow-sm sm:p-8">
        <span className="grid size-12 place-items-center rounded-2xl bg-brand-teal-soft text-brand-teal-deep">
          <ShieldAlert className="size-5" aria-hidden="true" />
        </span>
        <h2 className="mt-5 font-display text-2xl font-medium text-brand-navy">
          Sign in to continue
        </h2>
        <p className="mt-2 text-sm leading-6 text-brand-body">
          The admin workspace is only available to signed-in administrators.
        </p>
        <Link
          href="/login?next=/admin"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-5 h-10 rounded-full px-4 text-sm font-semibold",
          )}
        >
          Sign in
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </section>
    );
  }

  if (access.status === "unconfigured") {
    const isSchema = access.issue === "admin-schema";

    return (
      <section className="mx-auto max-w-3xl rounded-3xl border border-amber-200 bg-white p-6 shadow-sm sm:p-8">
        <span className="grid size-12 place-items-center rounded-2xl bg-amber-50 text-amber-800">
          {isSchema ? (
            <Database className="size-5" aria-hidden="true" />
          ) : (
            <TriangleAlert className="size-5" aria-hidden="true" />
          )}
        </span>
        <h2 className="mt-5 font-display text-2xl font-medium text-brand-navy">
          {isSchema
            ? "Admin database tables are not installed yet"
            : "Supabase is not connected yet"}
        </h2>
        <p className="mt-2 text-sm leading-6 text-brand-body">{access.message}</p>

        <ol className="mt-5 space-y-3">
          {(isSchema
            ? [
                "Apply the Phase 5 and Phase 7 SQL migrations in the Supabase SQL editor, in filename order.",
                "Add your signed-in account to public.admin_users with the SQL in docs/admin-database-setup.md.",
                "Reload this page. Access is verified on the server on every request.",
              ]
            : [
                "Create a free Supabase project and copy its project URL and publishable key.",
                "Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY to .env.local.",
                "Restart the app, apply the migrations, then reload this page.",
              ]
          ).map((step, index) => (
            <li
              key={step}
              className="flex items-start gap-3 rounded-2xl bg-brand-mist p-4 text-sm leading-6 text-brand-ink"
            >
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-white text-xs font-bold text-brand-teal-deep shadow-sm">
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>

        <p className="mt-5 flex items-start gap-2 rounded-2xl border border-brand-line bg-white p-4 text-xs leading-5 text-brand-body">
          <BookOpen className="mt-0.5 size-4 shrink-0 text-brand-teal-deep" aria-hidden="true" />
          Full setup instructions, migration order and first-admin SQL live in{" "}
          <span className="font-semibold text-brand-navy">
            docs/admin-database-setup.md
          </span>
          .
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-2xl rounded-3xl border border-amber-200 bg-white p-6 shadow-sm sm:p-8">
      <span className="grid size-12 place-items-center rounded-2xl bg-amber-50 text-amber-800">
        <TriangleAlert className="size-5" aria-hidden="true" />
      </span>
      <h2 className="mt-5 font-display text-2xl font-medium text-brand-navy">
        We could not verify administrator access
      </h2>
      <p className="mt-2 text-sm leading-6 text-brand-body">{access.message}</p>
      <p className="mt-4 text-sm leading-6 text-brand-body">
        No administrative data was loaded. Refresh the page to try again.
      </p>
    </section>
  );
}
