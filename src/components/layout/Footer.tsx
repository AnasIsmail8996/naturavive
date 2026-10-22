import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { brandAssets } from "@/config/brand";
import { siteConfig, navLinks } from "@/config/site";

const socialLinks = [
  {
    label: "Instagram",
    href: siteConfig.social.instagram,
    icon: brandAssets.icons.instagram,
  },
  {
    label: "Facebook",
    href: siteConfig.social.facebook,
    icon: brandAssets.icons.facebook,
  },
  {
    label: "YouTube",
    href: siteConfig.social.youtube,
    icon: brandAssets.icons.youtube,
  },
  {
    label: "Pinterest",
    href: siteConfig.social.pinterest,
    icon: brandAssets.icons.pinterest,
  },
] as const;

export function Footer() {
  return (
    <footer
      id="faq"
      className="relative mt-auto overflow-x-clip bg-[var(--nv-primary)] text-white"
    >
      <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden>
        <Image
          src={brandAssets.footerBackground}
          alt=""
          fill
          sizes="100vw"
          quality={60}
          className="object-cover object-center"
        />
      </div>

      <Image
        src={brandAssets.botanicalLeft}
        alt=""
        width={280}
        height={180}
        className="pointer-events-none absolute bottom-0 left-0 z-[1] w-40 opacity-20 sm:w-52"
        aria-hidden
      />
      <Image
        src={brandAssets.botanicalRight}
        alt=""
        width={280}
        height={180}
        className="pointer-events-none absolute bottom-0 right-0 z-[1] w-40 opacity-20 sm:w-52"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-8">
        <div className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left">
          <BrandLogo variant="light" />
          <p className="mt-2 max-w-xs text-sm text-white/75">
            {siteConfig.tagline}
          </p>
        </div>

        <nav
          className="flex min-w-0 flex-wrap items-center justify-center gap-x-5 gap-y-2 border-white/15 lg:border-x lg:px-8"
          aria-label="Footer"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="cursor-pointer text-sm font-medium text-white/90 transition hover:text-[var(--nv-accent)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
            >
              <BrandIcon
                src={item.icon}
                size={18}
                className="nv-icon-on-dark"
                alt=""
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
