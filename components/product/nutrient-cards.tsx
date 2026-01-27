"use client";

import { useEffect, useRef, useState } from "react";
import { nutrientCardsData } from "data/nutrientCardsData";

export function NutrientCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  useEffect(() => {
    // Pause all videos except the hovered one
    nutrientCardsData.forEach((card) => {
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
        {nutrientCardsData.map((card) => (
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
        {nutrientCardsData.map((card) => (
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
