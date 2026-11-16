/** Checkout catalog - amounts in USD cents for Stripe */

export type CheckoutProduct = {
  id: string;
  name: string;
  benefit: string;
  priceLabel: string;
  priceCents: number;
};

export const checkoutProducts: Record<string, CheckoutProduct> = {
  "daily-essentials": {
    id: "daily-essentials",
    name: "Daily Essentials",
    benefit: "Energy · Immunity · Focus",
    priceLabel: "$34.99",
    priceCents: 3499,
  },
  "gut-balance": {
    id: "gut-balance",
    name: "Gut Balance Probiotic",
    benefit: "Digestive & Immune Support",
    priceLabel: "$32.99",
    priceCents: 3299,
  },
  "collagen-glow": {
    id: "collagen-glow",
    name: "Collagen Glow",
    benefit: "Skin · Hair · Nails",
    priceLabel: "$36.99",
    priceCents: 3699,
  },
  "greens-immunity": {
    id: "greens-immunity",
    name: "Greens + Immunity",
    benefit: "Superfood Blend",
    priceLabel: "$39.99",
    priceCents: 3999,
  },
} as const;

export function getCheckoutProduct(id: string): CheckoutProduct | null {
  return checkoutProducts[id] ?? null;
}
