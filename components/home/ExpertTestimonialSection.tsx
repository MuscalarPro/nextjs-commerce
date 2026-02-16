"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  expertsList,
  expertTestimonialData,
  type Expert,
} from "../../data/expertTestimonialData";

export function ExpertTestimonialSection() {
  const [activeExpertIndex, setActiveExpertIndex] = useState(0);
  const activeExpert = expertsList[activeExpertIndex] ?? expertsList[0];

  if (!activeExpert) return null;

  return (
    <section className="w-full bg-white py-12 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8">
        <h2 className="max-w-4xl text-[2.5rem] leading-[1.1] tracking-tight text-black md:text-[3.5rem] font-normal">
          {expertTestimonialData.headline}
        </h2>

        <div className="mt-16 grid grid-cols-1 items-start lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Portrait Column */}
          <div className="w-full flex justify-center lg:justify-start">
            <div className="relative h-[450px] w-[380px] md:h-[550px] md:w-[450px] overflow-hidden rounded-2xl bg-neutral-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExpert.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeExpert.portraitSrc}
                    alt={activeExpert.portraitAlt}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full flex flex-col justify-center py-4 md:py-10">
            {/* Avatars */}
            <div className="flex items-center space-x-5 mb-12">
              {expertsList.map((expert: Expert, index: number) => {
                const isActive = index === activeExpertIndex;
                return (
                  <button
                    key={expert.id}
                    onClick={() => setActiveExpertIndex(index)}
                    className={`relative h-16 w-16 overflow-hidden rounded-full transition-all duration-300 border-2 ${
                      isActive
                        ? "border-[#1a3319] grayscale-0 scale-110"
                        : "border-transparent grayscale opacity-50 hover:opacity-100 hover:grayscale-0 hover:scale-105"
                    }`}
                  >
                    <Image
                      src={expert.avatarSrc}
                      alt={expert.name}
                      fill
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>

            <div className="min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExpert.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <blockquote className="text-2xl md:text-3xl lg:text-[2.5rem] leading-[1.2] text-black tracking-tight font-normal italic">
                    &quot;{activeExpert.quote}&quot;
                  </blockquote>

                  <div className="mt-10 space-y-2">
                    <div className="text-xl md:text-2xl font-bold text-black tracking-tight">
                      {activeExpert.name}
                    </div>
                    <div className="text-lg md:text-xl text-neutral-500 font-medium">
                      {activeExpert.title}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
