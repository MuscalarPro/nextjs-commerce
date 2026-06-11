"use client";

import Image from "next/image";
import Link from "next/link";

export function BodyDecodingSection() {
  return (
    <section className="bg-[#0d2e2e] w-full overflow-hidden">
      <div className="relative text-white pb-0">
        {/* Background Visual (Woman) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/hf_20260611_120427_2ae3f73a-ea06-4766-930e-f2ec1202783b_1.png?v=1781204357"
            alt="Woman background"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 pt-8 pb-8 text-center">
          <h2 className="text-[36px] font-normal leading-[1.1] md:text-[54px] tracking-tight">
            Decode what your <br /> body&apos;s been telling you
          </h2>
        </div>

        {/* Hero Floating UI Visual — full-bleed edge-to-edge across the
            viewport (no max-w cap) so the metric cards span the entire
            screen width. Container uses aspect-[3/1] so it stays a
            controlled height at every breakpoint — short enough to sit
            above the woman's face in the background. object-cover scales
            the 1440×714 image to fill the full width, cropping the
            bottom slice of the image (object-top keeps the metric cards
            anchored to the visible top portion). */}
        <div className="relative z-20 w-full">
          <div className="relative aspect-[1440/714] w-full overflow-hidden">
            <Image
              src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/floating_app_metrics_12jun26.png?v=1781213563"
              alt="Floating Health Metrics"
              fill
              sizes="100vw"
              className="object-contain object-top"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative mb-6 -mt-8 md:-mt-12 z-30 overflow-hidden rounded-[40px] bg-gradient-to-b from-black/40 to-transparent backdrop-blur-2xl border border-white/10 shadow-2xl min-h-[500px]">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 md:px-16 pt-16 pb-0 h-full">
          <div className="md:w-[30%] text-center mb-12 md:mb-0 md:self-center md:-translate-y-8">
            <h3 className="mb-6 text-[32px] font-normal md:text-[42px] leading-[1.1] tracking-tight text-[#9ebfb5]">
              Discover your <br /> baseline
            </h3>
            <p className="mx-auto max-w-[280px] text-[15px] text-[#9ebfb5]/80 leading-relaxed">
              Comprehensive bloodwork across muscle, metabolism, hormones, and
              recovery. Know where you actually stand.
            </p>
          </div>

          <div className="relative h-[400px] w-full md:w-[40%] flex justify-center self-end">
            <div className="relative h-full w-[280px] md:w-[340px] translate-y-12 md:translate-y-16">
              <Image
                src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Group_85.png?v=1777414570"
                alt="Action Plan Phone"
                fill
                className="object-contain object-top"
              />
            </div>
          </div>

          <div className="md:w-[30%] text-center flex flex-col items-center mt-12 md:mt-0 md:self-center md:-translate-y-8">
            <h3 className="mb-6 text-[32px] font-normal md:text-[42px] leading-[1.1] tracking-tight text-white">
              Plan your <br /> breakthrough
            </h3>
            <p className="mb-10 mx-auto max-w-[280px] text-[15px] text-white/80 leading-relaxed">
              Optimize your health with a doctor-developed Action Plan.
            </p>
            <Link
              href="/quiz"
              className="rounded-full bg-[#0a1f1f] px-8 py-3 text-[14px] font-medium text-white transition-all hover:bg-black border border-white/10 shadow-lg mb-12"
            >
              Explore the plan
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Left Card: Biological Age */}
          <div className="flex flex-col rounded-[40px] p-8 md:p-12 border border-white/10 bg-white/5 shadow-xl justify-between min-h-[500px]">
            <div className="text-center">
              <h4 className="text-[32px] md:text-[42px] font-normal tracking-tight text-white mb-6">
                Unlock your
              </h4>

              <div className="relative mx-auto w-full max-w-[260px] h-[300px] rounded-[32px] overflow-hidden mb-6">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/p10.png?v=1781204355"
                  alt="Biological Age"
                  fill
                  className="object-contain"
                />
              </div>

              <h4 className="text-[28px] md:text-[36px] font-normal text-white">
                Biological Age
              </h4>
            </div>

            <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-[14px] text-white/70 max-w-[220px] text-center md:text-left leading-relaxed">
                Reveal how fast your body is aging compared to your actual age.
              </p>
              <Link
                href="/science"
                className="rounded-full bg-[#0a1f1f] px-6 py-3 text-[14px] font-medium text-white transition-all hover:bg-black border border-white/10 shadow-lg whitespace-nowrap"
              >
                Get the science
              </Link>
            </div>
          </div>

          {/* Right Card: Biomarkers */}
          <div className="relative flex flex-col rounded-[40px] p-8 md:p-12 border border-white/10 bg-white/5 shadow-xl overflow-hidden min-h-[500px]">
            <div className="relative z-20 text-center">
              <h4 className="text-[32px] md:text-[42px] font-normal tracking-tight leading-tight text-white mb-2">
                Test 130+ <br /> biomarkers
              </h4>
            </div>

            {/* Biomarkers Wall Background */}
            <div className="absolute inset-0 z-0 overflow-hidden px-4 md:px-6 flex items-center justify-center pt-24 opacity-30">
              <div className="text-[12px] md:text-[14px] text-white font-medium leading-[2.2] tracking-wide whitespace-nowrap text-center space-y-2">
                <p>
                  Cholesterol{" "}
                  <span className="mx-2 px-3 py-0.5 rounded-full border border-white/40 text-[10px] text-white/60">
                    Heart
                  </span>{" "}
                  Lipoprotein
                </p>
                <p>
                  Hemaglobin A1c Fasting Insulin Follicle Stimulating Ho{" "}
                  <span className="mx-2 px-3 py-0.5 rounded-full border border-white/40 text-[10px] text-white/60">
                    Metabolism
                  </span>
                </p>
                <p>Follicle Stimulating Hormone Creatinine Sulfate Thyroid</p>
                <p>
                  Thyroxine (T4){" "}
                  <span className="mx-2 px-3 py-0.5 rounded-full border border-white/40 text-[10px] text-white/60">
                    Thyroid
                  </span>
                </p>
                <p>Triliodothyronine (T3) Free Thyroxine (T4) Free</p>
                <p>Triliodothyronine (T3) Reverse Ferritin</p>
                <p>Immune White Cell Count Monocytes Neutrophils</p>
                <p>
                  Total I{" "}
                  <span className="mx-2 px-3 py-0.5 rounded-full border border-white/40 text-[10px] text-white/60">
                    Potassium
                  </span>{" "}
                  Sodium Chloride Carbon
                </p>
                <p>Red Blood Cell Distribution Width Mean</p>
                <p>Immune White Cell Count Platelets</p>
                <p>Red Blood Cell Distribution Width Mean</p>
                <p>Red Blood Cell Count Platelets</p>
              </div>
            </div>

            {/* Woman Image Overlay */}
            <div className="absolute bottom-0 left-1/2 w-[350px] md:w-[450px] h-[350px] md:h-[400px] -translate-x-1/2 z-10 pointer-events-none">
              <Image
                src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/8a7c3f21-3b25-48ca-b6c2-645eda021deb_1.png?v=1777415714"
                alt="Woman"
                fill
                className="object-contain object-bottom"
              />
            </div>

            <div className="relative z-30 mt-auto flex justify-center pb-4">
              <button className="rounded-full bg-black/50 backdrop-blur-xl px-8 py-3 text-[14px] font-medium border border-white/20 text-white shadow-2xl transition-all hover:bg-black/70">
                Meet the markers
              </button>
            </div>
          </div>
        </div>

        {/* Compliance / disclaimer copy — closes out the section under the
            two cards. Kept narrow and low-contrast so it reads as fine print. */}
        <div className="relative z-10 mx-auto mt-10 max-w-3xl px-6 pb-2 text-center md:mt-14">
          <p className="text-[12px] leading-relaxed text-white/55 md:text-[13px]">
            Not available in all 50 states. Eligibility determination and
            prescription required for all lab tests. Lab results alone are not
            intended to diagnose, treat, or cure any condition. The Biological
            Age calculation is only an estimate that reflects an aggregate of
            multiple body systems based on blood biomarkers, but is not an
            exact measurement and should be interpreted as a model-based
            approximation of your current aging status. The calculation is for
            informational purposes only and should not be used as a diagnostic
            tool. The Biological Age calculation does not determine eligibility
            for any medications or treatments provided via the MuscalarPro
            platform. Consultation with a healthcare provider is required to
            assess suitability for any medical treatment based on individual
            health and medical history.
          </p>
        </div>
      </div>
    </section>
  );
}
