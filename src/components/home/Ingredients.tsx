"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FeatureGlyph } from "@/components/ui/FeatureGlyph";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { brandAssets } from "@/config/brand";
import { ingredientsContent } from "@/data/home";

/**
 * Ingredients: "Powered by nature. Proven by science."
 * Full-bleed stone BG + left ingredient cluster + right copy.
 */
export function Ingredients() {
  return (
    <section
      id="ingredients"
      className="relative isolate scroll-mt-24 min-w-0 overflow-x-clip"
    >
      <div className="absolute inset-0 bg-[var(--nv-paper-soft)]" aria-hidden />
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={brandAssets.ingredientsBackground}
          alt=""
          fill
          sizes="100vw"
          quality={75}
          className="object-cover object-center"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/25 via-[var(--nv-paper-soft)]/35 to-[var(--nv-paper-soft)]/70 sm:from-black/15 sm:via-[var(--nv-paper-soft)]/25 sm:to-[var(--nv-paper-soft)]/65"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid min-w-0 max-w-7xl grid-cols-1 items-center gap-6 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-20 xl:gap-14">
        {/* Left visual */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="relative mx-auto w-full min-w-0 max-w-sm sm:max-w-xl lg:mx-0 lg:max-w-none"
        >
          <div className="relative aspect-[4/3] w-full max-h-[38svh] sm:max-h-none sm:aspect-[5/4] lg:min-h-[28rem] xl:min-h-[32rem]">
            <Image
              src={brandAssets.ingredientsProducts}
              alt={ingredientsContent.imageAlt}
              fill
              sizes="(max-width: 1024px) 92vw, 48vw"
              quality={80}
              className="object-contain object-center drop-shadow-[0_24px_48px_rgba(0,0,0,0.35)]"
            />
          </div>
        </motion.div>

        {/* Right copy — enter from right */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="relative min-w-0 rounded-3xl bg-white/80 p-5 shadow-[0_16px_48px_rgba(27,67,50,0.08)] ring-1 ring-white/60 backdrop-blur-md sm:p-8 lg:bg-white/75 lg:p-10 xl:p-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
          >
            <SectionBadge
              label={ingredientsContent.eyebrow}
              iconSrc={brandAssets.icons.flask}
              align="left"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 max-w-lg font-display text-[1.75rem] font-semibold leading-tight tracking-tight text-[var(--nv-ink)] sm:mt-4 sm:text-4xl md:text-[2.6rem]"
          >
            {ingredientsContent.titleLead}{" "}
            <span className="text-[var(--nv-primary)]">
              {ingredientsContent.titleAccent}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-md text-sm leading-relaxed text-[var(--nv-ink)]/75 sm:mt-5 sm:text-lg"
          >
            {ingredientsContent.body}
          </motion.p>

          <ul className="mt-6 space-y-3.5 sm:mt-10 sm:space-y-5">
            {ingredientsContent.points.map((point, index) => (
              <motion.li
                key={point.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.07 * index }}
                whileHover={{ x: 6 }}
                className="group flex min-w-0 cursor-pointer items-center gap-3 sm:gap-4"
              >
                <span className="transition duration-300 group-hover:scale-110">
                  <FeatureGlyph kind={point.icon} />
                </span>
                <p className="min-w-0 text-[0.95rem] font-medium text-[var(--nv-ink)] transition-colors duration-300 group-hover:text-[var(--nv-primary)] sm:text-lg">
                  {point.label}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
