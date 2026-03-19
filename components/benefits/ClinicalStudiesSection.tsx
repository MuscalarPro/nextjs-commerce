"use client";

import {
  ArrowRightIcon,
  PlusIcon,
  BoltIcon,
  HeartIcon,
  SparklesIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export function ClinicalStudiesSection() {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] p-4 py-10 md:py-20 px-4 md:px-2 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start text-left">
          <h2 className="heading-h2">17 placebo-controlled clinical studies</h2>

          <p className="body-text">
            For over 15 years, we have built on meaningful scientific
            discoveries across Urolithin A, Spermidine, and S-Allyl Cysteine and
            put them to the scrutiny of the scientific community by publishing
            in high-impact, peer-reviewed journals.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-12 w-full">
            {/* Item 1: Muscle Strength */}
            <div className="flex flex-col w-full">
              <div className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center flex-shrink-0">
                <BoltIcon className="w-6 h-6 text-[#1a1a1a] stroke-1" />
              </div>
              <div className="w-full border-b-[1.5px] border-dotted border-neutral-300 my-6"></div>
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-[18px] md:text-[20px] text-[#1a1a1a] font-medium tracking-tight">
                  Muscle Strength
                </h4>
                <PlusIcon className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-1 stroke-1" />
              </div>
              <div className="mt-3 flex flex-col gap-2">
                <p className="text-[14px] md:text-[15px] text-[#666666] font-normal leading-relaxed">
                  RCT in overweight adults aged 40–64, 16-week supplementation
                  at 1,000mg. Significant improvement in hamstring muscle
                  strength measured via knee flexion and extension dynamometry.
                </p>
              </div>
            </div>

            {/* Item 2: Peak VO₂ Max */}
            <div className="flex flex-col w-full">
              <div className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center flex-shrink-0">
                <HeartIcon className="w-6 h-6 text-[#1a1a1a] stroke-1" />
              </div>
              <div className="w-full border-b-[1.5px] border-dotted border-neutral-300 my-6"></div>
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-[18px] md:text-[20px] text-[#1a1a1a] font-medium tracking-tight">
                  Peak VO₂ Max
                </h4>
                <PlusIcon className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-1 stroke-1" />
              </div>
              <div className="mt-3 flex flex-col gap-2">
                <p className="text-[14px] md:text-[15px] text-[#666666] font-normal leading-relaxed">
                  In sedentary, overweight 40–64 year olds, 16 weeks of 1,000mg
                  Urolithin A produced measurable improvements in aerobic capacity
                  without any change in exercise regimen — suggesting direct
                  mitochondrial efficiency gains.
                </p>
              </div>
            </div>

            {/* Item 3: Brain Health */}
            <div className="flex flex-col w-full">
              <div className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center flex-shrink-0">
                <SparklesIcon className="w-6 h-6 text-[#1a1a1a] stroke-1" />
              </div>
              <div className="w-full border-b-[1.5px] border-dotted border-neutral-300 my-6"></div>
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-[18px] md:text-[20px] text-[#1a1a1a] font-medium tracking-tight">
                  Brain Health
                </h4>
                <PlusIcon className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-1 stroke-1" />
              </div>
              <div className="mt-3 flex flex-col gap-2">
                <p className="text-[14px] md:text-[15px] text-[#666666] font-normal leading-relaxed">
                  Urolithin A activated PINK1/Parkin mitophagy in neuronal
                  cells, clearing dysfunctional mitochondria that accumulate in
                  brain tissue with age. Pre-clinical models showed reduced
                  neuroinflammation markers and improved synaptic signaling in
                  hippocampal tissue.
                </p>
              </div>
            </div>

            {/* Item 4: Mitochondrial Health */}
            <div className="flex flex-col w-full">
              <div className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center flex-shrink-0">
                <SunIcon className="w-6 h-6 text-[#1a1a1a] stroke-1" />
              </div>
              <div className="w-full border-b-[1.5px] border-dotted border-neutral-300 my-6"></div>
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-[18px] md:text-[20px] text-[#1a1a1a] font-medium tracking-tight">
                  Mitochondrial Health
                </h4>
                <PlusIcon className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-1 stroke-1" />
              </div>
              <div className="mt-3 flex flex-col gap-2">
                <p className="text-[14px] md:text-[15px] text-[#666666] font-normal leading-relaxed">
                  1,000mg Urolithin A activated phosphorylated Parkin (Ser65)
                  in human skeletal muscle, increasing mitophagy flux by 39%
                  over placebo at 16 weeks. OXPHOS protein expression in
                  skeletal muscle biopsies confirmed biogenesis of new, functional
                  mitochondria with improved electron transport chain efficiency.
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/studies"
            className="inline-flex items-center gap-3 bg-[#2b2b26] px-8 py-4 text-white text-xs font-bold tracking-[0.15em] rounded-full hover:bg-black transition-colors mt-12"
          >
            Our Studies
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end w-full md:sticky md:top-24">
          <div className="relative w-full max-w-xl aspect-square">
            <Image
              src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Muscalarpro_capsule.png?v=1770369222"
              alt="MuscalarPro Capsule"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
