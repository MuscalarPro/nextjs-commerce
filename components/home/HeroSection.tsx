"use client";

import { CheckIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-end overflow-hidden md:items-center">
      {/* Video background + overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
        >
          <source
            src="https://cdn.shopify.com/videos/c/o/v/ff3e0c33de2141abaa4c11362d8edbbc.webm"
            type="video/webm"
          />
        </video>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 block h-full w-full object-cover md:hidden"
        >
          <source
            src="https://cdn.shopify.com/videos/c/o/v/c6e0cb60c3ed4248a996af8d1d5c0d6b.webm"
            type="video/webm"
          />
        </video>
        {/* Soft overlay to keep text legible without crushing the video color */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/55"
        />
      </div>

      {/* MAIN CONTENT — left-aligned on desktop, bottom-aligned on mobile */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 md:px-8 md:pb-40 md:pt-32">
        <div className="md:max-w-xl">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mb-4 flex items-center gap-2"
          >
            <CheckIcon className="h-4 w-4 shrink-0 text-white" strokeWidth={2.5} />
            <span className="text-sm font-medium text-white md:text-[15px]">
              Science-backed musclespan support
            </span>
          </motion.div>

          <motion.h1
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 font-sans text-[2.25rem] font-semibold leading-[1.08] text-white md:text-[3.75rem]"
          >
            Unlock your
            <br />
            peak performance
          </motion.h1>

          <motion.p
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 max-w-md text-[1rem] text-white/90 md:text-[1.125rem] md:leading-snug"
          >
            Cellular energy, muscle strength and endurance support in one daily
            stack built on Urolithin A human RCTs (~₹199/day).
          </motion.p>

          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-3"
          >
            <Link
              href="/product/decode-peak-performance-m3"
              prefetch={true}
              className="inline-flex flex-1 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-neutral-200 md:flex-none md:px-8 md:text-base"
            >
              Start Daily [M3]
            </Link>
            <Link
              href="/science"
              prefetch={true}
              className="inline-flex flex-1 items-center justify-center rounded-full border border-white/25 bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/25 md:flex-none md:px-8 md:text-base"
            >
              See The Science
            </Link>
          </motion.div>
        </div>
      </div>

      {/* DESKTOP-only 3-col info strip pinned to bottom of hero */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        aria-hidden="false"
        className="absolute inset-x-0 bottom-0 z-10 hidden bg-gradient-to-t from-black/45 to-transparent px-4 pb-10 pt-16 md:block md:px-8"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-0">
          <div className="pr-8">
            <h3 className="mb-1 text-[15px] font-semibold text-white">
              Musclespan support
            </h3>
            <p className="text-sm leading-snug text-white/75">
              Built for mitochondrial health, muscle strength &amp; endurance,
              brain health
            </p>
          </div>
          <div className="border-l border-white/20 px-8">
            <h3 className="mb-1 text-[15px] font-semibold text-white">
              Clinical proven ingredients
            </h3>
            <p className="text-sm leading-snug text-white/75">
              Urolithin A, Spermidine &amp; S-Allyl Cysteine
            </p>
          </div>
          <div className="border-l border-white/20 pl-8">
            <h3 className="mb-1 text-[15px] font-semibold text-white">
              Trusted quality
            </h3>
            <p className="text-sm leading-snug text-white/75">
              FDA GRAS. US-CGMP. FSSAI approved.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
