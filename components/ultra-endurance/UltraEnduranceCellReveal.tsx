"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const LIME = "#d2f392";
// Fallback fill shown behind the image until it loads (and on the
// reduced-motion panel). Brand green/teal, matching the page's dark sections.
const REVEAL_BG =
  "radial-gradient(circle at 50% 42%, #3C8F69 0%, #2F7350 55%, #235E5E 100%)";

// The image that fills the zooming circle and, once zoomed, the whole screen.
const REVEAL_IMAGE =
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/hf_20260616_111742_77b45748-7bad-403c-9bd7-a00fca7d49be.png?v=1782380908";

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
          className="relative flex min-h-[70svh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
          style={{ background: REVEAL_BG }}
        >
          <Image
            src={REVEAL_IMAGE}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10">
            <RevealContent />
          </div>
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

        {/* Zooming image circle — starts small, scales up to fill the screen.
            REVEAL_BG sits behind as a fallback until the image loads. */}
        <motion.div
          aria-hidden="true"
          style={{
            scale: circleScale,
            width: "70vmin",
            height: "70vmin",
            background: REVEAL_BG,
          }}
          className="pointer-events-none absolute overflow-hidden rounded-full"
        >
          <Image
            src={REVEAL_IMAGE}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          {/* Scrim so the revealed white text stays legible over the image. */}
          <div className="absolute inset-0 bg-black/35" />
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
