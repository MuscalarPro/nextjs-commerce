import Image from "next/image";
import Link from "next/link";

const PRODUCT_IMAGE =
  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/DS-01_Transparent_ProductRender_Video1_12223634333271582.png?v=1768285032";
const QUIZ_BG_IMAGE =
  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/1772635ea6ffdfde99cfe2a35498de31e0480971.webp?v=1768590476";

export function BestsellerSection() {
  return (
    <section className="w-full bg-[#183019] py-4 md:py-4">
      <div className="mx-auto max-w-[1440px] px-4 md:px-2">
        <div className="grid gap-4 lg:grid-cols-[3fr_1fr]">
          {/* LEFT: Main feature card */}
          <div className="relative overflow-hidden rounded-4xl bg-[#3f5636] p-6">
            <div className="absolute left-6 top-6">
              <span className="inline-flex items-center rounded-full bg-[#c9f07b] px-4 py-1 text-xs font-semibold text-[#173216]">
                Bestseller
              </span>
            </div>

            <div className="grid gap-8 md:grid-cols-[1.05fr_1.35fr] md:items-center md:gap-10">
              <div className="flex items-center justify-center">
                <div className="relative h-[220px] w-[220px] md:h-[380px] md:w-[380px]">
                  <Image
                    src={PRODUCT_IMAGE}
                    alt="Product"
                    fill
                    className="rounded-3xl object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="text-white">
                <div className="mb-2 flex items-center">
                  <span className="inline-flex items-center rounded-full border border-white/60 bg-white/5 px-4 py-1 text-xs tracking-wide">
                    DS–01
                    <span className="ml-0.5 align-super text-[10px]">®</span>
                  </span>
                </div>

                <h2 className="text-[1.25rem] leading-tight md:text-[2.25rem]">
                  Daily Synbiotic
                </h2>

                <div className="mt-2 flex items-center">
                  <span className="text-4xl font-semibold leading-none">#1</span>
                  <span className="text-[1rem] font-semibold leading-tight text-white/90 ml-2">
                    Digestive Health <br /> Probiotic*
                  </span>
                </div>

                <p className="mt-2 max-w-xl text-base leading-relaxed text-white/90">
                  Eases bloating, improves regularity, and supports digestive
                  health with 24 targeted probiotic strains + a novel prebiotic.*
                </p>

                <div className="mt-2 text-3xl font-semibold">$49.99</div>

                <div className="mt-2 flex flex-wrap items-center gap-4">
                  <button className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#1a3319] shadow-sm transition hover:bg-white/90">
                    Learn More
                  </button>

                  <button className="text-sm font-semibold text-white underline underline-offset-4 transition hover:text-white/90">
                    Add To Cart
                  </button>
                </div>

                <p className="mt-2 text-[0.5rem] leading-relaxed text-white/55">
                  *Source: SPINS, Combined Amazon + Target Sales data. Last 12
                  weeks ending in November 2025.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Quiz CTA card */}
          <div className="hidden md:block relative overflow-hidden rounded-[32px] h-full min-h-[400px] md:min-h-[400px]">
            <div className="absolute inset-0">
              <Image
                src={QUIZ_BG_IMAGE}
                alt="Natural green background"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-full flex items-center justify-center p-6 md:p-8">
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-20">
                <div className="rounded-2xl bg-[#2d4a2a]/80 backdrop-blur-md p-4 md:p-5 border border-green-800/30">
                  <p className="text-white text-sm md:text-base mb-2 font-medium">
                    Is DS-01<sup className="text-xs">®</sup> the right probiotic
                    for you?
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
