"use client";

import { Portal } from "@headlessui/react";
import { comparisonTableData } from "data/home/homePageData";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

function Tooltip({
  content,
  label,
  targetRef,
  onMouseEnter,
  onMouseLeave,
}: {
  content: string;
  label: string;
  targetRef: React.RefObject<HTMLButtonElement | null>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      setCoords({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [targetRef]);

  return (
    <Portal>
      <div
        style={{
          position: "absolute",
          top: coords.top,
          left: coords.left,
          zIndex: 9999,
          pointerEvents: "none",
        }}
      >
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="pointer-events-auto"
          style={{
            position: "absolute",
            bottom: "100%", // Position relative to the button
            left: 0,
            paddingBottom: "12px", // Safe area to bridge the gap
            transform: "translateY(0%)",
          }}
        >
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="w-[320px] bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-neutral-100 p-5 origin-bottom-left"
          >
            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                {label}
              </h4>
              <p className="text-xs leading-relaxed text-neutral-600 font-medium whitespace-pre-line">
                {content}
              </p>
            </div>
            {/* Tooltip Arrow */}
            <div className="absolute left-2 top-full w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white" />
          </motion.div>
        </div>
      </div>
    </Portal>
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
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showTooltip = (index: number) => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    setActiveTooltip(index);
  };

  const hideTooltip = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setActiveTooltip(null);
    }, 150); // Slightly longer delay for stability
  };

  // Select the correct data set based on the active tab
  const activeSupplements =
    activeTab === 0 ? supplementsMolecules : supplementsBrands;

  return (
    <section className="w-full bg-[#f5f2ee] py-12 md:py-16">
      <div className="mx-auto max-w-[1440px] px-4 md:px-2">
        <h2 className="mb-10 text-center text-[1.5rem]  text-[#1a3319] md:text-[2.75rem] tracking-tight">
          {title}
        </h2>
        {/* Centered Header & Controls */}
        <div className="mb-12 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
            {tabLabel}
          </span>

          <div className="flex items-center gap-1 rounded-lg bg-white/50 p-1 border border-neutral-200">
            {tabs.map((tab: string, i: number) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wide rounded-md transition-all duration-300 ${
                  activeTab === i
                    ? "bg-white text-neutral-900 ring-1 ring-black/5"
                    : "bg-transparent text-neutral-500 hover:text-neutral-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Table card */}
        <div className="overflow-hidden rounded-2xl bg-white border border-neutral-200">
          <div className="overflow-x-auto overflow-y-visible">
            <table className="w-full min-w-[720px] border-collapse">
              <thead>
                <tr>
                  <th className="w-[240px] min-w-[200px] border-b border-dotted border-neutral-300 bg-transparent p-5 text-left align-bottom" />
                  {activeSupplements.map((sup: any) => (
                    <th
                      key={sup.id}
                      className={`min-w-[110px] border-b border-l border-dotted border-neutral-300 p-5 text-center align-bottom first:border-l-0 ${
                        sup.highlighted ? "bg-neutral-50/80" : "bg-transparent"
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
                {criteria.map((criterion: any, rowIndex: number) => (
                  <tr key={criterion.label}>
                    <td className="border-b border-dotted border-neutral-300 p-5 text-sm text-neutral-800 align-middle">
                      <span className="relative inline-flex items-center gap-2.5">
                        <span>{criterion.label}</span>
                        {criterion.info && (
                          <div className="relative inline-block">
                            <button
                              ref={(el) => {
                                buttonRefs.current[rowIndex] = el || null;
                              }}
                              onMouseEnter={() => showTooltip(rowIndex)}
                              onMouseLeave={hideTooltip}
                              onClick={() =>
                                setActiveTooltip(
                                  activeTooltip === rowIndex ? null : rowIndex,
                                )
                              }
                              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neutral-400 bg-white text-[10px] font-semibold text-neutral-500 hover:border-black hover:text-black transition-colors"
                              aria-label="More info"
                            >
                              i
                            </button>

                            <AnimatePresence>
                              {activeTooltip === rowIndex && (
                                <Tooltip
                                  content={criterion.tooltipContent}
                                  label={criterion.tooltipLabel}
                                  targetRef={{
                                    current:
                                      buttonRefs.current[rowIndex] ?? null,
                                  }}
                                  onMouseEnter={() => showTooltip(rowIndex)}
                                  onMouseLeave={hideTooltip}
                                />
                              )}
                            </AnimatePresence>
                          </div>
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
        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-black text-white px-10 py-4 rounded-full text-sm font-semibold border border-transparent hover:border-black transition-all hover:bg-white hover:text-black"
            >
              {ctaLabel}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
