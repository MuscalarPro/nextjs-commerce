"use client";

import {
  ArrowDownIcon,
  ArrowPathIcon,
  ArrowTrendingDownIcon,
  ArrowUpIcon,
  PlusIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { useHideFloatingAgent } from "components/elevenlabs/use-hide-floating-agent";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";

const LIME = "#d2f392";

type Question = { q: string; detail: string };
type Step = {
  // Per-step copy that crossfades as you scroll the pinned scene.
  label: string;
  headline: string;
  paragraph: string;
  // Right-side numbered nav label.
  title: string;
  gradient: string;
  image?: string;
  video?: string;
  questions: Question[];
};

// Each step owns a full-bleed background (photo over a gradient fallback)
// that crossfades in as you scroll, plus its own set of questions that
// reveal in the pills below.
const STEPS: Step[] = [
  {
    label: "THE SCIENCE",
    headline: "Peak performance is decided in your cells.",
    paragraph:
      "Every sprint, lift and recovery is powered by mitochondria — your cellular engines. With age and hard training they wear out, and output quietly declines. M3 targets that decline at the source.",
    title: "Science of peak performance",
    gradient: "linear-gradient(135deg, #0D2E2E 0%, #1E3944 55%, #2A5A6B 120%)",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/ChatGPT_Image_Jun_23_2026_03_20_14_PM.png?v=1782380910",
    questions: [
      {
        q: "Why do mitochondria matter for performance?",
        detail:
          "A standard physical checks a handful of markers once a year. M3 builds a full baseline across muscle, metabolism, your heart and cellular age, trends it every cycle, and turns it into one readiness score with a protocol that adapts.",
      },
      {
        q: "What is Urolithin A?",
        detail:
          "A full-body panel across muscle and lean mass, metabolic health, your cardiovascular engine and biological age — your starting point before the protocol begins.",
      },
    ],
  },
  {
    label: "THE MECHANISM",
    headline: "M3 renews the engines inside your muscle.",
    paragraph:
      "Urolithin A switches on mitophagy — the process that recycles worn-out mitochondria so fresh, efficient ones can take over. Spermidine adds autophagy alongside it. The result: cellular engines that work like they used to.",
    title: "How M3 works",
    gradient: "linear-gradient(135deg, #102A1C 0%, #1F4D36 55%, #2F7350 120%)",
    video:
      "https://cdn.shopify.com/videos/c/o/v/d4b4ce864a4b4450b13feec55b4b163d.mp4",
    questions: [
      {
        q: "What is mitophagy?",
        detail:
          "100+ across muscle and lean mass, metabolic health, your cardiovascular engine, inflammation and biological age — pulled together with your wearable data into a single score.",
      },
      {
        q: "What's in each serving?",
        detail:
          "The app folds your biomarkers and wearable data — HRV, VO₂, sleep and recovery — into one cellular-readiness score that updates as new data comes in.",
      },
    ],
  },
  {
    label: "THE BENEFITS",
    headline: "Stronger, longer, recovered.",
    paragraph:
      "In Urolithin A trials, renewed mitochondria translated into measurably stronger muscle, greater endurance, and lower exercise-related inflammation — with no change to training. M3 is built to bring that to your daily ritual.",
    title: "Benefits",
    gradient: "linear-gradient(135deg, #15203A 0%, #1E2A44 55%, #3A4F7A 120%)",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/ChatGPT_Image_Jun_23_2026_04_40_24_PM.png?v=1782380908",
    questions: [
      {
        q: "How long until I notice something?",
        detail:
          "Evidence-backed daily actions — when to take M3, how to train and when to recover — tuned to your data, not a generic plan.",
      },
      {
        q: "Will it build muscle mass?",
        detail:
          "Yes. As your biomarkers and recovery trends shift, the protocol updates so the guidance always matches where you are.",
      },
    ],
  },
  {
    label: "THE PROOF",
    headline: "Backed by peer-reviewed science.",
    paragraph:
      "M3's actives are studied in published, peer-reviewed human trials — not just lab theory. The strength, endurance and recovery findings come from randomized controlled trials of Urolithin A and spermidine.",
    title: "The proof",
    gradient: "linear-gradient(135deg, #0A1F24 0%, #143A40 55%, #246B6B 120%)",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/hf_20260623_085255_7800aabb-5ee6-4536-b0dd-2d9e1c7761b6.jpg?v=1782380902",
    questions: [
      {
        q: "Are these studies on M3 itself?",
        detail:
          "AI guidance plus human clinicians — the MuscleCare Concierge — that you can reach between cycles.",
      },
      {
        q: "Which biomarkers does Urolithin A move?",
        detail:
          "Interpreting your results, adjusting your protocol, and flagging anything worth a closer look.",
      },
      {
        q: "Is M3 safe and tested?",
        detail:
          "No. M3's app and concierge are for information and optimisation, not diagnosis; these statements haven't been evaluated by the FDA or FSSAI.",
      },
    ],
  },
];

type FaqCard = {
  title: string;
  badge: string;
  body: string;
  highlight?: boolean;
};
type FaqStat = { value: string; suffix?: string; label: string };
type FaqStep = {
  icon: "wear" | "recycle" | "fresh";
  title: string;
  subtitle: string;
};
type FaqIngredient = {
  name: string;
  source: string;
  amount: string;
  unit: string;
};
type FaqTimelineItem = { day: string; label: string };
type FaqBiomarker = { name: string; direction: "up" | "down" };
type FaqBiomarkerGroup = { title: string; markers: FaqBiomarker[] };
// A question can carry any of these element types; they render in a fixed
// order (pathway → stats → timeline → cards → steps → ingredients →
// studies → biomarkerGroups → pills → note).
type Faq = {
  id: string;
  question: string;
  answer: string;
  pathway?: string[];
  stats?: FaqStat[];
  timeline?: FaqTimelineItem[];
  cards?: FaqCard[];
  steps?: FaqStep[];
  ingredients?: FaqIngredient[];
  studies?: string[];
  biomarkerGroups?: FaqBiomarkerGroup[];
  pills?: string[];
  banner?: string;
  note?: string;
};

// Placeholder banner gradient (a real per-question image lands later) + the
// overlay accent. Page green, not the mockup's purple, to stay on-brand.
const FAQ_BANNER =
  "linear-gradient(135deg, #2F7350 0%, #1F7A4D 55%, #173E2A 120%)";
const FAQ_ACCENT = "#1F7A4D";
const FAQ_CREAM = "#F4F2E9";

// The global FAQ list — built up one question at a time, in the order they
// appear in the overlay's left rail.
const FAQS: Faq[] = [
  {
    id: "creatine-nmn",
    question: "How is M3 different from creatine or NMN?",
    answer:
      "Different mechanisms — which makes them complementary, not competing. Creatine buffers short-term energy (ATP) and has the deepest evidence base for raw strength. NMN raises NAD+. Urolithin A does what neither does: it triggers mitophagy, renewing the mitochondria themselves.",
    cards: [
      {
        title: "Creatine",
        badge: "Strength",
        body: "Buffers ATP for short, powerful efforts. The strongest evidence base for raw strength.",
      },
      {
        title: "NMN / NAD+",
        badge: "Cofactor",
        body: "Raises NAD+, a cellular cofactor. Muscle-performance evidence remains limited.",
      },
      {
        title: "Urolithin A — in M3",
        badge: "Cellular renewal",
        body: "Triggers mitophagy, recycling worn mitochondria so fresh ones take over.",
        highlight: true,
      },
    ],
    note: "Creatine still owns the strongest strength evidence. Think of M3 as the cellular layer beneath your training — not a replacement for it.",
  },
  {
    id: "why-mitochondria",
    question: "Why do mitochondria matter for performance?",
    answer:
      "They generate most of the usable energy (ATP) your muscle cells run on. Healthier, more efficient mitochondria mean more energy available for strength, endurance and recovery. When they decline, output quietly declines with them.",
    stats: [
      {
        value: "~90",
        suffix: "%",
        label: "of cellular energy (ATP) is produced inside mitochondria",
      },
      {
        value: "1",
        suffix: "st",
        label: "system to fade with age — and the one M3 is built to target",
      },
    ],
  },
  {
    id: "what-is-urolithin-a",
    question: "What is Urolithin A?",
    answer:
      "A postbiotic — a compound your gut bacteria make from ellagitannins in foods like pomegranate, berries and walnuts. The catch: it depends on your microbiome, and only about 1 in 3 people produce a meaningful amount. M3 delivers a standardized dose so it isn't left to the lottery of your gut.",
    pathway: ["Pomegranate", "Ellagitannins", "Gut bacteria", "Urolithin A"],
    stats: [
      {
        value: "1",
        suffix: "in 3",
        label: "people make meaningful Urolithin A from diet",
      },
      {
        value: "500",
        suffix: "mg",
        label: "standardized per M3 daily serving",
      },
      {
        value: "4",
        suffix: "mo",
        label: "strength measured in Urolithin A trials*",
      },
    ],
  },
  {
    id: "what-is-mitophagy",
    question: "What is mitophagy?",
    answer:
      "Your cells' quality-control system. It identifies damaged or worn-out mitochondria and recycles them, clearing space for fresh ones to form. The process naturally slows with age — part of why energy and recovery decline.",
    steps: [
      {
        icon: "wear",
        title: "Mitochondria wear out",
        subtitle: "Less energy, slower recovery",
      },
      {
        icon: "recycle",
        title: "Mitophagy recycles them",
        subtitle: "Damaged engines are cleared",
      },
      {
        icon: "fresh",
        title: "Fresh mitochondria form",
        subtitle: "Output and recovery improve",
      },
    ],
  },
  {
    id: "whats-in-each-serving",
    question: "What's in each serving?",
    answer:
      "Per 2-capsule daily serving, from standardized plant extracts — one calm ritual, no stimulants:",
    ingredients: [
      {
        name: "Urolithin A",
        source: "from Pomegranate (Punica granatum)",
        amount: "500",
        unit: "mg",
      },
      { name: "Spermidine", source: "from Wheat germ", amount: "3", unit: "mg" },
      {
        name: "S-allyl cysteine",
        source: "from Aged garlic",
        amount: "0.5",
        unit: "mg",
      },
    ],
    note: "60 vegetarian capsules · one month per bottle.",
  },
  {
    id: "how-long-to-notice",
    question: "How long until I notice something?",
    answer:
      "It's a daily ritual, not a switch. Cellular changes begin within days; the visible strength gains in trials were measured at around four months. Consistency compounds.",
    timeline: [
      { day: "Day 02", label: "Cellular recycling switches on" },
      { day: "Day 30", label: "New mitochondria form" },
      { day: "Day 120", label: "Strength measured in trials*" },
    ],
  },
  {
    id: "build-muscle-mass",
    question: "Will it build muscle mass?",
    answer:
      "No — and we won't pretend otherwise. In trials, Urolithin A improved muscle strength and quality without changing body composition. Size comes from training and protein. M3 works on the engine inside the muscle, not its size.",
    cards: [
      {
        title: "M3 — Urolithin A",
        badge: "Cellular",
        body: "Muscle strength & cellular quality, without changing body composition.",
        highlight: true,
      },
      {
        title: "Training + protein",
        badge: "Size",
        body: "The proven drivers of muscle mass and hypertrophy.",
      },
    ],
    note: "Best together: M3 powers the cells, training builds the size.",
  },
  {
    id: "studies-on-m3",
    question: "Are these studies on M3 itself?",
    answer:
      "No — they're on M3's individual actives, mostly using synthesized Urolithin A at 500–1000 mg. M3's own finished-formula trial is in progress. We attribute every claim to the molecules and their published trials, never to the finished product.",
    studies: [
      "Nature Metabolism · 2019",
      "Cell Reports Medicine · 2022",
      "JAMA Network Open · 2022",
      "iScience · 2025",
    ],
    pills: [
      "Studied dose: 500–1000 mg UA",
      "M3 dose: 500 mg standardized",
      "Formula trial: in progress",
    ],
  },
  {
    id: "biomarkers-moved",
    question: "Which biomarkers does Urolithin A move?",
    answer:
      "Across published human trials, Urolithin A shifted markers of inflammation, muscle integrity and aerobic capacity in a favourable direction. These come from different trials at 500–1000 mg of synthesized Urolithin A — they describe the molecule, not the finished M3 formula.",
    biomarkerGroups: [
      {
        title: "Inflammation & metabolism",
        markers: [
          { name: "C-reactive protein (CRP)", direction: "down" },
          { name: "Plasma acylcarnitines", direction: "down" },
          { name: "Plasma ceramides", direction: "down" },
        ],
      },
      {
        title: "Muscle & aerobic capacity",
        markers: [
          { name: "Leg-muscle strength", direction: "up" },
          { name: "3-methylhistidine", direction: "down" },
          { name: "Peak VO₂", direction: "up" },
          { name: "Six-minute walk distance", direction: "up" },
        ],
      },
    ],
    note: "Directions observed across Urolithin A human trials (500–1000 mg). 3-methylhistidine is a muscle-breakdown marker — lower is favourable. Findings describe the molecule, not the finished M3 formula, whose trial is in progress. Not evaluated by the FSSAI or FDA.",
  },
  {
    id: "safe-and-tested",
    question: "Is M3 safe and tested?",
    answer:
      "M3 is manufactured under FSSAI licence with standardized plant extracts and is third-party tested. Urolithin A has shown a strong safety profile across clinical trials. If you're pregnant, nursing, or on medication, check with your doctor before starting.",
    pills: [
      "FSSAI licensed",
      "Third-party tested",
      "100% vegetarian",
      "No added stimulants",
    ],
  },
  {
    id: "member-results",
    question: "Can I see real member results?",
    answer:
      "M3 is launching now, so you won't find customer testimonials here yet — and we won't invent them. What we can show is the published, peer-reviewed human evidence behind the actives. Verified stories will appear here once real people have used it.",
    banner: "Verified reviews · coming after launch",
  },
];

function StepIcon({ kind }: { kind: FaqStep["icon"] }) {
  const cls = "h-5 w-5";
  if (kind === "recycle") return <ArrowPathIcon className={cls} />;
  if (kind === "fresh") return <SparklesIcon className={cls} />;
  return <ArrowTrendingDownIcon className={cls} />;
}

function FaqOverlay({
  activeId,
  onSelect,
  onClose,
}: {
  activeId: string;
  onSelect: (id: string) => void;
  onClose: () => void;
}) {
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const active = FAQS.find((f) => f.id === activeId) ?? FAQS[0]!;
  const {
    pathway,
    stats,
    timeline,
    cards,
    steps,
    ingredients,
    studies,
    biomarkerGroups,
    pills,
    banner,
    note,
  } = active;

  useEffect(() => {
    lastFocused.current = document.activeElement as HTMLElement;
    // Lock scroll on the document root, NOT <body>. Putting overflow:hidden on
    // <body> re-parents the section's position:sticky scrollytelling scene to
    // the body, which makes it jump out of view — leaving the area behind the
    // modal black. The root element is already the page's scroll container, so
    // freezing its overflow-y locks scroll without disturbing the sticky scene.
    const html = document.documentElement;
    const prevOverflowY = html.style.overflowY;
    html.style.overflowY = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      html.style.overflowY = prevOverflowY;
      window.removeEventListener("keydown", onKey);
      lastFocused.current?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduce ? 0 : 0.2 }}
      className="fixed inset-0 z-50 flex items-stretch justify-center bg-black/60 sm:items-center sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={active.question}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: reduce ? 1 : 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduce ? 0 : 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex h-full w-full max-w-5xl flex-col overflow-hidden text-[#1a1a1a] sm:h-auto sm:max-h-[88vh] sm:rounded-3xl lg:flex-row"
        style={{ background: FAQ_CREAM }}
      >
        {/* Left rail — full FAQ list. Horizontal scroll on mobile, column from lg. */}
        <div className="shrink-0 border-b border-black/10 lg:w-[260px] lg:border-b-0 lg:border-r">
          <p className="px-5 pt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/40 lg:px-6 lg:pt-6">
            FAQs
          </p>
          <ul className="flex gap-2 overflow-x-auto overscroll-x-contain px-4 pb-4 pt-3 [scrollbar-width:none] lg:flex-col lg:gap-1 lg:overflow-visible lg:px-3 lg:pb-6 [&::-webkit-scrollbar]:hidden">
            {FAQS.map((f) => {
              const on = f.id === active.id;
              return (
                <li key={f.id} className="shrink-0 lg:shrink">
                  <button
                    type="button"
                    aria-current={on ? "true" : undefined}
                    onClick={() => onSelect(f.id)}
                    className={`whitespace-normal rounded-xl px-4 py-2.5 text-left text-[13px] leading-snug transition-colors lg:w-full ${
                      on
                        ? "bg-white font-medium text-[#1a1a1a] shadow-sm"
                        : "text-[#1a1a1a]/55 hover:bg-black/[0.04] hover:text-[#1a1a1a]/80"
                    }`}
                  >
                    {f.question}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right — banner + question + answer + design elements (scrollable). */}
        <div className="relative flex-1 overflow-y-auto overscroll-contain">
          <div
            aria-hidden="true"
            className="h-28 w-full md:h-36"
            style={{ background: FAQ_BANNER }}
          />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur transition-colors hover:bg-black/50"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>

          <div className="px-6 py-7 md:px-9 md:py-9">
            <h3 className="text-[26px] font-semibold leading-[1.1] tracking-tight md:text-[34px]">
              {active.question}
            </h3>
            <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-[#1a1a1a]/70 md:text-[18px]">
              {active.answer}
            </p>

            {pathway && (
              <div className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-3">
                {pathway.map((p, i) => (
                  <Fragment key={p}>
                    <span className="rounded-full bg-white px-4 py-2 text-[13px] font-medium shadow-sm ring-1 ring-black/5">
                      {p}
                    </span>
                    {i < pathway.length - 1 && (
                      <span aria-hidden="true" className="text-[#1a1a1a]/30">
                        →
                      </span>
                    )}
                  </Fragment>
                ))}
              </div>
            )}

            {stats && (
              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-6 border-t border-black/10 pt-7">
                {stats.map((s) => (
                  <div key={s.label} className="min-w-[140px] flex-1">
                    <p className="font-semibold tracking-tight">
                      <span className="text-[40px] leading-none md:text-[44px]">
                        {s.value}
                      </span>
                      {s.suffix && (
                        <span className="ml-0.5 text-[16px] font-medium text-[#1a1a1a]/70 md:text-[18px]">
                          {s.suffix}
                        </span>
                      )}
                    </p>
                    <p className="mt-2 max-w-[240px] text-[13px] leading-relaxed text-[#1a1a1a]/55">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {timeline && (
              <div className="mt-8">
                <div className="grid gap-6 border-t border-black/15 sm:grid-cols-3">
                  {timeline.map((t) => (
                    <div key={t.day} className="-mt-1">
                      <span
                        className="block h-2 w-2 rounded-full"
                        style={{ background: FAQ_ACCENT }}
                      />
                      <p
                        className="mt-3 font-mono text-[12px] font-medium uppercase tracking-wide"
                        style={{ color: FAQ_ACCENT }}
                      >
                        {t.day}
                      </p>
                      <p className="mt-1.5 text-[15px] font-semibold">
                        {t.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {cards && (
              <div className="mt-7 space-y-3">
                {cards.map((c) => (
                  <div
                    key={c.title}
                    className="flex items-start justify-between gap-4 rounded-2xl border bg-white/60 px-5 py-4"
                    style={{
                      borderColor: c.highlight
                        ? `${FAQ_ACCENT}99`
                        : "rgba(0,0,0,0.08)",
                      boxShadow: c.highlight
                        ? `inset 0 0 0 1px ${FAQ_ACCENT}55`
                        : undefined,
                    }}
                  >
                    <div className="min-w-0">
                      <p className="text-[15px] font-semibold md:text-[16px]">
                        {c.title}
                      </p>
                      <p className="mt-1 text-[14px] leading-relaxed text-[#1a1a1a]/60">
                        {c.body}
                      </p>
                    </div>
                    <span
                      className="shrink-0 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em]"
                      style={{ background: `${FAQ_ACCENT}1A`, color: FAQ_ACCENT }}
                    >
                      {c.badge}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {steps && (
              <div className="mt-7">
                {steps.map((s, i) => (
                  <Fragment key={s.title}>
                    <div className="flex items-center gap-4 rounded-2xl bg-white/70 px-5 py-4 ring-1 ring-black/5">
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                        style={{
                          background: `${FAQ_ACCENT}14`,
                          color: FAQ_ACCENT,
                        }}
                      >
                        <StepIcon kind={s.icon} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[15px] font-semibold">{s.title}</p>
                        <p className="mt-0.5 text-[13px] text-[#1a1a1a]/55">
                          {s.subtitle}
                        </p>
                      </div>
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="flex justify-center py-1.5 text-[#1a1a1a]/30"
                      >
                        <ArrowDownIcon className="h-4 w-4" />
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>
            )}

            {ingredients && (
              <div className="mt-7 border-t border-black/10">
                {ingredients.map((ing) => (
                  <div
                    key={ing.name}
                    className="flex items-baseline justify-between gap-4 border-b border-black/10 py-4"
                  >
                    <div className="min-w-0">
                      <p className="text-[16px] font-semibold">{ing.name}</p>
                      <p className="mt-0.5 text-[13px] text-[#1a1a1a]/55">
                        {ing.source}
                      </p>
                    </div>
                    <p className="shrink-0 whitespace-nowrap font-semibold">
                      <span
                        className="text-[18px]"
                        style={{ color: FAQ_ACCENT }}
                      >
                        {ing.amount}
                      </span>
                      <span className="ml-1 text-[12px] uppercase tracking-wide text-[#1a1a1a]/45">
                        {ing.unit}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            )}

            {studies && (
              <div className="mt-7 border-t border-black/10">
                {studies.map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-3 border-b border-black/10 py-3.5"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: FAQ_ACCENT }}
                    />
                    <span className="text-[15px] font-medium">{s}</span>
                  </div>
                ))}
              </div>
            )}

            {biomarkerGroups && (
              <div className="mt-8 grid gap-x-12 gap-y-8 border-t border-black/10 pt-7 sm:grid-cols-2">
                {biomarkerGroups.map((g) => (
                  <div key={g.title}>
                    <p className="text-[16px] font-semibold">{g.title}</p>
                    <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-[#1a1a1a]/40">
                      {g.markers.length} markers
                    </p>
                    <div className="mt-3">
                      {g.markers.map((m) => (
                        <div
                          key={m.name}
                          className="flex items-center justify-between gap-3 border-b border-black/10 py-3"
                        >
                          <span className="text-[15px]">{m.name}</span>
                          {m.direction === "up" ? (
                            <ArrowUpIcon
                              className="h-4 w-4 shrink-0"
                              style={{ color: FAQ_ACCENT }}
                            />
                          ) : (
                            <ArrowDownIcon
                              className="h-4 w-4 shrink-0"
                              style={{ color: FAQ_ACCENT }}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {pills && (
              <div className="mt-7 flex flex-wrap gap-2.5">
                {pills.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-black/15 px-4 py-2 font-mono text-[11px] uppercase tracking-wide text-[#1a1a1a]/65"
                  >
                    {p}
                  </span>
                ))}
              </div>
            )}

            {banner && (
              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-white/50 px-5 py-4 ring-1 ring-black/5">
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ background: FAQ_ACCENT }}
                />
                <span className="font-mono text-[12px] uppercase tracking-wide text-[#1a1a1a]/55">
                  {banner}
                </span>
              </div>
            )}

            {note && (
              <p
                className="mt-6 pl-4 font-mono text-[12.5px] leading-relaxed text-[#1a1a1a]/55"
                style={{ borderLeft: `2px solid ${FAQ_ACCENT}66` }}
              >
                {note}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function UltraEnduranceBiomarkers() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [activeFaqId, setActiveFaqId] = useState<string | null>(null);

  // Hide the floating ElevenLabs widget while the FAQ overlay is open — it
  // otherwise overlaps the answer content (esp. on mobile).
  useHideFloatingAgent(activeFaqId !== null);

  // Drive the active step from scroll progress through the (tall) section,
  // so the pinned visual swaps backgrounds 01 → 04 as you scroll.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const idx = Math.min(
      STEPS.length - 1,
      Math.max(0, Math.floor(p * STEPS.length)),
    );
    setActiveStep(idx);
  });

  const goToStep = (i: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const distance = el.offsetHeight - window.innerHeight;
    const top = el.offsetTop + (i / STEPS.length) * distance + 4;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: `${STEPS.length * 100}svh` }}
    >
      {/* Pinned scene */}
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden text-white">
        {/* Crossfading backgrounds — one per step: photo over a gradient
            fallback, with a dark scrim so the white overlay text stays
            legible regardless of the image. */}
        {STEPS.map((step, i) => (
          <div
            key={step.title}
            aria-hidden="true"
            className="absolute inset-0 transition-opacity duration-700 ease-out"
            style={{
              background: step.gradient,
              opacity: i === activeStep ? 1 : 0,
            }}
          >
            {step.video ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src={step.video} type="video/mp4" />
              </video>
            ) : step.image ? (
              <Image
                src={step.image}
                alt=""
                fill
                sizes="100vw"
                priority={i === 0}
                className="object-cover"
              />
            ) : null}
            {/* Legibility scrim — darker on the left (heading/pills) and
                bottom (pills), moderate elsewhere (nav). */}
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />
          </div>
        ))}

        {/* Overlays */}
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-between px-4 py-20 md:px-8 lg:block lg:py-0">
          {/* Label + headline + paragraph — per step, crossfades on scroll
              (keyed by activeStep, like the question pills below). */}
          <motion.div
            key={`copy-${activeStep}`}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.4, ease: "easeOut" }}
            className="lg:absolute lg:left-8 lg:top-[14%] lg:max-w-lg"
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.28em] md:text-[12px]"
              style={{ color: LIME }}
            >
              {STEPS[activeStep]!.label}
            </p>
            <h2 className="mt-4 text-balance text-[30px] font-semibold leading-[1.06] tracking-tight md:text-[44px]">
              {STEPS[activeStep]!.headline}
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/75 md:text-[17px]">
              {STEPS[activeStep]!.paragraph}
            </p>
          </motion.div>

          {/* Question pills → overlays. Keyed by activeStep so they fade
              and swap to the current step's questions as you scroll. */}
          <motion.ul
            key={activeStep}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.4, ease: "easeOut" }}
            className="space-y-3 lg:absolute lg:bottom-[12%] lg:left-8 lg:w-[42%] lg:max-w-md"
          >
            {STEPS[activeStep]!.questions.map((question) => (
              <li key={question.q}>
                <button
                  type="button"
                  aria-haspopup="dialog"
                  onClick={() =>
                    setActiveFaqId(
                      FAQS.find((f) => f.question === question.q)?.id ??
                        FAQS[0]!.id,
                    )
                  }
                  className="flex w-full items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-left backdrop-blur-md transition-colors hover:bg-white/20"
                >
                  <span className="text-[14px] font-medium text-white md:text-[15px]">
                    {question.q}
                  </span>
                  <PlusIcon
                    className="h-5 w-5 shrink-0"
                    strokeWidth={2}
                    style={{ color: LIME }}
                  />
                </button>
              </li>
            ))}
          </motion.ul>

          {/* Numbered step indicator — tracks scroll, clickable */}
          <nav
            aria-label="Your membership journey"
            className="flex gap-x-6 overflow-x-auto pb-1 lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:flex-col lg:gap-y-5 lg:overflow-visible lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {STEPS.map((step, i) => {
              const active = i === activeStep;
              return (
                <button
                  key={step.title}
                  type="button"
                  aria-current={active ? "true" : undefined}
                  onClick={() => goToStep(i)}
                  className="flex shrink-0 items-center gap-3 whitespace-nowrap text-left"
                >
                  <span
                    aria-hidden="true"
                    className={`hidden h-5 w-px transition-colors lg:block ${
                      active ? "bg-white" : "bg-transparent"
                    }`}
                  />
                  <span
                    className={`text-[14px] transition-colors ${
                      active
                        ? "font-medium text-white"
                        : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    {step.title}
                  </span>
                  <span
                    className={`text-[12px] tabular-nums transition-colors ${
                      active ? "text-white/70" : "text-white/30"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {activeFaqId && (
          <FaqOverlay
            activeId={activeFaqId}
            onSelect={setActiveFaqId}
            onClose={() => setActiveFaqId(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
