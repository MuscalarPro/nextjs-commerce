"use client";

import { useState } from "react";

const faqData = [
  {
    question: "What is Musclespan, and how does M3 support it?",
    answer:
      "Musclespan is the duration of functional muscle strength and mobility across life, predicting longevity better than BMI—grip strength cuts mortality 50%. M3's UA boosts endurance 41–95%, SPD autophagy for repair.[jamanetwork +3]",
  },
  {
    question: "Does Urolithin A in M3 really improve mitochondrial health?",
    answer:
      "Yes, JAMA RCT (1000mg UA) showed mitophagy activation, reducing dysfunction markers like acylcarnitines; 90% achieved stable mito function in 21 days.[jamanetwork +1]",
  },
  {
    question: "Can M3 enhance muscle strength and hypertrophy?",
    answer:
      "UA delivers ~12% strength gains and hypertrophy via mito biogenesis in RCTs; ideal for resistance training and Musclespan.[pubmed.ncbi.nlm.nih +1]",
  },
  {
    question: "How does M3 boost peak endurance, HRV, and VO2max?",
    answer:
      "UA potentiates VO2max and fatigue resistance (+41% leg contractions); supports HRV via uncoupling for better recovery.[jamanetwork +1]",
  },
  {
    question: "Is M3 good for brain health and nootropic intelligence?",
    answer:
      "SPD delays brain aging, enhances spatial memory/deep learning via autophagy (25% lifespan extension models); SAC protects neurons.[aging-us +1]",
  },
  {
    question: "What makes M3's formulation superior and safe?",
    answer:
      "Patented and proven on Human clinical trial double-blinded placebo-controlled with clinical doses, third-party tested (ICP-MS metals, PCR microbes, NSF banned substances), FSSAI cGMP, vegan/non-GMO.",
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
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-4 text-sm leading-relaxed text-neutral-800">
                        {item.answer}
                      </div>
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

