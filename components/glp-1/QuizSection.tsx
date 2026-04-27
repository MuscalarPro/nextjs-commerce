"use client";

import Link from "next/link";
import Image from "next/image";

export function QuizSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 py-24 text-center">
      <div className="mb-16">
        <span className="mb-8 inline-block rounded-full bg-[#666666] px-5 py-1.5 text-[12px] font-bold uppercase tracking-wider text-white">
          FREE · 2 MINUTES · PERSONALIZED RESULTS
        </span>
        <h2 className="mb-6 text-[48px] font-normal leading-[1.1] text-[#1a3b1a] md:text-[84px] tracking-tight">
          What&apos;s your musclespan <br className="hidden md:block" />
          <span className="text-[#34a853]">risk level?</span>
        </h2>
        <p className="mx-auto max-w-2xl text-[18px] leading-relaxed text-neutral-600 md:text-[22px]">
          Answer 6 questions. Get a personalized protocol built around your <br className="hidden md:block" />
          GLP-1, your goals, and your body — in under 2 minutes.
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[48px] bg-gradient-to-r from-[#3d2419] via-[#8c4c2e] to-[#c96a3d] p-8 text-white md:p-20 min-h-[380px]">
        <div className="relative z-20 text-left md:max-w-[45%] flex flex-col justify-center h-[300px]">
          <span className="mb-6 inline-block w-fit rounded-full bg-[#d2f392] px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1a3b1a]">
            MUSCLESPAN PROTOCOL FINDER
          </span>
          <h3 className="mb-6 text-[36px] font-medium leading-[1.1] md:text-[54px] tracking-tight">
            Take the Musclespan Quiz
          </h3>
          <p className="mb-12 text-[18px] leading-relaxed text-white/80 max-w-[400px]">
            Discover your risk level, get a matched protocol, and unlock a personalized discount – in 6 questions.
          </p>

          <div className="flex flex-wrap gap-3">
             {["2 minutes", "6 questions", "Free protocol report"].map((tag, i) => (
               <span key={i} className="rounded-full bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 text-[11px] uppercase font-bold tracking-wider text-white/90">
                 {tag}
               </span>
             ))}
          </div>
        </div>

        {/* 3D Model Centered/Right */}
        <div className="absolute inset-y-0 right-0 z-10 w-full md:w-3/4 flex items-end justify-center md:justify-end pointer-events-none">
          <div className="relative h-full w-full max-w-[1000px]">
            <Image 
              src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/08f0f6dbfa3d0dcbacc680bbdc7271153946ff9d.png?v=1777280805" 
              alt="3D Man" 
              fill 
              className="object-contain object-bottom"
            />  
          </div>
        </div>

        {/* Button Overlay on the Right */}
        <div className="absolute right-8 md:right-20 top-1/2 -translate-y-1/2 z-30 hidden md:block">
           <Link 
            href="/quiz" 
            className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-5 text-[18px] font-bold text-black transition-all hover:bg-neutral-100 active:scale-95 shadow-2xl"
          >
            Start the quiz 
            <span className="text-[20px]">→</span>
          </Link>
        </div>

        {/* Mobile Button */}
        <div className="relative z-30 mt-12 md:hidden">
           <Link 
            href="/quiz" 
            className="inline-flex w-full justify-center items-center gap-2 rounded-full bg-white px-10 py-5 text-[18px] font-bold text-black shadow-xl"
          >
            Start the quiz →
          </Link>
        </div>
      </div>

      <div className="mt-10 flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-neutral-200 py-12 border-t border-neutral-100">
         <div className="flex flex-col items-center px-12 py-8 md:py-0">
            <p className="text-[48px] font-normal text-[#1a3b1a] mb-2 tracking-tight">12,847</p>
            <p className="text-[12px] uppercase font-bold tracking-[0.2em] text-neutral-400">Protocols matched</p>
         </div>
         <div className="flex flex-col items-center px-12 py-8 md:py-0">
            <p className="text-[48px] font-normal text-[#1a3b1a] mb-2 tracking-tight">94%</p>
            <p className="text-[12px] uppercase font-bold tracking-[0.2em] text-neutral-400">Said it felt personalized</p>
         </div>
         <div className="flex flex-col items-center px-12 py-8 md:py-0">
            <p className="text-[48px] font-normal text-[#1a3b1a] mb-2 tracking-tight">2 min</p>
            <p className="text-[12px] uppercase font-bold tracking-[0.2em] text-neutral-400">Average completion time</p>
         </div>
      </div>
    </section>
  );
}
