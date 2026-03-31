"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const floatingPortraits = [
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/unsplash_53JXtipb4-A.png?v=1774962037",
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/unsplash_ymo_yC_N_2o.png?v=1774962037",
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/unsplash_W9oEn9hbR9s.png?v=1774962037",
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/unsplash_y8M2ieingIA.png?v=1774962037",
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/unsplash__0zPYlge5Ag.png?v=1774962037",
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/unsplash_9S8mRrhmisY.png?v=1774962037",
];

export default function ReviewsHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -200]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 z-0">
        {floatingPortraits.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              y: (i === 0 || i === 3 ? y1 : y2) as any,
              left: `${[10, 15, 85, 90, 40, 50][i]}%`,
              top: `${[15, 60, 20, 70, 40, 85][i]}%`,
            }}
            className={`absolute rounded-full overflow-hidden border border-white/10 grayscale opacity-30 blur-[1px]
              ${i === 0 ? "top-[15%] left-[10%] w-24 h-24" : ""}
              ${i === 1 ? "top-[60%] left-[15%] w-32 h-32" : ""}
              ${i === 2 ? "top-[20%] right-[15%] w-28 h-28" : ""}
              ${i === 3 ? "top-[70%] right-[10%] w-36 h-36" : ""}
              ${i === 4 ? "top-[40%] left-[40%] w-20 h-20" : ""}
              ${i === 5 ? "bottom-[15%] left-[50%] w-24 h-24" : ""}
            `}
          >
            <Image
              src={src}
              alt="Member portrait"
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="heading-h2 text-white mb-8">
            Member Stories.
          </h1>
          <p className="body-text text-neutral-400 mb-12 max-w-2xl mx-auto">
            Real lives. Real failures. Real transformations. Hear from the
            people redefining what's possible.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-10 py-5 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all shadow-2xl"
          >
            Share your story
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase text-neutral-500">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-500 to-transparent" />
      </motion.div>
    </section>
  );
}
