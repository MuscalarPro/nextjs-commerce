"use client";

import React from "react";

type ExternalLinkPillProps = {
  text: string;
  href: string;
};

function ExternalLinkPill({ text, href }: ExternalLinkPillProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 rounded-full border border-[#693979]/30 bg-white/60 px-3 py-1 text-xs font-medium text-[#693979] hover:bg-[#693979] hover:text-white transition-colors"
    >
      <span>{text}</span>
      <span
        aria-hidden="true"
        className="inline-block text-[10px] leading-none translate-y-[-1px] rotate-45"
      >
        ↑
      </span>
    </a>
  );
}

interface ComparisonRow {
  feature: string;
  muscularPro: string;
  typicalMuscleBuilding: string;
  typicalLongevity: string;
}

// Helper function to format cell content with clickable citations
function formatCellContent(content: string): React.ReactElement | string {
  if (!content) return content;

  // Process checkmarks and dashes first
  const processCheckmarks = (text: string): (string | React.ReactElement)[] => {
    const parts: (string | React.ReactElement)[] = [];
    let lastIndex = 0;
    let keyCounter = 0;
    const checkmarkRegex = /✓/g;
    let match;

    while ((match = checkmarkRegex.exec(text)) !== null) {
      // Add text before checkmark
      if (match.index > lastIndex) {
        const beforeText = text.substring(lastIndex, match.index);
        if (beforeText) {
          parts.push(beforeText.replace(/—/g, "○"));
        }
      }

      // Add big filled circle
      parts.push(
        <span key={`circle-${keyCounter++}`} className="text-2xl font-bold inline-block leading-none">
          •
        </span>
      );

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      const remaining = text.substring(lastIndex);
      if (remaining) {
        parts.push(remaining.replace(/—/g, "○"));
      }
    }

    return parts.length > 0 ? parts : [text.replace(/—/g, "○")];
  };

  // Check if content contains citations
  const citationPattern = /(pmc\.ncbi\.nlm\.nih(?:\s+\+1)?|jamanetwork)/g;
  const matches = Array.from(content.matchAll(citationPattern));

  if (matches.length === 0) {
    // No citations, just process checkmarks and dashes
    const processed = processCheckmarks(content);
    return processed.length === 1 && typeof processed[0] === "string" 
      ? processed[0] 
      : <span className="flex flex-wrap items-center gap-2">{processed}</span>;
  }

  // Split by citation patterns
  const parts: (string | React.ReactElement)[] = [];
  let lastIndex = 0;
  let keyCounter = 0;

  matches.forEach((match) => {
    if (match.index === undefined) return;

    // Add text before citation (process checkmarks and dashes)
    if (match.index > lastIndex) {
      const textBefore = content.substring(lastIndex, match.index);
      if (textBefore) {
        const processed = processCheckmarks(textBefore);
        parts.push(...processed);
        parts.push(" ");
      }
    }

    // Add citation as ExternalLinkPill
    const citation = match[0];
    const isPMC = citation.includes("pmc.ncbi.nlm.nih");
    const citationText = isPMC ? "PMC" : "JAMA";
    parts.push(
      <ExternalLinkPill
        key={`citation-${keyCounter++}`}
        href={
          isPMC ? "https://pmc.ncbi.nlm.nih.gov" : "https://jamanetwork.com"
        }
        text={citationText}
      />
    );

    lastIndex = match.index + match[0].length;
  });

  // Add remaining text (process checkmarks and dashes)
  if (lastIndex < content.length) {
    const remainingText = content.substring(lastIndex);
    if (remainingText) {
      const processed = processCheckmarks(remainingText);
      parts.push(" ");
      parts.push(...processed);
    }
  }

  return <span className="flex flex-wrap items-center gap-2">{parts}</span>;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Clinically studied urolithin A dose (1,000 mg/day)",
    muscularPro: "✓ pmc.ncbi.nlm.nih +1",
    typicalMuscleBuilding: "—",
    typicalLongevity:
      "Partial (varies by brand; sometimes not included) pmc.ncbi.nlm.nih",
  },
  {
    feature: "Strength endpoints in human RCTs (urolithin A core)",
    muscularPro:
      "✓ (e.g., hamstring average peak torque +9.8% vs placebo at 4 months in 1,000 mg arm) pmc.ncbi.nlm.nih",
    typicalMuscleBuilding:
      "Partial (often relies on training + protein; supplement evidence varies by ingredient)",
    typicalLongevity: "Partial pmc.ncbi.nlm.nih",
  },
  {
    feature:
      "Endurance / fatigue-resistance endpoints in human RCTs (urolithin A core)",
    muscularPro:
      "✓ (e.g., contractions-until-fatigue improved vs placebo in older adults) jamanetwork",
    typicalMuscleBuilding: "Partial",
    typicalLongevity: "Partial jamanetwork",
  },
  {
    feature:
      "Mobility-type performance endpoint (6-min walk) in urolithin A research",
    muscularPro:
      "✓ (reported in trials; significance varies by study) pmc.ncbi.nlm.nih +1",
    typicalMuscleBuilding: "—",
    typicalLongevity: "Partial pmc.ncbi.nlm.nih +1",
  },
  {
    feature: "Multi-pathway cellular stack (mitophagy + autophagy support)",
    muscularPro: "✓ pmc.ncbi.nlm.nih +1",
    typicalMuscleBuilding: "—",
    typicalLongevity:
      "Partial (usually spread across multiple products) pmc.ncbi.nlm.nih",
  },
  {
    feature: "Single daily capsule protocol",
    muscularPro: "✓",
    typicalMuscleBuilding: "—",
    typicalLongevity: "—",
  },
  {
    feature: "Stimulant-free positioning",
    muscularPro: "✓",
    typicalMuscleBuilding: "Varies",
    typicalLongevity: "Varies",
  },
];

export function ComparisonTable() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#8C4ED6] to-[#3C0E63] py-16 md:py-20">
      <div className="relative mx-auto max-w-7xl px-4 md:px-4">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl  leading-tight text-white md:text-4xl ">
            How M3™ Decipher Musclespan Compares:
          </h2>
        </div>

        {/* Table Container - Full Width */}
        <div className="overflow-x-auto">
          <div className="min-w-full rounded-2xl bg-white/10 backdrop-blur-md p-6 shadow-2xl md:p-8">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="pb-4 text-left text-sm font-medium text-white md:text-base">
                      {/* Feature column header - empty */}
                    </th>
                    <th className="pb-4 text-left px-4">
                      <div className="inline-flex items-center justify-center rounded-full bg-[#D3B7E7]/80 border-2 border-white/30 px-4 py-1.5">
                        <span className="text-sm font-semibold text-white md:text-base">
                          MUSCULAR PRO (M3 Stack™)
                        </span>
                      </div>
                    </th>
                    <th className="pb-4 text-left px-4 text-sm font-medium text-white md:text-base">
                      Typical muscle-building supplement
                    </th>
                    <th className="pb-4 text-left px-4 text-sm font-medium text-white md:text-base">
                      Typical longevity stack (multi-bottle)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-white/10 last:border-0"
                    >
                      <td className="py-4 pr-6 text-sm leading-relaxed text-white md:text-base">
                        {row.feature}
                      </td>
                      <td className="relative py-4 text-left px-4">
                        {/* Highlighted column background for MUSCULAR PRO */}
                        <div className="absolute inset-0 -mx-2 rounded-lg bg-[#D3B7E7]/20" />
                        <div className="relative text-sm leading-relaxed text-white md:text-base">
                          {formatCellContent(row.muscularPro)}
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
