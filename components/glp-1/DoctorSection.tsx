"use client";

import Image from "next/image";

const appCards = [
  {
    title: "Decode your baseline",
    description: "Track biomarkers across muscalar, metabolic, hormonal, and recovery health. Know your numbers, not just your weight.",
    image: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Frame_2147237018.png?v=1777379241",
  },
  {
    title: "Get your protocol",
    description: "AI-powered recommendations personalized to your body, your GLP-1 type, and your musclespan goals. Not generic — yours.",
    image: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Frame_2147237016.png?v=1777379242",
  },
  {
    title: "Clinician in the loop",
    description: "Loop in a real licensed doctor anytime for training, recovery, and supplementation guidance. Human judgment where it matters.",
    image: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Frame_2147237017.png?v=1777379241",
  },
];

const featureGrid = [
  {
    title: "Personalized Intelligence",
    description: "Every insight is referenced against your own biomarkers history and GLP-1 protocol. No generic advice here.",
    icon: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Overlay.png?v=1777377898",
  },
  {
    title: "Longitudinal Pattern Detection",
    description: "Connects data over months, not days. Flags imbalances before they become problems. Predict level of muscle longevity risk.",
    icon: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Overlay_1.png?v=1777377897",
  },
  {
    title: "Follow-Through Engine",
    description: "M3 lab adherence, scheduled check-ins, protocol nudges, and accountability built into every interaction.",
    icon: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Overlay_2.png?v=1777377897",
  },
  {
    title: "Clinician-in-the-Loop",
    description: "Real licensed physicians are on-demand. Decisions that go beyond what algorithms should make alone.",
    icon: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Overlay_3.png?v=1777377897",
  },
];

export function DoctorSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-[36px] font-normal leading-tight text-[#1a3b1a] md:text-[54px] tracking-tight">
            <span className="text-[#34a853]">Your personal musclespan doctor,</span> <br className="hidden md:block" />
            one message away
          </h2>
          <p className="mx-auto max-w-2xl text-[16px] text-neutral-500 md:text-[18px]">
            AI surfaces your performance insights. A licensed clinician helps you <br className="hidden md:block" />
            act on them. Together, nothing slips through the cracks.
          </p>
        </div>

        {/* App Screens Grid */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {appCards.map((card, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="relative mb-6 aspect-square overflow-hidden rounded-2xl">
                <Image src={card.image} alt={card.title} fill className="object-cover" />
              </div>
              <h3 className="mb-2 text-[20px] font-medium text-[#1a3b1a]">{card.title}</h3>
              <p className="text-[14px] leading-relaxed text-neutral-500">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {featureGrid.map((feature, idx) => (
            <div key={idx} className="flex flex-col rounded-3xl bg-[#f4fbf4] p-6 transition-colors hover:bg-[#ebf5eb] md:p-8">
              <div className="relative mb-3 h-7 w-7 shrink-0">
                <Image src={feature.icon} alt={feature.title} fill className="object-contain" />
              </div>
              <div>
                <h4 className="mb-1 text-[18px] font-medium tracking-tight text-[#1a3b1a]">{feature.title}</h4>
                <p className="text-[14px] leading-relaxed text-neutral-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
