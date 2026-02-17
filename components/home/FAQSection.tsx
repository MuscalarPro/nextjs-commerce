"use client";

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { homeFaqData } from "../../data/faq";

export function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-[1440px] px-4 md:px-2">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <h2 className="text-[1rem] md:text-[2.75rem] font-normal leading-[1.08] tracking-[-0.02em] text-black">
            Frequently Asked Questions
          </h2>
          <Link href="/faqs">
            <button className="bg-black text-white rounded-full px-8 py-3 font-semibold transition-all hover:bg-white hover:text-black border border-black whitespace-nowrap">
              View All FAQ
            </button>
          </Link>
        </div>

        <div className="border-t border-gray-200 max-w-4xl mx-auto">
          {homeFaqData.map((faq) => (
            <div key={faq.id} className="border-b border-gray-200">
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="flex justify-between items-center w-full text-left py-6 group hover:bg-gray-50/50 transition-colors px-4 -mx-4 rounded-lg"
                aria-expanded={openItem === faq.id}
              >
                <span className="text-lg text-black font-medium pr-8">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-gray-400 transition-transform duration-300">
                  {openItem === faq.id ? (
                    <MinusIcon className="w-5 h-5" />
                  ) : (
                    <PlusIcon className="w-5 h-5" />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {openItem === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-gray-600 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
