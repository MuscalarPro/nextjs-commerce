"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { guides } from "../../data/guideData";

export function GuideSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 md:mb-16 gap-8">
          <div className="max-w-4xl">
            <p className="text-gray-500 text-sm md:text-base mb-3 font-medium">
              How it works
            </p>
            <h2 className="text-[2.5rem] md:text-[3rem] leading-[1.1] tracking-tight text-black font-normal">
              Combining the best of AI and clinical intelligence to decode your
              musclespan.
            </h2>
          </div>

          <div className="hidden md:flex gap-3 shrink-0 mb-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ${
                canScrollLeft
                  ? "border-gray-200 hover:border-black text-black bg-white hover:bg-black hover:text-white"
                  : "border-gray-100 text-gray-300 cursor-not-allowed bg-gray-50"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ${
                canScrollRight
                  ? "border-gray-200 hover:border-black text-black bg-white hover:bg-black hover:text-white"
                  : "border-gray-100 text-gray-300 cursor-not-allowed bg-gray-50"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-8 -mx-4 px-4 md:ml-0 md:mr-[calc(50%-50vw)] md:px-0 md:pr-10 hide-scrollbar snap-x snap-mandatory scroll-pl-4 md:scroll-pl-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="w-[85vw] sm:w-[320px] md:w-[360px] flex-shrink-0 snap-start"
            >
              <div className="flex flex-col h-full group cursor-pointer">
                {/* Image Container - Square Aspect Ratio */}
                <div className="w-full aspect-square rounded-2xl overflow-hidden bg-[#F5F5F7] mb-6 relative">
                  <img
                    src={guide.imageSrc}
                    alt={guide.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    draggable={false}
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-1">
                  <h3 className="text-2xl font-normal mb-3 text-black tracking-tight">
                    {guide.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed">
                    {guide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <button className="bg-white text-black px-8 py-4 rounded-full text-base font-semibold transition-all flex items-center gap-2 hover:bg-black hover:text-white">
              Explore MuscleCare
              <ChevronRightIcon className="w-4 h-4 stroke-[3]" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
