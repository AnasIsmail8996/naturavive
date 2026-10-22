import { BrandIcon } from "@/components/ui/BrandIcon";
import { brandAssets } from "@/config/brand";

type FeatureGlyphProps = {
  kind: "leaf" | "flask" | "ban" | "sprout";
  className?: string;
};

/** Circular green glyph for Ingredients feature list */
export function FeatureGlyph({ kind, className = "" }: FeatureGlyphProps) {
  return (
    <span
      className={`inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-[var(--nv-leaf)]/35 bg-[var(--nv-leaf)]/5 text-[var(--nv-leaf)] sm:size-12 ${className}`}
      aria-hidden
    >
      {kind === "leaf" ? (
        <BrandIcon
          src={brandAssets.icons.leaf}
          size={22}
          className="nv-icon-leaf"
        />
      ) : null}
      {kind === "flask" ? (
        <BrandIcon
          src={brandAssets.icons.flask}
          size={22}
          className="nv-icon-leaf"
        />
      ) : null}
      {kind === "ban" ? (
        <svg viewBox="0 0 24 24" className="size-5" fill="none">
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M7.2 7.2 16.8 16.8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ) : null}
      {kind === "sprout" ? (
        <svg viewBox="0 0 24 24" className="size-5" fill="none">
          <path
            d="M12 20V11"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M12 12c-2.8-3.2-6.8-3.6-9-2.2 1.2 4.4 5 6.2 9 5.2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 10c2.4-2.8 5.8-3.2 8-2 0 4.2-3.4 6.2-8 5.4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
    </span>
  );
}
