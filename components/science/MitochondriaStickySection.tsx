"use client";

import { ArrowDownIcon } from "@heroicons/react/24/outline"; // Placeholder icon
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SECTION_1_IMAGE = "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/lhYregdmE8CAlEFJAfnpegYVsGY.webp?v=1770644579";
const SECTION_3_IMAGE = "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/mrwQTr8nmT9NwJAlyxFFxgBpms.avif?v=1770644596";

export function MitochondriaStickySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [activeTab, setActiveTab] = useState<"muscle" | "skin">("muscle");

  // Simple intersection observer to track active section
  useEffect(() => { 
    const handleScroll = () => {
      const sections = document.querySelectorAll(".scroll-section");
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        // If the section is in the middle of the viewport
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine which image to show based on active section
  // Section 0 & 1 use Image 1. Section 2 uses Image 2.
  const currentImage = activeSection === 2 ? SECTION_3_IMAGE : SECTION_1_IMAGE;

  return (
    <section ref={containerRef} className="w-full bg-white relative">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col md:flex-row">
          
          {/* Left Column - Sticky Image */}
          <div className="w-full md:w-[40%] md:h-screen md:sticky md:top-0 md:bg-white flex items-center justify-center p-6 lg:p-12 order-1 md:order-none z-10">
            <div className="relative w-full aspect-square md:aspect-[2/3] max-w-[600px] max-h-[90vh]">
               <motion.div
                 key={currentImage}
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 0.5 }}
                 className="absolute inset-0"
               >
                 <Image
                    src={currentImage}
                    alt="Mitochondria visualization"
                    fill
                    className="object-contain"
                    priority
                 />
               </motion.div>
            </div>
          </div>

          {/* Right Column - Scrollable Content */}
          <div className="w-full md:w-[60%] flex flex-col order-2 md:order-none">
            
            {/* Section 1 */}
            <div className="scroll-section min-h-[80vh] flex flex-col justify-center p-6 md:p-12 md:pr-12 md:pl-0 border-b border-transparent">
              <h2 className="text-[1.5rem] md:text-[2.5rem] leading-[1.1] font-normal text-black mb-6">
                As we age, mitochondrial function declines
              </h2>
              <p className="text-sm md:text-base text-neutral-600 mb-12 leading-relaxed">
                Our mitochondria are constantly renewed to produce energy and fulfill the vast energy demands of muscle, skin and other tissues. As we get older, mitochondrial renewal declines and dysfunctional mitochondria accumulate in the cells, resulting in significant issues.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                {[
                  "Insufficient energy supply",
                  "Production of harmful molecules",
                  "Reduced cellular health"
                ].map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <ArrowDownIcon className="w-8 h-8 text-neutral-400 mb-4 stroke-1" />
                    <div className="h-px w-full bg-black mb-4" /> 
                    <span className="text-base md:text-lg text-neutral-600 leading-tight max-w-[80%]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2 */}
            <div className="scroll-section min-h-[80vh] flex flex-col justify-center p-6 md:p-12 md:pr-12 md:pl-0 border-b border-transparent">
               <h2 className="text-[1.5rem] md:text-[2.5rem] leading-[1.1] font-normal text-black mb-6">
                This decline starts earlier than you might think
              </h2>
              <p className="text-sm md:text-base text-neutral-600 mb-8 leading-relaxed">
                Age-associated mitochondrial decline leads to a progressive decline in our metabolism, our overall energy levels, our resiliency, our skin health and our muscle function.
              </p>

              {/* Tabs */}
              <div className="flex items-center space-x-8 border-b border-black/10 mb-8">
                 <button 
                   onClick={() => setActiveTab("muscle")}
                   className={clsx(
                     "pb-4 text-sm font-bold uppercase tracking-wide transition-colors relative",
                     activeTab === "muscle" ? "text-black" : "text-neutral-400 hover:text-neutral-600"
                   )}
                 >
                   Muscle function
                   {activeTab === "muscle" && (
                     <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
                   )}
                 </button>
                 <button 
                   onClick={() => setActiveTab("skin")}
                   className={clsx(
                     "pb-4 text-sm font-bold uppercase tracking-wide transition-colors relative",
                     activeTab === "skin" ? "text-black" : "text-neutral-400 hover:text-neutral-600"
                   )}
                 >
                   Skin health
                   {activeTab === "skin" && (
                     <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
                   )}
                 </button>
              </div>

              {/* Dynamic Image Area (Graph) */}
              <div className="w-[120%] -ml-[10%] aspect-[2/1] bg-transparent mb-6 relative">
                 <motion.div
                   key={activeTab}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ duration: 0.4 }}
                   className="absolute inset-0"
                 >
                   {activeTab === "muscle" ? (
                     <Image
                        src="/images/science/Muscle Function.avif"
                        alt="Graph showing muscle function decline over time"
                        fill
                        className="object-contain"
                     />
                   ) : (
                     <Image
                        src="/images/science/skin-health.avif"
                        alt="Graph showing skin health decline over time"
                        fill
                        className="object-contain"
                     />
                   )}
                 </motion.div>
              </div>

              <p className="text-sm text-neutral-500">
                Age-associated mitochondrial decline leads to a progressive decline in our metabolism, our overall energy levels, our resiliency, our skin health and our muscle function.
              </p>
            </div>

            {/* Section 3 */}
            <div className="scroll-section min-h-[80vh] flex flex-col justify-center p-6 md:p-12 md:pr-12 md:pl-0">
               <h2 className="text-[1.5rem] md:text-[2.5rem] leading-[1.1] font-normal text-black mb-6">
                Healthy cells rely on a powerful recycling process
              </h2>
              <p className="text-sm md:text-base text-neutral-600 mb-12 leading-relaxed">
                A process called mitophagy cleans up defective mitochondria and allows the mitochondria to repair themselves and improve their performance. This recycling and cleansing mechanism is proven to provide valuable health benefits.
              </p>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {[
                  "Better mitochondria quality",
                  "Improved cellular health",
                  "Improved muscle strength",
                  "Improved skin health"
                ].map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <ArrowDownIcon className="w-8 h-8 text-neutral-400 mb-4 stroke-1" />
                    <div className="h-px w-full bg-black mb-4" />
                    <span className="text-sm font-bold text-black leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
