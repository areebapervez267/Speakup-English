import Link from "next/link";

import { brand } from "@/config/brand";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  onDark?: boolean;
  className?: string;
};

function BrandGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M7 4.5h10a3.5 3.5 0 0 1 3.5 3.5v6a3.5 3.5 0 0 1-3.5 3.5h-5.9L6 21v-3.7A3.5 3.5 0 0 1 3.5 14V8A3.5 3.5 0 0 1 7 4.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8.6 14v-2.2M12 14V9.8M15.4 14V7.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BrandMark({ onDark = false, className }: BrandMarkProps) {
  return (
    <Link
      href="/"
      aria-label={`${brand.name} — home`}
      className={cn(
        "group -m-2 flex items-center gap-2.5 rounded-xl p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2",
        onDark && "focus-visible:ring-offset-brand-navy",
        className,
      )}
    >
      <span
        className={cn(
          "relative grid size-10 shrink-0 place-items-center rounded-[0.9rem] shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5",
          onDark ? "bg-white" : "bg-brand-navy",
        )}
      >
        <BrandGlyph
          className={cn("size-6", onDark ? "text-brand-navy" : "text-white")}
        />
        <span className="absolute right-1 top-1 size-1.5 rounded-full bg-brand-teal" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[1.02rem] font-extrabold tracking-[-0.025em]",
            onDark ? "text-white" : "text-brand-navy",
          )}
        >
          {brand.shortName}
          <span
            className={cn(
              "ml-1 font-semibold",
              onDark ? "text-white/60" : "text-brand-body",
            )}
          >
            {brand.wordmarkTail}
          </span>
        </span>
        <span
          className={cn(
            "mt-1 text-[0.56rem] font-semibold uppercase tracking-[0.22em]",
            onDark ? "text-white/45" : "text-brand-body/80",
          )}
        >
          CEFR A1–C2
        </span>
      </span>
    </Link>
  );
}
