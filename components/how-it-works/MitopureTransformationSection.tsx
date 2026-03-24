"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const transformationSteps = [
  {
    time: "Hour 08",
    title: "Urolithin A gets absorbed",
    description:
      "You've just begun taking Mitopure and it's already springing into action. Urolithin A levels peak in your bloodstream, targeting key organs like your muscles.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/1_3.webp?v=1773901490", // Replace with actual Red Blood Stream image
  },
  {
    time: "Day 02",
    title: "Cellular recycling is activated",
    description:
      "Mitophagy begins to clear away damaged mitochondria from your cells, starting the renewal process.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/2_6.webp?v=1774357902", // Replace with actual mitochondria image
  },
  {
    time: "Day 30",
    title: "New healthy mitochondria",
    description:
      "Your cells are repopulated with fresh, energetic powerhouses replacing the old ones.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/3_6.webp?v=1774357901",
  },
  {
    time: "Day 60",
    title: "Enhanced cellular renewal",
    description:
      "Noticeable improvements at the cellular level, providing a solid foundation for energy production.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/4_3.webp?v=1774357901",
  },
  {
    time: "Day 120",
    title: "Increased muscle strength",
    description:
      "Clinically proven improvements in cellular energy begin to translate into noticeable muscle strength and endurance.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/5_1.webp?v=1774357901",
  },
  {
    time: "Day 365",
    title: "Optimal cellular health",
    description:
      "A profound transformation in how your cells age and perform, maintaining peak cellular vitality.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/6_1.gif?v=1774357904", // Replace with actual cell image
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6 md:gap-0">
          <h2 className="text-[30px] md:text-[38px] font-medium text-[#1a1a1a]">
            Mitopure Transformation
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
                  {/* Image Container */}
                  <div
                    className={`relative w-full bg-[#f4f4f4] transition-all duration-500 ease-out origin-bottom ${isActive ? "opacity-100 aspect-square" : "opacity-80 aspect-square group-hover:opacity-100"}`}
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
                        className="absolute top-[100%] left-0 w-[400px] mt-[80px] pr-4 cursor-default"
                      >
                        <h4 className="text-[18px] font-bold text-gray-900 mb-[4px]">
                          {step.title}
                        </h4>
                        <p className="text-gray-500 text-[15px] whitespace-normal">
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
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
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
                <div className="space-y-3">
                  <h4 className="text-[18px] font-bold text-[#1a1a1a]">
                    {transformationSteps[activeIndex]?.title ?? ""}
                  </h4>
                  <p className="text-[#6b6b6b] text-[16px] leading-[1.6]">
                    {transformationSteps[activeIndex]?.description ?? ""}
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
