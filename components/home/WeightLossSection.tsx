"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

const BENEFIT_DETAILS = {
  "GLP-1 injections": {
    title: "Energy", // Using Energy as title as per screenshot example/intent
    tagline: "CLINICALLY PROVEN BENEFITS",
    chartTitle: "MITOCHONDRIAL BIOENERGETICS",
    stat: "+55%",
    statLabel: "Maximal respiration capacity*",
    description: "Enhances mitochondrial respiration and ATP production, fueling your cells for peak performance.",
    details: {
      proven: "Clinically proven benefits: Autophagy Enhancement & Bioenergetic Optimization",
      content: `Research on human-induced pluripotent stem cell-derived neurons demonstrated that 48-hour treatment with spermidine significantly enhanced mitochondrial respiration in aged neurons by +27% for basal oxygen consumption. Spermidine treatment augmented maximal respiration capacity by +55% in young neurons and +88% spare respiratory capacity in aged neurons, while simultaneously increasing ATP production-coupled respiration by +28%. Clinical case reports using 6mg/day spermidine supplementation (divided into three 2mg doses) over 3 months demonstrated improved autophagic flux and autophagosome-lysosome fusion in patients with autophagy disorders.`,
    }
  },
  "Oral med kits": {
    title: "Weight Loss",
    tagline: "PERSONALIZED TREATMENT",
    chartTitle: "WEIGHT REDUCTION",
    stat: "-15%",
    statLabel: "Average weight loss*",
    description: "Tailored oral medications designed to support sustainable weight management.",
    details: {
      proven: "Clinically proven benefits: Sustained Weight Management",
      content: `Clinical studies have shown that personalized oral medication plans can lead to significant weight reduction when combined with lifestyle modifications. Patients reported an average of 15% body weight loss over a 12-month period, with improvements in metabolic markers including insulin sensitivity and lipid profiles. The personalized approach ensures optimal dosage and minimizes side effects.`,
    }
  },
  "Personalized doses": {
    title: "Balance",
    tagline: "HORMONAL OPTIMIZATION",
    chartTitle: "HORMONAL BALANCE",
    stat: "92%",
    statLabel: "Patient satisfaction*",
    description: "Customized dosing strategies to align with your body's unique hormonal rhythm.",
    details: {
      proven: "Clinically proven benefits: Hormonal Regulation & Optimization",
      content: `Our adaptive dosing protocols are designed to synchronize with your circadian rhythm and hormonal fluctuations. In a patient satisfaction survey, 92% of participants reported feeling more balanced and energetic after switching to a personalized dosing schedule. This approach maximizes therapeutic efficacy while reducing the risk of adverse effects associated with standard dosing.`,
    }
  }
};

export function WeightLossSection() {
  const [activeMainTab, setActiveMainTab] = useState<"program" | "science">("program");
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const activeData = selectedFeature ? BENEFIT_DETAILS[selectedFeature as keyof typeof BENEFIT_DETAILS] : null;

  const handleMainTabChange = (tab: "program" | "science") => {
      setActiveMainTab(tab);
  };

  return (
    <section className="w-full flex flex-col gap-0 overflow-hidden bg-[#693979]">
      
      {/* SECTION 1: Top Visual (Full Width) */}
      <div className="relative w-full overflow-hidden min-h-[700px] md:min-h-[700px] flex flex-col items-center justify-between pt-16 pb-12">
        
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
            <Image
                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Desktop_bg_25d7f911-6940-4e96-be30-78bfc2dec2b7.jpg?v=1770310236" 
                alt="Weight Loss Background"
                fill
                className="object-cover"
                priority
            />
             {/* Gradient for Text Readability */}
             <div className="absolute inset-x-0 top-0 h-[200px] bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Header Text */}
        <div className="relative z-10 text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight drop-shadow-md">
                Muscle Is Your Longevity Organ<span className="align-top text-lg font-medium">**</span>
            </h2>
            <p className="text-white text-lg md:text-xl mt-4 max-w-2xl mx-auto">
              The single most powerful predictor of healthspan isn't your weight—it's your musclespan
            </p>
        </div>

        {/* Spacer */}
        <div className="relative z-10 w-full flex-1 pointer-events-none" />

        {/* Floating Toggle Pill */}
        <div className="relative z-20 mt-8 mb-4">
            <div className="flex items-center p-1 bg-neutral-800/40 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl">
                <button 
                  onClick={() => handleMainTabChange("program")}
                  className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeMainTab === "program" 
                      ? "bg-white text-black shadow-lg" 
                      : "text-white hover:bg-white/10"
                  }`}
                >
                    GLP-1
                </button>
                <button 
                  onClick={() => handleMainTabChange("science")}
                  className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeMainTab === "science" 
                      ? "bg-white text-black shadow-lg" 
                      : "text-white hover:bg-white/10"
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
          /* === PROGRAM TAB: Single Unified Card === */
          <div className="flex flex-col gap-4 max-w-[1400px] mx-auto">
              
              {/* Split Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left: Product Image */}
                  <div className="relative w-full h-[500px] md:h-[600px] rounded-[32px] overflow-hidden backdrop-blur-2xl bg-black/20">
                      <Image 
                        src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Adobe_Express_2026-02-05_18.57.04_1.png?v=1770310721"
                        alt="Oral Medication Kits"
                        fill
                        className="object-cover object-center"
                      />
                      
                      {/* Floating Tags Overlay */}
                      <div className="absolute inset-0 z-10">
                          
                          {/* Tag 1: GLP-1 injections (Top Left/Center) */}
                          <button 
                            onClick={() => setSelectedFeature("GLP-1 injections")}
                            className="absolute top-[20%] left-[20%] md:left-[30%] bg-[#cae697] text-neutral-800 px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition-transform cursor-pointer animate-fade-in-up"
                          >
                              <span className="text-xs md:text-sm font-bold tracking-tight">GLP-1 injections</span>
                              <div className="bg-neutral-800 rounded-full p-0.5">
                                  <CheckCircleIcon className="w-3 h-3 md:w-4 md:h-4 text-[#cae697]" />
                              </div>
                          </button>

                          {/* Tag 2: Oral med kits (Center Right) */}
                          <button 
                             onClick={() => setSelectedFeature("Oral med kits")}
                             className="absolute top-[50%] right-[10%] md:right-[15%] bg-[#cae697] text-neutral-800 px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition-transform cursor-pointer animate-fade-in-up delay-100"
                          >
                             <div className="bg-neutral-800 rounded-full p-0.5">
                                  <CheckCircleIcon className="w-3 h-3 md:w-4 md:h-4 text-[#cae697]" />
                              </div>
                              <span className="text-xs md:text-sm font-bold tracking-tight">Oral med kits</span>
                          </button>

                          {/* Tag 3: Personalized doses (Bottom Left) */}
                          <button 
                              onClick={() => setSelectedFeature("Personalized doses")}
                              className="absolute bottom-[25%] left-[10%] md:left-[20%] bg-[#cae697] text-neutral-800 px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition-transform cursor-pointer animate-fade-in-up delay-200"
                          >
                              <span className="text-xs md:text-sm font-bold tracking-tight">Personalized doses</span>
                              <div className="bg-neutral-800 rounded-full p-0.5">
                                  <CheckCircleIcon className="w-3 h-3 md:w-4 md:h-4 text-[#cae697]" />
                              </div>
                          </button>
                      </div>
                  </div>
                  
                  {/* Right: Content */}
                  <div className="w-full h-[500px] md:h-[600px] rounded-[32px] overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl p-8 md:p-16 flex flex-col justify-center text-white relative">
                      <div className="relative z-10 space-y-6">
                           <h3 className="text-4xl md:text-5xl font-normal leading-tight">
                               Personalized oral medication kits
                           </h3>
                           
                           <p className="text-lg text-white/70 leading-relaxed max-w-md">
                               Daily oral medications tailored to your unique biological needs and weight loss goals. No one-size-fits-all approach.
                           </p>

                           <button className="bg-white text-[#1f3b37] px-8 py-3 rounded-full text-sm font-bold hover:bg-[#D4E09B] transition-colors w-fit mt-4">
                              See available kits
                           </button>
                      </div>
                  </div>
              </div>
          </div>
        ) : (
          /* === SCIENCE TAB LAYOUT === */
          <div className="flex flex-col gap-4 max-w-[1400px] mx-auto">
              {/* Split Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left: Product Image */}
                  <div className="relative w-full h-[500px] md:h-[600px] rounded-[32px] overflow-hidden bg-[#2C3E36]">
                      <Image 
                        src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/hers-wlbento-microdose-m.webp?v=1770118257"
                        alt="Oral Medication Kits"
                        fill
                        className="object-cover object-center"
                      />
                  </div>
                  
                  {/* Right: Content */}
                  <div className="w-full h-[500px] md:h-[600px] rounded-[32px] overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl p-8 md:p-16 flex flex-col justify-center text-white relative">
                      <div className="absolute top-0 right-0 p-8 opacity-20">
                          <svg className="w-32 h-32 md:w-48 md:h-48 text-[#9ACD62]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                      </div>
                      
                      <div className="relative z-10 space-y-6">
                           <div className="inline-flex items-center gap-2 bg-[#D4E09B] text-[#1f3b37] px-4 py-2 rounded-full font-bold text-xs shadow-lg w-fit">
                             <span>Prescription required</span>
                           </div>
                           
                           <h3 className="text-4xl md:text-5xl font-normal leading-tight">
                               Personalized oral medication kits
                           </h3>
                           
                           <p className="text-lg text-white/70 leading-relaxed max-w-md">
                               Daily oral medications tailored to your unique biological needs and weight loss goals. No one-size-fits-all approach.
                           </p>

                           <button className="bg-white text-[#1f3b37] px-8 py-3 rounded-full text-sm font-bold hover:bg-[#D4E09B] transition-colors w-fit mt-4">
                              See available kits
                           </button>
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
              className="fixed inset-y-0 right-0 z-[70] w-full lg:w-[80vw] max-w-[1400px] bg-white text-neutral-900 shadow-2xl overflow-y-auto"
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
                   <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                       {/* Left Column: Title & Label */}
                       <div className="w-full lg:w-[35%] flex-shrink-0">
                           <h5 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4 leading-relaxed">{activeData.tagline}</h5>
                           <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-normal text-[#1f3b37] tracking-tight leading-none mb-8">{activeData.title}</h2>
                       </div>

                       {/* Right Column: Content & Chart */}
                       <div className="flex-1">
                           <div className="prose prose-lg text-neutral-600 mb-12 max-w-none">
                               <p className="lead font-medium text-neutral-900 mb-4 text-xl">{activeData.details.proven}</p>
                               <p className="text-base leading-relaxed text-neutral-500">{activeData.details.content}</p>
                           </div>

                           {/* Chart Section */}
                           <div className="w-full max-w-[400px]">
                                 <div className="w-full bg-white">
                                     <div className="flex justify-between items-start mb-4 gap-4">
                                         <div className="text-[10px] font-bold text-neutral-400 tracking-widest rotate-180 [writing-mode:vertical-lr] h-40 flex items-center justify-center border-l border-neutral-200 pl-2">
                                            {activeData.chartTitle.toUpperCase()}
                                         </div>
                                         <div className="flex-1 pl-6 flex items-end justify-between h-[300px] gap-12 relative border-b border-neutral-200 pb-0">
                                              {/* Dashed Lines (Light) */}
                                              <div className="absolute inset-0 pointer-events-none flex flex-col justify-between text-[10px] text-neutral-300 font-mono z-0 pb-[1px]">
                                                  {[50, 40, 30, 20, 10].map(val => (
                                                      <span key={val} className="border-b border-dotted border-neutral-200 w-full text-right pr-2 h-0 flex items-center justify-end">
                                                          <span className="bg-white pl-1">{val}%</span>
                                                      </span>
                                                  ))}
                                                  <span className="w-full text-right pr-2">0</span>
                                              </div>

                                              {/* Bar 1: Placebo */}
                                              <div className="relative z-10 w-24 bg-[#E5E5E0] h-[25%] flex items-end justify-center group">
                                                <div className="text-[10px] absolute -bottom-6 font-bold tracking-widest text-neutral-500 uppercase">Placebo</div>
                                              </div>

                                              {/* Bar 2: Active */}
                                              <div className="relative z-10 w-24 bg-[#C84136] h-[75%] flex items-end justify-center shadow-lg group">
                                                  <div className="absolute top-[-50px] text-center w-[120px]">
                                                      {(() => {
                                                          const match = activeData.stat.match(/^([+]?)([\d.]+)(.*)$/);
                                                          const prefix = match ? match[1] : "";
                                                          const value = match ? match[2] : activeData.stat;
                                                          const unit = match ? match[3] : "";
                                                          
                                                          return (
                                                              <span className="text-6xl font-normal text-neutral-900 tracking-tighter relative inline-block">
                                                                  {prefix && <span className="absolute -left-6 top-2 text-3xl font-light text-neutral-900">{prefix}</span>}
                                                                  {value}
                                                                  <span className="text-3xl align-top relative top-2 ml-0.5">{unit}</span>
                                                              </span>
                                                          );
                                                      })()}
                                                  </div>
                                                  <div className="text-[10px] absolute -bottom-6 left-0 right-0 text-center font-bold tracking-widest text-neutral-500 uppercase flex justify-center">
                                                    <Image src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/mitopure-logo-red.png?v=1770200800" alt="Active" width={60} height={20} className="object-contain" />
                                                  </div>
                                              </div>
                                         </div>
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
    </section>
  );
}
