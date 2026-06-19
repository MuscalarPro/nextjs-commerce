"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

const SECTION_BG = "#EEEDE3";
const ACCENT = "#2F7350";
const CARD_GRADIENT =
  "linear-gradient(155deg, #E6F1EA 0%, #CFE5D7 60%, #BCDCC9 100%)";

type IconName = "absorb" | "pill" | "pills" | "cell" | "waves" | "rings";

function StepIcon({ name }: { name: IconName }) {
  const common = {
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor" as const,
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className: "h-full w-full",
  };
  switch (name) {
    case "absorb":
      return (
        <svg {...common}>
          <rect x="20" y="14" width="8" height="20" rx="4" />
          <line x1="24" y1="14" x2="24" y2="34" />
          {[
            [24, 8],
            [33, 12],
            [36, 21],
            [33, 30],
            [15, 12],
            [12, 21],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="1.4" />
          ))}
        </svg>
      );
    case "pill":
      return (
        <svg {...common}>
          <g transform="rotate(-45 24 24)">
            <rect x="14" y="19" width="20" height="10" rx="5" />
            <line x1="24" y1="19" x2="24" y2="29" />
          </g>
        </svg>
      );
    case "pills":
      return (
        <svg {...common}>
          <g transform="rotate(-45 18 18)">
            <rect x="9" y="13" width="18" height="9" rx="4.5" />
            <line x1="18" y1="13" x2="18" y2="22" />
          </g>
          <g transform="rotate(-45 31 31)">
            <rect x="22" y="26" width="18" height="9" rx="4.5" />
            <line x1="31" y1="26" x2="31" y2="35" />
          </g>
        </svg>
      );
    case "cell":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="15" />
          <g transform="rotate(-30 24 24)">
            <rect x="17" y="20" width="14" height="8" rx="4" />
            <line x1="24" y1="20" x2="24" y2="28" />
          </g>
        </svg>
      );
    case "waves":
      return (
        <svg {...common}>
          {[18, 24, 30].map((y) => (
            <path key={y} d={`M12 ${y}c4-4 8-4 12 0s8 4 12 0`} />
          ))}
        </svg>
      );
    case "rings":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="5" />
          <circle cx="24" cy="24" r="11" />
          <circle cx="24" cy="24" r="17" />
        </svg>
      );
  }
}

type Step = { time: string; title: string; body: string; icon: IconName };

// Demo content — a plausible Urolithin A / M3 timeline, in fixed order.
const STEPS: Step[] = [
  {
    time: "Hour 08",
    title: "Urolithin A reaches the muscle",
    body: "You've taken your first M3 capsules and the actives are already moving. Urolithin A peaks in your bloodstream and reaches the muscles that power every effort.",
    icon: "absorb",
  },
  {
    time: "Day 02",
    title: "Mitophagy switches on",
    body: "The cellular clean-up crew gets to work — damaged mitochondria are tagged and cleared so fresh, efficient ones can take their place.",
    icon: "pill",
  },
  {
    time: "Day 30",
    title: "Energy starts to lift",
    body: "With cleaner mitochondria, your cells make energy more efficiently. Many notice steadier output and quicker recovery between efforts.",
    icon: "pills",
  },
  {
    time: "Day 60",
    title: "Recovery compounds",
    body: "Inflammation and muscle-breakdown markers trend down. Hard sessions stop wrecking you — you bounce back ready to go again.",
    icon: "cell",
  },
  {
    time: "Day 120",
    title: "Measurably stronger",
    body: "In the research window, strength and endurance gains become measurable — renewed from the cell up, with no change to your training.",
    icon: "waves",
  },
  {
    time: "Day 365",
    title: "A new baseline",
    body: "A year in, the protocol has reset your musclespan trajectory. Stronger, more resilient cells are simply how your body runs now.",
    icon: "rings",
  },
];

export function UltraEnduranceTransformation() {
  const [active, setActive] = useState(0);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const mounted = useRef(false);

  // Bring the newly-expanded card into view (skip the initial mount so the
  // page doesn't jump to this section on load).
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    cardRefs.current[active]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [active]);

  const go = (dir: 1 | -1) =>
    setActive((a) => (a + dir + STEPS.length) % STEPS.length);

  return (
    <section className="w-full" style={{ background: SECTION_BG }}>
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-[34px] font-bold leading-[1.05] tracking-tight text-[#1a1a1a] md:text-[48px]">
            The M3 Transformation
          </h2>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous step"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1a1a1a]/20 text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a]/5"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next step"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1a1a1a]/20 text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a]/5"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Expanding timeline — fixed order, the active card grows in place. */}
        <div className="mt-10 overflow-x-auto pb-2 md:mt-14 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex items-start gap-3 md:gap-4">
            {STEPS.map((s, i) => {
              const on = i === active;
              return (
                <li key={i} className="shrink-0">
                  <button
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-expanded={on}
                    aria-label={`${s.time}: ${s.title}`}
                    className={`block text-left transition-[width] duration-500 ease-out motion-reduce:transition-none ${
                      on
                        ? "w-[300px] sm:w-[380px] lg:w-[440px]"
                        : "w-[150px] sm:w-[168px] lg:w-[190px]"
                    }`}
                  >
                    {/* Icon card */}
                    <span
                      className={`flex aspect-square w-full items-center justify-center rounded-[24px] ${
                        on ? "" : "bg-[#1a1a1a]/[0.035] ring-1 ring-[#1a1a1a]/5"
                      }`}
                      style={on ? { background: CARD_GRADIENT } : undefined}
                    >
                      <span
                        className={`block ${on ? "w-[30%]" : "w-[36%] opacity-55"}`}
                        style={{ color: ACCENT }}
                      >
                        <StepIcon name={s.icon} />
                      </span>
                    </span>

                    {/* Label + reveal */}
                    <span className="mt-3 block border-t border-[#1a1a1a]/10 pt-3">
                      <span
                        className={`block text-[15px] font-semibold ${
                          on ? "text-[#1a1a1a]" : "text-[#1a1a1a]/55"
                        }`}
                      >
                        {s.time}
                      </span>
                      <span
                        aria-hidden={!on}
                        className={`block overflow-hidden transition-all duration-500 ease-out motion-reduce:transition-none ${
                          on ? "mt-2 max-h-64 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <span className="block text-[16px] font-semibold text-[#1a1a1a] md:text-[18px]">
                          {s.title}
                        </span>
                        <span className="mt-2 block text-[14px] leading-relaxed text-[#1a1a1a]/60">
                          {s.body}
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
