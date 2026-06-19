"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import { PlayIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";

// Standard home-page hero clip — reused for the CEO overlay.
const CEO_VIDEO =
  "https://cdn.shopify.com/videos/c/o/v/ff3e0c33de2141abaa4c11362d8edbbc.webm";

type Faq = { q: string; a: React.ReactNode };
type Category = { name: string; faqs: Faq[] };

// Same questions + answers as before, grouped into M3-appropriate
// categories (the layout/visuals change, the content does not).
const CATEGORIES: Category[] = [
  {
    name: "Protocol & results",
    faqs: [
      {
        q: "How is this different from a pre-workout?",
        a: "A pre-workout is acute fuel — stimulants to push one session. M3 is the opposite layer: it works on the cellular machinery (your mitochondria) over weeks, renewing the engine itself. No buzz, no crash. Foundation, not a shot of energy.",
      },
      {
        q: "When will I notice it?",
        a: "In the underlying ingredient research, mitophagy begins within days, mitochondrial renewal and performance shifts appear around weeks 4–6, and endurance and strength gains build out to ~2–4 months of daily use. Consistency is the dose.",
      },
    ],
  },
  {
    name: "The M3 app",
    faqs: [
      {
        q: "What does the app actually do?",
        a: (
          <>
            It syncs your wearables (Whoop, Garmin, Oura, Apple Health), turns
            recovery, HRV and VO<sub>2</sub> trends into a single
            cellular-readiness score, and gives you a daily protocol — when to
            take M3, how to train, when to recover. It also tracks your progress
            over cycles and reminds you to retest.
          </>
        ),
      },
    ],
  },
  {
    name: "Safety & sport",
    faqs: [
      {
        q: "Is M3 safe for tested / competitive athletes?",
        a: "M3 is formulated to be banned-substance free and built around food-derived, clinically-studied actives — no stimulants, no hormones. If you compete under an anti-doping body, confirm the current batch against your sport’s requirements with your team, since responsibility for what you ingest ultimately sits with the athlete.",
      },
    ],
  },
  {
    name: "The science",
    faqs: [
      {
        q: "Do the studies prove M3 itself works?",
        a: "The research cited here was conducted on M3’s individual actives — Urolithin A (including its patented forms), spermidine, and aged garlic extract / S-allyl cysteine — not on the finished MuscalarPro [M3] product, and study doses can differ from those in M3. We’re transparent about that. M3 is built on that ingredient evidence base; it isn’t a substitute for a varied diet, and these statements haven’t been evaluated by the FDA or FSSAI.",
      },
    ],
  },
];

function FaqRow({
  faq,
  open,
  onToggle,
}: {
  faq: Faq;
  open: boolean;
  onToggle: () => void;
}) {
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
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 py-5 text-left md:py-6"
        >
          <span className="text-[16px] text-[#1a1a1a] md:text-[18px]">
            {faq.q}
          </span>
          <motion.span
            aria-hidden="true"
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            className="shrink-0 text-[#1a1a1a]/50"
          >
            <PlusIcon className="h-5 w-5" strokeWidth={1.8} />
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
        <p className="max-w-2xl pb-6 text-[14px] leading-relaxed text-[#1a1a1a]/60 md:text-[15px]">
          {faq.a}
        </p>
      </motion.div>
    </div>
  );
}

function CeoVideoModal({ onClose }: { onClose: () => void }) {
  const reduce = useReducedMotion();
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    lastFocused.current = document.activeElement as HTMLElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="A message from our CEO"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: reduce ? 1 : 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: reduce ? 1 : 0.96, opacity: 0 }}
        transition={{ duration: reduce ? 0 : 0.2 }}
        className="relative w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
        {/* Native controls so the viewer can scrub, mute/unmute, fullscreen.
            Muted + looped + autoplay by default. */}
        <video
          controls
          autoPlay
          loop
          muted
          playsInline
          className="aspect-video w-full rounded-2xl bg-black"
        >
          <source src={CEO_VIDEO} type="video/webm" />
        </video>
      </motion.div>
    </motion.div>
  );
}

export function UltraEnduranceFaq() {
  const [activeCat, setActiveCat] = useState(0);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  const category = CATEGORIES[activeCat]!;

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
          {/* LEFT — title, CEO button, category nav */}
          <div>
            <h2 className="text-[44px] font-semibold tracking-tight text-[#1a1a1a] md:text-[56px]">
              FAQs
            </h2>

            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-black/15 py-2 pl-2 pr-5 text-[14px] font-medium text-[#1a1a1a] transition-colors hover:bg-black/5"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10">
                <PlayIcon className="h-3.5 w-3.5 translate-x-px text-[#1a1a1a]" />
              </span>
              Hear from our CEO
            </button>

            {/* Category nav — vertical list on desktop, horizontal scroller
                on mobile. */}
            <nav
              aria-label="FAQ categories"
              className="mt-8 flex gap-x-5 gap-y-2 overflow-x-auto pb-1 md:mt-10 lg:flex-col lg:gap-2 lg:overflow-visible lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {CATEGORIES.map((cat, i) => {
                const active = i === activeCat;
                return (
                  <button
                    key={cat.name}
                    type="button"
                    aria-current={active ? "true" : undefined}
                    onClick={() => {
                      setActiveCat(i);
                      setOpenIdx(null);
                    }}
                    className={`flex shrink-0 items-center gap-2 whitespace-nowrap text-left text-[15px] transition-colors ${
                      active
                        ? "font-medium text-[#1a1a1a]"
                        : "text-[#1a1a1a]/45 hover:text-[#1a1a1a]/70"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`hidden h-px w-4 bg-[#1a1a1a] transition-opacity lg:block ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    {cat.name}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* RIGHT — active category's questions */}
          <div>
            <h3 className="text-[22px] font-medium text-[#1a1a1a] md:text-[26px]">
              {category.name}{" "}
              <span className="text-[#1a1a1a]/40">{category.faqs.length}</span>
            </h3>

            <div className="mt-6 border-t border-black/10 md:mt-8">
              {category.faqs.map((faq, i) => (
                <FaqRow
                  key={faq.q}
                  faq={faq}
                  open={openIdx === i}
                  onToggle={() => setOpenIdx((cur) => (cur === i ? null : i))}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {videoOpen && <CeoVideoModal onClose={() => setVideoOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}
