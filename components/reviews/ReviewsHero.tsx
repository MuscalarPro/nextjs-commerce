"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const floatingPortraits = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
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
          <h1 className="text-5xl md:text-8xl font-normal text-white mb-8 tracking-tighter leading-none">
            Member Stories.
          </h1>
          <p className="text-lg md:text-2xl text-neutral-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Real lives. Real failures. Real transformations. Hear from the
            people redefining what's possible.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF5D01] text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-[#e05200] transition-all shadow-2xl"
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
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-500 to-transparent" />
      </motion.div>
    </section>
  );
}
