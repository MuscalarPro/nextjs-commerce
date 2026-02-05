"use client";

import {
  mitopureBenefitClaims,
  mitopureBenefitImages,
  mitopureBenefitsData,
} from "data/homePageData";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

const BENEFIT_DETAILS = {
  Renewal: {
    title: "Renewal",
    tagline: "Mitochondrial Renewal",
    molecule: "Urolithin-A (1000mg)",
    chartTitle: "Mitophagy Activation",
    stat: "+39%",
    statLabel: "Mitophagy activation over placebo*",
    description: "Clinically proven to activate mitophagy, the cellular renewal process that clears out damaged mitochondria.",
    details: {
      title: "MUSCULAR PRO M3: Mitochondrial Renewal",
      subtitle: "Urolithin-A (1000mg)",
      proven: "Clinically proven benefits: Mitophagy Activation",
      content: `We conducted a randomized, double-blind, placebo-controlled clinical trial with middle-aged adults aged 40-64 years. After 4 months, participants who received daily doses of 500-1000mg Urolithin A demonstrated significant activation of mitophagy markers in skeletal muscle, with phosphorylated Parkin (Ser65) levels increasing significantly compared to placebo. Mitochondrial OXPHOS protein expression increased dose-dependently, with Complex I, II, and III showing significant elevation.`,
      methodology: {
          participantsLabel: "Participants",
          participants: "88 healthy, overweight, middle-aged subjects aged 40 to 64 years",
          protocol: "Randomized, double-blind, placebo-controlled — the \"gold standard\" in studies",
          objective: "Investigate the efficacy of Urolithin A on mitophagy activation and mitochondrial health in otherwise healthy middle-aged, overweight individuals" 
      }
    }
  },
  Energy: {
    title: "Energy",
    tagline: "Bioenergetic Optimization",
    molecule: "Spermidine (6mg)",
    chartTitle: "Mitochondrial Bioenergetics",
    stat: "+55%",
    statLabel: "Maximal respiration capacity*",
    description: "Enhances mitochondrial respiration and ATP production, fueling your cells for peak performance.",
    details: {
      title: "Spermidine (6mg)",
      subtitle: "Autophagy Enhancement & Bioenergetic Optimization",
      proven: "Clinically proven benefits: Autophagy Enhancement & Bioenergetic Optimization",
      content: `Research on human-induced pluripotent stem cell-derived neurons demonstrated that 48-hour treatment with spermidine significantly enhanced mitochondrial respiration in aged neurons by +27% for basal oxygen consumption. Spermidine treatment augmented maximal respiration capacity by +55% in young neurons and +88% spare respiratory capacity in aged neurons, while simultaneously increasing ATP production-coupled respiration by +28%.

Clinical case reports using 6mg/day spermidine supplementation (divided into three 2mg doses) over 3 months demonstrated improved autophagic flux and autophagosome-lysosome fusion in patients with autophagy disorders.`,
       methodology: {
          participantsLabel: "Participants",
          participants: "Young and aged human iPSC-derived neurons representing cellular aging models",
          protocol: "Controlled laboratory study measuring mitochondrial bioenergetics parameters including oxygen consumption rate, ATP production, and mitochondrial membrane potential",
          objective: "Investigate spermidine's protective effects on mitochondrial function and autophagy activation in aging cells" 
      }
    }
  },
  Strength: {
    title: "Strength",
    tagline: "Muscle Strength & Hypertrophy Urolithin-A (1000mg)",
    molecule: "S-Allyl Cysteine (1mg)",
    chartTitle: "Autophagy & Mitochondrial Dynamics",
    stat: "3.2x",
    statLabel: "Fold increase in autophagy markers*",
    description: "Induces autophagy and protects mitochondria under stress, supporting resilient muscle tissue.",
    details: {
      title: "S-Allyl Cysteine (1mg)",
      subtitle: "Autophagy Induction & Mitochondrial Protection",
      proven: "Clinically proven benefits: Autophagy Induction & Mitochondrial Protection",
      content: `Preclinical research demonstrated that S-allyl cysteine (SAC) significantly enhanced autophagy markers in cardiomyocytes under hypoxic conditions. SAC treatment increased expression of autophagy-related genes ATG4A, ATG4C, ATG4D, and ATG9A, while elevating protein levels of Beclin 1 and LC3-I/II — key indicators of active autophagy.

In aging models, SAC supplementation at 0.05-0.2% in diet for 12 weeks significantly improved hepatic OPA1 mRNA levels (a key mitochondrial fusion factor) and elevated mitochondrial biogenesis-related proteins SIRT1 and PGC-1α. SAC maintained linear mitochondrial morphology and regulated mitochondrial dynamics to combat cellular aging.

SAC regulates mitochondrial dynamics and ameliorates aging features to a significant degree, confirming mitochondrial health as a promising target for anti-aging interventions.`,
       methodology: {
          participantsLabel: "Model",
          participants: "Primary cardiomyocytes under hypoxia and aged mouse models (60 weeks)",
          protocol: "Controlled interventional studies with molecular analysis via RNA sequencing, RT-qPCR, and immunofluorescence",
          objective: "Investigate SAC's protective effects on autophagy activation and mitochondrial dynamics regulation during stress and aging"
      }
    }
  },
  Bioavailability: {
    title: "Bioavailability",
    tagline: "Enhanced Absorption",
    molecule: "Mitopure vs Diet",
    chartTitle: "Urolithin A Levels",
    stat: "6x",
    statLabel: "More effective than diet alone*",
    description: "Direct supplementation delivers 6x more Urolithin A than diet alone, ensuring consistent therapeutic levels.",
    details: {
      title: "Direct vs. Dietary Urolithin A",
      subtitle: "Bioavailability & Efficacy",
      proven: "Clinically proven benefits: 6x Higher Bioavailability",
      content: `Clinical studies show that only ~40% of the population produces meaningful levels of Urolithin A from dietary precursors like pomegranates due to distinct gut microbiome differences. Direct supplementation bypasses this variability, delivering precise, therapeutic dosing (500mg-1000mg) that achieves plasma levels 6-fold higher than diet alone.`,
       methodology: {
          participantsLabel: "Participants",
          participants: "Healthy adults in pharmacokinetic study",
          protocol: "Comparative bioavailability analysis", 
          objective: "Compare plasma Urolithin A levels between direct supplementation and dietary precursor intake"
      }
    }
  }
};



export function MitopureBenefitsSection() {
  const { headline, benefits, ctaLabel } = mitopureBenefitsData;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  
  const claim = mitopureBenefitClaims[selectedIndex] ?? mitopureBenefitClaims[0];
  const activeKey = benefits[selectedIndex] as keyof typeof BENEFIT_DETAILS;
  const activeData = BENEFIT_DETAILS[activeKey] || BENEFIT_DETAILS["Energy"];

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden bg-white p-4 md:p-8">
      <div className="absolute inset-0 md:inset-2 md:rounded-xl overflow-hidden">
        <Image
          src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/c92af07e442e6a81aa270a22a64da56ba026fa22-2800x1327.avif?v=1768641347"
          alt="Athletes running background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-8xl p-4 py-10 md:py-20 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            {/* Headline with dotted lines on both sides */}
            <div className="flex items-center gap-4">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-white/70 shrink-0">
                {headline}
              </span>
            </div>

            <div className="space-y-1 md:space-y-2">
              {benefits.map((benefit, index) => (
                <button
                  key={benefit}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`block w-full text-left font-semibold text-4xl md:text-6xl transition-colors duration-200 ${
                    selectedIndex === index
                      ? "text-white "
                      : "text-white/60 hover:text-white/80"
                  }`}
                >
                  {benefit}
                </button>
              ))}
            </div>

            <p className="text-sm md:text-base text-white/70 max-w-xl leading-relaxed">
              {claim}
            </p>

            <div className="pt-2">
              <button
                onClick={() => setShowDetails(true)}
                className="inline-flex px-6 py-3 border border-white text-white text-sm font-medium uppercase tracking-wide bg-transparent hover:bg-white hover:text-black transition-colors"
              >
                {ctaLabel}
              </button>
            </div>
          </div>

          <div className="lg:flex lg:justify-end">
            <div className="relative w-full max-w-md aspect-[380/385] rounded-xl overflow-hidden bg-black/50 backdrop-blur-md border border-white/10">
              <Image
                src={
                  mitopureBenefitImages[selectedIndex] ??
                  mitopureBenefitImages[0]
                }
                alt={benefits[selectedIndex] ?? benefits[0]}
                fill
                className="object-contain p-4 md:p-6"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
            </div>
          </div>
        </div>
      </div>

       {/* STUDY DETAILS DRAWER */}
       <AnimatePresence>
        {showDetails && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDetails(false)}
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
                  onClick={() => setShowDetails(false)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-100 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>

                {/* Drawer Content */}
                <div className="mt-8">
                   <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                       {/* Left Column: Title & Label */}
                       <div className="w-full lg:w-[35%] flex-shrink-0">
                           <h5 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4 leading-relaxed">Clinically proven benefits</h5>
                           <h2 className="text-5xl md:text-7xl lg:text-8xl font-normal text-[#1f3b37] tracking-tight break-all md:break-words hyphens-auto leading-[0.9]">{activeData.title}</h2>
                       </div>

                       {/* Right Column: Content & Chart */}
                       <div className="flex-1">
                           <div className="prose prose-lg text-neutral-600 mb-12 max-w-none">
                               <p className="lead font-medium text-neutral-900 mb-4 text-xl">{activeData.details.proven}</p>
                               <p className="text-base leading-relaxed text-neutral-500">{activeData.details.content}</p>
                           </div>

                           {/* Chart Section */}
                           <div className="w-full max-w-[400px]">
                                 <div className="w-full bg-white rounded-2xl">
                                     <div className="flex justify-between items-start mb-4">
                                         <div className="text-[10px] font-bold text-neutral-400 tracking-widest rotate-180 [writing-mode:vertical-lr] h-32 flex items-center justify-center">
                                            {activeData.chartTitle.toUpperCase()}
                                         </div>
                                         <div className="flex-1 pl-6 flex items-end justify-between h-[250px] gap-8 relative border-b border-neutral-300 pb-0">
                                              {/* Dashed Lines (Light) */}
                                              <div className="absolute inset-0 pointer-events-none flex flex-col justify-between text-[10px] text-neutral-300 font-mono z-0">
                                                  {[50, 40, 30, 20, 10].map(val => (
                                                      <span key={val} className="border-b border-dotted border-neutral-200 w-full text-right pr-2 h-0 flex items-center justify-end">
                                                          <span className="bg-white pl-1">{val}%</span>
                                                      </span>
                                                  ))}
                                                  <span className="w-full text-right pr-2">0</span>
                                              </div>

                                              {/* Bar 1: Placebo */}
                                              <div className="relative z-10 w-20 bg-[#E5E5E0] h-[30%] flex items-end justify-center">
                                              </div>

                                              {/* Bar 2: Active */}
                                              <div className="relative z-10 w-20 bg-[#C84136] h-[75%] flex items-end justify-center shadow-lg">
                                                  <div className="absolute top-[-50px] text-center w-[120px]">
                                                      {(() => {
                                                          const match = activeData.stat.match(/^([+]?)([\d.]+)(.*)$/);
                                                          const prefix = match ? match[1] : "";
                                                          const value = match ? match[2] : activeData.stat;
                                                          const unit = match ? match[3] : "";
                                                          
                                                          return (
                                                              <span className="text-5xl font-light text-neutral-900 tracking-tighter relative inline-block">
                                                                  {prefix && <span className="absolute -left-5 top-1 text-3xl font-light text-neutral-900">{prefix}</span>}
                                                                  {value}
                                                                  <span className="text-2xl align-top relative top-1 ml-0.5">{unit}</span>
                                                              </span>
                                                          );
                                                      })()}
                                                  </div>
                                              </div>
                                         </div>
                                     </div>
                                      <div className="flex justify-between pl-12 pr-4 text-[10px] font-bold tracking-widest text-neutral-500 uppercase mt-2">
                                          <span>Placebo</span>
                                          <div className="mt-1">
                                            <Image src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/mitopure-logo-red.png?v=1770200800" alt="Mitopure" width={60} height={20} className="object-contain" />
                                          </div>
                                      </div>
                                 </div>
                           </div>
                       </div>
                   </div>

                   {activeData.details.methodology.participants && (
                        <div className="mt-16">
                                <h3 className="text-lg font-bold mb-6 text-neutral-900">Methodology</h3>
                                <div className="border-t border-neutral-200">
                                    <div className="py-6 border-b border-neutral-200 flex flex-col md:flex-row gap-4 md:gap-12">
                                        <span className="w-32 flex-shrink-0 text-base text-neutral-900">
                                            {/* @ts-ignore */}
                                            {activeData.details.methodology.participantsLabel || "Participants"}
                                        </span>
                                        <span className="text-base text-neutral-600 leading-relaxed max-w-2xl">{activeData.details.methodology.participants}</span>
                                    </div>
                                    <div className="py-6 border-b border-neutral-200 flex flex-col md:flex-row gap-4 md:gap-12">
                                        <span className="w-32 flex-shrink-0 text-base text-neutral-900">Protocol</span>
                                        <span className="text-base text-neutral-600 leading-relaxed max-w-2xl">{activeData.details.methodology.protocol}</span>
                                    </div>
                                    <div className="py-6 border-b border-neutral-200 flex flex-col md:flex-row gap-4 md:gap-12">
                                        <span className="w-32 flex-shrink-0 text-base text-neutral-900">Objective</span>
                                        <span className="text-base text-neutral-600 leading-relaxed max-w-2xl">{activeData.details.methodology.objective}</span>
                                    </div>
                                </div>
                                
                                <p className="mt-8 text-sm text-neutral-500 leading-relaxed max-w-3xl">
                                    We are committed to conducting rigorous scientific research and sharing it with our customers, which is why we publish our work in open access, peer-reviewed journals. Read the full results of the study in Cell Reports Medicine.
                                </p>
                        </div>
                   )}
                   
                   <div className="mt-8 pt-8 border-t border-neutral-100 flex items-center justify-between">
                       <span className="text-xs text-neutral-400 uppercase tracking-widest">Published in Cell Reports Medicine</span>
                       <Image src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/mitopure-logo-red.png?v=1770200800" alt="Logo" width={80} height={30} className="opacity-50 grayscale" />
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
