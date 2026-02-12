"use client";

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function OurStudiesSection() {
  return (
    <section className="w-full bg-neutral-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-neutral-500">
              Science & Research
            </span>
            <h2 className="mb-6 text-4xl font-normal text-neutral-900 sm:text-5xl md:text-6xl">
              15+ years of research
            </h2>
            <p className="max-w-lg text-lg leading-relaxed text-neutral-600 sm:text-xl">
              Our products are backed by rigorous scientific studies. We believe
              in transparency and validating our efficacy through peer-reviewed
              research.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <Link
              href="/studies"
              className="group inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-base font-bold text-white transition-all hover:bg-neutral-800"
            >
              See study details
              <ArrowLongRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="mt-20 border-t border-neutral-200 pt-10">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-neutral-400">
            As seen in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 grayscale opacity-60">
            {/* Text placeholders for logos since we don't have assets. 
                 In a real scenario, these would be <Image> components. */}
            <span className="text-xl font-bold text-neutral-800">
              Nature Metabolism
            </span>
            <span className="text-xl font-bold text-neutral-800">
              JAMA Network Open
            </span>
            <span className="text-xl font-bold text-neutral-800">
              Cell Reports
            </span>
            <span className="text-xl font-bold text-neutral-800">
              Nature Aging
            </span>
            <span className="text-xl font-bold text-neutral-800">
              European Heart Journal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
