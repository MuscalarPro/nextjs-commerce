"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  ArrowRightIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { researchStats, researchStatsIntro, studiesDrawerData } from "data/home/homePageData";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function Counter({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const displayValue = useTransform(springValue, (latest) =>
    Math.floor(latest),
  );

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return (
    <motion.span ref={ref} className={className}>
      {displayValue}
    </motion.span>
  );
}

export function ResearchStatsSection() {
  const [drawerContent, setDrawerContent] = useState<
    "studies" | "patents" | null
  >(null);

  function openDrawer(type: "studies" | "patents") {
    setDrawerContent(type);
  }

  function closeDrawer() {
    setDrawerContent(null);
  }

  return (
    <section className="w-full bg-white py-12 md:py-6 font-sans">
      <div className="mx-auto  max-w-[1440px] px-4 md:px-2">
        <div className="mb-10 md:mb-10 mt-10 max-w-5xl">
          <p className="heading-h2 text-[#000000] text-left leading-[1.25]">
            {researchStatsIntro.headline}
          </p>
          <div className="flex justify-start">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block mt-4"
            >
              <Link
                href={researchStatsIntro.ctaHref}
                className="inline-flex items-center gap-2 bg-black px-8 py-3 text-white text-xs font-bold rounded-full border border-transparent hover:border-black hover:bg-white hover:text-black transition-all"
              >
                {researchStatsIntro.ctaLabel}
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-dotted border-neutral-300 pt-12">
          {researchStats.map((stat, index) => {
            const isInteractive = index === 2 || index === 3;
            // Parse the number from strings like "15+", "500+"
            const numericValue =
              parseInt(stat.value.replace(/[^0-9]/g, "")) || 0;

            return (
              <div
                key={stat.title}
                className={`space-y-4 group ${isInteractive ? "cursor-pointer" : ""}`}
                onClick={() => {
                  if (index === 2) openDrawer("studies");
                  if (index === 3) openDrawer("patents");
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="text-[3rem] md:text-[4.5rem] font-normal text-[#a638b5] flex items-start">
                    <Counter value={numericValue} />
                    {/* Render symbols specifically */}
                    {index === 0 && (
                      <span className="text-2xl md:text-3xl mt-2">+</span>
                    )}
                    {index === 2 && (
                      <span className="text-2xl md:text-3xl mt-2 group-hover:text-black transition-colors">
                        +
                      </span>
                    )}
                  </div>

                  {/* Interactive Icons */}
                  {index === 2 && (
                    <div className="mt-4 hidden md:block">
                      <PlusIcon className="w-8 h-8 text-neutral-300 group-hover:text-black transition-colors" />
                    </div>
                  )}
                  {index === 3 && (
                    <div className="mt-4 hidden md:block">
                      <ArrowRightIcon className="w-8 h-8 text-neutral-300 group-hover:text-black transition-colors" />
                    </div>
                  )}
                </div>

                {/* Mobile Icons for interactive elements */}
                {(index === 2 || index === 3) && (
                  <div className="md:hidden w-full h-px bg-neutral-200 my-2" />
                )}
                {index !== 2 && index !== 3 && (
                  <div className="hidden md:block w-full h-px bg-transparent my-2" />
                )}

                <h3 className="body-text">
                  {stat.title}
                </h3>
                <p className="body-text-sm text-neutral-500    max-w-[300px]">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Drawer / Side Modal */}
      <Transition appear show={!!drawerContent} as="div">
        <Dialog as="div" className="relative z-[100]" onClose={closeDrawer}>
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogBackdrop className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-0 md:pl-10">
                <TransitionChild
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <DialogPanel className="pointer-events-auto w-screen max-w-2xl">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      {/* Header */}
                      <div className="px-6 py-6 sm:px-10 flex items-start justify-between">
                        {/* <div className="text-sm font-semibold uppercase text-neutral-500">
                                   Mitopure <span className="text-neutral-300">|</span> {drawerContent === "studies" ? "Scientific research" : "Intellectual Property"}
                                 </div> */}
                        <button
                          type="button"
                          className="rounded-md text-neutral-400 hover:text-neutral-500 focus:outline-none"
                          onClick={closeDrawer}
                        >
                          <XMarkIcon className="h-8 w-8 font-light" />
                        </button>
                      </div>

                      {/* Content */}
                      <div className="relative mt-6 flex-1 px-6 sm:px-10 pb-10">
                        {drawerContent === "studies" ? (
                          <div className="flex flex-col h-full">
                            <div className="mb-2 text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                              The Science Behind M3
                            </div>
                            <h2 className="text-3xl md:text-5xl font-serif font-light text-neutral-900 leading-tight mb-8">
                              Three ingredients. Thousands of studies. One{" "}
                              <span className="text-[#a638b5] italic font-medium">
                                breakthrough
                              </span>{" "}
                              formula.
                            </h2>

                            <p className="text-sm text-neutral-600 leading-relaxed mb-8 max-w-2xl">
                              Over the past decade, research into Urolithin A,
                              Spermidine, and S‑Allyl Cysteine has revealed
                              powerful synergistic effects on mitochondrial
                              function, autophagy, and cellular defense —
                              validated across hundreds of peer‑reviewed
                              pre‑clinical and clinical trials.
                            </p>

                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.98 }}
                              className="inline-block mb-12"
                            >
                              <Link
                                href="/studies"
                                className="inline-flex items-center gap-2 bg-white px-8 py-3 text-black text-xs font-bold uppercase rounded-full hover:bg-black hover:text-white transition-all w-fit border border-neutral-200"
                              >
                                OUR STUDIES{" "}
                                <ArrowRightIcon className="w-3 h-3" />
                              </Link>
                            </motion.div>

                            {/* Ingredient Tags */}
                            <div className="flex flex-wrap gap-3 mb-10 pb-8 border-b border-neutral-100">
                              {studiesDrawerData.ingredients.map((ing: any) => (
                                <div
                                  key={ing.name}
                                  className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider ${ing.bgColor} ${ing.textColor} border border-transparent`}
                                >
                                  {ing.name}
                                </div>
                              ))}
                              <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider py-1 ml-auto">
                                Number of publications (pubmed.gov)
                              </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-3 gap-4 mb-16 relative">
                              {studiesDrawerData.ingredients.map(
                                (ing: any, idx: number) => (
                                  <div
                                    key={ing.name}
                                    className={`flex flex-col items-center text-center ${idx < 2 ? "border-r border-neutral-100" : ""}`}
                                  >
                                    <div
                                      className="text-4xl md:text-5xl font-bold mb-2 transition-transform hover:scale-110 cursor-default"
                                      style={{ color: ing.color }}
                                    >
                                      {ing.count}
                                    </div>
                                    <div className="text-[11px] font-bold text-neutral-800 uppercase tracking-tight">
                                      {ing.name}
                                    </div>
                                    <div className="text-[10px] text-neutral-500 max-w-[120px] mt-1">
                                      {ing.focus}
                                    </div>
                                  </div>
                                ),
                              )}
                            </div>

                            {/* Combined Total Highlight */}
                            <div className="flex items-center gap-6 mb-12">
                              <div className="text-6xl font-bold text-neutral-900 tracking-tighter">
                                2,800
                                <span className="text-3xl align-top relative top-2">
                                  +
                                </span>
                              </div>
                              <div className="text-xs text-neutral-500 max-w-[240px] leading-snug">
                                Combined peer-reviewed publications across all
                                three M3 ingredients on PubMed
                              </div>
                            </div>

                            {/* Stacked Chart Area */}
                            <div className="relative mt-8 pt-8 border-t border-neutral-100">
                              <div className="relative h-[240px] w-full flex items-end justify-between gap-1 md:gap-2 mb-4">
                                {/* Grid Lines */}
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[10px] text-neutral-300">
                                  {[800, 700, 600, 500, 400, 300, 200, 100, 0].map(
                                    (val) => (
                                      <div
                                        key={val}
                                        className="w-full border-b border-neutral-50 flex items-end h-px"
                                      >
                                        <span className="relative -top-2">
                                          {val}
                                        </span>
                                      </div>
                                    ),
                                  )}
                                </div>

                                {/* Stacked Bars */}
                                {studiesDrawerData.chart.data.map(
                                  (item: any, i: number) => {
                                    const total =
                                      item.ua + item.sp + item.sac;
                                    const maxHeight = 800;
                                    return (
                                      <div
                                        key={item.year}
                                        className="relative flex-1 flex flex-col justify-end group transition-all"
                                      >
                                        {/* SAC Segment */}
                                        <motion.div
                                          initial={{ height: 0 }}
                                          animate={{
                                            height: `${(item.sac / maxHeight) * 100}%`,
                                          }}
                                          className="w-full bg-[#693979] rounded-t-[2px] relative z-30"
                                        />
                                        {/* SP Segment */}
                                        <motion.div
                                          initial={{ height: 0 }}
                                          animate={{
                                            height: `${(item.sp / maxHeight) * 100}%`,
                                          }}
                                          className="w-full bg-[#7b2a8a] relative z-20"
                                        />
                                        {/* UA Segment */}
                                        <motion.div
                                          initial={{ height: 0 }}
                                          animate={{
                                            height: `${(item.ua / maxHeight) * 100}%`,
                                          }}
                                          className="w-full bg-[#a638b5] relative z-10"
                                        />

                                        {/* Year Label */}
                                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-medium text-neutral-400">
                                          {item.year}
                                        </div>
                                      </div>
                                    );
                                  },
                                )}
                              </div>

                              <div className="mt-12 text-[10px] text-neutral-400 italic">
                                {studiesDrawerData.chart.source}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col h-full">
                            <h2 className="text-3xl md:text-5xl font-light text-neutral-900 mb-8">
                              Our proprietary ingredient is protected under 50+
                              patents globally, ensuring the highest quality and
                              exclusivity.
                            </h2>

                            <div className="grid grid-cols-1 gap-8 mt-12">
                              <div className="border border-neutral-200 p-8 rounded-lg bg-neutral-50">
                                <div className="text-4xl font-bold text-neutral-900 mb-2">
                                  56
                                </div>
                                <div className="text-sm font-semibold uppercase text-neutral-500">
                                  Global Patents
                                </div>
                              </div>
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-block mb-12"
                              >
                                <Link
                                  href="/patents"
                                  className="inline-flex items-center gap-2 bg-white px-8 py-3 text-xs font-bold uppercase rounded-full hover:bg-black transition-all w-fit text-black hover:text-white"
                                >
                                  OUR PATENTS{" "}
                                  <ArrowRightIcon className="w-3 h-3" />
                                </Link>
                              </motion.div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
}
