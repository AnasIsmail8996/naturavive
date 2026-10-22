"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { brandAssets } from "@/config/brand";
import { trustContent } from "@/data/home";

const trustIcons = {
  thirdParty: brandAssets.trust.thirdParty,
  nonGmo: brandAssets.trust.nonGmo,
  gmp: brandAssets.trust.gmp,
  madeInUsa: brandAssets.trust.madeInUsa,
} as const;

export function TrustBar() {
  return (
    <section
      aria-label="Trust badges"
      className="relative overflow-x-clip border-y border-black/5 bg-white"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
        <Image
          src={brandAssets.benefitsBackgroundLegacy}
          alt=""
          fill
          sizes="100vw"
          quality={60}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/88" />
      </div>

      <ul className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-6 sm:gap-6 sm:px-6 sm:py-10 lg:grid-cols-4 lg:px-8">
        {trustContent.items.map((item, index) => {
          const fromLeft = index % 2 === 0;
          return (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: fromLeft ? -16 : 16, y: 8 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: 0.06 * index }}
              whileHover={{ y: -3 }}
              className="group flex min-w-0 cursor-pointer flex-col items-center gap-2 text-center sm:flex-row sm:justify-center sm:gap-3 sm:text-left"
            >
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[var(--nv-paper-soft)] ring-1 ring-black/5 transition duration-300 group-hover:scale-110 group-hover:ring-[var(--nv-accent)]/40 sm:size-14">
                {item.icon === "madeInUsa" ? (
                  <BrandIcon
                    src={trustIcons.madeInUsa}
                    size={28}
                    alt=""
                  />
                ) : (
                  <BrandIcon
                    src={trustIcons[item.icon]}
                    size={24}
                    className="nv-icon-leaf"
                    alt=""
                  />
                )}
              </span>
              <p className="text-xs font-semibold text-[var(--nv-ink)] transition-colors duration-300 group-hover:text-[var(--nv-primary)] sm:text-base">
                {item.label}
              </p>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
