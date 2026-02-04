"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

type Study = {
  id: string;
  date: string;
  title: string;
  journal: string;
  abstract: string;
  paperUrl?: string;
  blogUrl?: string;
};

const clinicalStudies: Study[] = [
  {
    id: "c1",
    date: "MAY 19, 2022",
    title: "Urolithin A improves muscle strength, exercise performance, and biomarkers of mitochondrial health in a randomized trial in middle-aged adults",
    journal: "Cell Reports Medicine",
    abstract: "This randomized, double-blind, placebo-controlled clinical trial demonstrates that daily supplementation with 500mg and 1000mg of Urolithin A significantly improves muscle strength and exercise performance in middle-aged adults. The study also confirms the safety and bioavailability of long-term Urolithin A supplementation.",
    paperUrl: "#",
  },
  {
    id: "c2",
    date: "JAN 20, 2022",
    title: "Impact of Urolithin A on mitochondrial health and muscle function in older adults",
    journal: "JAMA Network Open",
    abstract: "A clinical study showing that Urolithin A supplementation improves mitochondrial health and muscle endurance in older adults. The findings suggest that Urolithin A could be a promising strategy to counteract age-associated muscle decline.",
    paperUrl: "#",
  },
  {
    id: "c3",
    date: "JUN 14, 2021",
    title: "The effect of Urolithin A on muscle function in the elderly",
    journal: "Nature Metabolism",
    abstract: "Research indicating that Urolithin A induces mitophagy and prevents the accumulation of dysfunctional mitochondria with age and extends lifespan in C. elegans and increases muscle function in rodents.",
    paperUrl: "#",
  },
];

const preClinicalStudies: Study[] = [
  {
    id: "p1",
    date: "APR 12, 2020",
    title: "Urolithin A induces mitophagy and prolongs lifespan in C. elegans and increases muscle function in rodents",
    journal: "Nature Medicine",
    abstract: "This foundational study identifies Urolithin A as a first-in-class natural compound that induces mitophagy both in vitro and in vivo following oral consumption. It shows improved muscle function and exercise capacity in two different mouse models of aging.",
    paperUrl: "#",
  },
];

function StudyAccordionItem({ study }: { study: Study }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-neutral-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start justify-between py-6 text-left transition-colors hover:bg-neutral-50 sm:py-8"
      >
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-12 md:gap-8">
          {/* Date */}
          <div className="md:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              {study.date}
            </span>
          </div>

          {/* Title */}
          <div className="md:col-span-7">
            <h3 className="text-lg font-bold leading-tight text-neutral-900 sm:text-xl md:text-2xl">
              {study.title}
            </h3>
          </div>

          {/* Journal */}
          <div className="md:col-span-2">
            <span className="text-sm font-medium text-neutral-600 md:text-base">
              {study.journal}
            </span>
          </div>
          
          {/* Icon - Hidden on mobile in grid, moved to right side flex */}
          <div className="hidden md:ml-auto md:col-span-1 md:flex md:items-center md:justify-end">
             {isOpen ? (
              <MinusIcon className="h-6 w-6 text-neutral-400" />
            ) : (
              <PlusIcon className="h-6 w-6 text-neutral-400" />
            )}
          </div>
        </div>
        
        {/* Mobile Icon */}
        <div className="ml-4 md:hidden">
            {isOpen ? (
              <MinusIcon className="h-6 w-6 text-neutral-400" />
            ) : (
              <PlusIcon className="h-6 w-6 text-neutral-400" />
            )}
        </div>
      </button>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] pb-8" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            {/* Spacer to align with text */}
            <div className="hidden md:col-span-2 md:block"></div>
            
            <div className="flex flex-col gap-6 md:col-span-7">
              <p className="text-base leading-relaxed text-neutral-600">
                {study.abstract}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {study.paperUrl && (
                  <a
                    href={study.paperUrl}
                    className="inline-flex items-center gap-2 border-b border-black pb-0.5 text-sm font-bold uppercase tracking-wide text-black transition-opacity hover:opacity-70"
                  >
                    Read paper
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  </a>
                )}
                {study.blogUrl && (
                  <a
                    href={study.blogUrl}
                    className="inline-flex items-center gap-2 border-b border-transparent pb-0.5 text-sm font-bold uppercase tracking-wide text-neutral-500 hover:text-black"
                  >
                    Read blog
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StudiesPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-3xl md:mb-24">
          <h1 className="mb-6 font-serif text-5xl font-normal text-neutral-900 sm:text-6xl md:text-7xl">
            Our studies
          </h1>
          <p className="text-lg leading-relaxed text-neutral-600 sm:text-xl md:text-2xl">
            More than 15 years of advanced research has explored the efficacy of
            our compounds, and their effects have been validated in numerous
            peer-reviewed pre-clinical and clinical trials.
          </p>
        </div>

        {/* Clinical Studies */}
        <div className="mb-20">
          <h2 className="mb-8 border-b border-neutral-200 pb-4 text-sm font-bold uppercase tracking-widest text-neutral-900">
            Clinical studies
          </h2>
          <div>
            {clinicalStudies.map((study) => (
              <StudyAccordionItem key={study.id} study={study} />
            ))}
          </div>
        </div>

        {/* Pre-clinical Studies */}
        <div>
          <h2 className="mb-8 border-b border-neutral-200 pb-4 text-sm font-bold uppercase tracking-widest text-neutral-900">
            Pre-clinical studies
          </h2>
          <div>
            {preClinicalStudies.map((study) => (
              <StudyAccordionItem key={study.id} study={study} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
