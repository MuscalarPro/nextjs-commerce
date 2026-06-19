"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const LIME = "#d2f392";
// The circle's fill — also the background once it has zoomed to fill the
// screen. Brand green/teal, matching the page's other dark sections.
const REVEAL_BG =
  "radial-gradient(circle at 50% 42%, #3C8F69 0%, #2F7350 55%, #235E5E 100%)";

// Faint cell/capsule diagram inside the zooming circle.
function PillDiagram({ className }: { className?: string }) {
  const pill = (x: number, y: number) => (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
      <rect x={-21} y={-10} width={42} height={20} rx={10} />
      <line x1={-7} y1={-6} x2={-7} y2={6} />
      <line x1={7} y1={-6} x2={7} y2={6} />
    </g>
  );
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
      className={className}
    >
      <circle cx={120} cy={120} r={92} strokeOpacity={0.35} />
      <circle cx={120} cy={120} r={28} strokeOpacity={0.55} />
      <g strokeOpacity={0.5}>
        {pill(79, 79)}
        {pill(161, 79)}
        {pill(79, 161)}
        {pill(161, 161)}
      </g>
    </svg>
  );
}

function FirstContent() {
  return (
    <>
      <p
        className="text-[12px] font-semibold uppercase tracking-[0.3em] md:text-[13px]"
        style={{ color: LIME }}
      >
        Become a peak athlete in
      </p>
      <p className="mt-3 font-sans font-bold leading-[0.9] tracking-tight text-[clamp(4rem,19vw,15rem)] md:mt-4">
        <span style={{ color: LIME }}>120</span>
        <span className="text-white">days</span>
      </p>
      <p
        className="mx-auto mt-6 max-w-xl text-[clamp(1rem,2.2vw,1.5rem)] leading-snug text-white/80 md:mt-8"
        style={{ fontFamily: "var(--font-playfair), serif" }}
      >
        Measurably stronger muscle — renewed from the cell up, with no change to
        your training.<sup>*</sup>
      </p>
    </>
  );
}

function RevealContent() {
  return (
    <>
      <h2 className="font-sans font-semibold leading-[1.02] tracking-tight text-white text-[clamp(2.5rem,7vw,5.5rem)]">
        Peak, built from
        <br />
        the cell up.
      </h2>
      <p
        className="mx-auto mt-6 max-w-2xl text-[clamp(1rem,2.2vw,1.5rem)] leading-snug text-white/85 md:mt-8"
        style={{ fontFamily: "var(--font-playfair), serif" }}
      >
        Urolithin A and spermidine renew the mitochondria behind your strength,
        endurance and recovery — so your best keeps compounding.
      </p>
    </>
  );
}

export function UltraEnduranceCellReveal() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // First text fades out early; circle + rings zoom in; second text reveals.
  const firstOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0]);
  const firstScale = useTransform(scrollYProgress, [0, 0.28], [1, 1.08]);
  const circleScale = useTransform(scrollYProgress, [0, 1], [0.22, 4]);
  const ringsScale = useTransform(scrollYProgress, [0, 1], [1, 3.4]);
  const ringsOpacity = useTransform(scrollYProgress, [0, 0.5, 0.85], [
    0.5, 0.3, 0,
  ]);
  const diagramOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.45, 0.8],
    [0, 0.5, 0.15],
  );
  const secondOpacity = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);
  const secondScale = useTransform(scrollYProgress, [0.6, 1], [0.96, 1]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  // Reduced-motion: skip the scroll-zoom entirely and present both messages
  // as two static stacked panels.
  if (reduce) {
    return (
      <section className="w-full">
        <div className="flex min-h-[70svh] flex-col items-center justify-center bg-[#0a0a0f] px-6 py-24 text-center">
          <FirstContent />
        </div>
        <div
          className="flex min-h-[70svh] flex-col items-center justify-center px-6 py-24 text-center"
          style={{ background: REVEAL_BG }}
        >
          <RevealContent />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#0a0a0f]"
      style={{ height: "300svh" }}
    >
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden">
        {/* Concentric rings */}
        <motion.div
          aria-hidden="true"
          style={{ scale: ringsScale, opacity: ringsOpacity }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          {[44, 76, 108, 140].map((s) => (
            <span
              key={s}
              className="absolute rounded-full border"
              style={{
                width: `${s}vmin`,
                height: `${s}vmin`,
                borderColor: "rgba(210,243,146,0.22)",
              }}
            />
          ))}
        </motion.div>

        {/* Zooming circle + diagram */}
        <motion.div
          aria-hidden="true"
          style={{
            scale: circleScale,
            width: "70vmin",
            height: "70vmin",
            background: REVEAL_BG,
          }}
          className="pointer-events-none absolute flex items-center justify-center rounded-full"
        >
          <motion.div style={{ opacity: diagramOpacity }} className="w-[60%]">
            <PillDiagram className="h-full w-full text-white" />
          </motion.div>
        </motion.div>

        {/* First text — fades out */}
        <motion.div
          style={{ opacity: firstOpacity, scale: firstScale }}
          className="relative z-10 px-6 text-center"
        >
          <FirstContent />
        </motion.div>

        {/* Second text — reveals on the filled circle */}
        <motion.div
          style={{ opacity: secondOpacity, scale: secondScale }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center"
        >
          <RevealContent />
        </motion.div>

        {/* Scroll hint */}
        <motion.p
          aria-hidden="true"
          style={{ opacity: scrollHintOpacity }}
          className="absolute right-5 top-6 z-30 text-[11px] font-medium uppercase tracking-[0.2em] text-white/45 md:right-10"
        >
          Scroll ↓
        </motion.p>
      </div>
    </section>
  );
}
