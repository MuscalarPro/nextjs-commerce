"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function BestsellerSection() {
  return (
    <section className="w-full bg-[#0000] py-8 md:py-4">
      <div className="mx-auto max-w-[1440px] px-4 md:px-2">
        <div className="grid gap-4 lg:grid-cols-[3fr_1fr]">
          {/* LEFT: Main feature card */}
          <div className="relative overflow-hidden rounded-2xl bg-[#3d2a4a] p-6">
            <div className="mb-4 flex items-start">
              <span className="inline-flex items-center rounded-full bg-[#a638b5] px-4 py-1 text-xs font-semibold text-white">
                Decipher Musclespan
              </span>
            </div>

            <div className="grid gap-8 md:grid-cols-[1.05fr_1.35fr] md:items-center md:gap-10">
              {/* Product image - centered on mobile */}
              <div className="flex items-center justify-center order-first ">
                <div className="relative h-[220px] w-[220px] md:h-[380px] md:w-[380px]">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Product.png?v=1770291580"
                    alt="Product"
                    fill
                    className="rounded-2xl object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="text-white flex flex-col">
                {/* Product header: DS-01, title, #1 */}
                <div className="flex flex-col items-start gap-2 md:gap-3">
                  {/* Mobile: title + price stacked */}
                  <div className="flex flex-col md:hidden w-full items-start gap-2">
                    <h2 className="text-[1.25rem] leading-tight">
                      Decode Peak Performance [M3]
                    </h2>

                    <div className="text-xl font-semibold">
                      <span>₹6,000.00</span>{" "}
                      <span className="text-white/60 line-through text-base">
                        ₹6,667
                      </span>
                    </div>
                  </div>
                  {/* Desktop: title only */}
                  <h2 className="hidden md:block text-[1.5rem] md:text-[2rem] leading-tight">
                    Decode Peak <br />
                    Performance [M3]
                  </h2>
                  <div className="flex items-center py-4">
                    <span className="md:text-4xl text-2xl font-semibold leading-none">
                      #1
                    </span>
                    <span className="md:text-[1rem] text-sm font-semibold leading-tight text-white/90 ml-2">
                      Muscle-span <br />
                      supplement
                    </span>
                  </div>
                </div>

                <p className="max-w-xl text-base leading-relaxed text-white/90">
                  Your cells aren't aging. They're under-muscled. [M3] delivers
                  clinically proven bio-molecules straight from human RCTs that
                  decode superhuman Muscle-span:Mitochondria - Urolithin A
                  triggers mitophagy. Spermidine fires autophagy. Cellular
                  powerplants renewed. Muscle: 41% peak endurance. 12% strength.
                  HRV + VO2max biomarkers optimized. Hypertrophy unlocked. Mind:
                  Nootropic-grade neuroprotection. Spatial memory. Deep focus.
                  Lifespan extended 25% (models).
                </p>

                {/* Desktop only: price below description */}
                <div className="mt-5 hidden md:block text-3xl font-semibold">
                  <span>₹5067.00</span>{" "}
                  <span className="text-white/60 text-xl">
                    p.m.
                  </span>{" "}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-block"
                  >
                    <Link
                      href="/science"
                      className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-all hover:bg-black hover:text-white"
                    >
                      Learn More
                    </Link>
                  </motion.div>

                  <button className="text-sm font-semibold text-[#D3B7E7] underline underline-offset-4 transition hover:text-white">
                    Add To Cart
                  </button>
                </div>

                <p className="mt-5 text-[0.5rem] leading-relaxed text-white/55">
                  Daily 2-capsule protocol. science-backed{" "}
                  <Link href="https://jama.com/">JAMA</Link>. Engineered for
                  cells that perform decades beyond.
                </p>

                {/* Mobile: Quiz CTA – brand colors, text left, rounded image right */}
                <div className="mt-6 md:hidden flex items-center gap-4 rounded-2xl bg-[#2d1b3d]/80 backdrop-blur-md p-4 border border-[#693979]/40">
                  <div className="min-w-0 flex-1">
                    <p className="text-white text-sm font-medium mb-1.5 leading-snug">
                      Is M3 the right supp for you?
                    </p>
                    <Link
                      href="https://v0-modern-ai-chatbot-interface-tem-rust.vercel.app/"
                      className="text-white underline underline-offset-2 font-medium hover:opacity-80 transition-opacity text-sm"
                    >
                      Take the Quiz
                    </Link>
                  </div>
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Mobile.jpg?v=1770894237"
                      alt="Athletes running"
                      fill
                      className="object-cover "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Quiz CTA card (desktop only) */}
          <div className="hidden md:block relative overflow-hidden rounded-2xl h-full min-h-[400px] md:min-h-[400px]">
            <div className="absolute inset-0">
              <Image
                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Desktop_79e8735c-b956-4ed8-bb07-6dac61c9b2f7.jpg?v=1770894241"
                alt="Background"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-full flex items-center justify-center p-6 md:p-8">
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-20">
                <div className="rounded-2xl bg-[#2d1b3d]/80 backdrop-blur-md p-4 md:p-5 border border-[#693979]/40">
                  <p className="text-white text-sm md:text-base mb-2 font-medium">
                    Is M3 the right supp for you?
                  </p>
                  <Link
                    href="https://v0-modern-ai-chatbot-interface-tem-rust.vercel.app/"
                    className="text-white underline underline-offset-2 font-medium hover:opacity-80 transition-opacity text-sm md:text-base"
                  >
                    Take the Quiz
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
