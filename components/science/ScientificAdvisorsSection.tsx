"use client";

import { type Expert } from "data/science/expertTestimonialData";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  expertsList,
  expertTestimonialData,
} from "../../data/science/expertTestimonialData";

// Helper Component for individual expert cards (if needed elsewhere)
export function ExpertCard({ expert }: { expert: Expert }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col group cursor-pointer">
      {/* Image Container */}
      <div className="relative w-full aspect-[4/5] mb-2 bg-neutral-100 overflow-hidden">
        {!imageError ? (
          <Image
            src={expert.portraitSrc}
            alt={expert.name}
            fill
            className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-200 text-neutral-300">
            <span className="sr-only">{expert.name}</span>
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
          </div>
        )}

        {/* Fallback Icon (always behind image) */}
        {!imageError && (
          <div className="absolute inset-0 -z-10 flex items-center justify-center text-neutral-300">
            <span className="sr-only">{expert.name}</span>
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <div className="flex justify-between items-start mb-1 h-auto min-h-[48px]">
          <h4 className="font-bold text-black text-lg whitespace-pre-line">
            {expert.name}
          </h4>
          <span className="text-neutral-400 text-xl font-light group-hover:text-black transition-colors">
            +
          </span>
        </div>

        <div className="text-sm font-normal text-neutral-500">
          {Array.isArray(expert.title) ? (
            expert.title.map((r, i) => <p key={i}>{r}</p>)
          ) : (
            <p>{expert.title}</p>
          )}
        </div>

        <p className="mt-4 text-sm text-neutral-500 font-light italic">
          &quot;{expert.quote}&quot;
        </p>
      </div>
    </div>
  );
}

export function ScientificAdvisorsSection() {
  const [activeExpertIndex, setActiveExpertIndex] = useState(0);
  const activeExpert = expertsList[activeExpertIndex] ?? expertsList[0];

  if (!activeExpert) return null;

  return (
    <section className="w-full bg-white py-12 md:py-24 border-t border-neutral-200">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-20 mb-16 md:mb-20">
          <h2 className="heading-h2 max-w-2xl leading-[1.12]">
            All made possible by a team of leading scientists
          </h2>
          <p className="body-text text-[#000000] max-w-xl self-end md:self-start leading-[1.4]">
            We are supported by the knowledge and guidance of an accomplished
            group of scientific and clinical advisors with expertise spanning
            microbiome science, genomics, metabolomics, gastroenterology,
            immunology, nutrition, dermatology and human clinical research.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-neutral-200 mb-10 md:mb-12" />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[auto_1fr] lg:gap-x-20 xl:gap-x-32">
          {/* Portrait Column */}
          <div className="w-full flex justify-center lg:justify-start">
            <div className="relative h-[420px] w-[350px] md:h-[480px] md:w-[380px] overflow-hidden rounded-2xl bg-neutral-100 shadow-sm">
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
            <div className="flex items-center space-x-5 mb-12 flex-wrap gap-y-4">
              {expertsList.map((expert, index) => {
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
                  <blockquote className="text-[1.2rem] md:text-[24px] text-black font-normal italic leading-relaxed">
                    &quot;{activeExpert.quote}&quot;
                  </blockquote>

                  <div className="mt-10 space-y-2">
                    <div className="text-[1.1rem] md:text-[1.5rem] font-bold text-black">
                      {activeExpert.name}
                    </div>
                    <div className="text-[0.9rem] md:text-[1rem] text-neutral-500 font-medium">
                      {Array.isArray(activeExpert.title) ? (
                        activeExpert.title.map((r, i) => <p key={i}>{r}</p>)
                      ) : (
                        <p>{activeExpert.title}</p>
                      )}
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
