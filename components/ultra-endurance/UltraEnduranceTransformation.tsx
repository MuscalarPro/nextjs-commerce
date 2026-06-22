"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SECTION_BG = "#EEEDE3";

type Step = { time: string; title: string; body: string; image: string };

// Demo content — a plausible Urolithin A / M3 timeline, in fixed order.
const STEPS: Step[] = [
  {
    time: "Hour 08",
    title: "Urolithin A reaches the muscle",
    body: "You've taken your first M3 capsules and the actives are already moving. Urolithin A peaks in your bloodstream and reaches the muscles that power every effort.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Standalone_brain_image.jpg?v=1782111232",
  },
  {
    time: "Day 02",
    title: "Mitophagy switches on",
    body: "The cellular clean-up crew gets to work — damaged mitochondria are tagged and cleared so fresh, efficient ones can take their place.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Mitophagy.avif?v=1782111233",
  },
  {
    time: "Day 30",
    title: "Energy starts to lift",
    body: "With cleaner mitochondria, your cells make energy more efficiently. Many notice steadier output and quicker recovery between efforts.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Energy.png?v=1782112530",
  },
  {
    time: "Day 60",
    title: "Recovery compounds",
    body: "Inflammation and muscle-breakdown markers trend down. Hard sessions stop wrecking you — you bounce back ready to go again.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Recovery.jpg?v=1782111233",
  },
  {
    time: "Day 120",
    title: "Measurably stronger",
    body: "In the research window, strength and endurance gains become measurable — renewed from the cell up, with no change to your training.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Measurably_stronger.png?v=1782111234",
  },
  {
    time: "Day 365",
    title: "A new baseline",
    body: "A year in, the protocol has reset your musclespan trajectory. Stronger, more resilient cells are simply how your body runs now.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/A_new_baseline_78300d16-df45-4504-bb07-c5a03259db48.png?v=1782112640",
  },
];

export function UltraEnduranceTransformation() {
  const [active, setActive] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const mounted = useRef(false);

  // Bring the active card fully into view by scrolling ONLY the horizontal
  // track. We wait for the 500ms width transition to settle first — measuring
  // mid-transition reads stale positions and over-scrolls — then scroll the
  // minimum amount (never past the card), so nothing gets clipped. Skip the
  // initial mount.
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const reveal = () => {
      const card = cardRefs.current[active];
      if (!card) return;
      const cr = card.getBoundingClientRect();
      const sr = scroller.getBoundingClientRect();
      const inset = 12;
      let dx = 0;
      if (cr.left < sr.left + inset) dx = cr.left - sr.left - inset;
      else if (cr.right > sr.right - inset) dx = cr.right - sr.right + inset;
      if (dx !== 0) {
        scroller.scrollBy({ left: dx, behavior: reduce ? "auto" : "smooth" });
      }
    };
    const id = window.setTimeout(reveal, reduce ? 0 : 520);
    return () => window.clearTimeout(id);
  }, [active]);

  const go = (dir: 1 | -1) =>
    setActive((a) => (a + dir + STEPS.length) % STEPS.length);

  return (
    <section className="w-full" style={{ background: SECTION_BG }}>
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        {/* Header — stacks on mobile so the heading gets full width and the
            long word "Transformation" can't push the page wider than the
            viewport (which would break horizontal scrolling). */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <h2 className="min-w-0 text-[30px] font-bold leading-[1.05] tracking-tight text-[#1a1a1a] sm:text-[40px] md:text-[48px]">
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
        <div
          ref={scrollerRef}
          className="mt-10 overflow-x-auto overscroll-x-contain pb-2 md:mt-14 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
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
                        ? "w-[82vw] max-w-[420px] sm:w-[380px] sm:max-w-none lg:w-[440px]"
                        : "w-[150px] sm:w-[168px] lg:w-[190px]"
                    }`}
                  >
                    {/* Image card */}
                    <span className="relative block aspect-square w-full overflow-hidden rounded-[24px] ring-1 ring-[#1a1a1a]/5">
                      <Image
                        src={s.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 300px, 440px"
                        className="object-cover"
                      />
                      {/* De-emphasise the collapsed cards toward the section
                          background so the active one stands out. */}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none ${
                          on ? "opacity-0" : "opacity-100"
                        }`}
                        style={{ background: `${SECTION_BG}59` }}
                      />
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
