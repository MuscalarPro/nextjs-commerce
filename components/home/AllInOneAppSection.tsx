"use client";

import { useState } from "react";
import {
  ChartBarIcon,
  ClipboardDocumentListIcon,
  ChatBubbleLeftRightIcon,
  ShoppingBagIcon, 
} from "@heroicons/react/24/outline";
import { 
  ChartBarIcon as ChartBarSolid,
  ClipboardDocumentListIcon as ClipboardDocumentListSolid,
  ChatBubbleLeftRightIcon as ChatBubbleLeftRightSolid,
  ShoppingBagIcon as ShoppingBagSolid,
} from "@heroicons/react/24/solid";
import Image from "next/image";

type Tab = "Data" | "Protocol" | "Concierge" | "Marketplace";

const TABS: { id: Tab; label: string; icon: any; activeIcon: any }[] = [
  { id: "Data", label: "Data", icon: ChartBarIcon, activeIcon: ChartBarSolid },
  { id: "Protocol", label: "Protocol", icon: ClipboardDocumentListIcon, activeIcon: ClipboardDocumentListSolid },
  { id: "Concierge", label: "Concierge", icon: ChatBubbleLeftRightIcon, activeIcon: ChatBubbleLeftRightSolid },
  { id: "Marketplace", label: "Marketplace", icon: ShoppingBagIcon, activeIcon: ShoppingBagSolid },
];

export function AllInOneAppSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Data");

  return (
    <section className="relative w-full bg-black py-16 md:py-24 overflow-hidden flex flex-col items-center">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#693979]/40 blur-[120px] rounded-full pointer-events-none" />

      {/* Typography */}
      <div className="relative z-10 mb-[-35px] text-center mb-0 space-y-1">
        <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-[#e0c4f5] leading-[1]">
          All in
        </h2>
        <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-[#e0c4f5] leading-[1]">
          one app.
        </h2>
      </div>

      {/* Main Visual: Hand holding phone + Tab Dock */}
      <div className="relative z-10000 w-full max-w-[400px] md:max-w-[460px]">
         {/* Static Hand Model Image */}
         <div className="relative w-full aspect-[4/5] md:aspect-[5/7]">
             <Image 
               src="https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/homepage-v3/app-section/mobile-mockup-sm.png"
               alt="App Interface on Phone"
               fill
               className="object-contain"
               priority
             />
         </div>
         
         {/* Glass Dock / Tab Bar Overlay */}
         <div className="absolute bottom-[20%] md:bottom-[18%] left-1/2 -translate-x-1/2 w-[85%] h-[64px] bg-[#1c1c1e]/90 backdrop-blur-xl border border-white/10 rounded-[32px] flex items-center justify-between p-1.5 z-20 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
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

         {/* Bottom Description Text */}
         <div className="absolute -bottom-[-20px] md:-bottom-[-20px] left-0 right-0 text-center px-4">
            <p className="text-neutral-400 text-xs md:text-sm leading-relaxed max-w-sm mx-auto">
              Leverage the Ring AIR’s advanced, discreet, and preventive health monitoring to guide your path toward vitality and a longer, healthier life.
            </p>
         </div>
      </div>
    </section>
  );
}
