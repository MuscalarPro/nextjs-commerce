"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const appCards = [
  {
    title: "Decode your baseline",
    description: "Track biomarkers across muscalar, metabolic, hormonal, and recovery health. Know your numbers, not just your weight.",
    image: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/4b2b16e5ce540a912b63ca569d69660f18903056.png?v=1777281561",
  },
  {
    title: "Get your protocol",
    description: "AI-powered recommendations personalized to your body, your GLP-1 type, and your musclespan goals. Not generic — yours.",
    image: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/9311967a7a0a91530dde7c775877ffb356a396ef.png?v=1777281562",
  },
  {
    title: "Clinician in the loop",
    description: "Loop in a real licensed doctor anytime for training, recovery, and supplementation guidance. Human judgment where it matters.",
    image: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/b248aee37ed7de99d79e879cf64d82e69e8a6920.png?v=1777281561",
  },
];

const featureGrid = [
  {
    title: "Personalized Intelligence",
    description: "Every insight is referenced against your own biomarkers history and GLP-1 protocol. No generic advice here.",
    icon: "🧠",
  },
  {
    title: "Longitudinal Pattern Detection",
    description: "Connects data over months, not days. Flags imbalances before they become problems. Predict level of muscle longevity risk.",
    icon: "📊",
  },
  {
    title: "Follow-Through Engine",
    description: "M3 lab adherence, scheduled check-ins, protocol nudges, and accountability built into every interaction.",
    icon: "⚙️",
  },
  {
    title: "Clinician-in-the-Loop",
    description: "Real licensed physicians are on-demand. Decisions that go beyond what algorithms should make alone.",
    icon: "👨‍⚕️",
  },
];

export function DoctorSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-[36px] font-normal leading-tight text-[#1a3b1a] md:text-[54px] tracking-tight">
            Your personal <span className="text-[#34a853]">musclespan doctor</span>, <br className="hidden md:block" />
            one message away
          </h2>
          <p className="mx-auto max-w-2xl text-[16px] text-neutral-500 md:text-[18px]">
            AI surfaces your performance insights. A licensed clinician helps you <br className="hidden md:block" />
            act on them. Together, nothing slips through the cracks.
          </p>
        </div>

        {/* App Screens Grid */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {appCards.map((card, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-[32px] bg-neutral-100 shadow-sm">
                <Image src={card.image} alt={card.title} fill className="object-contain p-4" />
              </div>
              <h3 className="mb-2 text-[20px] font-medium text-[#1a3b1a]">{card.title}</h3>
              <p className="text-[14px] leading-relaxed text-neutral-500">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {featureGrid.map((feature, idx) => (
            <div key={idx} className="flex gap-4 rounded-3xl bg-[#f7f8f2] p-6 transition-colors hover:bg-[#efefe9]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[20px] shadow-sm">
                {feature.icon}
              </span>
              <div>
                <h4 className="mb-1 text-[16px] font-bold text-[#1a3b1a]">{feature.title}</h4>
                <p className="text-[13px] leading-relaxed text-neutral-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
