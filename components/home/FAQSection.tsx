"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What should I expect during a blood draw?",
    answer: "During a blood draw, a phlebotomist will use a small needle to collect blood samples. The process is quick, usually taking less than 15 minutes. We ensure a comfortable and professional environment."
  },
  {
    question: "How do I prepare for a blood draw?",
    answer: "You typically need to fast for 8-12 hours before your appointment. Drink plenty of water to stay hydrated, which makes the draw easier. Avoid alcohol and strenuous exercise 24 hours prior."
  },
  {
    question: "What should I do after my blood draw?",
    answer: "Keep the bandage on for at least 15 minutes. Drink water and eat a snack. Avoid heavy lifting with that arm for the rest of the day."
  },
  {
    question: "How do I book a blood draw with Superpower?",
    answer: "You can book directly through our app or website after purchasing your membership. We have partner locations nationwide and mobile phlebotomy options in select areas."
  },
  {
    question: "Where can I take my blood test?",
    answer: "We have a network of over 2,000 certified labs across the country. You can choose a location most convenient for you during the booking process."
  }
];

export function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  const faqCategories = [
    {
      title: "How it works",
      items: [
        {
          id: "works-1",
          question: "What should I expect during a blood draw?",
          answer: "During a blood draw, a phlebotomist will use a small needle to collect blood samples. The process is quick, usually taking less than 15 minutes. We ensure a comfortable and professional environment."
        },
        {
          id: "works-2",
          question: "How do I prepare for a blood draw?",
          answer: "You typically need to fast for 8-12 hours before your appointment. Drink plenty of water to stay hydrated, which makes the draw easier. Avoid alcohol and strenuous exercise 24 hours prior."
        },
        {
          id: "works-3",
          question: "What should I do after my blood draw?",
          answer: "Keep the bandage on for at least 15 minutes. Drink water and eat a snack. Avoid heavy lifting with that arm for the rest of the day."
        },
        {
          id: "works-4",
          question: "How do I book a blood draw with Superpower?",
          answer: "You can book directly through our app or website after purchasing your membership. We have partner locations nationwide and mobile phlebotomy options in select areas."
        },
        {
          id: "works-5",
          question: "Where can I take my blood test?",
          answer: "We have a network of over 2,000 certified labs across the country. You can choose a location most convenient for you during the booking process."
        }
      ]
    },
    {
      title: "Our testing",
      items: [
        {
          id: "testing-1",
          question: "Does Superpower replace my primary care provider?",
          answer: "No, Superpower is designed to complement your primary care. We provide advanced diagnostics and personalized insights, but we recommend maintaining a relationship with a PCP for acute care and standard check-ups."
        },
        {
          id: "testing-2",
          question: "How fast are blood test results and how do I read them?",
          answer: "Results typically arrive within 3-5 business days after your draw. You can access and read them directly in the Superpower app, where we provide clear explanations and actionable insights for each marker."
        },
        {
          id: "testing-3",
          question: "Does Superpower accept health insurance?",
          answer: "We do not accept insurance directly. However, we can provide itemized receipts (superbills) that you may submit to your insurance provider for potential out-of-network reimbursement, depending on your plan."
        },
        {
          id: "testing-4",
          question: "What if I want more than 1 blood test per year?",
          answer: "You can easily purchase additional test panels at any time through the app. Many members choose to re-test every 3-6 months to track their progress and adjust their protocols."
        }
      ]
    }
  ];

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
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="grid md:grid-cols-12 gap-10">
              {/* Left Column - Category */}
              <div className="md:col-span-4">
                <h3 className="text-2xl md:text-3xl font-medium text-black sticky top-8">{category.title}</h3>
              </div>

              {/* Right Column - Accordion */}
              <div className="md:col-span-8">
                <div className="border-t border-gray-200">
                  {category.items.map((faq) => (
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
