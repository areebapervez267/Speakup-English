import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-brand-teal-deep">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-balance font-display text-3xl font-medium leading-[1.08] tracking-[-0.025em] text-brand-navy sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-7 text-brand-body sm:text-[1.05rem]">
          {description}
        </p>
      )}
    </div>
  );
}
