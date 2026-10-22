"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { brandAssets } from "@/config/brand";
import { subscribeContent } from "@/data/home";

const perkIcons = {
  tag: brandAssets.icons.tag,
  truck: brandAssets.icons.truck,
  calendar: brandAssets.icons.calendar,
  refresh: brandAssets.icons.refresh,
} as const;

/**
 * Subscribe ("Consistent wellness. More savings.")
 * Clear-pack lifestyle BG - woman left, bright right for copy/perks.
 */
export function Subscribe() {
  return (
    <section
      id="subscribe"
      className="relative isolate scroll-mt-24 min-h-[24rem] min-w-0 overflow-x-clip bg-[var(--nv-paper-soft)] sm:min-h-[32rem]"
    >
      <div className="absolute inset-0 bg-[var(--nv-paper-soft)]" aria-hidden />
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={brandAssets.subscribeBackground}
          alt=""
          fill
          sizes="100vw"
          quality={80}
          className="object-cover object-[12%_center] sm:object-[18%_center] lg:object-[20%_center]"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-white/85 sm:via-white/25 sm:to-white/88 lg:via-white/15 lg:to-white/80"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[24rem] max-w-7xl items-center px-4 py-12 sm:min-h-[32rem] sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="ml-auto w-full min-w-0 max-w-xl lg:max-w-2xl">
          <div className="grid min-w-0 gap-6 rounded-3xl bg-white/70 p-5 shadow-[0_16px_48px_rgba(27,67,50,0.08)] backdrop-blur-md ring-1 ring-white/60 sm:gap-8 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-0 lg:backdrop-blur-none">
            <div className="min-w-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4 }}
              >
                <SectionBadge
                  label={subscribeContent.eyebrow}
                  iconSrc={brandAssets.icons.tag}
                  align="left"
                />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="mt-3 font-display text-[1.75rem] font-semibold leading-tight tracking-tight text-[var(--nv-ink)] sm:mt-4 sm:text-4xl md:text-[2.75rem]"
              >
                {subscribeContent.titleLead}{" "}
                <span className="text-[var(--nv-primary)]">
                  {subscribeContent.titleAccent}
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-3 max-w-md text-sm leading-relaxed text-[var(--nv-ink)]/75 sm:mt-4 sm:text-lg"
              >
                {subscribeContent.body}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.14 }}
                className="relative z-30 mt-6 sm:mt-7"
              >
                <ButtonLink
                  href={subscribeContent.cta.href}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {subscribeContent.cta.label}
                  <BrandIcon
                    src={brandAssets.icons.arrowRight}
                    size={18}
                    className="nv-icon-on-dark nv-btn-icon"
                    alt=""
                  />
                </ButtonLink>
              </motion.div>
            </div>

            <ul className="min-w-0 space-y-3 sm:space-y-4">
              {subscribeContent.perks.map((perk, index) => (
                <motion.li
                  key={perk.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: 0.07 * index }}
                  whileHover={{ x: 6 }}
                  className="group flex min-w-0 cursor-pointer items-center gap-3"
                >
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/95 shadow-sm ring-1 ring-black/5 transition duration-300 group-hover:scale-110 group-hover:ring-[var(--nv-accent)]/40 sm:size-12">
                    <BrandIcon
                      src={perkIcons[perk.icon]}
                      size={20}
                      className="nv-icon-leaf"
                      alt=""
                    />
                  </span>
                  <p className="min-w-0 text-sm font-medium text-[var(--nv-ink)] transition-colors duration-300 group-hover:text-[var(--nv-primary)] sm:text-base">
                    {perk.label}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
