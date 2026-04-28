"use client";

import Image from "next/image";
import Link from "next/link";

export function QuizSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 py-24 text-center">
      <div className="mb-16">
        <span className="mb-8 inline-block rounded-full bg-[#666666] px-5 py-1.5 text-[12px] font-bold uppercase tracking-wider text-white">
          FREE · 2 MINUTES · PERSONALIZED RESULTS
        </span>
        <h2 className="mb-6 text-[38px]  leading-[1.1]  md:text-[54px] tracking-tight">
          What&apos;s your musclespan <br className="hidden md:block" />
          <span className="text-[#169E6F]">risk level?</span> 
        </h2>
        <p className="mx-auto text-sm md:text-lg leading-relaxed text-neutral-600 ">
          Answer 6 questions. Get a personalized protocol built around your <br className="hidden md:block" />
          GLP-1, your goals, and your body in under 2 minutes.
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-gradient-to-r from-[#3d2419] via-[#8c4c2e] to-[#c96a3d] px-8 py-7 text-white min-h-[230px]">
    <div className="relative z-20 text-left max-w-[48%] flex flex-col justify-between h-[200px]">
    <div>
      <span className="mb-4 inline-block w-fit rounded-full bg-[#d2f392] px-4 py-1 text-[10px] font-bold uppercase text-[#1a3b1a]">
        MUSCLESPAN PROTOCOL FINDER
      </span>

      <h3 className="text-[28px] leading-[1.05] tracking-tight font-medium text-white">
        Take the Musclespan Quiz
      </h3>

      <p className="mt-1 text-[14px] leading-tight text-white/85 max-w-md">
        Discover your risk level, get a matched protocol, and unlock a personalized discount – in 6 questions.
      </p>
    </div>

    <div className="flex flex-wrap gap-2">
      {["2 minutes", "6 questions", "Free protocol report"].map((tag, i) => (
        <span
          key={i}
          className="rounded-full bg-white/15 border border-white/15 px-3 py-1 text-[10px] font-medium text-white/90"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>

  <div className="absolute right-40 top-1 z-10 h-[100%] w-[50%] pointer-events-none">
  <Image
    src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/08f0f6dbfa3d0dcbacc680bbdc7271153946ff9d.png?v=1777280805"
    alt="3D Man"
    fill
    className="object-cover object-top"
  />
</div>

  <div className="absolute right-12 top-1/2 -translate-y-1/2 z-30">
    <Link
      href="/quiz"
      className="inline-flex items-center gap-1 rounded-full bg-white px-5 py-3 text-[14px] font-semibold text-black hover:bg-neutral-100 active:scale-95 shadow-lg"
    >
      Start the quiz <span className="font-bold">→</span>
    </Link>
  </div>
</div>

      <div className="mt-10 flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-neutral-200 py-12">
         <div className="flex flex-col items-center px-12 py-8 md:py-0">
            <p className="text-[40px] md:text-[48px] font-normal text-black tracking-tight">12,847</p>
            <p className="text-[14px] font-medium text-neutral-700">Protocols matched</p>
         </div>
         <div className="flex flex-col items-center px-12 py-8 md:py-0">
            <p className="text-[40px] md:text-[48px] font-normal text-black tracking-tight">94%</p>
            <p className="text-[14px] font-medium text-neutral-700">Said it felt personalized</p>
         </div>
         <div className="flex flex-col items-center px-12 py-8 md:py-0">
            <p className="text-[40px] md:text-[48px] font-normal text-black tracking-tight">2 min</p>
            <p className="text-[14px] font-medium text-neutral-700">Average completion time</p>
         </div>
      </div>
    </section>
  );
}
