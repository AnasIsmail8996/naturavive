"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { brandAssets } from "@/config/brand";
import { benefitsContent } from "@/data/home";

const iconMap = {
  energy: brandAssets.icons.energy,
  gut: brandAssets.icons.gut,
  immunity: brandAssets.icons.immunity,
  beauty: brandAssets.icons.beauty,
} as const;

/**
 * Benefits ("Real benefits. A brighter you.")
 * Full-bleed clear-pack stone/botanical BG + cream cards on top.
 */
export function Benefits() {
  return (
    <section
      id="benefits"
      className="relative isolate scroll-mt-24 min-w-0 overflow-x-clip"
    >
      <div className="absolute inset-0 bg-[var(--nv-paper-soft)]" aria-hidden />
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={brandAssets.benefitsBackground}
          alt=""
          fill
          sizes="100vw"
          quality={75}
          className="object-cover object-[center_40%] sm:object-center"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--nv-paper-soft)]/75 via-[var(--nv-paper-soft)]/45 to-[var(--nv-paper-soft)]/55 sm:from-[var(--nv-paper-soft)]/65 sm:via-[var(--nv-paper-soft)]/35 sm:to-[var(--nv-paper-soft)]/50"
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
              label={benefitsContent.eyebrow}
              iconSrc={brandAssets.icons.energy}
              align="center"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 font-display text-[1.75rem] font-semibold leading-tight tracking-tight text-[var(--nv-primary)] sm:text-4xl md:text-[2.75rem]"
          >
            {benefitsContent.title}
          </motion.h2>
        </div>

        <ul className="mt-8 grid min-w-0 grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {benefitsContent.items.map((item, index) => {
            const fromLeft = index % 2 === 0;
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: fromLeft ? -24 : 24, y: 16 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: 0.08 * index }}
                whileHover={{ y: -6 }}
                className="group min-w-0"
              >
                <article className="flex h-full min-w-0 cursor-pointer flex-col items-center rounded-2xl bg-white/92 px-5 py-7 text-center shadow-[0_10px_30px_rgba(27,67,50,0.08)] ring-1 ring-black/[0.04] backdrop-blur-[2px] transition duration-300 hover:shadow-[0_16px_40px_rgba(27,67,50,0.14)] hover:ring-[var(--nv-accent)]/35 sm:px-6 sm:py-9">
                  <div className="inline-flex size-16 items-center justify-center rounded-full bg-[#F6E8D8] transition duration-300 group-hover:scale-110 group-hover:bg-[#F0DCC4] sm:size-[4.5rem]">
                    <BrandIcon
                      src={iconMap[item.icon]}
                      size={32}
                      className="nv-icon-spin"
                      alt=""
                    />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-[var(--nv-primary)] transition-colors duration-300 group-hover:text-[var(--nv-accent)] sm:mt-5 sm:text-[1.35rem]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 max-w-[18rem] text-sm leading-relaxed text-[var(--nv-muted)] sm:mt-3 sm:text-[0.95rem]">
                    {item.body}
                  </p>
                </article>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
