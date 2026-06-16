"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import { motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";

// Brand orange — matches the rest of the page.
const ORANGE = "#E05A30";

type Faq = {
  q: string;
  a: React.ReactNode;
};

const FAQS: Faq[] = [
  {
    q: "Is M3 safe for tested / competitive athletes?",
    a: "M3 is formulated to be banned-substance free and built around food-derived, clinically-studied actives — no stimulants, no hormones. If you compete under an anti-doping body, confirm the current batch against your sport’s requirements with your team, since responsibility for what you ingest ultimately sits with the athlete.",
  },
  {
    q: "What does the app actually do?",
    a: (
      <>
        It syncs your wearables (Whoop, Garmin, Oura, Apple Health), turns
        recovery, HRV and VO<sub>2</sub> trends into a single cellular-readiness
        score, and gives you a daily protocol — when to take M3, how to train,
        when to recover. It also tracks your progress over cycles and reminds
        you to retest.
      </>
    ),
  },
  {
    q: "How is this different from a pre-workout?",
    a: "A pre-workout is acute fuel — stimulants to push one session. M3 is the opposite layer: it works on the cellular machinery (your mitochondria) over weeks, renewing the engine itself. No buzz, no crash. Foundation, not a shot of energy.",
  },
  {
    q: "When will I notice it?",
    a: "In the underlying ingredient research, mitophagy begins within days, mitochondrial renewal and performance shifts appear around weeks 4–6, and endurance and strength gains build out to ~2–4 months of daily use. Consistency is the dose.",
  },
  {
    q: "Do the studies prove M3 itself works?",
    a: "The research cited here was conducted on M3’s individual actives — Urolithin A (including its patented forms), spermidine, and aged garlic extract / S-allyl cysteine — not on the finished MuscalarPro [M3] product, and study doses can differ from those in M3. We’re transparent about that. M3 is built on that ingredient evidence base; it isn’t a substitute for a varied diet, and these statements haven’t been evaluated by the FDA or FSSAI.",
  },
];

function FaqItem({ faq, defaultOpen }: { faq: Faq; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const reduce = useReducedMotion();
  const uid = useId();
  const buttonId = `${uid}-button`;
  const panelId = `${uid}-panel`;

  return (
    <div className="border-b border-black/10">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-start justify-between gap-4 py-5 text-left"
        >
          <span className="text-[15px] font-semibold text-[#1a1a1a] md:text-[16px]">
            {faq.q}
          </span>
          {/* A plus that rotates 45° into an × on open. */}
          <motion.span
            aria-hidden="true"
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            className="mt-0.5 shrink-0"
            style={{ color: ORANGE }}
          >
            <PlusIcon className="h-5 w-5" strokeWidth={2} />
          </motion.span>
        </button>
      </h3>

      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!open}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: reduce ? 0 : 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="max-w-2xl pb-6 text-[14px] leading-relaxed text-[#1a1a1a]/60">
          {faq.a}
        </p>
      </motion.div>
    </div>
  );
}

export function UltraEnduranceFaq() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-3xl px-4 py-20 md:px-8 md:py-28">
        {/* Heading */}
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1a1a1a] md:text-[12px]">
            Questions
          </p>
          <h2
            className="mt-3 text-[30px] font-semibold tracking-tight md:text-[38px]"
            style={{ color: ORANGE }}
          >
            Straight answers.
          </h2>
        </div>

        {/* Accordion list */}
        <div className="mt-12 border-t border-black/10 md:mt-14">
          {FAQS.map((faq, i) => (
            <FaqItem key={faq.q} faq={faq} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
