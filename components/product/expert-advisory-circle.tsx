"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const team = [
  {
    name: "Dr. Rajaram Samant",
    role: "MD Celagenex, Longevity Researcher",
    bio: "No other supplement does what M3 can. It is an amazing advance for muscle health and longevity.",
    image:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Dr.Rajaram_samant.jpg?v=1770368004",
  },
  {
    name: "Dr Ateeb Shaikh",
    role: "HealthTech Expert",
    bio: "M3 is always in my personal science-backed stack for performance training and Cognitive benefits",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/ea64de8b0578144d18d6b97c748f2443dc25bd26.png?v=1777288465",
  },
];

export function ExpertAdvisoryCircle({
  compact = false,
}: { compact?: boolean } = {}) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  if (compact) {
    return (
      <section className="bg-white pt-6 pb-8">
        <div className="text-left">
          <h2 className="mb-2 text-[20px] font-medium leading-[1.1] text-[#1a3b1a] tracking-tight">
            The Muscalarpro M3 Expert Advisory Circle
          </h2>
          <p className="mb-6 text-[14px] leading-relaxed text-[#1a3b1a]">
            Exclusive access to quarterly masterclasses with India&apos;s
            leading physicians, longevity scientists, and performance
            specialists — curated for the M3 member.
          </p>
          <div className="grid grid-cols-1 gap-6">
            {team.map((member, idx) => {
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
                    aria-label={`${isExpanded ? "Collapse" : "Expand"} ${member.name} photo`}
                    className={`relative shrink-0 overflow-hidden bg-neutral-100 cursor-pointer transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3b1a] focus-visible:ring-offset-2 ${
                      isExpanded
                        ? "w-full aspect-[4/3] rounded-2xl"
                        : "h-20 w-20 rounded-2xl"
                    }`}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes={isExpanded ? "(min-width: 768px) 40vw, 100vw" : "80px"}
                    />
                  </motion.button>
                  <div className="min-w-0">
                    <h3 className="mb-1 text-[15px] font-bold text-[#1a3b1a]">
                      {member.name}
                    </h3>
                    <p className="text-[12px] leading-relaxed text-neutral-500">
                      {member.bio}
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
    <section className="bg-white py-12">
      <div className="mx-auto max-w-5xl px-4 text-center md:mt-[-120px] mt-[-60px] ">
        <h2 className="mb-4 text-[28px] font-medium leading-[1] text-[#1a3b1a] md:text-[36px] tracking-tight">
          <span className="text-[#1a3b1a]">
            The Muscalarpro M3 <br /> Expert Advisory Circle
          </span>
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-[16px] text-[#1a3b1a]">
          Exclusive access to quarterly masterclasses with India's leading
          physicians, longevity scientists, and performance specialists —
          curated for the M3 member.
        </p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {team.map((member, idx) => (
            <div key={idx} className="text-left">
              <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[32px] bg-neutral-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-2 text-[22px] font-bold text-[#1a3b1a]">
                {member.name}
              </h3>
              <p className="text-[14px] leading-relaxed text-neutral-500">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
