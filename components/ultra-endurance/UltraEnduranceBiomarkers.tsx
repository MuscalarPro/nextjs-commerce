"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const LIME = "#d2f392";

type Question = { q: string; detail: string };
type Step = {
  title: string;
  gradient: string;
  image: string;
  questions: Question[];
};

// Each step owns a full-bleed background (photo over a gradient fallback)
// that crossfades in as you scroll, plus its own set of questions that
// reveal in the pills below.
const STEPS: Step[] = [
  {
    title: "Decode your baseline",
    gradient: "linear-gradient(135deg, #0D2E2E 0%, #1E3944 55%, #2A5A6B 120%)",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Decode_your_baseline.png?v=1782111232",
    questions: [
      {
        q: "How is this better than a standard checkup?",
        detail:
          "A standard physical checks a handful of markers once a year. M3 builds a full baseline across muscle, metabolism, your heart and cellular age, trends it every cycle, and turns it into one readiness score with a protocol that adapts.",
      },
      {
        q: "What's in the baseline test?",
        detail:
          "A full-body panel across muscle and lean mass, metabolic health, your cardiovascular engine and biological age — your starting point before the protocol begins.",
      },
      {
        q: "Where do I get tested?",
        detail:
          "Start with a quick lab draw, then sync Whoop, Garmin, Oura or Apple Health so the app keeps your readiness score current between tests.",
      },
    ],
  },
  {
    title: "All your health data",
    gradient: "linear-gradient(135deg, #102A1C 0%, #1F4D36 55%, #2F7350 120%)",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/All_your_health_data.png?v=1782111232",
    questions: [
      {
        q: "What biomarkers do you track?",
        detail:
          "100+ across muscle and lean mass, metabolic health, your cardiovascular engine, inflammation and biological age — pulled together with your wearable data into a single score.",
      },
      {
        q: "How does the readiness score work?",
        detail:
          "The app folds your biomarkers and wearable data — HRV, VO₂, sleep and recovery — into one cellular-readiness score that updates as new data comes in.",
      },
      {
        q: "Which wearables sync?",
        detail:
          "Whoop, Garmin, Oura and Apple Health sync automatically, so your score stays current between lab tests.",
      },
    ],
  },
  {
    title: "Your M3 protocol",
    gradient: "linear-gradient(135deg, #15203A 0%, #1E2A44 55%, #3A4F7A 120%)",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Your_M3_protocol.png?v=1782111235",
    questions: [
      {
        q: "What does the protocol tell me?",
        detail:
          "Evidence-backed daily actions — when to take M3, how to train and when to recover — tuned to your data, not a generic plan.",
      },
      {
        q: "Does it adapt over time?",
        detail:
          "Yes. As your biomarkers and recovery trends shift, the protocol updates so the guidance always matches where you are.",
      },
      {
        q: "Is M3 stimulant-free?",
        detail:
          "Yes — food-derived actives, no stimulants, no crash, and banned-substance free.",
      },
    ],
  },
  {
    title: "24/7 care team",
    gradient: "linear-gradient(135deg, #0A1F24 0%, #143A40 55%, #246B6B 120%)",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/24_7_care_team.png?v=1782111231",
    questions: [
      {
        q: "Who's on my care team?",
        detail:
          "AI guidance plus human clinicians — the MuscleCare Concierge — that you can reach between cycles.",
      },
      {
        q: "What can the concierge help with?",
        detail:
          "Interpreting your results, adjusting your protocol, and flagging anything worth a closer look.",
      },
      {
        q: "Is this medical advice?",
        detail:
          "No. M3's app and concierge are for information and optimisation, not diagnosis; these statements haven't been evaluated by the FDA or FSSAI.",
      },
    ],
  },
];

function DetailModal({
  question,
  onClose,
}: {
  question: { q: string; detail: string };
  onClose: () => void;
}) {
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    lastFocused.current = document.activeElement as HTMLElement;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={question.q}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: reduce ? 1 : 0.96, opacity: 0, y: reduce ? 0 : 8 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: reduce ? 1 : 0.96, opacity: 0 }}
        transition={{ duration: reduce ? 0 : 0.2 }}
        className="relative w-full max-w-lg rounded-3xl bg-white p-7 md:p-9"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-[#1a1a1a] transition-colors hover:bg-black/10"
        >
          <XMarkIcon className="h-4 w-4" />
        </button>
        <h3 className="pr-8 text-[22px] font-semibold leading-tight text-[#1a1a1a] md:text-[26px]">
          {question.q}
        </h3>
        <p className="mt-4 text-[15px] leading-relaxed text-[#1a1a1a]/65">
          {question.detail}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function UltraEnduranceBiomarkers() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState<{ q: string; detail: string } | null>(null);

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
            <Image
              src={step.image}
              alt=""
              fill
              sizes="100vw"
              priority={i === 0}
              className="object-cover"
            />
            {/* Legibility scrim — darker on the left (heading/pills) and
                bottom (pills), moderate elsewhere (nav). */}
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />
          </div>
        ))}

        {/* Overlays */}
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-between px-4 py-20 md:px-8 lg:block lg:py-0">
          {/* Heading + subtext */}
          <div className="lg:absolute lg:left-8 lg:top-[16%] lg:max-w-md">
            <h2 className="text-balance text-[34px] font-semibold leading-[1.05] tracking-tight md:text-[52px]">
              Every membership starts with{" "}
              <span style={{ color: LIME }}>100+ biomarkers</span>
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/75 md:text-[17px]">
              Start with a full-body baseline. The M3 app turns 100+ biomarkers
              and your wearables into a single cellular-readiness score — and a
              protocol that adapts.
            </p>
          </div>

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
                  onClick={() => setOpen(question)}
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
        {open && <DetailModal question={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  );
}
