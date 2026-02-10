"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface GuideCard {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const guides: GuideCard[] = [
  {
    id: "1",
    title: "Precision, Not Guesswork",
    description: "General AI lists possibilities. M3 Concierge cuts through the noise to focus on what actually applies to you. We take into account your training history, biomarkers, supplement stack, and lifestyle.",
    imageSrc: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/1_1.jpg?v=1770723858",
    imageAlt: "AI analysis interface",
  },
  {
    id: "2",
    title: "Active Management",
    description: "We don't just give answers—we help you follow through. From dosing reminders to adjusting your M3 protocol when life gets in the way, we make sure you stay consistent.",
    imageSrc: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/2_1.jpg?v=1770723859",
    imageAlt: "Progress tracking interface",
  },
  {
    id: "3",
    title: "Clinical Oversight",
    description: "AI can surface insights fast, but a doctor adds context. We loop in real clinicians to answer complex questions around your stack, biomarkers, or training load.",
    imageSrc: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/3_1.jpg?v=1770723859",
    imageAlt: "Doctor chat interface",
  },
  {
    id: "4",
    title: "Long-term Intelligence",
    description: "We remember the details, connect the dots, and flag risks ahead of time. By tracking everything over time, we reveal hidden patterns and surface risks before they slow you down.",
    imageSrc: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/4_1.jpg?v=1770723858",
    imageAlt: "Long term data tracking",
  },
];

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
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 md:mb-16 gap-6 md:gap-0">
          <div>
            <p className="text-gray-500 text-lg mb-2">How it works
</p>
            <h2 className=" text-[2rem] leading-[1.08] tracking-[-0.02em] text-black md:text-[3rem]">
           Combining the best of AI and clinical intelligence to decode your MuscleSpan.

            </h2>
          </div>
          
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full border transition-all duration-300 ${
                canScrollLeft 
                  ? "border-gray-200 hover:border-black text-black hover:bg-black hover:text-white" 
                  : "border-gray-100 text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-3 rounded-full border transition-all duration-300 ${
                canScrollRight 
                  ? "border-gray-200 hover:border-black text-black hover:bg-black hover:text-white" 
                  : "border-gray-100 text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-4 md:gap-8 overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar snap-x snap-mandatory scroll-pl-4 md:scroll-pl-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {guides.map((guide) => (
            <div 
              key={guide.id} 
              className="w-[85vw] sm:w-[340px] md:w-[420px] flex-shrink-0 snap-start"
            >
              <div className="flex flex-row items-center md:block gap-4 md:gap-0 h-full">
                <div className="w-[130px] h-[130px] md:w-full md:h-[460px] rounded-3xl overflow-hidden bg-[#F5F5F7] group relative flex-shrink-0 md:mb-6">
                   <img
                    src={guide.imageSrc}
                    alt={guide.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    draggable={false}
                  />
                </div>
                
                <div className="flex flex-col justify-center flex-1 min-w-0 py-2 pr-2 md:pr-0">
                  <h3 className="text-xl md:text-[1.75rem] font-medium mb-1 md:mb-3 text-black leading-tight">{guide.title}</h3>
                  <p className="text-gray-600 text-[15px] md:text-lg leading-normal md:leading-relaxed break-words">{guide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12">
            <button className="w-full md:w-auto bg-[#693979] hover:bg-[#532e61] text-white px-8 py-4 sm:py-5 rounded-full text-lg font-medium transition-colors flex items-center justify-center gap-2">
            Book my blood test
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            </button>
        </div>
      </div>
    </section>
  );
}
