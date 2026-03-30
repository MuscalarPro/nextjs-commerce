"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const transformationSteps = [
  {
    time: "Hour 08",
    title: "Absorption confirmed.",
    subtitle: "Urolithin A enters systemic circulation. Mitochondrial targeting begins.",
    description:
      "UA reaches peak plasma concentration via passive intestinal absorption — already binding mitochondrial membranes within the first metabolic window.",
    image:
      "https://cdn.shopify.com/videos/c/o/v/aaa4b298eb2247f3bedfcc06b215183d.webm",
    isVideo: true,
    bars: [
      { label: "UROLITHIN A", progress: 100 },
      { label: "SPERMIDINE", progress: 60 },
      { label: "S-ALLYL CYSTEINE", progress: 45 },
    ]
  },
  {
    time: "Day 02",
    title: "Signal sent.",
    subtitle: "Spermidine activates PINK1/Parkin. Damaged mitochondria flagged for clearance.",
    description:
      "Autophagy flux accelerates. Depolarised mitochondria are selectively tagged and routed to lysosomal degradation — cellular housekeeping at its most precise.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/2_6.webp?v=1774357902",
    bars: [
      { label: "UROLITHIN A", progress: 85 },
      { label: "SPERMIDINE", progress: 100 },
      { label: "S-ALLYL CYSTEINE", progress: 40 },
    ]
  },
  {
    time: "Day 30",
    title: "Old structure removed. New structure forming.",
    subtitle: "PGC-1α rises. S-Allyl Cysteine suppresses oxidative load. Biogenesis begins.",
    description:
      "Fresh mitochondria repopulate muscle tissue as SAC quiets NF-κB inflammatory signalling — creating a cleaner redox environment for sustained energy synthesis.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/3_6.webp?v=1774357901",
    bars: [
      { label: "UROLITHIN A", progress: 85 },
      { label: "SPERMIDINE", progress: 80 },
      { label: "S-ALLYL CYSTEINE", progress: 75 },
    ]
  },
  {
    time: "Day 60",
    title: "Three inputs. One output: cellular coherence.",
    subtitle: "Mitophagy, autophagy, and redox balance operating in parallel. The baseline shifts.",
    description:
      "NAD⁺ flux stabilises. Lipid peroxidation falls. The tripartite stack now operates in concert — each molecule reinforcing the signal of the other at the pathway level.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/4_3.webp?v=1774357901",
    bars: [
      { label: "UROLITHIN A", progress: 100 },
      { label: "SPERMIDINE", progress: 95 },
      { label: "S-ALLYL CYSTEINE", progress: 90 },
    ]
  },
  {
    time: "Day 120",
    title: "Performance is now biological data.",
    subtitle: "ATP output per fibre increases. Strength, endurance, and recovery follow the mitochondrial curve.",
    description:
      "Elevated mitochondrial density per muscle fibre translates to documented gains in VO₂ efficiency, grip strength, and fatigue resistance — consistent with Phase II trial outcomes.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/5_1.webp?v=1774357901",
    bars: [
      { label: "UROLITHIN A", progress: 100 },
      { label: "SPERMIDINE", progress: 95 },
      { label: "S-ALLYL CYSTEINE", progress: 95 },
    ]
  },
  {
    time: "Day 365",
    title: "The system runs clean.",
    subtitle: "Inflammaging suppressed. Proteostasis preserved. M3 operates at Layer Zero — continuously, silently, beneath every metric you track.",
    description:
      "A systemic transformation in how your cells age, repair, and perform. Hallmarks of ageing attenuated at the source. Sustained mitophagy flux, reduced inflammatory burden, preserved protein quality control.",
    image:
      "https://cdn.shopify.com/videos/c/o/v/15a2ae2e84944328af47a031224ec6c6.webm",
    isVideo: true,
    bars: [
      { label: "UROLITHIN A", progress: 98 },
      { label: "SPERMIDINE", progress: 95 },
      { label: "S-ALLYL CYSTEINE", progress: 94 },
    ]
  },
];

export function MitopureTransformationSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextStep = () => {
    setActiveIndex((prev) =>
      prev === transformationSteps.length - 1 ? prev : prev + 1,
    );
  };

  const prevStep = () => {
    setActiveIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <section className="w-full bg-white py-20 overflow-hidden ">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        {/* Header and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 md:gap-0 ">
          <h2 className="text-[30px] md:text-[38px] font-medium text-[#1a1a1a]">
           [M3]
          </h2>
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={prevStep}
              disabled={activeIndex === 0}
              className={`p-2 transition-colors ${activeIndex === 0 ? "text-gray-300 cursor-not-allowed" : "text-gray-900 hover:bg-gray-100 rounded-full"}`}
              aria-label="Previous step"
            >
              <ArrowLeftIcon className="w-8 h-8 md:w-10 md:h-10 font-light stroke-1" />
            </button>
            <button
              onClick={nextStep}
              disabled={activeIndex === transformationSteps.length - 1}
              className={`p-2 transition-colors ${activeIndex === transformationSteps.length - 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-900 hover:bg-gray-100 rounded-full"}`}
              aria-label="Next step"
            >
              <ArrowRightIcon className="w-8 h-8 md:w-10 md:h-10 font-light stroke-1" />
            </button>
          </div>
        </div>

        {/* Desktop Carousel Layout (Hidden on Mobile) */}
        <div className="hidden md:block relative w-full">
          <div className="flex items-end justify-between w-full h-[550px] pb-[150px]">
            {transformationSteps.map((step, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={step.time}
                  className="flex flex-col shrink-0 cursor-pointer relative group "
                  style={{
                    width: isActive ? "31%" : "12.5%",
                    transition: "width 0.5s ease-out",
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Image/Video Container */}
                  <div
                    className={`relative w-full bg-[#f4f4f4] transition-all duration-500 ease-out origin-bottom ${isActive ? "opacity-100 aspect-square" : "opacity-80 aspect-square group-hover:opacity-100"}`}
                  >
                    {step.isVideo ? (
                      <video
                        src={step.image}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                        unoptimized={step.image.endsWith(".gif")}
                      />
                    )}
                  </div>

                  {/* Dotted Line */}
                  <div className="absolute top-[100%] left-0 w-full border-b-[2px] border-dotted border-gray-300 mt-2" />

                  {/* Label */}
                  <div
                    className={`absolute top-[100%] left-0 mt-6 text-lg font-medium transition-colors duration-500 whitespace-nowrap ${isActive ? "text-gray-900" : "text-gray-400"}`}
                  >
                    {step.time}
                  </div>

                  {/* Active Content (Fades in below the label) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="absolute top-[100%] left-0 w-[450px] mt-[60px] pr-4 cursor-default"
                      >
                        <h4 className="text-[18px] font-medium text-gray-900 mb-[4px] leading-snug">
                          {step.title}
                        </h4>
                        {step.subtitle && (
                          <p className="text-[#64846c] italic text-[16px] mb-4 leading-relaxed tracking-wide">
                            {step.subtitle}
                          </p>
                        )}
                        <p className="text-[#6b6b6b] text-[14px] whitespace-normal leading-[1.6]">
                          {step.description}
                        </p>
                        
                        {step.bars && (
                          <div className="flex flex-col gap-3 mt-6">
                            {step.bars.map((bar, bIdx) => (
                              <div key={bIdx} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0"></div>
                                <span className="text-[10px] font-bold tracking-widest text-[#555] w-[130px] shrink-0 uppercase">
                                  {bar.label}
                                </span>
                                <div className="flex-1 h-[1px] bg-gray-200 relative overflow-hidden">
                                  <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${bar.progress}%` }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="absolute top-0 left-0 h-full bg-[#3b5e43]"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Layout (Hidden on Desktop) */}
        <div className="md:hidden flex flex-col w-full">
          {/* Top Navigation Row (Scrollable Tabs) */}
          <div className="flex overflow-x-auto no-scrollbar gap-10 pb-4 mb-8 relative border-t-[1px] border-gray-100">
            {transformationSteps.map((step, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={step.time}
                  onClick={() => setActiveIndex(index)}
                  className={`relative flex flex-col text-left shrink-0 pt-4 pb-1 transition-colors duration-300 ${isActive ? "text-gray-900" : "text-gray-400"}`}
                >
                  {/* Top Border Indicator */}
                  <div
                    className={`absolute top-[-1px] left-0 w-full h-[2px] transition-colors duration-300 ${isActive ? "bg-gray-900" : "bg-transparent"}`}
                  />

                  <div className="flex flex-col items-start">
                    <span className="text-[14px]">
                      {step.time?.split(" ")[0] ?? ""}
                    </span>
                    <span className="text-[14px] font-medium">
                      {step.time?.split(" ")[1] ?? ""}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Peeking Image Carousel */}
          <div className="relative w-full mb-10 overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{ x: `-${activeIndex * 84}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {transformationSteps.map((step, index) => (
                <div
                  key={index}
                  className="w-[84%] shrink-0 aspect-[1.1] relative bg-[#f4f4f4] cursor-pointer"
                  onClick={() => setActiveIndex(index)}
                >
                  {step.isVideo ? (
                    <video
                      src={step.image}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                      unoptimized={step.image.endsWith(".gif")}
                    />
                  )}
                  {/* Time Tag Overlay */}
                  <div className="absolute bottom-0 right-0 bg-[#5b5b5b] text-white px-3 py-1.5 text-[12px] font-medium">
                    {step.time}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Active Content Display */}
          <div className="flex flex-col w-full px-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4 }}
                className="flex flex-col w-full"
              >
                {/* Title (Time) */}
                <h3 className="text-[28px] font-medium text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                  {transformationSteps[activeIndex]?.time ?? ""}
                </h3>

                {/* Subtitle and Description */}
                <div className="space-y-4">
                  <h4 className="text-[22px] font-medium text-[#1a1a1a] leading-snug">
                    {transformationSteps[activeIndex]?.title ?? ""}
                  </h4>
                  {transformationSteps[activeIndex]?.subtitle && (
                    <p className="text-[#64846c] italic text-[15px] leading-relaxed tracking-wide">
                      {transformationSteps[activeIndex].subtitle}
                    </p>
                  )}
                  <p className="text-[#6b6b6b] text-[15px] leading-[1.6]">
                    {transformationSteps[activeIndex]?.description ?? ""}
                  </p>

                  {transformationSteps[activeIndex]?.bars && (
                    <div className="flex flex-col gap-3 mt-6 pt-2">
                      {transformationSteps[activeIndex].bars.map((bar, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-gray-500 shrink-0"></div>
                          <span className="text-[9px] font-bold tracking-widest text-[#555] w-[130px] shrink-0 uppercase">
                            {bar.label}
                          </span>
                          <div className="flex-1 h-[1px] bg-gray-200 relative overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${bar.progress}%` }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                              className="absolute top-0 left-0 h-full bg-[#3b5e43]"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
