"use client";

import { CheckIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";

const HERO_VIDEO =
  "https://cdn.shopify.com/videos/c/o/v/8c51be2b569249d4a8c11fbfcee0d28a.mp4";

// Brand lime accent on the dark video (matches the rest of the page).
const LIME = "#d2f392";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const TRUST_COLUMNS = [
  { title: "Whole-cell check", body: "Mitochondria, muscle, brain" },
  { title: "Clinical actives", body: "Urolithin A & spermidine" },
  { title: "Trusted", body: "FSSAI licensed · US-CGMP" },
];

export function UltraEnduranceHero() {
  return (
    <section
      className="relative flex w-full flex-col overflow-hidden bg-black text-white"
      style={{ minHeight: "100svh" }}
    >
      {/* Video background — unchanged: autoplays muted + loops, no controls.
          Decorative, so aria-hidden. */}
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
        {/* Left-weighted overlay so the left-aligned copy stays legible while
            the right of the footage shows through; plus a soft top/bottom
            wash for the eyebrow and the stat row. */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25" />
      </div>

      {/* CONTENT — left-aligned, fills the viewport height. py clears the
          fixed nav and keeps breathing room. */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 py-24 md:px-8 md:py-28">
        {/* Headline block — vertically centred in the space above the stats. */}
        <div className="flex flex-1 flex-col justify-center">
          {/* Eyebrow */}
          <motion.p
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-[13px] font-medium text-white/75 md:text-[14px]"
          >
            <CheckIcon
              aria-hidden="true"
              className="h-4 w-4 shrink-0"
              strokeWidth={2.5}
              style={{ color: LIME }}
            />
            Banned-substance free
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-5 max-w-2xl font-sans text-[40px] font-semibold leading-[1.04] tracking-tight md:mt-6 md:text-[60px] lg:text-[64px]"
          >
            Get better at peak performance, every day
          </motion.h1>

          {/* Body */}
          <motion.p
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-md text-[16px] leading-relaxed text-white/80 md:mt-7 md:text-[20px]"
          >
            3 clinical actives. The cellular engine, rebuilt. Strength,
            endurance, recovery.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-3 md:mt-10"
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
        </div>

        {/* Trust columns — pinned to the bottom, left-aligned, 3-up with
            dividers on desktop, stacked on mobile. */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-6 border-t border-white/15 pt-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/15 md:mt-16"
        >
          {TRUST_COLUMNS.map((col) => (
            <div key={col.title} className="sm:px-6 sm:first:pl-0">
              <p className="text-[13px] font-semibold text-white md:text-sm">
                {col.title}
              </p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-white/65 md:text-[13px]">
                {col.body}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
