"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HomeIcon,
  EyeIcon,
  ChartBarIcon,
  LifebuoyIcon, 
} from "@heroicons/react/24/outline";
import { 
  HomeIcon as HomeSolid,
  EyeIcon as EyeSolid,
  ChartBarIcon as ChartBarSolid,
  LifebuoyIcon as LifebuoySolid,
} from "@heroicons/react/24/solid";

type Tab = "Ring" | "Metabolism" | "Home" | "Vision";

const TABS: { id: Tab; label: string; icon: any; activeIcon: any }[] = [
  { id: "Ring", label: "Ring", icon: LifebuoyIcon, activeIcon: LifebuoySolid },
  { id: "Metabolism", label: "Metabolism", icon: ChartBarIcon, activeIcon: ChartBarSolid },
  { id: "Home", label: "Home", icon: HomeIcon, activeIcon: HomeSolid },
  { id: "Vision", label: "Vision", icon: EyeIcon, activeIcon: EyeSolid },
];

export function AllInOneAppSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Metabolism");

  return (
    <section className="relative w-full bg-black py-16 overflow-hidden flex flex-col items-center">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Typography */}
      <div className="relative z-10 text-center mb-12 space-y-2">
        <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-[#00FF00] leading-[1]">
          All in
        </h2>
        <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-[#00FF00] leading-[1]">
          one app.
        </h2>
      </div>

      {/* Phone Interactions */}
      <div className="relative z-10 w-full max-w-[280px] md:max-w-[320px] aspect-[9/19]">
         {/* Phone Mockup Container */}
         <div className="relative w-full h-full bg-black rounded-[2.5rem] border-[5px] border-[#1a1a1a] ring-1 ring-[#333] shadow-2xl overflow-hidden">
            {/* Screen Content */}
            <div className="absolute inset-0 bg-black">
               {/* Status Bar */}
               <div className="absolute top-0 w-full px-6 py-4 flex justify-between items-center z-20">
                  <span className="text-white text-[10px] font-semibold">9:41</span>
                  <div className="flex gap-1">
                     <div className="w-3 h-2 bg-white rounded-[2px]"></div>
                     <div className="w-3 h-2 bg-white rounded-[2px]"></div>
                  </div>
               </div>

               {/* Top Notch Glow */}
               <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-[150px] h-[80px] bg-blue-500/30 blur-[50px] pointer-events-none rounded-full" />

               <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full pt-16 pb-28 px-4 overflow-y-auto scrollbar-hide"
                  >
                     {/* Unified Mock View for All Tabs (Mocking the Screenshot) */}
                     <div className="flex flex-col items-center w-full">
                        {/* Filter Pill */}
                        <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/5 text-[9px] font-medium text-white mb-6">
                           All Biomarkers (102)
                        </div>

                        {/* Scores */}
                        <div className="flex w-full justify-between px-4 mb-8 text-center">
                           <div className="flex flex-col items-center">
                              <span className="text-3xl font-normal text-white">70</span>
                              <span className="text-[8px] text-neutral-500 uppercase tracking-widest mt-1">IN RANGE</span>
                           </div>
                           <div className="flex flex-col items-center">
                              <span className="text-3xl font-normal text-white">32</span>
                              <span className="text-[8px] text-neutral-500 uppercase tracking-widest mt-1">OUT OF RANGE</span>
                           </div>
                        </div>
                        <div className="w-full h-px bg-neutral-800 mb-6" />

                        {/* Cardiovascular Health */}
                        <div className="w-full space-y-3">
                           <div className="flex justify-between items-end mb-2">
                              <h3 className="text-xs font-medium text-white">Cardiovascular Health</h3>
                              <span className="text-[8px] text-neutral-500 uppercase tracking-wider">4 of 8 Biomarkers ^</span>
                           </div>
                           <div className="grid grid-cols-2 gap-2 w-full">
                              <div className="bg-[#1c1c1e] rounded-lg p-2.5 flex flex-col justify-between h-16 border border-white/5">
                                 <span className="text-[9px] text-neutral-400">Total Cholesterol</span>
                                 <span className="text-[10px] text-yellow-600">↑ 238.0 <span className="text-[8px] opacity-70">mg/dL</span></span>
                              </div>
                              <div className="bg-[#0f2e1b] rounded-lg p-2.5 flex flex-col justify-between h-16 border border-green-900/30">
                                 <span className="text-[9px] text-white">Triglycerides</span>
                                 <span className="text-[10px] text-[#00FF00]">121.0 <span className="text-[8px] opacity-70">mg/dL</span></span>
                              </div>
                              <div className="bg-[#1c1c1e] rounded-lg p-2.5 flex flex-col justify-between h-16 border border-white/5">
                                 <span className="text-[9px] text-neutral-400">HDL Cholesterol</span>
                                 <span className="text-[10px] text-yellow-600">↓ 44.0 <span className="text-[8px] opacity-70">mg/dL</span></span>
                              </div>
                              <div className="bg-[#0f2e1b] rounded-lg p-2.5 flex flex-col justify-between h-16 border border-green-900/30">
                                 <span className="text-[9px] text-white">Non-HDL Cholesterol</span>
                                 <span className="text-[10px] text-[#00FF00]">194.0 <span className="text-[8px] opacity-70">mg/dL</span></span>
                              </div>
                               <div className="bg-[#0f2e1b] rounded-lg p-2.5 flex flex-col justify-between h-16 border border-green-900/30">
                                 <span className="text-[9px] text-white">Apolipoprotein B</span>
                                 <span className="text-[10px] text-[#00FF00]">117.0 <span className="text-[8px] opacity-70">mg/dL</span></span>
                              </div>
                              <div className="bg-[#2a1a1a] rounded-lg p-2.5 flex flex-col justify-between h-16 border border-red-900/30">
                                 <span className="text-[9px] text-neutral-400">Lipoprotein(a)</span>
                                 <span className="text-[10px] text-red-500">↑ 196.1 <span className="text-[8px] opacity-70">mg/dL</span></span>
                              </div>
                           </div>
                        </div>

                        {/* Force Scroll Content sections */}
                        {/* Advanced Cardiovascular */}
                        <div className="w-full pt-4">
                           <div className="flex justify-between items-end mb-2">
                              <h3 className="text-xs font-medium text-white">Advanced Cardiovascular</h3>
                              <span className="text-[8px] text-neutral-500 uppercase tracking-wider">2 of 5 Biomarkers ^</span>
                           </div>
                           <div className="grid grid-cols-2 gap-2 w-full opacity-60">
                              <div className="bg-[#1c1c1e] rounded-lg p-2.5 flex flex-col justify-between h-16 border border-white/5">
                                 <span className="text-[9px] text-neutral-400">LDL Particle Number</span>
                                 <span className="text-[10px] text-yellow-600">↑ 1639.0</span>
                              </div>
                               <div className="bg-[#1c1c1e] rounded-lg p-2.5 flex flex-col justify-between h-16 border border-white/5">
                                 <span className="text-[9px] text-neutral-400">LDL Particle Size</span>
                                 <span className="text-[10px] text-red-500">↓ 16.5</span>
                              </div>
                           </div>
                        </div>

                         {/* Inflammation */}
                        <div className="w-full pt-4 pb-8">
                           <div className="flex justify-between items-end mb-2">
                              <h3 className="text-xs font-medium text-white">Inflammation</h3>
                              <span className="text-[8px] text-neutral-500 uppercase tracking-wider">2 of 2 Biomarkers ^</span>
                           </div>
                           <div className="grid grid-cols-2 gap-2 w-full opacity-60">
                              <div className="bg-[#1c1c1e] rounded-lg p-2.5 flex flex-col justify-between h-16 border border-white/5">
                                 <span className="text-[9px] text-neutral-400">Hs-CRP</span>
                                 <span className="text-[10px] text-yellow-600">↑ 2.6</span>
                              </div>
                               <div className="bg-[#1c1c1e] rounded-lg p-2.5 flex flex-col justify-between h-16 border border-white/5">
                                 <span className="text-[9px] text-neutral-400">Homocysteine</span>
                                 <span className="text-[10px] text-yellow-600">↑ 17.9</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </AnimatePresence>

               {/* Bottom Fade Overlay */}
               <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-10" />
            </div>
         </div>
         
         {/* Glass Dock / Tab Bar */}
         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-[60px] bg-[#1c1c1e]/80 backdrop-blur-xl border border-white/10 rounded-[30px] flex items-center justify-between p-1.5 z-20 shadow-2xl">
            {TABS.map((tab) => {
               const isActive = activeTab === tab.id;
               const Icon = isActive ? tab.activeIcon : tab.icon;
               
               return (
                  <button
                     key={tab.id}
                     onClick={() => setActiveTab(tab.id)}
                     className={`flex flex-col items-center justify-center h-full flex-1 rounded-[24px] transition-all duration-300 relative ${
                       isActive ? "bg-[#3a3a3c] shadow-lg" : "hover:bg-white/5"
                     }`}
                  >
                     <Icon className={`w-5 h-5 mb-0.5 ${isActive ? "text-white" : "text-[#8e8e93]"}`} strokeWidth={1.5} />
                     <span className={`text-[8px] font-semibold uppercase tracking-wider ${isActive ? "text-white" : "text-[#8e8e93]"}`}>
                        {tab.label}
                     </span>
                  </button>
               )
            })}
         </div>
      </div>
    </section>
  );
}
