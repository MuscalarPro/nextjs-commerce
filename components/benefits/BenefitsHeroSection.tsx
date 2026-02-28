"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BenefitsHeroSection() {
  return (
    <section className="w-full bg-white overflow-hidden py-12 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:flex lg:flex-row items-center gap-12 flex flex-col-reverse">
        {/* LEFT CONTENT */}
        <div className="lg:w-1/2 w-full text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-[1.1] text-gray-900 tracking-tight"
          >
            Mitopure® Urolithin A, <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-normal text-3xl md:text-5xl lg:text-6xl"
            >
              the nutrient that can reenergize cells
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            As we age, our cells age. Mitopure® is a pure and patented form of
            Urolithin A, the first postbiotic nutrient shown to trigger a
            crucial recycling process within our cells called mitophagy,
            targeting age-related cellular decline.*
          </motion.p>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 aspect-square relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="https://framerusercontent.com/images/GUS3ttJJ9DvsFB8TXPtgUzpkmg.png?width=1290&height=1292"
            alt="Smiling woman representing health and vitality"
            fill
            className="object-cover"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
