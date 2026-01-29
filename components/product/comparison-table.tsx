"use client";

import { comparisonData } from "data/comparisonTableData";
import React from "react";

// Helper function to format cell content - converts checkmarks to bullet points and dashes
function formatCellContent(content: string): React.ReactElement | string {
  if (!content) return content;

  // Convert checkmark to bullet point
  if (content.includes("✓")) {
    return (
      <span className="text-white text-2xl font-bold inline-block leading-none">
        •
      </span>
    );
  }

  // Convert dash to dash symbol
  if (content.trim() === "-") {
    return (
      <span className="text-white text-lg inline-block leading-none">—</span>
    );
  }

  return content;
}

export function ComparisonTable() {
  return (
    <div
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat py-16 md:py-20"
      style={{
        backgroundImage: `url(https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Table_BG_59a6378c-9b22-4e44-a999-bac50ab2105a.jpg?v=1769687672)`,
      }}
    >
      <div className="relative mx-auto max-w-7xl px-4 md:px-4">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] items-start">
          {/* Left: Heading */}
          <div>
            <h2 className="text-3xl leading-tight text-black/70 md:text-5xl text-left md:text-right">
              How M3™ Decipher <br />
              Musclespan Compares:
            </h2>
          </div>

          {/* Right: Table Container */}
          <div className="overflow-x-auto">
            <div className="min-w-[720px] rounded-3xl bg-black/10 backdrop-blur-md p-6  md:min-w-full md:p-8">
              <table className="w-full border-collapse table-fixed">
                <colgroup>
                  <col className="w-[35%]" />
                  <col className="w-[20%]" />
                  <col className="w-[22.5%]" />
                  <col className="w-[22.5%]" />
                </colgroup>
                <thead>
                  <tr>
                    <th className="pb-4 text-left text-sm font-medium text-white md:text-base">
                      {/* Feature column header - empty */}
                    </th>
                    <th className="pb-4 text-center px-4 bg-[#D3B7E7]/40 rounded-t-lg">
                      <div className="inline-flex items-center justify-center rounded-lg border border-white px-4 py-1.5 mt-2">
                        <span className="text-xs font-medium text-white md:text-sm ">
                          M3 Stack™
                        </span>
                      </div>
                    </th>
                    <th className="pb-4 text-left px-4 text-sm font-medium text-white md:text-base">
                      Typical Muscle-Building Supplement
                    </th>
                    <th className="pb-4 text-left px-4 text-sm font-medium text-white md:text-base">
                      Typical Longevity Stack
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-white/20 last:border-0"
                    >
                      <td className="py-4 pr-4 text-sm leading-relaxed text-white md:text-base">
                        {row.feature}
                      </td>
                      <td
                        className={`py-4 px-4 bg-[#D3B7E7]/50 border-b-0 ${index === comparisonData.length - 1 ? "rounded-b-lg" : ""}`}
                      >
                        <div className="text-sm leading-relaxed text-black md:text-base flex justify-center">
                          {formatCellContent(row.m3Stack)}
                        </div>
                      </td>
                      <td className="py-4 text-left px-4 text-sm leading-relaxed text-white md:text-base">
                        {formatCellContent(row.typicalMuscleBuilding)}
                      </td>
                      <td className="py-4 text-left px-4 text-sm leading-relaxed text-white md:text-base">
                        {formatCellContent(row.typicalLongevity)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
