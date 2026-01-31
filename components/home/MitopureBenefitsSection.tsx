"use client";

import {
  mitopureBenefitClaims,
  mitopureBenefitImages,
  mitopureBenefitsData,
} from "data/homePageData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function MitopureBenefitsSection() {
  const { headline, benefits, ctaLabel, ctaHref } = mitopureBenefitsData;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const claim =
    mitopureBenefitClaims[selectedIndex] ?? mitopureBenefitClaims[0];

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden bg-white p-4 md:p-8">
      <div className="absolute inset-0 md:inset-2 md:rounded-xl overflow-hidden">
        <Image
          src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/c92af07e442e6a81aa270a22a64da56ba026fa22-2800x1327.avif?v=1768641347"
          alt="Athletes running background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-8xl p-4 py-10 md:py-20 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            {/* Headline with dotted lines on both sides */}
            <div className="flex items-center gap-4">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-white/70 shrink-0">
                {headline}
              </span>
            </div>

            <div className="space-y-1 md:space-y-2">
              {benefits.map((benefit, index) => (
                <button
                  key={benefit}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`block w-full text-left font-semibold text-4xl md:text-6xl transition-colors duration-200 ${
                    selectedIndex === index
                      ? "text-white "
                      : "text-white/60 hover:text-white/80"
                  }`}
                >
                  {benefit}
                </button>
              ))}
            </div>

            <p className="text-sm md:text-base text-white/70 max-w-xl leading-relaxed">
              {claim}
            </p>

            <div className="pt-2">
              <Link
                href={ctaHref}
                className="inline-flex px-6 py-3 border border-white text-white text-sm font-medium uppercase tracking-wide bg-transparent hover:bg-white hover:text-black transition-colors"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>

          <div className="lg:flex lg:justify-end">
            <div className="relative w-full max-w-md aspect-[380/385] rounded-xl overflow-hidden bg-black/50 backdrop-blur-md border border-white/10">
              <Image
                src={
                  mitopureBenefitImages[selectedIndex] ??
                  mitopureBenefitImages[0]
                }
                alt={benefits[selectedIndex] ?? benefits[0]}
                fill
                className="object-contain p-4 md:p-6"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
