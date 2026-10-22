"use client";

import { BrandIcon } from "@/components/ui/BrandIcon";

type SectionBadgeProps = {
  label: string;
  iconSrc: string;
  /** left = hero / side copy; center = section headers with rule lines */
  align?: "left" | "center";
  className?: string;
};

/**
 * Section eyebrow as a pill badge: icon + label + hover accent.
 * Use for names like "Natural ingredients. Brighter days."
 */
export function SectionBadge({
  label,
  iconSrc,
  align = "left",
  className = "",
}: SectionBadgeProps) {
  const badge = (
    <span
      className={`group inline-flex max-w-full cursor-pointer items-center gap-2 rounded-full border border-[var(--nv-primary)]/15 bg-white/80 px-3.5 py-1.5 shadow-[0_4px_14px_rgba(27,67,50,0.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-[var(--nv-accent)]/45 hover:bg-white hover:shadow-[0_8px_22px_rgba(27,67,50,0.12)] sm:gap-2.5 sm:px-4 sm:py-2 ${className}`}
    >
      <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--nv-paper-soft)] ring-1 ring-[var(--nv-primary)]/10 transition duration-300 group-hover:scale-110 group-hover:bg-[#F6E8D8] group-hover:ring-[var(--nv-accent)]/40 sm:size-7">
        <BrandIcon
          src={iconSrc}
          size={14}
          className="nv-icon-leaf transition duration-300 group-hover:scale-110"
          alt=""
        />
      </span>
      <span className="min-w-0 text-left text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[var(--nv-muted)] transition-colors duration-300 group-hover:text-[var(--nv-primary)] sm:text-[0.7rem] sm:tracking-[0.2em]">
        {label}
      </span>
    </span>
  );

  if (align === "center") {
    return (
      <div className="flex min-w-0 items-center justify-center gap-3 sm:gap-4">
        <span
          className="hidden h-px w-8 shrink-0 bg-[var(--nv-muted)]/30 sm:block sm:w-12"
          aria-hidden
        />
        {badge}
        <span
          className="hidden h-px w-8 shrink-0 bg-[var(--nv-muted)]/30 sm:block sm:w-12"
          aria-hidden
        />
      </div>
    );
  }

  return badge;
}
