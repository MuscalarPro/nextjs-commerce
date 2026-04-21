"use client";

import React from 'react';

const reviews = [
  {
    id: 1,
    name: "Priya S.",
    date: "6 days ago",
    rating: 5,
    verified: true,
    recommend: true,
    age: "40 to 49",
    title: "Recovery between sessions actually changed",
    content: "I started noticing faster recovery between training sessions after about six weeks. My Garmin resting heart rate on lift days dropped by a few beats. Not a miracle — but measurable. I trained the same, slept the same, ate the same. Only M3 changed.",
    helpful: 4,
    notHelpful: 0,
  },
  {
    id: 2,
    name: "Arjun M.",
    date: "2 weeks ago",
    rating: 4,
    verified: true,
    recommend: true,
    age: "50 to 59",
    title: "Takes patience, but it lands",
    content: "Wasn't expecting same-week results — I read the clinical timeline on their science page before buying. By month three, my endurance during long cycling sessions feels more durable. Hard sessions feel less hard at the same heart rate. Wish the capsule were slightly smaller, but that's my only complaint.",
    helpful: 3,
    notHelpful: 0,
  },
  {
    id: 3,
    name: "R. Sharma",
    date: "3 weeks ago",
    rating: 5,
    verified: true,
    recommend: true,
    age: "40 to 49",
    title: "Skeptic convinced by the JAMA paper, then by the results",
    content: "I play masters-level tennis and I was skeptical of yet another longevity supplement. What convinced me to try M3 was the actual JAMA Network Open paper on Urolithin A — not the marketing. Clear improvement in between-match recovery around week eight. Soreness from back-to-back tournament days is noticeably lower.",
    helpful: 7,
    notHelpful: 0,
  }
];

const ratingDistribution = [
  { stars: 5, percentage: 65 },
  { stars: 4, percentage: 20 },
  { stars: 3, percentage: 10 },
  { stars: 2, percentage: 5 },
  { stars: 1, percentage: 0 },
];

export function CustomerReviewsSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-neutral-100">
      <div className="mx-auto max-w-[1340px] px-4 md:px-2">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.2fr_2fr]">
          {/* Left Column: Metrics - Sticky on Desktop */}
          <div className="lg:sticky lg:top-32 lg:self-start space-y-12">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] text-neutral-500 uppercase mb-8">
                CUSTOMER REVIEWS
              </p>
              <div className="flex flex-col md:flex-row md:items-end gap-x-12 gap-y-6 mb-8">
                <div className="space-y-1">
                  <h2 className="text-[56px] font-medium text-black leading-tight">4.5 <span className="text-[20px] text-neutral-400">/ 5 ★</span></h2>
                  <p className="text-[16px] text-neutral-500">Based on 20 reviews</p>
                </div>
                <div className="space-y-1">
                  <h2 className="text-[56px] font-medium text-black leading-tight">95<span className="text-[24px]">%</span></h2>
                  <p className="text-[16px] text-neutral-500 max-w-[150px]">Would recommend this product</p>
                </div>
              </div>
            </div>

            {/* Star Distribution */}
            <div className="space-y-3.5 max-w-sm">
              {ratingDistribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-4">
                  <div className="flex items-center gap-1 w-8">
                    <span className="text-[13px] font-medium text-black">★</span>
                    <span className="text-[13px] font-medium text-black">{item.stars}</span>
                  </div>
                  <div className="h-1 flex-1 bg-neutral-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-black rounded-full" 
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-[13px] text-neutral-500 w-8 text-right">{item.percentage}%</span>
                </div>
              ))}
            </div>

            <hr className="border-neutral-200 border-dashed max-w-sm" />

            {/* Custom Gauges */}
            <div className="space-y-8 max-w-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[15px] font-medium text-black">Average fitness level</span>
                  <div className="w-4 h-4 rounded-full border border-neutral-300 flex items-center justify-center text-[10px] text-neutral-400 cursor-help">i</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative w-32 h-3 bg-neutral-200 rounded-full flex items-center overflow-hidden">
                    {/* Progress Bar */}
                    <div 
                      className="absolute left-0 top-0 h-full bg-[#262626] rounded-full" 
                      style={{ width: '76%' }}
                    />
                    {/* Markers (Dots at 1, 2, 3, 4, 5) */}
                    <div className="absolute inset-0 flex justify-between items-center px-1.5 z-10">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[14px] font-medium text-black min-w-[40px] text-right">3.8/5</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[15px] font-medium text-black">Average energy improvement</span>
                  <div className="w-4 h-4 rounded-full border border-neutral-300 flex items-center justify-center text-[10px] text-neutral-400 cursor-help">i</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative w-32 h-3 bg-neutral-200 rounded-full flex items-center overflow-hidden">
                    {/* Progress Bar */}
                    <div 
                      className="absolute left-0 top-0 h-full bg-[#262626] rounded-full" 
                      style={{ width: '76%' }}
                    />
                    {/* Markers (Dots at 1, 2, 3, 4, 5) */}
                    <div className="absolute inset-0 flex justify-between items-center px-1.5 z-10">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[14px] font-medium text-black min-w-[40px] text-right">3.8/5</span>
                </div>
              </div>
            </div>

            {/* <div className="pt-4">
              <button className="text-[12px] font-bold uppercase tracking-[0.2em] text-black border-b-2 border-black pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors">
                WRITE A REVIEW
              </button>
            </div> */}
          </div>

          {/* Right Column: Reviews */}
          <div className="space-y-8">
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="flex items-center gap-3 px-6 py-2.5 rounded-full border border-neutral-200 text-[12px] font-bold text-black uppercase tracking-widest hover:bg-neutral-50 transition-colors">
                ALL RATINGS <span className="text-[8px] opacity-60">▼</span>
              </button>
              <button className="px-6 py-2.5 rounded-full border border-neutral-200 text-[12px] font-bold text-black uppercase tracking-widest hover:bg-neutral-50 transition-colors">
                WITH MEDIA
              </button>
            </div>

            <div className="space-y-12">
              {reviews.map((review) => (
                <div key={review.id} className="pt-12 first:pt-0 border-t border-neutral-200 border-dashed first:border-0">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-12">
                    {/* Reviewer Info */}
                    <div className="space-y-5">
                      <div className="flex text-black text-[15px] gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < review.rating ? "text-black" : "text-neutral-200"}>★</span>
                        ))}
                      </div>
                      <div className="space-y-1">
                        <p className="text-[16px] font-medium text-black">{review.name}</p>
                        {review.verified && (
                          <div className="flex items-center gap-2">
                            <span className="text-[12px] text-neutral-400 italic">Verified buyer</span>
                            <span className="inline-block w-3 h-3 text-neutral-400">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="space-y-1.5 pt-2">
                        {review.recommend && (
                          <p className="text-[13px] font-medium text-black">Yes, I would recommend this product</p>
                        )}
                        <p className="text-[13px] text-neutral-500">Age: {review.age}</p>
                      </div>
                    </div>

                    {/* Review Content */}
                    <div className="space-y-5">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="text-[20px] font-medium text-black leading-tight tracking-tight">
                          {review.title}
                        </h3>
                        <span className="text-[13px] text-neutral-400 shrink-0 mt-1">{review.date}</span>
                      </div>
                      <p className="text-[17px] leading-relaxed text-neutral-700 font-light">
                        {review.content}
                      </p>
                      <div className="flex items-center gap-6 pt-6">
                        <span className="text-[13px] text-neutral-400">Was this helpful?</span>
                        <div className="flex items-center gap-3">
                          <button className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 text-[13px] text-neutral-600 transition-all hover:border-black hover:text-black">
                             <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"/></svg>
                             <span>{review.helpful}</span>
                          </button>
                          <button className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 text-[13px] text-neutral-600 transition-all hover:border-black hover:text-black">
                             <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                             <span>{review.notHelpful}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="pt-12 text-center md:text-left">
              <button className="px-10 py-3 rounded-full border border-black text-[12px] font-bold text-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                LOAD MORE
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
