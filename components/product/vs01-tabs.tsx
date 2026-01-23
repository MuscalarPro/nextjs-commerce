"use client";

import { useState } from "react";

const tabs = [
  {
    id: "mitochondrial-health",
    label: "Mitochondrial Health",
    content:
      "Urolithin A 500mg™: Clinically proven mitophagy activator; boosts endurance 41-95% in RCTs [jamanetwork]",
  },
  {
    id: "musclespan",
    label: "Musclespan",
    content:
      "Spermidine 6mg™: Autophagy inducer for muscle longevity; lifespan +25% in models [pmc.ncbi.nlm.nih]",
  },
  {
    id: "brain-health",
    label: "Brain Health",
    content:
      "S-Allyl Cysteine 1mg™: Neuroprotective antioxidant; reduces brain oxidative stress [tandfonline]",
  },
];

export function VS01Tabs() {
  const [activeTab, setActiveTab] = useState("mitochondrial-health");

  return (
    <div className="flex flex-col gap-6">
      {/* Tabs row */}
      <div className="border-b border-[#B2C8BB] pb-2">
        <div className="grid grid-cols-3 gap-4 text-sm font-medium text-[#2E4B2D]">
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
                <div className="absolute bottom-[-10px] left-0 right-0 mt-2 h-[2px] w-full bg-[#2E4B2D]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <p className="text-sm leading-relaxed text-[#2E4B2D] md:text-base">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </p>
    </div>
  );
}
