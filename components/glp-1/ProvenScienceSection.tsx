"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  {
    value: "10+",
    label: "Years of mitophagy research behind M3",
  },
  {
    value: "6",
    label: "Human RCTs on Urolithin A alone",
  },
  {
    value: "+39%",
    label: "Mitochondrial renewal after 16 weeks*",
  },
  {
    value: "3+",
    label: "Precision bio-molecules per serving",
  },
];

export function ProvenScienceSection() {
  return (
    <section className="bg-[#1a2d2f] py-24 text-white">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="mb-6 text-[42px] font-normal leading-tight md:text-[64px] tracking-tight">
          Clinically proven at <br/> the <span className="text-[#d2f392]">cellular level</span>
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-[16px] text-white/60 md:text-[18px] leading-relaxed">
          Every molecule in M3 has passed rigorous human trials. This isn&apos;t wellness marketing — 
          it&apos;s precision biology backed by a decade of research.
        </p>

        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center rounded-[24px] bg-white/5 p-8 border border-white/10"
            >
              <span className="mb-2 text-[42px] font-normal text-[#d2f392] tracking-tighter">{stat.value}</span>
              <span className="text-[11px] uppercase tracking-widest text-white/50 leading-relaxed max-w-[140px]">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <p className="mb-12 text-[10px] text-white/30 uppercase tracking-widest">
          *Based on Urolithin A clinical trial data. Results may vary. Not evaluated by the FDA or FSSAI.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/science" 
            className="rounded-full bg-white px-10 py-4 text-[16px] font-bold text-black transition-all hover:bg-neutral-100"
          >
            Explore the science →
          </Link>
          <Link 
            href="/science#papers" 
            className="rounded-full border border-white/20 px-10 py-4 text-[16px] font-medium text-white transition-all hover:bg-white/5"
          >
            Read research papers
          </Link>
        </div>
      </div>
    </section>
  );
}
