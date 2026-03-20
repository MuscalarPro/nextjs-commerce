"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function BenefitsHeroSection() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] p-4 py-8 md:py-20 mt-20 px-4 md:px-2 md:flex md:flex-row gap-12 flex flex-col-reverse">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 w-full text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-1 md:gap-2"
          >
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="heading-h2  text-[#000000] ">
                [M3] 3 Molecule Stack the cellular firmware that decodes peak
                performance
              </span>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 body-text text-gray-600 max-w-2xl"
          >
            Peak performance is a biological code. Your program is flawless, but{" "}
            cellular firmware degrades mitochondria falter, capping muscle
            strength, VO₂ max, endurance, and cognition. MUSCALARPRO™ is the
            firmware update that rewires your cellular engine through mitophagy,{" "}
            autophagy, and Nrf2 antioxidant defense delivering sustained power
            output and mental edge.*
          </motion.p>

          {/* MOLECULE PILLS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-2 mt-5 mb-8"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-red-100 bg-red-50/50 text-[9px] sm:text-[10px] font-medium text-[#d94646]">
              <div className="w-1 h-1 rounded-full bg-[#d94646]"></div>
              UROLITHIN A · 1,000MG
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-100 bg-emerald-50/50 text-[9px] sm:text-[10px] font-medium text-[#1e8b4e]">
              <div className="w-1 h-1 rounded-full bg-[#1e8b4e]"></div>
              SPERMIDINE · 6MG
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-purple-100 bg-purple-50/50 text-[9px] sm:text-[10px] font-medium text-[#6c518b]">
              <div className="w-1 h-1 rounded-full bg-[#6c518b]"></div>
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
              <button className="bg-[#1C1C1C] text-white px-8 py-4 rounded-full font-semibold text-xs flex items-center gap-2 hover:bg-black transition-colors w-full sm:w-auto justify-center">
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

          {/* Bottom Right Flag Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white px-3 md:px-3.5 py-1.5 md:py-2 rounded-md flex items-center gap-2 md:gap-3 shadow-2xl z-20"
          >
            <div className="flex items-center border-r border-gray-200 pr-2 md:pr-3">
              <Image
                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/usa-flag.webp?v=1771395213"
                alt="flag"
                width={40}
                height={40}
                className="w-8 h-8 md:w-12 md:h-12"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[9px] md:text-[11px] font-bold text-gray-900 whitespace-nowrap">
                Patented in USA
              </span>
              <span className="text-[8px] md:text-[10px] font-medium text-gray-500 whitespace-nowrap">
                #1 MUSCLESPAN BRAND
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
