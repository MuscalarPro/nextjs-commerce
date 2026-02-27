import CTASection from "components/layout/cta-section";
import { LabsCtaSection } from "components/product/labs-cta-section";
import type { Metadata } from "next";
import Image from "next/image";
import {
  MitochondriaStickySection,
  ScienceHeroSection,
  ScientificAdvisorsSection,
  WeakMitochondriaSystemSection,
} from "../../components/science";

export const metadata: Metadata = {
  title: "Science",
  description: "Discover the science behind Mitopure and cellular health.",
};

export default async function SciencePage() {
  return (
    <>
      <ScienceHeroSection />

      <section className="w-full">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-12 md:py-24">
          <div className="relative w-full h-[60vh] md:h-[80vh] rounded-2xl overflow-hidden">
            <Image
              src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/viacapbg.jpg?v=1770198196"
              alt="Smiling woman with healthy skin"
              fill
              className="absolute inset-0 h-full w-full object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="w-full relative overflow-hidden flex flex-col md:min-h-[600px] md:flex-row md:items-center">
        <div className="relative w-full h-[600px] order-2 md:absolute md:inset-0 md:h-full md:z-0 md:order-none">
          <Image
            src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Jce5yrUyXMpP7QT3ntPhYnNq7AU.avif?v=1770232961"
            alt="Mitochondria background abstract"
            fill
            className="object-cover object-center"
            priority={false}
          />
        </div>

        <div className="relative z-10 w-full mx-auto max-w-[1440px] px-4 md:px-8 py-12 md:py-24 order-1 md:order-none">
          <div className="flex flex-col md:flex-row justify-end items-center">
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-[1.5rem] md:text-[2.5rem] leading-tight font-normal text-black mb-4">
                ~90% of our cellular energy is produced by mitochondria
              </h2>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-2">
                Mitochondria are the powerhouses of every cell in your body. The
                trillions of cells driving your muscles, brain and organs run
                entirely on the energy they create.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WeakMitochondriaSystemSection />

      <MitochondriaStickySection />

      <section className="relative w-full bg-[#f4f4f0] py-12 md:py-24 overflow-hidden">
        {/* Full Width Background Image */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <Image
            src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/MTUNUS9x90cDqWoxGr17o7Sug.webp?v=1770706689"
            alt="Urolithin A molecule background"
            fill
            priority={false}
            className="object-cover object-left"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px] md:min-h-[460px]">
            {/* Empty left column */}
            <div className="hidden md:block" />

            {/* Right column text */}
            <div className="flex flex-col justify-center py-10 md:py-0 md:pl-10 lg:pl-16 md:pr-4 lg:pr-8 w-full">
              <h2 className="text-[1.8rem] md:text-[2.35rem] leading-[1.1] font-normal text-black tracking-tight">
                Meet the Cellular Defense Matrix.
              </h2>

              <p className="mt-6 text-sm md:text-base text-neutral-600 leading-relaxed w-full">
                We didn't just stop at one molecule. We engineered a synergistic
                triad to tackle all three hallmarks of muscle aging
                simultaneously.
              </p>

              {/* CTA row */}
              <div className="mt-8 md:mt-12">
                <a href="#" className="inline-flex items-center group">
                  {/* Plus Icon Circle */}
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border border-neutral-400 group-hover:border-black transition-colors mr-3">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="text-neutral-600 group-hover:text-black transition-colors"
                    >
                      <path
                        d="M6 0V12M0 6H12"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </svg>
                  </span>

                  <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-neutral-500 underline underline-offset-4 decoration-neutral-300 group-hover:text-black group-hover:decoration-black transition-all">
                    SCIENTIFIC RESEARCH
                  </span>
                </a>
              </div>
            </div>

            {/* Mobile Image (Below Text) */}
            <div className="block md:hidden relative w-[calc(100%+2rem)] -mx-4 aspect-[4/3] mt-8">
              <Image
                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/MTUNUS9x90cDqWoxGr17o7Sug.webp?v=1770706689"
                alt="Urolithin A molecule background"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 0vw"
              />
            </div>
          </div>
        </div>
      </section>

      <ScientificAdvisorsSection />

      <LabsCtaSection />

      {/* <section className="w-full">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8">
          <div className="relative w-full overflow-hidden rounded-[20px] md:rounded-[32px] min-h-[400px] md:min-h-[500px] flex items-center">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent md:from-black/20" />
            </div>

            <div className="relative z-10 w-full max-w-2xl px-8 md:px-16 py-12 flex flex-col items-start gap-6">
              <h2 className="text-3xl md:text-5xl font-normal text-white leading-[1.1] tracking-tight drop-shadow-sm">
                Discover our supplement range.{" "}
                <span className="text-white/80">
                  Clinically proven to address aging at the cellular level.
                </span>
              </h2>

              <div className="pt-4">
                <div className="inline-block">
                  <Link
                    href="/shop"
                    className="bg-white text-black px-8 py-4 rounded-full text-xs md:text-sm font-bold tracking-widest hover:bg-black hover:text-white transition-all inline-block"
                  >
                    SHOP SUPPLEMENTS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <CTASection />
    </>
  );
}
