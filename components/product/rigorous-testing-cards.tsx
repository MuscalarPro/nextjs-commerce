"use client";

import Image from "next/image";
import { rigorousTestingData } from "data/product/rigorousTestingData";

export function RigorousTestingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
      {rigorousTestingData.map((card) => (
        <div
          key={card.id}
          className="flex items-start gap-5 transition-all duration-300 hover:opacity-70 group"
        >
          {/* Icon Container - Left Side */}
          <div className="flex h-14 w-16 shrink-0 items-center justify-center rounded-lg border border-black/10 bg-white/40 p-2 shadow-sm transition-colors group-hover:border-black/20">
            <Image
              src={card.icon}
              alt={card.title}
              width={48}
              height={48}
              className="h-full w-full object-contain grayscale"
            />
          </div>

          {/* Content Container - Right Side */}
          <div className="flex flex-col items-start pt-1">
            <p className="text-[14px] font-semibold text-black leading-tight mb-3">
              {card.title}
            </p>
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent("openRigorousTesting", { detail: { id: card.id } }));
              }}
              className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-600 flex items-center gap-2 hover:text-black transition-colors cursor-pointer"
            >
              LEARN MORE <span className="text-[11px] leading-none transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
