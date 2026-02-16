"use client";

import { ArrowTopRightOnSquareIcon, PlayIcon } from "@heroicons/react/24/solid";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface StoryCard {
  id: string;
  type: "image" | "video" | "quote" | "stacked";
  src?: string;
  alt?: string;
  text?: string;
  overlayText?: string;
  logo?: string;
  items?: StoryCard[]; // For stacked type
  link?: string;
  className?: string;
}

const stories: StoryCard[] = [
  {
    id: "1",
    type: "image",
    src: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/1_2.jpg?v=1770738813",
    alt: "Bathroom sink lifestyle",
  },
  {
    id: "2",
    type: "image",
    src: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/3_2.jpg?v=1770738815",
    alt: "Holding green pills",
  },
  {
    id: "3",
    type: "video",
    src: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/4_2.jpg?v=1770738814",
    overlayText:
      "5 Ways Soil Microbes Feed the World, And Fight Climate Change",
    alt: "Scientist speaking",
  },
  {
    id: "4",
    type: "stacked",
    items: [
      {
        id: "4-top",
        type: "image",
        src: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/2_2.jpg?v=1770738812",
        alt: "Product lifestyle",
        className: "w-full h-[180px] rounded-[2rem] object-cover",
      },
      {
        id: "4-bottom",
        type: "quote",
        text: "Pushing the boundaries on what microbial metabolisms and pathways are capable of is where their interests and their passions lie.",
        logo: "FASTCOMPANY",
        className:
          "w-full h-[254px] bg-[#F5F5F0] rounded-3xl p-6 flex flex-col justify-between relative group cursor-pointer hover:bg-[#EAEAE5] transition-colors",
      },
    ],
  },
  {
    id: "5",
    type: "image",
    src: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/5_1.jpg?v=1770738814",
    alt: "Product unboxing",
  },
  {
    id: "6",
    type: "video",
    src: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/4_2.jpg?v=1770738814",
    overlayText: "The Future of Longevity Science",
    alt: "Lab research",
  },
  {
    id: "7",
    type: "stacked",
    items: [
      {
        id: "7-top",
        type: "quote",
        text: "The results were visible within weeks. My recovery time has halved.",
        logo: "VOGUE",
        className:
          "w-full h-[254px] bg-[#EEF2FF] rounded-3xl p-6 flex flex-col justify-between relative group cursor-pointer hover:bg-[#E0E7FF] transition-colors",
      },
      {
        id: "7-bottom",
        type: "image",
        src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=720&auto=format&fit=crop",
        alt: "Yoga lifestyle",
        className: "w-full h-[180px] rounded-[2rem] object-cover",
      },
    ],
  },
  {
    id: "9",
    type: "image",
    src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=720&auto=format&fit=crop",
    alt: "Healthy food",
  },
];

export function StoriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Map vertical scroll progress (0-1) to a horizontal translation
  const xTranslation = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const springX = useSpring(xTranslation, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={sectionRef} className="py-0 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-8 flex flex-col md:flex-row justify-between items-end gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[2rem] leading-[1.08] tracking-[-0.02em] text-black md:text-[3rem]"
        >
          Stories from scientists, innovators, <br/>and members like you.
        </motion.h2>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:block"
        >
          <button className="px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-white hover:text-black transition-all whitespace-nowrap hover:border-black hover:border-1">
            See more stories
          </button>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        className="overflow-x-auto hide-scrollbar pb-12"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <motion.div style={{ x: springX }} className="flex gap-6 px-4 md:px-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="snap-start shrink-0 w-[240px] md:w-[280px] lg:w-[320px] aspect-[9/16] md:aspect-auto md:h-[450px] lg:h-[500px]"
            >
              {/* Image Card */}
              {story.type === "image" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full rounded-3xl overflow-hidden bg-gray-100"
                >
                  <img
                    src={story.src}
                    alt={story.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              )}

              {/* Video Card */}
              {story.type === "video" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full relative group cursor-pointer overflow-hidden rounded-3xl bg-gray-100"
                >
                  <img
                    src={story.src}
                    alt={story.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

                  {story.overlayText && (
                    <p className="absolute bottom-10 left-6 right-6 text-white text-xl md:text-2xl font-medium leading-tight">
                      {story.overlayText}
                    </p>
                  )}

                  <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-white/30">
                    <PlayIcon className="w-4 h-4 text-white ml-0.5" />
                  </div>
                </motion.div>
              )}

              {/* Stacked Card */}
              {story.type === "stacked" && (
                <div className="w-full h-full flex flex-col gap-4">
                  {story.items?.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex-1 overflow-hidden"
                    >
                      {item.type === "image" && (
                        <div className="w-full h-full rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100">
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      {item.type === "quote" && (
                        <div className="w-full h-full bg-[#F5F5F0] rounded-2xl md:rounded-3xl p-6 flex flex-col justify-between relative group cursor-pointer hover:bg-[#EAEAE5] transition-colors border border-black/5">
                          <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                            <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 text-slate-500" />
                          </div>
                          <p className="text-[#1F3D2B] text-sm md:text-base font-medium leading-relaxed mt-4">
                            "{item.text}"
                          </p>
                          <div className="mt-auto">
                            <span className="font-bold text-lg md:text-xl tracking-tight text-black">
                              {item.logo}
                            </span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
