"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HowItWorkHeroSection() {
  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center bg-white overflow-hidden relative">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 flex flex-col items-center text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[38px] md:text-[60px] font-medium text-black max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
        >
          <span>Aging never stops</span>{" "}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            className="relative inline-flex align-middle justify-center w-16 h-16 md:w-28 md:h-28"
          >
            <Image
              src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/1a2211b70d61e330292d4da1a3404bd40d958191-400x400.avif?v=1773929477"
              alt="Clock"
              fill
              className="object-contain relative drop-shadow-2xl"
              priority
            />
          </motion.div>
          <span> But how does it start?</span>
        </motion.h2>
      </div>

      {/* Subtle Background Accent matching Science Page */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#d85c41_0%,transparent_70%)]"
      />
    </section>
  );
}
