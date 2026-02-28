"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Image from "next/image";

const transformationSteps = [
  {
    time: "Hour 08",
    title: "Urolithin A gets absorbed",
    description: "You've just begun taking Mitopure and it's already springing into action. Urolithin A levels peak in your bloodstream, targeting key organs like your muscles.",
    image: "https://framerusercontent.com/images/GUS3ttJJ9DvsFB8TXPtgUzpkmg.png?width=400&height=400" // Replace with actual Red Blood Stream image
  },
  {
    time: "Day 02",
    title: "Cellular recycling is activated",
    description: "Mitophagy begins to clear away damaged mitochondria from your cells, starting the renewal process.",
    image: "https://framerusercontent.com/images/GUS3ttJJ9DvsFB8TXPtgUzpkmg.png?width=400&height=400" // Replace with actual mitochondria image
  },
  {
    time: "Day 30",
    title: "New healthy mitochondria",
    description: "Your cells are repopulated with fresh, energetic powerhouses replacing the old ones.",
    image: "https://framerusercontent.com/images/GUS3ttJJ9DvsFB8TXPtgUzpkmg.png?width=400&height=400"
  },
  {
    time: "Day 60",
    title: "Enhanced cellular renewal",
    description: "Noticeable improvements at the cellular level, providing a solid foundation for energy production.",
    image: "https://framerusercontent.com/images/GUS3ttJJ9DvsFB8TXPtgUzpkmg.png?width=400&height=400"
  },
  {
    time: "Day 120",
    title: "Increased muscle strength",
    description: "Clinically proven improvements in cellular energy begin to translate into noticeable muscle strength and endurance.",
    image: "https://framerusercontent.com/images/GUS3ttJJ9DvsFB8TXPtgUzpkmg.png?width=400&height=400"
  },
  {
    time: "Day 365",
    title: "Optimal cellular health",
    description: "A profound transformation in how your cells age and perform, maintaining peak cellular vitality.",
    image: "https://framerusercontent.com/images/GUS3ttJJ9DvsFB8TXPtgUzpkmg.png?width=400&height=400" // Replace with actual cell image
  }
];

export function MitopureTransformationSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextStep = () => {
    setActiveIndex((prev) => (prev === transformationSteps.length - 1 ? prev : prev + 1));
  };

  const prevStep = () => {
    setActiveIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <section className="w-full bg-white py-20 overflow-hidden ">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        
        {/* Header and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6 md:gap-0">
          <h2 className="text-3xl md:text-5xl font-medium text-[#1a1a1a] tracking-tight">
            Mitopure Transformation
          </h2>
          <div className="flex items-center gap-4">
            <button 
              onClick={prevStep}
              disabled={activeIndex === 0}
              className={`p-2 transition-colors ${activeIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-900 hover:bg-gray-100 rounded-full'}`}
              aria-label="Previous step"
            >
              <ArrowLeftIcon className="w-8 h-8 md:w-10 md:h-10 font-light stroke-1" />
            </button>
            <button 
              onClick={nextStep}
              disabled={activeIndex === transformationSteps.length - 1}
              className={`p-2 transition-colors ${activeIndex === transformationSteps.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-900 hover:bg-gray-100 rounded-full'}`}
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
                          className="flex flex-col shrink-0 cursor-pointer relative group"
                          style={{ 
                            width: isActive ? '31%' : '12.5%',
                            transition: 'width 0.5s ease-out'
                          }}
                          onClick={() => setActiveIndex(index)}
                        >
                            {/* Image Container */}
                            <div 
                                className={`relative w-full bg-[#f4f4f4] transition-all duration-500 ease-out origin-bottom ${isActive ? 'opacity-100 aspect-square' : 'opacity-80 aspect-square group-hover:opacity-100'}`}
                            >
                                <Image 
                                  src={step.image}
                                  alt={step.title}
                                  fill
                                  className="object-cover"
                                />
                            </div>

                            {/* Dotted Line */}
                            <div className="absolute top-[100%] left-0 w-full border-b-[2px] border-dotted border-gray-300 mt-2" />

                            {/* Label */}
                            <div className={`absolute top-[100%] left-0 mt-6 text-lg font-medium transition-colors duration-500 whitespace-nowrap ${isActive ? 'text-gray-900' : 'text-gray-400'}`}>
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
                                        className="absolute top-[100%] left-0 w-[400px] mt-[80px] pr-4 cursor-default"
                                    >
                                        <h4 className="text-[15px] font-bold text-gray-900 mb-[4px]">
                                            {step.title}
                                        </h4>
                                        <p className="text-gray-500 text-[13px] leading-[1.6] whitespace-normal">
                                            {step.description}
                                        </p>
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
            <div className="flex overflow-x-auto no-scrollbar gap-8 pb-4 mb-6 relative">
              {transformationSteps.map((step, index) => {
                  const isActive = index === activeIndex;
                  return (
                      <button 
                        key={step.time}
                        onClick={() => setActiveIndex(index)}
                        className={`relative flex flex-col text-left shrink-0 pb-3 transition-colors duration-300 w-16 ${isActive ? 'text-gray-900' : 'text-gray-400'}`}
                      >
                          {/* Top Border Line */}
                          <div className={`absolute top-0 left-0 w-full h-[2px] mb-2 ${isActive ? 'bg-gray-900' : 'bg-gray-200'}`} />
                          
                          <div className="mt-4 flex flex-col items-start leading-[1.2]">
                              <span className="text-[13px]">{step.time?.split(' ')[0] ?? ''}</span>
                              <span className="text-[13px]">{step.time?.split(' ')[1] ?? ''}</span>
                          </div>
                      </button>
                  );
              })}
            </div>

            {/* Active Content Display */}
            <div className="flex flex-col w-full relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col w-full"
                    >
                        {/* Image */}
                        <div className="relative w-full aspect-square bg-[#f4f4f4] mb-6">
                            <Image 
                                src={transformationSteps[activeIndex]?.image ?? ''}
                                alt={transformationSteps[activeIndex]?.title ?? ''}
                                fill
                                className="object-cover"
                            />
                        </div>
                        
                        {/* Title (matches step.time size from screenshot) */}
                        <h3 className="text-4xl font-medium text-gray-900 mb-4 tracking-tight">
                            {transformationSteps[activeIndex]?.time ?? ''}
                        </h3>
                        
                        {/* Subtitle / Description */}
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-2">
                                {transformationSteps[activeIndex]?.title ?? ''}
                            </h4>
                            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                                {transformationSteps[activeIndex]?.description ?? ''}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>

      </div>
    </section>
  );
}
