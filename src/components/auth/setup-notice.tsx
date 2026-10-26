import { TriangleAlert } from "lucide-react";

export function SetupNotice() {
  return (
    <div
      role="status"
      className="rounded-2xl border border-amber-300/80 bg-amber-50 p-4 text-sm leading-6 text-amber-950"
    >
      <p className="flex items-center gap-2 font-semibold">
        <TriangleAlert className="size-4 shrink-0" aria-hidden="true" />
        Authentication is not configured
      </p>
      <p className="mt-1.5 text-amber-900">
        Add your Supabase project URL and publishable key to{" "}
        <code className="rounded bg-white/80 px-1.5 py-0.5 font-mono text-[0.8em]">
          .env.local
        </code>
        , then restart the app. See{" "}
        <code className="rounded bg-white/80 px-1.5 py-0.5 font-mono text-[0.8em]">
          docs/authentication-setup.md
        </code>{" "}
        for the complete setup. The forms below stay disabled until a backend is
        connected.
      </p>
    </div>
  );
}
