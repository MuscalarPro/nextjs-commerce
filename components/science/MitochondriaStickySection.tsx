"use client";

import { useEffect, useRef, useState } from "react";
import MethodologyModal from "./MethodologyModal";

type SectionData = {
  image: string;
};

const DoubleArrow = () => (
  <div className="flex flex-col items-start">
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-400"
    >
      <path d="M7 8l5 5 5-5" />
    </svg>
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-400 -mt-8"
    >
      <path d="M7 8l5 5 5-5" />
    </svg>
  </div>
);

export function MitochondriaStickySection() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<
    "muscle" | "mitochondria" | "brain" | "organ"
  >("muscle");
  const [active, setActive] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data: SectionData[] = [
    {
      image:
        "https://framerusercontent.com/images/lhYregdmE8CAlEFJAfnpegYVsGY.png",
    },
    {
      image:
        "https://framerusercontent.com/images/lhYregdmE8CAlEFJAfnpegYVsGY.png",
    },
    {
      image:
        "https://framerusercontent.com/images/mrwQTr8nmT9NwJAlyxFFxgBpms.png",
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
    <section className="min-h-[300vh] relative py-8 md:py-16">
      <div className="flex flex-col lg:flex-row gap-12 mx-auto px-0 max-w-full">
        {/* LEFT   STICKY IMAGE */}
        <div className="w-full lg:w-[40%]">
          <div className="sticky md:top-20 mt-2 md:mt-0 md:h-[100vh] overflow-hidden rounded-xl">
            {data[activeIndex] && (
              <img
                src={data[activeIndex].image}
                alt="Scroll visual"
                key={activeIndex}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              />
            )}
          </div>
        </div>

        {/* RIGHT   CONTENT */}
        <div className="w-full lg:w-1/2 px-2 md:px-6">
          {/* BLOCK 1: New - Mitochondrial Function Declines */}
          <div
            ref={(el) => {
              sectionsRef.current[0] = el;
            }}
            data-index={0}
            className="md:min-h-screen flex flex-col justify-center "
          >
            <h2 className="heading-h2 ">
              As we age, mitochondrial function declines
            </h2>

            <p className="body-text text-[#666] mx-2 max-w-2xl leading-relaxed">
              Our mitochondria are constantly renewed to produce energy and
              fulfill the vast energy demands of muscle, brain, and every tissue
              in your body. As we get older, mitochondrial renewal declines and
              dysfunctional mitochondria accumulate in the cells, resulting in
              three compounding failures.
            </p>

            {/* Compounding Failures Grid */}
            <div className="grid grid-cols-3 gap-8 pt-6 mx-2">
              <div className="flex flex-col gap-5">
                <DoubleArrow />
                <p className="body-text-sm max-w-[120px]">
                  Insufficient energy supply
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <DoubleArrow />
                <p className="body-text-sm max-w-[120px]">
                  Production of harmful molecules
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <DoubleArrow />
                <p className="body-text-sm max-w-[120px]">
                  Reduced cellular health
                </p>
              </div>
            </div>
          </div>

          {/* BLOCK 2: Original Block 1 */}
          <div
            ref={(el) => {
              sectionsRef.current[1] = el;
            }}
            data-index={1}
            className="md:min-h-screen flex flex-col justify-center space-y-6 mt-24 md:mt-0"
          >
            <img
              src="https://framerusercontent.com/images/lhYregdmE8CAlEFJAfnpegYVsGY.png?scale-down-to=1024&width=2048&height=2048"
              className="w-[calc(100%+1rem)] -mx-2 h-[260px] object-cover lg:hidden mb-6"
              alt=""
            />

            <h2 className="heading-h2 mx-2">
              This decline starts earlier than you might think
            </h2>

            <p className="body-text text-[#666] mx-2">
              Age-associated mitochondrial decline leads to a progressive drop
              in our metabolism, our overall energy levels, our resiliency, our
              brain health, our organ function, and our muscle performance.
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 mb-4">
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
                onClick={() => setActiveTab("mitochondria")}
                className={`lg:text-[18px] font-semibold transition-all relative pb-2 ${
                  activeTab === "mitochondria"
                    ? "text-black border-b-[2px] border-[#d85c41]"
                    : "text-gray-400 hover:text-gray-600 border-b-[2px] border-transparent"
                }`}
              >
                Mitochondrial Health
              </button>

              <button
                onClick={() => setActiveTab("brain")}
                className={`lg:text-[18px] font-semibold transition-all relative pb-2 ${
                  activeTab === "brain"
                    ? "text-black border-b-[2px] border-[#d85c41]"
                    : "text-gray-400 hover:text-gray-600 border-b-[2px] border-transparent"
                }`}
              >
                Brain Health
              </button>

              <button
                onClick={() => setActiveTab("organ")}
                className={`lg:text-[18px] font-semibold transition-all relative pb-2 ${
                  activeTab === "organ"
                    ? "text-black border-b-[2px] border-[#d85c41]"
                    : "text-gray-400 hover:text-gray-600 border-b-[2px] border-transparent"
                }`}
              >
                Organ Health
              </button>
            </div>

            {/* Graph */}
            <div className="w-full aspect-[4/3] md:h-[460px]">
              <img
                src={
                  activeTab === "muscle" || activeTab === "mitochondria"
                    ? "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/1_5.webp?v=1773923964"
                    : "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/2_5.webp?v=1773923964"
                }
                className="w-full h-full object-contain"
                alt=""
              />
            </div>

            <p className="body-text text-[#666] mx-2">
              {activeTab === "muscle" &&
                "After 30, you lose up to 8% of muscle mass per decade. This accelerates after 50 — driven directly by declining mitochondrial density in muscle fibers. M3's Urolithin A restores mitochondrial quality; Spermidine reactivates muscle stem cells; SAC shields against proteolytic breakdown."}
              {activeTab === "mitochondria" &&
                "You lose roughly 10% of your mitochondria every decade after 30. The surviving ones become less efficient, producing less ATP and more damaging reactive oxygen species. M3's three-layer system removes the damaged ones (Urolithin A), builds new ones (Spermidine via SIRT1/PGC-1α/TFAM), and protects them from oxidative degradation (SAC via Nrf2)."}
              {activeTab === "brain" &&
                "Your brain burns 20% of total body energy but weighs just 2% of your mass — making neurons among the most mitochondria-dependent cells. M3 activates neuronal mitophagy (Urolithin A), clears amyloid-β aggregates via autophagy (Spermidine), and shields synaptic membranes with Nrf2-driven glutathione (SAC)."}
              {activeTab === "organ" &&
                "Every major organ — heart, liver, kidneys, lungs — depends on mitochondrial density for reserve capacity. As organ reserve declines, you lose the buffer that protects against disease. Spermidine drives SIRT1/PGC-1α/TFAM biogenesis across all tissue types; Urolithin A clears organ-level mitochondrial dysfunction; SAC protects regenerated organelles from ROS damage across every compartment."}
            </p>
          </div>

          {/* BLOCK 3: Original Block 2 */}
          <div
            ref={(el) => {
              sectionsRef.current[2] = el;
            }}
            data-index={2}
            className="md:min-h-screen flex flex-col justify-center space-y-6 mt-24 md:mt-0"
          >
            <img
              src="https://framerusercontent.com/images/mrwQTr8nmT9NwJAlyxFFxgBpms.png?scale-down-to=1024&width=2048&height=2048"
              className="w-[calc(100%+1rem)] -mx-2 h-[260px] object-cover lg:hidden"
              alt=""
            />

            <h2 className="heading-h2">
              Healthy cells rely on a powerful recycling process
            </h2>

            <p className="body-text text-[#666]">
              A trio of cellular programs — mitophagy, autophagy, and Nrf2
              antioxidant defense — clean up defective mitochondria, clear
              accumulated waste, and shield cells from oxidative damage. These
              recycling and protection mechanisms are clinically proven to
              provide powerful health benefits when properly activated.
            </p>

            <p className="body-text text-[#666]">
              M3's three-molecule stack reactivates the cellular recycling
              programs that decline with age. Urolithin A triggers mitophagy to
              remove damaged mitochondria, Spermidine induces autophagy to clear
              cellular waste, and S-Allyl Cysteine activates Nrf2 to shield
              rebuilt cells from oxidative stress. This synergistic renewal
              mechanism is proven to provide measurable health benefits.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 md:flex flex-wrap lg:flex-nowrap gap-6 md:gap-12">
              {[
                "Better mitochondria quality",
                "Improved cellular health",
                "Improved muscle strength",
                "Improved brain health",
              ].map((text, i) => (
                <div key={i} className="flex flex-col gap-3 h-28 w-28">
                  <div className="w-full h-[1px] bg-gray-400" />
                  <p className="body-text-sm text-[#666]">{text}</p>
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

      <MethodologyModal
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
      />
    </section>
  );
}
