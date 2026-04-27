"use client";

import Image from "next/image";
import Link from "next/link";

export function BodyDecodingSection() {
  return (
    <section className="bg-white">
      {/* Hero Visual Part */}
      <div className="relative min-h-[750px] w-full overflow-hidden bg-black text-white">
        {/* Background Visual (Woman) */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/f0d636db5cde55eaef740e2984931fc5dfc81c4f.png?v=1777285190" 
            alt="Woman background" 
            fill 
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d2e2e]/60 via-transparent to-[#0d2e2e]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 text-center">
          <h2 className="mb-8 text-[42px] font-normal leading-tight md:text-[64px] tracking-tight">
            Decode what your <br /> body&apos;s been telling you
          </h2>
        </div>

        {/* Hero Floating UI Visual */}
        <div className="relative z-20 h-[500px] w-full flex items-center justify-center">
           <div className="relative w-full h-full max-w-[1200px] transform translate-y-8 scale-110">
              <Image 
                src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/f2a12f0227d2f4b18b180915e9103b4c33600565.png?v=1777281879" 
                alt="Floating Health Metrics" 
                fill 
                className="object-contain" 
              />
           </div>
        </div>
      </div>

      {/* Grid Cards Part */}
      <div className="bg-[#0d2e2e] py-24 text-white">
        <div className="mx-auto max-w-6xl px-4">
          
          {/* Top Card: Baseline & Breakthrough */}
          <div className="relative mb-6 overflow-hidden rounded-[40px] border border-white/10 shadow-2xl min-h-[500px]">
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 h-full">
                <div className="md:w-1/3 text-center md:text-left">
                   <h3 className="mb-6 text-[36px] font-normal md:text-[54px] leading-[1.1] tracking-tight">
                      Discover your <br /> baseline
                   </h3>
                   <p className="mx-auto md:mx-0 max-w-[280px] text-[14px] text-white/50 leading-relaxed">
                      Comprehensive bloodwork across muscle, metabolism, hormones, and recovery. Know where you actually stand.
                   </p>
                </div>

                <div className="relative my-12 md:my-0 h-[350px] w-full md:w-1/3 flex justify-center">
                   <div className="relative h-full w-[260px]">
                      <Image 
                        src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/67b552ccd70606f64c2ee8d7406b9c7c8808f158.png?v=1777282596" 
                        alt="Action Plan Phone" 
                        fill 
                        className="object-contain" 
                      />
                   </div>
                </div>

                <div className="md:w-1/3 text-center md:text-right flex flex-col md:items-end">
                   <h3 className="mb-6 text-[36px] font-normal md:text-[54px] leading-[1.1] tracking-tight">
                      Plan your <br /> breakthrough
                   </h3>
                   <p className="mb-12 mx-auto md:mr-0 max-w-[280px] text-[14px] text-white/50 leading-relaxed">
                      Optimize your health with a doctor-developed Action Plan.
                   </p>
                   <Link href="/quiz" className="rounded-full bg-white/5 backdrop-blur-md px-10 py-4 text-[14px] font-bold border border-white/20 transition-all hover:bg-white/10">
                      Explore the plan
                   </Link>
                </div>
             </div>
          </div>

          {/* Bottom Two Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            
            {/* Left Card: Biological Age */}
            <div className="flex flex-col rounded-[40px] p-12 border border-white/10 shadow-xl justify-between min-h-[450px]">
               <div className="text-center">
                  <h4 className="text-[42px] font-normal tracking-tight mb-8">Unlock your</h4>
                  
                  <div className="relative mx-auto w-full max-w-[340px] aspect-[3/4] rounded-[32px] overflow-hidden border border-white/5">
                     <Image 
                       src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/585ecc26339eeab6162796fa4d12fa4cbfcae23d.png?v=1777286585" 
                       alt="Biological Age" 
                       fill 
                       className="object-cover object-center"
                     />
                     {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" /> */}
                     
                

                     <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full">
                        <p className="text-[28px] font-normal text-white">Biological Age</p>
                     </div>
                  </div>
               </div>

               <div className="mt-12 flex flex-col items-center">
                  <p className="text-[16px] text-white/50 mb-8 max-w-[320px] text-center">
                    Reveal how fast your body is aging compared to your actual age.
                  </p>
                  <Link href="/science" className="rounded-full bg-black/40 backdrop-blur-md px-10 py-4 text-[14px] font-bold border border-white/20 transition-all hover:bg-white/10">
                     Get the science
                  </Link>
               </div>
            </div>

            {/* Right Card: Biomarkers */}
            <div className="relative flex flex-col rounded-[40px]  p-12 border border-white/10 shadow-xl overflow-hidden min-h-[600px]">
               <div className="relative z-20 text-center">
                  <h4 className="text-[42px] md:text-[54px] font-normal tracking-tight leading-tight text-white mb-2">
                    Test 130+ <br /> biomarkers
                  </h4>
               </div>

               {/* Biomarkers Wall Background */}
               <div className="absolute inset-0 z-0 overflow-hidden px-6 flex items-center justify-center pt-24 opacity-20">
                  <div className="text-[14px] text-white font-medium leading-[2.2] tracking-wide whitespace-nowrap text-center space-y-2">
                     <p>Cholesterol <span className="mx-2 px-3 py-0.5 rounded-full border border-white/40 text-[10px] text-white/60">Heart</span> Lipoprotein</p>
                     <p>Hemaglobin A1c Fasting Insulin Follicle Stimulating Ho <span className="mx-2 px-3 py-0.5 rounded-full border border-white/40 text-[10px] text-white/60">Metabolism</span></p>
                     <p>Follicle Stimulating Hormone Creatinine </p>
                     <p>Thyroxine (T4) <span className="mx-2 px-3 py-0.5 rounded-full border border-white/40 text-[10px] text-white/60">Thyroid</span></p>
                     <p>Triliodothyronine (T3) Free Thyroxine (T4) Free</p>
                     <p>Triliodothyronine (T3) Reverse Ferritin</p>
                     <p>Immune White Cell Count Monocytes Neutrophils</p>
                     <p>Total I <span className="mx-2 px-3 py-0.5 rounded-full border border-white/40 text-[10px] text-white/60">Potassium</span> Sodium Chloride Carbon</p>
                     <p>Red Blood Cell Distribution Width Mean</p>
                     <p>Immune White Cell Count Platelets</p>
                     <p>Red Blood Cell Distribution Width Mean</p>
                     <p>Red Blood Cell Count Platelets</p>
                  </div>
               </div>

               {/* Woman Visual Overlay */}
               <div className="absolute inset-0 z-10 flex items-end justify-center pointer-events-none">
                  <div className="relative w-full h-full max-w-[500px]">
                     <Image 
                       src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/e8d48952bc3a37788f03c64fcbbe1815b76b4236.png?v=1777286620" 
                       alt="Biomarkers Visual" 
                       fill 
                       unoptimized={true}
                       className="object-contain object-bottom mix-blend-screen opacity-90"
                     />
                  </div>
               </div>

               <div className="relative z-30 mt-auto flex justify-center pb-8">
                  <button className="rounded-full bg-black/60 backdrop-blur-xl px-12 py-5 text-[15px] font-bold border border-white/10 text-white shadow-2xl transition-all hover:bg-black/80">
                     Meet the markers
                  </button>
               </div>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-16 max-w-4xl mx-auto">
             <p className="text-[10px] text-white/30 text-center leading-relaxed">
               Not available in all 50 states. Eligibility determination and prescription required for all lab tests. Lab results alone are not intended to diagnose, treat, or cure any condition. The Biological Age calculation is only an estimate that reflects an aggregate of multiple body systems based on blood biomarkers, but is not an exact measurement and should be interpreted as a model-based approximation of your current aging status. The calculation is for informational purposes only and should not be used as a diagnostic tool. The Biological Age calculation does not determine eligibility for any medications or treatments provided via the Hims & Hers platform. Consultation with a healthcare provider is required to
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
