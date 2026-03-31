"use client";

import { comparisonData } from "data/product/comparisonTableData";
import React from "react";

type CellValue = "check" | "none" | "partial" | "varies" | string;

function CellValueDisplay({ value }: { value: CellValue }) {
  const normalizedValue = value?.toString().toLowerCase().trim();

  if (normalizedValue === "✓" || normalizedValue === "check") {
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
  if (normalizedValue === "-" || normalizedValue === "none") {
    return (
      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
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

  if (normalizedValue === "partial" || normalizedValue === "varies") {
    return (
      <span className="text-[13px] font-medium text-neutral-500 capitalize italic">
        {value}
      </span>
    );
  }

  return <span className="text-[13px] font-medium text-neutral-800">{value}</span>;
}

export function ComparisonTable() {
  return (
    <section className="w-full bg-[#F5F5DC] py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        {/* Heading */}
        <h2 className="mb-12 text-center text-[#000000] heading-h2">
          How Muscalarpro™ [M3] Compares
        </h2>

        {/* Table card */}
        <div className="overflow-hidden rounded-2xl bg-white border border-neutral-200 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse">
              <thead>
                <tr>
                  <th className="w-[35%] border-b border-dotted border-neutral-300 bg-transparent p-6 text-left align-bottom">
                    <span className="text-xs font-bold uppercase text-neutral-400">
                      Performance Metrics
                    </span>
                  </th>
                  <th className="w-[20%] border-b border-l border-dotted border-neutral-300 p-6 text-center align-bottom bg-neutral-50/80">
                    <div className="flex flex-col items-center gap-3">
                      <span className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2 text-[12px] font-bold text-white uppercase">
                        [M3] Stack
                      </span>
                    </div>
                  </th>
                  <th className="w-[22.5%] border-b border-l border-dotted border-neutral-300 p-6 text-center align-bottom text-sm font-medium text-neutral-800">
                    Typical Muscle-Building Supplement
                  </th>
                  <th className="w-[22.5%] border-b border-l border-dotted border-neutral-300 p-6 text-center align-bottom text-sm font-medium text-neutral-800">
                    Typical Longevity Stack
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="group hover:bg-neutral-50/30 transition-colors">
                    <td className="border-b border-dotted border-neutral-300 p-6 text-[15px] font-medium text-neutral-800 align-middle">
                      {row.feature}
                    </td>
                    <td className="border-b border-l border-dotted border-neutral-300 p-6 text-center align-middle bg-neutral-50/80">
                      <div className="flex justify-center">
                        <CellValueDisplay value={row.m3Stack} />
                      </div>
                    </td>
                    <td className="border-b border-l border-dotted border-neutral-300 p-6 text-center align-middle">
                      <div className="flex justify-center">
                        <CellValueDisplay value={row.typicalMuscleBuilding} />
                      </div>
                    </td>
                    <td className="border-b border-l border-dotted border-neutral-300 p-6 text-center align-middle">
                      <div className="flex justify-center">
                        <CellValueDisplay value={row.typicalLongevity} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footnote or bottom callout (Optional, matching home variant) */}
        <p className="mt-8 text-center text-[13px] text-neutral-500 font-light italic">
          * Based on publicly available ingredient labels and published clinical literature.
        </p>
      </div>
    </section>
  );
}

