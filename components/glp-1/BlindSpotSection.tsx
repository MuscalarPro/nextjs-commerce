"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function BlindSpotSection() {
  return (
    <section className="relative overflow-hidden py-24 text-white mt-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/a1394ebcbdf0e265fb922c8a933828b20987b9f9.png?v=1777280803"
          alt="Blind Spot Background"
          fill
          className="object-cover rounded-4xl"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
        <h2 className="mb-12 text-[42px] font-normal leading-[1.1] md:text-[64px] tracking-tight">
          Your GLP-1 <br /> breakthrough has a{" "}
          <span className="text-[#d2f392]">blind spot</span>
        </h2>

        {/* Floating 3D Pill */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mx-auto mb-16 h-[400px] w-[400px] md:h-[600px] md:w-[600px]"
        >
          <Image
            src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Left_image_493fb53b-901c-4c7a-b03c-b4063f608471.avif?v=1777376436"
            alt="3D Floating Pill"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Subtext */}
        <div className="mx-auto mb-12 max-w-[27rem] text-[18px] md:text-[22px] leading-[1.1]">
          <p>
            <span className="text-[#d2f392] font-medium">
              You're losing weight
            </span>
            , but 25% is muscle. <br />
            M3 is the only stack designed to close that gap.
          </p>
        </div>

        {/* Main CTA */}
        <Link
          href="#science"
          className="mb-24 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[16px] font-bold text-black transition-all hover:bg-neutral-100 active:scale-95 shadow-xl"
        >
          See the science <span>→</span>
        </Link>
      </div>

      {/* Cards Carousel Full Bleed */}
      <div className="relative z-10 mb-24 w-full">
        <div
          className="flex gap-4 md:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{
            paddingLeft: "max(1rem, calc((100vw - 1152px) / 2 + 1rem))",
            paddingRight: "max(1rem, calc((100vw - 1152px) / 2 + 1rem))",
            scrollPaddingLeft: "max(1rem, calc((100vw - 1152px) / 2 + 1rem))",
          }}
        >
          {/* Card 1 */}
          <div className="flex w-[85vw] md:w-[320px] lg:w-[340px] shrink-0 snap-start flex-col rounded-[24px] bg-white/5 p-6 text-left backdrop-blur-md border border-white/10">
            <div className="mb-6 flex gap-2">
              <span className="rounded-full bg-[#d2f392] px-3 py-1 text-[10px] font-bold text-black uppercase">
                CORE STACK
              </span>
              <span className="rounded-full bg-[#ff6b6b] px-3 py-1 text-[10px] font-bold text-white uppercase">
                20% OFF
              </span>
            </div>
            <h4 className="mb-1 text-[20px] font-medium">[M3] Daily Stack</h4>
            <p className="mb-8 text-[12px] text-white/50">
              Urolithin A · Spermidine · SAC
            </p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-[18px] font-medium">
                ₹4,799
                <span className="ml-2 text-[14px] text-white/50 line-through">
                  ₹5,999
                </span>
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[14px]">
                →
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex w-[85vw] md:w-[320px] lg:w-[340px] shrink-0 snap-start flex-col rounded-[24px] bg-white/5 p-6 text-left backdrop-blur-md border border-white/10">
            <div className="mb-6">
              <span className="rounded-full bg-[#d2f392] px-3 py-1 text-[10px] font-bold text-black uppercase">
                INCLUDED
              </span>
            </div>
            <h4 className="mb-1 text-[20px] font-medium">
              MuscleCare Concierge
            </h4>
            <p className="mb-8 text-[12px] text-white/50">
              AI + Human Clinician
            </p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-[16px] font-medium">
                Included{" "}
                <span className="text-[14px] text-white/50 font-normal">
                  with M3
                </span>
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[14px]">
                →
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex w-[85vw] md:w-[320px] lg:w-[340px] shrink-0 snap-start flex-col rounded-[24px] bg-white/5 p-6 text-left backdrop-blur-md border border-white/10">
            <div className="mb-6">
              <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold text-white/80 uppercase">
                IN-APP
              </span>
            </div>
            <h4 className="mb-1 text-[20px] font-medium">Biomarker Tracking</h4>
            <p className="mb-8 text-[12px] text-white/50">HRV · VO2max · LBM</p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-[16px] font-medium">
                Free{" "}
                <span className="text-[14px] text-white/50 font-normal">
                  with app
                </span>
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[14px]">
                →
              </span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex w-[85vw] md:w-[320px] lg:w-[340px] shrink-0 snap-start flex-col rounded-[24px] bg-white/5 p-6 text-left backdrop-blur-md border border-white/10">
            <div className="mb-6">
              <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold text-white/80 uppercase">
                IN-APP
              </span>
            </div>
            <h4 className="mb-1 text-[20px] font-medium">Protocol Builder</h4>
            <p className="mb-8 text-[12px] text-white/50">
              Personalized AI Training
            </p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-[16px] font-medium">
                Free{" "}
                <span className="text-[14px] text-white/50 font-normal">
                  with app
                </span>
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[14px]">
                →
              </span>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex w-[85vw] md:w-[320px] lg:w-[340px] shrink-0 snap-start flex-col rounded-[24px] bg-white/5 p-6 text-left backdrop-blur-md border border-white/10">
            <div className="mb-6">
              <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold text-white/80 uppercase">
                ADD-ON
              </span>
            </div>
            <h4 className="mb-1 text-[20px] font-medium">
              Longevity Labs Test
            </h4>
            <p className="mb-8 text-[12px] text-white/50">
              130+ Biomarkers · Blood Panel
            </p>
            <div className="mt-auto flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[12px] text-white/50 line-through mb-1">
                  ₹11,249
                </span>
                <span className="text-[20px] font-bold">
                  ₹8,999{" "}
                  <span className="text-[12px] font-normal text-white/50">
                    one-time
                  </span>
                </span>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[14px]">
                →
              </span>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex w-[85vw] md:w-[320px] lg:w-[340px] shrink-0 snap-start flex-col rounded-[24px] bg-white/5 p-6 text-left backdrop-blur-md border border-white/10">
            <div className="mb-6">
              <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold text-white/80 uppercase">
                NEW
              </span>
            </div>
            <h4 className="mb-1 text-[20px] font-medium">
              Biological Age Report
            </h4>
            <p className="mb-8 text-[12px] text-white/50">
              Muscular · Metabolic · Hormonal
            </p>
            <div className="mt-auto flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[20px] font-bold">
                  ₹3,499{" "}
                  <span className="text-[12px] font-normal text-white/50">
                    one-time
                  </span>
                </span>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[14px]">
                →
              </span>
            </div>
          </div>

          {/* Spacer to allow scrolling past the last item without clipping right edge */}
          <div className="w-1 shrink-0" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
        {/* Bottom Longevity Card — hidden for now per client request.
            To restore: remove the `{false && (` and matching `)}` below. */}
        {false && (
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[32px] bg-white/5 p-8 text-left backdrop-blur-md border border-white/10 md:p-16">
            {/* Decorative faint circle in top right */}
            <div className="absolute right-0 top-0 h-80 w-80 -translate-y-1/4 translate-x-1/4 rounded-full bg-white/5 blur-3xl" />

            <div className="relative z-10 max-w-lg">
              <h3 className="mb-6 text-[36px] font-normal leading-tight md:text-[48px]">
                Muscle is your <br />{" "}
                <span className="text-[#d2f392]">longevity organ</span>
              </h3>
              <p className="mb-10 text-[16px] leading-relaxed text-white/70">
                GLP-1 alone strips lean mass. M3 restores the mitochondrial
                signalling that keeps your muscles alive, strong, and
                metabolically active long after the weight is gone.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/product/decode-peak-performance-m3"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-[14px] font-semibold text-black transition-all hover:bg-neutral-100"
                >
                  Start my M3 protocol →
                </Link>
                <Link
                  href="#science"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-[14px] font-medium text-white transition-all hover:bg-white/5"
                >
                  See the science
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Two large feature cards: The essential COMPANION + Protect your
            lean muscle. Side-by-side on md+, stacked on mobile. */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-4 md:grid-cols-2 md:gap-5">
          {/* The essential COMPANION */}
          <article className="relative flex min-h-[380px] flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-8">
            {/* Header — title left ("COMPANION" in lime), green pill right */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[15px] text-white md:text-[17px]">
                  The essential
                </p>
                <h3 className="mt-0.5 font-sans text-[26px] font-bold uppercase tracking-wide text-[#d2f392] md:text-[32px]">
                  COMPANION
                </h3>
              </div>
              <Link
                href="#science"
                className="shrink-0 rounded-full bg-[#d2f392] px-4 py-2 text-[12px] font-semibold text-black transition-opacity hover:opacity-90"
              >
                See the science
              </Link>
            </div>

            {/* Two annotations — labels left-aligned, no sticks. */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4 md:mt-10">
              <div className="text-left">
                <p className="text-[13px] font-semibold text-white">
                  Mitophagy trigger
                </p>
                <p className="mt-1 max-w-[220px] text-[11px] leading-relaxed text-white/65 md:text-[12px]">
                  Urolithin A activates mitophagy — clearing damaged
                  mitochondria in muscle cells
                </p>
              </div>

              <div className="text-left">
                <p className="text-[13px] font-semibold text-white">
                  Lean muscle shield
                </p>
                <p className="mt-1 max-w-[220px] text-[11px] leading-relaxed text-white/65 md:text-[12px]">
                  Preserves lean muscle mass during GLP-1 caloric deficit —
                  independently of training
                </p>
              </div>
            </div>

            {/* Splash — larger, bottom edge touches the card bottom via
                negative margins that cancel the card's bottom + horizontal
                padding. */}
            <div className="-mx-6 -mb-6 mt-auto md:-mx-8 md:-mb-8">
              <div className="relative aspect-[5/4] w-full">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/mitophagy_trigger_splash_-_essential_companion.png?v=1781001071"
                  alt=""
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </article>

          {/* Protect your lean muscle */}
          <article className="relative flex min-h-[380px] flex-col items-center overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md md:p-8">
            {/* See the science — outlined pill at top */}
            <Link
              href="#science"
              className="rounded-full border border-[#d2f392] px-4 py-1.5 text-[12px] font-semibold text-[#d2f392] transition-colors hover:bg-[#d2f392]/10"
            >
              See the science
            </Link>

            {/* Title — "lean muscle" highlighted lime */}
            <h3 className="mt-5 font-sans text-[26px] font-semibold leading-tight text-white md:mt-6 md:text-[32px]">
              Protect your
              <br />
              <span className="text-[#d2f392]">lean muscle</span>
            </h3>

            {/* Product + haze. Glow sits behind, product on top. Sized up
                so it visually fills more of the card. */}
            <div className="relative my-6 aspect-square w-full max-w-[420px]">
              <Image
                src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/zepbound_haze_-_protect_your_lean_muscle.png?v=1781001070"
                alt=""
                fill
                className="object-contain"
                sizes="(max-width: 768px) 85vw, 420px"
              />
              <Image
                src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/zepbound_-_protect_your_lean_muscle.png?v=1781001070"
                alt="Zepbound auto-injector"
                fill
                className="relative z-10 object-contain"
                sizes="(max-width: 768px) 85vw, 420px"
              />
            </div>

            {/* Start M3 protocol — filled lime pill at bottom */}
            <Link
              href="/product/decode-peak-performance-m3"
              className="mt-auto rounded-full bg-[#d2f392] px-6 py-3 text-[13px] font-semibold text-black transition-opacity hover:opacity-90"
            >
              Start M3 protocol
            </Link>
          </article>
        </div>

        {/* Bottom Stats Line */}
        <div className="mx-auto mt-16 flex max-w-4xl flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-[12px] font-normal text-white/50 md:flex-row">
          <span className="flex-1 text-left">
            <strong className="font-semibold text-white">~25%</strong> lose
            strength on GLP-1 within 6 months
          </span>
          <span className="flex-1 text-center">
            <strong className="font-semibold text-white">~17%</strong> elevated
            sarcopenia risk post-GLP-1
          </span>
          <span className="flex-1 text-right">
            <strong className="font-semibold text-white">Up to 40%</strong> of
            weight loss may be lean mass
          </span>
        </div>
      </div>
    </section>
  );
}
