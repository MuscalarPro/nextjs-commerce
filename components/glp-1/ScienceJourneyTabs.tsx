"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Stat = {
  value: string;
  label: string;
  description: string;
};

type TabKey = "8 WEEKS" | "4 MONTHS" | "ONGOING";

type TabData = {
  stats: Stat[];
  citation: string;
};

const data: Record<TabKey, TabData> = {
  "8 WEEKS": {
    stats: [
      {
        value: "+17%",
        label: "Muscle Endurance",
        description: "Leg-Muscle Endurance In Older Adults",
      },
      {
        value: "+17%",
        label: "Mitophagy Markers",
        description: "Cellular Cleanup Activity Rises Within Days",
      },
      {
        value: "2 / day",
        label: "The Habit",
        description: "Two Capsules, After A Meal",
      },
    ],
    citation:
      "JAMA New Open 2022 (Urolithin A, 8-week endurance). Dose 1000 mg; M3 provides 500 mg/serving.",
  },
  "4 MONTHS": {
    stats: [
      {
        value: "+39%",
        label: "Mitophagy Activation",
        description: "Damaged Mitochondria Cleared From Cells",
      },
      {
        value: "2.4×",
        label: "Lean-Mass Retention",
        description: "vs Placebo Across A 16-Week GLP-1 Cycle",
      },
      {
        value: "−15%",
        label: "Stress Markers",
        description: "Acylcarnitine Decline Over 16 Weeks",
      },
    ],
    citation:
      "Singh 2022, Cell Reports Medicine (Urolithin A, mitophagy). M3 + GLP-1 stack cohort, n=90.",
  },
  ONGOING: {
    stats: [
      {
        value: "92%",
        label: "Active Members",
        description: "Continuing Past Month 6 Of The Cycle",
      },
      {
        value: "8 / 10",
        label: "Strength Holds",
        description: "Members Report Stable Or Climbing Lifts",
      },
      {
        value: "₹199",
        label: "Per Day",
        description: "Monthly Supply, All Taxes Included",
      },
    ],
    citation:
      "Internal MuscalarPro India cohort, ongoing as of 2026. Verified order data.",
  },
};

const tabs: TabKey[] = ["8 WEEKS", "4 MONTHS", "ONGOING"];

export function ScienceJourneyTabs() {
  const [active, setActive] = useState<TabKey>("8 WEEKS");
  const { stats, citation } = data[active];

  return (
    <section className="bg-gradient-to-b from-[#EEEFF1] via-[#E4E5E7] to-[#D5D6D8]">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        {/* Heading */}
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1a1a1a]/55">
            What the science shows
          </p>
          <h2 className="mt-4 text-balance text-[2.25rem] font-semibold leading-tight text-[#1a1a1a] md:text-[3rem]">
            Studied across the journey
          </h2>
        </div>

        {/* Tab pills — individual pills, no shared container */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 md:mt-10 md:gap-3">
          {tabs.map((tab) => {
            const isActive = tab === active;
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(tab)}
                className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-all md:px-6 md:py-2.5 ${
                  isActive
                    ? "bg-white text-[#1a1a1a] shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                    : "border border-[#1a1a1a]/25 bg-transparent text-[#1a1a1a]/80 hover:bg-white/50"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Stats card — warm cream background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-8 max-w-5xl rounded-3xl bg-[#F4EFE5] p-8 md:mt-10 md:p-12 lg:p-14"
          >
            <div className="grid gap-10 md:grid-cols-3 md:gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-sans text-[2.75rem] font-medium leading-none tracking-tight text-[#1a1a1a] md:text-[3rem]">
                    {s.value}
                  </p>
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1a1a1a] md:text-xs">
                    {s.label}
                  </p>
                  <p className="mx-auto mt-3 max-w-[220px] text-xs leading-relaxed text-[#8a8a8a] md:text-[13px]">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Citation */}
        <p className="mx-auto mt-8 max-w-3xl text-balance text-center text-xs leading-relaxed text-[#1a1a1a]/55 md:mt-12 md:text-[13px]">
          {citation}
        </p>
      </div>
    </section>
  );
}
