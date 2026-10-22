"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { TypeWriter } from "@/components/ui/TypeWriter";
import { brandAssets } from "@/config/brand";
import { heroContent } from "@/data/home";

/**
 * Hero = reference layout:
 * Left copy (~40%) | Right products on stone podium (~60%)
 * Full-bleed nature BG; soft left wash only; products sit low on the ledge.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] min-w-0 scroll-mt-24 overflow-x-clip"
    >
      <div className="absolute inset-0 bg-[var(--nv-paper-soft)]" aria-hidden />

      <div className="absolute inset-0" aria-hidden>
        <Image
          src={brandAssets.heroBackground}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={80}
          className="object-cover object-[72%_55%] sm:object-[68%_50%] lg:object-[62%_45%]"
        />
      </div>

      {/* Soft left wash only — right keeps stone + botanical frame readable */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--nv-paper-soft)]/80 via-[var(--nv-paper-soft)]/25 to-transparent sm:from-[var(--nv-paper-soft)]/65 sm:via-[var(--nv-paper-soft)]/10 sm:to-transparent lg:from-[var(--nv-paper-soft)]/55 lg:via-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 content-start gap-3 px-4 pb-6 pt-20 sm:content-center sm:gap-6 sm:px-6 sm:pb-12 sm:pt-28 lg:grid-cols-12 lg:items-end lg:gap-2 lg:px-8 lg:pb-10 lg:pt-24">
        {/* Copy column — below products on mobile (order), left on desktop */}
        <div className="relative z-20 order-2 min-w-0 lg:order-1 lg:col-span-5 lg:self-center xl:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <SectionBadge
              label={heroContent.eyebrow}
              iconSrc={brandAssets.icons.leaf}
              align="left"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-3 max-w-[14ch] font-display text-[2.05rem] font-semibold leading-[1.1] tracking-tight text-[var(--nv-primary)] sm:mt-4 sm:max-w-[16ch] sm:text-5xl md:text-[3.25rem] lg:text-[3.4rem]"
          >
            <span className="block text-[var(--nv-ink)]">
              {heroContent.titleLead}
            </span>
            <TypeWriter
              text={heroContent.titleAccent}
              className="block text-[var(--nv-primary)]"
              speed={48}
              delay={420}
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-[var(--nv-ink)]/75 sm:mt-5 sm:text-lg"
          >
            {heroContent.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="relative z-30 mt-6 flex min-w-0 max-w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <ButtonLink
              href={heroContent.primaryCta.href}
              size="lg"
              className="w-full sm:w-auto"
            >
              {heroContent.primaryCta.label}
              <BrandIcon
                src={brandAssets.icons.arrowRight}
                size={18}
                className="nv-icon-on-dark nv-btn-icon"
              />
            </ButtonLink>
            <ButtonLink
              href={heroContent.secondaryCta.href}
              variant="outline"
              size="lg"
              className="w-full !border-[var(--nv-accent)] text-[var(--nv-ink)] hover:!border-[var(--nv-accent)] hover:text-[var(--nv-primary)] sm:w-auto"
            >
              <BrandIcon
                src={brandAssets.icons.leaf}
                size={18}
                className="nv-icon-leaf"
              />
              {heroContent.secondaryCta.label}
            </ButtonLink>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-6 flex min-w-0 flex-wrap gap-2 sm:mt-8 sm:gap-2.5"
          >
            {heroContent.trustChips.map((chip) => (
              <li key={chip} className="min-w-0">
                <span className="group inline-flex max-w-full cursor-pointer items-center gap-1.5 rounded-full border border-[var(--nv-primary)]/12 bg-white/75 px-3 py-1.5 text-xs font-semibold tracking-wide text-[var(--nv-primary)] shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-[var(--nv-accent)]/40 hover:bg-white hover:shadow-md sm:text-sm">
                  <BrandIcon
                    src={brandAssets.icons.check}
                    size={14}
                    className="nv-icon-leaf shrink-0 transition duration-300 group-hover:scale-110"
                    alt=""
                  />
                  <span className="min-w-0 transition-colors duration-300 group-hover:text-[var(--nv-accent)]">
                    {chip}
                  </span>
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Products — first on mobile, right column on desktop */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative z-10 order-1 mx-auto w-full min-w-0 max-w-md sm:max-w-xl lg:order-2 lg:col-span-7 lg:mx-0 lg:mb-0 lg:max-w-none xl:col-span-7"
        >
          <div className="relative aspect-[5/4] w-full max-h-[42svh] sm:max-h-none sm:aspect-[4/3] lg:aspect-[5/4] lg:min-h-[28rem] xl:min-h-[32rem]">
            <Image
              src={brandAssets.heroProductClusterClear}
              alt={heroContent.productAlt}
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 55vw"
              quality={80}
              className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(18,42,32,0.28)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
