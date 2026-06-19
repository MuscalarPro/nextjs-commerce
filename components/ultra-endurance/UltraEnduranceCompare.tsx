"use client";

import { CheckIcon } from "@heroicons/react/24/solid";
import { motion, useReducedMotion } from "framer-motion";
import { Fragment, useState } from "react";

const SECTION_BG = "#EDECE3";
const M3_GREEN = "#2F7350";
const GREEN_ACCENT = "#1F7A4D";

// M3's own orb (brand green) + per-competitor decorative orbs, all built
// as CSS radial-gradient spheres.
const M3_ORB =
  "radial-gradient(circle at 35% 28%, #7FCAA0 0%, #2F7350 55%, #173E2A 100%)";
const ORBS: Record<string, string> = {
  lilac: "radial-gradient(circle at 35% 28%, #ffffff, #D9D4EE 60%, #B7AFE0)",
  gold: "radial-gradient(circle at 35% 28%, #FFE9A8, #F0C25A 60%, #C99526)",
  cream: "radial-gradient(circle at 35% 28%, #ffffff, #ECE7DA 60%, #CFC6B2)",
  white: "radial-gradient(circle at 35% 28%, #ffffff, #F1F1F1 55%, #D6D6D6)",
  maroon: "radial-gradient(circle at 35% 28%, #C65F93, #8E2F5E 60%, #5E1C3D)",
  orange: "radial-gradient(circle at 35% 28%, #FFB38A, #E9683F 60%, #B8401F)",
  green: "radial-gradient(circle at 35% 28%, #B6D98A, #7FAA55 60%, #547A32)",
  tan: "radial-gradient(circle at 35% 28%, #E6C79A, #CFA06A 60%, #9C7340)",
};

type Cell = "yes" | "partial" | "no" | string;
type Row = { label: React.ReactNode; cells: [Cell, Cell, Cell, Cell] };
type Competitor = { name: string; sub: string; orb: string };
type Tab = {
  key: string;
  m3sub: string;
  competitors: [Competitor, Competitor, Competitor];
  rows: Row[];
};

const VO2 = (
  <>
    VO<sub>2</sub>
  </>
);

const TABS: Tab[] = [
  {
    key: "Cellular",
    m3sub: "UA · SPERMIDINE · SAC",
    competitors: [
      { name: "NAD+ / NMN", sub: "NAD PRECURSOR", orb: ORBS.lilac! },
      { name: "CoQ10", sub: "UBIQUINOL", orb: ORBS.gold! },
      { name: "Spermidine", sub: "AUTOPHAGY", orb: ORBS.cream! },
    ],
    rows: [
      { label: "Directly activates mitophagy", cells: ["yes", "partial", "no", "partial"] },
      { label: "Multi-pathway: energy + autophagy + antioxidant", cells: ["yes", "no", "no", "no"] },
      { label: "Improves mitochondrial biomarkers in humans", cells: ["yes", "partial", "partial", "no"] },
      { label: "Lowers ceramides — an emerging CVD-risk marker", cells: ["yes", "partial", "partial", "no"] },
      { label: "Depth of human clinical evidence", cells: ["Strong", "Emerging", "Extensive", "Emerging"] },
    ],
  },
  {
    key: "Strength",
    m3sub: "UROLITHIN A 500MG",
    competitors: [
      { name: "Creatine", sub: "MONOHYDRATE", orb: ORBS.white! },
      { name: "EAA / Protein", sub: "WHEY · AMINOS", orb: ORBS.cream! },
      { name: "HMB", sub: "LEUCINE METABOLITE", orb: ORBS.white! },
    ],
    rows: [
      { label: "Increases muscle strength (human RCT)", cells: ["yes", "yes", "partial", "partial"] },
      { label: "Builds muscle mass / hypertrophy", cells: ["no", "yes", "yes", "partial"] },
      { label: "Improves muscle quality & contractile function", cells: ["yes", "partial", "partial", "partial"] },
      { label: "Lowers a muscle-breakdown marker (3-MH)", cells: ["yes", "partial", "yes", "yes"] },
      { label: "Depth of human clinical evidence", cells: ["Strong", "Extensive", "Extensive", "Strong"] },
    ],
  },
  {
    key: "Endurance",
    m3sub: "MITOCHONDRIAL",
    competitors: [
      { name: "Beetroot", sub: "NITRATE", orb: ORBS.maroon! },
      { name: "Beta-alanine", sub: "CARNOSINE", orb: ORBS.white! },
      { name: "Pre-workout", sub: "CAFFEINE", orb: ORBS.orange! },
    ],
    rows: [
      { label: <>Raises peak {VO2} / aerobic capacity</>, cells: ["yes", "yes", "partial", "partial"] },
      { label: "Improves muscular endurance (reps to fatigue)", cells: ["yes", "partial", "yes", "partial"] },
      { label: "Improves functional endurance (6-min walk)", cells: ["yes", "partial", "partial", "partial"] },
      { label: "Works at the mitochondrial level", cells: ["yes", "no", "no", "no"] },
      { label: "Depth of human clinical evidence", cells: ["Strong", "Strong", "Strong", "Extensive"] },
    ],
  },
  {
    key: "Brain",
    m3sub: "RENEWAL PATHWAYS",
    competitors: [
      { name: "Omega-3", sub: "EPA · DHA", orb: ORBS.gold! },
      { name: "Caffeine + L-theanine", sub: "ACUTE FOCUS", orb: ORBS.green! },
      { name: "Lion's Mane", sub: "NGF SUPPORT", orb: ORBS.tan! },
    ],
    rows: [
      { label: "Acts on brain-cell renewal pathways", cells: ["yes", "partial", "no", "partial"] },
      { label: "Supports brain mitochondrial health", cells: ["yes", "partial", "no", "partial"] },
      { label: "Proven cognitive or memory benefit in humans", cells: ["no", "partial", "yes", "partial"] },
      { label: "Stimulant-free", cells: ["yes", "yes", "no", "yes"] },
      { label: "Depth of human cognitive evidence", cells: ["Emerging", "Strong", "Strong", "Emerging"] },
    ],
  },
  {
    key: "Biomarkers",
    m3sub: "MEASURED IN RCTS",
    competitors: [
      { name: "Creatine", sub: "MONOHYDRATE", orb: ORBS.white! },
      { name: "NAD+ / NMN", sub: "NAD PRECURSOR", orb: ORBS.lilac! },
      { name: "Omega-3", sub: "EPA · DHA", orb: ORBS.gold! },
    ],
    rows: [
      { label: "Lowers inflammation (CRP)", cells: ["yes", "partial", "partial", "yes"] },
      { label: "Lowers plasma ceramides (CVD-risk)", cells: ["yes", "no", "partial", "partial"] },
      { label: "Improves mitochondrial markers (acylcarnitines)", cells: ["yes", "no", "partial", "no"] },
      { label: "Lowers a muscle-breakdown marker (3-MH)", cells: ["yes", "partial", "no", "partial"] },
      { label: <>Raises peak {VO2}</>, cells: ["yes", "no", "no", "partial"] },
    ],
  },
];

function Orb({ gradient }: { gradient: string }) {
  return (
    <span
      aria-hidden="true"
      className="block h-11 w-11 rounded-full md:h-14 md:w-14"
      style={{
        background: gradient,
        boxShadow:
          "inset -2px -3px 7px rgba(0,0,0,0.28), inset 2px 3px 7px rgba(255,255,255,0.4)",
      }}
    />
  );
}

function NoMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-label="No"
      role="img"
      className="h-6 w-6 text-[#1a1a1a]/25"
    >
      <circle cx="12" cy="12" r="9" />
      <line x1="6.5" y1="17.5" x2="17.5" y2="6.5" />
    </svg>
  );
}

function renderCell(value: Cell, isM3: boolean) {
  if (value === "yes") {
    return (
      <span
        className="flex h-7 w-7 items-center justify-center rounded-full"
        style={{ background: isM3 ? M3_GREEN : "#1a1a1a" }}
      >
        <CheckIcon className="h-4 w-4 text-white" />
        <span className="sr-only">Yes</span>
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="text-[14px] italic text-[#1a1a1a]/45">Partial</span>
    );
  }
  if (value === "no") return <NoMark />;
  // Text (depth row)
  const emerging = value === "Emerging";
  return (
    <span
      className={`text-[14px] ${emerging ? "italic" : ""}`}
      style={{ color: emerging ? GREEN_ACCENT : "rgba(26,26,26,0.85)" }}
    >
      {value}
    </span>
  );
}

function InfoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
      className="h-3.5 w-3.5 shrink-0 text-[#1a1a1a]/30"
    >
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="11" x2="12" y2="16" />
      <circle cx="12" cy="8" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function UltraEnduranceCompare() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const tab = TABS[active]!;

  // Grid: [label] [M3] [comp ×3]. First two columns frozen (sticky) so
  // they stay while the competitor columns side-scroll.
  const gridCols =
    "grid-cols-[118px_110px_repeat(3,minmax(128px,1fr))] md:grid-cols-[210px_186px_repeat(3,minmax(130px,1fr))]";
  const m3Left = "left-[118px] md:left-[210px]";
  // Mobile: flush white panel with a clean right-edge shadow so the frozen
  // M3 column reads as a pinned panel (not a floating card sandwiched
  // between scrolling content). Desktop: rounded floating card, no shadow.
  const m3Panel =
    "bg-white shadow-[8px_0_16px_-10px_rgba(0,0,0,0.18)] md:shadow-none";

  return (
    <section className="w-full" style={{ background: SECTION_BG }}>
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        {/* Tab nav */}
        <div className="flex items-center gap-3 overflow-x-auto pb-1 [scrollbar-width:none] md:justify-center [&::-webkit-scrollbar]:hidden">
          <span className="hidden shrink-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1a1a1a]/50 sm:inline">
            Compare M3 to
          </span>
          <div
            role="tablist"
            aria-label="Comparison categories"
            className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#1a1a1a]/[0.06] p-1"
          >
            {TABS.map((t, i) => {
              const on = i === active;
              return (
                <button
                  key={t.key}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(i)}
                  className={`rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                    on
                      ? "bg-white text-[#1a1a1a] shadow-sm"
                      : "text-[#1a1a1a]/50 hover:text-[#1a1a1a]/80"
                  }`}
                >
                  {t.key}
                </button>
              );
            })}
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-8 text-balance text-center text-[36px] font-bold leading-[1.05] tracking-tight text-[#1a1a1a] md:mt-10 md:text-[52px]">
          Where M3 stands,
          <br />
          pillar by pillar.
        </h2>

        {/* Table */}
        <div className="mt-12 overflow-x-auto pb-2 [scrollbar-width:none] md:mt-16 [&::-webkit-scrollbar]:hidden">
          <motion.div
            key={active}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduce ? 0 : 0.35, ease: "easeOut" }}
            className={`grid ${gridCols}`}
          >
            {/* Header row */}
            <div
              className="sticky left-0 z-10"
              style={{ background: SECTION_BG }}
            />
            <div
              className={`sticky ${m3Left} z-10 flex flex-col items-center gap-2 px-3 pb-5 pt-6 md:rounded-t-3xl ${m3Panel}`}
            >
              <Orb gradient={M3_ORB} />
              <p
                className="text-[14px] font-semibold md:text-[15px]"
                style={{ color: M3_GREEN }}
              >
                MuscalarPro M3
              </p>
              <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#1a1a1a]/45">
                {tab.m3sub}
              </p>
            </div>
            {tab.competitors.map((c) => (
              <div
                key={c.name}
                className="flex flex-col items-center gap-2 px-3 pb-5 pt-6 text-center"
              >
                <Orb gradient={c.orb} />
                <p className="text-[14px] font-semibold text-[#1a1a1a] md:text-[15px]">
                  {c.name}
                </p>
                <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#1a1a1a]/45">
                  {c.sub}
                </p>
              </div>
            ))}

            {/* Data rows */}
            {tab.rows.map((row, ri) => {
              const last = ri === tab.rows.length - 1;
              return (
                <Fragment key={ri}>
                  {/* Label (frozen) */}
                  <div
                    className="sticky left-0 z-20 flex items-center gap-1.5 border-b border-dashed border-[#1a1a1a]/10 py-5 pr-3 text-[14px] text-[#1a1a1a]"
                    style={{ background: SECTION_BG }}
                  >
                    <span>{row.label}</span>
                    <InfoIcon />
                  </div>
                  {/* M3 (frozen, white card) */}
                  <div
                    className={`sticky ${m3Left} z-10 flex items-center justify-center py-5 ${m3Panel} ${
                      last ? "md:rounded-b-3xl" : ""
                    }`}
                  >
                    {renderCell(row.cells[0], true)}
                  </div>
                  {/* Competitors (scroll) */}
                  {[row.cells[1], row.cells[2], row.cells[3]].map((cell, ci) => (
                    <div
                      key={ci}
                      className="flex items-center justify-center border-b border-dashed border-[#1a1a1a]/10 py-5 text-center"
                    >
                      {renderCell(cell, false)}
                    </div>
                  ))}
                </Fragment>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
