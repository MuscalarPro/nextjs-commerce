"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export function WeightLossSection() {
  const [activeMainTab, setActiveMainTab] = useState<"program" | "science">("program");
  const [subItemIndex, setSubItemIndex] = useState<number>(0);
  const [storyIndex, setStoryIndex] = useState(0);

  const PROGRAM_FEATURES = [
    {
      id: 0,
      title: "GLP-1 injections",
      heading: "Access a range of doctor-trusted medications",
      label: "FSA & HSA eligible",
      content: "Access GLP-1 medications prescribed by licensed clinicians if you qualify, delivered directly to your door.",
      image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/hers-wlbento-microdose-m.webp?v=1770118257",
      position: { top: "20%", left: "10%" } 
    },
    {
      id: 1,
      title: "Oral med kits",
      heading: "Personalized oral medication kits",
      label: "Prescription required",
      content: "Daily oral medications tailored to your unique biological needs and weight loss goals.",
      image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/hers-wlbento-microdose-m.webp?v=1770118257",
      position: { bottom: "30%", right: "10%" }
    },
    {
      id: 2,
      title: "Personalized doses",
      heading: "Dosing that adapts to you",
      label: "Customized",
      content: "No restrictive diets. Just a personalized plan designed to work with your body's chemistry.",
      image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/hers-wlbento-microdose-m.webp?v=1770118257",
      position: { bottom: "10%", left: "20%" }
    }
  ];

  const SCIENCE_FEATURES = [
    {
      id: 0,
      title: "Biological Age",
      heading: "Unlock your biological age",
      label: "DNA Methyation",
      content: "Reveal how fast your body is aging compared to your actual age with our advanced analysis.",
      image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/hers-wlbento-microdose-m.webp?v=1770118257",
      position: { top: "35%", left: "20%" }
    },
    {
      id: 1,
      title: "Metabolism",
      heading: "Deep metabolic insights",
      label: "15+ Biomarkers",
      content: "Analyze key biomarkers like Cortisol, Insulin, and HbA1c to understand your metabolic health.",
      image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/hers-wlbento-microdose-m.webp?v=1770118257",
      position: { bottom: "25%", right: "20%" }
    },
  ];

  const STORIES = [
    {
        id: 1,
        image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/hers-wlbento-microdose-m.webp?v=1770118257",
        quote: "I didn't really understand how much I lost until I started getting compliments. From there, my confidence skyrocketed! I'm thrilled with my results so far.",
        author: "Lyssuan H.",
        verified: true,
        lost: "62lbs lost in 12mo**"
    },
    {
        id: 2,
        image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/hers-wlbento-microdose-m.webp?v=1770118257",
        quote: "The personalized coaching made all the difference. I finally feel like I have control over my health.",
        author: "Sarah J.",
        verified: true,
        lost: "45lbs lost in 8mo**"
    }
  ];

  const currentFeatures = activeMainTab === "program" ? PROGRAM_FEATURES : SCIENCE_FEATURES;

  const handleMainTabChange = (tab: "program" | "science") => {
      setActiveMainTab(tab);
      setSubItemIndex(0); 
  };

  return (
    <section className="w-full flex flex-col gap-0 overflow-hidden bg-[#455246]">
      
      {/* SECTION 1: Top Visual (Full Width) */}
      <div className="relative w-full overflow-hidden min-h-[700px] md:min-h-[700px] flex flex-col items-center justify-between pt-16 pb-12">
        
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
            <Image
                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/download.png?v=1770117376" 
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
                Lose 9 lbs in 1 month<span className="align-top text-lg font-medium">**</span>
            </h2>
            <p className="text-white text-lg md:text-xl mt-4">
                Clinically proven weight loss medication
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
                    Get started
                </button>
                <button 
                  onClick={() => handleMainTabChange("science")}
                  className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeMainTab === "science" 
                      ? "bg-white text-black shadow-lg" 
                      : "text-white hover:bg-white/10"
                  }`}
                >
                    See if I'm eligible
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
              {/* 1. Single Unified Card (Existing) */}
           

              {/* 2. New Split Section (Added) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left: Product Image */}
                  <div className="relative w-full h-[500px] md:h-[600px] rounded-[32px] overflow-hidden bg-[#2C3E36]">
                      <Image 
                        src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/1_0b2cddd3-9423-4026-bc49-16a874f6bb6d.jpg?v=1769678782"
                        alt="Oral Medication Kits"
                        fill
                        className="object-cover object-center"
                      />
                      
                      {/* Floating Tags Overlay */}
                      <div className="absolute inset-0 z-10 pointer-events-none">
                          
                          {/* Tag 1: GLP-1 injections (Top Left/Center) */}
                          <div className="absolute top-[20%] left-[20%] md:left-[30%] bg-[#cae697] text-neutral-800 px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 shadow-lg animate-fade-in-up">
                              <span className="text-xs md:text-sm font-bold tracking-tight">GLP-1 injections</span>
                              <div className="bg-neutral-800 rounded-full p-0.5">
                                  <CheckCircleIcon className="w-3 h-3 md:w-4 md:h-4 text-[#cae697]" />
                              </div>
                          </div>

                          {/* Tag 2: Oral med kits (Center Right) */}
                          <div className="absolute top-[50%] right-[10%] md:right-[15%] bg-[#cae697] text-neutral-800 px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 shadow-lg animate-fade-in-up delay-100">
                             <div className="bg-neutral-800 rounded-full p-0.5">
                                  <CheckCircleIcon className="w-3 h-3 md:w-4 md:h-4 text-[#cae697]" />
                              </div>
                              <span className="text-xs md:text-sm font-bold tracking-tight">Oral med kits</span>
                          </div>

                          {/* Tag 3: Personalized doses (Bottom Left) */}
                          <div className="absolute bottom-[25%] left-[10%] md:left-[20%] bg-[#cae697] text-neutral-800 px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 shadow-lg animate-fade-in-up delay-200">
                              <span className="text-xs md:text-sm font-bold tracking-tight">Personalized doses</span>
                              <div className="bg-neutral-800 rounded-full p-0.5">
                                  <CheckCircleIcon className="w-3 h-3 md:w-4 md:h-4 text-[#cae697]" />
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  {/* Right: Content */}
                  <div className="w-full h-[500px] md:h-[600px] rounded-[32px] overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl p-8 md:p-16 flex flex-col justify-center text-white relative">
                      <div className="absolute top-0 right-0 p-8 opacity-20">
                          <svg className="w-32 h-32 md:w-48 md:h-48 text-[#9ACD62]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                      </div>
                      
                      <div className="relative z-10 space-y-6">
                           {/* <div className="inline-flex items-center gap-2 bg-[#D4E09B] text-[#1f3b37] px-4 py-2 rounded-full font-bold text-xs shadow-lg w-fit">
                             <span>Prescription required</span>
                           </div> */}
                           
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
          /* === SCIENCE TAB LAYOUT (New Dual Card Design) === */
          <div className="flex flex-col gap-4 max-w-[1400px] mx-auto">
              {/* 1. Single Unified Card (Existing) */}
           

              {/* 2. New Split Section (Added) */}
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

    </section>
  );
}
