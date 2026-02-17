"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  BENEFIT_DETAILS,
  BENEFIT_MAPPING,
  BenefitDetail,
  mitopureBenefitClaims,
  mitopureBenefitImages,
  mitopureBenefitsData,
} from "../../data/homePageData";

export function MitopureBenefitsSection() {
  const { headline, benefits, ctaLabel } = mitopureBenefitsData;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const claim =
    mitopureBenefitClaims[selectedIndex] ?? mitopureBenefitClaims[0];

  // Map index/label to correct key in BENEFIT_DETAILS
  const benefitLabel = (benefits as any)[selectedIndex] ?? "";
  const activeKey = BENEFIT_MAPPING[benefitLabel] || "Renewal";
  const activeData = (BENEFIT_DETAILS[activeKey] ||
    BENEFIT_DETAILS["Renewal"]) as BenefitDetail;

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden p-4 md:p-8 mt-10">
      <div className="absolute inset-0 md:inset-2 md:rounded-2xl overflow-hidden">
        {/* Mobile Background */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Mobile_1.jpg?v=1770894656"
            alt="Athletes running background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Desktop Background */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Desktop_bg_1_c680b9c1-ed03-4318-9732-1128b337a88d.jpg?v=1770894669"
            alt="Athletes running background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] p-4 py-10 md:py-20 px-4 md:px-2">
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
                  className={`block w-full text-left font-semibold text-3xl md:text-5xl transition-colors duration-200 ${
                    selectedIndex === index
                      ? "text-white "
                      : "text-white/60 hover:text-white/80"
                  }`}
                >
                  {benefit}
                </button>
              ))}
            </div>

            <div className="min-h-[60px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={selectedIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm md:text-base text-white/70 max-w-xl leading-relaxed"
                >
                  {claim}
                </motion.p>
              </AnimatePresence>
            </div>

            <div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  onClick={() => setShowDetails(true)}
                  className="inline-flex px-8 py-3 bg-white text-black text-sm font-semibold tracking-wide rounded-full hover:bg-black hover:text-white transition-all"
                >
                  {ctaLabel}
                </button>
              </motion.div>
            </div>
          </div>

          <div className="lg:flex lg:justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-md aspect-[380/380] overflow-hidden rounded-2xl"
              >
                <Image
                  src={
                    mitopureBenefitImages[selectedIndex] ??
                    mitopureBenefitImages[0]
                  }
                  alt={benefits[selectedIndex] ?? benefits[0]}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 380px "
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* STUDY DETAILS DRAWER */}
      <AnimatePresence>
        {showDetails && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDetails(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[70] w-full lg:w-[80vw] max-w-[1400px] bg-white text-neutral-900 shadow-2xl overflow-y-auto"
            >
              <div className="p-8 md:p-12 lg:p-20">
                <button
                  onClick={() => setShowDetails(false)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-100 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>

                {/* Drawer Content */}
                <div className="mt-8">
                  {activeData.details.sections ? (
                    <div className="space-y-20">
                      {activeData.details.sections.map((section, idx) => (
                        <div
                          key={idx}
                          className="border-b border-neutral-200 pb-16 last:border-0 last:pb-0"
                        >
                          <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
                            <div className="w-full lg:w-[35%] flex-shrink-0">
                              <h5 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4 leading-relaxed">
                                Included Molecule
                              </h5>
                              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#1f3b37] tracking-tight leading-[1.1]">
                                {section.molecule}
                              </h2>
                            </div>
                            <div className="flex-1">
                              <div className="prose prose-lg text-neutral-600 mb-8 max-w-none">
                                <p className="lead font-medium text-neutral-900 mb-4 text-lg">
                                  {section.proven}
                                </p>
                                <p className="text-base leading-relaxed text-neutral-500 whitespace-pre-wrap">
                                  {section.content}
                                </p>
                              </div>

                              {/* Table Rendering */}
                              {section.table && (
                                <div className="mt-8 mb-8 overflow-hidden rounded-2xl border border-neutral-200">
                                  <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm text-neutral-600">
                                      <thead className="bg-[#f0fdf9] border-b border-neutral-200">
                                        <tr>
                                          {section.table.headers.map(
                                            (header: string, hIdx: number) => (
                                              <th
                                                key={hIdx}
                                                className="px-4 md:px-6 py-4 font-semibold text-[#1f3b37] whitespace-nowrap"
                                              >
                                                {header}
                                              </th>
                                            ),
                                          )}
                                        </tr>
                                      </thead>
                                      <tbody className="divide-y divide-neutral-200 bg-white">
                                        {section.table.rows.map((row, rIdx) => (
                                          <tr
                                            key={rIdx}
                                            className="hover:bg-neutral-50/50"
                                          >
                                            {row.map(
                                              (cell: string, cIdx: number) => (
                                                <td
                                                  key={cIdx}
                                                  className="px-4 md:px-6 py-4 first:font-medium text-neutral-800"
                                                >
                                                  {cell}
                                                </td>
                                              ),
                                            )}
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              )}
                              {/* Chart */}
                              <div className="w-full max-w-[500px] mt-8  rounded-2xl p-4">
                                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                                  <Image
                                    src={
                                      mitopureBenefitImages[
                                        section.imageIndex
                                      ] ?? mitopureBenefitImages[0]
                                    }
                                    alt={section.molecule}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Methodology */}
                          <div className="mt-12 bg-neutral-50 rounded-2xl p-6 md:p-8">
                            <h3 className="text-lg font-bold mb-6 text-neutral-900">
                              Methodology
                            </h3>
                            <div className="">
                              <div className="py-4 border-b border-neutral-200 flex flex-col md:flex-row gap-4 md:gap-12">
                                <span className="w-32 flex-shrink-0 text-sm font-semibold text-neutral-900">
                                  {section.methodology.participantsLabel ||
                                    "Participants"}
                                </span>
                                <span className="text-sm text-neutral-600 leading-relaxed">
                                  {section.methodology.participants}
                                </span>
                              </div>
                              <div className="py-4 border-b border-neutral-200 flex flex-col md:flex-row gap-4 md:gap-12">
                                <span className="w-32 flex-shrink-0 text-sm font-semibold text-neutral-900">
                                  Protocol
                                </span>
                                <span className="text-sm text-neutral-600 leading-relaxed">
                                  {section.methodology.protocol}
                                </span>
                              </div>
                              <div className="py-4 flex flex-col md:flex-row gap-4 md:gap-12">
                                <span className="w-32 flex-shrink-0 text-sm font-semibold text-neutral-900">
                                  Objective
                                </span>
                                <span className="text-sm text-neutral-600 leading-relaxed">
                                  {section.methodology.objective}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                        {/* Left Column: Title & Label */}
                        <div className="w-full lg:w-[35%] flex-shrink-0">
                          <h5 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4 leading-relaxed">
                            Clinically proven benefits
                          </h5>
                          <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal text-[#1f3b37] tracking-tight break-all md:break-words hyphens-auto leading-[0.9]">
                            {benefitLabel}
                          </h2>
                        </div>

                        {/* Right Column: Content & Chart */}
                        <div className="flex-1">
                          <div className="prose prose-lg text-neutral-600 mb-12 max-w-none">
                            <p className="lead font-medium text-neutral-900 mb-4 text-xl">
                              {activeData.details.proven ?? ""}
                            </p>
                            <p className="text-base leading-relaxed text-neutral-500">
                              {activeData.details.content ?? ""}
                            </p>
                          </div>

                          {/* Chart Section */}
                          <div className="w-full max-w-[500px] mt-8">
                            <div className="relative w-full aspect-[4/3] rounded-2xl">
                              <Image
                                src={
                                  mitopureBenefitImages[selectedIndex] ??
                                  mitopureBenefitImages[0]
                                }
                                alt={benefits[selectedIndex] ?? benefits[0]}
                                fill
                                className="object-contain p-2"
                                sizes="(max-width: 1024px) 100vw, 500px"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {activeData.details.methodology &&
                        activeData.details.methodology.participants && (
                          <div className="mt-16">
                            <h3 className="text-lg font-bold mb-6 text-neutral-900">
                              Methodology
                            </h3>
                            <div className="border-t border-neutral-200">
                              <div className="py-6 border-b border-neutral-200 flex flex-col md:flex-row gap-4 md:gap-12">
                                <span className="w-32 flex-shrink-0 text-base text-neutral-900">
                                  {activeData.details.methodology
                                    .participantsLabel || "Participants"}
                                </span>
                                <span className="text-base text-neutral-600 leading-relaxed max-w-2xl">
                                  {activeData.details.methodology.participants}
                                </span>
                              </div>
                              <div className="py-6 border-b border-neutral-200 flex flex-col md:flex-row gap-4 md:gap-12">
                                <span className="w-32 flex-shrink-0 text-base text-neutral-900">
                                  Protocol
                                </span>
                                <span className="text-base text-neutral-600 leading-relaxed max-w-2xl">
                                  {activeData.details.methodology.protocol}
                                </span>
                              </div>
                              <div className="py-6 border-b border-neutral-200 flex flex-col md:flex-row gap-4 md:gap-12">
                                <span className="w-32 flex-shrink-0 text-base text-neutral-900">
                                  Objective
                                </span>
                                <span className="text-base text-neutral-600 leading-relaxed max-w-2xl">
                                  {activeData.details.methodology.objective}
                                </span>
                              </div>
                            </div>

                            <p className="mt-8 text-sm text-neutral-500 leading-relaxed max-w-3xl">
                              We are committed to conducting rigorous scientific
                              research and sharing it with our customers, which
                              is why we publish our work in open access,
                              peer-reviewed journals. Read the full results of
                              the study in Cell Reports Medicine.
                            </p>
                          </div>
                        )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
