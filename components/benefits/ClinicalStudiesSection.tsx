"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export function ClinicalStudiesSection() {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] p-4 py-10 md:py-20 px-4 md:px-2 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start text-left">
          <h2 className="text-3xl md:text-[36px] font-medium text-[#1a1a1a] tracking-tight leading-[1.05] font-serif">
            17 placebo-controlled clinical studies
          </h2>

          <p className="mt-8 text-[14px] md:text-[16px] text-[#8e8e8e] leading-[1.6] font-medium max-w-xl">
            For over 15 years, we have built on meaningful scientific
            discoveries across Urolithin A, Spermidine, and S-Allyl Cysteine and
            put them to the scrutiny of the scientific community by publishing
            in{" "}
            <strong className="text-[#1a1a1a] font-semibold">
              high-impact, peer-reviewed journals
            </strong>
            .
          </p>

          <div className="mt-12 flex flex-col gap-8 w-full">
            {/* Item 1 */}
            <div className="flex items-start gap-4">
              <div className="w-[42px] h-[42px] rounded-lg bg-[#c65842] flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                <span className="text-white text-[11px] font-bold tracking-widest leading-none">
                  UA
                </span>
              </div>
              <div className="flex flex-col gap-1.5 min-w-0">
                <h4 className="text-[18px] text-[#1a1a1a] font-bold leading-tight">
                  +12% muscle strength · +10.2% peak VO₂
                </h4>
                <p className="text-[14px] text-[#8e8e8e] font-medium leading-snug">
                  RCT in overweight adults aged 40–64, 16-week supplementation
                  at 1,000mg
                </p>
                <p className="text-[12px] font-mono tracking-widest text-[#d85c41] mt-1 break-words">
                  Cell Reports Medicine (2022) · JAMA Network Open (2022)
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4">
              <div className="w-[42px] h-[42px] rounded-lg bg-[#276449] flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                <span className="text-white text-[11px] font-bold tracking-widest leading-none">
                  SP
                </span>
              </div>
              <div className="flex flex-col gap-1.5 min-w-0">
                <h4 className="text-[18px] text-[#1a1a1a] font-bold leading-tight">
                  Muscle stem cell activation · Cardiac improvement
                </h4>
                <p className="text-[14px] text-[#8e8e8e] font-medium leading-snug">
                  6mg spermidine increased Pax7+/MyoD+ cells and improved
                  ejection fraction
                </p>
                <p className="text-[11px] font-mono tracking-widest text-[#d85c41] mt-1 break-words">
                  Cell Discovery (2024) · PMC Cardiovascular Research
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4">
              <div className="w-[42px] h-[42px] rounded-lg bg-[#5d5598] flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                <span className="text-white text-[11px] font-bold tracking-widest leading-none">
                  SAC
                </span>
              </div>
              <div className="flex flex-col gap-1.5 min-w-0">
                <h4 className="text-[18px] text-[#1a1a1a] font-bold leading-tight">
                  65% reduced muscle loss · +8% critical power
                </h4>
                <p className="text-[14px] text-[#8e8e8e] font-medium leading-snug">
                  1mg SAC reduced proteolytic activity by 70% and boosted time
                  to fatigue
                  <br className="hidden md:block" />
                  +18%
                </p>
                <p className="text-[12px] font-mono tracking-widest text-[#d85c41] mt-1 break-words">
                  Peer-reviewed exercise & preclinical studies
                </p>
              </div>
            </div>
          </div>
          <Link
            href="/studies"
            className="inline-flex items-center gap-3 bg-[#2b2b26] px-8 py-4 text-white text-xs font-bold  tracking-[0.15em] rounded-full hover:bg-black transition-colors mt-8"
          >
            Our Studies
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end w-full">
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
