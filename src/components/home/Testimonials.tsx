"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { StarRating } from "@/components/ui/StarRating";
import { brandAssets } from "@/config/brand";
import { testimonialsContent } from "@/data/home";

const avatars = brandAssets.testimonials;

/**
 * Testimonials ("Real people. Real results.")
 * Full-bleed clear-pack ingredient BG - soft mist keeps cards readable.
 */
export function Testimonials() {
  return (
    <section
      id="reviews"
      className="relative isolate scroll-mt-24 min-w-0 overflow-x-clip"
    >
      <div className="absolute inset-0 bg-[var(--nv-paper-soft)]" aria-hidden />
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={brandAssets.testimonialsBackground}
          alt=""
          fill
          sizes="100vw"
          quality={75}
          className="object-cover object-[center_35%] sm:object-center"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--nv-paper-soft)]/70 via-[var(--nv-paper-soft)]/45 to-[var(--nv-paper-soft)]/60 sm:from-[var(--nv-paper-soft)]/60 sm:via-[var(--nv-paper-soft)]/35 sm:to-[var(--nv-paper-soft)]/55"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
          >
            <SectionBadge
              label={testimonialsContent.eyebrow}
              iconSrc={brandAssets.icons.user}
              align="center"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 font-display text-[1.75rem] font-semibold leading-tight tracking-tight text-[var(--nv-ink)] sm:text-4xl md:text-[2.75rem]"
          >
            {testimonialsContent.titleLead}{" "}
            <span className="text-[var(--nv-primary)]">
              {testimonialsContent.titleAccent}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[var(--nv-ink)]/75 sm:mt-4 sm:text-base"
          >
            {testimonialsContent.subtitle}
          </motion.p>
        </div>

        <ul className="mt-8 mx-auto grid min-w-0 max-w-md grid-cols-1 gap-4 sm:mt-12 sm:max-w-none sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {testimonialsContent.items.map((item, index) => {
            const fromLeft = index % 2 === 0;
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: fromLeft ? -24 : 24, y: 16 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: 0.08 * index }}
                whileHover={{ y: -6 }}
                className="min-w-0 overflow-visible"
              >
                <article className="group flex h-full min-w-0 cursor-pointer flex-col items-center rounded-2xl bg-white/92 px-4 py-7 text-center shadow-[0_12px_32px_rgba(27,67,50,0.08)] ring-1 ring-black/[0.04] backdrop-blur-[2px] transition duration-300 hover:shadow-[0_18px_40px_rgba(27,67,50,0.14)] hover:ring-[var(--nv-accent)]/35 sm:px-6 sm:py-9">
                  <div className="relative size-16 overflow-hidden rounded-full ring-2 ring-[var(--nv-leaf)]/20 transition duration-300 group-hover:scale-105 group-hover:ring-[var(--nv-accent)]/50 sm:size-24">
                    <Image
                      src={avatars[item.avatarKey]}
                      alt={item.name}
                      fill
                      sizes="96px"
                      quality={75}
                      className="object-cover object-center"
                    />
                  </div>

                  <StarRating rating={item.rating} className="mt-3 sm:mt-4" />

                  <p className="mt-3 font-display text-3xl leading-none text-[var(--nv-primary)]/35 sm:mt-4 sm:text-4xl">
                    “
                  </p>

                  <blockquote className="mt-1 flex-1 text-sm leading-relaxed text-[var(--nv-ink)]/80 sm:text-[0.95rem]">
                    {item.quote}
                  </blockquote>

                  <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:mt-6">
                    <p className="text-sm font-bold text-[var(--nv-ink)] transition-colors duration-300 group-hover:text-[var(--nv-primary)]">
                      {item.name}
                    </p>
                    <span
                      className="hidden h-3 w-px bg-[var(--nv-muted)]/30 sm:inline-block"
                      aria-hidden
                    />
                    <p className="inline-flex items-center gap-1.5 text-sm text-[var(--nv-muted)]">
                      <BrandIcon
                        src={brandAssets.icons.leaf}
                        size={14}
                        className="nv-icon-leaf transition duration-300 group-hover:scale-110"
                        alt=""
                      />
                      {testimonialsContent.verifiedLabel}
                    </p>
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
