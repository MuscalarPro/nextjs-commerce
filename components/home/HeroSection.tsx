"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex md:items-center  items-end justify-center overflow-hidden pt-0 p-4 md:p-8">
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
          <h1 className="mb-4 text-[2.25rem] font-sans leading-[1.1] font-semibold text-white md:text-[3.75rem]">
            Unlock your
            <br />
            peak-performance{" "}
          </h1>

          <p className="mb-6 text-[1rem] md:text-[1.25rem] leading-relaxed text-white max-w-2xl mx-auto">
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
                className="inline-flex items-center rounded-full text-black px-8 py-3 text-base font-semibold bg-white transition-all hover:bg-black hover:text-white"
              >
                Start Daily [M3]
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Doctor Recommended Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute bottom-8 right-4 md:bottom-12 md:right-12 bg-white px-3.5 py-2 rounded-md hidden md:flex items-center gap-3 shadow-2xl z-20"
      >
        <div className="flex items-center border-r border-gray-200 pr-3">
          <Image
            src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/usa-flag.webp?v=1771395213"
            alt="flag"
            width={50}
            height={50}
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-[10px] md:text-[12px] font-bold tracking-[0.05em] text-gray-900 whitespace-nowrap">
            Patented in USA
          </span>
          <span className="text-[9px] md:text-[11px] font-medium tracking-[0.05em] text-gray-500 whitespace-nowrap">
            #1 MUSCLESPAN BRAND
          </span>
        </div>
      </motion.div>
    </section>
  );
}
