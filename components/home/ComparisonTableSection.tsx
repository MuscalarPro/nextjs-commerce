"use client";

import { comparisonTableData } from "data/homePageData";
import Image from "next/image";
import { useState } from "react";

type CellValue = "check" | "partial" | "limited" | "none";

function CellValueDisplay({ value }: { value: CellValue }) {
  if (value === "check") {
    return (
      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white">
        <svg
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </span>
    );
  }
  if (value === "none") {
    return (
      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white">
        <svg
          className="h-3 w-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
    );
  }
  return (
    <span className="text-sm font-medium text-neutral-800">
      {value === "partial" ? "Partial" : "Limited"}
    </span>
  );
}

export function ComparisonTableSection() {
  const {
    ctaLabel,
    ctaHref,
    tabLabel,
    tabs,
    title,
    criteria,
    supplementsMolecules,
    supplementsBrands,
  } = comparisonTableData;
  const [activeTab, setActiveTab] = useState(0);

  // Select the correct data set based on the active tab
  const activeSupplements =
    activeTab === 0 ? supplementsMolecules : supplementsBrands;

  return (
    <section className="w-full bg-[#f5f2ee] py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-semibold text-neutral-800 md:text-4xl lg:text-5xl tracking-tight">
          {title}
        </h2>
        {/* Centered Header & Controls */}
        <div className="mb-12 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
            {tabLabel}
          </span>

          <div className="flex items-center gap-1 rounded-lg bg-white/50 p-1 border border-neutral-200">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wide rounded-md transition-all duration-300 ${
                  activeTab === i
                    ? "bg-white text-neutral-900 shadow-sm ring-1 ring-black/5"
                    : "bg-transparent text-neutral-500 hover:text-neutral-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Table card */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-neutral-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse">
              <thead>
                <tr>
                  <th className="w-[240px] min-w-[200px] border-b border-dotted border-neutral-300 bg-transparent p-5 text-left align-bottom" />
                  {activeSupplements.map((sup: any) => (
                    <th
                      key={sup.id}
                      className={`min-w-[110px] border-b border-l border-dotted border-neutral-300 p-5 text-center align-bottom first:border-l-0 ${
                        sup.highlighted
                          ? "bg-neutral-50/80 shadow-[4px_0_12px_rgba(0,0,0,0.06)]"
                          : "bg-transparent"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div
                          className={`relative h-16 w-16 overflow-hidden bg-white ${activeTab === 0 ? "rounded-full ring-1 ring-neutral-200/80" : "rounded-lg w-30 h-10"}`}
                        >
                          <Image
                            src={sup.image}
                            alt={sup.name}
                            fill
                            className="object-contain p-1"
                            sizes="64px"
                          />
                        </div>
                        {activeTab === 0 && (
                          <div className="flex flex-col items-center gap-1">
                            {sup.badge ? (
                              <span
                                className={`rounded-full bg-black px-3 py-1 text-xs font-medium text-white ${activeTab === 0 ? "rounded-full" : "rounded-lg"}`}
                              >
                                {sup.name}
                              </span>
                            ) : (
                              <span className="text-sm font-medium text-neutral-800">
                                {sup.name}
                              </span>
                            )}
                            {sup.description && (
                              <span className="text-[10px] leading-tight text-neutral-500 max-w-[120px]">
                                {sup.description}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {criteria.map((criterion, rowIndex) => (
                  <tr key={criterion.label}>
                    <td className="border-b border-dotted border-neutral-300 p-5 text-sm text-neutral-800 align-middle">
                      <span className="inline-flex items-center gap-2.5">
                        <span>{criterion.label}</span>
                        {criterion.info && (
                          <span
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neutral-400 bg-white text-[10px] font-semibold text-neutral-500 cursor-help"
                            title="More info"
                          >
                            i
                          </span>
                        )}
                      </span>
                    </td>
                    {activeSupplements.map((sup: any) => (
                      <td
                        key={sup.id}
                        className={`border-b border-l border-dotted border-neutral-300 p-5 text-center align-middle first:border-l-0 ${
                          sup.highlighted
                            ? "bg-neutral-50/80"
                            : "bg-transparent"
                        }`}
                      >
                        <div className="flex justify-center">
                          <CellValueDisplay
                            value={
                              (sup.values[rowIndex] ?? "check") as CellValue
                            }
                          />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
