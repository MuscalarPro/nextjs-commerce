"use client";

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

interface MethodologyModalProps {
  isOpen: boolean;
  close: () => void;
}

export default function MethodologyModal({ isOpen, close }: MethodologyModalProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={close} className="relative z-[100]">
        <Transition.Child
          as={Fragment}
          enter="transition-all ease-in-out duration-300"
          enterFrom="opacity-0 backdrop-blur-none"
          enterTo="opacity-100 backdrop-blur-[.5px]"
          leave="transition-all ease-in-out duration-200"
          leaveFrom="opacity-100 backdrop-blur-[.5px]"
          leaveTo="opacity-0 backdrop-blur-none"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition-all ease-in-out duration-300"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition-all ease-in-out duration-200"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/95 backdrop-blur-xl md:w-[600px] lg:w-[700px] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-neutral-100 flex-shrink-0">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-1">Science</p>
                <p className="text-xl font-semibold text-black">How Methodology Works</p>
              </div>
              <button
                onClick={close}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 text-neutral-400 hover:text-black hover:border-black transition-all"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-8 py-10 space-y-20">
                {/* Layer 1 - REMOVE */}
                <div className="relative pl-20">
                  <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-[#d85c41] flex items-center justify-center text-white text-xl font-bold">
                    01
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d85c41] mb-2">Layer 1 — REMOVE</p>
                    <h2 className="heading-h2 text-black mb-4">Activate Mitophagy</h2>
                    <span className="inline-block px-3 py-1 bg-red-50 text-[#d85c41] text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 border border-red-100">
                      UROLITHIN A · 1,000mg
                    </span>
                    <p className="body-text text-gray-600 leading-relaxed mb-8 max-w-2xl">
                      Urolithin A is a rare postbiotic that activates the <span className="text-black font-semibold">PINK1/Parkin mitophagy pathway</span> — your cell's quality-control mechanism for identifying and selectively removing damaged, dysfunctional mitochondria. Once cleared, the cell signals for <span className="text-black font-semibold">biogenesis of new, healthy mitochondria</span>, restoring energy production capacity at the organelle level.
                    </p>
                    
                    {/* Pathway Flow */}
                    <div className="flex flex-wrap items-center gap-3 mb-8">
                      {["PINK1 accumulates on damaged mito", "Recruits Parkin (E3 ubiquitin ligase)", "Ubiquitin tagging", "Autophagosome engulfment", "Lysosomal degradation"].map((step, i, arr) => (
                        <Fragment key={i}>
                          <span className="px-3 py-1.5 bg-gray-50 text-[11px] font-medium text-gray-500 rounded-lg border border-gray-100">
                            {step}
                          </span>
                          {i < arr.length - 1 && <span className="text-gray-300 text-xs">→</span>}
                        </Fragment>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-3">
                      {["+12% muscle strength (16 wk RCT)", "+10.2% peak VO2", "+39% mito renewal"].map((stat, i) => (
                        <span key={i} className="px-3 py-1.5 bg-gray-50 text-[11px] font-bold text-black rounded-lg border border-gray-100">
                          {stat}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Cell Reports Medicine 2022</p>
                  </div>
                </div>

                {/* Layer 2 - CLEAN */}
                <div className="relative pl-20">
                  <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-[#1b5e20] flex items-center justify-center text-white text-xl font-bold">
                    02
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1b5e20] mb-2">Layer 2 — CLEAN</p>
                    <h2 className="heading-h2 text-black mb-4">Induce Autophagy</h2>
                    <span className="inline-block px-3 py-1 bg-green-50 text-[#1b5e20] text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 border border-green-100">
                      SPERMIDINE · 6mg
                    </span>
                    <p className="body-text text-gray-600 leading-relaxed mb-8 max-w-2xl">
                    Spermidine is a natural polyamine that <span className="text-black font-semibold">inhibits EP300 acetyltransferase</span>, derepressing autophagy genes and activating the AMPK/mTOR pathway. This triggers your cell's deep-cleaning program — clearing misfolded proteins, damaged organelles, and accumulated cellular waste that clogs intracellular machinery.
                    </p>
                    
                    {/* Pathway Flow */}
                    <div className="flex flex-wrap items-center gap-3 mb-8">
                      {["EP300 inhibition", "Acetylation shift (ATG genes)", "AMPK activation / mTOR suppression", "Autophagosome formation", "Proteostasis restored"].map((step, i, arr) => (
                        <Fragment key={i}>
                          <span className="px-3 py-1.5 bg-gray-50 text-[11px] font-medium text-gray-500 rounded-lg border border-gray-100">
                            {step}
                          </span>
                          {i < arr.length - 1 && <span className="text-gray-300 text-xs">→</span>}
                        </Fragment>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-3">
                      {["Muscle stem cell activation (Pax7+/MyoD+)", "Cardiac ejection fraction ↑", "SIRT1/PGC-1a/TFAM upregulation"].map((stat, i) => (
                        <span key={i} className="px-3 py-1.5 bg-gray-50 text-[11px] font-bold text-black rounded-lg border border-gray-100">
                          {stat}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Cell Discovery 2024</p>
                  </div>
                </div>

                {/* Layer 3 - PROTECT */}
                <div className="relative pl-20">
                  <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-[#673ab7] flex items-center justify-center text-white text-xl font-bold">
                    03
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#673ab7] mb-2">Layer 3 — PROTECT</p>
                    <h2 className="heading-h2 text-black mb-4">Activate Nrf2 Antioxidant Defense</h2>
                    <span className="inline-block px-3 py-1 bg-purple-50 text-[#673ab7] text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 border border-purple-100">
                      S-ALLYL CYSTEINE · 1mg
                    </span>
                    <p className="body-text text-gray-600 leading-relaxed mb-8 max-w-3xl">
                    SAC, derived from aged garlic, activates the <span className="text-black font-semibold">Nrf2 master transcription factor</span> — the cell's central antioxidant switch. This upregulates the production of glutathione, SOD, and catalase, creating a protective shield around newly regenerated mitochondria and freshly cleaned cellular components. With <span className="text-black font-semibold">~98% oral bioavailability</span>, SAC achieves this at remarkably small doses.
                    </p>
                    
                    {/* Pathway Flow */}
                    <div className="flex flex-wrap items-center gap-3 mb-8">
                      {["SAC modifies Keap1", "Nrf2 translocates to nucleus", "Binds ARE promoter elements", "Phase II enzyme expression", "GSH/SOD/CAT elevated"].map((step, i, arr) => (
                        <Fragment key={i}>
                          <span className="px-3 py-1.5 bg-gray-50 text-[11px] font-medium text-gray-500 rounded-lg border border-gray-100">
                            {step}
                          </span>
                          {i < arr.length - 1 && <span className="text-gray-300 text-xs">→</span>}
                        </Fragment>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-3">
                      {["65% reduced muscle mass loss", "+8% critical power", "+18% time to fatigue"].map((stat, i) => (
                        <span key={i} className="px-3 py-1.5 bg-gray-50 text-[11px] font-bold text-black rounded-lg border border-gray-100">
                          {stat}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">~98% bioavailability</p>
                  </div>
                </div>

                {/* Synergy Loop Section */}
                <div className="rounded-3xl bg-gray-50 p-8 md:p-12 border border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-10 text-center">The M3 Synergy Loop</p>
                  
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 flex-wrap">
                    <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                      <div className="w-4 h-4 rounded-full bg-[#d85c41] shadow-[0_0_10px_rgba(216,92,65,0.4)]" />
                      <span className="text-[14px] font-bold text-black">Remove damaged mito</span>
                    </div>
                    <span className="text-gray-300 text-xl hidden md:block">→</span>
                    <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                      <div className="w-4 h-4 rounded-full bg-[#1b5e20] shadow-[0_0_10px_rgba(27,94,32,0.4)]" />
                      <span className="text-[14px] font-bold text-black">Clean cellular waste</span>
                    </div>
                    <span className="text-gray-300 text-xl hidden md:block">→</span>
                    <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                      <div className="w-4 h-4 rounded-full bg-[#673ab7] shadow-[0_0_10px_rgba(103,58,183,0.4)]" />
                      <span className="text-[14px] font-bold text-black">Shield the rebuild</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <span className="text-gray-300 text-xl md:hidden">↓</span>
                  </div>

                  <div className="mt-4 flex flex-col items-center">
                    <div className="flex items-center gap-3 px-8 py-4 bg-[#fdf2f0] rounded-2xl shadow-sm border border-[#fbd6d0]">
                      <div className="w-4 h-4 rounded-full bg-[#d85c41] animate-pulse" />
                      <span className="text-[15px] font-bold text-[#d85c41] uppercase tracking-wider">New mito biogenesis</span>
                    </div>
                  </div>

                  <p className="mt-12 text-center text-gray-500 body-text-sm leading-relaxed max-w-2xl mx-auto">
                    Each molecule reinforces the others. Mitophagy creates space for new mitochondria. Autophagy clears the pathways for cleaner cellular signaling. Antioxidant defense protects the entire cycle.
                  </p>
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
