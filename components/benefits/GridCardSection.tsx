"use client";

import Image from "next/image";

export function GridCardSection() {
  const testingCards = [
    {
      title: "US-FDA Approved Facility",
      image:
        "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/US-FDA.webp?v=1773936449",
      description:
        "Active ingredients manufactured in US-FDA approved facilities meeting the world's highest pharmaceutical manufacturing standards.",
    },
    {
      title: "Pre-Clinical Validated",
      image:
        "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Pre_clinically.webp?v=1773936449",
      description:
        "Safety and mechanism of action (MOA) validated through independent pre-clinical studies before any human trial.",
    },
    {
      title: "Randomized Double-Blind Controlled",
      image:
        "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/RC_double_blind.webp?v=1773936449",
      description:
        "All key ingredients validated through randomized, double-blind, placebo-controlled human clinical trials the gold standard of evidence.",
    },
    {
      title: "US-GMP Verified",
      image:
        "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Untitled_design_6.png?v=1774515804", 
      description:
        "M3 is manufactured in US facilities operating under FDA 21 CFR Part 111, meeting the world's highest pharmaceutical manufacturing standards.",
    },
    {
      title: "Potency Assay Verified",
      image:
        "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Potency_verified.webp?v=1773936449",
      description:
        "Quantitative analysis of active compounds via HPLC, GC-MS & ICP-MS. Every batch verified against label claim what's on the label is what's in the capsule.",
    },
    {
      title: "Stability & Shelf Life Studies",
      image:
        "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Stability.webp?v=1773936449",
      description:
        "Accelerated and real-time stability testing under varying temperature and humidity conditions ensures potency from Day 1 through expiration.",
    },
    
  ];

  return (
    <section className="w-full bg-neutral-100 py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <h2 className="heading-h2 mb-4 leading-[1.2]">
            Built on science. <span className="text-purple-600 italic">Verified by everyone.</span>
          </h2>
          <p className="body-text text-gray-500 max-w-2xl">
            Every M3 ingredient meets pharmaceutical-grade manufacturing,
            clinical validation, and independent third-party verification
            standards.
          </p>
        </div>

        {/* We use -mx-4 to bleed to edges on mobile, and explicit spacer divs to force the start/end gap, as iOS Safari often ignores flex container padding */}
        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory scrollbar-hide -mx-4 md:mx-0">
          
          {/* Mobile Start Spacer */}
          <div className="w-3 shrink-0 block md:hidden" />

          {testingCards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] sm:w-[320px] md:w-[360px] snap-center bg-white rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 shadow-[0_4px_30px_rgba(139,92,246,0.05)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.15)] border border-purple-50 hover:-translate-y-1"
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24 mb-6">
                <Image
                  src={card.image}
                  fill
                  alt={card.title}
                  className="object-contain"
                />
              </div>
              <h3 className="mb-3 text-lg md:text-xl font-bold text-[#111] leading-snug">
                {card.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 font-normal leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
          
          {/* Mobile End Spacer */}
          <div className="w-3 shrink-0 block md:hidden" />
        </div>
      </div>
    </section>
  );
}


