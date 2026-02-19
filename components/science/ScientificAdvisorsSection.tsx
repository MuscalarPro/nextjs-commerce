"use client";

import { expertsList, type Expert } from "data/expertTestimonialData";
import Image from "next/image";
import { useState } from "react";

function ExpertCard({ expert }: { expert: Expert }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col group cursor-pointer">
      {/* Image Container */}
      <div className="relative w-full aspect-[4/5] mb-2 bg-neutral-100 overflow-hidden">
        {!imageError ? (
          <Image
            src={expert.portraitSrc}
            alt={expert.name}
            fill
            className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-200 text-neutral-300">
            <span className="sr-only">{expert.name}</span>
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
          </div>
        )}

        {/* Fallback Icon (always behind image if not error) */}
        {!imageError && (
          <div className="absolute inset-0 -z-10 flex items-center justify-center text-neutral-300">
            <span className="sr-only">{expert.name}</span>
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <div className="flex justify-between items-start mb-1 h-[48px]">
          <h4 className="font-bold text-black text-lg leading-tight whitespace-pre-line">
            {expert.name}
          </h4>
          <span className="text-neutral-400 text-xl leading-none font-light group-hover:text-black transition-colors">
            +
          </span>
        </div>

        <div className="text-sm font-normal text-neutral-500 leading-tight">
          {Array.isArray(expert.title) ? (
            expert.title.map((r, i) => <p key={i}>{r}</p>)
          ) : (
            <p>{expert.title}</p>
          )}
        </div>

        <p className="mt-4 text-sm text-neutral-500 leading-relaxed font-light">
          {expert.quote}
        </p>
      </div>
    </div>
  );
}

export function ScientificAdvisorsSection() {
  return (
    <section className="w-full bg-white py-10 md:py-20 border-t border-neutral-200">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-20 mb-16 md:mb-20">
          <h2 className="text-[1.8rem] md:text-[2.5rem] leading-[1.1] font-normal text-black tracking-tight max-w-2xl">
            All made possible by a team of leading scientists
          </h2>
          <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-xl self-end md:self-start">
            We are supported by the knowledge and guidance of an accomplished
            group of scientific and clinical advisors with expertise spanning
            microbiome science, genomics, metabolomics, gastroenterology,
            immunology, nutrition, dermatology and human clinical research.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-neutral-200 mb-10 md:mb-12" />

        {/* Subheader */}
        <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-8 md:mb-12">
          SCIENTIFIC AND CLINICAL ADVISORS
        </h3>

        {/* Grid: Fixed to 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {expertsList.map((expert, index) => (
            <ExpertCard key={index} expert={expert} />
          ))}
        </div>
      </div>
    </section>
  );
}
