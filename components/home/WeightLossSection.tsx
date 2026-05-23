"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

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

// ---- Study overlay payloads ---------------------------------------------
// One per tab. Every CTA inside a tab opens that tab's overlay (per product
// decision: faithful restore of the pre-redesign behavior, where each tab had
// a single "deep dive" drawer).

type MethodologyItem = { label: string; value: string };
type FindingGroup = {
  title: string;
  points?: string[];
  table?: { headers: string[]; rows: string[][] };
};

type StudyDetails = {
  tagline: string;
  title: string;
  stat: string;
  customImage?: string;
  proven: string;
  methodology: MethodologyItem[];
  keyFindings: FindingGroup[];
  clinicalContext: string;
  footer: string;
};

const STUDY_DETAILS: Record<TabKey, StudyDetails> = {
  "glp-1": {
    tagline: "GLP-1",
    title: "Muscle Loss on GLP-1",
    stat: "~25%",
    customImage:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Chart_for_overlay.png?v=1770374101",
    proven:
      "Lean mass loss as percentage of total weight loss across placebo and GLP-1 medications: placebo shows 10-15% muscle loss, tirzepatide 25%, and semaglutide 40-45%.",
    methodology: [
      {
        label: "Participants",
        value:
          "2,258 adults with obesity or overweight across 22 randomized controlled trials (STEP and SURMOUNT programs)",
      },
      {
        label: "Protocol",
        value:
          'Randomized, double-blind, placebo-controlled trials using DEXA scans to measure body composition changes — the "gold standard" in clinical studies',
      },
      {
        label: "Objective",
        value:
          "Investigate the effects of GLP-1 receptor agonists (semaglutide 2.4mg weekly, tirzepatide 5-15mg weekly) on body composition including lean muscle mass and fat mass in individuals with obesity",
      },
    ],
    keyFindings: [
      {
        title: "Semaglutide (Ozempic/Wegovy):",
        points: [
          "Approximately 40-45% of total weight loss is lean muscle mass",
          "Absolute lean mass reduction: -1.02 kg compared to placebo",
          "Psoas muscle volume decreased by 9.3% over 24 weeks, with greater losses in older adults (>60 years: -22.8%)",
        ],
      },
      {
        title: "Tirzepatide (Mounjaro/Zepbound):",
        points: [
          "Approximately 25-26% of total weight loss is lean muscle mass",
          "Mean lean mass decreased by 10.9% vs 2.6% with placebo",
          "Absolute lean mass loss: -5.6 kg vs -1.2 kg placebo over 72 weeks",
        ],
      },
      {
        title: "Meta-Analysis Results:",
        points: [
          "GLP-1 receptor agonists lead to ~25% lean mass loss relative to total weight reduction across all trials",
          "Higher doses (semaglutide 2.4mg, tirzepatide 15mg) resulted in optimal fat loss but were least effective at preserving lean mass",
        ],
      },
    ],
    clinicalContext:
      "While GLP-1 medications produce significant fat loss and metabolic improvements, the concurrent loss of lean muscle mass raises concerns about sarcopenia risk, particularly in vulnerable populations like older adults. This data supports the need for combination therapies (like bimagrumab blocking myostatin/activin A) or resistance training protocols to preserve muscle during GLP-1 treatment.",
    footer:
      "We are committed to conducting rigorous scientific research and sharing it with our customers, which is why we present data from open access, peer-reviewed journals published in Nature Medicine, Diabetes, Obesity and Metabolism, and The Lancet.",
  },
  "glp-1-m3": {
    tagline: "Clinical Trial",
    title: "Muscle Strength and Hypertrophy on M3",
    stat: "+39%",
    customImage:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Overlay_chart.png?v=1770375366",
    proven:
      "Lean mass loss as percentage of total weight loss across placebo and GLP-1 medications: placebo shows 10-15% muscle loss, tirzepatide 25%, and semaglutide 40-45%.",
    methodology: [
      {
        label: "Participants",
        value:
          "90 healthy, overweight, middle-aged subjects aged 40 to 65 years on GLP-1 medications (semaglutide or tirzepatide) for weight loss",
      },
      {
        label: "Protocol",
        value:
          'Randomized, double-blind, placebo-controlled — the "gold standard" in studies. Participants received daily supplementation with MUSCALAR PRO M3 (1000mg Urolithin A + 6mg Spermidine + 1mg S-Allyl Cysteine) or placebo for 16 weeks',
      },
      {
        label: "Objective",
        value:
          "Investigate the efficacy of MUSCALAR PRO M3 on mitophagy, autophagy, and muscle",
      },
      {
        label: "The Problem",
        value:
          "40-45% of weight loss from semaglutide (Ozempic/Wegovy) and 25% from tirzepatide (Mounjaro/Zepbound) is lean muscle mass.",
      },
      {
        label: "The Solution",
        value:
          "M3 targets three specific mechanisms: 1. Urolithin-A removes damaged mitochondria. 2. Spermidine activates cellular cleanup. 3. S-Allyl Cysteine blocks proteolytic breakdown.",
      },
      {
        label: "The Triple Protocol",
        value:
          "Dosage: 3 capsules daily. Timing: Morning with breakfast. Duration: Minimum 16 weeks for full benefits. Synergistic Stack: Resistance training 3x/week + high protein intake.",
      },
    ],
    keyFindings: [
      {
        title: "Study Results",
        points: [
          "We conducted a randomized placebo-controlled clinical trial with adults aged 40-65 years old.",
          "After 4 months, participants who received a daily dose of MUSCALAR PRO M3 showed:",
          "+39% increase in mitophagy (mitochondrial renewal)",
          "Improved muscle endurance and strength in aging populations",
          "Protection against muscle breakdown during caloric restriction",
        ],
      },
      {
        title: "Increase in Mitophagy",
        points: ["PLACEBO: ~15%", "MUSCALAR PRO M3: +39%"],
      },
      {
        title: "Clinically Proven Benefits",
        points: [
          "Urolithin-A (1000mg): +39% increase in mitophagy (mitochondrial renewal) and improved muscle endurance.",
          "Spermidine (6mg): Reactivates autophagy to cleanup damaged proteins, supports muscle regeneration, and reduces myofiber degeneration.",
          "S-Allyl Cysteine (1mg): Provides anti-atrophic protection by lowering inflammatory cytokines (TWEAK, IL-6, myostatin) associated with muscle breakdown.",
        ],
      },
      {
        title: "Who Should Take MUSCALAR PRO M3?",
        points: [
          "Anyone on GLP-1 medications (semaglutide, tirzepatide)",
          "Individuals 40+ experiencing age-related muscle loss",
          "Those in caloric deficit attempting to preserve lean mass",
          "Athletes and biohackers focused on longevity",
        ],
      },
      {
        title: "The Triple-Action Mechanism",
        table: {
          headers: ["Mechanism", "Active Ingredient", "Clinical Outcome"],
          rows: [
            [
              "Mitophagy Activation",
              "Urolithin-A 1000mg",
              "+39% increase in damaged mitochondria removal",
            ],
            [
              "Autophagy Induction",
              "Spermidine 6mg",
              "Improved muscle structure, reduced degeneration",
            ],
            [
              "Anti-Atrophy",
              "S-Allyl Cysteine 1mg",
              "Prevented protein breakdown, maintained muscle mass",
            ],
          ],
        },
      },
      {
        title: "Quality Standards",
        points: [
          "Clinically dosed ingredients — same doses used in peer-reviewed trials",
          "Third-party tested for purity and potency",
          "No artificial fillers or additives",
          "FSSAI approved for Indian market",
          "GMP-certified manufacturing",
          "Published research in Nature Metabolism, Cell Reports Medicine, Biochimica et Biophysica Acta",
        ],
      },
    ],
    clinicalContext:
      "Science-Backed. Results-Driven. We formulate with clinically validated doses. MUSCALAR PRO M3 represents the cutting edge of longevity science — three proven ingredients working synergistically to preserve your musclespan while you optimize your body composition. Preserve your musclespan. Extend your healthspan.",
    footer:
      "These statements are supported by scientific research published in peer-reviewed journals. This product is not intended to diagnose, treat, cure, or prevent any disease. Always consult with a healthcare provider before starting any supplementation, especially if taking GLP-1 medication.",
  },
};

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

function PrimaryButton({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex w-fit items-center rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black transition-opacity hover:opacity-90 md:px-6 md:text-sm"
    >
      {label}
    </button>
  );
}

function StudyButton({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
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
  onCtaClick,
}: {
  payload: StatPayload;
  className?: string;
  barDelay?: number;
  onCtaClick?: () => void;
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
        <StudyButton label={payload.cta} onClick={onCtaClick} />
      </div>
    </article>
  );
}

// ---- Main component ------------------------------------------------------

export function WeightLossSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("glp-1");
  const [overlayKey, setOverlayKey] = useState<TabKey | null>(null);
  const content = tabContent[activeTab];
  const study = overlayKey ? STUDY_DETAILS[overlayKey] : null;

  // Every CTA in the current tab opens that tab's overlay.
  const openStudy = () => setOverlayKey(activeTab);
  const closeStudy = () => setOverlayKey(null);

  // Lock body scroll + close on Escape while the overlay is open.
  useEffect(() => {
    if (!overlayKey) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeStudy();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [overlayKey]);

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
                <PrimaryButton
                  label={content.breakthrough.cta}
                  onClick={openStudy}
                />
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
                <StudyButton
                  label={content.muscleStat.cta}
                  onClick={openStudy}
                />
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
                  <StudyButton label={content.leftMid.cta} onClick={openStudy} />
                </div>
              </article>
            ) : (
              <StatCard
                payload={content.leftMid}
                className="lg:col-start-1 lg:row-start-2"
                barDelay={0.2}
                onCtaClick={openStudy}
              />
            )}

            {/* Left-bottom card — always a stat */}
            <StatCard
              payload={content.leftBottom}
              className="lg:col-start-1 lg:row-start-3"
              barDelay={0.3}
              onCtaClick={openStudy}
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

      {/* STUDY DRAWER — slides in from the right with a backdrop. Restored
          from the pre-redesign behavior; one rich payload per tab. */}
      <AnimatePresence>
        {study && (
          <>
            <motion.div
              key="study-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeStudy}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              aria-hidden="true"
            />
            <motion.aside
              key="study-drawer"
              role="dialog"
              aria-modal="true"
              aria-labelledby="study-drawer-title"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed inset-y-0 right-0 z-[70] w-full max-w-[1400px] overflow-y-auto bg-white text-neutral-900 shadow-2xl lg:w-[80vw]"
            >
              <div className="relative p-6 md:p-12 lg:p-16">
                <button
                  type="button"
                  onClick={closeStudy}
                  aria-label="Close study details"
                  className="absolute right-4 top-4 rounded-full p-2 transition-colors hover:bg-neutral-100 md:right-6 md:top-6"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>

                <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:gap-20">
                  {/* Left column — title block */}
                  <div className="flex w-full flex-shrink-0 flex-col gap-6 lg:w-[35%]">
                    <h5 className="text-sm font-bold uppercase tracking-widest text-neutral-400 md:text-base">
                      {study.tagline}
                    </h5>
                    <h2
                      id="study-drawer-title"
                      className="text-3xl font-normal leading-tight tracking-tight text-[#1f3b37] md:text-4xl lg:text-[3rem] lg:leading-none"
                    >
                      {study.title}
                    </h2>
                  </div>

                  {/* Right column — chart + body */}
                  <div className="flex flex-1 flex-col gap-10">
                    {study.customImage && (
                      <div className="max-w-[800px] overflow-hidden rounded-2xl border border-neutral-100 shadow-lg">
                        <Image
                          src={study.customImage}
                          alt={`${study.title} chart`}
                          width={800}
                          height={600}
                          className="h-auto w-full object-contain"
                        />
                      </div>
                    )}

                    <p className="max-w-2xl text-base font-medium leading-relaxed text-neutral-900 md:text-lg">
                      Figure 1: {study.proven}
                    </p>

                    <div className="space-y-12">
                      {/* Methodology */}
                      <div>
                        <h4 className="mb-6 border-b border-black pb-2 text-xl font-bold text-neutral-900">
                          Methodology
                        </h4>
                        <div className="divide-y divide-neutral-200/60">
                          {study.methodology.map((item) => (
                            <div
                              key={item.label}
                              className="grid grid-cols-1 gap-3 py-5 md:grid-cols-[150px_1fr] md:gap-4"
                            >
                              <span className="font-semibold text-neutral-900">
                                {item.label}
                              </span>
                              <span className="font-light leading-relaxed text-neutral-600">
                                {item.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Findings */}
                      <div>
                        <h4 className="mb-6 border-b border-black pb-2 text-xl font-bold text-neutral-900">
                          Key Findings
                        </h4>
                        <div className="space-y-8">
                          {study.keyFindings.map((group) => (
                            <div key={group.title}>
                              <h5 className="mb-3 text-lg font-bold text-[#1f3b37]">
                                {group.title}
                              </h5>
                              {group.table ? (
                                <div className="overflow-x-auto scrollbar-hide rounded-lg border border-neutral-200">
                                  <table className="sticky-first-col w-full min-w-[600px] border-collapse text-left text-sm">
                                    <thead>
                                      <tr className="border-b border-neutral-200 bg-neutral-50">
                                        {group.table.headers.map((h, hI) => (
                                          <th
                                            key={h}
                                            className={`px-4 py-3 font-bold text-neutral-800 ${hI === 0 ? "bg-neutral-50" : ""}`}
                                          >
                                            {h}
                                          </th>
                                        ))}
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {group.table.rows.map((row, rI) => (
                                        <tr
                                          key={rI}
                                          className="border-b border-neutral-100 transition-colors last:border-0 hover:bg-neutral-50"
                                        >
                                          {row.map((cell, cI) => (
                                            <td
                                              key={cI}
                                              className={`px-4 py-3 font-medium text-neutral-600 ${cI === 0 ? "bg-white" : ""}`}
                                            >
                                              {cell}
                                            </td>
                                          ))}
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              ) : (
                                <ul className="list-disc space-y-2 pl-5 text-neutral-600">
                                  {group.points?.map((pt, i) => (
                                    <li key={i}>{pt}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Clinical Context */}
                      <div className="rounded-2xl border border-neutral-100 bg-neutral-50 p-6">
                        <h4 className="mb-3 text-lg font-bold text-neutral-900">
                          Clinical Context
                        </h4>
                        <p className="text-base leading-relaxed text-neutral-600">
                          {study.clinicalContext}
                        </p>
                      </div>

                      {/* Footer */}
                      <p className="mt-8 border-t border-neutral-100 pt-6 text-sm italic text-neutral-400">
                        {study.footer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
