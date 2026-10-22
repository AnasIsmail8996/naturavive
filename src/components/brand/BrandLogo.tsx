import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/config/brand";
import { siteConfig } from "@/config/site";

type BrandLogoProps = {
  className?: string;
  href?: string;
  /** Prefer dark logo on light/hero wash; light for dark footers */
  variant?: "dark" | "light";
};

export function BrandLogo({
  className = "",
  href = "/",
  variant = "dark",
}: BrandLogoProps) {
  const src =
    variant === "light" ? brandAssets.logoLight : brandAssets.logoDark;

  return (
    <Link
      href={href}
      className={`inline-flex min-w-0 shrink-0 items-center ${className}`}
      aria-label={siteConfig.name}
    >
      <Image
        src={src}
        alt={siteConfig.name}
        width={180}
        height={40}
        className="h-8 w-auto max-w-[9.5rem] object-contain object-left sm:h-9 sm:max-w-[11rem]"
        priority
      />
    </Link>
  );
}
