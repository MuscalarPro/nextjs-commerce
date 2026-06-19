"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const GREEN = "#2F7350";
const GREEN_SOFT = "#6FA98A";
const LIME = "#d2f392";
const SECTION_BG = "#EEEDE3";
const CARD_BG = "#F7F6EF";
const DARK_CARD = "#14301F";

const STUDY_LINK = "#science";

// Deterministic heatmap opacities (no Math.random so SSR stays stable).
const HEAT = Array.from(
  { length: 54 },
  (_, i) => 0.32 + ((i * 37) % 7) / 9,
);

// 9 scattered "filled" cells out of 27 → reads as ~1 in 3.
const FILLED = new Set([0, 4, 8, 9, 13, 17, 19, 23, 24]);

function StudyLink({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href={STUDY_LINK}
      className={`mt-6 inline-flex text-[11px] font-semibold uppercase tracking-[0.14em] underline underline-offset-4 transition-opacity hover:opacity-70 ${
        dark ? "text-white/80" : "text-[#1a1a1a]/70"
      }`}
    >
      See study details
    </Link>
  );
}

export function UltraEnduranceBento() {
  const reduce = useReducedMotion();

  // Card entrance.
  const reveal = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.5, ease: "easeOut" },
      };

  // Animated bar fill.
  const bar = (w: string) =>
    reduce
      ? { style: { width: w } }
      : {
          initial: { width: 0 },
          whileInView: { width: w },
          viewport: { once: true, amount: 0.4 },
          transition: { duration: 0.9, ease: "easeOut" },
        };

  const cardBase = "rounded-3xl p-6 md:p-8";

  const Heading = ({
    children,
    dark = false,
  }: {
    children: React.ReactNode;
    dark?: boolean;
  }) => (
    <h3
      className={`text-[20px] font-semibold md:text-[22px] ${
        dark ? "text-white" : "text-[#1a1a1a]"
      }`}
    >
      {children}
    </h3>
  );

  const Caption = ({
    children,
    dark = false,
  }: {
    children: React.ReactNode;
    dark?: boolean;
  }) => (
    <p
      className={`mt-5 text-[15px] leading-snug ${
        dark ? "text-white/70" : "text-[#1a1a1a]/60"
      }`}    >
      {children}
    </p>
  );

  const Label = ({ children }: { children: React.ReactNode }) => (
    <p
      className="text-[11px] font-semibold uppercase tracking-[0.14em]"
      style={{ color: GREEN }}
    >
      {children}
    </p>
  );

  return (
    <section className="w-full" style={{ background: SECTION_BG }}>
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-16">
          {/* LEFT — sticky on desktop */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#1a1a1a]/55">
              Decode Peak Performance
            </p>
            <h2 className="mt-5 text-[40px] font-semibold leading-[1.05] tracking-tight text-[#1a1a1a] md:text-[52px]">
              Built to revitalize the mitochondria behind peak performance.
            </h2>
            <Link
              href="#how-it-works"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#1a1a1a]/25 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a]/5"
            >
              How M3 works <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* RIGHT — scrolling bento */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
            {/* Cellular Energy — wide heatmap */}
            <motion.article
              {...reveal}
              className={`${cardBase} sm:col-span-2`}
              style={{ background: CARD_BG }}
            >
              <Heading>Cellular Energy</Heading>
              <div
                className="mt-6 grid gap-1.5"
                style={{ gridTemplateColumns: "repeat(18, minmax(0, 1fr))" }}
              >
                {HEAT.map((opacity, i) => (
                  <motion.span
                    key={i}
                    initial={reduce ? false : { opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.3, delay: reduce ? 0 : i * 0.006 }}
                    className="aspect-square rounded-[3px]"
                    style={{ background: GREEN, opacity }}
                  />
                ))}
              </div>
              <Caption>
                Induces a signature of improved mitochondrial health.
                <sup>*</sup>
              </Caption>
              <StudyLink />
            </motion.article>

            {/* Peak Endurance — dark card, line chart */}
            <motion.article
              {...reveal}
              className={`${cardBase} flex flex-col`}
              style={{ background: DARK_CARD }}
            >
              <Heading dark>Peak Endurance</Heading>
              <div className="mt-6 flex-1">
                <svg viewBox="0 0 300 130" className="w-full" fill="none">
                  <motion.path
                    d="M10 118 C80 116 120 70 165 52 C215 32 255 28 292 26"
                    stroke={LIME}
                    strokeWidth={3}
                    strokeLinecap="round"
                    initial={reduce ? false : { pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M10 122 C80 120 140 108 200 100 C240 95 270 93 292 92"
                    stroke="white"
                    strokeOpacity={0.4}
                    strokeWidth={2}
                    strokeDasharray="5 6"
                    strokeLinecap="round"
                    initial={reduce ? false : { pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.1 }}
                  />
                </svg>
              </div>
              <Caption dark>
                Adds 30 m to the six-minute walk at full dose.<sup>*</sup>
              </Caption>
              <StudyLink dark />
            </motion.article>

            {/* Muscle Strength — big stat */}
            <motion.article
              {...reveal}
              className={cardBase}
              style={{ background: CARD_BG }}
            >
              <Heading>Muscle Strength</Heading>
              <p className="mt-8 font-sans text-[64px] font-bold leading-none tracking-tight text-[#1a1a1a] md:text-[72px]">
                +12<span className="text-[32px] align-top">%</span>
              </p>
              <Caption>
                More leg strength in 16 weeks — with no change in body weight.
                <sup>*</sup>
              </Caption>
              <StudyLink />
            </motion.article>

            {/* Muscular Endurance — compare bars */}
            <motion.article
              {...reveal}
              className={cardBase}
              style={{ background: CARD_BG }}
            >
              <Heading>Muscular Endurance</Heading>
              <div className="mt-6 space-y-4">
                <div>
                  <motion.div
                    {...bar("100%")}
                    className="h-2.5 rounded-full"
                    style={{ background: GREEN }}
                  />
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1a1a1a]/50">
                    M3 actives
                  </p>
                </div>
                <div>
                  <motion.div
                    {...bar("26%")}
                    className="h-2.5 rounded-full bg-[#1a1a1a]/15"
                  />
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1a1a1a]/40">
                    Placebo
                  </p>
                </div>
              </div>
              <Caption>
                More muscle contractions before fatigue.<sup>*</sup>
              </Caption>
              <StudyLink />
            </motion.article>

            {/* Brain Health — text only */}
            <motion.article
              {...reveal}
              className={`${cardBase} flex flex-col`}
              style={{ background: "#FAFAF4" }}
            >
              <Heading>Brain Health</Heading>
              <Caption>
                The cell&apos;s renewal pathways, mapped in neural tissue.
                <sup>*</sup>
              </Caption>
              <StudyLink />
            </motion.article>

            {/* Recovery & Cellular Health — wide compare bars */}
            <motion.article
              {...reveal}
              className={`${cardBase} sm:col-span-2`}
              style={{ background: CARD_BG }}
            >
              <Heading>Recovery &amp; Cellular Health</Heading>
              <div className="mt-6 max-w-xl space-y-4">
                <div>
                  <motion.div
                    {...bar("100%")}
                    className="h-2.5 rounded-full"
                    style={{ background: GREEN }}
                  />
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1a1a1a]/50">
                    M3 — lower CRP
                  </p>
                </div>
                <div>
                  <motion.div
                    {...bar("88%")}
                    className="h-2.5 rounded-full bg-[#1a1a1a]/15"
                  />
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1a1a1a]/40">
                    Placebo — higher CRP
                  </p>
                </div>
              </div>
              <Caption>
                Lower inflammation and less muscle breakdown, measured in
                trained athletes.<sup>*</sup>
              </Caption>
              <StudyLink />
            </motion.article>

            {/* Bioavailability — 1 in 3 + dot grid + did-you-know */}
            <motion.article
              {...reveal}
              className={`${cardBase} sm:col-span-2`}
              style={{ background: CARD_BG }}
            >
              <div className="grid gap-8 md:grid-cols-[1.3fr_1fr]">
                <div>
                  <Heading>Bioavailability</Heading>
                  <p className="mt-6 font-sans text-[56px] font-bold leading-none tracking-tight text-[#1a1a1a]">
                    1<span className="text-[24px]"> in </span>3
                  </p>
                  <Caption>
                    Only 1 in 3 people make enough Urolithin A from diet alone.
                    <sup>**</sup>
                  </Caption>
                  <div className="mt-6 grid max-w-[300px] grid-cols-9 gap-2.5">
                    {Array.from({ length: 27 }).map((_, i) => (
                      <motion.span
                        key={i}
                        initial={reduce ? false : { scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                          duration: 0.3,
                          delay: reduce ? 0 : i * 0.015,
                        }}
                        className="aspect-square rounded-full"
                        style={{
                          background: FILLED.has(i)
                            ? GREEN
                            : "rgba(26,26,26,0.14)",
                        }}
                      />
                    ))}
                  </div>
                  <StudyLink />
                </div>
                {/* Did you know sub-card */}
                <div className="rounded-2xl bg-[#1a1a1a]/[0.04] p-5 md:p-6">
                  <p
                    className="text-[11px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: GREEN }}
                  >
                    Did you know?
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#1a1a1a]/65">
                    Urolithin A isn&apos;t in food directly — your gut bacteria
                    convert pomegranate &amp; berry ellagitannins into it, and
                    most people can&apos;t, at a useful level. M3 supplies a
                    standardized pomegranate extract to close the gap.
                  </p>
                </div>
              </div>
            </motion.article>

            {/* In every serving — 3-column dose breakdown */}
            <motion.article
              {...reveal}
              className={`${cardBase} sm:col-span-2`}
              style={{ background: CARD_BG }}
            >
              <Heading>In every serving</Heading>
              {/* Subgrid so the label / dose / description rows line up
                  across all three columns — even when a label (S-allyl
                  cysteine) wraps to two lines, every dose stays aligned and
                  the dividers are equal height. */}
              <div className="mt-6 grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:grid-rows-[auto_auto_auto] sm:gap-x-10 sm:gap-y-3">
                {[
                  {
                    label: "Urolithin A",
                    dose: "500",
                    unit: "mg",
                    src: "Pomegranate extract, standardized to Urolithin A",
                  },
                  {
                    label: "Spermidine",
                    dose: "3",
                    unit: "mg",
                    src: "Wheat germ extract, standardized to spermidine",
                  },
                  {
                    label: "S-allyl cysteine",
                    dose: "0.5",
                    unit: "mg",
                    src: "Garlic extract, standardized to S-allyl cysteine",
                  },
                ].map((ing, i) => (
                  <div
                    key={ing.label}
                    className={`grid gap-y-3 sm:row-span-3 sm:grid-rows-subgrid ${
                      i > 0 ? "sm:border-l sm:border-[#1a1a1a]/10 sm:pl-10" : ""
                    }`}
                  >
                    <Label>{ing.label}</Label>
                    <p className="font-sans text-[40px] font-bold leading-none tracking-tight text-[#1a1a1a]">
                      {ing.dose}
                      <span className="text-[18px]">{ing.unit}</span>
                    </p>
                    <p className="text-[13px] leading-relaxed text-[#1a1a1a]/60">
                      {ing.src}
                    </p>
                  </div>
                ))}
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
