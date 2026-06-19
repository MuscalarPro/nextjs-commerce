"use client";

import { CheckIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";

const HERO_VIDEO =
  "https://cdn.shopify.com/videos/c/o/v/8c51be2b569249d4a8c11fbfcee0d28a.mp4";

// Brand lime — the home-page accent, used as accent text on the dark
// video (high contrast, matching home's lime-on-dark cards). The primary
// CTA mirrors the home hero: solid white with black text.
const LIME = "#d2f392";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const TRUST_COLUMNS = [
  {
    title: "Musclespan support",
    body: "Built for mitochondrial health, muscle strength & endurance, brain health",
  },
  {
    title: "Clinical proven ingredients",
    body: "Urolithin A, Spermidine & S-Allyl Cysteine",
  },
  {
    title: "Trusted quality",
    body: "FDA GRAS. US-CGMP. FSSAI approved.",
  },
];

export function UltraEnduranceHero() {
  return (
    <section
      className="relative flex w-full flex-col overflow-hidden bg-black text-white"
      style={{ minHeight: "100svh" }}
    >
      {/* Video background — autoplays muted + loops, no controls, exactly
          like the home hero. Decorative, so aria-hidden. */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        {/* Overlay so the white text stays legible over the footage. */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/80" />
      </div>

      {/* CONTENT — fills the viewport-height section and is vertically
          centred. py clears the fixed nav and keeps breathing room. */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 py-24 text-center md:px-8 md:py-28">
        {/* Eyebrow */}
        <motion.p
          initial="initial"
          animate="animate"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70 md:text-[12px]"
        >
          A new dawn for performance
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial="initial"
          animate="animate"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-5 font-sans text-[38px] font-semibold leading-[1.05] tracking-tight md:mt-6 md:text-[64px]"
        >
          Raise your ceiling,
          <br />
          every <span style={{ color: LIME }}>season.</span>
        </motion.h1>

        {/* Body */}
        <motion.p
          initial="initial"
          animate="animate"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 max-w-2xl text-[16px] leading-relaxed text-white/85 md:mt-8 md:text-[21px]"
        >
          M3 rebuilds the{" "}
          <span className="font-semibold text-white">cellular engine</span>{" "}
          behind endurance, strength and recovery — then tracks it. A
          supplement, an app, and a protocol for HYROX, triathlon and pro
          athletes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-10"
        >
          <Link
            href="/product/decode-peak-performance-m3"
            className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-lg transition-colors hover:bg-neutral-200 md:px-8"
          >
            Become a Member
          </Link>
          <Link
            href="#science"
            className="inline-flex items-center rounded-full border border-white/45 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 md:px-8"
          >
            See the Science
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial="initial"
          animate="animate"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 flex items-center gap-2 text-[13px] text-white/70"
        >
          <CheckIcon className="h-4 w-4 shrink-0" strokeWidth={2.5} />
          Banned-substance free · built for tested athletes
        </motion.p>

        {/* Trust columns — 3-up on desktop with dividers, stacked on mobile */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-8 border-t border-white/15 pt-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/15 md:mt-16"
        >
          {TRUST_COLUMNS.map((col) => (
            <div key={col.title} className="px-4 text-center">
              <p className="text-[13px] font-semibold text-white md:text-sm">
                {col.title}
              </p>
              <p className="mx-auto mt-2 max-w-[240px] text-[12px] leading-relaxed text-white/65 md:text-[13px]">
                {col.body}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
