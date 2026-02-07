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

const TABS: { id: Tab; label: string; icon: any; activeIcon: any; image: string; description: string }[] = [
  { 
    id: "Data", 
    label: "Data", 
    icon: ChartBarIcon, 
    activeIcon: ChartBarSolid, 
    image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Data.jpg?v=1770367569",
    description: "Leverage the Ring AIR’s advanced biometric analysis to gain comprehensive insights into your body's performance and recovery trends."
  },
  { 
    id: "Protocol", 
    label: "Protocol", 
    icon: ClipboardDocumentListIcon, 
    activeIcon: ClipboardDocumentListSolid, 
    image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Protocol.jpg?v=1770367570",
    description: "Follow personalized health protocols tailored to your unique biology, helping you optimize sleep, nutrition, and fitness. insights into your body's performance and recovery trends."
  },
  { 
    id: "Concierge", 
    label: "Concierge", 
    icon: ChatBubbleLeftRightIcon, 
    activeIcon: ChatBubbleLeftRightSolid, 
    image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Concierge.jpg?v=1770366311",
    description: "Get 24/7 access to dedicated health experts who can answer your questions and guide your wellness journey.insights into your body's performance and recovery trends."
  },
  { 
    id: "Marketplace", 
    label: "Marketplace", 
    icon: ShoppingBagIcon, 
    activeIcon: ShoppingBagSolid, 
    image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Marketplace.jpg?v=1770367569",
    description: "Discover exclusive supplements, gear, and wellness products curated to support your specific health goals.insights into your body's performance and recovery trends."
  },
];

export function AllInOneAppSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Data");
  
  const activeTabImage = TABS.find(t => t.id === activeTab)?.image;

  return (
    <section className="relative w-full bg-black py-16 md:py-24 overflow-hidden flex flex-col items-center">
      


      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#693979]/40 blur-[120px] rounded-full pointer-events-none" />

      {/* Typography */}
      <div className="relative z-10 mb-[-25px] md:mb-[-38px] text-center">
        <h2 className="text-6xl md:text-9xl font-semibold tracking-tight text-[#e0c4f5] leading-[1] mb-[-20px]">
          All in
        </h2>
        <h2 className="text-6xl md:text-9xl font-semibold tracking-tight text-[#e0c4f5] leading-[1]">
          one app
        </h2>
      </div>

      {/* Main Visual: Hand holding phone + Tab Dock */}
      <div className="relative z-10 w-full max-w-[400px] md:max-w-[460px]">
         
         {/* Container for Phone + Screen Content */}
         <div className="relative w-full aspect-[5/7]">
             
             {/* Scrolling Screen Content - Layered BEHIND the Phone Frame */}
             {/* Positioning estimates based on common phone aspect ratios within the container */}
             <div className="absolute top-[48%] left-[51%] -translate-x-1/2 -translate-y-[50%] w-[57.8%] h-[84.5%] rounded-[38px] overflow-hidden z-0 bg-black">
                <div key={activeTab} className="w-full h-full">
                   <img 
                      src={activeTabImage}
                      alt={`${activeTab} Interface`}
                      className="w-full h-full object-cover object-top"
                   />
                </div>
             </div>

             {/* Phone Frame - Top Layer */}
             <div className="relative z-10 w-full h-full pointer-events-none">
                 <Image 
                   src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/mobile-mockup-sm_1.avif?v=1770366045"
                   alt="App Interface on Phone"
                   fill
                   className="object-contain"
                   priority
                 />
             </div>

             {/* Fade to Black Overlay - Hides the bottom of the hand */}
             <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black to-transparent z-20 pointer-events-none" />
         </div>
         
         {/* Glass Dock / Tab Bar Overlay */}
         <div className="absolute bottom-[20%] md:bottom-[18%] left-1/2 -translate-x-1/2 w-[95%] h-[84px] bg-[#1c1c1e]/90 backdrop-blur-xl border border-white/10 rounded-[32px] flex items-center justify-between p-1.5 z-30 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
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
         <div className="absolute bottom-[40px] md:bottom-[20px] left-0 right-0 text-center px-4 z-30">
            <p className="text-neutral-400 text-xs md:text-sm leading-relaxed max-w-sm mx-auto min-h-[40px] transition-all duration-300">
              {TABS.find(t => t.id === activeTab)?.description}
            </p>
         </div>
      </div>
    </section>
  );
}
