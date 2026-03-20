"use client";

import { useEffect, useRef, useState } from "react";
import MethodologyModal from "./MethodologyModal";

type SectionData = {
  image: string;
};

export function MitochondriaStickySection() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<"muscle" | "skin">("muscle");
  const [active, setActive] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <div className="flex flex-col lg:flex-row gap-12 mx-auto px-0 max-w-full">
        {/* LEFT   STICKY IMAGE */}
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

        {/* RIGHT   CONTENT */}
        <div className="w-full lg:w-1/2 px-2 md:px-6">
          {/* BLOCK 1 */}
          <div
            ref={(el) => {
              sectionsRef.current[0] = el;
            }}
            data-index={0}
            className="md:min-h-screen flex flex-col justify-center space-y-6"
          >
            <h2 className="heading-h2 mx-2">
              The "Silent Crash" begins at age 30
            </h2>

            <p className="body-text text-[#666] mx-2">
              The Science : Muscle loss (sarcopenia) isn't a linear slide; it's
              a compounding crash. By age 40, you lose up to 8% of your muscle
              mass per decade. This is directly driven by the loss of
              mitochondrial density the engines that keep muscle tissue alive.
            </p>

            {/* Tabs */}
            <div className="flex gap-8 mb-4">
              <button
                onClick={() => setActiveTab("muscle")}
                className={`lg:text-[18px] font-semibold transition-all relative pb-2 ${
                  activeTab === "muscle"
                    ? "text-black border-b-[2px] border-[#d85c41]"
                    : "text-gray-400 hover:text-gray-600 border-b-[2px] border-transparent"
                }`}
              >
                Muscle Function
              </button>

              <button
                onClick={() => setActiveTab("skin")}
                className={`lg:text-[18px] font-semibold transition-all relative pb-2 ${
                  activeTab === "skin"
                    ? "text-black border-b-[2px] border-[#d85c41]"
                    : "text-gray-400 hover:text-gray-600 border-b-[2px] border-transparent"
                }`}
              >
                Lifespan
              </button>
            </div>

            {/* Graph */}
            <div className="w-full aspect-[4/3] md:h-[460px]">
              <img
                src={
                  activeTab === "muscle"
                    ? "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/1_5.webp?v=1773923964"
                    : "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/2_5.webp?v=1773923964"
                }
                className="w-full h-full object-contain"
                alt=""
              />
            </div>

            <p className="body-text text-[#666] mx-2">
              {activeTab === "muscle"
                ? "Age-associated mitochondrial decline leads to reduced metabolic efficiency and cellular resilience over time."
                : "Healthspan — the years lived in good health — diverges sharply from lifespan when mitochondrial and autophagy systems are left unsupported. M3 targets this gap at the cellular level."}
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
              className="w-[calc(100%+1rem)] -mx-2 h-[260px] object-cover lg:hidden"
              alt=""
            />

            <h2 className="heading-h2">
              Your cells have a built-in recycling plant. We just turned the
              power back on.
            </h2>

            <p className="body-text text-[#666]">
              Mitophagy clears damaged mitochondria, allowing cellular renewal
              and improved performance.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 md:flex flex-wrap lg:flex-nowrap gap-6 md:gap-12">
              {[
                "Better mitochondria quality",
                "Improved cellular health",
                "Improved muscle strength",
                "Improve muscle health",
              ].map((text, i) => (
                <div key={i} className="flex flex-col gap-3 h-28 w-28">
                  <div className="w-full h-[1px] bg-gray-400" />
                  <p className="body-text-sm text-[#666]">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-4 group mt-6"
            >
              <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                <span className="text-xl font-light">+</span>
              </div>
              <span className="text-[14px] font-bold uppercase text-gray-600 underline underline-offset-8 decoration-gray-300 group-hover:text-black group-hover:decoration-black transition-all">
                HOW METHODOLOGY WORKS
              </span>
            </button>
          </div>
        </div>
      </div>

      <MethodologyModal isOpen={isModalOpen} close={() => setIsModalOpen(false)} />
    </section>
  );
}
