"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface DetailContent {
  id: string;
  title: string;
  headline: string;
  copy: string;
  x: number;
  y: number;
}

const hotspots: DetailContent[] = [
  {
    id: "brain",
    title: "Brain (Cognition)",
    headline: "Neuroprotection",
    copy: 'Contracting muscles release BDNF (Brain-Derived Neurotrophic Factor), which acts as "fertilizer" for new neurons, protecting against cognitive decline.',
    x: 10,
    y: 20,
  },
  {
    id: "skin",
    title: "Skin (Appearance)",
    headline: "Extracellular Matrix",
    copy: "Healthy mitochondria reduce systemic inflammation (inflamm-aging), preserving collagen density and skin elasticity.",
    x: 25,
    y: 30,
  },
  {
    id: "heart",
    title: "Heart (Cardiovascular)",
    headline: "Hemodynamic Efficiency",
    copy: 'Stronger skeletal muscle acts as a "second heart," pumping venous blood back to the center, reducing arterial stiffness and workload on the heart.',
    x: 55,
    y: 50,
  },
  {
    id: "pancreas",
    title: "Pancreas (Metabolism)",
    headline: "Glucose Disposal",
    copy: 'Muscle tissue is a "glucose sink," absorbing up to 80% of post-meal blood sugar. Increasing muscle mass is the most direct way to reverse insulin resistance.',
    x: 55,
    y: 70,
  },
  {
    id: "gut",
    title: "Gut (Immunity)",
    headline: "Immune Modulation",
    copy: "Muscle is the primary storage site for glutamine, the fuel source for immune cells. More muscle = a more robust immune response during infection.",
    x: 66,
    y: 69,
  },
];

export function WeakMitochondriaSystemSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
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
          Weak mitochondria affect every
          <br className="hidden md:block" /> system in your body.
        </h2>
      </div>

      {/* Hotspots Layer */}
      <div className="absolute inset-0 z-20">
        {activeId && (
          <div
            className="fixed inset-0 bg-transparent z-[-1]"
            onClick={() => setActiveId(null)}
          />
        )}
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
                onClick={() =>
                  setActiveId(activeId === spot.id ? null : spot.id)
                }
                className="group relative flex items-center justify-center focus:outline-none"
              >
                {/* Pulse Ring */}
                <span
                  className={clsx(
                    "absolute inline-flex h-full w-full rounded-full bg-white opacity-20",
                    activeId === spot.id
                      ? "animate-ping"
                      : "group-hover:animate-ping",
                  )}
                />

                {/* Circle Icon */}
                <div
                  className={clsx(
                    "relative h-8 w-8 md:h-10 md:w-10 rounded-full border border-white/50 backdrop-blur-md flex items-center justify-center transition-all duration-300",
                    activeId === spot.id
                      ? "bg-white/20 scale-110"
                      : "bg-white/10 hover:bg-white/20",
                  )}
                >
                  <PlusIcon
                    className="h-4 w-4 md:h-5 md:w-5 text-white"
                    strokeWidth={2}
                  />
                </div>

                {/* Tooltip / Label */}
                <AnimatePresence>
                  {activeId === spot.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 10 }}
                      className="absolute top-12 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 py-3 rounded-lg shadow-xl min-w-[200px] max-w-[300px] z-50"
                    >
                      <div className="flex flex-col gap-1 text-left">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          {spot.title}
                        </span>
                        <span className="text-sm font-bold text-black border-b border-gray-100 pb-1 mb-1">
                          {spot.headline}
                        </span>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium">
                          {spot.copy}
                        </p>
                      </div>
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
