"use client";

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

interface ScientificResearchModalProps {
  isOpen: boolean;
  close: () => void;
}

export default function ScientificResearchModal({ isOpen, close }: ScientificResearchModalProps) {
  return (
    <Transition show={isOpen}>
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
                <p className="text-xl font-semibold text-black">Scientific Research</p>
              </div>
              <button
                onClick={close}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 text-neutral-400 hover:text-black hover:border-black transition-all"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-8 py-10 space-y-16">

              {/* 3 Hallmark Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Hallmark 01</p>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#d85c41]/10 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-[#d85c41]" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#d85c41] mb-1">Mitochondrial Dysfunction</p>
                  <h3 className="heading-h3 text-black mb-1">Mitophagy</h3>
                  <span className="inline-block px-2 py-0.5 bg-red-50 text-[#d85c41] text-[9px] font-bold uppercase tracking-widest rounded-full border border-red-100 mb-3">Urolithin A</span>
                  <p className="body-text-sm text-gray-500">Activates PINK1/Parkin pathway to selectively remove damaged mitochondria and trigger biogenesis of new ones.</p>
                </div>
                {/* Card 2 */}
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Hallmark 02</p>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#1b5e20]/10 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-[#1b5e20]" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#1b5e20] mb-1">Proteotoxic Stress</p>
                  <h3 className="heading-h3 text-black mb-1">Autophagy</h3>
                  <span className="inline-block px-2 py-0.5 bg-green-50 text-[#1b5e20] text-[9px] font-bold uppercase tracking-widest rounded-full border border-green-100 mb-3">Spermidine</span>
                  <p className="body-text-sm text-gray-500">Inhibits EP300 to derepress autophagy genes, clearing misfolded proteins and damaged organelles via AMPK/mTOR.</p>
                </div>
                {/* Card 3 */}
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Hallmark 03</p>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#673ab7]/10 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-[#673ab7]" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#673ab7] mb-1">Oxidative Damage</p>
                  <h3 className="heading-h3 text-black mb-1">Nrf2 Defense</h3>
                  <span className="inline-block px-2 py-0.5 bg-purple-50 text-[#673ab7] text-[9px] font-bold uppercase tracking-widest rounded-full border border-purple-100 mb-3">S-Allyl Cysteine</span>
                  <p className="body-text-sm text-gray-500">Activates Nrf2 master switch to upregulate glutathione, SOD, and catalase — shielding rebuilt cells from ROS damage.</p>
                </div>
              </div>

              {/* Layer Zero Protocol */}
              <div className="rounded-3xl bg-gray-50 border border-gray-100 p-8 md:p-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-6">The Layer Zero Protocol</p>
                <p className="body-text text-gray-700 leading-relaxed mb-8">
                  M3 rewires mitochondrial decline with clinical Urolithin A for strength and endurance gains, Spermidine for autophagy, and S-allyl cysteine for cellular protection — delivering <span className="text-black font-semibold">peak power now and longevity resilience for decades</span>. This Layer Zero protocol elevates VO₂ max, cognition, and muscle function beyond training alone, targeting the <span className="text-black font-semibold">cellular OS that powers human performance</span>.
                </p>

                {/* Ingredient Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="pb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Active Ingredient</th>
                        <th className="pb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 text-right">Per Capsule</th>
                        <th className="pb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 text-right">Per Serving (2 Caps)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="py-4">
                          <p className="font-semibold text-black text-[14px]">Punica Granatum Extract</p>
                          <p className="text-[12px] text-gray-400">Standardized to Urolithin A</p>
                        </td>
                        <td className="py-4 text-right text-gray-600 text-[14px]">500 mg</td>
                        <td className="py-4 text-right text-[#d85c41] font-bold text-[14px]">1,000 mg</td>
                      </tr>
                      <tr>
                        <td className="py-4">
                          <p className="font-semibold text-black text-[14px]">Wheat Germ Extract</p>
                          <p className="text-[12px] text-gray-400">Standardized to Spermidine</p>
                        </td>
                        <td className="py-4 text-right text-gray-600 text-[14px]">3 mg</td>
                        <td className="py-4 text-right text-[#1b5e20] font-bold text-[14px]">6 mg</td>
                      </tr>
                      <tr>
                        <td className="py-4">
                          <p className="font-semibold text-black text-[14px]">Allium Sativum Extract</p>
                          <p className="text-[12px] text-gray-400">Standardized to S-Allyl Cysteine</p>
                        </td>
                        <td className="py-4 text-right text-gray-600 text-[14px]">0.5 mg</td>
                        <td className="py-4 text-right text-[#673ab7] font-bold text-[14px]">1 mg</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-[11px] text-gray-400 leading-relaxed">
                  Serving size: Two capsules/day · 60 vegetarian capsules per container<br />
                  Other: Veg. cellulose capsule shell, magnesium stearate, polyvinylpyrrolidone
                </p>
              </div>

              {/* Clinical Evidence by Molecule */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-10">Clinical Evidence by Molecule</p>

                {/* Urolithin A */}
                <div className="mb-12 pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#d85c41]" />
                    <h3 className="heading-h3 text-black">Urolithin A</h3>
                    <span className="text-[12px] text-gray-400 font-medium">1,000mg / day</span>
                  </div>
                  <p className="body-text-sm text-gray-600 leading-relaxed mb-6">
                    Randomized, double-blind, placebo-controlled trials in overweight adults aged 40–64 demonstrated: <span className="text-black font-semibold">+12% hamstring muscle strength</span> (knee flexion/extension), <span className="text-black font-semibold">+10.2% peak VO₂</span> and <span className="text-black font-semibold">+14.3% estimated VO₂max</span>, activation of mitochondrial biomarkers including phosphorylated Parkin (Ser65) and OXPHOS protein expression in skeletal muscle.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Cell Reports Medicine (2022)", "JAMA Network Open (2022)", "16-week RCT", "+39% mito renewal"].map((tag, i) => (
                      <span key={i} className="px-3 py-1.5 bg-gray-50 text-[11px] font-medium text-gray-500 rounded-lg border border-gray-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spermidine */}
                <div className="mb-12 pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#1b5e20]" />
                    <h3 className="heading-h3 text-black">Spermidine</h3>
                    <span className="text-[12px] text-gray-400 font-medium">6mg / day</span>
                  </div>
                  <p className="body-text-sm text-gray-600 leading-relaxed mb-6">
                    Controlled interventional studies demonstrated: increased <span className="text-black font-semibold">activated muscle stem cells (Pax7+/MyoD+)</span> and muscle fiber cross-sectional area via mTOR signaling, improved <span className="text-black font-semibold">cardiac ejection fraction and fractional shortening</span>, and upregulation of mitochondrial biogenesis pathways (SIRT1/PGC-1α/TFAM).
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Cell Discovery (2024)", "PMC Cardiovascular Research", "Stem cell activation", "mTOR signaling"].map((tag, i) => (
                      <span key={i} className="px-3 py-1.5 bg-gray-50 text-[11px] font-medium text-gray-500 rounded-lg border border-gray-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* S-Allyl Cysteine */}
                <div className="mb-4 pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#673ab7]" />
                    <h3 className="heading-h3 text-black">S-Allyl Cysteine</h3>
                    <span className="text-[12px] text-gray-400 font-medium">1mg / day</span>
                  </div>
                  <p className="body-text-sm text-gray-600 leading-relaxed mb-6">
                    Controlled human exercise and preclinical studies demonstrated: <span className="text-black font-semibold">65% reduced muscle mass loss</span>, <span className="text-black font-semibold">+8% critical power output</span>, <span className="text-black font-semibold">+18% time to fatigue</span>, and Nrf2-mediated upregulation of Phase II detoxification enzymes with <span className="text-black font-semibold">~98% oral bioavailability</span>.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["~98% bioavailability", "Nrf2 activation", "Keap1 modification", "GSH/SOD/CAT elevated"].map((tag, i) => (
                      <span key={i} className="px-3 py-1.5 bg-gray-50 text-[11px] font-medium text-gray-500 rounded-lg border border-gray-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
