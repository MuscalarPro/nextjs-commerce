"use client";

import Image from "next/image";
import { useState } from "react";

const pillarData: {
  title: string;
  content: string;
}[] = [
  {
    title: "Purity & Contamination",
    content:
      "Heavy metals (lead, arsenic, cadmium, mercury), pesticide residues, residual solvents & allergen screening",
  },
  {
    title: "Microbiological Safety",
    content:
      "TAMC, yeast & mold, pathogens Salmonella, E. coli, Staphylococcus screening",
  },
  {
    title: "Banned Substances",
    content:
      "Screening for 300+ prohibited substances including steroids, stimulants & masking agents",
  },
  {
    title: "Stability & Shelf Life",
    content:
      "Accelerated & real-time stability testing under varied temperature and humidity conditions",
  },
  {
    title: "Potency Assay",
    content:
      "Quantitative analysis of active & marker compounds. Label claim verification on every batch.",
  },
];

const PillarIcon = ({ type }: { type: number }) => {
  const images = [
    "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/US-FDA.webp?v=1773936449",
    "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Potency_verified.webp?v=1773936449",
    "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Stability.webp?v=1773936449",
    "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Pre_clinically.webp?v=1773936449",
    "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/RC_double_blind.webp?v=1773936449",
  ];

  return (
    <div className="w-35 h-35 bg-[#f1f0ec] rounded-2xl flex items-center justify-center overflow-hidden p-1">
      <div className="relative w-full h-full">
        <Image
          src={images[type] || ""}
          alt={`Pillar icon ${type + 1}`}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export function IngredientSection() {
  const [openPillarIndex, setOpenPillarIndex] = useState<number | null>(null);

  const handlePillarToggle = (index: number) => {
    setOpenPillarIndex(openPillarIndex === index ? null : index);
  };

  return (
    <section className="bg-white">
      {/* 5 Pillars Section - Two Column Layout */}
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-16 md:py-24 border-b border-neutral-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start">
          {/* Left Column: Icon + Heading */}
          <div className="lg:max-w-md">
            <h2 className="heading-h2 mb-8">
              Rigorously tested and made from high-quality ingredients
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 ">
              {[0, 1, 2, 3, 4].map((i) => (
                <PillarIcon key={i} type={i} />
              ))}
            </div>
          </div>

          {/* Right Column: Heading + Accordion */}
          <div>
            <h3 className="heading-h3 mb-8">
              We believe that it's our responsibility to take the extra steps
              necessary to ensure that our products are safe and effective, and
              we are committed to upholding these high standards for all of our
              dietary supplements.
            </h3>

            <div className="space-y-0 border-t border-neutral-300">
              {pillarData.map((pillar, index) => {
                const isOpen = openPillarIndex === index;

                return (
                  <div key={index} className="border-b border-neutral-300">
                    <button
                      onClick={() => handlePillarToggle(index)}
                      className="flex w-full items-center justify-between py-6 text-left transition-colors group"
                    >
                      <p
                        className={`text-[17px] md:text-[18px] transition-colors ${isOpen ? "text-black font-semibold" : "text-[#111] font-medium"}`}
                      >
                        {pillar.title}
                      </p>
                      <span
                        className={`mt-1.5 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 4V16M4 10H16"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-8">
                          <p className="body-text-sm text-[#666]">
                            {pillar.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
