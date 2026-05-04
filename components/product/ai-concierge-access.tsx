"use client";

import Image from "next/image";

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

export function AiConciergeAccessSection() {
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
