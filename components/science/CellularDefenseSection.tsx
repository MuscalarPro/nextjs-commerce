"use client";

import Image from "next/image";
import { useState } from "react";
import ScientificResearchModal from "./ScientificResearchModal";

export function CellularDefenseSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full bg-[#f4f4f0] pt-4 md:pt-24 pb-12 md:pb-24 overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 w-full h-full">
          {/* Desktop Image */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Desktop.webp?v=1774328842"
              alt="Urolithin A molecule background"
              fill
              priority={false}
              className="object-cover object-left"
              sizes="100vw"
            />
          </div>
          {/* Mobile Image */}
          <div className="block md:hidden absolute inset-0">
            <Image
              src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Mobile_1.webp?v=1774328842"
              alt="Urolithin A molecule background"
              fill
              priority={false}
              className="object-cover object-bottom translate-y-[10%]"
              sizes="100vw"
            />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[650px] md:min-h-[460px]">
            {/* Empty space helper or content alignment */}
            <div className="hidden md:block" />

            {/* Content column */}
            <div className="flex flex-col justify-start md:justify-center pt-2 md:pt-0 md:pl-10 lg:pl-16 md:pr-4 lg:pr-8 w-full ">
              <h2 className="heading-h2 leading-[1.12]">
                Meet M3, a Musclespan Trio molecule optimising peak human
                performance that renews our cellular powerhouse
              </h2>

              <p className="body-text text-[#666] w-full mt-2">
                We didn&apos;t just stop at one molecule. We engineered a
                synergistic triad to tackle all three hallmarks of muscle aging
                simultaneously.
              </p>

              {/* CTA row */}
              <div className="mt-8 md:mt-12">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center group"
                >
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
          </div>
        </div>
      </section>

      <ScientificResearchModal
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
      />
    </>
  );
}
