"use client";

import Image from "next/image";

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

export function ExpertAdvisoryCircle() {
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
