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
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <h2 className="heading-h2 mb-4 leading-[1.2]">
            Built on science. Verified by everyone.
          </h2>
          <p className="body-text text-gray-500 max-w-2xl">
            Every M3 ingredient meets pharmaceutical-grade manufacturing,
            clinical validation, and independent third-party verification
            standards.
          </p>
        </div>

        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-10 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {testingCards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] sm:w-[380px] md:w-[400px] snap-start bg-[#f1f0ec] rounded-2xl p-8 lg:p-10 flex flex-col items-center text-center group transition-all duration-300 hover:shadow-lg hover:bg-[#ebeae6]"
            >
              <h3 className="mb-6 heading-h3  text-[#111]">
                {card.title}
              </h3>
              <div className="relative w-24 h-24 md:w-32 md:h-32 mb-8 transform transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={card.image}
                  fill
                  alt={card.title}
                  className="object-contain"
                />
              </div>
              <p className="body-text-sm text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


