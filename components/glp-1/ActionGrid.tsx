"use client";

import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Protect your muscle",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Background.png?v=1777894114",
    href: "/product/decode-peak-performance-m3",
  },
  {
    title: "Track your biomarkers",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/dfvbdfb.png?v=1777894657",
    href: "/science",
  },
  {
    title: "Decode your musclespan",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/xcd_vsdv_d.png?v=1777894657",
    href: "/quiz",
  },
  {
    title: "Unsure where to begin? Start here",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Start_Here_card.png?v=1777894657",
    href: "/consultation",
    isLargeText: true,
  },
];

export function ActionGrid() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pb-20 pt-32 md:pt-36">
      {/* Green announcement bar — visible above the headline. Stacks on
          the tiniest screens, becomes a pill on sm+. */}
      <div className="mb-10 flex justify-center md:mb-14">
        <div className="flex flex-col items-center gap-2 rounded-2xl bg-[#d2f392] px-5 py-3 sm:flex-row sm:gap-4 sm:rounded-full md:px-8 md:py-3.5">
          <p className="text-center text-[13px] font-medium text-[#1a1a1a] sm:text-left md:text-[15px]">
            On a GLP-1? Your muscle is quietly disappearing.
          </p>
          <Link
            href="/product/decode-peak-performance-m3"
            className="inline-flex shrink-0 items-center gap-1 rounded-full bg-black px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-neutral-800 md:text-sm"
          >
            Protect it now <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <h2 className="mb-12 max-w-4xl text-[36px] leading-[1.1] tracking-tight text-black md:text-[56px]">
        The muscle you <br />
        can't afford to lose
      </h2>

      {/* TWO large featured cards row */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Featured Card 1 */}
        <div
          className="relative h-[300px] overflow-hidden rounded-[22px] px-6 pt-5 pb-5 sm:px-8 sm:pt-6 sm:pb-6 text-white transition-all hover:brightness-105 md:h-[209px]"
          style={{
            background: "linear-gradient(90deg, #1E3944 0%, #4B8FAA 121.48%)",
          }}
        >
          <div className="absolute -bottom-45 left-6 h-[180%] w-[85%] pointer-events-none md:-bottom-84 md:left-20 md:h-[300%] md:w-[90%]">
            <Image
              src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/0bfb24bcf94124e67c025f0086dc99baf2a7c797.png?v=1777279523"
              alt="M3 Product"
              fill
              className="object-contain object-right-bottom"
            />
          </div>
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="max-w-[240px] md:max-w-[280px]">
              <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-[#d4f268] py-[2px] pl-2 pr-[2px] md:mb-2">
                <span className="text-[10px] font-bold text-[#1a3b1a]">
                  New
                </span>
                <span className="rounded-full bg-[#ff4040] px-1.5 py-[1px] text-[10px] font-bold text-white">
                  20% OFF
                </span>
              </div>
              <h3 className="text-[18px] font-medium text-white leading-[1.15] md:text-[20px]">
                Start protecting your <br/> muscle today
              </h3>
            </div>
            <div className="mt-0 mb-35 md:mt-12 md:mb-0">
              <Link
                href="/product/decode-peak-performance-m3"
                className="text-[14px] font-medium text-white/70 transition-colors hover:text-white "
              >
                Find your M3 protocol
              </Link>
            </div>
          </div>
          <div className="absolute bottom-5 right-5 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 md:bottom-5 md:right-6 md:h-6 md:w-6">
            <span className="text-[10px] text-white md:text-xs">→</span>
          </div>
        </div>

        {/* Featured Card 2 */}
        <div className="relative h-[280px] overflow-hidden rounded-[22px] bg-[#939ca0] px-6 pt-5 pb-5 sm:px-8 sm:pt-6 sm:pb-6 transition-all hover:brightness-105 md:h-[209px]">
          <div className="absolute left-12 top-30 h-[115%] w-[60%] pointer-events-none md:left-58 md:-top-10 md:w-[55%]">
            <Image
              src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/78f3e0a0f1b9e6262606b7a9c6d743f11dde6ff5.png?v=1777278899"
              alt="Person"
              fill
              className="object-cover object-top scale-[1.15]"
            />
          </div>
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="max-w-[300px]">
              <h3 className="text-[18px] font-medium text-white leading-[1.2] md:text-[20px]">
                See how much
                <br />
                muscle you could save
              </h3>
              <div className="inline-flex items-center rounded-full bg-white/14 px-2.5 py-0.5  my-2 ring-1 ring-white/20">
                <p className="text-[10px] font-semibold text-white">
                  ↑ Preserve up to 100% lean mass*
                </p>
              </div>
            </div>
            <div className="mt-1 mb-35 md:mt-12 md:mb-0">
              <Link
                href="/quiz"
                className="text-[14px] font-medium text-white/70 transition-colors hover:text-white "
              >
                Take the Musclespan Quiz
              </Link>
            </div>
          </div>
          <div className="absolute bottom-5 right-5 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 md:bottom-6 md:right-6 md:h-6 md:w-6">
            <span className="text-[10px] text-white md:text-xs">→</span>
          </div>
        </div>
      </div>

      {/* FOUR small action cards row.
          Mobile: 1 col. Tablet: 2 col (2x2). Desktop: 4 in one row. */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, idx) => (
          <Link
            key={idx}
            href={card.href}
            className="group relative flex h-[100px] items-center justify-between overflow-hidden rounded-[22px] bg-[#f4fbf4] pl-6 pr-4 sm:pl-8 sm:pr-6 transition-all hover:bg-[#ebf5eb] md:h-[96px]"
          >
            {/* Image — full card behind */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover object-right transition-transform duration-500 "
              />
            </div>

            {/* Left-to-right gradient wash so the dark green text stays
                legible against any image content. Solid on the left,
                transparent over the right where the image is the focus. */}
            <div
              aria-hidden="true"
              className="absolute inset-0 z-[5] pointer-events-none bg-gradient-to-r from-[#f4fbf4] from-30% via-[#f4fbf4]/80 via-55% to-transparent to-80%"
            />

            <div className="relative z-10 flex flex-col gap-1 max-w-[150px] sm:max-w-[180px] md:max-w-[160px] lg:max-w-[170px]">
              <span className="text-[14px] sm:text-[15px] text-[#1a3b1a] font-medium leading-[1.2]">
                {card.isLargeText ? (
                  <>
                    Unsure where to begin? <br />
                    <span className="font-semibold text-[12px] sm:text-[15px]">
                      Start here
                    </span>
                  </>
                ) : (
                  card.title
                )}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
