"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE =
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/muscle_longevity_glp_page_cover_photo.png?v=1781002692";

const PRODUCT_IMAGE =
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/muscalarpro_muscle_strength_and_hypertrophy.png?v=1779145694";

const SECTION_BG = "#427D95"; // teal
const CARD_BG = "#2E5868"; // ~30% darker than SECTION_BG
const ACCENT = "#d2f392"; // brand lime

type StatPayload = {
  eyebrow: string;
  value: string;
  unit: string;
  body: string;
  cta: string;
};

const muscleStat = {
  eyebrow: "Mitophagy",
  value: "+39",
  unit: "%",
  tag: "M3 + GLP-1",
  placeboLabel: "Placebo (−15%)",
  body: "Increase in mitophagy — the cellular renewal pathway — when M3 is stacked with GLP-1 therapy.*",
  cta: "See study details",
};

const muscleHypertrophy: StatPayload = {
  eyebrow: "Muscle hypertrophy",
  value: "2.4",
  unit: "x",
  body: "M3 + GLP-1 users preserve 2.4x more lean mass than GLP-1 alone over 16 weeks of therapy.*",
  cta: "See study details",
};

const synergisticStack: StatPayload = {
  eyebrow: "Synergistic stack",
  value: "3",
  unit: "x",
  body: "Three clinical actives working in concert at the mitochondrial layer — not stacked supplements, but a unified protocol.*",
  cta: "See study details",
};

const didYouKnow = {
  eyebrow: "Did you know?",
  title:
    "Only 1 in 3 achieve mitophagy from diet and training; GLP-1 use complicates it.",
  yAxisTitle: "Increase in Mitophagy(%)",
  xAxisTitle: "Treatment",
  bars: [
    // y-axis maxes at 50%, so percent = (magnitude / 50) * 100
    { label: "Placebo", value: "−15%", percent: 30, isHighlight: false },
    { label: "Muscalarpro M3", value: "+39%", percent: 78, isHighlight: true },
  ],
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

export function MuscleLongevityBentoSection() {
  return (
    <section
      className="relative mt-12 md:mt-16 lg:mt-20"
      style={{ background: SECTION_BG }}
    >
      {/* Title sits on a clean teal block ABOVE the image */}
      <div className="px-4 pt-12 pb-6 text-center md:pt-16 md:pb-8">
        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="font-sans text-[28px] font-medium leading-tight text-white md:text-[36px] lg:text-[44px]"
        >
          Muscle is your longevity organ
        </motion.h2>
      </div>

      {/* Hero — taller image with a teal-to-transparent gradient at the top
          so the photo blends into the title's section bg above. */}
      <div className="relative w-full overflow-hidden aspect-[4/5] sm:aspect-[16/10] md:aspect-[2/1] lg:aspect-[2.2/1]">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover"
        />
        {/* Top gradient blend — fades from the section's teal at the top
            edge to transparent further down so the title rides cleanly into
            the photo. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-40 md:h-52 lg:h-64"
          style={{
            background: `linear-gradient(to bottom, ${SECTION_BG} 0%, ${SECTION_BG}E6 25%, ${SECTION_BG}66 55%, transparent 100%)`,
          }}
        />
      </div>

      {/* Bento grid section (already on the same teal bg) */}
      <div>
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
          {/* Mobile: single column. md+: 2-col bento where the chart card
              spans 2 rows in the right column. */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {/* Breakthrough — top-left */}
            <motion.article
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="relative flex min-h-[280px] flex-col overflow-hidden rounded-3xl p-6 md:col-start-1 md:row-start-1 md:min-h-[300px] md:p-8"
              style={{ background: CARD_BG }}
            >
              <span
                className="inline-flex w-fit items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black"
                style={{ background: ACCENT }}
              >
                A muscle preservation breakthrough
              </span>
              <h3 className="mt-5 max-w-[62%] text-[22px] font-medium leading-tight text-white md:mt-6 md:text-[28px]">
                Muscle strength &amp; hypertrophy on [M3] + GLP-1.
              </h3>
              <div className="mt-auto pt-6 pr-[40%] md:pr-[42%]">
                <Link
                  href="#science"
                  className="inline-flex w-fit items-center rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black transition-opacity hover:opacity-90 md:px-6 md:text-sm"
                >
                  How M3 works
                </Link>
              </div>
              {/* Product image absolute right */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-4 right-4 aspect-[3/4] w-[35%] md:bottom-6 md:right-6 md:w-[36%]"
              >
                <Image
                  src={PRODUCT_IMAGE}
                  alt=""
                  fill
                  className="object-contain"
                  sizes="(min-width: 1280px) 220px, 35vw"
                />
              </div>
            </motion.article>

            {/* Mitophagy +39% — top-right */}
            <motion.article
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="relative flex min-h-[280px] flex-col overflow-hidden rounded-3xl p-6 md:col-start-2 md:row-start-1 md:min-h-[300px] md:p-8"
              style={{ background: CARD_BG }}
            >
              <span className="text-xs font-medium text-white/85">
                {muscleStat.eyebrow}
              </span>
              <div className="mt-5 flex items-baseline">
                <span className="font-sans text-5xl font-light leading-none tracking-tight text-white md:text-6xl">
                  {muscleStat.value}
                </span>
                <span className="ml-1 text-xl font-light text-white md:text-2xl">
                  {muscleStat.unit}
                </span>
              </div>
              <div className="mt-3 max-w-[420px]">
                <ValueBar delay={0.1} />
              </div>
              <span
                className="mt-4 inline-flex w-fit items-center rounded-md px-2.5 py-1 text-[10px] font-semibold text-black"
                style={{ background: ACCENT }}
              >
                {muscleStat.tag}
              </span>
              <div className="mt-3 flex items-center gap-2">
                <span className="block h-px w-12 bg-white/40" />
                <span className="text-[10px] text-white/65">
                  {muscleStat.placeboLabel}
                </span>
              </div>
              <div className="mt-auto flex flex-col gap-4 pt-6 sm:flex-row sm:items-end sm:justify-between">
                <p className="text-xs leading-snug text-white/85 sm:max-w-[60%] md:text-sm">
                  {muscleStat.body}
                </p>
                <StudyButton label={muscleStat.cta} />
              </div>
            </motion.article>

            {/* Muscle hypertrophy 2.4x — middle-left */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-start-1 md:row-start-2"
            >
              <StatCard payload={muscleHypertrophy} barDelay={0.2} />
            </motion.div>

            {/* Did you know? — right, spans 2 rows */}
            <motion.article
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative flex flex-col overflow-hidden rounded-3xl p-6 md:col-start-2 md:row-span-2 md:row-start-2 md:p-8"
              style={{ background: CARD_BG }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-white/85">
                {didYouKnow.eyebrow}
              </span>
              <h3 className="mt-3 max-w-md text-xl font-medium leading-tight text-white md:text-[22px]">
                {didYouKnow.title}
              </h3>

              {/* Chart */}
              <div className="relative mt-6 flex flex-1 min-h-[260px] flex-col rounded-2xl bg-black/10 p-4 ring-1 ring-white/15 md:min-h-[300px] md:p-6">
                {/* Plot row */}
                <div className="relative flex flex-1">
                  {/* Y-axis title — own narrow column, rotated text */}
                  <div className="relative w-4 shrink-0 md:w-5">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-1/2 top-1/2 origin-center -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[8px] font-medium uppercase tracking-wider text-white/65 md:text-[9px]"
                    >
                      {didYouKnow.yAxisTitle}
                    </span>
                  </div>

                  {/* Y-axis tick labels */}
                  <div
                    aria-hidden="true"
                    className="flex w-8 shrink-0 flex-col-reverse justify-between pr-2 text-right text-[9px] text-white/55 md:text-[10px]"
                  >
                    {[0, 10, 20, 30, 40, 50].map((v) => (
                      <span key={v}>{v}%</span>
                    ))}
                  </div>

                  {/* Plot area: gridlines + bars */}
                  <div className="relative flex-1">
                    {/* Dashed gridlines */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 flex flex-col-reverse justify-between"
                    >
                      {[0, 10, 20, 30, 40, 50].map((v) => (
                        <span
                          key={v}
                          className="border-t border-dashed border-white/15"
                        />
                      ))}
                    </div>

                    {/* Bars */}
                    <div className="relative z-10 flex h-full items-end gap-4 md:gap-8">
                      {didYouKnow.bars.map((bar, i) => (
                        <div
                          key={bar.label}
                          className="flex flex-1 flex-col items-center justify-end gap-2 h-full"
                        >
                          <span className="text-[10px] font-medium text-white md:text-xs">
                            {bar.value}
                          </span>
                          <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: `${bar.percent}%` }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                              duration: 1,
                              ease: "easeOut",
                              delay: 0.1 + i * 0.1,
                            }}
                            className={`w-full max-w-[88px] rounded-t-md ${
                              bar.isHighlight
                                ? "bg-white"
                                : "bg-white/40 ring-1 ring-inset ring-white/30"
                            }`}
                            style={{ minHeight: 4 }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* X-axis tick labels */}
                <div className="mt-2 flex">
                  <div className="w-4 shrink-0 md:w-5" aria-hidden="true" />
                  <div className="w-8 shrink-0 pr-2" aria-hidden="true" />
                  <div className="flex flex-1 items-center gap-4 border-t border-white/20 pt-2 md:gap-8">
                    {didYouKnow.bars.map((bar) => (
                      <span
                        key={bar.label}
                        className="flex-1 text-center text-[10px] text-white/85 md:text-xs"
                      >
                        {bar.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* X-axis title */}
                <div className="mt-2 flex">
                  <div className="w-4 shrink-0 md:w-5" aria-hidden="true" />
                  <div className="w-8 shrink-0 pr-2" aria-hidden="true" />
                  <div className="flex-1 text-center text-[9px] font-medium uppercase tracking-widest text-white/65 md:text-[10px]">
                    {didYouKnow.xAxisTitle}
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Synergistic stack 3x — bottom-left */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-start-1 md:row-start-3"
            >
              <StatCard payload={synergisticStack} barDelay={0.3} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Reusable sub-components --------------------------------------------

function ValueBar({ delay = 0.1 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, ease: "easeOut", delay }}
      className="h-[3px] rounded-full"
      style={{ background: ACCENT }}
    />
  );
}

function StudyButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="inline-flex w-fit items-center rounded-full bg-white/15 px-4 py-2 text-xs font-medium text-white backdrop-blur-md transition-colors hover:bg-white/25 md:px-5 md:text-sm"
    >
      {label}
    </button>
  );
}

function StatCard({
  payload,
  barDelay = 0.2,
}: {
  payload: StatPayload;
  barDelay?: number;
}) {
  return (
    <article
      className="relative flex min-h-[240px] flex-col overflow-hidden rounded-3xl p-6 md:min-h-[260px] md:p-8"
      style={{ background: CARD_BG }}
    >
      <span className="text-xs font-medium text-white/85">
        {payload.eyebrow}
      </span>
      <div className="mt-5 flex items-baseline">
        <span className="font-sans text-5xl font-light leading-none tracking-tight text-white md:text-6xl">
          {payload.value}
        </span>
        <span className="ml-1 text-xl font-light text-white md:text-2xl">
          {payload.unit}
        </span>
      </div>
      <div className="mt-3 max-w-[320px]">
        <ValueBar delay={barDelay} />
      </div>
      <div className="mt-auto flex flex-col gap-4 pt-6 sm:flex-row sm:items-end sm:justify-between">
        <p className="text-xs leading-snug text-white/85 sm:max-w-[60%] md:text-sm">
          {payload.body}
        </p>
        <StudyButton label={payload.cta} />
      </div>
    </article>
  );
}
