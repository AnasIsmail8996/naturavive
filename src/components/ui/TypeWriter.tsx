"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type TypeWriterProps = {
  text: string;
  className?: string;
  /** ms per character */
  speed?: number;
  /** delay before typing starts (ms) */
  delay?: number;
};

/**
 * Hydration-safe typewriter: SSR + first paint match (empty typed line),
 * invisible full text reserves width/height to avoid CLS.
 * Typing starts only after mount.
 */
export function TypeWriter({
  text,
  className = "",
  speed = 42,
  delay = 280,
}: TypeWriterProps) {
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState("");
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (reduced) {
      setShown(text);
      return;
    }

    setShown("");
    let i = 0;
    let intervalId = 0;

    const startId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) window.clearInterval(intervalId);
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(startId);
      window.clearInterval(intervalId);
    };
  }, [mounted, text, speed, delay, reduced]);

  const done = shown.length >= text.length;
  const showCaret = mounted && !reduced && !done;

  return (
    <span className={`relative max-w-full ${className || "inline-block"}`}>
      {/* Reserve layout so typing does not collapse the line */}
      <span className="invisible whitespace-pre-wrap" aria-hidden>
        {text}
      </span>
      <span
        className="absolute inset-0 whitespace-pre-wrap"
        aria-label={text}
      >
        <span aria-hidden>{shown}</span>
        {showCaret ? <span className="nv-type-caret" aria-hidden /> : null}
      </span>
    </span>
  );
}
