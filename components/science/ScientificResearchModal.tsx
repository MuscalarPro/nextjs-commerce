"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment } from "react";

interface ScientificResearchModalProps {
  isOpen: boolean;
  close: () => void;
}

export default function ScientificResearchModal({ isOpen, close }: ScientificResearchModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
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
                onClick={close}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-100 transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              <div className="mt-8">
                <div className="space-y-20">

                  {/* Three Hallmarks */}
                  <div className="border-b border-neutral-200 pb-16">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
                      {/* Left Column */}
                      <div className="w-full lg:w-[35%] flex-shrink-0">
                        <h5 className="text-sm font-bold text-neutral-400 uppercase mb-4">
                          Scientific Research
                        </h5>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#1f3b37]">
                          Three Hallmarks
                        </h2>
                      </div>
                      {/* Right Column */}
                      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          { title: "Mitophagy", hallmark: "Hallmark 01", stress: "Mitochondrial Dysfunction", molecule: "Urolithin A", content: "Activates PINK1/Parkin pathway to selectively remove damaged mitochondria and trigger biogenesis of new ones." },
                          { title: "Autophagy", hallmark: "Hallmark 02", stress: "Proteotoxic Stress", molecule: "Spermidine", content: "Inhibits EP300 to derepress autophagy genes, clearing misfolded proteins and damaged organelles via AMPK/mTOR." },
                          { title: "Nrf2 Defense", hallmark: "Hallmark 03", stress: "Oxidative Damage", molecule: "S-Allyl Cysteine", content: "Activates Nrf2 master switch to upregulate glutathione, SOD, and catalase — shielding rebuilt cells from ROS damage." }
                        ].map((item, idx) => (
                          <div key={idx} className="rounded-2xl border border-neutral-100 bg-neutral-50 p-6 text-center">
                            <p className="text-[10px] font-bold uppercase text-neutral-400 mb-3">{item.hallmark}</p>
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-neutral-200 flex items-center justify-center">
                              <div className="w-5 h-5 rounded-full bg-[#1f3b37]" />
                            </div>
                            <p className="text-[10px] font-bold uppercase text-[#1f3b37] mb-1">{item.stress}</p>
                            <h3 className="text-xl font-medium text-neutral-900 mb-1">{item.title}</h3>
                            <span className="inline-block px-2 py-0.5 bg-neutral-100 text-neutral-500 text-[9px] font-bold uppercase rounded-full border border-neutral-200 mb-3">{item.molecule}</span>
                            <p className="text-sm text-neutral-500">{item.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* The Layer Zero Protocol + Table */}
                  <div className="border-b border-neutral-200 pb-16">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
                      {/* Left Column */}
                      <div className="w-full lg:w-[35%] flex-shrink-0">
                        <h5 className="text-sm font-bold text-neutral-400 uppercase mb-4">
                          The Layer Zero Protocol
                        </h5>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#1f3b37]">
                          Cellular Defense Matrix
                        </h2>
                      </div>
                      {/* Right Column */}
                      <div className="flex-1">
                        <div className="prose prose-lg text-neutral-600 mb-8 max-w-none">
                          <p className="text-base text-neutral-500">
                            M3 rewires mitochondrial decline with clinical Urolithin A for strength and endurance gains, Spermidine for autophagy, and S-allyl cysteine for cellular protection — delivering peak power now and longevity resilience for decades. This Layer Zero protocol elevates VO₂ max, cognition, and muscle function beyond training alone, targeting the cellular OS that powers human performance.
                          </p>
                        </div>

                        {/* Ingredient Table - Premium Styling */}
                        <div className="overflow-hidden rounded-2xl border border-neutral-200">
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-neutral-600">
                              <thead className="bg-neutral-50 border-b border-neutral-200">
                                <tr>
                                  <th className="px-4 md:px-6 py-4 font-semibold text-[#1f3b37] whitespace-nowrap">Active Ingredient</th>
                                  <th className="px-4 md:px-6 py-4 font-semibold text-[#1f3b37] whitespace-nowrap text-right">Per Capsule</th>
                                  <th className="px-4 md:px-6 py-4 font-semibold text-[#1f3b37] whitespace-nowrap text-right">Per Serving (2 Caps)</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-neutral-200 bg-white">
                                {[
                                  { name: "Punica Granatum Extract", sub: "Standardized to Urolithin A", capsule: "500 mg", serving: "1,000 mg" },
                                  { name: "Wheat Germ Extract", sub: "Standardized to Spermidine", capsule: "3 mg", serving: "6 mg" },
                                  { name: "Allium Sativum Extract", sub: "Standardized to S-Allyl Cysteine", capsule: "0.5 mg", serving: "1 mg" }
                                ].map((row, idx) => (
                                  <tr key={idx} className="hover:bg-neutral-50/50">
                                    <td className="px-4 md:px-6 py-4">
                                      <p className="font-semibold text-neutral-800">{row.name}</p>
                                      <p className="text-[12px] text-neutral-400">{row.sub}</p>
                                    </td>
                                    <td className="px-4 md:px-6 py-4 text-right text-neutral-500 font-medium">{row.capsule}</td>
                                    <td className="px-4 md:px-6 py-4 text-right text-[#1f3b37] font-bold">{row.serving}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <p className="mt-4 text-[11px] text-neutral-400 font-medium uppercase">
                          Serving size: Two capsules/day · 60 vegetarian capsules per container<br />
                          Other: Veg. cellulose capsule shell, magnesium stearate, polyvinylpyrrolidone
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Clinical Evidence by Molecule */}
                  <div className="border-b border-neutral-200 pb-16">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
                      {/* Left Column */}
                      <div className="w-full lg:w-[35%] flex-shrink-0">
                        <h5 className="text-sm font-bold text-neutral-400 uppercase mb-4">
                          Clinical Findings
                        </h5>
                      </div>
                      {/* Right Column */}
                      <div className="flex-1 space-y-12">
                        {[
                          { id: "01", layer: "LAYER 1", molecule: "Urolithin A", dosage: "1,000mg / day", content: "Randomized, double-blind, placebo-controlled trials in overweight adults aged 40–64 demonstrated: +12% hamstring muscle strength (knee flexion/extension), +10.2% peak VO₂ and +14.3% estimated VO₂max, activation of mitochondrial biomarkers including phosphorylated Parkin (Ser65) and OXPHOS protein expression in skeletal muscle.", studies: ["Cell Reports Medicine (2022)", "JAMA Network Open (2022)", "+39% mito renewal"] },
                          { id: "02", layer: "LAYER 2", molecule: "Spermidine", dosage: "6mg / day", content: "Controlled interventional studies demonstrated: increased activated muscle stem cells (Pax7+/MyoD+) and muscle fiber cross-sectional area via mTOR signaling, improved cardiac ejection fraction and fractional shortening, and upregulation of mitochondrial biogenesis pathways (SIRT1/PGC-1α/TFAM).", studies: ["Cell Discovery (2024)", "SIRT1/PGC-1a/TFAM"] },
                          { id: "03", layer: "LAYER 3", molecule: "S-Allyl Cysteine", dosage: "1mg / day", content: "Controlled human exercise and preclinical studies demonstrated: 65% reduced muscle mass loss, +8% critical power output, +18% time to fatigue, and Nrf2-mediated upregulation of Phase II detoxification enzymes with ~98% oral bioavailability.", studies: ["Nrf2 activation", "~98% bioavailability"] }
                        ].map((row, idx) => (
                          <div key={idx} className="border-b border-neutral-100 last:border-0 pb-10 last:pb-0">
                            <div className="flex items-start gap-4 mb-4">
                              {/* <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-[10px] font-bold text-neutral-800 mt-1 shrink-0">
                                {row.id}
                              </div> */}
                              <div>
                                <h3 className="text-xl font-medium text-neutral-900">{row.molecule}</h3>
                                <span className="text-[10px] text-neutral-400 font-bold uppercase">{row.layer} · {row.dosage}</span>
                              </div>
                            </div>
                            <p className="text-base text-neutral-500 mb-6" dangerouslySetInnerHTML={{ __html: row.content }} />
                            <div className="flex flex-wrap gap-2">
                              {row.studies.map((tag, tIdx) => (
                                <span key={tIdx} className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-500 rounded-lg border border-neutral-100 uppercase flex items-center">{tag}</span>
                              ))}
                            </div>
                          </div>
                        ))}

                        {/* FINAL SUMMARY CALLOUT */}
                        <div className="mt-16 bg-neutral-50/50 p-8 md:p-12">
                          <p className="text-neutral-500 italic font-light body-text-sm">
                            This is synergistically combined — Urolithin A removes damaged mitochondria, Spermidine enhances autophagy for cellular cleanup, and S-allyl cysteine fortifies mitochondrial resilience against training-induced stress. The result is a protocol that unlocks elite VO2 max, unbreakable endurance, razor-sharp cognition, and mitochondrial longevity — architecting the peak human you were coded for.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
