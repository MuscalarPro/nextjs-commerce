"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  { text: "ENERGY FEELS CLEANER", author: "RAHUL S." },
  { text: "MY DAILY PERFORMANCE SUPPORT", author: "PRIYA M." },
  { text: "EASY TO STAY CONSISTENT", author: "AMAN R." },
  { text: "FEELS LIKE A REAL ROUTINE", author: "NEHA K." },
  { text: "TRAINING FEELS MORE SUPPORTED", author: "ARJUN P." },
  { text: "LOVE THE CELLULAR ENERGY FOCUS", author: "KARAN D." },
  { text: "MY MUSCLESPAN RITUAL", author: "ISHA S." },
  { text: "BUILT FOR LONG-TERM STRENGTH", author: "VIKRAM A." },
  { text: "RECOVERY FEELS MORE INTENTIONAL", author: "ROHAN M." },
  { text: "PREMIUM AND SCIENCE-BACKED", author: "ANANYA R." },
  { text: "NOT JUST ANOTHER SUPPLEMENT", author: "DEV S." },
  { text: "MY EVERYDAY M3 ROUTINE", author: "MEERA K." },
  { text: "SUPPORTS MY ACTIVE LIFESTYLE", author: "NIKHIL J." },
  { text: "CONSISTENCY FEELS EASY NOW", author: "TANVI P." },
  { text: "STRONGER ROUTINE, BETTER FOCUS", author: "ADITYA V." },
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
