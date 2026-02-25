"use client";

import Link from "next/link";
import { useState } from "react";
import { homeFaqData } from "../../data/common/faq";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="w-full bg-white py-16 md:py-20 border-t border-gray-100">
      <div className="mx-auto max-w-[1440px] px-4 md:px-2">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: Title */}
          <div>
            <h2 className="text-[1rem] md:text-[2.75rem] font-normal leading-[1.08] tracking-[-0.02em] text-black">
              Frequently Asked Questions
            </h2>
            <div className="mt-8">
              <Link
                href="/faqs"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full text-sm font-semibold transition-all hover:bg-white hover:text-black hover:border hover:border-black"
              >
                <span>View All FAQs</span>
                <span aria-hidden="true" className="text-xs">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right: FAQ List */}
          <div className="space-y-0">
            {homeFaqData.map((faq) => {
              const isOpen = openIndex === faq.id;

              return (
                <div
                  key={faq.id}
                  className="border-b border-neutral-300 last:border-0"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="flex w-full items-center justify-between py-4 text-left transition-colors hover:text-neutral-700"
                  >
                    <p className="text-base font-sans font-medium text-black">
                      {faq.question}
                    </p>
                    <span
                      className={`text-xl font-light text-black transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-4 text-sm leading-relaxed text-neutral-800">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
