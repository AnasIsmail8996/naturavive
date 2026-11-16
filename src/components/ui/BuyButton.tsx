"use client";

import { useState } from "react";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { brandAssets } from "@/config/brand";

type BuyButtonProps = {
  productId: string;
  label: string;
  className?: string;
};

export function BuyButton({ productId, label, className = "" }: BuyButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function startCheckout() {
    if (loading) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      const data = (await res.json()) as { url?: string; error?: string };

      if (!res.ok || !data.url) {
        throw new Error(data.error || "Checkout failed");
      }

      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      setError("Checkout unavailable. Try again.");
      setLoading(false);
    }
  }

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={startCheckout}
        disabled={loading}
        aria-busy={loading}
        className={`nv-btn-animate nv-btn-primary inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[var(--nv-primary)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--nv-primary-mid)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--nv-accent)] disabled:cursor-wait disabled:opacity-70 sm:py-3 ${className}`}
      >
        <BrandIcon
          src={brandAssets.icons.cart}
          size={18}
          className="nv-icon-on-dark nv-btn-icon"
          alt=""
        />
        {loading ? "Redirecting…" : label}
      </button>
      {error ? (
        <p className="mt-2 text-center text-xs text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
