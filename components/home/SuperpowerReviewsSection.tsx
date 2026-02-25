"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

import { reviews } from "../../data/common/superpowerReviewsData";

export function SuperpowerReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Updated for smaller card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      // Assuming card width + gap approx 300px
      const index = Math.round(scrollLeft / 260); // Updated for smaller mobile card width + gap
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 md:px-2 mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className=" text-[1rem] md:text-[2.75rem] leading-[1.08] tracking-[-0.02em] text-black"
        >
          [M3] is changing thousands of lives
        </motion.h2>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:block"
        >
          <button className="px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-white hover:text-black transition-all whitespace-nowrap hover:border-black hover:border-1">
            See more reviews
          </button>
        </motion.div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto pb-12 px-4 md:px-8 hide-scrollbar snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollPaddingLeft: "2rem",
          }}
        >
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="snap-center shrink-0 w-[240px] md:w-[280px] lg:w-[300px] aspect-[9/16] rounded-3xl overflow-hidden relative group bg-gray-100"
            >
              {review.type === "ui" ? (
                review.content
              ) : (
                <>
                  {/* Background Media */}
                  <div className="absolute inset-0 bg-gray-300">
                    {review.type === "video" ? (
                      <video
                        src={review.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={review.src}
                        className="w-full h-full object-cover"
                        alt={review.username || "Review media"}
                      />
                    )}
                  </div>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top User Info */}
                  <div className="absolute top-5 left-5 right-5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur overflow-hidden border border-white/30">
                      <img
                        src={`https://ui-avatars.com/api/?name=${review.username}&background=random`}
                        className="w-full h-full object-cover"
                        alt={review.username}
                      />
                    </div>
                    <div className="flex flex-col text-white shadow-sm">
                      <div className="flex items-center gap-1">
                        <span className="font-semibold text-sm drop-shadow-md">
                          {review.handle}
                        </span>
                        {review.isVerified && (
                          <CheckBadgeIcon className="w-3.5 h-3.5 text-blue-400" />
                        )}
                      </div>
                      {review.followers && (
                        <span className="text-[10px] md:text-xs opacity-90 drop-shadow-md">
                          {review.followers}
                        </span>
                      )}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}

          {/* CTA Card for Mobile end of scroll */}
          <div className="snap-center shrink-0 w-[240px] md:hidden aspect-[9/16] rounded-3xl bg-gray-50 border border-gray-200 flex flex-col items-center justify-center p-8 text-center">
            <h3 className="text-xl font-medium mb-4">
              See what others are saying
            </h3>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <button className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-black hover:text-white transition-all">
                View all reviews
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-4 mt-0">
        <button
          onClick={() => scroll("left")}
          className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
        </button>

        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-3">
          {reviews.map((_, idx) => (
            <div
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? "bg-black scale-125" : "bg-gray-300"}`}
            />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRightIcon className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </section>
  );
}
