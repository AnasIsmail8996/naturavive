/** Lightweight section placeholder to limit CLS while dynamic chunks load */
export function SectionSkeleton({
  className = "min-h-[22rem] sm:min-h-[28rem]",
}: {
  className?: string;
}) {
  return (
    <div
      className={`w-full animate-pulse bg-[var(--nv-paper-soft)] ${className}`}
      aria-hidden
    />
  );
}
