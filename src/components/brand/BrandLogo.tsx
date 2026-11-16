import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/config/brand";
import { siteConfig } from "@/config/site";

type BrandLogoProps = {
  className?: string;
  href?: string;
  /**
   * dark = logo for light surfaces (header / cream)
   * light = logo for dark surfaces (footer / primary green)
   */
  variant?: "dark" | "light";
  /** nav = compact mobile mark + desktop wordmark; footer = footer lockup */
  placement?: "nav" | "footer";
};

export function BrandLogo({
  className = "",
  href = "/",
  variant = "dark",
  placement = "nav",
}: BrandLogoProps) {
  const onDark = variant === "light";
  const { logos } = brandAssets;

  const mobileSrc = onDark ? logos.mobileOnDark : logos.mobileOnLight;
  const desktopSrc =
    placement === "footer"
      ? onDark
        ? logos.footerOnDark
        : logos.footerOnLight
      : onDark
        ? logos.navbarOnDark
        : logos.navbarOnLight;

  return (
    <Link
      href={href}
      className={`inline-flex min-w-0 shrink-0 items-center ${className}`}
      aria-label={siteConfig.name}
    >
      {placement === "nav" ? (
        <>
          {/* Mobile: leaf mark only */}
          <Image
            src={mobileSrc}
            alt={siteConfig.name}
            width={64}
            height={56}
            priority
            className="h-9 w-auto object-contain object-left md:hidden"
            style={{ width: "auto" }}
          />
          {/* Desktop / tablet: full navbar wordmark */}
          <Image
            src={desktopSrc}
            alt={siteConfig.name}
            width={220}
            height={40}
            priority
            className="hidden h-8 w-auto max-w-[11rem] object-contain object-left sm:h-9 sm:max-w-[13rem] md:block lg:max-w-[14rem]"
            style={{ width: "auto" }}
          />
        </>
      ) : (
        <Image
          src={desktopSrc}
          alt={siteConfig.name}
          width={240}
          height={56}
          className="h-10 w-auto max-w-[12rem] object-contain object-left sm:h-11 sm:max-w-[14rem]"
          style={{ width: "auto" }}
        />
      )}
    </Link>
  );
}
