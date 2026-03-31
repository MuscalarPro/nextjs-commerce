"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const steps = [
  {
    title: "CELLULAR DECLINE",
    description: "Peak performance is biological code, but cellular firmware degrades, affecting strength, endurance, and cognition.",
    isActive: true,
  },
  {
    title: "MUSCALARPRO™ [M3]",
    description: "The firmware update that rewires your cellular engine through mitophagy, autophagy, and Nrf2 antioxidant defense.",
    isActive: false,
  },
  {
    title: "RESULTS",
    description: "Sustained power output, increased muscle strength, and mental edge — delivered at the cellular level.*",
    isActive: false,
  },
];

export function BenefitsHeroSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col">
      {/* BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 scale-110"
        >
          <source
            src="https://cdn.shopify.com/videos/c/o/v/aaa4b298eb2247f3bedfcc06b215183d.webm"
            type="video/webm"
          />
        </video>
        {/* VIGNETTE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-6 md:px-12 pt-12 md:pt-24 flex flex-col justify-center h-full">
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 md:mb-8"
        >
          <p className="text-[11px] font-bold tracking-[0.3em] text-white/50 mb-1.5 md:mb-2 uppercase">
            HOW DOES MUSCALARPRO™ WORK?
          </p>
          <h1 className="heading-h2 font-medium text-white max-w-4xl leading-[1.1] md:leading-[1.1] tracking-tight">
            [M3] 3 Molecule Stack the cellular firmware that decodes peak performance
          </h1>
        </motion.div>

        <div className="relative flex flex-col max-w-5xl">
          {steps.map((step, index) => {
            const isHovered = hoveredIndex === index;
            const isFirst = index === 0;
            const isLast = index === steps.length - 1;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="relative flex gap-4 md:gap-16 group"
              >
                {/* NODE & LINE COLUMN */}
                <div className="relative flex flex-col items-center w-3 md:w-5 shrink-0 py-4 md:py-6">
                  {/* UPPER LINE */}
                  {!isFirst && (
                    <div className="absolute top-0 bottom-[50%] w-[1px] bg-white/20" />
                  )}
                  {/* LOWER LINE */}
                  {!isLast && (
                    <div className="absolute top-[50%] bottom-0 w-[1px] bg-white/20" />
                  )}
                  
                  {/* NODE */}
                  <div 
                    className={`relative z-10 h-3 w-3 md:h-5 md:w-5 rounded-full border-2 transition-all duration-500 flex items-center justify-center shrink-0
                    ${isHovered ? "bg-white border-white scale-125 shadow-[0_0_20px_rgba(255,255,255,1)]" : "bg-transparent border-white/40"}`}
                  >
                    {isHovered && <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-black" />}
                  </div>
                </div>

                {/* CONTENT CARD */}
                <div 
                  className={`flex-1 transition-all duration-500 rounded-2xl p-3 md:p-4 border my-1 md:my-2
                  ${isHovered 
                    ? "bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl translate-x-1 md:translate-x-2" 
                    : "bg-transparent border-transparent opacity-60"}`}
                >
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-10">
                    <h3 className="text-[10px] md:text-[12px] font-bold tracking-[0.25em] text-white uppercase w-[160px] shrink-0">
                      {step.title}
                    </h3>
                    <p className="text-[13px] md:text-[16px] text-white/95 font-light leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ACTION BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 md:mt-10"
        >
          <Link href="/science">
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-[11px] md:text-[12px] tracking-wider uppercase flex items-center gap-3 hover:bg-[#f0f0f0] transition-all shadow-xl group">
              Explore Science
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </motion.div>
      </div>
      
      {/* FOOTER FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
