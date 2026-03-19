"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ScienceHeroSection() {
  return (
    <section className="w-full h-screen min-h-[700px] flex items-center justify-center bg-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 flex flex-col items-center text-center">
        {/* Main Heading Text */}
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[38px] md:text-[60px] font-medium text-black leading-[1]"
          >
            Muscalarpro™ [M3]
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[38px] md:text-[60px] font-medium text-black leading-[1]"
          >
            <span>the formula</span>
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              className="inline-block relative w-20 h-20 md:w-28 md:h-30 "
            >
              <Image
                src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/2_Capsules_1.webp?v=1773915979"
                alt="Muscalarpro Capsule"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <span>engineered to decode</span>
            <span className="w-full md:w-auto ">
              peak performance
            </span>
          </motion.div>
        </div>

        {/* Subtle Background Accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#d85c41_0%,transparent_70%)]"
        />
      </div>
    </section>
  );
}
