import { LabsCtaSection } from "components/product/labs-cta-section";
import type { Metadata } from "next";
import Image from "next/image";
import {
  CellularDefenseSection,
  MitochondriaStickySection,
  ScienceHeroSection,
  ScientificAdvisorsSection,
  ScrollSequence,
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

      <ScrollSequence />

      {/* <section className="w-full bg-[#ffffff]">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-12 md:py-24">
          <div className="relative w-full h-[60vh] md:h-[90vh] rounded-2xl overflow-hidden">
            <video
              src="https://cdn.shopify.com/videos/c/o/v/30759ca5f3a04763966014c224e6318d.webm"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section> */}

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
              <h2 className="heading-h2 mb-4">
                ~90% of our cellular energy is produced by mitochondria
              </h2>
              <p className="body-text text-[#666] mb-2">
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

      <CellularDefenseSection />

      <ScientificAdvisorsSection />

      <LabsCtaSection />

      {/* <section className="w-full">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8">
          <div className="relative w-full overflow-hidden rounded-[20px] md:rounded-[32px] min-h-[400px] md:min-h-[500px] flex items-center">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent md:from-black/20" />
            </div>

            <div className="relative z-10 w-full max-w-2xl px-8 md:px-16 py-12 flex flex-col items-start gap-6">
              <h2 className="text-3xl md:text-5xl font-normal text-white drop-shadow-sm">
                Discover our supplement range.{" "}
                <span className="text-white/80">
                  Clinically proven to address aging at the cellular level.
                </span>
              </h2>

              <div className="pt-4">
                <div className="inline-block">
                  <Link
                    href="/shop"
                    className="bg-white text-black px-8 py-4 rounded-full text-xs md:text-sm font-bold hover:bg-black hover:text-white transition-all inline-block"
                  >
                    SHOP SUPPLEMENTS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <CTASection /> */}
    </>
  );
}
