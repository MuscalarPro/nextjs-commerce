"use client";

import { useEffect, useRef, useState } from "react";

type SectionData = {
  image: string;
};

export function MitochondriaStickySection() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<"muscle" | "skin">("muscle");
  const [active, setActive] = useState<number | null>(null);

  const data: SectionData[] = [
    {
      image:
        "https://framerusercontent.com/images/lhYregdmE8CAlEFJAfnpegYVsGY.png?scale-down-to=1024&width=2048&height=2048",
    },
    {
      image:
        "https://framerusercontent.com/images/mrwQTr8nmT9NwJAlyxFFxgBpms.png?scale-down-to=1024&width=2048&height=2048",
    },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.5, // 50% visible = change image
      },
    );

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-[200vh] relative">
      <div className="flex flex-col lg:flex-row gap-12 mx-auto max-w-[1440px] px-4 md:px-8">
        {/* LEFT — STICKY IMAGE */}
        <div className="w-full lg:w-[40%]">
          <div className="sticky md:top-20 mt-2 md:mt-0 md:h-[100vh] overflow-hidden rounded-xl">
            {data[activeIndex] && (
              <img
                src={data[activeIndex].image}
                alt="Scroll visual"
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              />
            )}
          </div>
        </div>

        {/* RIGHT — CONTENT */}
        <div className="w-full lg:w-1/2">
          {/* BLOCK 1 */}
          <div
            ref={(el) => {
              sectionsRef.current[0] = el;
            }}
            data-index={0}
            className="md:min-h-screen flex flex-col justify-center space-y-6"
          >
            <h1 className="text-2xl mx-2 sm:text-3xl lg:text-5xl font-medium">
              The "Silent Crash" begins at age 30
            </h1>

            <p className="text-[15px] mx-2 sm:text-[17px] lg:text-[18px] text-gray-600">
              The Science : Muscle loss (sarcopenia) isn't a linear slide; it's
              a compounding crash. By age 40, you lose up to 8% of your muscle
              mass per decade. This is directly driven by the loss of
              mitochondrial density—the engines that keep muscle tissue alive.
            </p>

            {/* Tabs (DISABLED) */}
            <div className="flex gap-6">
              <button
                disabled
                className="lg:text-lg underline font-semibold cursor-not-allowed opacity-60"
              >
                Muscle Function
              </button>

              <button
                disabled
                className="lg:text-lg text-gray-500 cursor-not-allowed opacity-60"
              >
                Skin Health
              </button>
            </div>

            {/* Graph */}
            <div className="w-full h-[260px]">
              <img
                src={
                  activeTab === "muscle"
                    ? "https://framerusercontent.com/images/6QTQuvwC3MO78yEDidqQvn9gUEI.png?width=1212&height=1008"
                    : "https://framerusercontent.com/images/izWslMMHMxOjWNtTVviYv62Ygg.png?scale-down-to=1024&width=1240&height=1010"
                }
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            <p className="text-[15px] mx-2 lg:text-[18px] text-gray-600">
              Age-associated mitochondrial decline leads to reduced metabolic
              efficiency and cellular resilience over time.
            </p>
          </div>

          {/* BLOCK 2 */}
          <div
            ref={(el) => {
              sectionsRef.current[1] = el;
            }}
            data-index={1}
            className="min-h-screen flex flex-col justify-center space-y-6"
          >
            <img
              src="https://framerusercontent.com/images/mrwQTr8nmT9NwJAlyxFFxgBpms.png?scale-down-to=1024&width=2048&height=2048"
              className="w-full h-[260px] object-cover rounded-lg lg:hidden"
              alt=""
            />

            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-medium">
              Your cells have a built-in recycling plant. We just turned the
              power back on.
            </h1>

            <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-gray-600">
              Mitophagy clears damaged mitochondria, allowing cellular renewal
              and improved performance.
            </p>

            {/* FEATURES */}
            <div className="flex flex-wrap lg:flex-nowrap gap-6 lg:gap-12">
              {[
                "Better mitochondria quality",
                "Improved cellular health",
                "Improved muscle strength",
                "Improved skin health",
              ].map((text, i) => (
                <div key={i} className="flex flex-col gap-3 h-28 w-28">
                  <div className="w-full h-[1px] bg-gray-400" />
                  <p className="text-[14px] lg:text-[18px] text-gray-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA (DISABLED) */}
            <div className="flex gap-2 mt-4 opacity-60 cursor-not-allowed">
              <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center">
                <span className="text-xl">+</span>
              </div>
              <span className="text-[16px] underline text-gray-600">
                HOW METHODOLOGY WORKS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
