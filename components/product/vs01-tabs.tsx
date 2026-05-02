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
        className="inline-block text-[10px] translate-y-[-1px] rotate-45"
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
    overlayEvent: "openClinicalResearch",
    content: (
      <div className="space-y-3">
        <p className="text-[14px]     text-black md:text-[16px]">
          Every cell has two cleanup systems that decide how well it ages.
          Autophagy is general recycling — the cell breaking down and replacing
          its own damaged proteins. Mitophagy is a specialized subset: the
          removal of damaged mitochondria, the batteries that power every cell.
          Both processes slow with age. M3 restarts both, through three
          complementary molecules.
        </p>
        <div className="flex flex-wrap gap-2">
          <ExternalLinkPill
            href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2788244"
            text="JAMA Network Open RCT"
          />
        </div>
        <div className="relative w-full overflow-hidden rounded-lg">
          <Image
            src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/1_1.webp?v=1773840169"
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
    overlayEvent: "openMusclespan",
    content: (
      <div className="space-y-3">
        <p className="text-[14px]     text-black md:text-[16px]">
          Exercise triggers cellular adaptations that make muscle stronger and
          more durable. Some of those adaptations can be activated without the
          workout — what researchers call exercise mimetics. They don’t replace
          training, but they make the adaptations more accessible as you age and
          responsiveness to training declines. M3’s three molecules each target
          a different axis of how muscle grows, recovers, and holds its
          strength.
        </p>
        <div className="flex flex-wrap gap-2">
          <ExternalLinkPill
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10049002/"
            text="PMC review/experimental paper"
          />
        </div>
        <div className="relative w-full overflow-hidden rounded-lg">
          <Image
            src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/2_2.webp?v=1773840168"
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
    overlayEvent: "openBrainHealth",
    content: (
      <div className="space-y-3">
        <p className="text-[14px]     text-black md:text-[16px]">
          Your brain maintains itself through three overlapping systems.
          Autophagy inside neurons clears protein aggregates. Nrf2-mediated
          antioxidant defense buffers oxidative damage to neural tissue. And
          during deep sleep, the glymphatic system flushes metabolic waste from
          between cells. All three decline with age. M3’s molecules support each
          pathway — though the evidence base is earlier-stage than for muscle
          outcomes.
        </p>
        <div className="flex flex-wrap gap-2">
          <ExternalLinkPill
            href="https://www.tandfonline.com/doi/full/10.1080/15502783.2024.2419388"
            text="Athlete DBRCT"
          />
        </div>
        <div className="relative w-full overflow-hidden rounded-lg">
          <Image
            src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/3_3.webp?v=1773840169"
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
        <div className="grid grid-cols-3 gap-4 text-[14px] font-medium text-black">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex flex-col items-center justify-center gap-1 text-center body-text transition-colors group ${
                activeTab === tab.id ? "font-semibold" : ""
              }`}
            >
              <div className="flex items-center gap-1">
                <span className="flex flex-col">
                  {tab.label.split(" ").map((word, i, arr) => (
                    <span key={i}>
                      {word}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
                </span>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    window.dispatchEvent(new CustomEvent(tab.overlayEvent));
                  }}
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-black/20 text-black transition-all hover:bg-black hover:text-white"
                >
                  <span className="text-[10px] font-light">+</span>
                </div>
              </div>
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
