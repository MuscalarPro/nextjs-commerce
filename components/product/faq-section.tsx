"use client";

import { useState } from "react";

const faqData = [
  {
    question: "When will I feel something?",
    answer:
      "Many customers report feeling improvements within the first week of taking DS-01® Daily Synbiotic. You may notice reduced bloating and gas, improved regularity, and overall digestive comfort. However, individual results may vary, and some people may experience benefits more gradually over 2-4 weeks as the probiotic strains establish themselves in your gut microbiome.",
  },
  {
    question: "How do I take DS-01® Daily Synbiotic?",
    answer:
      "Take 2 capsules daily, with or without food, day or night. For best results, we recommend taking them at the same time each day to establish a consistent routine. You can take them with water, and they're designed to be gentle on your stomach, so they can be taken on an empty stomach if preferred.",
  },
  {
    question: "Why should I take DS-01® Daily Synbiotic?",
    answer:
      "DS-01® Daily Synbiotic is clinically proven to support digestive health, reduce bloating and gas, improve regularity, and enhance overall gut microbiome diversity. It contains 24 clinically studied probiotic strains, is engineered for precision delivery to the colon, and has been validated in 4 placebo-controlled clinical trials. Additionally, it's third-party tested for purity and formulated to meet strict dietary requirements.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [viewAll, setViewAll] = useState(false);

  const handleToggle = (index: number) => {
    if (viewAll) {
      if (openIndex === index) {
        setOpenIndex(null);
      } else {
        setOpenIndex(index);
      }
      setViewAll(false);
    } else {
      if (openIndex === index) {
        setOpenIndex(null);
      } else {
        setOpenIndex(index);
      }
    }
  };

  const handleViewAll = () => {
    setViewAll(!viewAll);
    if (viewAll) {
      setOpenIndex(null);
    }
  };

  return (
    <div className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: Title */}
          <div>
            <h2 className="text-3xl font-bold text-black md:text-4xl">
              Questions? We&apos;re here to help.
            </h2>
          </div>

          {/* Right: FAQ List */}
          <div className="space-y-0">
            {faqData.map((item, index) => {
              const isOpen = viewAll || openIndex === index;

              return (
                <div
                  key={index}
                  className="border-b border-neutral-300 last:border-0"
                >
                  <button
                    onClick={() => handleToggle(index)}
                    className="flex w-full items-center justify-between py-4 text-left transition-colors hover:text-neutral-700"
                  >
                    <p className="text-base font-medium text-black">
                      {item.question}
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
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pb-4 text-sm leading-relaxed text-neutral-800">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="mt-4 flex items-center gap-2">
              <svg
                className="h-5 w-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <button
                onClick={handleViewAll}
                className="text-sm font-medium text-black underline transition-colors hover:text-neutral-700"
              >
                {viewAll ? "Collapse All" : "View All"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

