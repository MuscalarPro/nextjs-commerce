"use client";

import React from 'react';

export function GridCardSection() {
  return (
    <section className="w-full bg-[#faf9f6] py-12 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        
        {/* BLOCK 1: 5 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-6 max-w-8xl mx-auto">
          
          {/* Top Row: 3 Cards */}
          <div className="col-span-1 md:col-span-2 bg-[#f1f0ec] rounded-[2rem] p-8 lg:p-10 flex flex-col items-center text-center">
            <div className="mb-6 h-16 w-16 flex items-center justify-center bg-white rounded-2xl shadow-sm">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 34H37" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 34V18L16 14V34" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 34V14L24 10V34" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 34V10L32 6V34" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="11" y="22" width="4" height="4" rx="1" stroke="#333" strokeWidth="1.5"/>
                <rect x="19" y="18" width="4" height="4" rx="1" stroke="#333" strokeWidth="1.5"/>
                <rect x="27" y="14" width="4" height="4" rx="1" stroke="#333" strokeWidth="1.5"/>
                <path d="M12 11V7" stroke="#e55a40" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M14 9C14 7.5 13 6.5 13 5M10 9C10 7.5 11 6.5 11 5" stroke="#e55a40" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-xs lg:text-[13px] font-bold tracking-widest text-[#1a1a1a] uppercase mb-4 h-10 flex items-center">
              US-FDA APPROVED FACILITY
            </h3>
            <p className="text-xs lg:text-[13px] text-gray-500 leading-relaxed font-normal">
              Active ingredients manufactured in <strong className="text-gray-900 font-semibold">US-FDA approved facilities</strong> meeting the world's highest pharmaceutical manufacturing standards.
            </p>
          </div>

          <div className="col-span-1 md:col-span-2 bg-[#f1f0ec] rounded-[2rem] p-8 lg:p-10 flex flex-col items-center text-center">
            <div className="mb-6 h-16 w-16 flex items-center justify-center bg-white rounded-2xl shadow-sm">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 34H28" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 34V28" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="16" y="24" width="8" height="4" rx="1" stroke="#333" strokeWidth="1.5"/>
                <path d="M20 24V14" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="20" cy="10" r="4" stroke="#333" strokeWidth="1.5"/>
                <circle cx="20" cy="10" r="1.5" fill="#e55a40"/>
                <path d="M24 16L28 14" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="28" cy="8" r="5" fill="#333"/>
                <path d="M26 8L27.5 9.5L30 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xs lg:text-[13px] font-bold tracking-widest text-[#1a1a1a] uppercase mb-4 h-10 flex items-center">
              PRE-CLINICAL VALIDATED
            </h3>
            <p className="text-xs lg:text-[13px] text-gray-500 leading-relaxed font-normal">
              Safety and mechanism of action (MOA) validated through <strong className="text-gray-900 font-semibold">independent pre-clinical studies</strong> before any human trial.
            </p>
          </div>

          <div className="col-span-1 md:col-span-2 bg-[#f1f0ec] rounded-[2rem] p-8 lg:p-10 flex flex-col items-center text-center">
            <div className="mb-6 h-16 w-16 flex items-center justify-center bg-white rounded-2xl shadow-sm">
               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="8" width="20" height="26" rx="2" stroke="#333" strokeWidth="1.5"/>
                <path d="M16 6H24" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                <rect x="14" y="5" width="12" height="4" rx="1" stroke="#333" strokeWidth="1.5"/>
                <path d="M14 16L16 18L20 14" stroke="#e55a40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 22L16 24L20 20" stroke="#e55a40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 28L16 30L20 26" stroke="#e55a40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 16H26" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M22 22H26" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M22 28H26" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-xs lg:text-[13px] font-bold tracking-widest text-[#1a1a1a] uppercase mb-4 h-10 flex items-center">
              RANDOMIZED DOUBLE-BLIND CONTROLLED
            </h3>
            <p className="text-xs lg:text-[13px] text-gray-500 leading-relaxed font-normal">
              All key ingredients validated through <strong className="text-gray-900 font-semibold">randomized, double-blind, placebo-controlled</strong> human clinical trials — the gold standard of evidence.
            </p>
          </div>

          {/* Bottom Row: 2 Cards */}
          <div className="col-span-1 md:col-span-3 bg-[#f1f0ec] rounded-[2rem] p-8 lg:p-10 flex flex-col items-center text-center">
            <div className="mb-6 h-16 w-16 flex items-center justify-center bg-white rounded-2xl shadow-sm">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 10h12" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M17 10v6l-5 14a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-14v-6" stroke="#333" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M13 26H27" stroke="#333" strokeWidth="1.5"/>
                <circle cx="28" cy="28" r="5" fill="#333"/>
                <path d="M25 28c0 1.65 1.35 3 3 3s3-1.35 3-3" stroke="#e55a40" strokeWidth="1.5" strokeLinecap="square"/>
                <circle cx="28" cy="28" r="1.5" fill="#e55a40"/>
              </svg>
            </div>
            <h3 className="text-xs lg:text-[13px] font-bold tracking-widest text-[#1a1a1a] uppercase mb-4 h-6 flex items-center">
              POTENCY ASSAY VERIFIED
            </h3>
            <p className="text-xs lg:text-[13px] text-gray-500 leading-relaxed font-normal max-w-sm">
              Quantitative analysis of active compounds via <strong className="text-gray-900 font-semibold">HPLC, GC-MS & ICP-MS.</strong> Every batch verified against label claim — what's on the label is what's in the capsule.
            </p>
          </div>

          <div className="col-span-1 md:col-span-3 bg-[#f1f0ec] rounded-[2rem] p-8 lg:p-10 flex flex-col items-center text-center">
             <div className="mb-6 h-16 w-16 flex items-center justify-center bg-white rounded-2xl shadow-sm">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 10v12a4 4 0 0 0-2 3.5c0 2 1.5 3.5 3.5 3.5h5c2 0 3.5-1.5 3.5-3.5a4 4 0 0 0-2-3.5v-12a2.5 2.5 0 0 0-5 0v0Z" stroke="#333" strokeWidth="1.5" strokeLinejoin="round"/>
                <circle cx="20" cy="26" r="2" fill="#e55a40"/>
                <path d="M20 25V14" stroke="#e55a40" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M23 14h2m-2 4h2m-2 4h2" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="30" cy="18" r="6" stroke="#333" strokeWidth="1.5"/>
                <path d="M30 15v3.5l2 1.5" stroke="#e55a40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xs lg:text-[13px] font-bold tracking-widest text-[#1a1a1a] uppercase mb-4 h-6 flex items-center">
              STABILITY & SHELF LIFE STUDIES
            </h3>
            <p className="text-xs lg:text-[13px] text-gray-500 leading-relaxed font-normal max-w-sm">
              <strong className="text-gray-900 font-semibold">Accelerated and real-time stability testing</strong> under varying temperature and humidity conditions ensures potency from Day 1 through expiration.
            </p>
          </div>

        </div>

        {/* BLOCK 2: 5 Pillars of Testing */}
        <div className="mt-16 lg:mt-18 max-w-8xl mx-auto bg-[#f1f0ec] rounded-[2.5rem] py-16 px-6 md:px-12">
          
          <div className="flex flex-col items-center text-center mb-12">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6">
              <path d="M32 8L16 14V28C16 40 22.5 50 32 56C41.5 50 48 40 48 28V14L32 8Z" stroke="#333" strokeWidth="1.5" strokeLinejoin="round" fill="#fff"/>
              <path d="M26 30L30 34L38 24" stroke="#e55a40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="48" cy="14" r="2" fill="#e55a40" />
              <circle cx="32" cy="4" r="1.5" fill="#e55a40" />
            </svg>
            <h2 className="text-sm md:text-base font-bold tracking-widest text-gray-900 uppercase mb-4">
              THIRD-PARTY TESTED — 5 PILLARS
            </h2>
            <p className="max-w-xl text-[13px] md:text-sm text-gray-500 leading-relaxed">
              Every M3 batch undergoes <strong className="text-gray-900 font-semibold">independent, third-party verification</strong> across five critical testing domains before release.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            
            {/* Pillar 1 */}
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
              <div className="mb-4 h-12 flex items-center justify-center">
                 <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 6L24 14L16 26L8 14L16 6Z" stroke="#333" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M8 14H24" stroke="#333" strokeWidth="1.5"/>
                  <path d="M16 14V26" stroke="#333" strokeWidth="1.5"/>
                </svg>
              </div>
              <h4 className="text-[10px] md:text-xs font-bold tracking-widest text-gray-900 uppercase mb-3 min-h-[32px] md:min-h-[40px] flex items-center justify-center">
                PURITY & CONTAMINATION
              </h4>
              <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed mb-6">
                Heavy metals (lead, arsenic, cadmium, mercury), pesticide residues, residual solvents & allergen screening
              </p>
              <div className="mt-auto flex flex-wrap justify-center gap-2">
                <span className="px-2 py-0.5 bg-[#fcf1ef] text-[#e85c41] border border-[#fbdcd7] text-[9px] uppercase font-bold tracking-widest rounded-sm">
                  ICP-MS
                </span>
              </div>
            </div>

             {/* Pillar 2 */}
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
              <div className="mb-4 h-12 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="16" cy="16" rx="10" ry="6" stroke="#333" strokeWidth="1.5"/>
                  <path d="M6 16v2c0 3 4 6 10 6s10-3 10-6v-2" stroke="#333" strokeWidth="1.5"/>
                  <circle cx="12" cy="15" r="1.5" fill="#e55a40"/>
                  <circle cx="15" cy="14" r="1.5" fill="#333"/>
                  <circle cx="18" cy="16" r="1.5" fill="#e55a40"/>
                  <circle cx="20" cy="14" r="1.5" fill="#333"/>
                </svg>
              </div>
              <h4 className="text-[10px] md:text-xs font-bold tracking-widest text-gray-900 uppercase mb-3 min-h-[32px] md:min-h-[40px] flex items-center justify-center">
                MICROBIOLOGICAL SAFETY
              </h4>
              <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed mb-6">
                TAMC, yeast & mold, pathogens — Salmonella, E. coli, Staphylococcus screening
              </p>
              <div className="mt-auto flex flex-wrap justify-center gap-1.5">
                <span className="px-2 py-0.5 bg-[#fcf1ef] text-[#e85c41] border border-[#fbdcd7] text-[9px] uppercase font-bold tracking-widest rounded-sm">PCR</span>
                <span className="px-2 py-0.5 bg-[#fcf1ef] text-[#e85c41] border border-[#fbdcd7] text-[9px] uppercase font-bold tracking-widest rounded-sm">ELISA</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
              <div className="mb-4 h-12 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="10" stroke="#333" strokeWidth="1.5"/>
                  <path d="M10 10l12 12" stroke="#e55a40" strokeWidth="1.5"/>
                </svg>
              </div>
              <h4 className="text-[10px] md:text-xs font-bold tracking-widest text-gray-900 uppercase mb-3 min-h-[32px] md:min-h-[40px] flex items-center justify-center">
                BANNED SUBSTANCES
              </h4>
              <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed mb-6">
                Screening for 300+ prohibited substances including steroids, stimulants & masking agents
              </p>
               <div className="mt-auto flex flex-wrap justify-center gap-2">
                <span className="px-2 py-0.5 bg-[#fcf1ef] text-[#e85c41] border border-[#fbdcd7] text-[9px] uppercase font-bold tracking-widest rounded-sm">
                  WADA LIST
                </span>
              </div>
            </div>

             {/* Pillar 4 */}
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
              <div className="mb-4 h-12 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 6h12" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M10 26h12" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M12 6v4l4 6-4 6v4" stroke="#333" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M20 6v4l-4 6 4 6v4" stroke="#333" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M14 22h4v4h-4v-4z" fill="#333"/>
                </svg>
              </div>
              <h4 className="text-[10px] md:text-xs font-bold tracking-widest text-gray-900 uppercase mb-3 min-h-[32px] md:min-h-[40px] flex items-center justify-center">
                STABILITY & SHELF LIFE
              </h4>
              <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed mb-6">
                Accelerated & real-time stability testing under varied temperature and humidity conditions
              </p>
               <div className="mt-auto flex flex-wrap justify-center gap-2">
                <span className="px-2 py-0.5 bg-[#fcf1ef] text-[#e85c41] border border-[#fbdcd7] text-[9px] uppercase font-bold tracking-widest rounded-sm">
                  ICH Q1A
                </span>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
               <div className="mb-4 h-12 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="14" width="4" height="12" rx="1" stroke="#333" strokeWidth="1.5"/>
                  <rect x="18" y="10" width="4" height="16" rx="1" stroke="#333" strokeWidth="1.5"/>
                  <circle cx="16" cy="6" r="1.5" fill="#e55a40"/>
                  <path d="M16 8v4" stroke="#e55a40" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h4 className="text-[10px] md:text-xs font-bold tracking-widest text-gray-900 uppercase mb-3 min-h-[32px] md:min-h-[40px] flex items-center justify-center">
                POTENCY ASSAY
              </h4>
              <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed mb-6">
                Quantitative analysis of active & marker compounds. Label claim verification on every batch.
              </p>
               <div className="mt-auto flex flex-wrap justify-center gap-1.5">
                <span className="px-2 py-0.5 bg-[#fcf1ef] text-[#e85c41] border border-[#fbdcd7] text-[8px] md:text-[9px] uppercase font-bold tracking-widest rounded-sm">HPLC</span>
                <span className="px-2 py-0.5 bg-[#fcf1ef] text-[#e85c41] border border-[#fbdcd7] text-[8px] md:text-[9px] uppercase font-bold tracking-widest rounded-sm">GC-MS</span>
                <span className="px-2 py-0.5 bg-[#fcf1ef] text-[#e85c41] border border-[#fbdcd7] text-[8px] md:text-[9px] uppercase font-bold tracking-widest rounded-sm">ICP-MS</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
