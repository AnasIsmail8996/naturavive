"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** Fixed scroll-to-top control */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      data-testid="scroll-to-top"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-5 right-4 z-50 inline-flex size-11 cursor-pointer items-center justify-center rounded-full bg-[var(--nv-primary)] text-white shadow-lg ring-2 ring-white/25 transition duration-300 hover:scale-105 hover:bg-[var(--nv-primary-mid)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nv-accent)] sm:bottom-6 sm:right-6 sm:size-12 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="size-5 sm:size-6" aria-hidden />
    </button>
  );
}
