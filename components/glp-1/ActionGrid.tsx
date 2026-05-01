"use client";

import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Protect your muscle",
    image: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/1_cb42bb6f-f083-4a1b-987f-827c9a4d4aa4.png?v=1777629248",
    href: "/product/decode-peak-performance-m3",
  },
  {
    title: "Track your biomarkers",
    image: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/2_832ff981-ef6b-423a-a1b8-b7beb1aba54d.png?v=1777629249",
    href: "/science",
  },
  {
    title: "Decode your musclespan",
    image: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/9a5298152c49f33cc0dc733e1d938c6ed24e1357.png?v=1777280797",
    href: "/quiz",
  },
  {
    title: "Unsure where to begin? Start here",
    image: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/d5d9890b27365cef7dd9a57e12e345c6698d963b.png?v=1777280804",
    href: "/consultation",
    isLargeText: true
  }
];

export function ActionGrid() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pb-20 pt-40">
      <h2 className="mb-12 max-w-4xl text-[36px] leading-[1.1] tracking-tight text-black md:text-[56px]">
        The muscle you <br />
        can't afford to lose
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Featured Card 1 */}
        <div 
          className="relative h-[300px] overflow-hidden rounded-[22px] p-10 text-white transition-all hover:brightness-105 md:h-[209px]"
          style={{ background: 'linear-gradient(90deg, #1E3944 0%, #4B8FAA 121.48%)' }}
        >
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="max-w-[240px]">
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[#d4f268] py-[3px] pl-3 pr-[3px]">
                <span className="text-[10px] font-bold text-[#1a3b1a]">New</span>
                <span className="rounded-full bg-[#ff4040] px-2 py-[2px] text-[10px] font-bold text-white">20% OFF</span>
              </div>
              <h3 className="heading-h3 font-light text-white leading-[25px]">Start protecting your muscle today</h3>
            </div>
            <div className="flex w-full items-end justify-between">
              <Link href="/product/decode-peak-performance-m3" className="body-text-sm font-medium text-white/70 transition-colors hover:text-white">
                Find your M3 protocol
              </Link>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20">
                <span className="text-xl">→</span>
              </div>
            </div>
          </div>
          <div className="absolute right-5 top-1 h-full w-[50%] pointer-events-none">
             <Image 
               src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/0bfb24bcf94124e67c025f0086dc99baf2a7c797.png?v=1777279523" 
               alt="M3 Product" 
               fill 
               className="object-cover object-top"
             />
          </div>
        </div>

        {/* Featured Card 2 */}
        <div className="relative h-[280px] overflow-hidden rounded-[22px] bg-[#939ca0] p-10 transition-all hover:brightness-105 md:h-[209px]">
          <div className="absolute right-10 top-0 h-full w-[50%] pointer-events-none">
             <Image 
               src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/78f3e0a0f1b9e6262606b7a9c6d743f11dde6ff5.png?v=1777278899" 
               alt="Person" 
               fill 
               className="object-cover object-top"
             />
          </div>
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="max-w-[300px]">
              <h3 className="heading-h3 font-light text-white leading-[25px]">See how much<br/>muscle you could save</h3>
              <div className="inline-flex items-center rounded-full bg-white/40 px-3 py-1 backdrop-blur-md my-2 ring-1 ring-white/20">
                <p className="text-[12px] font-medium text-white">↑ Preserve up to 100% lean mass*</p>
              </div>
            </div>
            <div className="flex w-full items-end justify-between">
              <Link href="/quiz" className="body-text-sm font-medium text-white transition-colors hover:text-[#1a3b1a]">
                Take the Musclespan Quiz
              </Link>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 text-white">
                <span className="text-xl">→</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Cards Grid */}
        {cards.map((card, idx) => (
          <Link 
            key={idx} 
            href={card.href} 
            className="group relative flex h-[100px] items-center justify-between overflow-hidden rounded-[22px] bg-[#f4fbf4] pl-6 pr-4 sm:pl-8 sm:pr-6 transition-all hover:bg-[#ebf5eb] md:h-[96px]"
          >
            <div className="relative z-10 flex flex-col gap-1 max-w-[140px] sm:max-w-[180px] md:max-w-[160px] lg:max-w-[220px]">
              <span className="text-[15px] sm:text-[16px] text-[#1a3b1a] font-medium leading-[1.2]">
                {card.isLargeText ? (
                  <>Unsure where to begin? <br /><span className="font-bold text-[16px] sm:text-[18px]">Start here</span></>
                ) : card.title}
              </span>
            </div>

            <div className="absolute bottom-0 right-14 z-0 h-[80%] w-16 sm:w-20 md:h-[90%] md:w-24 md:right-16 lg:right-20 pointer-events-none">
              <Image 
                src={card.image} 
                alt={card.title} 
                fill 
                className="object-contain object-right-bottom transition-transform duration-500 group-hover:scale-105" 
              />
            </div>

            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#1a3b1a]/10 bg-white/50 backdrop-blur-sm transition-all group-hover:bg-[#1a3b1a] group-hover:border-[#1a3b1a]">
              <span className="text-xs text-[#1a3b1a] transition-colors group-hover:text-white">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
