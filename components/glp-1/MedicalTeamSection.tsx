"use client";

import Image from "next/image";

const team = [
  {
    name: "Dr Ateeb Shaikh",
    role: "Clinical Lead",
    bio: "A dedicated health and wellness professional with extensive experience in fitness and performance optimization, bringing years of practical expertise to the Muscular Pro experience.",
    image: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/ea64de8b0578144d18d6b97c748f2443dc25bd26.png?v=1777288465",
  },
  {
    name: "Dr Ateeb Shaikh", // Using as placeholder as per screenshot
    role: "Medical Advisor",
    bio: "A dedicated health and wellness professional with extensive experience in fitness and performance optimization, bringing years of practical expertise to the Muscular Pro experience.",
    image: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/ea64de8b0578144d18d6b97c748f2443dc25bd26.png?v=1777288465",
  },
];

export function MedicalTeamSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="mb-4 text-[42px] font-normal text-[#1a3b1a] md:text-[54px] tracking-tight">
          The <span className="text-[#648c9c]">best care</span> <br className="md:hidden" /> by the best in medicine
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-[18px] text-neutral-400">
          Meet the team of leading specialists with decades <br className="hidden md:block" /> 
          of combined experience across key specialties.
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
              <h3 className="mb-2 text-[22px] font-bold text-[#1a3b1a]">{member.name}</h3>
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
