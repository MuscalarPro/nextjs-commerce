"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function BenefitsHeroSection() {
  return (
    <section className="w-full bg-white overflow-hidden py-12 md:py-24">
      <div className="mx-auto max-w-[1440px] p-4 py-10 md:py-20 px-4 md:px-2 md:flex md:flex-row gap-12 flex flex-col-reverse">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 w-full text-left">
          {/* TOP BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-[10px] sm:text-xs font-medium text-gray-500 tracking-widest mb-8 md:mb-12"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600/80"></div>
            PATENTED · CLINICALLY PROVEN · DEVELOPED IN USA
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-1 md:gap-2"
          >
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-[36px] md:text-[48px] font-medium tracking-tighter text-[#000000] leading-none uppercase">
                MUSCALARPRO™ [M3]
              </span>
            </div>

            <div className="text-[20px] md:text-[24px] text-gray-400 tracking-[0.2em] md:tracking-[0.25em] font-medium mt-1">
              3 MOLECULE STACK
            </div>

            <div className="text-[24px] md:text-[32px] text-[#000000] font-medium  tracking-tight">
              the cellular firmware that decodes peak performance
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 text-gray-600 text-base md:text-[16px]  max-w-2xl"
          >
            Peak performance is a biological code. Your program is flawless, but{" "}
            <strong className="text-gray-900 font-semibold">
              cellular firmware degrades
            </strong>{" "}
            mitochondria falter, capping muscle strength, VO₂ max, endurance,
            and cognition. MUSCALARPRO™ is the firmware update that rewires
            your cellular engine through{" "}
            <strong className="text-gray-900 font-semibold">mitophagy</strong>,{" "}
            <strong className="text-gray-900 font-semibold">autophagy</strong>,
            and{" "}
            <strong className="text-gray-900 font-semibold">
              Nrf2 antioxidant defense
            </strong>{" "}
            delivering sustained power output and mental edge.*
          </motion.p>

          {/* MOLECULE PILLS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-3 mt-5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-100 bg-red-50/50 text-[10px] sm:text-xs font-medium tracking-widest text-[#d94646]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#d94646]"></div>
              UROLITHIN A · 1,000MG
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-100 bg-emerald-50/50 text-[10px] sm:text-xs font-medium tracking-widest text-[#1e8b4e]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1e8b4e]"></div>
              SPERMIDINE · 6MG
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-100 bg-purple-50/50 text-[10px] sm:text-xs font-medium tracking-widest text-[#6c518b]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#6c518b]"></div>
              S-ALLYL CYSTEINE · 1MG
            </div>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10 md:mt-12"
          >
            <Link href="/science">
              <button className="bg-[#1C1C1C] text-white px-8 py-4 rounded-full font-semibold text-xs tracking-widest flex items-center gap-2 hover:bg-black transition-colors w-full sm:w-auto justify-center">
                Explore The Science
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </motion.div>
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
