"use client";

import { useEffect, useRef, useState } from "react";

const cards = [
  {
    id: "cellular",
    title: "Cellular Energy Complex",
    description:
      "Supports cellular and mitochondrial function with a blend of CoQ10, PQQ, MK-7, and spermidine.",
    videoSrc:
      "https://cdn.shopify.com/videos/c/o/v/07213526fc7547e38192fb664bcd8147.mp4",
    sectionTitle: "WHY IT'S ESSENTIAL",
    sectionText: "Replenishes key nutrients that typically decline with age.",
  },
  {
    id: "vitamin-a",
    title: "Vitamin A",
    description:
      "A fat-soluble vitamin that supports immune defense and bone health.",
    videoSrc:
      "https://cdn.shopify.com/videos/c/o/v/0c83b548ba184cdebebaf69e7b4a6b38.mp4",
    sectionTitle: "BIOAVAILABLE FORM",
    sectionText:
      "Two forms of vitamin A—provitamin A and active vitamin A— the body can easily utilize.",
  },
  {
    id: "vitamin-c",
    title: "Vitamin C",
    description: "Promotes collagen production and supports immune health.",
    videoSrc:
      "https://cdn.shopify.com/videos/c/o/v/cd61e61842d441688adf8d71f8f9b4a4.mp4",
    sectionTitle: "BIOAVAILABLE FORM",
    sectionText:
      "Ascorbic acid, an active form of vitamin C that's easily absorbed.",
  },
  {
    id: "vitamin-d3",
    title: "Vitamin D3",
    description:
      "Supports calcium absorption, bone health, and muscular function.",
    videoSrc:
      "https://cdn.shopify.com/videos/c/o/v/e09d08db3fd74b3d807ac113fa279f06.mp4",
    sectionTitle: "BIOAVAILABLE FORM",
    sectionText:
      "Cholecalciferol, a natural and more effective form compared to synthetic D2.",
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
    <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
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
