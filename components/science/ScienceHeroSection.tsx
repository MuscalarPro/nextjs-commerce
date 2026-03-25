"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ScienceHeroSection() {
  return (
    <section className="w-full h-screen min-h-[700px] flex items-center justify-center bg-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 flex flex-col items-center text-center">
        {/* Main Heading Text */}
        <div className="relative z-10 flex flex-col items-center">
            <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{
              duration: 1.4,
              delay: 0.4,
              type: "spring",
              stiffness: 80,
            }}
            className="md:hidden relative w-24 h-24 mb-1"
          >
            <Image
              src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/2_Capsules_1.webp?v=1773915979"
              alt="Muscalarpro Capsule"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
          {/* Line 1: Muscalarpro™ [M3] [Capsule] the formula */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap md:flex-nowrap items-center justify-center gap-x-2 md:gap-x-2 text-[30px] sm:text-[34px] md:text-[48px] font-medium text-black md:mb-0 md:leading-none"
          >
            <h1 className="inline-block">Muscalarpro™ [M3]</h1>
            {/* Capsule Image (Integrated into Line 1) - Desktop Only */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              className="hidden md:inline-block relative w-16 h-16 lg:w-22 lg:h-22 mx-0.5 lg:mx-1 align-middle md:translate-y-[-4px]  "
            >
              <Image
                src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/2_Capsules_1.webp?v=1773915979"
                alt="Muscalarpro Capsule"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            
            <span className="whitespace-nowrap md:leading-[1.2]  ">the formula</span>
          </motion.div>

          {/* Line 2: engineered to decode peak performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-[30px] sm:text-[34px] md:text-[48px] font-medium text-black md: max-w-7xl mx-auto leading-none"
          >
            <span className="md:whitespace-nowrap leading-[1.2]">engineered to decode peak performance</span>
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
