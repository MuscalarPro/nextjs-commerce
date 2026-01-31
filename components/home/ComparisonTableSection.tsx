"use client";

import { comparisonTableData } from "data/homePageData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type CellValue = "check" | "partial" | "limited" | "none";

function CellValueDisplay({ value }: { value: CellValue }) {
  if (value === "check") {
    return (
      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white">
        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
    );
  }
  if (value === "none") {
    return (
      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white">
        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
  const { ctaLabel, ctaHref, tabLabel, tabs, title, criteria, supplements } = comparisonTableData;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full bg-[#f5f2ee] py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6 lg:px-8">
        {/* CTA + Tabs row */}
        <div className="mb-6 flex flex-wrap items-center gap-6">
          <Link
            href={ctaHref}
            className="inline-flex border border-neutral-400 bg-transparent px-4 py-2.5 text-sm font-medium uppercase tracking-wide text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            {ctaLabel}
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-wide text-neutral-600">
              {tabLabel}
            </span>
            <div className="flex gap-0 border-b border-neutral-300 pb-0">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  className={`relative px-5 py-2.5 text-xs font-medium uppercase tracking-wide transition-colors ${
                    activeTab === i
                      ? "bg-white text-neutral-800 shadow-sm border border-neutral-300 border-b-0 rounded-t -mb-px z-10"
                      : "bg-transparent text-neutral-600 hover:text-neutral-800 border border-neutral-300 border-b-0 rounded-t -mb-px"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <h2 className="mb-8 text-center text-2xl font-bold text-neutral-800 md:text-3xl lg:text-4xl">
          {title}
        </h2>

        {/* Table card */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-neutral-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse">
              <thead>
                <tr>
                  <th className="w-[240px] min-w-[200px] border-b border-dotted border-neutral-300 bg-transparent p-5 text-left align-bottom" />
                  {supplements.map((sup) => (
                    <th
                      key={sup.id}
                      className={`min-w-[110px] border-b border-l border-dotted border-neutral-300 p-5 text-center align-bottom first:border-l-0 ${
                        sup.highlighted
                          ? "bg-neutral-50/80 shadow-[4px_0_12px_rgba(0,0,0,0.06)]"
                          : "bg-transparent"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div className="relative h-16 w-16 overflow-hidden rounded-full bg-neutral-100 ring-1 ring-neutral-200/80">
                          <Image
                            src={sup.image}
                            alt={sup.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        {sup.badge ? (
                          <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-medium text-white">
                            {sup.name}
                          </span>
                        ) : (
                          <span className="text-sm font-medium text-neutral-800">{sup.name}</span>
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
                        {criterion.info && (
                          <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neutral-400 bg-white text-[10px] font-semibold text-neutral-500">
                            i
                          </span>
                        )}
                        <span>{criterion.label}</span>
                      </span>
                    </td>
                    {supplements.map((sup) => (
                      <td
                        key={sup.id}
                        className={`border-b border-l border-dotted border-neutral-300 p-5 text-center align-middle first:border-l-0 ${
                          sup.highlighted ? "bg-neutral-50/80" : "bg-transparent"
                        }`}
                      >
                        <div className="flex justify-center">
                          <CellValueDisplay value={sup.values[rowIndex]} />
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
