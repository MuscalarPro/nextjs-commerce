"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type TabKey = "glp-1" | "glp-1-m3";

type ChartBar = { label: string; value: string; percent: number };

type StatPayload = {
  eyebrow: string;
  value: string;
  unit: string;
  body: string;
  cta: string;
};

type LeftMidCard =
  | {
      kind: "image";
      eyebrow: string;
      body: string;
      cta: string;
      backgroundImage?: string;
    }
  | ({ kind: "stat" } & StatPayload);

type TabPayload = {
  breakthrough: {
    badge: string;
    title: string;
    cta: string;
    productImage: string;
  };
  muscleStat: StatPayload & {
    tag: string;
    placeboLabel: string;
  };
  leftMid: LeftMidCard;
  leftBottom: StatPayload;
  didYouKnow: {
    eyebrow: string;
    title: string;
    yAxisTitle: string;
    xAxisTitle: string;
    bars: ChartBar[];
  };
};

// Shared hero image (same on both tabs — change to per-tab if needed later).
const HERO_IMAGE =
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/muscalarpro_muscle_is_your_longevity_organ_glp1.png?v=1779145696";

const tabContent: Record<TabKey, TabPayload> = {
  "glp-1": {
    breakthrough: {
      badge: "A muscle preservation breakthrough",
      title: "MuscalarPro™ [M3] protects muscle on GLP-1.",
      cta: "How M3 works",
      productImage:
        "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/muscalar_pro_m3_protects_muscle_on_glp1.png?v=1779145694",
    },
    muscleStat: {
      eyebrow: "Muscle loss",
      value: "~25",
      unit: "%",
      tag: "on semaglutide",
      placeboLabel: "Placebo",
      body: "Up to ~25% of total weight lost on GLP-1 comes from lean muscle, not fat.*",
      cta: "See study details",
    },
    leftMid: {
      kind: "image",
      eyebrow: "Strength",
      body: "Grip strength and function decline in 6 months on GLP-1.",
      cta: "See study details",
      backgroundImage:
        "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/muscalarpro_grip_strength_and_muscle_function_decline_glp1.png?v=1779145695",
    },
    leftBottom: {
      eyebrow: "Sarcopenia risk",
      value: "~17",
      unit: "%",
      body: "of adults on GLP-1 cycles show elevated sarcopenia risk after 6 months — accelerating biological age.*",
      cta: "See study details",
    },
    didYouKnow: {
      eyebrow: "Did you know?",
      title:
        "Up to 45% of weight lost on semaglutide can come from lean tissue — not fat.",
      yAxisTitle: "Lean Mass Loss (% of total weight loss)",
      xAxisTitle: "Treatment",
      bars: [
        { label: "Placebo", value: "10-15%", percent: 28 },
        { label: "Tirzepatide", value: "~25%", percent: 50 },
        { label: "Semaglutide", value: "40-45%", percent: 90 },
      ],
    },
  },
  "glp-1-m3": {
    breakthrough: {
      badge: "A muscle preservation breakthrough",
      title: "Muscle strength & hypertrophy on [M3] + GLP-1.",
      cta: "How M3 works",
      productImage:
        "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/muscalarpro_muscle_strength_and_hypertrophy.png?v=1779145694",
    },
    muscleStat: {
      eyebrow: "Mitophagy",
      value: "+39",
      unit: "%",
      tag: "M3 + GLP-1",
      placeboLabel: "Placebo (-15%)",
      body: "Increase in mitophagy — the cellular renewal pathway — when M3 is stacked with GLP-1 therapy.*",
      cta: "See study details",
    },
    leftMid: {
      kind: "stat",
      eyebrow: "Muscle hypertrophy",
      value: "2.4",
      unit: "x",
      body: "M3 + GLP-1 users preserve 2.4x more lean mass than GLP-1 alone over 16 weeks of therapy.*",
      cta: "See study details",
    },
    leftBottom: {
      eyebrow: "Synergistic stack",
      value: "3",
      unit: "x",
      body: "Three clinical actives working in concert at the mitochondrial layer — not stacked supplements, but a unified protocol.*",
      cta: "See study details",
    },
    didYouKnow: {
      eyebrow: "Did you know?",
      title:
        "Only 1 in 3 achieve mitophagy from diet and training; GLP-1 use complicates it.",
      yAxisTitle: "Increase in mitophagy (%)",
      xAxisTitle: "Treatment",
      bars: [
        // Y-axis is 0-50%. Placebo bar is positive on the axis but labeled
        // as -15% to communicate the directional meaning (decrease).
        { label: "Placebo", value: "-15%", percent: 30 },
        { label: "Muscalarpro M3", value: "+39%", percent: 78 },
      ],
    },
  },
};

const ACCENT = "#d2f392"; // brand lime accent
const CARD_BG = "#436785"; // brand card background

// ---- Sub-components ------------------------------------------------------

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

function PrimaryButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="inline-flex w-fit items-center rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black transition-opacity hover:opacity-90 md:px-6 md:text-sm"
    >
      {label}
    </button>
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
  className = "",
  barDelay = 0.2,
}: {
  payload: StatPayload;
  className?: string;
  barDelay?: number;
}) {
  return (
    <article
      className={`relative flex min-h-[260px] flex-col overflow-hidden rounded-3xl p-6 md:p-8 md:min-h-[300px] ${className}`}
      style={{ background: CARD_BG }}
    >
      <span className="text-xs font-medium text-white/85">
        {payload.eyebrow}
      </span>
      <div className="mt-6 flex items-baseline">
        <span className="text-6xl font-light tracking-tight text-white md:text-7xl">
          {payload.value}
        </span>
        <span className="ml-1 text-2xl font-light text-white md:text-3xl">
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

// ---- Main component ------------------------------------------------------

export function WeightLossSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("glp-1");
  const content = tabContent[activeTab];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#5a90c7] via-[#3e72b3] to-[#1e447d]">
      {/* HERO BAND — full-bleed image with overlaid title + tabs */}
      <div className="relative h-[600px] w-full overflow-hidden md:h-[780px]">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />

        {/* Title overlay at top */}
        <div className="absolute inset-x-0 top-8 z-10 px-4 text-center md:top-16">
          <h2 className="heading-h2 text-white">Muscle is your longevity organ</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/85 md:text-base">
            The single most powerful predictor of healthspan isn't your weight,
            it's your musclespan
          </p>
        </div>

        {/* Tab pills overlaid at bottom */}
        <div className="absolute inset-x-0 bottom-6 z-20 flex justify-center px-4 md:bottom-10">
          <div
            role="tablist"
            aria-label="Compare GLP-1 vs GLP-1 with M3"
            className="inline-flex items-center gap-1 rounded-full bg-black/30 p-1.5 ring-1 ring-white/10 backdrop-blur-md"
          >
            {(
              [
                { key: "glp-1" as const, label: "GLP-1" },
                { key: "glp-1-m3" as const, label: "GLP-1 + M3" },
              ] as const
            ).map((tab) => {
              const active = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTab(tab.key)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors md:px-6 ${
                    active ? "bg-white text-black" : "text-white/80 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* CARDS GRID — keyed by activeTab so bar animations replay on tab change */}
      <div className="relative px-4 pb-16 pt-8 md:px-8 md:pb-24 md:pt-14">
        <div className="mx-auto max-w-[1200px]" key={activeTab}>
          <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
            {/* Breakthrough — top-left */}
            <article
              className="relative flex min-h-[300px] flex-col overflow-hidden rounded-3xl p-6 md:p-8 md:min-h-[340px] lg:col-start-1 lg:row-start-1"
              style={{ background: CARD_BG }}
            >
              <span className="inline-flex w-fit items-center rounded-full bg-[#d2f392] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
                {content.breakthrough.badge}
              </span>
              <h3 className="mt-6 max-w-[62%] text-2xl font-medium leading-tight text-white md:text-3xl">
                {content.breakthrough.title}
              </h3>
              <div className="mt-auto pt-6 pr-[40%] md:pr-[42%]">
                <PrimaryButton label={content.breakthrough.cta} />
              </div>
              {/* Product image — absolute right, text/button protected by max-w / pr offsets. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-4 right-4 aspect-[3/4] w-[35%] md:bottom-6 md:right-6 md:w-[36%]"
              >
                <Image
                  src={content.breakthrough.productImage}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 240px, 35vw"
                  className="object-contain"
                />
              </div>
            </article>

            {/* Muscle stat — top-right.
                Reused for "Muscle loss" (GLP-1) and "Mitophagy" (GLP-1 + M3). */}
            <article
              className="relative flex min-h-[300px] flex-col overflow-hidden rounded-3xl p-6 md:p-8 md:min-h-[340px] lg:col-start-2 lg:row-start-1"
              style={{ background: CARD_BG }}
            >
              <span className="text-xs font-medium text-white/85">
                {content.muscleStat.eyebrow}
              </span>
              <div className="mt-6 flex items-baseline">
                <span className="text-6xl font-light tracking-tight text-white md:text-7xl">
                  {content.muscleStat.value}
                </span>
                <span className="ml-1 text-2xl font-light text-white md:text-3xl">
                  {content.muscleStat.unit}
                </span>
              </div>
              <div className="mt-3 max-w-[420px]">
                <ValueBar delay={0.1} />
              </div>
              <span className="mt-4 inline-flex w-fit items-center rounded-md bg-[#d2f392] px-2.5 py-1 text-[10px] font-semibold text-black">
                {content.muscleStat.tag}
              </span>
              <div className="mt-3 flex items-center gap-2">
                <span className="block h-px w-12 bg-white/40" />
                <span className="text-[10px] text-white/65">
                  {content.muscleStat.placeboLabel}
                </span>
              </div>
              <div className="mt-auto flex flex-col gap-4 pt-6 sm:flex-row sm:items-end sm:justify-between">
                <p className="text-xs leading-snug text-white/85 sm:max-w-[60%] md:text-sm">
                  {content.muscleStat.body}
                </p>
                <StudyButton label={content.muscleStat.cta} />
              </div>
            </article>

            {/* Left-mid card — image-bg variant (GLP-1) or stat variant (GLP-1 + M3) */}
            {content.leftMid.kind === "image" ? (
              <article className="relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-3xl p-6 md:p-8 md:min-h-[360px] lg:col-start-1 lg:row-start-2">
                {content.leftMid.backgroundImage ? (
                  <Image
                    src={content.leftMid.backgroundImage}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 600px, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-br from-[#4a4a4a] via-[#2a2a2a] to-[#1a1a1a]"
                  />
                )}
                {/* Readability overlay over the photo */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <span className="absolute left-6 top-6 z-10 text-xs font-medium text-white/85 md:left-8 md:top-8">
                  {content.leftMid.eyebrow}
                </span>
                <div className="relative z-10 flex max-w-[280px] flex-col gap-4">
                  <p className="text-base leading-snug text-white md:text-lg">
                    {content.leftMid.body}
                  </p>
                  <StudyButton label={content.leftMid.cta} />
                </div>
              </article>
            ) : (
              <StatCard
                payload={content.leftMid}
                className="lg:col-start-1 lg:row-start-2"
                barDelay={0.2}
              />
            )}

            {/* Left-bottom card — always a stat */}
            <StatCard
              payload={content.leftBottom}
              className="lg:col-start-1 lg:row-start-3"
              barDelay={0.3}
            />

            {/* Did-You-Know chart card — right column, spans 2 rows on desktop */}
            <article
              className="relative flex min-h-[480px] flex-col overflow-hidden rounded-3xl p-6 md:p-8 md:min-h-[600px] lg:col-start-2 lg:row-start-2 lg:row-span-2"
              style={{ background: CARD_BG }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-white/85">
                {content.didYouKnow.eyebrow}
              </span>
              <h3 className="mt-3 max-w-md text-2xl font-medium leading-tight text-white md:text-3xl">
                {content.didYouKnow.title}
              </h3>

              {/* Self-contained chart — no image needed. Built with three
                  side-by-side columns inside each row (Y-axis title strip,
                  Y-axis labels, plot) so labels can't overflow the card. */}
              <div className="relative mt-6 flex flex-1 min-h-[300px] flex-col rounded-2xl bg-black/10 p-4 ring-1 ring-white/15 md:p-6">
                {/* Plot row */}
                <div className="relative flex flex-1">
                  {/* Y-axis title — its own narrow column with rotated text */}
                  <div className="relative w-4 shrink-0 md:w-5">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-1/2 top-1/2 origin-center -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[8px] font-medium uppercase tracking-wider text-white/65 md:text-[9px]"
                    >
                      {content.didYouKnow.yAxisTitle}
                    </span>
                  </div>

                  {/* Y-axis tick labels — fixed-width column, right-aligned */}
                  <div
                    aria-hidden="true"
                    className="flex w-8 shrink-0 flex-col-reverse justify-between pr-2 text-right text-[9px] text-white/55 md:text-[10px]"
                  >
                    {[0, 10, 20, 30, 40, 50].map((v) => (
                      <span key={v}>{v}%</span>
                    ))}
                  </div>

                  {/* Plot area — gridlines + bars stack here */}
                  <div className="relative flex-1">
                    {/* Gridlines */}
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
                      {content.didYouKnow.bars.map((bar, i) => {
                        const isHighlight =
                          i === content.didYouKnow.bars.length - 1;
                        return (
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
                                isHighlight
                                  ? "bg-white"
                                  : "bg-white/40 ring-1 ring-inset ring-white/30"
                              }`}
                              style={{ minHeight: 4 }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* X-axis tick labels — same 3-col layout (spacers + content) */}
                <div className="mt-2 flex">
                  <div className="w-4 shrink-0 md:w-5" aria-hidden="true" />
                  <div className="w-8 shrink-0 pr-2" aria-hidden="true" />
                  <div className="flex flex-1 items-center gap-4 border-t border-white/20 pt-2 md:gap-8">
                    {content.didYouKnow.bars.map((bar) => (
                      <span
                        key={bar.label}
                        className="flex-1 text-center text-[10px] text-white/85 md:text-xs"
                      >
                        {bar.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* X-axis title — aligned with the plot column above */}
                <div className="mt-2 flex">
                  <div className="w-4 shrink-0 md:w-5" aria-hidden="true" />
                  <div className="w-8 shrink-0 pr-2" aria-hidden="true" />
                  <div className="flex-1 text-center text-[9px] font-medium uppercase tracking-widest text-white/65 md:text-[10px]">
                    {content.didYouKnow.xAxisTitle}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
