import { mitopureBenefitsData } from "data/homePageData";
import Image from "next/image";
import Link from "next/link";

const BACKGROUND_IMAGE =
  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/c92af07e442e6a81aa270a22a64da56ba026fa22-2800x1327.avif?v=1768641347";

export function MitopureBenefitsSection() {
  const { headline, benefits, claim, ctaLabel, ctaHref, chart } =
    mitopureBenefitsData;

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden bg-white p-4 md:p-8">
      <div className="absolute inset-0 md:inset-2 md:rounded-xl overflow-hidden">
        <Image
          src={BACKGROUND_IMAGE}
          alt="Athletes running background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-8xl p-4 py-10 md:py-20 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 text-white">
            <div className="text-sm md:text-base font-semibold uppercase tracking-wide text-white/90">
              {headline}
            </div>

            <div className="space-y-2 md:space-y-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold"
                >
                  {benefit}
                </div>
              ))}
            </div>

            <p className="text-base md:text-lg text-white/90 max-w-xl">
              {claim}
            </p>

            <div className="pt-4">
              <Link
                href={ctaHref}
                className="inline-flex px-6 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-colors"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>

          <div className="lg:flex lg:justify-end">
            <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 md:p-8 w-full max-w-md">
              <div className="mb-6">
                <div className="text-white text-sm font-semibold uppercase tracking-wide mb-2">
                  {chart.title}
                </div>
              </div>

              <div className="relative h-64 md:h-80">
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-white/70 text-xs md:text-sm pr-2">
                  <span>50%</span>
                  <span>40%</span>
                  <span>30%</span>
                  <span>20%</span>
                  <span>10%</span>
                  <span>0</span>
                </div>

                <div className="ml-12 md:ml-16 h-full flex items-end gap-6 md:gap-8">
                  <div className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-neutral-400 rounded-t"
                      style={{ height: chart.placeboHeight }}
                    />
                    <div className="mt-2 text-white text-xs md:text-sm text-center">
                      PLACEBO
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col items-center relative">
                    <div
                      className="w-full bg-white rounded-t relative"
                      style={{ height: chart.mitopureHeight }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-white text-2xl md:text-3xl font-bold whitespace-nowrap">
                        {chart.mitopureLabel}
                      </div>
                    </div>
                    <div className="mt-2 text-white text-xs md:text-sm text-center font-semibold">
                      mitopure®
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
