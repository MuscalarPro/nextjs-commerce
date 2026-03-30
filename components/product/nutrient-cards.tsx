"use client";

import { nutrientCardsData } from "data/product/nutrientCardsData";
import { useState } from "react";



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
            <h3 className="mb-3 heading-h3">
              {card.title}
            </h3>
            <p className="mb-6 body-text">{card.description}</p>
            <div className="relative mb-6 mx-auto aspect-square w-48 max-w-full overflow-hidden rounded-2xl">
              <img
                src={card.imageSrc}
                alt={card.title}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="border-t border-neutral-200 pt-4">
              <p className="mb-2 text-xs font-sans font-semibold uppercase text-[#000000]">
                {card.sectionTitle}
              </p>
              <p className="body-text-sm">{card.sectionText}</p>
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
            <h3 className="mb-3 heading-h3">
              {card.title}
            </h3>
            <p className="mb-6 body-text">{card.description}</p>
            <div className="relative mb-6 mx-auto aspect-square w-62 max-w-full overflow-hidden rounded-2xl">
              <img
                src={card.imageSrc}
                alt={card.title}
                className={`object-scale-down w-full h-full transition-transform duration-500 ${
                  hoveredCard === card.id ? "scale-110" : "scale-100"
                }`}
              />
            </div>
            <div className="border-t border-neutral-200 pt-4">
              <p className="mb-2 text-xs font-sans font-semibold uppercase text-[#000000]">
                {card.sectionTitle}
              </p>
              <p className="body-text-sm">{card.sectionText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
