"use client";

import {
  ArrowRightIcon,
  BeakerIcon,
  BugAntIcon,
  ClockIcon,
  NoSymbolIcon,
  PlusIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center rounded-full bg-[#fcf5f3] px-3 py-1 text-[10px] md:text-[11px] font-mono tracking-widest text-[#d85c41] mt-4 w-fit">
    <ArrowRightIcon className="w-3 h-3 stroke-2 mr-2" />
    <span className=" pt-0.5">{children}</span>
  </div>
);

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-3 text-[14px] md:text-[15px] font-normal text-[#666666]    items-start">
    <span className="text-[#e2a898] text-xl mt-[-2px] flex-shrink-0">
      •
    </span>
    <span>{children}</span>
  </li>
);

const CardBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded bg-[#fdf2f0] px-2 py-1 text-[8px] lg:text-[9px] font-mono font-bold tracking-[0.1em] text-[#dc5a41] uppercase">
    {children}
  </span>
);

const ingredientsData: { title: string; content: React.ReactNode }[] = [
  {
    title: "World's Best Manufacturing Standards",
    content: (
      <div className="flex flex-col gap-6">
        <p className="text-[14px] md:text-[15px] text-[#666666]    max-w-4xl font-normal">
          All active ingredients in MUSCALARPRO™ [M3] are manufactured in a{" "}
          <strong>US-FDA approved facility</strong> that adheres to current Good
          Manufacturing Practices (cGMP). This means every step from raw
          material sourcing to final encapsulation meets pharmaceutical-grade
          quality controls mandated by the U.S. Food and Drug Administration.
        </p>
        <ul className="flex flex-col gap-4 max-w-4xl">
          <ListItem>
            Facility undergoes routine FDA inspections and maintains compliance
            with 21 CFR Part 111 (cGMP for dietary supplements)
          </ListItem>
          <ListItem>
            All raw materials verified for identity, purity, and composition
            prior to manufacturing
          </ListItem>
          <ListItem>
            Full batch traceability from raw ingredient sourcing through
            finished product
          </ListItem>
          <ListItem>
            Environmental monitoring (ISO Class 7/8 cleanroom conditions) during
            encapsulation
          </ListItem>
          <ListItem>
            FSSC 22000 certified food safety management system
          </ListItem>
        </ul>
        <div>
          <Badge>FDA 21 CFR Part 111 · cGMP Compliance</Badge>
        </div>
      </div>
    ),
  },
  {
    title: "Safety & MOA Validated in Pre-Clinical Studies",
    content: (
      <div className="flex flex-col gap-6">
        <p className="text-[14px] md:text-[15px] text-[#666666]    max-w-4xl font-normal">
          Before any human trial, the safety profile and{" "}
          <strong>mechanism of action (MOA)</strong> of each M3 ingredient was
          validated through independent pre-clinical studies. This foundational
          research establishes the biological pathways each molecule targets and
          confirms safety at the formulated dose.
        </p>
        <ul className="flex flex-col gap-4 max-w-5xl">
          <ListItem>
            <strong>Urolithin A (1,000mg):</strong> Pre-clinical studies
            confirmed activation of the PINK1/Parkin mitophagy pathway and
            demonstrated improved mitochondrial biogenesis in muscle tissue
            models
          </ListItem>
          <ListItem>
            <strong>Spermidine (6mg):</strong> Validated to inhibit EP300
            acetyltransferase and induce autophagy via AMPK/mTOR signaling in
            independently conducted cell and animal models
          </ListItem>
          <ListItem>
            <strong>S-Allyl Cysteine (1mg):</strong> Demonstrated Nrf2
            transcription factor activation and upregulation of glutathione,
            SOD, and catalase in pre-clinical oxidative stress models
          </ListItem>
          <ListItem>
            All three molecules underwent acute and sub-chronic toxicology
            screening at supra-therapeutic doses
          </ListItem>
        </ul>
        <div>
          <Badge>Published in peer-reviewed journals</Badge>
        </div>
      </div>
    ),
  },
  {
    title: "Randomized Double-Blind Placebo-Controlled Human Clinical Trials",
    content: (
      <div className="flex flex-col gap-6">
        <p className="text-[14px] md:text-[15px] text-[#666666]    max-w-4xl font-normal">
          Every key ingredient in M3 has undergone the{" "}
          <strong>gold standard of clinical evidence</strong> randomized,
          double-blind, placebo-controlled human trials. Participants received
          either the active compound or placebo, with neither participants nor
          researchers knowing which, eliminating bias from the results.
        </p>
        <ul className="flex flex-col gap-4 max-w-6xl">
          <ListItem>
            <strong>Urolithin A:</strong> 1,000mg shown to increase hamstring
            muscle strength by +12%, improve peak VO₂ by +10.2%, and activate
            mitochondrial biomarkers (phosphorylated Parkin Ser65, OXPHOS
            proteins) in overweight 40-64 year olds
          </ListItem>
          <ListItem>
            <strong>Spermidine:</strong> 6mg shown to increase activated muscle
            stem cells (Pax7+/MyoD+), improve cardiac function (ejection
            fraction), and upregulate mitochondrial biogenesis
            (SIRT1/PGC-1α/TFAM)
          </ListItem>
          <ListItem>
            <strong>S-Allyl Cysteine:</strong> 1mg shown to reduce muscle mass
            loss by 65%, increase critical power by +8%, and upregulate
            glutathione and antioxidant enzyme systems
          </ListItem>
        </ul>
        <div>
          <Badge>
            Cell Reports Medicine (2022) · JAMA Network Open (2022) · Cell
            Discovery (2024)
          </Badge>
        </div>
      </div>
    ),
  },
  {
    title: "Independent Third-Party Testing   5 Pillars",
    content: (
      <div className="flex flex-col gap-6">
        <p className="text-[14px] md:text-[15px] text-[#666666]    max-w-4xl font-normal">
          Every batch of MUSCALARPRO™ [M3] undergoes{" "}
          <strong>comprehensive third-party verification</strong> across five
          critical testing domains before release. No batch ships without
          passing every test.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#f2f2f2] p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <SparklesIcon
                className="w-5 h-5 text-gray-800"
                strokeWidth={1.5}
              />
              <h4 className="text-[10px] font-bold tracking-widest text-[#2c2c2c] uppercase">
                Purity & Contamination
              </h4>
            </div>
            <p className="text-[13px] text-[#6b6b6b]    font-medium">
              Heavy metals (<strong>lead, arsenic, cadmium, mercury</strong>)
              screened via ICP-MS. Plus pesticide residues, residual solvents,
              and allergen testing.
            </p>
            <div className="mt-auto flex flex-wrap gap-2 pt-3">
              <CardBadge>ICP-MS</CardBadge>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#f2f2f2] p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <BugAntIcon className="w-5 h-5 text-gray-800" strokeWidth={1.5} />
              <h4 className="text-[10px] font-bold tracking-widest text-[#2c2c2c] uppercase">
                Microbiological Safety
              </h4>
            </div>
            <p className="text-[13px] text-[#6b6b6b]    font-medium">
              Total aerobic microbial count (TAMC), yeast & mold, pathogens{" "}
              <strong>Salmonella, E. coli, Staphylococcus</strong> screening.
            </p>
            <div className="mt-auto flex flex-wrap gap-2 pt-3">
              <CardBadge>PCR</CardBadge>
              <CardBadge>ELISA</CardBadge>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#f2f2f2] p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <NoSymbolIcon
                className="w-5 h-5 text-gray-800"
                strokeWidth={1.5}
              />
              <h4 className="text-[10px] font-bold tracking-widest text-[#2c2c2c] uppercase">
                Banned Substances
              </h4>
            </div>
            <p className="text-[13px] text-[#6b6b6b]    font-medium">
              Screening for <strong>300+ prohibited substances</strong>{" "}
              including anabolic steroids, stimulants, and masking agents per
              WADA/anti-doping protocols.
            </p>
            <div className="mt-auto flex flex-wrap gap-2 pt-3">
              <CardBadge>WADA PROTOCOL</CardBadge>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#f2f2f2] p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <ClockIcon className="w-5 h-5 text-gray-800" strokeWidth={1.5} />
              <h4 className="text-[10px] font-bold tracking-widest text-[#2c2c2c] uppercase">
                Stability & Shelf Life
              </h4>
            </div>
            <p className="text-[13px] text-[#6b6b6b]    font-medium">
              <strong>Accelerated and real-time stability testing</strong> under
              various temperature/humidity conditions ensures potency from Day 1
              through expiration.
            </p>
            <div className="mt-auto flex flex-wrap gap-2 pt-3">
              <CardBadge>ICH Q1A</CardBadge>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#f2f2f2] p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <BeakerIcon className="w-5 h-5 text-gray-800" strokeWidth={1.5} />
              <h4 className="text-[10px] font-bold tracking-widest text-[#2c2c2c] uppercase">
                Potency Assay
              </h4>
            </div>
            <p className="text-[13px] text-[#6b6b6b]    font-medium">
              Quantitative analysis of active/marker compounds.{" "}
              <strong>Label claim verification</strong> on every batch what's on
              the label is in the capsule.
            </p>
            <div className="mt-auto flex flex-wrap gap-2 pt-3">
              <CardBadge>HPLC</CardBadge>
              <CardBadge>GC-MS</CardBadge>
              <CardBadge>ICP-MS</CardBadge>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "NSF Certified for Sport",
    content: (
      <div className="flex flex-col gap-6">
        <p className="text-[14px] md:text-[15px] text-[#666666]    max-w-4xl font-normal">
          <strong>NSF Certified for Sport®</strong> is the gold standard for
          athletes. It means every batch of M3 is independently tested and
          certified to be free of 300+ substances banned by major athletic
          organizations including the NFL, MLB, NHL, NBA, PGA, LPGA, CCES, CISM,
          and others.
        </p>
        <ul className="flex flex-col gap-4 max-w-4xl">
          <ListItem>
            Product tested for compliance with NSF/ANSI 173 Dietary Supplements
            standard
          </ListItem>
          <ListItem>
            Confirms label accuracy every ingredient and dose verified
          </ListItem>
          <ListItem>
            Manufacturing facility audited against GMP standards by NSF
            International
          </ListItem>
          <ListItem>
            Ongoing batch-by-batch testing, not just one-time certification
          </ListItem>
        </ul>
        <div>
          <Badge>NSF International · Certified for Sport Program</Badge>
        </div>
      </div>
    ),
  },
  {
    title: "SMETA / SEDEX Ethical Audit",
    content: (
      <div className="flex flex-col gap-6">
        <p className="text-[14px] md:text-[15px] text-[#666666]    max-w-4xl font-normal">
          Our manufacturing partners are audited under{" "}
          <strong>SMETA (Sedex Members Ethical Trade Audit)</strong> the world's
          most widely used social audit procedure. This ensures ethical labor
          practices, health and safety standards, environmental responsibility,
          and business integrity across our entire supply chain.
        </p>
        <ul className="flex flex-col gap-4 max-w-4xl">
          <ListItem>
            SMETA 4-pillar audit: Labour Standards, Health & Safety,
            Environment, Business Ethics
          </ListItem>
          <ListItem>
            SEDEX membership enables supply chain transparency and risk
            assessment
          </ListItem>
          <ListItem>Annual re-auditing ensures continuous compliance</ListItem>
        </ul>
      </div>
    ),
  },
  {
    title: "ISO 14001 & ISO 45001 Certifications",
    content: (
      <div className="flex flex-col gap-6">
        <p className="text-[14px] md:text-[15px] text-[#666666]    max-w-4xl font-normal">
          Our facilities hold dual ISO certifications ensuring both
          environmental and occupational health excellence:
        </p>
        <ul className="flex flex-col gap-4 max-w-6xl">
          <ListItem>
            <strong>ISO 14001:</strong> Environmental Management System
            systematic framework to minimize environmental impact, reduce waste,
            and improve resource efficiency across all manufacturing operations
          </ListItem>
          <ListItem>
            <strong>ISO 45001:</strong> Occupational Health & Safety Management
            ensures worker safety and wellbeing through proactive hazard
            identification, risk assessment, and continuous improvement
            protocols
          </ListItem>
        </ul>
      </div>
    ),
  },
];

export function IngredientSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <div className="mx-auto max-w-[1440px] p-4 py-10 md:py-20 px-4 md:px-2">
        {/* Heading */}
        <h2 className="text-3xl md::text-[36px] font-medium text-gray-900">
          Rigorously tested and made from <br /> high-quality ingredients
        </h2>

        {/* Description */}
        <p className="mt-6 text-[14px] md:text-[16px] text-[#6b6b6b]    font-light">
          We believe that it's our responsibility to take the extra steps
          necessary to ensure that our products are safe and effective, and we
          are committed to upholding these high standards for all of our dietary
          supplements.
        </p>

        {/* Divider */}
        <div className="mt-8" />

        {/* Accordion List */}
        <div className="mt-0 w-4xl mx-auto">
          {ingredientsData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-[#f4ebe6]">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between py-5 lg:py-6 text-left focus:outline-none group"
                >
                  <div className="flex items-center">
                    <span
                      className={`text-xs sm:text-sm font-mono font-semibold tracking-widest w-12 md:w-16 transition-colors ${
                        isOpen ? "text-[#8e8e8e]" : "text-[#b2b2b2]"
                      }`}
                    >
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span
                      className={`text-base sm:text-[17px] font-medium transition-colors ${
                        isOpen ? "text-[#333333]" : "text-[#333333] "
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {isOpen ? (
                      <div className="w-4 h-[2px] bg-[#b2b2b2]" />
                    ) : (
                      <PlusIcon className="w-5 h-5 lg:w-[22px] lg:h-[22px] stroke-[1.5] text-[#b2b2b2]  transition-colors" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pt-1 ml-12 md:ml-16 pr-4 lg:pr-12">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
