"use client";

import { CheckIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ATEEB_PHOTO =
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/ateeb-shaikh-glp-1-hero-section_splash_image.png?v=1780860343";

const ARROW =
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/journey_arrow_hero_section.svg?v=1781204596";

const MEMBER_AVATARS = [
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Frame_2147237095.png?v=1780860343",
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Frame_2147237093.png?v=1780860341",
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Frame_2147237094.png?v=1780860343",
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Frame_2147237096.png?v=1780860343",
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Frame_2147237097.png?v=1780860343",
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Frame_2147237098.png?v=1780860342",
];

const TRUST_BULLETS = [
  "1 capsule, 2× daily",
  "Clinical Urolithin A",
  "< ₹X / day",
];

const fade = { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } };

export function MusclespanHero() {
  return (
    <section
      className="relative flex w-full flex-col overflow-hidden pt-24 md:pt-28"
      style={{
        // svh excludes mobile browser chrome so the hero actually fits the
        // visible viewport on phones. Falls back to vh on desktop.
        minHeight: "100svh",
        background:
          "linear-gradient(180deg, #C2D0D8 0%, #99ABB6 40%, #6D8693 70%, #4F6B79 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 md:px-8">
        {/* Grid stretches columns to full row height (default items-stretch).
            That lets the right photo column reach top-to-bottom so Ateeb
            renders at full section height instead of collapsing. */}
        <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-[1fr_1.05fr] md:gap-6">
          {/* LEFT — copy block: bottom-anchored on desktop via mt-auto on
              the last item, but headline still sits near the top thanks to
              the inner flex spacing. */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fade}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 py-6 text-white md:gap-7 md:py-10"
          >
            <h1 className="font-sans text-[26px] font-semibold leading-[1.15] md:text-[40px]">
              Dr. Ateeb is
              <br />
              healthier on M3
            </h1>

            <div>
              <div className="flex items-center gap-2 md:gap-3">
                <Image
                  src={ARROW}
                  alt=""
                  width={64}
                  height={80}
                  className="h-10 w-auto md:h-20 lg:h-[88px]"
                  priority
                />
                <span className="font-sans text-[64px] font-semibold leading-none tracking-tight text-white md:text-[96px] lg:text-[120px]">
                  28 kgs
                </span>
              </div>
              <p className="mt-4 max-w-md text-[17px] leading-snug text-white md:mt-6 md:text-[22px]">
                in a year on a GLP-1 &mdash;{" "}
                <br className="hidden md:block" />
                with his muscle kept.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="https://ai.muscalarpro.com/"
                className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 md:px-7 md:py-3.5"
              >
                Start your muscle check
              </Link>
              <Link
                href="#story"
                className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 md:px-7 md:py-3.5"
              >
                See Dr. Ateeb&apos;s story
              </Link>
            </div>

            {/* Trust bullets */}
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-white/90">
              {TRUST_BULLETS.map((b) => (
                <li key={b} className="flex items-center gap-1.5">
                  <CheckIcon
                    className="h-3.5 w-3.5 text-[#d2f392]"
                    strokeWidth={3}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Social proof — pushed to the bottom of the column on desktop */}
            <div className="flex items-center gap-3 pb-2 md:mt-auto">
              <div className="flex -space-x-2.5">
                {MEMBER_AVATARS.slice(0, 5).map((src, i) => (
                  <div
                    key={src}
                    className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-white"
                    style={{ zIndex: 10 - i }}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="36px"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[13px] font-medium text-white/95">
                3,000+ staying strong on the M3 protocol
              </p>
            </div>
          </motion.div>

          {/* RIGHT — Ateeb photo + glass card */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fade}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative min-h-[420px] md:min-h-0 md:h-full"
          >
            {/* Photo fills the full column, anchored to bottom. On desktop we
                let the image extend a touch left of the column so the figure
                reads at a similar scale to the mockup without changing the
                grid math for the left column. */}
            <div className="absolute inset-y-0 right-0 left-0 md:-left-12 lg:-left-20">
              <Image
                src={ATEEB_PHOTO}
                alt="Dr. Ateeb"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-contain object-bottom"
              />
            </div>

            {/* Floating glass card.
                Mobile: anchored to bottom-of-photo so it sits below the face
                (overlaps the shoes/legs area at most).
                Desktop: floats top-right beside Ateeb as in the mockup. */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="absolute inset-x-4 bottom-4 z-20 rounded-2xl border border-white/25 bg-white/10 p-4 text-white shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-md md:inset-x-auto md:bottom-auto md:right-0 md:top-[14%] md:max-w-[280px] md:p-6"
            >
              <p className="text-base font-semibold leading-snug md:text-lg">
                Dr. Ateeb&apos;s journey
              </p>
              <p className="mt-2 text-[13px] leading-snug text-white/90 md:text-sm">
                98→70 kg on a GLP-1 &mdash; and benching 100 kg. He kept his
                muscle. Here&apos;s how.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
