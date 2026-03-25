"use client";

import { MinusIcon, PlusIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Study } from "lib/types";
import { useState } from "react";

export function StudyAccordionItem({ study }: { study: Study }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-neutral-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start justify-between py-6 text-left transition-colors  sm:py-8"
      >
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-12 md:gap-8">
          {/* Year */}
          <div className="md:col-span-2">
            <span className="text-xs font-semibold uppercase text-neutral-500">
              {study.year}
            </span>
          </div>

          {/* Title */}
          <div className="md:col-span-7">
            <h3 className="heading-h3 text-neutral-900 leading-[1.2] ">
              {study.title}
            </h3>
            <div className="mt-2 flex items-center gap-2">
               <span className="text-[10px]  px-2 py-0.5 rounded-full border border-[#d85c41]/10">
                {study.label}
              </span>
            </div>
          </div>

          {/* Journal */}
          <div className="md:col-span-2">
            <span className="text-sm font-medium text-neutral-600 md:text-base ">
              {study.journal}
            </span>
          </div>

          {/* Icon */}
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
            {/* Spacer */}
            <div className="hidden md:col-span-2 md:block"></div>

            <div className="flex flex-col gap-6 md:col-span-7">
              <p className="body-text text-neutral-600 leading-relaxed">
                {study.summary}
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-neutral-100">
                <span className="text-xs font-medium text-neutral-400">
                  {study.authors}
                </span>
                
                {study.pubmedUrl && (
                  <a
                    href={study.pubmedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-[#d85c41] transition-colors group"
                  >
                    View on PubMed
                    <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
