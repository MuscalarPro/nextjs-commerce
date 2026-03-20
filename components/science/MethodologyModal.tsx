"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment } from "react";

interface MethodologyModalProps {
  isOpen: boolean;
  close: () => void;
}

export default function MethodologyModal({ isOpen, close }: MethodologyModalProps) {
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

                  {[
                    { id: "01", layer: "LAYER 1 — REMOVE", title: "Activate Mitophagy", molecule: "Urolithin A · 1,000mg", content: "Urolithin A is a rare postbiotic that activates the  PINK1/Parkin mitophagy pathway — your cell's quality-control mechanism for identifying and selectively removing damaged, dysfunctional mitochondria. Once cleared, the cell signals for biogenesis of new, healthy mitochondria, restoring energy production capacity at the organelle level.", sub: "PINK1/Parkin Mitophagy Pathway", flow: ["PINK1 accumulates on damaged mito", "Recruits Parkin", "Ubiquitin tagging", "Autophagosome engulfment", "Lysosomal degradation"], stats: ["+12% muscle strength", "+10.2% peak VO₂", "+39% mito renewal"], cite: "Cell Reports Medicine 2022" },
                    { id: "02", layer: "LAYER 2 — CLEAN", title: "Induce Autophagy", molecule: "Spermidine · 6mg", content: "Spermidine is a natural polyamine that inhibits EP300 acetyltransferase, derepressing autophagy genes and activating the AMPK/mTOR pathway. This triggers your cell's deep-cleaning program — clearing misfolded proteins, damaged organelles, and accumulated cellular waste that clogs intracellular machinery.", sub: "EP300/AMPK Autophagy", flow: ["EP300 inhibition", "Acetylation shift", "AMPK activation", "Autophagosome formation", "Proteostasis restored"], stats: ["Muscle stem cell activation", "Cardiac ejection fraction ↑", "SIRT1/PGC-1a/TFAM upregulation"], cite: "Cell Discovery 2024" },
                    { id: "03", layer: "LAYER 3 — PROTECT", title: "Activate Nrf2 Defense", molecule: "S-Allyl Cysteine · 1mg", content: "SAC, derived from aged garlic, activates the Nrf2 master transcription factor — the cell's central antioxidant switch. This upregulates the production of glutathione, SOD, and catalase, creating a protective shield around newly regenerated mitochondria and freshly cleaned cellular components. With ~98% oral bioavailability, SAC achieves this at remarkably small doses.", sub: "Nrf2 Antioxidant Shield", flow: ["SAC modifies Keap1", "Nrf2 translocates to nucleus", "Binds ARE promoter", "Phase II enzyme expression", "GSH/SOD/CAT elevated"], stats: ["65% reduced muscle mass loss", "+8% critical power", "+18% time to fatigue", "~98% bioavailability"] }
                  ].map((section, idx, arr) => (
                    <div key={idx} className="border-b border-neutral-200 pb-16 last:border-0 last:pb-0">
                      <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
                        {/* Left Column */}
                        <div className="w-full lg:w-[35%] flex-shrink-0 relative">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-10 h-10 flex items-center justify-center body-text-sm font-bold text-neutral-800">
                              {section.id}
                            </div>
                            <div>
                              <p className="text-[10px] font-bold uppercase text-neutral-400 mt-1">{section.layer}</p>
                              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#1f3b37] mt-1">
                                {section.title}
                              </h2>
                            </div>
                          </div>
                      
                          {/* Molecule Tag */}
                          <span className="inline-block px-3 py-1 bg-neutral-50 text-neutral-500 text-[9px] font-bold uppercase rounded-full border border-neutral-100 mt-2">
                            {section.molecule}
                          </span>
                        </div>

                        {/* Right Column */}
                        <div className="flex-1">
                          <div className="prose prose-lg text-neutral-600 mb-8 max-w-none">
                            {section.sub && <p className="lead font-medium text-neutral-900 mb-4 text-lg">{section.sub}</p>}
                            <p className="text-base text-neutral-500 whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: section.content }} />
                          </div>

                          {/* Pathway Flow */}
                          {section.flow && (
                            <div className="flex flex-wrap items-center gap-2 mb-8">
                              {section.flow.map((step, i, sarr) => (
                                <Fragment key={i}>
                                  <span className="px-3 py-1.5 bg-neutral-50 text-[11px] font-medium text-neutral-500 rounded-lg border border-neutral-100">{step}</span>
                                  {i < sarr.length - 1 && <span className="text-neutral-300 text-xs text-[10px]">→</span>}
                                </Fragment>
                              ))}
                            </div>
                          )}

                          {/* Stats */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {section.stats.map((stat, i) => (
                              <span key={i} className="px-3 py-1.5 bg-neutral-50 text-[11px] font-bold text-neutral-800 rounded-lg border border-neutral-100 uppercase">{stat}</span>
                            ))}
                          </div>
                          {section.cite && <p className="text-[10px] font-bold uppercase text-neutral-400">{section.cite}</p>}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Synergy Loop */}
                  <div className="pt-8">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
                      <div className="w-full lg:w-[35%] flex-shrink-0">
                        <h5 className="text-sm font-bold text-neutral-400 uppercase mb-4">
                          The M3 Synergy Loop
                        </h5>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-4 mb-8">
                          {["Remove damaged mito", "Clean cellular waste", "Shield the rebuild", "New mito biogenesis"].map((step, i, arr) => (
                            <Fragment key={i}>
                              <div className="flex items-center gap-2 px-4 py-2 bg-neutral-50 rounded-full border border-neutral-100">
                                <div className={`w-2 h-2 rounded-full ${i === 3 ? "bg-[#d85c41]" : "bg-[#1f3b37]"}`} />
                                <span className="text-sm font-bold text-neutral-800">{step}</span>
                              </div>
                              {i < arr.length - 1 && <span className="text-neutral-300 text-sm">→</span>}
                            </Fragment>
                          ))}
                        </div>
                        <p className="text-base text-neutral-500">
                          Each molecule reinforces the others. Mitophagy creates space for new mitochondria. Autophagy clears the pathways for cleaner cellular signaling. Antioxidant defense protects the entire cycle.
                        </p>
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
