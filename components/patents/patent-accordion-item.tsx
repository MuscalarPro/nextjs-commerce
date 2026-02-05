"use client";

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Patent } from "lib/types";
import { useState } from "react";

export function PatentAccordionItem({ patent }: { patent: Patent }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-neutral-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start justify-between py-6 text-left transition-colors hover:bg-neutral-50 sm:py-8"
      >
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-12 md:gap-8">
          {/* Filing Date / Number */}
          <div className="md:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              {patent.number}
            </span>
          </div>

          {/* Title */}
          <div className="md:col-span-7">
            <h3 className="text-lg font-bold leading-tight text-neutral-900 sm:text-xl md:text-2xl">
              {patent.title}
            </h3>
          </div>

          {/* Status */}
          <div className="md:col-span-2">
            <span className="text-sm font-medium text-neutral-600 md:text-base">
              {patent.status}
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
                {patent.abstract}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
