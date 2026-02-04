"use client";

import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface DetailContent {
  id: string;
  title: string;
  description: string;
  x: number; // percentage from left
  y: number; // percentage from top
}

const defaultContent = {
  title: "Mitochondria are the bedrock of good health",
  description:
    "Healthy cells rely on healthy mitochondria. Their optimal function leads to incredible health benefits, and is particularly essential to heart, kidney, eye, brain, skin and muscle function. Our clinical science to date has focused on muscle health as muscle cells have a very large number of mitochondria and on skin health, as the largest organ in our body.",
};

const hotspots: DetailContent[] = [
  {
    id: "brain",
    title: "Brain",
    description:
      "The human brain uses about 20% of the human body's metabolic energy and is particularly sensitive to the aging process. A growing number of scientists are looking into the contributions of mitochondria in brain health with preliminary studies suggesting they could be key players in brain disorders.",
    x: 55,
    y: 13,
  },
  {
    id: "skin",
    title: "Skin",
    description:
      "Skin, our largest organ and interface with the world, requires a lot of energy to combat aging, which mitochondria provide. As we age, dysfunctional mitochondria lead to reduced energy production, cellular decline, and skin signs of aging like sagginess, dullness, wrinkles, and weakened skin barrier. This can impact our overall health.",
    x: 51,
    y: 23,
  },
  {
    id: "joints",
    title: "Joints",
    description:
      "Joints are key for our mobility. The cells required to keep our joints functional progressively decline in function, and so do their mitochondria. These powerhouses need to be renewed and nourished to keep our joints healthy. There is emerging science around the link between mitochondria and arthritis.",
    x: 69,
    y: 27,
  },
  {
    id: "heart",
    title: "Heart",
    description:
      "The heart never rests, demanding immense energy from its high concentration of mitochondria. Maintaining healthy mitochondrial function is vital for cardiovascular resilience and long-term heart health.",
    x: 55,
    y: 34,
  },
  {
    id: "immune",
    title: "Immune System",
    description:
      "A robust immune system relies on mitochondria to power immune cells. Healthy mitochondrial function supports the body’s ability to defend itself and maintain resilience against stressors.",
    x: 65,
    y: 36,
  },
   {
    id: "gut",
    title: "Digestive System",
    description:
       "The gut lining regenerates rapidly and requires significant energy. Mitochondria support the integrity of the gut barrier, playing a crucial role in digestion and overall systemic health.",
    x: 71,
    y: 50, 
  },
  {
    id: "muscle",
    title: "Skeletal Muscle",
    description:
      "Muscles are densely packed with mitochondria to power movement and endurance. As we age, mitochondrial efficiency declines, affecting muscle strength and recovery. Optimizing mitochondrial health is crucial for maintaining peak physical performance and longevity.",
    x: 52,
    y: 63,
  },
];

interface MitochondriaExplorerSectionProps {
  imageSrc?: string;
}

export function MitochondriaExplorerSection({
  imageSrc = "/images/science/mitochondria-explorer.png",
}: MitochondriaExplorerSectionProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isResearchOpen, setIsResearchOpen] = useState(false);

  const activeContent = activeId
    ? hotspots.find((h) => h.id === activeId)
    : null;

  const currentTitle = activeContent ? activeContent.title : defaultContent.title;
  const currentDescription = activeContent
    ? activeContent.description
    : defaultContent.description;

  return (
    <section className="w-full bg-white md:py-24 py-12">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row md:items-start md:gap-12 lg:gap-24">
          
          {/* Left Column: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId || "default"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-start justify-between">
                  <h2 className="text-[1.5rem] md:text-[2.5rem] leading-tight font-normal text-black">
                     {currentTitle}
                  </h2>
                  
                  {/* Close button only visible when a specific item is active */}
                  {activeId && (
                    <button
                      onClick={() => setActiveId(null)}
                      className="p-1 rounded-full hover:bg-neutral-100 transition-colors md:hidden"
                    >
                      <XMarkIcon className="w-6 h-6 text-neutral-500" />
                    </button>
                  )}
                </div>

                <div className="text-sm md:text-base text-neutral-700 leading-relaxed">
                   {/* Handle paragraphs for description */}
                  {currentDescription.split("\n").map((paragraph, i) => (
                    <p key={i} className="mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Scientific Research Accordion - Only visible when a body part is active */}
            <AnimatePresence>
              {activeId && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="border-t border-b border-black/10 py-4 mt-8"
                >
                  <button 
                    onClick={() => setIsResearchOpen(!isResearchOpen)}
                    className="flex items-center justify-between w-full text-left group focus:outline-none"
                  >
                    <span className="font-semibold text-lg text-black">Scientific research.</span>
                    <PlusIcon 
                      className={clsx(
                        "w-5 h-5 text-black transition-transform duration-300",
                        isResearchOpen ? "rotate-45" : "group-hover:scale-110"
                      )} 
                    />
                  </button>
                  <AnimatePresence>
                    {isResearchOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 text-sm text-neutral-500 space-y-4">
                          <p>
                            Grimm, A. and Eckert, A. (2017), Brain aging and neurodegeneration: from a mitochondrial point of view. 
                            <i> J. Neurochem.</i>, 143: 418-431. <a href="https://doi.org/10.1111/jnc.14037" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">https://doi.org/10.1111/jnc.14037</a>
                          </p>
                          <p>
                            Fang et al. (2019). Mitophagy inhibits amyloid-β and tau pathology and reverses cognitive deficits in models of Alzheimer's disease. 
                            <i> Nature neuroscience</i>, 22(3), 401–412. <a href="https://doi.org/10.1038/s41593-018-0332-9" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">https://doi.org/10.1038/s41593-018-0332-9</a>
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
             {/* Desktop Close for Active State - Optional UI enhancement */}
             {activeId && (
                <button 
                  onClick={() => setActiveId(null)}
                  className="hidden md:flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-neutral-400 hover:text-black transition-colors self-start mt-4"
                >
                  <XMarkIcon className="w-4 h-4" />
                  Reset View
                </button>
             )}
          </div>

          {/* Right Column: Interactive Image */}
          <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
             {/* Image Container */}
            <div className="relative aspect-square w-full">
              <Image
                src={imageSrc}
                alt="Interactive mitochondria health visualization"
                fill
                className="object-cover"
                priority
              />

              {/* Hotspots */}
              {hotspots.map((spot) => (
                <div
                  key={spot.id}
                  className="absolute"
                  style={{
                    left: `${spot.x}%`,
                    top: `${spot.y}%`,
                  }}
                >
                  <button
                    onClick={() => setActiveId(activeId === spot.id ? null : spot.id)}
                    onMouseEnter={() => setHoveredId(spot.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="relative group focus:outline-none"
                  >
                    {/* Ring animation */}
                    <span 
                        className={clsx(
                            "absolute inset-0 rounded-full bg-white opacity-0 transition-opacity duration-300",
                             activeId === spot.id ? "animate-ping opacity-30" : "group-hover:opacity-20"
                        )}
                    />
                    
                    {/* Button Circle */}
                    <div
                      className={clsx(
                        "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border transition-all duration-300 shadow-sm",
                        activeId === spot.id
                          ? "bg-[#ff4d4d] border-[#ff4d4d] text-white scale-110"
                          : "bg-white/80 backdrop-blur-sm border-neutral-300 text-neutral-600 hover:bg-white hover:scale-105"
                      )}
                    >
                      {activeId === spot.id ? (
                        <MinusIcon className="w-4 h-4 md:w-5 md:h-5" />
                      ) : (
                        <PlusIcon className="w-4 h-4 md:w-5 md:h-5" />
                      )}
                    </div>

                    {/* Tooltip Label (Hover Effect) */}
                    <AnimatePresence>
                        {hoveredId === spot.id && activeId !== spot.id && (
                            <motion.div
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 20 }}
                              exit={{ opacity: 0, x: 10 }}
                              className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-white border border-neutral-200 px-3 py-1 rounded-full shadow-md whitespace-nowrap z-10 hidden md:block"
                            >
                                <span className="text-xs font-semibold tracking-wider uppercase text-neutral-800">
                                    {spot.title}
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    
                     {/* Active Label (Always visible when active) */}
                     {activeId === spot.id && (
                        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 bg-white border border-neutral-200 px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap z-20 hidden md:block">
                             <span className="text-sm font-bold tracking-wider uppercase text-black">
                                {spot.title}
                            </span>
                        </div>
                     )}

                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
