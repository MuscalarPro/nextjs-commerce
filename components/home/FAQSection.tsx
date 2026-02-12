"use client";

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What should I expect during a blood draw?",
    answer:
      "During a blood draw, a phlebotomist will use a small needle to collect blood samples. The process is quick, usually taking less than 15 minutes. We ensure a comfortable and professional environment.",
  },
  {
    question: "How do I prepare for a blood draw?",
    answer:
      "You typically need to fast for 8-12 hours before your appointment. Drink plenty of water to stay hydrated, which makes the draw easier. Avoid alcohol and strenuous exercise 24 hours prior.",
  },
  {
    question: "What should I do after my blood draw?",
    answer:
      "Keep the bandage on for at least 15 minutes. Drink water and eat a snack. Avoid heavy lifting with that arm for the rest of the day.",
  },
  {
    question: "How do I book a blood draw with Superpower?",
    answer:
      "You can book directly through our app or website after purchasing your membership. We have partner locations nationwide and mobile phlebotomy options in select areas.",
  },
  {
    question: "Where can I take my blood test?",
    answer:
      "We have a network of over 2,000 certified labs across the country. You can choose a location most convenient for you during the booking process.",
  },
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
          question: "What is MuscularPro M3 (Daily M3)?",
          answer:
            'MuscularPro M3 is a daily "MuscleSpan" supplement positioned for mitochondrial health, muscle strength, peak endurance (VO₂ max), and brain support.',
        },
        {
          id: "works-2",
          question: 'What does "MuscleSpan" mean?',
          answer:
            "MuscleSpan means building muscle that lasts strength and capacity you keep as you age, not just short-term aesthetics.",
        },
        {
          id: "works-3",
          question: "How does M3 work (simple explanation)?",
          answer:
            "M3 is framed as a mitochondria-first stack that supports cellular renewal pathways (mitophagy/autophagy) to help you perform, recover, and stay resilient.",
        },
        {
          id: "works-4",
          question: "Is M3 for strength training or endurance?",
          answer:
            "M3 is designed to cover both: strength plus peak endurance (VO₂ max), with added brain-ready support.",
        },
        {
          id: "works-5",
          question: "Is M3 a medicine?",
          answer:
            'No it\'s labeled "Not for medical use" and is not intended to diagnose, treat, cure, or prevent any disease.',
        },
      ],
    },
    {
      title: "MuscleSpan / HealthSpan / Lifespan",
      items: [
        {
          id: "span-1",
          question: "How does MuscleSpan relate to HealthSpan?",
          answer:
            "MuscleSpan is your day-to-day HealthSpan lever stronger muscle supports long-term function and performance.",
        },
        {
          id: "span-2",
          question: "Does M3 extend lifespan?",
          answer:
            "M3 references lifespan extension in models, not a guaranteed lifespan outcome in humans.",
        },
        {
          id: "span-3",
          question: 'What does "lifespan extended (models)" mean?',
          answer:
            "It means the effect was observed in research models, which doesn't automatically translate to the same result in people.",
        },
        {
          id: "span-4",
          question: 'Is M3 an "anti-aging" supplement?',
          answer:
            "M3 is muscle-centric first (MuscleSpan), using longevity-inspired mechanisms (mitochondria + autophagy language) to support long-term performance.",
        },
        {
          id: "span-5",
          question: "Is M3 for prevention?",
          answer:
            "Yes M3 is positioned for prevention and performance now, so you're building capacity you can keep.",
        },
      ],
    },
    {
      title: "Science & ingredients",
      items: [
        {
          id: "science-1",
          question: "What are the active ingredients per capsule?",
          answer:
            "Per 1-capsule serving: Punica granatum extract standardized to Urolithin A (500 mg), wheat germ extract standardized to spermidine (3 mg), and Allium sativum extract standardized to S-allyl cysteine (0.5 mg).",
        },
        {
          id: "science-2",
          question: "Why Urolithin A?",
          answer:
            "M3 frames Urolithin A as supporting mitophagy (mitochondrial renewal) as part of a mitochondria-first MuscleSpan approach.",
        },
        {
          id: "science-3",
          question: "Why spermidine?",
          answer:
            "M3 frames spermidine as supporting autophagy (cellular cleanup/renewal) as part of the same stack.",
        },
        {
          id: "science-4",
          question: "Why S-allyl cysteine (SAC)?",
          answer:
            "SAC is included as a standardized compound from Allium sativum extract in the formula.",
        },
        {
          id: "science-5",
          question: "What else is in the capsule?",
          answer:
            "The label lists a veg cellulose capsule shell plus excipients (e.g., microcrystalline cellulose, maize starch, magnesium stearate, etc.).",
        },
        {
          id: "science-6",
          question: "Does it contain added color?",
          answer:
            "The label states it contains permitted synthetic food colour.",
        },
        {
          id: "science-7",
          question: "Is there an RDA % listed?",
          answer:
            'The label notes %RDA is calculated based on ICMR/Codex guidelines, and for some ingredients "No RDA established."',
        },
      ],
    },
    {
      title: "Results & expectations",
      items: [
        {
          id: "results-1",
          question: "What benefits is M3 designed to support?",
          answer:
            "M3 is positioned to support cellular energy, muscle strength, peak endurance (VO₂ max), HRV/VO₂ max biomarker optimization, and brain support.",
        },
        {
          id: "results-2",
          question: "What outcomes does M3 cite?",
          answer:
            "M3 messaging references +41% peak endurance and +12% strength, plus HRV and VO₂ max biomarkers optimized.",
        },
        {
          id: "results-3",
          question: "Does M3 support hypertrophy?",
          answer:
            'M3 messaging includes "hypertrophy unlocked" as part of the MuscleSpan positioning.',
        },
        {
          id: "results-4",
          question: "Does M3 support focus and cognition?",
          answer:
            "M3 messaging includes nootropic-grade neuroprotection, spatial memory, and deep focus.",
        },
        {
          id: "results-5",
          question: "How long does it take to notice changes?",
          answer:
            "Timing varies by person and routine; consistency with daily use and training matters most.",
        },
        {
          id: "results-6",
          question: "Will everyone get the same results?",
          answer:
            "No responses vary, and M3 is not a medical product or a guaranteed outcome.",
        },
      ],
    },
    {
      title: "Usage & safety",
      items: [
        {
          id: "usage-1",
          question: "How do I take M3?",
          answer:
            "Take 1 capsule daily after meals, or as recommended by a healthcare professional.",
        },
        {
          id: "usage-2",
          question: "How many capsules are in one bottle?",
          answer: "60 capsules per container.",
        },
        {
          id: "usage-3",
          question: "Who is M3 for?",
          answer: "The label lists the target consumer group as adults.",
        },
        {
          id: "usage-4",
          question: "Can I take more than the recommended dose?",
          answer: "Do not exceed the recommended daily usage.",
        },
        {
          id: "usage-5",
          question: "How should I store it?",
          answer:
            "Store in a cool, dry place protected from light and moisture, at temperatures not exceeding 25°C.",
        },
        {
          id: "usage-6",
          question: "Any other label warnings?",
          answer:
            "Keep out of reach of children, and it should not be used as a substitute for a varied diet.",
        },
      ],
    },
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
                <h3 className="text-2xl md:text-3xl font-medium text-black sticky top-8">
                  {category.title}
                </h3>
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
