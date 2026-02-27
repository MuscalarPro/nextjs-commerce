"use client";

import { motion } from "framer-motion";

export function ScienceHeroSection() {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-white">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-7xl font-medium text-gray-900 leading-[1.1] tracking-tight"
        >
          Muscalarpro™ [M3] <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="font-normal text-2xl md:text-5xl"
          >
            the formula engineered to decode peak performance
          </motion.span>
        </motion.h2>
      </div>
    </section>
  );
}
