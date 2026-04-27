"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function BlindSpotSection() {
  return (
    <section className="relative overflow-hidden py-24 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/a1394ebcbdf0e265fb922c8a933828b20987b9f9.png?v=1777280803"
          alt="Blind Spot Background"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#24122d]/80 via-[#24122d]/40 to-[#24122d]/90" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
        {/* Title */}
        <h2 className="mb-12 text-[42px] font-normal leading-[1.1] md:text-[64px] tracking-tight">
          Your GLP-1 <br className="md:hidden" /> breakthrough has a <span className="text-[#d2f392]">blind spot</span>
        </h2>

        {/* Floating 3D Pill */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mx-auto mb-16 h-[300px] w-[300px] md:h-[450px] md:w-[450px]"
        >
          <Image 
            src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/fb12b58cd51599512c006235b6bb63bf9154e4ab.png?v=1777280794" // Placeholder or similar asset
            alt="3D Floating Pill"
            fill
            className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          />
        </motion.div>

        {/* Subtext */}
        <div className="mx-auto mb-12 max-w-2xl text-[18px] md:text-[22px] leading-relaxed">
          <p>
            <span className="text-[#d2f392] font-medium">You&apos;re losing weight</span>, but 25% is muscle. <br className="hidden md:block" />
            M3 is the only stack designed to close that gap.
          </p>
        </div>

        {/* Main CTA */}
        <Link 
          href="#science"
          className="mb-24 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[16px] font-bold text-black transition-all hover:bg-neutral-100 active:scale-95 shadow-xl"
        >
          See the science <span>→</span>
        </Link>

        {/* Cards Grid */}
        <div className="mb-24 grid grid-cols-1 gap-4 md:grid-cols-4">
          {/* Card 1 */}
          <div className="flex flex-col rounded-[24px] bg-white/5 p-6 text-left backdrop-blur-md border border-white/10">
            <div className="mb-6 flex gap-2">
              <span className="rounded-full bg-[#d2f392] px-3 py-1 text-[10px] font-bold text-black uppercase">CORE STACK</span>
              <span className="rounded-full bg-[#ff6b6b] px-3 py-1 text-[10px] font-bold text-white uppercase">20% OFF</span>
            </div>
            <h4 className="mb-1 text-[20px] font-medium">[M3] Daily Stack</h4>
            <p className="mb-8 text-[12px] text-white/50">Urolithin A · Spermidine · SAC</p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-[18px] font-medium">₹5,067<span className="text-[14px] text-white/50">/month</span></span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[14px]">→</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col rounded-[24px] bg-white/5 p-6 text-left backdrop-blur-md border border-white/10">
            <div className="mb-6">
              <span className="rounded-full bg-[#d2f392] px-3 py-1 text-[10px] font-bold text-black uppercase">INCLUDED</span>
            </div>
            <h4 className="mb-1 text-[20px] font-medium">MuscleCare Concierge</h4>
            <p className="mb-8 text-[12px] text-white/50">AI + Human Clinician</p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-[16px] font-medium">Included <span className="text-[14px] text-white/50 font-normal">with M3</span></span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[14px]">→</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col rounded-[24px] bg-white/5 p-6 text-left backdrop-blur-md border border-white/10">
            <div className="mb-6">
              <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold text-white/80 uppercase">IN-APP</span>
            </div>
            <h4 className="mb-1 text-[20px] font-medium">Biomarker Tracking</h4>
            <p className="mb-8 text-[12px] text-white/50">HRV · VO2max · LBM</p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-[16px] font-medium">Free <span className="text-[14px] text-white/50 font-normal">with app</span></span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[14px]">→</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col rounded-[24px] bg-white/5 p-6 text-left backdrop-blur-md border border-white/10">
            <div className="mb-6">
              <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold text-white/80 uppercase">IN-APP</span>
            </div>
            <h4 className="mb-1 text-[20px] font-medium">Protocol Builder</h4>
            <p className="mb-8 text-[12px] text-white/50">Personalized AI Training</p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-[16px] font-medium">Free <span className="text-[14px] text-white/50 font-normal">with app</span></span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[14px]">→</span>
            </div>
          </div>
        </div>

        {/* Bottom Longevity Card */}
        <div className="mx-auto max-w-4xl rounded-[32px] bg-white/5 p-8 text-left backdrop-blur-md border border-white/10 md:p-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h3 className="mb-4 text-[32px] font-normal leading-tight md:text-[42px]">
                Muscle is your <br /> <span className="text-[#d2f392]">longevity organ</span>
              </h3>
              <p className="mb-8 text-[16px] leading-relaxed text-white/60">
                GLP-1 alone strips lean mass. M3 restores the mitochondrial signalling 
                that keeps your muscles alive, strong, and metabolically active long after the weight is gone.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/product/decode-peak-performance-m3" 
                  className="rounded-full bg-white px-8 py-3 text-[14px] font-bold text-black transition-all hover:bg-neutral-100"
                >
                  Start my M3 protocol →
                </Link>
                <Link 
                  href="#science" 
                  className="rounded-full border border-white/20 px-8 py-3 text-[14px] font-medium text-white transition-all hover:bg-white/5"
                >
                  See the science
                </Link>
              </div>
            </div>
            <div className="relative h-[200px] w-full hidden md:block">
               {/* Decorative circle or abstract 3D element */}
               <div className="absolute right-0 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-2xl" />
               <div className="absolute right-12 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full border border-white/10" />
            </div>
          </div>
        </div>

        {/* Bottom Stats Line */}
        <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] uppercase tracking-[0.2em] text-white/40">
           <span>~25% lose strength on GLP-1 within 6 months</span>
           <span>~17% elevated sarcopenia risk post-GLP-1</span>
           <span>Up to 40% of weight loss may be lean mass</span>
        </div>
      </div>
    </section>
  );
}
