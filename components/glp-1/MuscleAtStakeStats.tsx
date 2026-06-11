"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ARROW =
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/journey_arrow_stake_section.svg?v=1781204596";

// Muscle-loss model: at ~40% lean-mass loss without a muscle-protection
// protocol, a user dropping X kg can lose 0.4·X kg of muscle. Mirrors the
// headline 40% stat right above.
const MUSCLE_LOSS_RATE = 0.4;
const MIN_KGS = 5;
const MAX_KGS = 100;
const DEFAULT_KGS = 30;

const M3_NUMBERS = [
  { label: "On the protocol", value: "1000+" },
  { label: "Urolithin A / serving", value: "1000 mg" },
  { label: "Member rating", value: "4.8 stars" },
  { label: "To feel strength", value: "8–16 wk" },
];

export function MuscleAtStakeStats() {
  const [weightToLose, setWeightToLose] = useState(DEFAULT_KGS);
  const couldBeMuscle = Math.round(weightToLose * MUSCLE_LOSS_RATE);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pt-20 text-center md:px-8 md:pt-28">
        {/* Heading */}
        <h2 className="text-balance text-[2rem] font-semibold leading-tight text-[#1a1a1a] md:text-[3rem] lg:text-[3.5rem]">
          How much muscle is at stake?
        </h2>

        {/* Big 40% stat with the supplied downward arrow asset */}
        <div className="mt-10 flex items-center justify-center gap-3 md:mt-14 md:gap-5">
          <Image
            src={ARROW}
            alt=""
            width={120}
            height={160}
            className="h-12 w-auto md:h-24 lg:h-32"
          />
          <span className="font-sans text-[5rem] font-semibold leading-none tracking-tight text-[#1a1a1a] md:text-[9rem] lg:text-[11rem]">
            40%
          </span>
        </div>
        <p className="mx-auto mt-6 max-w-md text-balance text-sm leading-relaxed text-[#1a1a1a]/60 md:text-[15px]">
          of GLP-1 weight loss can be muscle. The M3 protocol is built to keep
          more of it lean.
        </p>

        {/* Two-column area: muscle check + M3 by the numbers */}
        <div className="mt-16 grid gap-12 border-t border-[#1a1a1a]/10 pt-12 md:mt-24 md:grid-cols-2 md:gap-16 md:pt-16">
          {/* LEFT — interactive 2-minute muscle check */}
          <div className="text-left">
            <h3 className="text-xl font-semibold text-[#1a1a1a] md:text-[22px]">
              Your 2-minute muscle check
            </h3>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1a1a1a]/55">
                  Weight to lose
                </p>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-sans text-[2.5rem] font-semibold leading-none text-[#1a1a1a] md:text-[3rem]">
                    {weightToLose}
                  </span>
                  <span className="text-sm text-[#1a1a1a]/55">kgs</span>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1a1a1a]/55">
                  Could be muscle
                </p>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-sans text-[2.5rem] font-semibold leading-none text-[#4D5A6F] md:text-[3rem]">
                    {couldBeMuscle}
                  </span>
                  <span className="text-sm text-[#4D5A6F]">kgs ↓</span>
                </div>
              </div>
            </div>

            {/* Slider — custom-styled native range */}
            <div className="mt-6">
              <input
                type="range"
                min={MIN_KGS}
                max={MAX_KGS}
                step={1}
                value={weightToLose}
                onChange={(e) => setWeightToLose(Number(e.target.value))}
                aria-label="Weight to lose"
                className="h-1 w-full cursor-pointer appearance-none rounded-full bg-[#1a1a1a]/15 outline-none [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-[#1a1a1a] [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#1a1a1a]"
              />
            </div>

            <p className="mt-5 text-xs leading-relaxed text-[#1a1a1a]/50">
              Illustrative estimate at ~40% lean-mass loss without a
              muscle-protection protocol (resistance training + protein + M3).
              Individual results vary. Not medical advice.
            </p>
          </div>

          {/* RIGHT — M3 by the numbers */}
          <div className="text-left">
            <h3 className="text-xl font-semibold text-[#1a1a1a] md:text-[22px]">
              M3 by the numbers
            </h3>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8">
              {M3_NUMBERS.map((n) => (
                <div key={n.label}>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1a1a1a]/55">
                    {n.label}
                  </p>
                  <p className="mt-2 text-base font-semibold text-[#1a1a1a] md:text-[17px]">
                    {n.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Outsized "on M3" callout — full bleed */}
      <div className="mt-16 overflow-hidden text-center md:mt-24">
        <p
          className="font-semibold leading-[0.85] tracking-[-0.045em] text-[#1a1a1a]"
          style={{
            fontSize: "clamp(6rem, 30vw, 28rem)",
          }}
        >
          on M3
        </p>
        <div className="mt-6 pb-20">
          <Link
            href="/product/decode-peak-performance-m3"
            className="inline-flex items-center rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
          >
            Get on M3
          </Link>
        </div>
      </div>
    </section>
  );
}
