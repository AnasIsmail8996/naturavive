"use client";

import {
  useEffect,
  useRef,
  type ComponentProps,
  type ReactNode,
} from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type ButtonProps = ComponentProps<"a"> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  children?: ReactNode;
};

const variants = {
  primary:
    "bg-[var(--nv-primary)] text-white border border-transparent shadow-sm nv-btn-primary",
  outline:
    "bg-white/95 text-[var(--nv-ink)] border border-[var(--nv-ink)]/20 hover:border-[var(--nv-primary)] hover:text-[var(--nv-primary)]",
  ghost:
    "bg-transparent text-white border border-white/40 hover:bg-white/10",
} as const;

const sizes = {
  md: "px-5 py-2.5 text-sm sm:px-6",
  lg: "px-5 py-3 text-sm sm:px-7 sm:py-3.5 sm:text-[0.95rem]",
} as const;

/** Pill CTA with GSAP magnetic hover + icon nudge. */
export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    const icon = el.querySelector("img, svg");
    gsap.set(el, { force3D: true });

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      gsap.to(el, {
        x: x * 0.22,
        y: y * 0.28,
        scale: 1.04,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
      if (icon) {
        gsap.to(icon, {
          x: 3,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    };

    const onLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "elastic.out(1, 0.55)",
        overwrite: "auto",
      });
      if (icon) {
        gsap.to(icon, {
          x: 0,
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      gsap.killTweensOf(el);
      if (icon) gsap.killTweensOf(icon);
      gsap.set(el, { clearProps: "transform" });
    };
  }, [reduced]);

  return (
    <a
      ref={ref}
      className={`nv-btn-animate inline-flex max-w-full cursor-pointer items-center justify-center gap-2 rounded-full text-center font-semibold tracking-wide will-change-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--nv-accent)] ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
