import Image from "next/image";
import Link from "next/link";

export function BestsellerSection() {
  return (
    <section className="w-full bg-[#1a0f1e] py-8 md:py-4">
      <div className="mx-auto max-w-[1440px] px-4 md:px-2">
        <div className="grid gap-4 lg:grid-cols-[3fr_1fr]">
          {/* LEFT: Main feature card */}
          <div className="relative overflow-hidden rounded-4xl bg-[#3d2a4a] p-6">
            <div className="absolute left-6 top-6">
              <span className="inline-flex items-center rounded-full bg-[#a638b5] px-4 py-1 text-xs font-semibold text-white">
                Bestseller
              </span>
            </div>

            <div className="grid gap-8 md:grid-cols-[1.05fr_1.35fr] md:items-center md:gap-10">
              {/* Product image - centered on mobile */}
              <div className="flex items-center justify-center order-first">
                <div className="relative h-[220px] w-[220px] md:h-[380px] md:w-[380px]">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/DS-01_Transparent_ProductRender_Video1_12223634333271582.png?v=1768285032"
                    alt="Product"
                    fill
                    className="rounded-3xl object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="text-white flex flex-col">
                {/* Product header: DS-01, title, #1 */}
                <div className="flex flex-col items-start gap-2 md:gap-3">
                  <span className="inline-flex items-center rounded-full border border-white/60 bg-white/5 px-4 py-1 text-xs tracking-wide">
                    DS–01
                    <span className="ml-0.5 align-super text-[10px]">®</span>
                  </span>
                  {/* Mobile: title + price on one line */}
                  <div className="flex md:hidden w-full items-center justify-between gap-2">
                    <h2 className="text-[1.25rem] leading-tight shrink-0">
                      Daily Synbiotic
                    </h2>
                    <div className="text-xl font-semibold shrink-0">
                      <span>₹2,700.00</span>{" "}
                      <span className="text-white/60 line-through text-base">₹3,000</span>
                    </div>
                  </div>
                  {/* Desktop: title only */}
                  <h2 className="hidden md:block text-[2.25rem] leading-tight">
                    Daily Synbiotic
                  </h2>
                  <div className="flex items-center py-4">
                    <span className="md:text-4xl text-2xl font-semibold leading-none">
                      #1
                    </span>
                    <span className="md:text-[1rem] text-sm font-semibold leading-tight text-white/90 ml-2">
                      Digestive Health <br /> Probiotic*
                    </span>
                  </div>
                </div>

                <p className="max-w-xl text-base leading-relaxed text-white/90">
                  Eases bloating, improves regularity, and supports digestive
                  health with 24 targeted probiotic strains + a novel
                  prebiotic.*
                </p>

                {/* Desktop only: price below description */}
                <div className="mt-5 hidden md:block text-3xl font-semibold">
                  <span>₹2,700.00</span>{" "}
                  <span className="text-white/60 line-through text-xl">₹3,000</span>{" "}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button className="rounded-full bg-[#693979] px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#7b2a8a]">
                    Learn More
                  </button>

                  <button className="text-sm font-semibold text-[#D3B7E7] underline underline-offset-4 transition hover:text-white">
                    Add To Cart
                  </button>
                </div>

                <p className="mt-5 text-[0.5rem] leading-relaxed text-white/55">
                  *Source: SPINS, Combined Amazon + Target Sales data. Last 12
                  weeks ending in November 2025.
                </p>

                {/* Mobile: Quiz CTA – brand colors, text left, rounded image right */}
                <div className="mt-6 md:hidden flex items-center gap-4 rounded-3xl bg-[#2d1b3d]/80 backdrop-blur-md p-4 border border-[#693979]/40">
                  <div className="min-w-0 flex-1">
                    <p className="text-white text-sm font-medium mb-1.5 leading-snug">
                      Is DS-01<sup className="text-xs">®</sup> the right
                      probiotic for you?
                    </p>
                    <Link
                      href="/quiz"
                      className="text-white underline underline-offset-2 font-medium hover:opacity-80 transition-opacity text-sm"
                    >
                      Take the Quiz
                    </Link>
                  </div>
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/1772635ea6ffdfde99cfe2a35498de31e0480971.webp?v=1768590476"
                      alt="Hand holding probiotic capsules"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Quiz CTA card (desktop only) */}
          <div className="hidden md:block relative overflow-hidden rounded-[32px] h-full min-h-[400px] md:min-h-[400px]">
            <div className="absolute inset-0">
              <Image
                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/1772635ea6ffdfde99cfe2a35498de31e0480971.webp?v=1768590476"
                alt="Background"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-full flex items-center justify-center p-6 md:p-8">
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-20">
                <div className="rounded-2xl bg-[#2d1b3d]/80 backdrop-blur-md p-4 md:p-5 border border-[#693979]/40">
                  <p className="text-white text-sm md:text-base mb-2 font-medium">
                    Is DS-01<sup className="text-xs">®</sup> the right
                    probiotic for you?
                  </p>
                  <Link
                    href="/quiz"
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
