"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import {
  BENEFIT_DETAILS,
  type KeyFinding,
  type MethodologyItem,
} from "../../data/home/weightLossData";

export function WeightLossSection() {
  const [activeMainTab, setActiveMainTab] = useState<"program" | "science">(
    "program",
  );
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const activeData = selectedFeature
    ? BENEFIT_DETAILS[selectedFeature as keyof typeof BENEFIT_DETAILS]
    : null;

  const handleMainTabChange = (tab: "program" | "science") => {
    setActiveMainTab(tab);
  };

  return (
    <section className="w-full flex flex-col gap-0 overflow-hidden bg-[#1a1a1a]">
      {/* SECTION 1: Top Visual (Full Width) */}
      <div className="relative w-full overflow-hidden min-h-[700px] md:min-h-[700px] flex flex-col items-center justify-between pt-16 pb-12">
        {/* Full Background Image */}
        <div className="absolute inset-x-0 bottom-0 -top-40 z-0">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Mobile_bg_2b3550d5-4c2d-4c30-879a-8111af13aa30.jpg?v=1770964596"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Desktop_bg_b7cc518a-fc72-436e-8816-fbb72bf01285.jpg?v=1770964598"
              alt="Weight Loss Background"
              className="object-cover w-full h-full mt-[40px]"
            />
          </picture>
          {/* Gradient for Text Readability */}
          <div className="absolute inset-x-0 top-0 h-[200px] bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Header Text */}
        <div className="relative z-10 text-center mb-8 mt-[-12px]">
          <h2 className="text-[1.5rem] md:text-[2.75rem] font-normal text-white tracking-tight">
            Muscle Is Your <br className="md:hidden" /> Longevity Organ
          </h2>
          <p className="mt-4 text-[1rem] md:text-[1.5rem] text-white text-[16px] md:text-xl  max-w-2xl mx-auto">
            The single most powerful predictor of healthspan isn't your weight,
            it's your musclespan
          </p>
        </div>

        {/* Spacer */}
        <div className="relative z-10 w-full flex-1 pointer-events-none" />
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-[60%] right-[10%] md:top-[40%] md:right-[30%] bg-white/20 backdrop-blur-md border border-white/30 p-6 rounded-2xl text-white  min-w-[160px]"
        >
          <p className="text-md font-medium mb-4 text-white/90">Month 3</p>
          <div className="flex items-end justify-between gap-4">
            <span className="text-xl font-normal tracking-tight">LBM 3lbs</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-green-300 mb-1"
            >
              <path
                fillRule="evenodd"
                d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </motion.div>
        {/* Floating Toggle Pill */}
        <div className="relative z-20 mt-8 mb-4">
          <div className="bg-black/40 backdrop-blur-md border border-white/20 p-1.5 rounded-full flex gap-1">
            <button
              onClick={() => handleMainTabChange("program")}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeMainTab === "program"
                  ? "bg-white text-black"
                  : "text-white/80 hover:text-white font-medium"
              }`}
            >
              GLP-1
            </button>
            <button
              onClick={() => handleMainTabChange("science")}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeMainTab === "science"
                  ? "bg-white text-black"
                  : "text-white/80 hover:text-white font-medium"
              }`}
            >
              GLP-1 + M3
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 2: Content Card (Dark Green) */}
      <div className="w-full relative px-4 md:px-6 pb-12 md:pb-16 mt-[-40px] z-30">
        {/* === PROGRAM TAB LAYOUT === */}
        {activeMainTab === "program" ? (
          /* === PROGRAM TAB: Grid Layout === */
          <div className="flex flex-col gap-2 max-w-5xl mx-auto ">
            {/* Top: Meds Image (Full Width) */}
            <div className="relative w-full rounded-2xl bg-white/10 backdrop-blur-md overflow-hidden min-h-[700px] md:min-h-[500px] group py-10 md:py-0">
              {/* Text Content (Left Side) */}
              <div className="absolute top-10 left-0 right-0 mx-auto md:left-8 md:ml-0 z-20 max-w-[350px] text-center md:text-left pointer-events-none px-4">
                <h3 className="text-[1.5rem] md:text-[2.75rem] text-white font-normal leading-[1.1] tracking-tight mb-5">
                  Muscle Loss on GLP-1
                </h3>
                <p className="text-white/30 text-xs">
                  Muscle loss is a common side effect of GLP-1 injections, but
                  it can be prevented with proper nutrition and exercise.
                </p>
              </div>

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-y-0 left-0 w-1/2 z-10 " />

              <Image
                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Adobe_Express_2026-02-11_19.30.58.png?v=1771245040"
                alt="GLP-1 Medications"
                fill
                className="object-contain object-center w-full h-full transform transition-transform duration-700 group-hover:scale-105"
              />

              {/* 'Learn more' Button (Bottom Right) */}
              <div className="absolute bottom-14 md:bottom-12 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-8 md:bottom-2 z-20 block">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    onClick={() => setSelectedFeature("GLP-1 injections")}
                    className="px-8 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-black hover:text-white transition-all"
                  >
                    Learn more
                  </button>
                </motion.div>
              </div>
              <p className="absolute bottom-2 left-4 right-4 md:left-auto md:right-8 text-white/30 text-[10px] text-center md:text-right md:max-w-[350px]">
                *Muscle loss is a common side effect of GLP-1 injections, but it
                can be prevented with proper nutrition and exercise.
              </p>
            </div>

            {/* Bottom Grid: Chart & Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              {/* Left Column: Muscle Loss Chart Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-center items-center relative group overflow-hidden transition-all min-h-[300px]">
                {/* Chart Image */}
                <div className="w-full max-w-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Chart_3.png?v=1770816860"
                    alt="Muscle Loss Chart"
                    width={600}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Right Column: Stat Cards */}
              <div className="flex flex-col gap-2 h-full">
                {/* Stat Card 1 */}
                <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden group min-h-[200px]">
                  <div className="flex flex-col gap-3">
                    <div>
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-4xl md:text-5xl font-normal text-white tracking-tight">
                          ~25
                        </span>
                        <span className="text-xl md:text-2xl text-white/60">
                          %
                        </span>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed ">
                        Lose strength on GLP-1 in 6 months
                      </p>
                      <div className="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "63%" }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="bg-[#FF2E93] h-full rounded-full"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden relative flex-shrink-0 bg-white/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black -z-10" />
                      </div>
                      <span className="text-sm font-bold text-white/90">
                        Strength Risk
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stat Card 2 */}
                <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden group min-h-[200px]">
                  <div className="flex flex-col gap-3">
                    <div>
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-4xl md:text-5xl font-normal text-white tracking-tight">
                          44
                        </span>
                        <span className="text-xl md:text-2xl text-white/60">
                          %
                        </span>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed max-w-[200px]">
                        find elevated risk
                      </p>
                      <div className="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "44%" }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="bg-[#FF2E93] h-full rounded-full"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden relative flex-shrink-0 bg-white/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 -z-10" />
                      </div>
                      <span className="text-sm font-bold text-white/90">
                        Heart Disease Risk
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* === SCIENCE TAB LAYOUT === */
          <div className="flex flex-col gap-2 max-w-5xl mx-auto">
            {/* Top: M3 Image (Full Width) */}
            <div className="relative w-full rounded-2xl bg-white/10 backdrop-blur-md overflow-hidden min-h-[700px] md:min-h-[500px] group py-10 md:py-0">
              {/* Text Content (Left Side) */}
              <div className="absolute top-10 left-0 right-0 mx-auto md:left-8 md:ml-0 z-20 max-w-[350px] text-center md:text-left pointer-events-none px-4">
                <h3 className="text-3xl md:text-4xl text-white font-normal leading-[1.1] tracking-tight mb-5">
                  Muscle Strength and Hypertrophy on [M3]
                </h3>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-y-0 left-0 w-1/2 z-10 " />

              {/* Hero Image */}
              <Image
                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Left_image_493fb53b-901c-4c7a-b03c-b4063f608471.png?v=1771245120"
                alt="GLP-1 + M3"
                fill
                className="object-contain w-full h-full transform transition-transform duration-700 group-hover:scale-105"
              />

              {/* 'Learn more' Button */}
              <div className="absolute bottom-14 md:bottom-12 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-8 md:bottom-2 z-20 block">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    onClick={() => setSelectedFeature("GLP-1 + M3")}
                    className="px-8 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-black hover:text-white transition-all"
                  >
                    Learn more
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Bottom Grid: Chart & Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              {/* Left Column: Chart Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-center items-center relative group overflow-hidden transition-all min-h-[300px]">
                {/* Chart Image */}
                <div className="w-full max-w-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Chart_1_1.png?v=1770797866"
                    alt="M3 Chart"
                    width={600}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Right Column: Stat Cards */}
              <div className="flex flex-col gap-2 h-full">
                {/* Stat Card 1 */}
                <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden group min-h-[200px]">
                  <div className="flex flex-col gap-3">
                    <div>
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-4xl md:text-5xl font-normal text-white tracking-tight">
                          39
                        </span>
                        <span className="text-xl md:text-2xl text-white/60">
                          %
                        </span>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed max-w-[200px]">
                        increase in mitophagy
                      </p>
                      <div className="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "39%" }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="bg-[#C84136] h-full rounded-full"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden relative flex-shrink-0 bg-white/10 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-black -z-10" />
                      </div>
                      <span className="text-sm font-bold text-white/90">
                        Mitochondrial Renewal
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stat Card 2 */}
                <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden group min-h-[200px]">
                  <div className="flex flex-col gap-3">
                    <div>
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-4xl md:text-5xl font-normal text-white tracking-tight">
                          3
                        </span>
                        <span className="text-xl md:text-2xl text-white/60">
                          x
                        </span>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed max-w-[200px]">
                        active ingredients
                      </p>
                      <div className="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "80%" }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="bg-[#C84136] h-full rounded-full"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden relative flex-shrink-0 bg-white/10 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-black -z-10" />
                      </div>
                      <span className="text-sm font-bold text-white/90">
                        Synergistic Stack
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* OVERLAY DRAWER */}
      <AnimatePresence>
        {selectedFeature && activeData && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFeature(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[70] w-full lg:w-[80vw] max-w-[1400px] bg-white text-neutral-900 overflow-y-auto"
            >
              <div className="p-8 md:p-12 lg:p-20 relative">
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-100 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>

                {/* Drawer Content */}
                <div className="mt-4">
                  <div className="mt-8 flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Left Column: Title (Short & Sticky-ish ideally) */}
                    <div className="w-full lg:w-[35%] flex-shrink-0 flex flex-col gap-8">
                      <div>
                        <h5 className="text-xl font-bold text-neutral-400 uppercase tracking-widest mb-4 leading-relaxed">
                          {activeData.tagline}
                        </h5>
                        <h2 className="text-6xl md:text-5xl lg:text-[3rem] font-normal text-[#1f3b37] tracking-tight leading-none">
                          {activeData.title}
                        </h2>
                      </div>
                    </div>

                    {/* Right Column: Content + Visuals */}
                    <div className="flex-1 flex flex-col gap-10">
                      <div className="w-full">
                        {activeData.customImage ? (
                          <div className="rounded-2xl overflow-hidden border border-neutral-100 max-w-[800px]">
                            <Image
                              src={activeData.customImage}
                              alt="Chart"
                              width={800}
                              height={600}
                              className="w-full h-auto object-contain"
                            />
                          </div>
                        ) : (
                          <div className="w-full bg-white rounded-2xl p-6 border border-neutral-100 max-w-[600px]">
                            <div className="flex justify-between items-start mb-4 gap-4">
                              <div className="text-[10px] font-bold text-neutral-400 tracking-widest rotate-180 [writing-mode:vertical-lr] h-40 flex items-center justify-center border-l border-neutral-200 pl-2">
                                {activeData.chartTitle.toUpperCase()}
                              </div>
                              <div className="flex-1 pl-6 flex items-end justify-between h-[300px] gap-12 relative border-b border-neutral-200 pb-0">
                                {/* Dashed Lines (Light) */}
                                <div className="absolute inset-0 pointer-events-none flex flex-col justify-between text-[10px] text-neutral-300 z-0 pb-[1px]">
                                  {[50, 40, 30, 20, 10].map((val) => (
                                    <span
                                      key={val}
                                      className="border-b border-dotted border-neutral-200 w-full text-right pr-2 h-0 flex items-center justify-end"
                                    >
                                      <span className="bg-white pl-1">
                                        {val}%
                                      </span>
                                    </span>
                                  ))}
                                  <span className="w-full text-right pr-2">
                                    0
                                  </span>
                                </div>

                                {/* Bar 1: Placebo */}
                                <div className="relative z-10 w-24 bg-[#E5E5E0] h-[25%] flex items-end justify-center group">
                                  <div className="text-[10px] absolute -bottom-6 font-bold tracking-widest text-neutral-500 uppercase">
                                    Placebo
                                  </div>
                                </div>

                                {/* Bar 2: Active */}
                                <div className="relative z-10 w-24 bg-[#C84136] h-[75%] flex items-end justify-center group">
                                  <div className="absolute top-[-50px] text-center w-[120px]">
                                    {(() => {
                                      const match =
                                        activeData.stat.match(
                                          /^([+]?)([\d.]+)(.*)$/,
                                        );
                                      const prefix = match ? match[1] : "";
                                      const value = match
                                        ? match[2]
                                        : activeData.stat;
                                      const unit = match ? match[3] : "";

                                      return (
                                        <span className="text-6xl font-normal text-neutral-900 tracking-tighter relative inline-block">
                                          {prefix && (
                                            <span className="absolute -left-6 top-2 text-3xl font-light text-neutral-900">
                                              {prefix}
                                            </span>
                                          )}
                                          {value}
                                          <span className="text-3xl align-top relative top-2 ml-0.5">
                                            {unit}
                                          </span>
                                        </span>
                                      );
                                    })()}
                                  </div>
                                  <div className="text-[10px] absolute -bottom-6 left-0 right-0 text-center font-bold tracking-widest text-neutral-500 uppercase flex justify-center">
                                    <Image
                                      src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/mitopure-logo-red.png?v=1770200800"
                                      alt="Active"
                                      width={60}
                                      height={20}
                                      className="object-contain"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* <p className="lead font-medium text-neutral-900 text-lg max-w-2xl ">Figure 1.</p> */}
                      <p className="lead font-medium text-neutral-900 text-lg max-w-2xl mt-[-20px]">
                        {" "}
                        Figure 1: {activeData.details.proven}
                      </p>

                      <div className="prose prose-lg text-neutral-600 max-w-none">
                        {"methodology" in activeData.details ? (
                          <div className="space-y-12">
                            {/* Methodology Table */}
                            <div>
                              <h4 className="text-xl font-bold text-neutral-900 mb-6 border-b border-black pb-2">
                                Methodology
                              </h4>
                              <div className="divide-y divide-neutral-200/60">
                                {activeData.details.methodology.map(
                                  (item: MethodologyItem, idx: number) => (
                                    <div
                                      key={idx}
                                      className="py-6 grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4"
                                    >
                                      <span className="font-semibold text-neutral-900">
                                        {item.label}
                                      </span>
                                      <span className="text-neutral-600 leading-relaxed font-light">
                                        {item.value}
                                      </span>
                                    </div>
                                  ),
                                )}
                              </div>
                            </div>

                            {/* Key Findings */}
                            {"keyFindings" in activeData.details &&
                              activeData.details.keyFindings && (
                                <div>
                                  <h4 className="text-xl font-bold text-neutral-900 mb-6 border-b border-black pb-2">
                                    Key Findings
                                  </h4>
                                  <div className="space-y-8">
                                    {activeData.details.keyFindings.map(
                                      (group: KeyFinding, idx: number) => (
                                        <div key={idx}>
                                          <h5 className="font-bold text-[#1f3b37] mb-3 text-lg">
                                            {group.title}
                                          </h5>
                                          {group.table ? (
                                            <div className="overflow-x-auto border border-neutral-200 rounded-2xl">
                                              <table className="w-full text-left border-collapse text-sm">
                                                <thead>
                                                  <tr className="border-b border-neutral-200 bg-neutral-50">
                                                    {group.table.headers.map(
                                                      (
                                                        h: string,
                                                        i: number,
                                                      ) => (
                                                        <th
                                                          key={i}
                                                          className="py-3 px-4 font-bold text-neutral-800"
                                                        >
                                                          {h}
                                                        </th>
                                                      ),
                                                    )}
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  {group.table.rows.map(
                                                    (
                                                      row: string[],
                                                      rI: number,
                                                    ) => (
                                                      <tr
                                                        key={rI}
                                                        className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50 transition-colors"
                                                      >
                                                        {row.map(
                                                          (
                                                            cell: string,
                                                            cI: number,
                                                          ) => (
                                                            <td
                                                              key={cI}
                                                              className="py-3 px-4 text-neutral-600 font-medium"
                                                            >
                                                              {cell}
                                                            </td>
                                                          ),
                                                        )}
                                                      </tr>
                                                    ),
                                                  )}
                                                </tbody>
                                              </table>
                                            </div>
                                          ) : (
                                            <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                                              {group.points?.map(
                                                (pt: string, i: number) => (
                                                  <li key={i}>{pt}</li>
                                                ),
                                              )}
                                            </ul>
                                          )}
                                        </div>
                                      ),
                                    )}
                                  </div>
                                </div>
                              )}

                            {/* Context */}
                            {"clinicalContext" in activeData.details &&
                              activeData.details.clinicalContext && (
                                <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                                  <h4 className="text-lg font-bold text-neutral-900 mb-3">
                                    Clinical Context
                                  </h4>
                                  <p className="text-base text-neutral-600 leading-relaxed">
                                    {activeData.details.clinicalContext}
                                  </p>
                                </div>
                              )}

                            {/* Footer */}
                            {"footer" in activeData.details &&
                              activeData.details.footer && (
                                <p className="text-sm text-neutral-400 italic mt-8 border-t border-neutral-100 pt-6">
                                  {activeData.details.footer}
                                </p>
                              )}
                          </div>
                        ) : (
                          typeof activeData.details === "object" &&
                          "content" in activeData.details && (
                            <p className="text-base leading-relaxed text-neutral-500 whitespace-pre-line">
                              {activeData.details.content}
                            </p>
                          )
                        )}
                      </div>

                      {/* 4. YouTube Video Embed (At the End) */}
                      {activeData.youtubeSrc && (
                        <div className="w-full mt-4">
                          <div className="rounded-2xl overflow-hidden border border-neutral-200 aspect-video relative bg-black max-w-[800px]">
                            <iframe
                              src={activeData.youtubeSrc}
                              title="YouTube video player"
                              className="absolute inset-0 w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            />{" "}
                          </div>
                        </div>
                      )}
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
