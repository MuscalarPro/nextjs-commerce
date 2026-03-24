"use client";

import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface DetailContent {
  id: string;
  title: string;
  headline: string;
  copy: string;
  x: number;
  y: number;
  mx: number;
  my: number;
  labelSide: "left" | "right";
}

const hotspots: DetailContent[] = [
  {
    id: "brain",
    title: "Brain",
    headline: "Neuroprotection",
    copy: 'Contracting muscles release BDNF (Brain-Derived Neurotrophic Factor), which acts as "fertilizer" for new neurons, protecting against cognitive decline.',
    x: 53,
    y: 26,
    mx: 47,
    my: 20,
    labelSide: "right",
  },
  {
    id: "skin",
    title: "Skin",
    headline: "Extracellular Matrix",
    copy: "Healthy mitochondria reduce systemic inflammation (inflamm-aging), preserving collagen density and skin elasticity.",
    x: 44,
    y: 35,
    mx: 30,
    my: 30,
    labelSide: "left",
  },
  {
    id: "immune",
    title: "Immune System",
    headline: "Immune Modulation",
    copy: "Muscle is the primary storage site for glutamine, the fuel source for immune cells. More muscle = a more robust immune response during infection.",
    x: 53,
    y: 49,
    mx: 44,
    my: 43,
    labelSide: "right",
  },
  {
    id: "joints",
    title: "Joints",
    headline: "Protective Load",
    copy: "Stronger muscles stabilize joints and reduce cartilage wear by absorbing mechanical stress from daily activities.",
    x: 30,
    y: 45,
    mx: 4,
    my: 40,
    labelSide: "left",
  },
  {
    id: "digestive",
    title: "Digestive System",
    headline: "Metabolic Health",
    copy: "Healthy energy factories in gut cells maintain intestinal barrier integrity and support efficient nutrient absorption.",
    x: 55,
    y: 70,
    mx: 52,
    my: 65,
    labelSide: "right",
  },
  {
    id: "muscle",
    title: "Skeletal Muscle",
    headline: "Powerhouse Legacy",
    copy: "Muscle is the largest metabolic organ. Maintaining mitochondria here is critical for mobility, posture, and longevity.",
    x: 60,
    y: 86,
    mx: 55,
    my: 83,
    labelSide: "right",
  },
];

export function WeakMitochondriaSystemSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Helper to get coordinates based on screen size
  const getPos = (spot: DetailContent) => {
    if (isMobile) {
      return { left: `${spot.mx}%`, top: `${spot.my}%` };
    }
    return { left: `${spot.x}%`, top: `${spot.y}%` };
  };

  // Helper to determine if tooltip should show above or below (Desktop only)
  const showTooltipAbove = (spot: DetailContent) => {
    if (isMobile) return false; // Doesn't matter for centered mobile overlay
    return spot.y > 70;
  };

  return (
    <section className="relative w-full h-[100vh] min-h-[600px] bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Landscape.jpg?v=1774330992"
          alt="Weak mitochondria affect every system in your body"
          fill
          className="hidden md:block object-cover object-center opacity-90"
          priority
        />
        <Image
          src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Mobilee.jpg?v=1774330991"
          alt="Weak mitochondria affect every system in your body"
          fill
          className="block md:hidden object-cover object-center opacity-90"
          priority
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />
      </div>

      {/* Centered Title Overlay */}
      <div className="absolute top-8 left-0 right-0 z-10 text-center px-4 md:top-12 ">
        <h2 className="heading-h2 text-white leading-none ">
          Weak mitochondria affect every
          <br className="hidden md:block" /> system in your body.
        </h2>
      </div>

      {/* Backdrop for Mobile Slide-out */}
      <AnimatePresence>
        {activeId && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setActiveId(null)}
          />
        )}
      </AnimatePresence>

      {/* Transparent Click-out Layer for Desktop */}
      {activeId && !isMobile && (
        <div
          className="fixed inset-0 z-[10] bg-transparent"
          onClick={() => setActiveId(null)}
        />
      )}

      {/* Hotspots Layer */}
      <div className="absolute inset-0 z-20">
        <div className="relative w-full h-full max-w-4xl mx-auto">
          {hotspots.map((spot) => {
            const isAbove = showTooltipAbove(spot);
            return (
              <div
                key={spot.id}
                className="absolute transition-all duration-500 ease-in-out"
                style={getPos(spot)}
              >
                <button
                  onClick={() =>
                    setActiveId(activeId === spot.id ? null : spot.id)
                  }
                  className={clsx(
                    "group relative flex items-center focus:outline-none",
                    spot.labelSide === "left"
                      ? "flex-row-reverse text-right"
                      : "flex-row text-left",
                  )}
                >
                  {/* Icon Container with Outer Ring */}
                  <div className="relative flex items-center justify-center">
                    <div className="absolute h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/20" />
                    <span
                      className={clsx(
                        "absolute inline-flex h-8 w-8 md:h-10 md:w-10 rounded-full bg-white opacity-20",
                        activeId === spot.id
                          ? "animate-ping"
                          : "group-hover:animate-ping",
                      )}
                    />
                    <div
                      className={clsx(
                        "relative h-8 w-8 md:h-10 md:w-10 rounded-full border border-white/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300",
                        activeId === spot.id
                          ? "bg-white/20 scale-110"
                          : "bg-white/10 group-hover:bg-white/20",
                      )}
                    >
                      <PlusIcon
                        className="h-4 w-4 md:h-5 md:w-5 text-white"
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  {/* Hotspot Label */}
                  <span
                    className={clsx(
                      "text-[10px] md:text-xs font-bold text-white uppercase tracking-[0.1em] whitespace-nowrap transition-all duration-300",
                      spot.labelSide === "right" ? "ml-3 md:ml-4" : "mr-3 md:mr-4",
                      activeId === spot.id
                        ? "opacity-100"
                        : "opacity-80 group-hover:opacity-100",
                    )}
                  >
                    {spot.title}
                  </span>

                  {/* Desktop Tooltip (Local to Point) */}
                  {!isMobile && (
                    <AnimatePresence>
                      {activeId === spot.id && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            scale: 0.9,
                            x: "-50%",
                            y: isAbove ? -10 : 10,
                          }}
                          animate={{ opacity: 1, scale: 1, x: "-50%", y: 0 }}
                          exit={{
                            opacity: 0,
                            scale: 0.9,
                            x: "-50%",
                            y: isAbove ? -10 : 10,
                          }}
                          className={clsx(
                            "absolute z-[50] min-w-[280px] max-w-[320px] rounded-2xl bg-white px-6 py-6 shadow-2xl backdrop-blur-md transition-all duration-300",
                            isAbove ? "bottom-14" : "top-14",
                            spot.labelSide === "left" ? "right-0" : "left-0",
                          )}
                        >
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveId(null);
                            }}
                            className="absolute top-4 right-4 text-gray-300 hover:text-black transition-colors"
                          >
                            <XMarkIcon className="h-5 w-5" />
                          </button>

                          <div className="flex flex-col gap-2 text-left">
                            <span className="text-[10px] font-bold text-[#d85c41] uppercase tracking-wider">
                              {spot.title}
                            </span>
                            <span className="text-lg font-bold text-black border-b border-gray-100 pb-2 mb-2">
                              {spot.headline}
                            </span>
                            <p className="text-xs text-gray-700 font-medium leading-relaxed">
                              {spot.copy}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Standard Mobile Slide-out Overlay (Top-level) */}
      <AnimatePresence>
        {activeId && isMobile && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full z-[100] bg-white text-neutral-900 shadow-2xl overflow-y-auto"
          >
            {/* Safe lookup for active spot */}
            {(() => {
              const spot = hotspots.find((h) => h.id === activeId);
              if (!spot) return null;

              return (
                <div className="p-8 md:p-12 relative min-h-full">
                  <button
                    onClick={() => setActiveId(null)}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-100 transition-colors text-neutral-400"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>

                  <div className="mt-12 space-y-10">
                    <div>
                      <h5 className="text-[11px] font-bold text-[#d85c41] uppercase tracking-[0.2em] mb-4">
                        {spot.title}
                      </h5>
                      <h2 className="text-4xl font-normal text-neutral-900 leading-tight">
                        {spot.headline}
                      </h2>
                    </div>

                    <div className="prose prose-lg text-neutral-600 max-w-none">
                      <p className="text-lg text-neutral-500 leading-relaxed">
                        {spot.copy}
                      </p>
                    </div>
{/* 
                    <div className="space-y-8 pt-10 border-t border-neutral-100">
                      <div>
                        <h6 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">
                          Scientific Evidence
                        </h6>
                        <div className="rounded-2xl bg-neutral-50 p-6 border border-neutral-100">
                          <p className="text-neutral-500 leading-relaxed italic text-sm">
                            Clinical data indicates that optimizing the cellular metabolic units in the {spot.title.toLowerCase()} system is fundamental to performance and recovery. This Layer Zero protocol focuses on repairing these essential OS pathways.
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {["Mitochondrial Repair", "Systemic Resilience", "Peak Efficiency"].map(
                          (tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-neutral-50 text-[10px] font-bold text-neutral-400 rounded-lg border border-neutral-100 uppercase"
                            >
                              {tag}
                            </span>
                          ),
                        )}
                      </div>
                    </div> */}
                  </div>
                </div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
