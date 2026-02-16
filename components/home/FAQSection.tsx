"use client";

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FAQCategory, faqData, FAQItem } from "../../data/faq";

export function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  const faqCategories: FAQCategory[] = faqData;

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Header - Often hidden or minimal in this specific layout style, but keeping per previous stricture if needed, 
            or we can make it cleaner. The image shows categories as the main headers. 
            I will keep the existing header but arguably it could be removed if the user wants purely the list. 
            I'll keep it for context. */}
        {/* <div className="mb-20">
          <h2 className="text-[2rem] leading-[1.08] tracking-[-0.02em] text-black md:text-[3rem]">
            Frequently Asked Questions
          </h2>
        </div> 
           The user's image shows just the categories on the left. I will keep the section header but maybe smaller or standard. 
        */}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-6">
          <h2 className=" text-[2rem] leading-[1.08] tracking-[-0.02em] text-black md:text-[3rem]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-24">
          {faqCategories.map((category: FAQCategory, catIndex: number) => (
            <div key={catIndex} className="grid md:grid-cols-12 gap-10">
              {/* Left Column - Category */}
              <div className="md:col-span-4">
                <h3 className="text-[1rem] md:text-[1.5rem] font-medium text-black sticky top-30">
                  {category.title}
                </h3>
              </div>

              {/* Right Column - Accordion */}
              <div className="md:col-span-8">
                <div className="border-t border-gray-200">
                  {category.items.map((faq: FAQItem) => (
                    <div key={faq.id} className="border-b border-gray-200">
                      <button
                        onClick={() => toggleAccordion(faq.id)}
                        className="flex justify-between items-center w-full text-left py-6 group hover:bg-gray-50/50 transition-colors px-2 -mx-2 rounded-lg"
                        aria-expanded={openItem === faq.id}
                      >
                        <span className="text-lg text-black font-normal pr-8">
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
                            <p className="pb-8 text-gray-600 leading-relaxed text-base max-w-3xl px-2">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
