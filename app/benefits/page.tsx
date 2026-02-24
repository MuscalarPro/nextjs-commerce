import { PlusIcon, MinusIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { ComparisonTableSection, LatestNewsSection } from "components/home";
import Link from "next/link";
import { getArticles } from "lib/shopify";

export default async function BenefitsPage() {
  const articles = await getArticles({ first: 10 });

  return (
    <>
      <section className="w-full bg-white py-10 lg:mb-4">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 pt-4 md:pt-24 lg:flex lg:flex-row justify-left flex flex-col-reverse">
          {/* LEFT CONTENT */}
          <div className="lg:w-[58rem] w-full">
            <h1 className="text-5xl lg:text-6xl font-semibold leading-tight text-gray-900 lg:m-0 m-4">
              Mitopure® Urolithin A, <br /> the 
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
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-8 items-start">
        {/* 
          ========================================
          Section 1: Ingredients & Clinical Studies 
          ========================================
        */}
        
        {/* <section className="w-full px-4 md:px-8 py-16 md:py-24 lg:py-32 flex justify-center lg:justify-end">
          <div className="w-full max-w-[800px] lg:max-w-[550px] xl:max-w-[600px]">
            <h2 className="text-4xl md:text-[2.75rem] font-medium text-[#1a1a1a] mb-8 tracking-tight leading-tight">
              Rigorously tested and<br className="hidden md:block"/> made from high-quality<br className="hidden md:block"/> ingredients
            </h2>
            <p className="text-[#333] text-[1.05rem] md:text-lg leading-[1.6] mb-12">
              We believe that it's our responsibility to take the extra steps necessary to ensure that our products are safe and effective, and we are committed to upholding these high standards for all of our dietary supplements.
            </p>

            <div className="border-t border-dotted border-gray-400">
              {accordions.map((item, index) => (
                <div key={index} className="border-b border-dotted border-gray-400">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full py-6 flex justify-between items-center text-left transition-opacity hover:opacity-70"
                  >
                    <span className="text-[#333] text-[1.1rem] font-serif pr-4">{item}</span>
                    {openAccordion === index ? (
                      <MinusIcon className="w-5 h-5 text-[#333] font-light flex-shrink-0" strokeWidth={1} />
                    ) : (
                      <PlusIcon className="w-5 h-5 text-[#333] font-light flex-shrink-0" strokeWidth={1} />
                    )}
                  </button>
                  {openAccordion === index && (
                    <div className="pb-6 text-[#4a4a4a] font-serif text-base leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                      Detailed information regarding the {item} certification and standard testing process ensures top-tier quality and safety for consumers globally.
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* 
          ========================================
          Section 2: 7 Placebo-Controlled 
          ========================================
        */}
        {/* <section className="w-full bg-[#f4f4f2] lg:bg-transparent py-16 md:py-24 lg:py-32 px-4 md:px-8 flex justify-center lg:justify-start">
          <div className="w-full max-w-[800px] lg:max-w-[550px] xl:max-w-[600px] lg:pl-12 xl:pl-20">
            <h2 className="text-3xl md:text-[2.65rem] font-medium text-[#1a1a1a] mb-6 tracking-tight leading-[1.1]">
              7 placebo-controlled<br className="hidden lg:block"/> clinical studies
            </h2>
            <p className="text-[#555] text-base md:text-[1.1rem] leading-[1.6] mb-10">
              For over 15 years, we have pioneered meaningful scientific discoveries on Urolithin A and put them to the scrutiny of the scientific community by publishing in high impact, peer-reviewed journals.
            </p>
             <div className="inline-block mb-12 hover:scale-105 active:scale-95 transition-transform duration-200">
                              <Link
                                href="/studies"
                                className="inline-flex items-center gap-2 bg-white px-8 py-3 text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-black hover:text-white transition-all"
                              >
                                OUR STUDIES
                                <ArrowRightIcon className="w-3 h-3" />
                              </Link>
                            </div>

            <div className="w-full flex justify-center lg:justify-start relative">
              <img 
                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Muscalarpro_capsule.png?v=1770369222" 
                alt="Scientific Product Image" 
                className="max-w-full h-auto w-[300px] lg:w-[350px] object-contain transform hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>
        </section> */}
      </div>
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
{/*  */}

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

      <section className="bg-white px-4 py-8 md:py-20 lg:py-6 mb-0">
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
 <div className="inline-block mb-12 hover:scale-105 active:scale-95 transition-transform duration-200">
                              <Link
                                href="/studies"
                                className="inline-flex items-center gap-2 bg-[#2b2b26] px-8 py-3 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-black hover:text-white transition-all w-fit"
                              >
                                OUR STUDIES{" "}
                                <ArrowRightIcon className="w-3 h-3" />
                              </Link>
                            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:ml-10 md:justify-end w-100">
            <img
              src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Muscalarpro_capsule.png?v=1770369222"
              alt="Scientific pipette"
              className="w-full  h-full object-contain"
            />
          </div>
        </div>

        {/* BOTTOM TEXT */}
        {/* <div className="mt-6 text-center">
          <h3 className="text-4xl md:text-4xl font-semibold text-gray-900">
            Life-Altering Science™
          </h3>
        </div> */}
      </section>
            <LatestNewsSection articles={articles} />
      
      {/* 
        ========================================
        Section 3: Footer
        ========================================
      */}
  
    </>
  );
}
