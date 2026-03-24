"use client";

import Image from "next/image";
import { useState } from "react";

const pillarData: {
  title: string;
  intro: string;
  details: { label: string; value: string }[];
  methodologies: string[];
  reference: string;
  status: string;
}[] = [
  {
    title: "Purity & Contamination",
    intro:
      "Every batch of M3 is screened for heavy metals, pesticide residues, residual solvents, and allergens through independent third-party laboratories. We test what you can't see — because what's not in the capsule matters as much as what is.",
    details: [
      { label: "HEAVY METALS", value: "Lead, Arsenic, Cadmium, Mercury" },
      {
        label: "PESTICIDE RESIDUES",
        value: "Multi-residue screening panel (400+ compounds)",
      },
      {
        label: "RESIDUAL SOLVENTS",
        value: "Class 1, 2, and 3 solvent analysis per ICH Q3C",
      },
      {
        label: "ALLERGENS",
        value: "Gluten, soy, dairy, shellfish, tree nut screening",
      },
    ],
    methodologies: ["ICP-MS", "GC-MS HEADSPACE", "LC-MS/MS"],
    reference:
      "Reference: USP <232> / <233> Elemental Impurities · ICH Q3D · FSSAI heavy metal limits",
    status: "BATCH-BY-BATCH RELEASE TESTING",
  },
  {
    title: "Microbiological Safety",
    intro:
      "Microbial contamination is a silent risk in supplement manufacturing. Every M3 batch is tested for total microbial count, yeast, mold, and specific pathogens — ensuring what you ingest is biologically clean at the colony-forming unit level.",
    details: [
      {
        label: "TOTAL AEROBIC COUNT",
        value: "TAMC — Total Aerobic Microbial Count (<1,000 CFU/g)",
      },
      {
        label: "YEAST & MOLD",
        value: "TYMC — Total Yeast and Mold Count (<100 CFU/g)",
      },
      {
        label: "PATHOGEN PANEL",
        value: "Salmonella, E. coli, Staphylococcus aureus, Pseudomonas",
      },
      {
        label: "ENDOTOXIN",
        value: "Bacterial endotoxin screening (LAL method)",
      },
    ],
    methodologies: ["PCR", "ELISA", "PLATE COUNT", "LAL"],
    reference:
      "Reference: USP <61> / <62> Microbiological Examination · FSSAI microbiological limits for dietary supplements",
    status: "ABSENT / NEGATIVE ON ALL PATHOGENS",
  },
  {
    title: "Banned Substances",
    intro:
      "M3 is screened for 300+ prohibited substances per WADA anti-doping protocols — including anabolic steroids, stimulants, beta-2 agonists, diuretics, and masking agents. If you compete, or even if you don't — you deserve to know your supplement is clean.",
    details: [
      {
        label: "ANABOLIC AGENTS",
        value: "Steroids, SARMs, prohormones, peptide hormones",
      },
      {
        label: "STIMULANTS",
        value: "Amphetamines, ephedrine, DMAA, synephrine, caffeine analogs",
      },
      {
        label: "BETA-2 AGONISTS",
        value: "Clenbuterol, salbutamol, formoterol",
      },
      {
        label: "MASKING AGENTS",
        value: "Diuretics, probenecid, plasma expanders",
      },
    ],
    methodologies: ["WADA PROTOCOL", "LC-MS/MS", "GC-MS", "300+ ANALYTES"],
    reference:
      "Reference: WADA Prohibited List 2025 · NSF/ANSI 173 Dietary Supplement Standard · Informed Sport / Informed Choice testing framework",
    status: "CLEAN ON ALL 300+ PROHIBITED SUBSTANCES",
  },
  {
    title: "Stability & Shelf Life",
    intro:
      "What's in the capsule on Day 1 must still be there on Day 730. Every M3 formulation undergoes both accelerated and real-time stability testing under controlled temperature and humidity conditions — ensuring potency, purity, and physical integrity from manufacturing through expiration.",
    details: [
      {
        label: "ACCELERATED STABILITY",
        value:
          "40°C / 75% RH for 6 months — simulates 2 years of shelf conditions in 6 months",
      },
      {
        label: "REAL-TIME STABILITY",
        value:
          "25°C / 60% RH for 24 months — actual long-term storage monitoring",
      },
      {
        label: "PARAMETERS TESTED",
        value:
          "Assay, dissolution, moisture content, color, odor, disintegration time",
      },
      {
        label: "DEGRADATION PRODUCTS",
        value:
          "Breakdown compound monitoring — no harmful degradants at shelf life endpoint",
      },
    ],
    methodologies: ["ICH Q1A(R2)", "ICH Q1B PHOTOSTABILITY", "HPLC ASSAY"],
    reference:
      "Reference: ICH Q1A(R2) Stability Testing of New Drug Substances · WHO Technical Report Series stability guidelines · FSSAI shelf-life requirements for dietary supplements",
    status: "POTENCY MAINTAINED THROUGH EXPIRATION",
  },
  {
    title: "Potency Assay",
    intro:
      "What's on the label must be in the capsule. Every batch of M3 undergoes quantitative potency analysis of all three active/marker compounds — confirming that Urolithin A, Spermidine, and S-Allyl Cysteine meet or exceed the stated label claim. No underdosing. No asterisks.",
    details: [
      {
        label: "UROLITHIN A ASSAY",
        value:
          "Punica Granatum Extract standardized to Urolithin A — verified ≥500mg per capsule (1,000mg per serving)",
      },
      {
        label: "SPERMIDINE ASSAY",
        value:
          "Wheat Germ Extract standardized to Spermidine — verified ≥3mg per capsule (6mg per serving)",
      },
      {
        label: "SAC ASSAY",
        value:
          "Allium Sativum Extract standardized to S-Allyl Cysteine — verified ≥0.5mg per capsule (1mg per serving)",
      },
      {
        label: "LABEL CLAIM VERIFICATION",
        value: "Batch certificate of analysis (CoA) issued per lot — available on request",
      },
    ],
    methodologies: [
      "HPLC",
      "GC-MS",
      "ICP-MS (MINERALS)",
      "UV-VIS SPECTROSCOPY",
    ],
    reference:
      "Reference: USP <621> Chromatography · ICH Q2(R1) Analytical Validation · 21 CFR Part 111 (cGMP for dietary supplements — identity, purity, strength, composition)",
    status: "100% LABEL CLAIM VERIFIED — EVERY BATCH",
  },
];

const PillarIcon = ({ type }: { type: number }) => {
  const images = [
    "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/US-FDA.webp?v=1773936449",
    "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Potency_verified.webp?v=1773936449",
    "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Stability.webp?v=1773936449",
    "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Pre_clinically.webp?v=1773936449",
    "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/RC_double_blind.webp?v=1773936449",
  ];

  return (
    <div className="w-35 h-35 bg-[#f1f0ec] rounded-2xl flex items-center justify-center overflow-hidden p-1">
      <div className="relative w-full h-full">
        <Image
          src={images[type] || ""}
          alt={`Pillar icon ${type + 1}`}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export function IngredientSection() {
  const [openPillarIndex, setOpenPillarIndex] = useState<number | null>(null);

  const handlePillarToggle = (index: number) => {
    setOpenPillarIndex(openPillarIndex === index ? null : index);
  };

  return (
    <section className="bg-white">
      {/* 5 Pillars Section - Two Column Layout */}
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-16 md:py-24 border-b border-neutral-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start">
          {/* Left Column: Icon + Heading */}
          <div className="lg:max-w-md">
            <h2 className="heading-h2 mb-8 leading-[1.2]">
              Rigorously tested and made from high-quality ingredients
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 ">
              {[0, 1, 2, 3, 4].map((i) => (
                <PillarIcon key={i} type={i} />
              ))}
            </div>
          </div>

          {/* Right Column: Heading + Accordion */}
          <div>
            <h3 className="heading-h3 mb-8 leading-[1.2]">
              We believe that it's our responsibility to take the extra steps
              necessary to ensure that our products are safe and effective, and
              we are committed to upholding these high standards for all of our
              dietary supplements.
            </h3>

            <div className="space-y-0 border-t border-neutral-300">
              {pillarData.map((pillar, index) => {
                const isOpen = openPillarIndex === index;

                return (
                  <div key={index} className="border-b border-neutral-300">
                    <button
                      onClick={() => handlePillarToggle(index)}
                      className="flex w-full items-center justify-between py-6 text-left transition-colors group"
                    >
                      <p
                        className={`text-[17px] md:text-[18px] transition-colors leading-[1.2] ${isOpen ? "text-black font-semibold" : "text-[#111] font-medium "}`}
                      >
                        {pillar.title}
                      </p>
                      <span
                        className={`mt-1.5 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 4V16M4 10H16"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-10 pt-2">
                          <p className="text-[#666] font-medium leading-relaxed mb-8">
                            {pillar.intro.split(/(heavy metals|pesticide residues|residual solvents|allergens|total microbial count|yeast|mold|specific pathogens|300\+ prohibited substances|accelerated and real-time stability testing|quantitative potency analysis)/g).map((part, i) => 
                              [
                                "heavy metals", "pesticide residues", "residual solvents", "allergens",
                                "total microbial count", "yeast", "mold", "specific pathogens",
                                "300+ prohibited substances", "accelerated and real-time stability testing",
                                "quantitative potency analysis"
                              ].includes(part.toLowerCase()) ? (
                                <span key={i} className="text-black font-semibold">{part}</span>
                              ) : part
                            )}
                          </p>

                          {/* Grid Details */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {pillar.details.map((detail, dIdx) => (
                              <div key={dIdx} className="bg-[#f6f5f2] p-5 rounded-xl">
                                <p className="text-[10px] font-bold tracking-widest text-[#aaa] mb-2 uppercase">
                                  {detail.label}
                                </p>
                                <p className="text-[15px] font-medium text-[#111] leading-[1.2]">
                                  {detail.value}
                                </p>
                              </div>
                            ))}
                          </div>

                          {/* Methodologies */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {pillar.methodologies.map((method, mIdx) => (
                              <span key={mIdx} className="bg-[#f1f0ec] text-[#666] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                {method}
                              </span>
                            ))}
                          </div>

                          {/* Reference */}
                          <p className="text-[12px] font-mono text-[#aaa] mb-6 leading-relaxed">
                            {pillar.reference}
                          </p>

                          {/* Status */}
                          <div className="inline-flex items-center gap-2 bg-[#f1f0ec] text-[#111] text-[12px] font-bold px-4 py-2 rounded-lg uppercase tracking-wider">
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {pillar.status}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
