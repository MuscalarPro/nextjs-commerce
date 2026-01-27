"use client";

import { useEffect, useRef, useState } from "react";

const cards = [
  {
    id: "musclespan",
    title: "Urolithin A 1g — Lifespan",
    description:
      "Mitochondrial renewal via mitophagy; human RCTs show reduced plasma acylcarnitines/ceramides and CRP (JAMA Netw Open 2022). Quality control clears damaged mitochondria that accumulate with age, with 4‑month signals exceeding short‑term NAD+ boosts (Cell Rep Med 2022).",
    videoSrc:
      "https://cdn.shopify.com/videos/c/o/v/07213526fc7547e38192fb664bcd8147.mp4",
    sectionTitle: "WHY IT'S ESSENTIAL",
    sectionText:
      "Targets mitochondrial quality control so cellular energy systems age more slowly—not just short‑term stimulation.",
  },
  {
    id: "lifespan",
    title: "Spermidine 6mg — Musclespan",
    description:
      "Autophagy inducer that supports cellular cleanup for muscle adaptation (Nature Med 2016). Preclinical longevity data plus mechanistic fit with UA’s mitophagy pathway.",
    videoSrc:
      "https://cdn.shopify.com/videos/c/o/v/0c83b548ba184cdebebaf69e7b4a6b38.mp4",
    sectionTitle: "DOSE & TOLERABILITY",
    sectionText:
      "Dose‑matched to human tolerability studies (Autophagy 2009) to keep cleanup pathways on without compromising performance.",
  },
  {
    id: "proof",
    title: "S‑Allyl Cysteine 1mg — Healthspan",
    description:
      "Nrf2‑linked antioxidant response that protects under training stress (J Neurochem 2015). Supports vascular and neural resilience during high‑output phases; garlic‑derived and complements the mitophagy/autophagy stack.",
    videoSrc:
      "https://cdn.shopify.com/videos/c/o/v/cd61e61842d441688adf8d71f8f9b4a4.mp4",
    sectionTitle: "NOTE",
    sectionText:
      "Dietary supplement. Not intended to diagnose, treat, cure, or prevent any disease. Individual results vary with training, sleep, and protein intake.",
  },
];

export function NutrientCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  useEffect(() => {
    // Pause all videos except the hovered one
    cards.forEach((card) => {
      const video = videoRefs.current[card.id];
      if (video) {
        if (hoveredCard === card.id) {
          video.play().catch(() => {
            // Ignore autoplay errors
          });
        } else {
          video.pause();
        }
      }
    });
  }, [hoveredCard]);

  return (
    <div className="md:grid md:grid-cols-3  md:gap-6">
      {/* Mobile: Horizontal Slider */}
      <div className="flex gap-4 overflow-x-auto pb-4 md:hidden snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
        {cards.map((card) => (
          <div
            key={card.id}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className="relative flex-shrink-0 w-[85vw] snap-start overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300"
          >
            <h3 className="mb-3 text-xl font-bold text-[#2E4B2D]">
              {card.title}
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-[#2E4B2D]">
              {card.description}
            </p>
            {/* Video */}
            <div className="relative mb-6 h-32 w-full overflow-hidden rounded-lg">
              <video
                ref={(el) => {
                  videoRefs.current[card.id] = el;
                }}
                src={card.videoSrc}
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
            <div className="border-t border-neutral-200 pt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#2E4B2D]">
                {card.sectionTitle}
              </p>
              <p className="text-sm leading-relaxed text-[#2E4B2D]">
                {card.sectionText}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Desktop: Grid Layout */}
      <div className="hidden md:contents">
        {cards.map((card) => (
          <div
            key={card.id}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 ${
              hoveredCard === card.id ? "scale-105 shadow-lg z-10" : "scale-100"
            }`}
          >
            <h3 className="mb-3 text-xl font-bold text-[#2E4B2D]">
              {card.title}
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-[#2E4B2D]">
              {card.description}
            </p>
            {/* Video */}
            <div className="relative mb-6 h-32 w-full overflow-hidden rounded-lg">
              <video
                ref={(el) => {
                  videoRefs.current[card.id] = el;
                }}
                src={card.videoSrc}
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
            <div className="border-t border-neutral-200 pt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#2E4B2D]">
                {card.sectionTitle}
              </p>
              <p className="text-sm leading-relaxed text-[#2E4B2D]">
                {card.sectionText}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
