"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { BuyButton } from "@/components/ui/BuyButton";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { StarRating } from "@/components/ui/StarRating";
import { brandAssets } from "@/config/brand";
import { bestSellersContent } from "@/data/home";

const productImages = brandAssets.products;

/**
 * Best Sellers - full-bleed clear-pack botanical frame BG.
 * Soft mist keeps title + product cards readable in the bright center.
 */
export function BestSellers() {
  return (
    <section
      id="products"
      className="relative isolate scroll-mt-24 min-w-0 overflow-x-clip"
    >
      <div className="absolute inset-0 bg-[var(--nv-paper-soft)]" aria-hidden />
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={brandAssets.bestSellersBackground}
          alt=""
          fill
          sizes="100vw"
          quality={75}
          className="object-cover object-center"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--nv-paper-soft)]/70 via-[var(--nv-paper-soft)]/40 to-[var(--nv-paper-soft)]/55 sm:from-[var(--nv-paper-soft)]/60 sm:via-[var(--nv-paper-soft)]/30 sm:to-[var(--nv-paper-soft)]/50"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
          >
            <SectionBadge
              label={bestSellersContent.eyebrow}
              iconSrc={brandAssets.icons.star}
              align="center"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 font-display text-[1.75rem] font-semibold tracking-tight text-[var(--nv-primary)] sm:text-4xl md:text-[2.75rem]"
          >
            {bestSellersContent.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[var(--nv-ink)]/75 sm:mt-4 sm:text-base"
          >
            {bestSellersContent.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="mt-5 flex justify-center sm:mt-6"
          >
            <ButtonLink
              href={bestSellersContent.shopAll.href}
              size="md"
              className="w-full max-w-xs sm:w-auto sm:max-w-none"
            >
              {bestSellersContent.shopAll.label}
              <BrandIcon
                src={brandAssets.icons.arrowRight}
                size={16}
                className="nv-icon-on-dark nv-btn-icon"
                alt=""
              />
            </ButtonLink>
          </motion.div>
        </div>

        <ul className="mt-8 mx-auto grid min-w-0 max-w-md grid-cols-1 gap-4 sm:mt-12 sm:max-w-none sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {bestSellersContent.products.map((product, index) => {
            const fromLeft = index % 2 === 0;
            return (
              <motion.li
                key={product.id}
                initial={{ opacity: 0, x: fromLeft ? -24 : 24, y: 18 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: 0.08 * index }}
                whileHover={{ y: -6 }}
                className="min-w-0 overflow-visible"
              >
                <article className="group flex h-full min-w-0 cursor-pointer flex-col overflow-hidden rounded-2xl bg-white/92 p-3.5 shadow-[0_12px_32px_rgba(27,67,50,0.08)] ring-1 ring-black/[0.04] backdrop-blur-[2px] transition duration-300 hover:shadow-[0_18px_44px_rgba(27,67,50,0.14)] hover:ring-[var(--nv-accent)]/40 sm:p-5">
                  <div className="relative mx-auto aspect-square w-full max-w-[11rem] sm:max-w-[15rem]">
                    <Image
                      src={productImages[product.imageKey]}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 22vw"
                      quality={75}
                      className="object-contain object-center transition duration-500 group-hover:scale-[1.05]"
                    />
                  </div>

                  <div className="mt-2.5 flex flex-1 flex-col text-center sm:mt-3">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--nv-primary)] transition-colors duration-300 group-hover:text-[var(--nv-accent)] sm:text-[1.35rem]">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--nv-muted)] sm:mt-1.5">
                      {product.benefit}
                    </p>

                    <div className="mt-2.5 flex items-center justify-center gap-2 sm:mt-3">
                      <StarRating rating={product.rating} />
                      <p className="text-sm font-medium text-[var(--nv-ink)]/80">
                        {product.rating.toFixed(1)}{" "}
                        <span className="font-normal text-[var(--nv-muted)]">
                          ({product.reviews})
                        </span>
                      </p>
                    </div>

                    <p className="mt-auto pt-2.5 font-display text-xl font-semibold tracking-tight text-[var(--nv-ink)] sm:pt-3 sm:text-2xl">
                      {product.price}
                    </p>

                    <div className="mt-3 sm:mt-4">
                      <BuyButton
                        productId={product.id}
                        label={bestSellersContent.ctaLabel}
                      />
                    </div>
                  </div>
                </article>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
