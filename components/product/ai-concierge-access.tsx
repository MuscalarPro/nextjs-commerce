"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const appCards = [
  {
    title: "Baseline",
    description:
      "A precise biomarker snapshot — muscle, mitochondrial, and metabolic markers — mapped before day one.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Frame_2147237018_fa7f5d0b-4741-4bd3-b98f-6c43bce76bfb.png?v=1777896926",
  },
  {
    title: "Deep Health Insights",
    description:
      "Every compound in M3 explained against your biology. Science made legible, not just available.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Frame_2147237038.png?v=1777896926",
  },
  {
    title: "Protocol",
    description:
      "An evidence-backed regimen built around your physiology — timing, dosage, and lifestyle integration, personalised.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Frame_2147237017_1.png?v=1777896926",
  },
  {
    title: "AI + Human Concierge Blueprint",
    description:
      "A Muscalarpro physician reviews and signs off your AI-generated blueprint. Retest. Refine. You're in control.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Frame_2147237017_50a94764-e622-4499-bdd8-9756b3af6041.png?v=1777896926",
  },
];

export function AiConciergeAccessSection({
  compact = false,
}: { compact?: boolean } = {}) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  if (compact) {
    return (
      <section className="bg-white pt-6 pb-2">
        <div>
          <div className="mb-5 text-left">
            <h2 className="mb-1 text-[20px] font-medium leading-[1.1] text-[#1a3b1a] tracking-tight">
              AI-Concierge Access
            </h2>
            <p className="text-[14px] leading-relaxed text-[#1a3b1a]">
              It starts with your biology. Then so much more.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5">
            {appCards.map((card, idx) => {
              const isExpanded = expandedIdx === idx;
              return (
                <motion.div
                  key={idx}
                  layout
                  transition={{
                    layout: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
                  }}
                  className={
                    isExpanded
                      ? "flex flex-col gap-3"
                      : "flex gap-4 items-start"
                  }
                >
                  <motion.button
                    layout
                    type="button"
                    onClick={() =>
                      setExpandedIdx(isExpanded ? null : idx)
                    }
                    aria-expanded={isExpanded}
                    aria-label={`${isExpanded ? "Collapse" : "Expand"} ${card.title} image`}
                    className={`relative shrink-0 overflow-hidden cursor-pointer transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3b1a] focus-visible:ring-offset-2 ${
                      isExpanded
                        ? "w-full aspect-[4/3] rounded-2xl"
                        : "h-20 w-20 rounded-xl"
                    }`}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes={isExpanded ? "(min-width: 768px) 40vw, 100vw" : "80px"}
                    />
                  </motion.button>
                  <div className="min-w-0">
                    <h3 className="mb-1 text-[14px] font-semibold text-[#1a3b1a]">
                      {card.title}
                    </h3>
                    <p className="text-[12px] leading-relaxed text-[#1a3b1a]">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8 py-12 md:py-16">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-[28px] font-medium leading-[1] text-[#1a3b1a] md:text-[36px] tracking-tighter">
            <span className="text-[#1a3b1a]">AI-Concierge Access </span>
          </h2>
          <p className="mx-auto max-w-2xl text-[16px] text-[#1a3b1a] md:text-[16px]">
            It starts with your biology. Then so much more.
          </p>
        </div>

        {/* App Screens Grid */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 md:gap-10">
          {appCards.map((card, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="relative mb-6 aspect-square overflow-hidden rounded-2xl">
                {/* <div className="absolute top-4 left-4 z-10 flex h-7 w-7 items-center justify-center rounded bg-white/10 backdrop-blur-md text-[13px] font-medium text-white shadow-sm">
                  {idx + 1}
                </div> */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-2 text-[18px] font-semibold text-[#1a3b1a]">
                {card.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-[#1a3b1a]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
