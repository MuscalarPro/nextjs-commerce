"use client";

import {
  ChevronRightIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
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
      const offset = 140; // Account for sticky nav + extra breathe
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setActiveCategory(title);
  };

  useEffect(() => {
    const handleScroll = () => {
      const categories = faqData.map((cat: FAQCategory) =>
        cat.title.toLowerCase().replace(/\s+/g, "-"),
      );

      for (const id of categories) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
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
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-16 md:pt-48 md:pb-24 px-4 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
           
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[2.5rem] md:text-[5rem] font-normal text-black mb-10 tracking-tight leading-[1.05]"
            >
             Frequently Asked Questions
            </motion.h1>
         
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <button className="bg-black text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-neutral-800 transition-all flex items-center gap-3 mx-auto shadow-xl">
                meet the team
                <ChevronRightIcon className="w-5 h-5 stroke-[3]" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

     

      {/* Sticky Category Navigation */}
      <div className="sticky top-0 md:top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-neutral-100 overflow-x-auto no-scrollbar py-2">
        <div className="container mx-auto px-4 max-w-[1440px]">
          <div className="flex items-center justify-start md:justify-center gap-8 md:gap-12 h-16 whitespace-nowrap">
            {faqData.map((category: FAQCategory) => (
              <button
                key={category.title}
                onClick={() => scrollToCategory(category.title)}
                className={`text-[0.95rem] font-bold tracking-tight transition-all duration-300 h-full flex items-center relative ${
                  activeCategory === category.title
                    ? "text-black"
                    : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                {category.title}
                {activeCategory === category.title && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-2 left-0 right-0 h-[3px] bg-black rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-24 md:py-40 max-w-[1440px]">
        <div className="flex flex-col gap-32 md:gap-56">
          {faqData.map((category: FAQCategory) => (
            <div
              key={category.title}
              id={category.title.toLowerCase().replace(/\s+/g, "-")}
              className="grid md:grid-cols-12 gap-12 md:gap-24 scroll-mt-32"
            >
              {/* Left Column - Category */}
              <div className="md:col-span-4">
                <h2 className="text-[2.5rem] md:text-[4rem] font-normal text-black md:sticky md:top-32 h-fit leading-[1.1] tracking-tighter">
                  {category.title}
                  <sup className="text-neutral-300 text-xl font-light ml-3">
                    {category.items.length.toString().padStart(2, "0")}
                  </sup>
                </h2>
              </div>

              {/* Right Column - Accordion */}
              <div className="md:col-span-8">
                <div className="border-t border-neutral-200">
                  {category.items.map((faq: FAQItem) => (
                    <div key={faq.id} className="border-b border-neutral-200">
                      <button
                        onClick={() => toggleAccordion(faq.id)}
                        className="flex justify-between items-start w-full text-left py-10 md:py-14 group transition-colors"
                        aria-expanded={openItem === faq.id}
                      >
                        <span className="text-xl md:text-[1.75rem] text-black font-normal pr-12 leading-snug tracking-tight">
                          {faq.question}
                        </span>
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center transition-all duration-500 ${openItem === faq.id ? "bg-black border-black text-white" : "group-hover:border-black"}`}
                        >
                          {openItem === faq.id ? (
                            <MinusIcon className="w-5 h-5 stroke-[2]" />
                          ) : (
                            <PlusIcon className="w-5 h-5 stroke-[2]" />
                          )}
                        </div>
                      </button>
                      <AnimatePresence>
                        {openItem === faq.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.5,
                              ease: [0.23, 1, 0.32, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="pb-12 md:pb-16 text-neutral-600 leading-relaxed text-[1.1rem] md:text-[1.25rem] max-w-3xl font-light space-y-6">
                              {faq.answer.split("\n").map((line, i) => (
                                <p key={i}>{line}</p>
                              ))}
                            </div>
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

      {/* WHAT WE BELIEVE Footer Section */}
      <section className="bg-black text-white py-32 md:py-48 px-4 text-center overflow-hidden">
        <div className="container mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-sm font-bold tracking-[0.3em] text-neutral-500 uppercase mb-12"
          >
            WHAT WE BELIEVE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[2.5rem] md:text-[4.5rem] font-normal leading-[1.1] tracking-tight mb-12"
          >
            It is our belief that if you protect your muscle, you can protect
            every decade of your life.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-xl md:text-2xl text-neutral-400 font-light leading-relaxed mb-16"
          >
            <p>
              However, mainstream supplements have not helped many of us do
              that.
            </p>
            <p>
              They are often underdosed, untested in humans, and miss the
              cellular picture entirely.
            </p>
            <p className="text-white font-medium">
              We built Muscularpro™ [M3] to change that.
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button className="bg-white text-black px-12 py-6 rounded-full text-xl font-bold hover:bg-neutral-200 transition-all flex items-center gap-3 mx-auto">
              Start your M3 Protocol
              <ChevronRightIcon className="w-5 h-5 stroke-[3]" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
