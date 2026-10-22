"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { brandAssets } from "@/config/brand";
import { navLinks } from "@/config/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [headerH, setHeaderH] = useState(72);
  const barRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const measure = () => setHeaderH(el.getBoundingClientRect().height);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    const prevPad = document.body.style.paddingRight;
    const gap = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (gap > 0) document.body.style.paddingRight = `${gap}px`;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPad;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const solid = scrolled || menuOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div
        ref={barRef}
        className={`w-full min-w-0 transition-colors duration-300 ${
          solid
            ? "border-b border-black/5 bg-white/95 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <BrandLogo />

          <nav
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const active = link.href === "/" && pathname === "/";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`cursor-pointer rounded-full px-3.5 py-2 text-sm font-bold tracking-wide text-[var(--nv-ink)] transition hover:bg-[var(--nv-ink)] hover:text-white ${
                    active
                      ? "underline decoration-[var(--nv-leaf)] decoration-2 underline-offset-[10px]"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-1 rounded-2xl bg-white/55 px-2 py-1.5 shadow-sm ring-1 ring-black/5 backdrop-blur-sm md:flex">
              <HeaderIconButton label="Search" href="/#search">
                <BrandIcon
                  src={brandAssets.icons.search}
                  size={20}
                  className="nv-icon-ink"
                />
              </HeaderIconButton>
              <HeaderIconButton label="Account" href="/#account">
                <BrandIcon
                  src={brandAssets.icons.user}
                  size={20}
                  className="nv-icon-ink"
                />
              </HeaderIconButton>
              <HeaderIconButton label="Cart" href="/#cart">
                <span className="relative inline-flex">
                  <BrandIcon
                    src={brandAssets.icons.cart}
                    size={20}
                    className="nv-icon-ink"
                  />
                  <span className="absolute -right-2 -top-1.5 inline-flex size-4 items-center justify-center rounded-full bg-[var(--nv-leaf)] text-[0.6rem] font-bold text-white">
                    0
                  </span>
                </span>
              </HeaderIconButton>
            </div>

            <button
              type="button"
              className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-white/70 ring-1 ring-black/5 backdrop-blur-sm lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls={menuId}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <BrandIcon
                src={brandAssets.icons.menu}
                size={22}
                className="nv-icon-ink"
              />
            </button>
          </div>
        </div>
      </div>

      {mounted && menuOpen
        ? createPortal(
            <div
              id={menuId}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed inset-x-0 z-50 max-w-full overflow-x-hidden overflow-y-auto bg-white/98 shadow-lg backdrop-blur-md lg:hidden"
              style={
                {
                  top: headerH,
                  maxHeight: `calc(100dvh - ${headerH}px)`,
                } as CSSProperties
              }
            >
              <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="cursor-pointer rounded-xl px-4 py-3 text-base font-bold text-[var(--nv-ink)] transition hover:bg-[var(--nv-paper-soft)]"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-3 flex items-center gap-3 border-t border-black/5 px-2 pt-4">
                  <HeaderIconButton label="Search" href="/#search">
                    <BrandIcon
                      src={brandAssets.icons.search}
                      size={22}
                      className="nv-icon-ink"
                    />
                  </HeaderIconButton>
                  <HeaderIconButton label="Account" href="/#account">
                    <BrandIcon
                      src={brandAssets.icons.user}
                      size={22}
                      className="nv-icon-ink"
                    />
                  </HeaderIconButton>
                  <HeaderIconButton label="Cart" href="/#cart">
                    <BrandIcon
                      src={brandAssets.icons.cart}
                      size={22}
                      className="nv-icon-ink"
                    />
                  </HeaderIconButton>
                </div>
              </nav>
            </div>,
            document.body,
          )
        : null}
    </header>
  );
}

function HeaderIconButton({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex size-9 cursor-pointer items-center justify-center rounded-full transition hover:bg-black/5"
    >
      {children}
    </Link>
  );
}
