"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex md:items-center  items-end justify-center overflow-hidden bg-white pt-0 p-4 md:p-8">
      <div className="absolute inset-0 md:inset-4 md:rounded-2xl overflow-hidden">
        {/* Desktop Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://cdn.shopify.com/videos/c/o/v/24570ff54105478c9602536e3f29e7d7.webm"
            type="video/mp4"
          />
        </video>

        {/* Mobile Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="block md:hidden absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://cdn.shopify.com/videos/c/o/v/816ae2e0ab41422098f1d268f0dca632.webm"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-8xl py-10 md:pt-40">
        <div className="mx-auto max-w-5xl left-left md:text-center">
          <h1 className="mb-4 text-4xl font-sans leading-[1.1] font-semibold text-white md:text-6xl">
            Unlock your
            <br />
            peak-performance{" "}
          </h1>

          <p className="mb-10 text-[1rem] md:text-[1.25rem] leading-relaxed text-white max-w-2xl mx-auto">
            Cellular energy, muscle strength and endurance support in one daily
            stavk built on Urolithin A human RCTs (~₹100/day)
          </p>

          <div className="mb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link
                href="/product/daily-synbiotic"
                className="inline-flex items-center rounded-full text-black px-10 py-4 text-lg font-semibold bg-white transition-all hover:bg-black hover:text-white md:px-12 md:py-5 md:text-xl"
              >
                Start Daily [M3]
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
