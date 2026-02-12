"use client";

import { expertsList, expertTestimonialData } from "data/homePageData";
import Image from "next/image";
import { useState } from "react";

export function ExpertTestimonialSection() {
  const [activeExpertIndex, setActiveExpertIndex] = useState(0);
  const activeExpert = expertsList[activeExpertIndex] ?? expertsList[0];

  if (!activeExpert) return null;

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8">
        <h2 className="max-w-2xl text-[2rem] leading-[1.08] tracking-[-0.02em] text-black md:text-[3rem]">
          {expertTestimonialData.headline}
        </h2>

        <div className="mt-10 grid grid-cols-1 items-start lg:grid-cols-2 gap-10">
          {/* Portrait Column */}
          <div className="w-full flex justify-center lg:justify-start">
            <div className="relative h-[400px] w-[350px] overflow-hidden rounded-lg bg-neutral-100">
              <Image
                key={activeExpert.portraitSrc} // Force re-render/animate on change
                src={activeExpert.portraitSrc}
                alt={activeExpert.portraitAlt}
                fill
                className="object-cover transition-opacity duration-300"
                priority
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full flex flex-col justify-center">
            {/* Avatars */}
            <div className="flex items-center space-x-4 mb-8">
              {expertsList.map((expert, index) => {
                const isActive = index === activeExpertIndex;
                return (
                  <button
                    key={expert.id}
                    onClick={() => setActiveExpertIndex(index)}
                    className={`relative h-14 w-14 overflow-hidden rounded-full transition-all duration-300 border-2 ${
                      isActive
                        ? "border-[#1a3319] grayscale-0 scale-110"
                        : "border-transparent grayscale opacity-70 hover:opacity-100 hover:grayscale-0"
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

            <blockquote className="min-h-[160px] text-2xl md:text-3xl lg:text-4xl leading-tight text-black transition-all duration-300">
              &quot;{activeExpert.quote}&quot;
            </blockquote>

            <div className="mt-8 space-y-1">
              <div className="text-lg md:text-xl font-bold text-black">
                {activeExpert.name}
              </div>
              <div className="text-base md:text-lg text-neutral-600">
                {activeExpert.title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
