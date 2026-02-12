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
import { researchStats, researchStatsIntro } from "data/homePageData";
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
    <section className="w-full bg-neutral-50 py-12 md:py-6 font-sans">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6 lg:px-8">
        <div className="mb-10 md:mb-10 mt-10 max-w-5xl">
          <p className="text-[1.75rem] md:text-[1.75rem] text-neutral-800 leading-relaxed font-light">
            {researchStatsIntro.headline.split("").map((part, i) => (
              <span key={i}>
                {part}
                {i === 0 && (
                  <span className="text-red-700 font-semibold px-0.5"></span>
                )}
              </span>
            ))}
          </p>
          <Link
            href={researchStatsIntro.ctaHref}
            className="mt-10 inline-flex items-center gap-2 border border-neutral-300 bg-white py-3 px-6 text-neutral-900 text-xs font-bold  tracking-widest hover:border-neutral-900 transition-colors"
          >
            {researchStatsIntro.ctaLabel}
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
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
                  <div className="text-[3rem] md:text-[4.5rem] leading-none font-normal tracking-tight text-[#a638b5] flex items-start">
                    <Counter value={numericValue} />
                    {/* Render symbols specifically */}
                    {index === 0 && (
                      <span className="text-2xl md:text-3xl mt-2">+</span>
                    )}
                    {index === 2 && (
                      <span className="text-2xl md:text-3xl mt-2 group-hover:text-red-600 transition-colors">
                        +
                      </span>
                    )}
                  </div>

                  {/* Interactive Icons */}
                  {index === 2 && (
                    <div className="mt-4 hidden md:block">
                      <PlusIcon className="w-8 h-8 text-neutral-300 group-hover:text-red-600 transition-colors" />
                    </div>
                  )}
                  {index === 3 && (
                    <div className="mt-4 hidden md:block">
                      <ArrowRightIcon className="w-8 h-8 text-neutral-300 group-hover:text-red-600 transition-colors" />
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

                <h3 className="text-[1.120rem] font-medium text-neutral-900">
                  {stat.title}
                </h3>
                <p className="text-[0.875rem] text-neutral-500 leading-relaxed max-w-[300px]">
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
                        {/* <div className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
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
                            <h2 className="text-3xl md:text-5xl font-light text-neutral-900 leading-tight mb-8">
                              During the past decade, our research has explored
                              the efficacy of Urolithin A and its effects have
                              been validated in numerous peer-reviewed
                              pre-clinical and clinical trials.
                            </h2>

                            <Link
                              href="/studies"
                              className="inline-flex items-center gap-2 border border-neutral-300 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:border-black transition-colors w-fit mb-12"
                            >
                              OUR STUDIES <ArrowRightIcon className="w-3 h-3" />
                            </Link>
                            {/* Chart Area */}
                            <div className="mt-auto pt-10 border-t border-dotted border-neutral-200 relative">
                              <div className="flex items-center gap-2 mb-8">
                                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                                  Number of publications (pubmed.gov)
                                </span>
                              </div>

                              <div className="relative h-[300px] w-full flex items-end justify-between gap-1 md:gap-2 pr-10">
                                {/* Background Grid Lines (Mock) */}
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-xs text-neutral-300">
                                  <div className="w-full border-b border-dashed border-neutral-100 flex items-end">
                                    <span>600</span>
                                  </div>
                                  <div className="w-full border-b border-dashed border-neutral-100 flex items-end">
                                    <span>500</span>
                                  </div>
                                  <div className="w-full border-b border-dashed border-neutral-100 flex items-end">
                                    <span>400</span>
                                  </div>
                                  <div className="w-full border-b border-dashed border-neutral-100 flex items-end">
                                    <span>300</span>
                                  </div>
                                </div>

                                {/* Bars (Mock Data) */}
                                {[
                                  20, 35, 45, 60, 80, 100, 140, 180, 220, 280,
                                  350, 420, 500,
                                ].map((h, i) => (
                                  <div
                                    key={i}
                                    className="bg-red-300 w-full rounded-t-sm relative group"
                                    style={{
                                      height: `${(h / 600) * 100}%`,
                                      opacity: 0.3 + i * 0.05,
                                    }}
                                  ></div>
                                ))}

                                {/* Big 500 Display */}
                                <div className="absolute top-[20%] left-0 text-[8rem] md:text-[10rem] font-bold text-red-700/90 leading-none">
                                  500
                                  <span className="text-[4rem] align-top relative top-4">
                                    +
                                  </span>
                                </div>
                              </div>

                              <div className="mt-4 text-xs text-neutral-400 md:text-right">
                                Pre-clinical and clinical studies have explored
                                the potential benefits of Urolithin A
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col h-full">
                            <h2 className="text-3xl md:text-5xl font-light text-neutral-900 leading-tight mb-8">
                              Our proprietary ingredient is protected under 50+
                              patents globally, ensuring the highest quality and
                              exclusivity.
                            </h2>

                            <div className="grid grid-cols-1 gap-8 mt-12">
                              <div className="border border-neutral-200 p-8 rounded-lg bg-neutral-50">
                                <div className="text-4xl font-bold text-neutral-900 mb-2">
                                  56
                                </div>
                                <div className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                                  Global Patents
                                </div>
                              </div>
                              <Link
                                href="/patents"
                                className="inline-flex items-center gap-2 border border-neutral-300 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:border-black transition-colors w-fit mb-12"
                              >
                                OUR PATENTS{" "}
                                <ArrowRightIcon className="w-3 h-3" />
                              </Link>
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
