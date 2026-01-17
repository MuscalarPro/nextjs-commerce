import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import CTASection from "components/layout/cta-section";
import Footer from "components/layout/footer";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  description:
    "Unlock your new health intelligence. 100+ lab tests. Every year. Detect early signs of 1,000+ conditions. All for only $17/month.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white pt-0 p-4 md:p-8">
        {/* Video container with padding and rounded border */}
        <div className="absolute inset-0 md:inset-2 md:rounded-3xl overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source
              src="https://cdn.shopify.com/videos/c/o/v/43f54af17a9b447bae865765edd8a740.mp4"
              type="video/mp4"
            />
          </video>
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-8xl p-4 pt-24 py-20 md:px-6">
          <div className="mx-auto max-w-5xl text-center">
            {/* Headline */}
            <h1 className="mb-8 text-5xl font-sans font-normal leading-[1.1] text-white md:text-6xl lg:text-7xl xl:text-8xl">
              Unlock your new
              <br />
              health intelligence
            </h1>

            {/* Description */}
            <p className="mb-10 text-xl leading-relaxed text-white md:text-2xl lg:text-3xl">
              100+ lab tests. Every year. Detect early signs of 1,000+
              conditions. All for only $17/month.
            </p>

            {/* CTA Button */}
            <div className="mb-6">
              <Link
                href="/testing"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-orange-600 md:px-12 md:py-5 md:text-xl"
              >
                <span>Join Today</span>
                <ArrowRightIcon className="h-6 w-6 md:h-7 md:w-7" />
              </Link>
            </div>

            {/* HSA/FSA Eligible */}
            <div className="flex items-center justify-center gap-2 text-white">
              <CheckIcon className="h-5 w-5 text-white md:h-6 md:w-6" />
              <span className="text-base md:text-lg">HSA/FSA eligible</span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#183019] py-4 md:py-8">
        <div className="mx-auto max-w-8xl px-2">
          <div className="grid gap-2 lg:grid-cols-[3fr_1fr]">
            {/* LEFT: Main feature card */}
            <div className="relative overflow-hidden rounded-2xl bg-[#3f5636] p-6 md:p-9">
              {/* top-left badge */}
              <div className="absolute left-6 top-6">
                <span className="inline-flex items-center rounded-full bg-[#c9f07b] px-4 py-1 text-xs font-semibold text-[#173216]">
                  Bestseller
                </span>
              </div>

              <div className="grid gap-8 md:grid-cols-[1.05fr_1.35fr] md:items-center md:gap-10">
                {/* product image */}
                <div className="flex items-center justify-center">
                  <div className="relative h-[220px] w-[220px] md:h-[380px] md:w-[380px]">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/DS-01_Transparent_ProductRender_Video1_12223634333271582.png?v=1768285032"
                      alt="Product"
                      fill
                      className="rounded-3xl object-cover "
                      priority
                    />
                  </div>
                </div>

                {/* content */}
                <div className="text-white">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full border border-white/60 bg-white/5 px-4 py-1 text-xs font-semibold tracking-wide">
                      DS–01
                      <span className="ml-0.5 align-super text-[10px]">®</span>
                    </span>
                  </div>

                  <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                    Daily Synbiotic
                  </h2>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-4xl font-semibold leading-none">
                      #1
                    </span>
                    <span className="text-sm font-semibold leading-tight text-white/90">
                      Digestive Health <br /> Probiotic*
                    </span>
                  </div>

                  <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90">
                    Eases bloating, improves regularity, and supports digestive
                    health with 24 targeted probiotic strains + a novel
                    prebiotic.*
                  </p>

                  <div className="mt-7 text-3xl font-semibold">$49.99</div>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <button className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#1a3319] shadow-sm transition hover:bg-white/90">
                      Learn More
                    </button>

                    <button className="text-sm font-semibold text-white underline underline-offset-4 transition hover:text-white/90">
                      Add To Cart
                    </button>
                  </div>

                  <p className="mt-6 text-xs leading-relaxed text-white/55">
                    *Source: SPINS, Combined Amazon + Target Sales data. Last 12
                    weeks ending in November 2025.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Hand with capsules and quiz CTA */}
            <div className="hidden md:block relative overflow-hidden rounded-[32px] h-full min-h-[400px] md:min-h-[500px]">
              {/* Background image with blurred green foliage */}
              <div className="absolute inset-0">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/1772635ea6ffdfde99cfe2a35498de31e0480971.webp?v=1768590476"
                  alt="Natural green background"
                  fill
                  className="object-cover "
                />
                
              </div>

              {/* Hand with capsules - placeholder, you can replace with actual image */}
              <div className="relative h-full flex items-center justify-center p-6 md:p-8">


                {/* Quiz CTA Box at bottom */}
                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-20">
                  <div className="rounded-2xl bg-[#2d4a2a]/80 backdrop-blur-md p-4 md:p-5 border border-green-800/30">
                    <p className="text-white text-sm md:text-base mb-2 font-medium">
                      Is DS-01<sup className="text-xs">®</sup> the right
                      probiotic for you?
                    </p>
                    <Link
                      href="/quiz"
                      className="text-white underline underline-offset-2 font-medium hover:opacity-80 transition-opacity text-sm md:text-base"
                    >
                      Take the Quiz
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You are more than human section */}
      <section className="w-full bg-white py-8 md:py-12">
        <div className="mx-auto max-w-8xl px-4 md:px-6">
          <div className="grid gap-2 lg:grid-cols-2 lg:items-center lg:gap-12">
            {/* Left Column - Text Content */}
            <div className="space-y-4 md:space-y-8">
              {/* Headline */}
              <h2 className="text-[2rem] md:text-[3rem]  text-[#1a3319] leading-tight text-center md:text-left">
                You are more than human.
              </h2>

              {/* Description */}
              <p className="text-[1rem] md:text-[1.25rem] text-neutral-700 leading-relaxed max-w-2xl text-center md:text-left mx-auto md:mx-0">
                Your body isn't yours alone—it's home to 38 trillion microbes that power your digestion, immunity and more. Take a few minutes to learn how their health impacts your health—and how to maximize both.
              </p>

              {/* Discover Button */}
              <div className="pt-4 hidden md:block">
                <Link 
                  href="/science/microbiome-101"
                  className="inline-flex items-center gap-3 rounded-full bg-[#1a3319] px-8 py-4 text-white font-semibold hover:bg-[#1a3319]/90 transition-colors"
                >
                  <span>Discover</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>

             
            </div>

            {/* Right Column - Human Anatomy Illustration */}
            <div className="relative md:h-[75vh] h-[40vh] rounded-2xl overflow-hidden">
              <Image
                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/videoframe_7015.png?v=1768635095"
                alt="Human anatomy illustration with video controls"
                fill
                className="object-cover object-center  w-full"
                priority
              />                 
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
