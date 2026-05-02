"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  { text: "TASTY AND CONVENIENT!", author: "SUZANNE B." },
  { text: "VERY IMPRESSED WITH THE PRODUCTS", author: "ALICE M." },
  { text: "THEY TASTE GREAT!", author: "BRENT D." },
  { text: "WELLNESS TREAT", author: "ANNE R." },
  { text: "FRUITY AND EASY TO USE.", author: "NICOLE E." },
  { text: "LOVE THE RESULTS!", author: "MARK S." },
  { text: "FEELING MORE ENERGETIC", author: "SARAH P." },
  { text: "GREAT ADDITION TO MY ROUTINE", author: "JAMES L." },
  { text: "GREAT ADDITION TO MY ROUTINE", author: "JAMES L." },
];

export default function TestimonialRunner() {
  // Duplicate testimonials for seamless loop
  const repeatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <div className="w-full py-4 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap items-center gap-12"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeatedTestimonials.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="text-[11px] font-bold tracking-[0.1em] text-black uppercase">
              "{item.text}"
            </span>
            <span className="text-[11px] font-medium tracking-[0.1em] text-neutral-300 uppercase">
              · {item.author}
            </span>
            {/* Separator dot between testimonials */}
            <span className="text-neutral-200 mx-4 text-[8px]">●</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
