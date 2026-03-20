"use client";

import { useState } from "react";
import Image from "next/image";
import ScientificResearchModal from "./ScientificResearchModal";

export function CellularDefenseSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
              <h2 className="heading-h2">
                Meet the Cellular Defense Matrix.
              </h2>

              <p className="body-text text-[#666] w-full">
                We didn&apos;t just stop at one molecule. We engineered a synergistic
                triad to tackle all three hallmarks of muscle aging
                simultaneously.
              </p>

              {/* CTA row */}
              <div className="mt-8 md:mt-12">
                <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center group">
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

                  <span className="text-xs md:text-[16px] font-bold uppercase text-neutral-500 underline underline-offset-4 decoration-neutral-300 group-hover:text-black group-hover:decoration-black transition-all">
                    SCIENTIFIC RESEARCH
                  </span>
                </button>
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

      <ScientificResearchModal isOpen={isModalOpen} close={() => setIsModalOpen(false)} />
    </>
  );
}
