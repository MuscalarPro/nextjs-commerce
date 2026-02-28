"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PlusIcon, MinusIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const ingredientsData = [
  {
    title: "Placebo Controlled Clinical Studies",
    content: "Our products undergo rigorous double-blind, placebo-controlled clinical trials to ensure maximum safety and proven efficacy. We work with leading research institutions to validate our ingredients.",
  },
  {
    title: "FDA GRAS",
    content: "Generally Recognized As Safe (GRAS) by the FDA. This designation indicates that our key ingredients have been adequately shown to be safe under the conditions of their intended use.",
  },
  {
    title: "NSF for Sports",
    content: "Certified by NSF Certified for Sport®, ensuring that our products do not contain any of the 280+ substances banned by major athletic organizations, making them safe for professional athletes.",
  },
  {
    title: "FSSC 22000",
    content: "We manufacture our products in facilities that are FSSC 22000 certified, representing the highest international standard for food safety management systems.",
  },
  {
    title: "SMETA",
    content: "Our supply chain and manufacturing processes comply with SMETA (Sedex Members Ethical Trade Audit), ensuring ethical trade practices, labor standards, and environmental management.",
  },
];

export function IngredientSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
       <section className="bg-[#f7f6f2] py-6 md:py-12">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8">
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl lg:p-2  md:text-4xl font-semibold text-gray-900 lg:ml-0 m-2">
            Rigorously tested and made from high-quality ingredients
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl md:text-base text-gray-700 w-full p-2">
            We believe that it's our responsibility to take the extra steps
            necessary to ensure that our products are safe and effective, and we
            are committed to upholding these high standards for all of our
            dietary supplements.
          </p>

          {/* Divider */}
          <div className="mt-8 border-t border-dotted border-gray-300" />

          {/* Accordion List */}
          <div className="mt-4">
            {ingredientsData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="border-b border-dotted border-gray-300">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
                  >
                    <span className={`text-xl lg:ml-4 font-medium transition-colors ${isOpen ? 'text-gray-900' : 'text-gray-800'}`}>
                      {item.title}
                    </span>
                    <span className="text-2xl lg:text-4xl lg:mr-6 font-light text-gray-400">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pt-2 text-base lg:text-lg text-gray-600 lg:ml-4 lg:pr-12">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-8 md:py-20 lg:py-16 mb-0">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div className="flex flex-col items-start text-left lg:mr-10">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
              7 placebo-controlled <br className="hidden md:block" />
              clinical studies
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed font-light max-w-xl">
              For over 15 years, we have pioneered meaningful scientific
              discoveries on Urolithin A and put them to the scrutiny of the
              scientific community by publishing in high impact, peer-reviewed
              journals.
            </p>

            <div className="mt-10 hover:scale-105 active:scale-95 transition-transform duration-200">
              <Link
                href="/studies"
                className="inline-flex items-center gap-3 bg-[#2b2b26] px-8 py-4 text-white text-xs font-bold uppercase tracking-[0.15em] rounded-full hover:bg-black transition-colors"
              >
                OUR STUDIES
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end w-full">
            <div className="relative w-full max-w-xl aspect-square">
              <Image
                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Muscalarpro_capsule.png?v=1770369222"
                alt="MuscalarPro Capsule"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      </>
  );
}
