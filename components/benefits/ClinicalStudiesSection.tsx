"use client";

import {
  ArrowRightIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const molecules = [
  {
    id: "urolithin-a",
    name: "Urolithin A",
    src: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/UROLITHIN_A_MOLECULE.png?v=1774851427",
  },
  {
    id: "spermidine",
    name: "Spermidine",
    src: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/SPERMIDINE_MOLECULE.png?v=1774851427",
  },
  {
    id: "sac",
    name: "S-Allyl Cysteine",
    src: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/S-ALLYL-CYSTEINE_MOLECULE.png?v=1774851427",
  },
];

export function ClinicalStudiesSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [activeMoleculeIndex, setActiveMoleculeIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMoleculeIndex((prev) => (prev + 1) % molecules.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Content for modals (Placeholders matching the Claude Artifact structure)
  const getModalContent = (title: string) => {
    switch (title) {
      case "Muscle Strength":
        return (
          <div className="flex-1 space-y-12">
            <div className="border-b border-neutral-100 last:border-0 pb-10 last:pb-0">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-medium text-neutral-900">+12% muscle strength · +14.3% estimated VO₂max</h3>
                  <span className="text-[10px] text-neutral-400 font-bold uppercase">UROLITHIN A · 1,000mg / day</span>
                </div>
              </div>
              <p className="text-base text-neutral-500 mb-6">
                1,000mg Urolithin A drove a measurable increase in hamstring muscle strength via knee flexion/extension in a 16-week randomized, double-blind, placebo-controlled trial. This is the cellular firmware upgrade your muscles have been missing — more functional mitochondria means more power per contraction.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Cell Reports Medicine (2022)</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">JAMA Network Open (2022)</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">+12% knee flexion/extension</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">n=66 · 16 weeks</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Double-blind RCT</span>
              </div>
            </div>

            <div className="border-b border-neutral-100 last:border-0 pb-10 last:pb-0">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-medium text-neutral-900">Muscle stem cell reactivation · Fiber hypertrophy</h3>
                  <span className="text-[10px] text-neutral-400 font-bold uppercase">SPERMIDINE · 6mg / day</span>
                </div>
              </div>
              <p className="text-base text-neutral-500 mb-6">
                6mg Spermidine reactivated dormant muscle satellite cells (Pax7+/MyoD+) and increased muscle fiber cross-sectional area through mTOR signaling. Your muscle&apos;s regeneration program doesn&apos;t die — it just goes to sleep. Spermidine is the wake-up call.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Cell Discovery (2024)</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Pax7+/MyoD+ activation</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">mTOR-dependent</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Fiber CSA increase</span>
              </div>
            </div>

            <div className="border-b border-neutral-100 last:border-0 pb-10 last:pb-0">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-medium text-neutral-900">65% reduced muscle loss · Anti-catabolic shield</h3>
                  <span className="text-[10px] text-neutral-400 font-bold uppercase">S-ALLYL CYSTEINE · 1mg / day</span>
                </div>
              </div>
              <p className="text-base text-neutral-500 mb-6">
                1mg SAC reduced proteolytic activity by 70% in atrophy models — meaning your muscles stop eating themselves under stress. Critical power increased +8% and time to fatigue extended +18%. The antioxidant shield that keeps your rebuilt muscle tissue from degrading.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Peer-reviewed exercise & preclinical studies</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">65% reduced mass loss</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">70% reduced proteolysis</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">+18% time to fatigue</span>
              </div>
            </div>
          </div>
        );
      case "Peak VO₂ Max":
        return (
          <div className="flex-1 space-y-12">
            <div className="border-b border-neutral-100 last:border-0 pb-10 last:pb-0">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-medium text-neutral-900">+10.2% peak VO₂ · Benefits without exercise</h3>
                  <span className="text-[10px] text-neutral-400 font-bold uppercase">UROLITHIN A · 1,000mg / day</span>
                </div>
              </div>
              <p className="text-base text-neutral-500 mb-6">
                The most striking finding: aerobic capacity improved in people who didn&apos;t change their exercise habits at all. That&apos;s not a training adaptation — it&apos;s a mitochondrial efficiency upgrade. More ATP per oxygen molecule consumed. Your cells are literally running a better engine.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">JAMA Network Open (2022)</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">+10.2% peak VO₂</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">+14.3% est. VO₂max</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">No exercise protocol</span>
              </div>
            </div>

            <div className="border-b border-neutral-100 last:border-0 pb-10 last:pb-0">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-medium text-neutral-900">Mitochondrial density ↑ · The aerobic capacity substrate</h3>
                  <span className="text-[10px] text-neutral-400 font-bold uppercase">SPERMIDINE · 6mg / day</span>
                </div>
              </div>
              <p className="text-base text-neutral-500 mb-6">
                Spermidine activated the SIRT1 → PGC-1α → TFAM biogenesis cascade — the master switch for building new mitochondria. More mitochondria per muscle fiber = more oxygen processing capacity = higher VO₂ ceiling. This is how you expand the hardware, not just optimize the software.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Cell Discovery (2024)</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">PMC Cardiovascular Research</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">SIRT1/PGC-1α/TFAM</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Mito density ↑</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Cardiac output ↑</span>
              </div>
            </div>

            <div className="border-b border-neutral-100 last:border-0 pb-10 last:pb-0">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-medium text-neutral-900">+8% critical power · Sustained output at threshold</h3>
                  <span className="text-[10px] text-neutral-400 font-bold uppercase">S-ALLYL CYSTEINE · 1mg / day</span>
                </div>
              </div>
              <p className="text-base text-neutral-500 mb-6">
                When you&apos;re at VO₂ max, your mitochondria are flooding with reactive oxygen species. SAC&apos;s Nrf2-driven antioxidant shield (glutathione, SOD, catalase) neutralizes this damage in real time — letting you sustain power output at threshold for longer. That&apos;s the difference between fading at minute 8 and pushing through to minute 12.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Peer-reviewed exercise physiology studies</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">+8% critical power</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">ROS neutralized at threshold</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">+18% time to exhaustion</span>
              </div>
            </div>
          </div>
        );
      case "Brain Health":
        return (
          <div className="flex-1 space-y-12">
            <div className="border-b border-neutral-100 last:border-0 pb-10 last:pb-0">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-medium text-neutral-900">Neuronal mitophagy · Hippocampal protection</h3>
                  <span className="text-[10px] text-neutral-400 font-bold uppercase">UROLITHIN A · 1,000mg / day</span>
                </div>
              </div>
              <p className="text-base text-neutral-500 mb-6">
                Your brain burns 20% of your body&apos;s energy but weighs 2% of your mass. Neurons are among the most mitochondria-dense cells you have. When neuronal mitochondria fail, synaptic transmission slows, memory consolidation weakens, and neuroinflammation accelerates. Urolithin A activates the same PINK1/Parkin cleanup in brain tissue that it does in muscle — removing the broken engines before they poison the cell.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Nature Medicine (2019)</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Nat. Neuroscience reviews</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Neuronal PINK1/Parkin</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Hippocampal protection</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Neuroinflammation ↓</span>
              </div>
            </div>

            <div className="border-b border-neutral-100 last:border-0 pb-10 last:pb-0">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-medium text-neutral-900">Amyloid-β clearance · Cognitive preservation</h3>
                  <span className="text-[10px] text-neutral-400 font-bold uppercase">SPERMIDINE · 6mg / day</span>
                </div>
              </div>
              <p className="text-base text-neutral-500 mb-6">
                The brain doesn&apos;t just have an energy problem — it has a waste problem. Amyloid-β plaques and phosphorylated tau tangles accumulate when autophagy declines. Spermidine reactivates this cleanup system. In human observational cohorts, higher spermidine intake correlated with preserved cognitive function over 5-year follow-up. Your brain&apos;s garbage collection service, back online.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Cell Reports (2018)</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Am J Clin Nutr (2020)</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Amyloid-β clearance</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Tau reduction</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">5-year cognitive data</span>
              </div>
            </div>

            <div className="border-b border-neutral-100 last:border-0 pb-10 last:pb-0">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-medium text-neutral-900">Astrocyte glutathione ↑ · Synaptic shield</h3>
                  <span className="text-[10px] text-neutral-400 font-bold uppercase">S-ALLYL CYSTEINE · 1mg / day</span>
                </div>
              </div>
              <p className="text-base text-neutral-500 mb-6">
                Astrocytes are the brain&apos;s support cells — and its primary antioxidant factory. SAC activates Nrf2 specifically in astrocytes, ramping up glutathione production to protect neuronal membranes from lipid peroxidation. The result: preserved synaptic plasticity under chronic oxidative stress. Razor-sharp cognition isn&apos;t about stimulation — it&apos;s about protection.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Neuropharmacology</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Nrf2/Keap1 CNS research</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Astrocyte GSH ↑</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Lipid peroxidation ↓</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Synaptic plasticity preserved</span>
              </div>
            </div>
          </div>
        );
      case "Mitochondrial Health":
        return (
          <div className="flex-1 space-y-12">
            <div className="border-b border-neutral-100 last:border-0 pb-10 last:pb-0">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-medium text-neutral-900">+39% mitochondrial renewal · OXPHOS I–V ↑</h3>
                  <span className="text-[10px] text-neutral-400 font-bold uppercase">UROLITHIN A · 1,000mg / day</span>
                </div>
              </div>
              <p className="text-base text-neutral-500 mb-6">
                This is the core mechanism. Urolithin A doesn&apos;t just slow decline — it actively replaces your damaged mitochondria with new ones. Phosphorylated Parkin (Ser65) was elevated in human skeletal muscle biopsies, confirming active mitophagy. OXPHOS complex I through V expression increased, meaning the new mitochondria have fully functional electron transport chains. Your cellular power grid, rebuilt from the ground up.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Cell Reports Medicine (2022)</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">+39% mito renewal</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">p-Parkin (Ser65) ↑</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">OXPHOS I–V confirmed</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Human biopsies</span>
              </div>
            </div>

            <div className="border-b border-neutral-100 last:border-0 pb-10 last:pb-0">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-medium text-neutral-900">Cross-tissue biogenesis · Cardiac + skeletal + hepatic</h3>
                  <span className="text-[10px] text-neutral-400 font-bold uppercase">SPERMIDINE · 6mg / day</span>
                </div>
              </div>
              <p className="text-base text-neutral-500 mb-6">
                Spermidine doesn&apos;t just work in one tissue type — it activated the SIRT1/PGC-1α/TFAM biogenesis cascade across skeletal muscle, cardiac tissue, and liver. In the heart, this translated to measurably improved ejection fraction and fractional shortening. Your mitochondria aren&apos;t just in your muscles — they&apos;re in every organ. Spermidine addresses the whole system.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Cell Discovery (2024)</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">PMC Cardiovascular Research</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">SIRT1/PGC-1α/TFAM</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Cardiac EF improved</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Multi-organ biogenesis</span>
              </div>
            </div>

            <div className="border-b border-neutral-100 last:border-0 pb-10 last:pb-0">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-medium text-neutral-900">Inner membrane protection · Extended mito lifespan</h3>
                  <span className="text-[10px] text-neutral-400 font-bold uppercase">S-ALLYL CYSTEINE · 1mg / day</span>
                </div>
              </div>
              <p className="text-base text-neutral-500 mb-6">
                Building new mitochondria is pointless if they immediately get destroyed by oxidative damage. SAC&apos;s Nrf2-driven defense — glutathione, SOD, catalase — protects the inner mitochondrial membrane from lipid peroxidation, the #1 killer of newly formed mitochondria. This extends the functional lifespan of every mitochondrion in every cell. The bodyguard for your new cellular power plants.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Antioxidant enzyme & mitochondrial membrane studies</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">GSH/SOD/Catalase ↑</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">Lipid peroxidation ↓</span>
                <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">~98% oral bioavailability</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-[1440px] p-4 py-10 md:py-20 px-4 md:px-2 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start text-left">
          <h2 className="heading-h2">17 placebo-controlled clinical studies</h2>

          <p className="body-text">
            For over 15 years, we have built on meaningful scientific
            discoveries across Urolithin A, Spermidine, and S-Allyl Cysteine and
            put them to the scrutiny of the scientific community by publishing
            in high-impact, peer-reviewed journals.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-12 w-full">
            {/* Item 1: Muscle Strength */}
            <div 
              className="flex flex-col w-full group cursor-pointer"
              onClick={() => setActiveModal('Muscle Strength')}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <h4 className="heading-h3 group-hover:text-[#2b2b26] transition-colors">Muscle Strength</h4>
                </div>
                <div className="w-8 h-8  flex items-center justify-center flex-shrink-0  transition-all duration-300">
                  <PlusIcon className="w-10 h-10 text-[#1a1a1a]  transition-colors" />
                </div>
              </div>
              <div className="w-full border-b-[1.5px] border-dotted border-neutral-300 my-6 group-hover:border-[#1a1a1a] transition-colors"></div>
              <div className="flex flex-col gap-2">
                <p className="body-text-sm">
                  RCT in overweight adults aged 40–64, 16-week supplementation
                  at 1,000mg. Significant improvement in hamstring muscle
                  strength measured via knee flexion and extension dynamometry.
                </p>
              </div>
            </div>

            {/* Item 2: Peak VO₂ Max */}
            <div 
              className="flex flex-col w-full group cursor-pointer"
              onClick={() => setActiveModal('Peak VO₂ Max')}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* <div className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center flex-shrink-0 group-hover:border-[#1a1a1a] transition-colors">
                    <HeartIcon className="w-6 h-6 text-[#1a1a1a] stroke-1" />
                  </div> */}
                  <h4 className="heading-h3 group-hover:text-[#2b2b26] transition-colors">Peak VO₂ Max</h4>
                </div>
                <div className="w-8 h-8  flex items-center justify-center flex-shrink-0  transition-all duration-300">
                  <PlusIcon className="w-10 h-10 text-[#1a1a1a]  transition-colors" />
                </div>
              </div>
              <div className="w-full border-b-[1.5px] border-dotted border-neutral-300 my-6 group-hover:border-[#1a1a1a] transition-colors"></div>
              <div className="flex flex-col gap-2">
                <p className="body-text-sm">
                  In sedentary, overweight 40–64 year olds, 16 weeks of 1,000mg
                  Urolithin A produced measurable improvements in aerobic
                  capacity without any change in exercise regimen — suggesting
                  direct mitochondrial efficiency gains.
                </p>
              </div>
            </div>

            {/* Item 3: Brain Health */}
            <div 
              className="flex flex-col w-full group cursor-pointer"
              onClick={() => setActiveModal('Brain Health')}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* <div className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center flex-shrink-0 group-hover:border-[#1a1a1a] transition-colors">
                    <SparklesIcon className="w-6 h-6 text-[#1a1a1a] stroke-1" />
                  </div> */}
                  <h4 className="heading-h3 group-hover:text-[#2b2b26] transition-colors">Brain Health</h4>
                </div>
                <div className="w-8 h-8  flex items-center justify-center flex-shrink-0  transition-all duration-300">
                  <PlusIcon className="w-10 h-10 text-[#1a1a1a] transition-colors" />
                </div>
              </div>
              <div className="w-full border-b-[1.5px] border-dotted border-neutral-300 my-6 group-hover:border-[#1a1a1a] transition-colors"></div>
              <div className="flex flex-col gap-2">
                <p className="body-text-sm">
                  Urolithin A activated PINK1/Parkin mitophagy in neuronal
                  cells, clearing dysfunctional mitochondria that accumulate in
                  brain tissue with age. Pre-clinical models showed reduced
                  neuroinflammation markers and improved synaptic signaling in
                  hippocampal tissue.
                </p>
              </div>
            </div>

            {/* Item 4: Mitochondrial Health */}
            <div 
              className="flex flex-col w-full group cursor-pointer"
              onClick={() => setActiveModal('Mitochondrial Health')}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* <div className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center flex-shrink-0 group-hover:border-[#1a1a1a] transition-colors">
                    <SunIcon className="w-6 h-6 text-[#1a1a1a] stroke-1" />
                  </div> */}
                  <h4 className="heading-h3 group-hover:text-[#2b2b26] transition-colors">Mitochondrial Health</h4>
                </div>
                <div className="w-8 h-8   flex items-center justify-center flex-shrink-0  transition-all duration-300">
                  <PlusIcon className="w-10 h-10 text-[#1a1a1a] transition-colors" />
                </div>
              </div>
              <div className="w-full border-b-[1.5px] border-dotted border-neutral-300 my-6 group-hover:border-[#1a1a1a] transition-colors"></div>
              <div className="flex flex-col gap-2">
                <p className="body-text-sm">
                  1,000mg Urolithin A activated phosphorylated Parkin (Ser65) in
                  human skeletal muscle, increasing mitophagy flux by 39% over
                  placebo at 16 weeks. OXPHOS protein expression in skeletal
                  muscle biopsies confirmed biogenesis of new, functional
                  mitochondria with improved electron transport chain
                  efficiency.
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/studies"
            className="inline-flex items-center gap-3 bg-[#2b2b26] px-8 py-4 text-white text-xs font-bold rounded-full hover:bg-black transition-colors mt-12"
          >
            Our Studies
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* RIGHT IMAGE - AUTO CYCLING MOLECULES */}
        <div className="flex justify-center md:items-center md:justify-end w-full md:sticky md:top-36 h-[400px] md:h-[600px]">
          <div className="relative w-full max-w-xl aspect-square flex items-center justify-center">
            <AnimatePresence mode="wait">
              {molecules[activeMoleculeIndex] && (
                <motion.div
                  key={molecules[activeMoleculeIndex].id}
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: 10 }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.16, 1, 0.3, 1] // Custom ease-out
                  }}
                  className="absolute inset-0"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={molecules[activeMoleculeIndex].src}
                      alt={molecules[activeMoleculeIndex].name}
                      fill
                      className="object-contain"
                      priority
                    />
                    {/* Subtle glow behind the molecule */}
                    <div className="absolute inset-0 bg-radial-gradient from-white/20 to-transparent -z-10 blur-3xl opacity-50" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* MODAL OVERLAY */}
      <AnimatePresence>
        {activeModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[70] w-full lg:w-[80vw] max-w-[1400px] bg-white text-neutral-900 shadow-2xl overflow-y-auto"
            >
              <div className="p-8 md:p-12 lg:p-20">
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-100 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>

                <div className="mt-8 border-b border-neutral-200 pb-16">
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
                    {/* Left Column */}
                    <div className="w-full lg:w-[35%] flex-shrink-0">
                      <h5 className="text-sm font-bold text-neutral-400 uppercase mb-4">
                        Clinical Finding Details
                      </h5>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#1f3b37]">
                        {activeModal}
                      </h2>
                    </div>
                    {/* Right Column */}
                    <div className="flex-1">
                      {getModalContent(activeModal)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
