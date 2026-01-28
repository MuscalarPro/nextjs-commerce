"use client";

import Image from "next/image";
import { useState } from "react";

type ExternalLinkPillProps = {
  text: string;
  href: string;
};

function ExternalLinkPill({ text, href }: ExternalLinkPillProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 rounded-full border border-black/20 bg-white px-3 py-1 text-xs font-medium text-black hover:bg-black hover:text-white transition-colors"
    >
      <span>{text}</span>
      <span
        aria-hidden="true"
        className="inline-block text-[10px] leading-none translate-y-[-1px] rotate-45"
      >
        ↑
      </span>
    </a>
  );
}

const tabs = [
  {
    id: "mitochondrial-health",
    label: "Mitochondrial Health",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-relaxed text-black md:text-base">
          Urolithin A 500mg™: Clinically proven mitophagy activator; boosts
          endurance 41-95% in RCTs
        </p>
        <div className="flex flex-wrap gap-2">
          <ExternalLinkPill
            href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2788244"
            text="JAMA Network Open RCT"
          />
        </div>
        <div className="relative w-full overflow-hidden rounded-lg">
          <Image
            src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Mitchondria_main.png?v=1769577232"
            alt="Mitochondrial Health"
            width={800}
            height={600}
            className="w-full h-auto object-contain rounded-lg"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
      </div>
    ),
  },
  {
    id: "musclespan",
    label: "Musclespan",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-relaxed text-black md:text-base">
          Spermidine 6mg™: Autophagy inducer for muscle longevity; lifespan
          +25% in models
        </p>
        <div className="flex flex-wrap gap-2">
          <ExternalLinkPill
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10049002/"
            text="PMC review/experimental paper"
          />
        </div>
        <div className="relative w-full overflow-hidden rounded-lg">
          <Image
            src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Musclespan_main.png?v=1769577230"
            alt="Musclespan"
            width={800}
            height={600}
            className="w-full h-auto object-contain rounded-lg"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
      </div>
    ),
  },
  {
    id: "brain-health",
    label: "Brain Health",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-relaxed text-black md:text-base">
          S-Allyl Cysteine 1mg™: Neuroprotective antioxidant; reduces brain
          oxidative stress
        </p>
        <div className="flex flex-wrap gap-2">
          <ExternalLinkPill
            href="https://www.tandfonline.com/doi/full/10.1080/15502783.2024.2419388"
            text="Athlete DBRCT"
          />
        </div>
        <div className="relative w-full overflow-hidden rounded-lg">
          <Image
            src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Brain_health_main.png?v=1769577235"
            alt="Brain Health"
            width={800}
            height={600}
            className="w-full h-auto object-contain rounded-lg"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
      </div>
    ),
  },
];

export function VS01Tabs() {
  const [activeTab, setActiveTab] = useState("mitochondrial-health");

  return (
    <div className="flex flex-col gap-6">
      {/* Tabs row */}
      <div className="border-b border-[#693979]/30 pb-2">
        <div className="grid grid-cols-3 gap-4 text-sm font-medium text-black">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative text-center text-xs md:text-sm transition-colors ${
                activeTab === tab.id ? "font-semibold" : ""
              }`}
            >
              {tab.label.split(" ").map((word, i, arr) => (
                <span key={i}>
                  {word}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
              {activeTab === tab.id && (
                <div className="absolute bottom-[-10px] left-0 right-0 mt-2 h-[2px] w-full bg-[#693979]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div>{tabs.find((tab) => tab.id === activeTab)?.content}</div>
    </div>
  );
}
