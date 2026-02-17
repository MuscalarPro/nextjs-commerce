"use client";

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FAQCategory, faqData, FAQItem } from "../../data/faq";

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>(
    faqData[0]?.title || "",
  );

  const toggleAccordion = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  const scrollToCategory = (title: string) => {
    const element = document.getElementById(
      title.toLowerCase().replace(/\s+/g, "-"),
    );
    if (element) {
      const offset = 100; // Account for sticky nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setActiveCategory(title);
  };

  // Update active category on scroll
  useEffect(() => {
    const handleScroll = () => {
      const categories = faqData.map((cat: FAQCategory) =>
        cat.title.toLowerCase().replace(/\s+/g, "-"),
      );

      for (const id of categories) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            const originalTitle = faqData.find(
              (cat: FAQCategory) =>
                cat.title.toLowerCase().replace(/\s+/g, "-") === id,
            )?.title;
            if (originalTitle) setActiveCategory(originalTitle);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-white pt-32 md:pt-48 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-semibold text-black mb-12 tracking-tight leading-[1.1]"
          >
            Frequently Asked <br /> Questions
          </motion.h1>
        </div>
      </section>

      {/* Sticky Category Navigation */}
      <div className="sticky top-20 md:top-25 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 overflow-x-auto no-scrollbar py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-start md:justify-center gap-6 md:gap-10 h-16 whitespace-nowrap">
            {faqData.map((category: FAQCategory) => (
              <button
                key={category.title}
                onClick={() => scrollToCategory(category.title)}
                className={`text-[0.9rem] md:text-[0.95rem] font-medium transition-all duration-300 h-full ${
                  activeCategory === category.title
                    ? "text-black border-b-2 border-black px-1"
                    : "text-gray-400 hover:text-gray-600 px-1"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-16 md:py-32 max-w-7xl">
        <div className="flex flex-col gap-20 md:gap-40">
          {faqData.map((category: FAQCategory) => (
            <div
              key={category.title}
              id={category.title.toLowerCase().replace(/\s+/g, "-")}
              className="grid md:grid-cols-12 gap-8 md:gap-16 scroll-mt-32 md:scroll-mt-40"
            >
              {/* Left Column - Category */}
              <div className="md:col-span-4">
                <h2 className="text-3xl md:text-[2.75rem] font-medium text-black md:sticky md:top-45 h-fit leading-tight">
                  {category.title}
                  <sup className="text-red-500 text-sm md:text-lg ml-1 font-normal">
                    ({category.items.length})
                  </sup>
                </h2>
              </div>

              {/* Right Column - Accordion */}
              <div className="md:col-span-8">
                <div className="border-t border-gray-100">
                  {category.items.map((faq: FAQItem) => (
                    <div key={faq.id} className="border-b border-gray-100">
                      <button
                        onClick={() => toggleAccordion(faq.id)}
                        className="flex justify-between items-center w-full text-left py-6 md:py-10 group transition-colors"
                        aria-expanded={openItem === faq.id}
                      >
                        <span className="text-lg md:text-[1.35rem] text-black font-normal pr-8 md:pr-12 leading-relaxed">
                          {faq.question}
                        </span>
                        <span className="flex-shrink-0 text-gray-300 group-hover:text-black transition-colors">
                          {openItem === faq.id ? (
                            <MinusIcon className="w-5 h-5 md:w-6 md:h-6 stroke-1" />
                          ) : (
                            <PlusIcon className="w-5 h-5 md:w-6 md:h-6 stroke-1" />
                          )}
                        </span>
                      </button>
                      <AnimatePresence>
                        {openItem === faq.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.4,
                              ease: [0.23, 1, 0.32, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <p className="pb-8 md:pb-12 text-gray-600 leading-relaxed text-[1rem] md:text-[1.15rem] max-w-3xl">
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
    </div>
  );
}
