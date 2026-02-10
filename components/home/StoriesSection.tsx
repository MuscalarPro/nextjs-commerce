"use client";

import { motion } from "framer-motion";
import { PlayIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
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
    className: "w-[300px] h-[300px] rounded-full object-cover shrink-0 ml-4",
  },
  {
    id: "2",
    type: "image",
    src: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/3_2.jpg?v=1770738815",
    alt: "Holding green pills",
    className: "w-[280px] h-[450px] rounded-3xl object-cover shrink-0",
  },
  {
    id: "3",
    type: "image",
    src: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/4_2.jpg?v=1770738814", // Placeholder for video thumb
    overlayText: "5 Ways Soil Microbes Feed the World, And Fight Climate Change",
    alt: "Scientist speaking",
    className: "w-[280px] h-[450px] rounded-3xl object-cover shrink-0",
  },
  {
    id: "4",
    type: "stacked",
    className: "flex flex-col gap-4 w-[280px] shrink-0",
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
        className: "w-full h-[254px] bg-[#F5F5F0] rounded-3xl p-6 flex flex-col justify-between relative group cursor-pointer hover:bg-[#EAEAE5] transition-colors",
      },
    ],
  },
  {
    id: "5",
    type: "image",
    src: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/5_1.jpg?v=1770738814",
    alt: "Product unboxing",
    className: "w-[280px] h-[450px] rounded-3xl object-cover shrink-0 mr-4",
  },
];

export function StoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-0 bg-white overflow-hidden ">
      <div className="container mx-auto px-4 mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[2rem] leading-[1.08] tracking-[-0.02em] text-black md:text-[3rem]"
        >
          Stories from scientists, innovators, and members like you.
        </motion.h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-8 px-4 hide-scrollbar snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {stories.map((story) => (
          <div key={story.id} className="snap-center">
            {story.type === "image" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={story.src} 
                  alt={story.alt} 
                  className={story.className}
                  loading="lazy"
                />
              </motion.div>
            )}

            {story.type === "video" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative group cursor-pointer overflow-hidden ${story.className}`}
              >
                <img 
                  src={story.src} 
                  alt={story.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                
                {story.overlayText && (
                  <p className="absolute top-8 left-8 text-white text-2xl font-medium leading-tight max-w-[80%]">
                    {story.overlayText}
                  </p>
                )}
                
                <div className="absolute top-6 right-6 w-10 h-10 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <PlayIcon className="w-4 h-4 text-white ml-0.5" />
                </div>
              </motion.div>
            )}

            {story.type === "stacked" && (
              <div className={story.className}>
                {story.items?.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    {item.type === "image" && (
                      <img 
                        src={item.src} 
                        alt={item.alt} 
                        className={item.className}
                      />
                    )}
                    {item.type === "quote" && (
                      <div className={item.className}>
                        <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center">
                          <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 text-slate-500" />
                        </div>
                        <p className="text-[#1F3D2B] text-sm font-medium leading-relaxed mt-4">
                          "{item.text}"
                        </p>
                        <div className="mt-auto">
                          <span className="font-serif font-bold text-xl tracking-tight text-black">
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
      </div>
    </section>
  );
}
