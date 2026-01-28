"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const benefits = [
  {
    id: "renewal",
    title: "Renewal",
    description: "Mitochondrial renewal increases by +39% after 16 weeks over placebo*",
    statTitle: "INCREASE IN MITOPHAGY",
    statValue: "+39%",
    placeboHeight: "20%",
    mitopureHeight: "39%",
    image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/renewal.svg?v=1769600554"
  },
  {
    id: "strength",
    title: "Strength",
    description: "Muscle strength increases by +12% after 16 weeks over placebo*",
    statTitle: "INCREASE IN STRENGTH",
    statValue: "+12%",
    placeboHeight: "15%",
    mitopureHeight: "27%",
    image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/e1bd0847ec8b0b2be1c36e9bfe7b810c1a6d5611-380x380.svg?v=1769600646"
  },
  {
    id: "energy",
    title: "Energy",
    description: "Cellular energy production improves by +24% after 8 weeks*",
    statTitle: "INCREASE IN ATP",
    statValue: "+24%",
    placeboHeight: "10%",
    mitopureHeight: "34%",
    image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/c92af07e442e6a81aa270a22a64da56ba026fa22-2800x1327.avif?v=1768641347" // Placeholder - existing image
  },
  {
    id: "bioavailability",
    title: "Bioavailability",
    description: "6x better bioavailability compared to standard sources*",
    statTitle: "BIOAVAILABILITY",
    statValue: "6x",
    placeboHeight: "5%",
    mitopureHeight: "30%",
    image: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/3adcf26a0e0f45000a3483b9407cf6a9e32a8412-380x385.svg?v=1769600754"
  }
];

export default function ClinicallyProvenBenefits() {
  const [activeBenefit, setActiveBenefit] = useState(benefits[0]);

  if (!activeBenefit) return null;

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden bg-white p-4 md:p-8">
      {/* Static Background Image (Restored) */}
      <div className="absolute inset-0 md:inset-2 md:rounded-xl overflow-hidden">
        <Image
          src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/c92af07e442e6a81aa270a22a64da56ba026fa22-2800x1327.avif?v=1768641347"
          alt="Athletes running background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-8xl p-4 py-10 md:py-20 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Section - Text Content */}
          <div className="space-y-6 md:space-y-8 text-white">
            <div className="text-sm md:text-base font-semibold uppercase tracking-wide text-white/90">
              CLINICALLY PROVEN BENEFITS
            </div>

            {/* Benefits List - Clickable */}
            <div className="space-y-2 md:space-y-3">
              {benefits.map((benefit) => (
                <button
                  key={benefit.id}
                  onClick={() => setActiveBenefit(benefit)}
                  className={clsx(
                    "block text-left text-4xl md:text-5xl lg:text-6xl font-bold transition-opacity hover:opacity-100",
                    activeBenefit.id === benefit.id ? "opacity-100" : "opacity-40"
                  )}
                >
                  {benefit.title}
                </button>
              ))}
            </div>

            {/* Supporting Claim */}
            <p className="text-base md:text-lg text-white/90 max-w-xl transition-all duration-300">
              {activeBenefit.description}
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/study-details"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-colors"
              >
                SEE STUDY DETAILS
              </Link>
            </div>
          </div>

          {/* Right Section - Bar Chart */}
          <div className="lg:flex lg:justify-end">
            <div className="relative bg-black/60 backdrop-blur-sm rounded-lg overflow-hidden w-full max-w-md transition-all duration-300">
              
              {/* Dynamic Background Image for the Card */}
              <div className="absolute inset-0 z-0">
                 <Image
                    key={activeBenefit.image}
                    src={activeBenefit.image}
                    alt={`${activeBenefit.title} graphic`}
                    fill
                    className="object-cover opacity-60" // Reduced opacity to blend with the black card bg
                 />
                 <div className="absolute inset-0 bg-black/40" /> {/* Additional overlay for text readability */}
              </div>

              {/* Chart Content (Above the image) */}
              <div className="relative z-10 p-6 md:p-8">
                {/* Chart Title */}
                <div className="mb-6">
                  <div className="text-white text-sm font-semibold uppercase tracking-wide mb-2">
                    {activeBenefit.statTitle}
                  </div>
                </div>

                {/* Chart Container */}
                <div className="relative h-64 md:h-80">
                  {/* Y-axis Labels */}
                  <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-white/70 text-xs md:text-sm pr-2">
                    <span>50%</span>
                    <span>40%</span>
                    <span>30%</span>
                    <span>20%</span>
                    <span>10%</span>
                    <span>0</span>
                  </div>

                  {/* Chart Bars */}
                  <div className="ml-12 md:ml-16 h-full flex items-end gap-6 md:gap-8">
                    {/* Placebo Bar */}
                    <div className="flex-1 flex flex-col items-center group">
                      <div 
                          className="w-full bg-neutral-400 rounded-t transition-all duration-500 ease-in-out shadow-lg"
                          style={{ height: activeBenefit.placeboHeight }}
                      ></div>
                      <div className="mt-2 text-white text-xs md:text-sm text-center font-medium drop-shadow-md">
                        PLACEBO
                      </div>
                    </div>

                    {/* Mitopure Bar */}
                    <div className="flex-1 flex flex-col items-center relative group">
                      <div 
                          className="w-full bg-white rounded-t relative transition-all duration-500 ease-in-out shadow-lg"
                          style={{ height: activeBenefit.mitopureHeight }}
                      >
                        {/* Percentage Label */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-white text-2xl md:text-3xl font-bold whitespace-nowrap transition-all delay-100 drop-shadow-md">
                          {activeBenefit.statValue}
                        </div>
                      </div>
                      <div className="mt-2 text-white text-xs md:text-sm text-center font-bold drop-shadow-md">
                        mitopure®
                      </div>
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
