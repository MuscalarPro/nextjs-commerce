"use client";

import Link from "next/link";
import { useState } from "react";

const faqData = [
  {
    question: "What is Musclespan, and how does M3 support it?",
    answer:
      "Musclespan is the duration of functional muscle strength and mobility across life, predicting longevity better than BMI grip strength cuts mortality 50%. M3's UA boosts endurance 41–95%, SPD autophagy for repair.[jamanetwork +3]",
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

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-4 md:px-2">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: Title */}
          <div>
            <h2 className="text-[1rem] md:text-[2.75rem] font-normal leading-[1.08] tracking-[-0.02em]">
              Questions? We&apos;re here to help.
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
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border-b border-neutral-300 last:border-0"
                >
                  <button
                    onClick={() => handleToggle(index)}
                    className="flex w-full items-center justify-between py-4 text-left transition-colors hover:text-neutral-700"
                  >
                    <p className="text-base font-sans font-medium text-black">
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
          </div>
        </div>
      </div>
    </div>
  );
}
