"use client";

import { CheckIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HERO_VIDEO =
  "https://cdn.shopify.com/videos/c/o/v/8c51be2b569249d4a8c11fbfcee0d28a.mp4";

const PRODUCT_IMAGE =
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Updated_product_image.png?v=1779970617";

// Brand orange — used for the headline highlight and the primary CTA.
// As large headline text on the dark video it clears WCAG AA (~5.6:1);
// white-on-orange on the button is ~3.7:1, which meets AA for large/UI
// text. The button label is kept bold so it stays legible.
const CORAL = "#E05A30";

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
    <section className="relative w-full overflow-hidden bg-black text-white">
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

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 pt-28 pb-16 text-center md:px-8 md:pt-36 md:pb-24">
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
          every <span style={{ color: CORAL }}>season.</span>
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
            className="inline-flex items-center rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-opacity hover:opacity-90 md:px-8"
            style={{ background: CORAL }}
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

        {/* Product image — soft radial glow behind a floating pouch. */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative mt-12 flex w-full justify-center md:mt-16"
        >
          {/* Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[120%] w-[80%] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "radial-gradient(ellipse 50% 45% at 50% 50%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 75%)",
            }}
          />
          <div className="relative aspect-square w-full max-w-[300px] md:max-w-[420px]">
            <Image
              src={PRODUCT_IMAGE}
              alt="MuscalarPro Decode Peak Performance [M3] supplement pouch"
              fill
              priority
              sizes="(max-width: 768px) 300px, 420px"
              className="object-contain"
            />
          </div>
        </motion.div>

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
