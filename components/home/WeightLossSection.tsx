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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1400px] mx-auto">
              
              {/* CARD 1: IMAGE VISUAL (Now First) */}
              <div className="w-full rounded-[32px] overflow-hidden bg-[#455246] relative min-h-[600px] flex items-center justify-center p-8 group shadow-2xl">
                 {/* Background Image */}
                 <div className="absolute inset-0">
                    <Image 
                        src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/hers-wlbento-microdose-m.webp?v=1770118257"
                        alt="Weight Loss Products"
                        fill
                        className="object-cover object-center"
                    />
                     <div className="absolute inset-0 bg-black/10" />
                 </div>

                 {/* Interactive Pills */}
                 <div className="absolute inset-0 z-20 pointer-events-none">
                     {PROGRAM_FEATURES.map((item, index) => (
                         <button 
                            key={item.id}
                            // @ts-ignore
                            style={item.position}
                            className={`pointer-events-auto absolute px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 shadow-xl border backdrop-blur-md flex items-center gap-2 group/btn bg-white/90 text-[#3e4a3d] border-transparent hover:scale-105 hover:bg-white`}
                         >
                            <CheckCircleIcon className="w-4 h-4"/>
                            {item.title}
                         </button>
                     ))}
                </div>
              </div>

               {/* CARD 2: TEXT CONTENT (Now Second) */}
               <div className="w-full rounded-[32px] overflow-hidden bg-[#1f3b37] relative min-h-[600px] flex flex-col justify-center p-8 md:p-12 text-left shadow-2xl">
                 <div className="relative z-10 space-y-8">
                     <h3 className="text-4xl md:text-5xl font-normal text-white leading-tight">
                        Access a range of doctor-trusted medications
                     </h3>
                     
                     <div className="flex items-center gap-2 text-[#b0ffc1] bg-white/5 w-fit px-4 py-2 rounded-full font-bold text-sm shadow-sm border border-white/10">
                        <CheckCircleIcon className="w-5 h-5" />
                        <span>FSA & HSA eligible</span>
                     </div>

                     <p className="text-white/70 text-lg leading-relaxed max-w-md">
                        Access GLP-1 medications prescribed by licensed clinicians if you qualify, delivered directly to your door.
                     </p>

                     <button className="bg-white text-[#1f3b37] px-8 py-3 rounded-full text-sm font-bold hover:bg-[#b0ffc1] transition-colors w-fit">
                        Get results
                     </button>
                 </div>
              </div>

          </div>
        ) : (
          /* === SCIENCE TAB LAYOUT (New Dual Card Design) === */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1400px]  mx-auto">
              
              {/* CARD 1: BIOLOGICAL AGE */}
              <div className="w-full rounded-[32px] overflow-hidden bg-[#1f3b37] relative min-h-[600px] flex flex-col items-center justify-between p-12 text-center group shadow-2xl">
                 <div className="mt-8 space-y-4 relative z-20">
                    <h3 className="text-white text-3xl md:text-5xl font-light">Unlock your</h3>
                 </div>
                 
                 {/* Floating Phone UI Mockup */}
                 <div className="relative w-[280px] h-[400px] my-6 transform transition-transform duration-700 group-hover:-translate-y-2">
                     <div className="absolute inset-0 bg-black rounded-[2.5rem] border-[8px] border-[#2a4a45] overflow-hidden shadow-2xl">
                         {/* Fake UI Content */}
                         <div className="h-full w-full bg-[#183b33] p-6 flex flex-col items-center justify-center relative">
                             <span className="text-white/60 text-xs uppercase tracking-wider mb-2">As of today</span>
                             <span className="text-white text-8xl font-thin leading-none">38</span>
                             <div className="w-4 h-4 bg-[#b0ffc1] rotate-45 transform my-4"></div>
                             <p className="text-white/80 text-center text-sm">2 years younger than your chronological age</p>
                             
                             {/* Background Lines */}
                              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1f3b37] to-transparent" />
                         </div>
                     </div>
                 </div>

                 <div className="relative z-20 w-full">
                     <h3 className="text-white text-4xl md:text-5xl font-normal mb-4">Biological Age</h3>
                     <p className="text-white/70 max-w-xs mx-auto mb-8">Reveal how fast your body is aging compared to your actual age.</p>
                     
                     <button className="bg-[#2a4a45] text-white border border-white/20 px-8 py-3 rounded-full text-sm font-bold hover:bg-white hover:text-[#1f3b37] transition-colors">
                        Get the science
                     </button>
                 </div>
              </div>

              {/* CARD 2: BIOMARKERS */}
              <div className="w-full rounded-[32px] overflow-hidden bg-[#1f3b37] relative min-h-[600px] flex flex-col items-center p-12 text-center shadow-2xl">
                 <div className="mt-8 mb-8 space-y-2 relative z-20">
                    <h3 className="text-white text-3xl md:text-5xl font-light">Test 130+</h3>
                    <h3 className="text-white text-4xl md:text-5xl font-normal">biomarkers</h3>
                 </div>

                 <div className="relative w-full flex-1 flex items-end justify-center">
                     {/* Person Image */}
                     <div className="relative w-[300px] h-[350px]">
                         <Image 
                            src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/hers-wlbento-microdose-m.webp?v=1770118257"
                            alt="Woman looking back"
                            fill
                            className="object-cover rounded-t-full"
                         />
                     </div>

                     {/* Floating Tags (Decor) */}
                     <div className="absolute inset-0 pointer-events-none">
                         <span className="absolute top-[20%] left-[10%] px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/60 text-sm backdrop-blur-sm">Heart</span>
                         <span className="absolute top-[40%] right-[10%] px-4 py-1.5 rounded-full border border-white/30 bg-white/10 text-white text-sm backdrop-blur-sm font-medium">Hormones</span>
                         <span className="absolute top-[30%] right-[25%] px-5 py-2 rounded-full border border-white text-white font-bold bg-white/10 backdrop-blur-md shadow-lg shadow-[#b0ffc1]/20">Metabolism</span>
                         <span className="absolute bottom-[30%] left-[5%] px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/50 text-sm backdrop-blur-sm">Thyroid</span>
                         <span className="absolute bottom-[20%] right-[5%] px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/50 text-sm backdrop-blur-sm">Immune</span>
                     </div>
                 </div>

                 <div className="relative z-20 w-full mt-8">
                     <button className="bg-[#2a4a45] text-white border border-white/20 px-8 py-3 rounded-full text-sm font-bold hover:bg-white hover:text-[#1f3b37] transition-colors">
                        Meet the markers
                     </button>
                 </div>
              </div>

          </div>
        )}

      </div>

    </section>
  );
}
