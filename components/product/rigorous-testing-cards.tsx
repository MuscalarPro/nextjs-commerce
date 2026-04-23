"use client";

import Image from "next/image";
import { rigorousTestingData } from "data/product/rigorousTestingData";

export function RigorousTestingCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {rigorousTestingData.map((card) => (
        <div
          key={card.id}
          className="rounded-[20px] bg-white p-6 shadow-[0_8px_30px_rgba(200,195,245,0.4)] flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1 border border-[#f0ebf9] group h-full"
        >
          <div className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center">
            <Image
              src={card.icon}
              alt={card.title}
              width={56}
              height={56}
              className="h-full w-full object-contain"
            />
          </div>
          <p className="text-[13px] md:text-[14px] font-medium text-neutral-800 leading-tight mb-4 min-h-[40px] flex items-center justify-center">
            {card.title}
          </p>
          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent("openRigorousTesting", { detail: { id: card.id } }));
            }}
            className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#5B4FCB] flex items-center gap-1.5 hover:translate-x-1 transition-all cursor-pointer"
          >
            LEARN MORE <span className="text-[12px] leading-none">→</span>
          </button>
        </div>
      ))}
    </div>
  );
}
