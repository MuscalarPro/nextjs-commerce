"use client";

import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface DetailContent {
  id: string;
  title: string;
  description: string;
  x: number;
  y: number;
}

const hotspots: DetailContent[] = [
  {
    id: "brain",
    title: "Brain",
    description: "Brain health and function",
    x: 32, 
    y: 24,
  },
  {
    id: "skin",
    title: "Skin",
    description: "Skin elasticity and health",
    x: 39,
    y: 38,
  },
  {
    id: "heart",
    title: "Heart",
    description: "Cardiovascular function",
    x: 53.5,
    y: 54,
  },
  {
    id: "muscle",
    title: "Muscle",
    description: "Muscle strength and recovery",
    x: 36,
    y: 66,
  },
  {
    id: "gut",
    title: "Gut",
    description: "Digestive and immune health",
    x: 66,
    y: 69,
  },
  {
    id: "joints",
    title: "Joints",
    description: "Joint mobility and flexibility",
    x: 49,
    y: 91,
  },
];

export function WeakMitochondriaSystemSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  // Use the hotspots from the previous section or approximate based on the image
  // The image shows specific points: Head, Face, Chest, Stomach/Gut, Leg/Joint
  
  // Re-defining accurate positions based on the visual "woman stretching"
  // These are approximations to match the "feel" if the exact coordinates aren't known.
  // Using the values from the previous turn's definition largely, but adapted for a full-width centered view if needed.
  // Actually, let's use the layout: Image Background + Title Overlay.

  return (
    <section className="relative w-full h-[100vh] min-h-[600px] bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
         {/* Placeholder - User needs to ensure the correct image is here */}
        <Image
          src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/1620d46dfde74bf360162c9420c1218b1c1eaf2f-4096x3202.avif?v=1770233400" 
          alt="Weak mitochondria affect every system in your body"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        {/* Subtle gradient overlay for text readability if needed */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />
      </div>

      {/* Centered Title Overlay */}
      <div className="absolute top-12 left-0 right-0 z-10 text-center px-4">
        <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight drop-shadow-md">
          Weak mitochondria affect every<br className="hidden md:block" /> system in your body.
        </h2>
      </div>

      {/* Hotspots Layer */}
      <div className="absolute inset-0 z-20">
         {/* 
            Since we don't have the exact image dimensions and coordinate mapping 'perfectly',
            we will place a container that likely matches the aspect ratio or use %.
            The previous code had specific % for a specific image. I will reuse those 
            assuming the user uses the same image, or similar.
         */}
         {/* 
            Mapping the hotspots from the previous turn's data to this layout.
            (Brain: 55,13), (Skin: 51,23), (Joints: 69,27), (Heart: 55,34), (Immune: 65,36), (Gut: 71,50), (Muscle: 52,63)
            These look like they fit a portrait/square image. 
            For a full width section, we might need a centered container to keep positions relative to the subject.
         */}
         <div className="relative w-full h-full max-w-4xl mx-auto">
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
                    className="group relative flex items-center justify-center focus:outline-none"
                  >
                    {/* Pulse Ring */}
                    <span 
                      className={clsx(
                        "absolute inline-flex h-full w-full rounded-full bg-white opacity-20",
                        activeId === spot.id ? "animate-ping" : "group-hover:animate-ping"
                      )} 
                    />
                    
                    {/* Circle Icon */}
                    <div className={clsx(
                        "relative h-8 w-8 md:h-10 md:w-10 rounded-full border border-white/50 backdrop-blur-md flex items-center justify-center transition-all duration-300",
                        activeId === spot.id ? "bg-white/20 scale-110" : "bg-white/10 hover:bg-white/20"
                    )}>
                        <PlusIcon className="h-4 w-4 md:h-5 md:w-5 text-white" strokeWidth={2} />
                    </div>

                    {/* Tooltip / Label */}
                    <AnimatePresence>
                        {activeId === spot.id && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                className="absolute top-12 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-xl"
                            >
                                <span className="text-sm font-semibold text-black whitespace-nowrap">
                                    {spot.title}
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                  </button>
                </div>
            ))}
         </div>
      </div>
    </section>
  );
}
