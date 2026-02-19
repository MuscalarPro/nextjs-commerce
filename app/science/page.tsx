import { ComparisonTableSection } from "components/home";
import CTASection from "components/layout/cta-section";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/layout/footer";
import {
  MitochondriaStickySection,
  ScientificAdvisorsSection,
  WeakMitochondriaSystemSection,
} from "../../components/science";

export const metadata: Metadata = {
  title: "Science",
  description: "Discover the science behind Mitopure and cellular health.",
};

export default async function SciencePage() {
  return (
    <>
      <section className="w-full">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 pt-4 md:pt-32">
          <div className="relative w-full h-[60vh] md:h-[80vh] rounded-2xl overflow-hidden">
            <Image
              src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/viacapbg.jpg?v=1770198196"
              alt="Smiling woman with healthy skin"
              fill
              className="absolute inset-0 h-full w-full object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-12 md:py-24 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-medium text-gray-900 leading-[1.1] tracking-tight">
            Peak performance is a <br className="hidden md:block" />
            <span className="text-gray-400">biological code</span>
          </h2>
          <div className="max-w-2xl mt-8">
            <p className="text-lg md:text-2xl text-gray-600 leading-relaxed">
              Your program is flawless, but cellular firmware degrades. MUSCULAR
              PRO™ is the update that rewires your cellular engine through
              Mitophagy and Autophagy, delivering sustained power output and
              mental edge.*
            </p>
          </div>
        </div>
      </section>

      <section className="w-full relative overflow-hidden flex flex-col md:min-h-[600px] md:flex-row md:items-center">
        <div className="relative w-full h-[600px] order-2 md:absolute md:inset-0 md:h-full md:z-0 md:order-none">
          <Image
            src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Jce5yrUyXMpP7QT3ntPhYnNq7AU.avif?v=1770232961"
            alt="Mitochondria background abstract"
            fill
            className="object-cover object-center"
            priority={false}
          />
        </div>

        <div className="relative z-10 w-full mx-auto max-w-[1440px] px-4 py-12 order-1 md:px-8 md:py-12 md:order-none">
          <div className="flex flex-col md:flex-row justify-end items-center">
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-[1.5rem] md:text-[2.5rem] leading-tight font-normal text-black mb-4">
                ~90% of your musclespan is determined by mitochondrial quality.
              </h2>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-2">
                The Science : Mitochondria are not just batteries; they are the
                command centers for aging. The trillions of cells that comprise
                your skeletal muscle rely on them to burn fat, synthesize
                protein, and regulate systemic inflammation.
              </p>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                The Reality: As we age, these engines degrade. 'Zombie
                mitochondria' accumulate, creating metabolic noise that blocks
                anabolic signals. This is the root cause of sarcopenia (muscle
                loss).
              </p>
            </div>
          </div>
        </div>
      </section>

      <WeakMitochondriaSystemSection />

      <section className="w-full bg-white py-10 lg:mb-4">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:flex lg:flex-row justify-left flex flex-col-reverse">
          {/* LEFT CONTENT */}
          <div className="lg:w-[58rem] w-full">
            <h1 className="text-5xl lg:text-6xl font-semibold leading-tight text-gray-900 lg:m-0 m-4">
              Mitopure® Urolithin A, the <br />
              nutrient that can reenergize cells
            </h1>

            <p className=" text-gray-600 text-[17px] lg:text-[17px] md:text-lg lg:m-0 m-4">
              As we age, our cells age. Mitopure® is a pure and patented form
              of Urolithin A, the first postbiotic nutrient shown to trigger a
              crucial recycling process within our cells called mitophagy,
              targeting age-related cellular decline.*
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full sm:w-[20rem] md:w-[28rem] lg:w-[44rem] h-auto lg:h-[38rem] mx-auto md:ml-auto mt-2 mb-2">
            <img
              src="https://framerusercontent.com/images/GUS3ttJJ9DvsFB8TXPtgUzpkmg.png?width=1290&height=1292"
              alt="Smiling woman"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <MitochondriaStickySection />

      <section className="relative w-full bg-[#f4f4f0] py-10 md:py-12 overflow-hidden">
        {/* Full Width Background Image */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <Image
            src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/MTUNUS9x90cDqWoxGr17o7Sug.webp?v=1770706689"
            alt="Urolithin A molecule background"
            fill
            priority={false}
            className="object-cover object-left"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px] md:min-h-[460px]">
            {/* Empty left column */}
            <div className="hidden md:block" />

            {/* Right column text */}
            <div className="flex flex-col justify-center py-10 md:py-0 md:pl-10 lg:pl-16 md:pr-4 lg:pr-8 w-full">
              <h2 className="text-[1.8rem] md:text-[2.35rem] leading-[1.1] font-normal text-black tracking-tight">
                Meet the Cellular Defense Matrix.
              </h2>

              <p className="mt-6 text-sm md:text-base text-neutral-600 leading-relaxed w-full">
                We didn't just stop at one molecule. We engineered a synergistic
                triad to tackle all three hallmarks of muscle aging
                simultaneously.
              </p>

              {/* CTA row */}
              <div className="mt-8 md:mt-12">
                <a href="#" className="inline-flex items-center group">
                  {/* Plus Icon Circle */}
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border border-neutral-400 group-hover:border-black transition-colors mr-3">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="text-neutral-600 group-hover:text-black transition-colors"
                    >
                      <path
                        d="M6 0V12M0 6H12"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </svg>
                  </span>

                  <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-neutral-500 underline underline-offset-4 decoration-neutral-300 group-hover:text-black group-hover:decoration-black transition-all">
                    SCIENTIFIC RESEARCH
                  </span>
                </a>
              </div>
            </div>

            {/* Mobile Image (Below Text) */}
            <div className="block md:hidden relative w-[calc(100%+2rem)] -mx-4 aspect-[4/3] mt-8">
              <Image
                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/MTUNUS9x90cDqWoxGr17o7Sug.webp?v=1770706689"
                alt="Urolithin A molecule background"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 0vw"
              />
            </div>
          </div>
        </div>
      </section>

      <ScientificAdvisorsSection />

      <section className="w-full">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8">
          <div className="relative w-full overflow-hidden rounded-[20px] md:rounded-[32px] min-h-[400px] md:min-h-[500px] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent md:from-black/20" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-2xl px-8 md:px-16 py-12 flex flex-col items-start gap-6">
              {/* Headline */}
              <h2 className="text-3xl md:text-5xl font-normal text-white leading-[1.1] tracking-tight drop-shadow-sm">
                Discover our supplement range.{" "}
                <span className="text-white/80">
                  Clinically proven to address aging at the cellular level.
                </span>
              </h2>

              <div className="pt-4">
                <div className="inline-block">
                  <Link
                    href="/shop"
                    className="bg-white text-black px-8 py-4 rounded-full text-xs md:text-sm font-bold tracking-widest hover:bg-black hover:text-white transition-all inline-block"
                  >
                    SHOP SUPPLEMENTS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ComparisonTableSection />

      <section className="w-full bg-[#faf9f6] py-10 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8">
          {/* GRID */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-1 lg:gap-6">
            {/* CARD 1 */}
            <div className="bg-[#f1f0ec] rounded-2xl p-10 flex flex-col items-center justify-center text-center">
              <img
                src="https://dummyimage.com/80x80/000/fff&text=P"
                alt="Placebo"
                className="mb-6"
              />
              <p className="text-sm tracking-widest text-gray-600">
                PLACEBO-CONTROLLED
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#f1f0ec] rounded-2xl p-10 flex flex-col items-center justify-center text-center">
              <img
                src="https://dummyimage.com/80x80/000/fff&text=FDA"
                alt="FDA"
                className="mb-6"
              />
              <p className="text-sm tracking-widest text-gray-600">FDA GRAS</p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#f1f0ec] rounded-2xl p-10 flex flex-col items-center justify-center text-center">
              <img
                src="https://dummyimage.com/80x80/000/fff&text=NSF"
                alt="NSF"
                className="mb-6"
              />
              <p className="text-sm tracking-widest text-gray-600">
                NSF CERTIFIED
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-[#f1f0ec] rounded-2xl p-10 flex flex-col items-center justify-center text-center">
              <img
                src="https://dummyimage.com/80x80/000/fff&text=FSSC"
                alt="FSSC"
                className="mb-6"
              />
              <p className="text-sm tracking-widest text-gray-600">
                FSSC 22000
              </p>
            </div>

            {/* CARD 5 */}
            <div className="bg-[#f1f0ec] rounded-2xl p-10 flex flex-col items-center justify-center text-center">
              <img
                src="https://dummyimage.com/80x80/000/fff&text=SMETA"
                alt="SMETA"
                className="mb-6"
              />
              <p className="text-sm tracking-widest text-gray-600">SMETA</p>
            </div>

            {/* CARD 6 */}
            <div className="bg-[#f1f0ec] rounded-2xl p-10 flex flex-col items-center justify-center text-center">
              <img
                src="https://dummyimage.com/80x80/000/fff&text=SEDEX"
                alt="Sedex"
                className="mb-6"
              />
              <p className="text-sm tracking-widest text-gray-600">SEDEX</p>
            </div>
          </div>

          {/* FULL CARD */}
          <div className="mt-2 lg:mt-6  bg-[#f1f0ec] rounded-2xl p-14 flex flex-col items-center text-center">
            <img
              src="https://dummyimage.com/120x80/000/fff&text=ISO"
              alt="ISO"
              className="lg:mb-6 mb-2 "
            />
            <p className="text-sm tracking-widest text-gray-600">
              ISO 14001 CERTIFICATION &nbsp;&nbsp; ISO 45001 CERTIFICATION
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f2] py-6 md:py-12">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8">
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl lg:p-2  md:text-4xl font-semibold text-gray-900 lg:ml-0 m-2">
            Rigorously tested and made from high-quality ingredients
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl md:text-base text-gray-700 w-full p-2">
            We believe that it's our responsibility to take the extra steps
            necessary to ensure that our products are safe and effective, and we
            are committed to upholding these high standards for all of our
            dietary supplements.
          </p>

          {/* Divider */}
          <div className="mt-8 border-t border-dotted border-gray-300" />

          {/* List */}
          <div className="mt-4">
            {[
              "Placebo Controlled Clinical Studies",
              "FDA GRAS",
              "NSF for Sports",
              "FSSC 22000",
              "SMETA",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-dotted border-gray-300 py-4"
              >
                <span className="text-gray-800 text-xl lg:ml-4 font-medium">
                  {item}
                </span>
                <span className="text-2xl lg:text-4xl lg:mr-6 font-light">
                  +
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-8 md:py-20 lg:py-6">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-26 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:mr-10">
            <h2 className="text-4xl  lg:ml-0 md:text-5xl font-semibold text-gray-900 lg:p-2">
              7 placebo-controlled <br className="hidden md:block" />
              clinical studies
            </h2>

            <p className="mt-4 lg:mt-0 text-lg md:text-base text-gray-700 leading-relaxed lg:p-2">
              For over 15 years, we have pioneered meaningful scientific
              discoveries on Urolithin A and put them to the scrutiny of the
              scientific community by publishing in high impact, peer-reviewed
              journals.
            </p>

            <button className="mt-4 inline-flex items-center lg:gap-85 gap-55 bg-[#2b2b26] w-full text-white lg:px-2 px-4 py-2 text-sm font-medium rounded-md hover:bg-black transition">
              OUR STUDIES
              <span className="text-3xl ">→</span>
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:ml-10 md:justify-end w-full">
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=600&q=80"
              alt="Scientific pipette"
              className="w-full  h-full object-contain"
            />
          </div>
        </div>

        {/* BOTTOM TEXT */}
        <div className="mt-6 text-center">
          <h3 className="text-4xl md:text-4xl font-semibold text-gray-900">
            Life-Altering Science™
          </h3>
        </div>
      </section>
      <CTASection />
      
    </>
  );
}
