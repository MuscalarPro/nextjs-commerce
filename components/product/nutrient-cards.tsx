"use client";

import { useState } from "react";
import Image from "next/image";
import { nutrientCardsData } from "data/nutrientCardsData";

export function NutrientCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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
            <h3 className="mb-3 text-xl font-bold text-black">
              {card.title}
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-black">
              {card.description}
            </p>
            {/* Image */}
            <div className="relative mb-6 mx-auto aspect-square w-48 max-w-full overflow-hidden rounded-lg">
              <Image
                src={card.imageSrc}
                alt={card.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 192px, 192px"
              />
            </div>
            <div className="border-t border-neutral-200 pt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-black">
                {card.sectionTitle}
              </p>
              <p className="text-sm leading-relaxed text-black">
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
            <h3 className="mb-3 text-xl font-bold text-black">
              {card.title}
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-black">
              {card.description}
            </p>
            {/* Image */}
            <div className="relative mb-6 mx-auto aspect-square w-48 max-w-full overflow-hidden rounded-lg">
              <Image
                src={card.imageSrc}
                alt={card.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 192px, 192px"
              />
            </div>
            <div className="border-t border-neutral-200 pt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-black">
                {card.sectionTitle}
              </p>
              <p className="text-sm leading-relaxed text-black">
                {card.sectionText}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
