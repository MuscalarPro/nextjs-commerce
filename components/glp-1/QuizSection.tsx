"use client";

import Image from "next/image";
import Link from "next/link";

export function QuizSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 py-0 text-center">
      <div className="mb-6">
        <span className="mb-4 inline-block rounded-full bg-[#666666] px-5 py-1.5 text-[12px] font-semibold uppercase tracking-wider text-white">
          FREE · 2 MINUTES · PERSONALIZED RESULTS
        </span>
        <h2 className="mb-4 text-[38px]  leading-[1.1]  md:text-[54px] tracking-tight">
          What&apos;s your musclespan <br className="hidden md:block" />
          <span className="text-[#169E6F]">risk level?</span>
        </h2>
        <p className="mx-auto text-sm md:text-lg leading-relaxed text-neutral-600 ">
          Answer 6 questions. Get a personalized protocol built around your{" "}
          <br className="hidden md:block" />
          GLP-1, your goals, and your body in under 2 minutes.
        </p>
      </div>

      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[28px] bg-[#3d2419] p-6 md:px-8 md:py-7 text-white min-h-[230px] flex flex-col md:block">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/fcv_bdfcb_df.png?v=1777895211"
            alt="Quiz Background"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 text-left md:max-w-[55%] flex flex-col justify-between h-full md:h-[200px]">
          <div>
            <span className="mb-4 inline-block w-fit rounded-full bg-[#d2f392] px-4 py-1 text-[10px] font-bold uppercase text-[#1a3b1a]">
              MUSCLESPAN PROTOCOL FINDER
            </span>

            <h3 className="text-[28px] md:text-[32px] leading-[1.05] tracking-tight font-medium text-white">
              Take the Musclespan Quiz
            </h3>

            <p className="mt-2 md:mt-1 text-[14px] leading-tight text-white/85 max-w-md">
              Discover your risk level, get a matched protocol, and unlock a
              personalized discount – in 6 questions.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {["2 minutes", "6 questions", "Free protocol report"].map(
              (tag, i) => (
                <span
                  key={i}
                  className="rounded-full bg-white/15 border border-white/15 px-3 py-1 text-[10px] font-medium text-white/90"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="relative z-30 mt-6 md:absolute md:right-12 md:top-1/2 md:-translate-y-1/2 md:mt-0">
          <Link
            href="/quiz"
            className="inline-flex w-full md:w-auto justify-center items-center gap-1 rounded-full bg-white px-5 py-3 text-[14px] font-semibold text-black hover:bg-neutral-100 active:scale-95 shadow-lg"
          >
            Start the quiz <span className="font-bold">→</span>
          </Link>
        </div>
      </div>

      <div className="mt-4 flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-neutral-200 py-6">
        <div className="flex flex-col items-center px-12 py-6 md:py-0">
          <p className="text-[40px] md:text-[48px] font-normal text-black tracking-tight">
            12,847
          </p>
          <p className="text-[14px] font-medium text-neutral-700">
            Protocols matched
          </p>
        </div>
        <div className="flex flex-col items-center px-12 py-8 md:py-0">
          <p className="text-[40px] md:text-[48px] font-normal text-black tracking-tight">
            94%
          </p>
          <p className="text-[14px] font-medium text-neutral-700">
            Said it felt personalized
          </p>
        </div>
        <div className="flex flex-col items-center px-12 py-8 md:py-0">
          <p className="text-[40px] md:text-[48px] font-normal text-black tracking-tight">
            2 min
          </p>
          <p className="text-[14px] font-medium text-neutral-700">
            Average completion time
          </p>
        </div>
      </div>
    </section>
  );
}
