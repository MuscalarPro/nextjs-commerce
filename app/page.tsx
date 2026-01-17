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

const expert_avatars = [
  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/3995e79f24939d98e7437ed328d784a762511acd-800x1000.avif?v=1768641847",
  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/3995e79f24939d98e7437ed328d784a762511acd-800x1000.avif?v=1768641847",
  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/3995e79f24939d98e7437ed328d784a762511acd-800x1000.avif?v=1768641847",
  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/3995e79f24939d98e7437ed328d784a762511acd-800x1000.avif?v=1768641847",
];

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

      {/* Research Stats Section */}
      <section className="w-full bg-neutral-50 py-4 md:py-8">
        <div className="mx-auto max-w-8xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4  gap-8 md:gap-8 ">
            {/* Stat 1: Years of research */}
            <div className="space-y-2">
              <div className="text-[2rem] md:text-[3rem]  ">
                15+
              </div>
              <div className="border-t-2 border-dotted border-neutral-400"></div>
              <h3 className="text-[1rem] md:text-[1.25rem]">
                Years of research
              </h3>
              <p className="text-[0.875rem] md:text-[1rem] text-neutral-500 leading-relaxed">
                In collaboration with the Swiss Federal Institute of Technology de Lausanne (EPFL)
              </p>
            </div>

            {/* Stat 2: Human clinical trials */}
            <div className="space-y-2">
              <div className="text-[2rem] md:text-[3rem]">
                11
              </div>
              <div className="border-t-2 border-dotted border-neutral-400"></div>
              <h3 className="text-[1rem] md:text-[1.25rem]">
                Human clinical trials
              </h3>
              <p className="text-[0.875rem] md:text-[1rem] text-neutral-500 leading-relaxed">
                Completed and ongoing clinical trials involving over 900 participants
              </p>
            </div>

            {/* Stat 3: Studies on Urolithin A */}
            <div className="space-y-2">
              <div className="text-[2rem] md:text-[3rem]">
                500+
              </div>
              <div className="border-t-2 border-dotted border-neutral-400"></div>
              <h3 className="text-[1rem] md:text-[1.25rem]">
                Studies on Urolithin A
              </h3>
              <p className="text-[0.875rem] md:text-[1rem] text-neutral-500 leading-relaxed">
                Scientists have extensively explored the effectiveness of Urolithin A on health
              </p>
            </div>

            {/* Stat 4: Patents */}
            <div className="space-y-2">
              <div className="text-[2rem] md:text-[3rem]">
                56
              </div>
              <div className="relative">
                <div className="border-t-2 border-dotted border-neutral-400"></div>
                
              </div>
              <h3 className="text-[1rem] md:text-[1.25rem]">
                Patents
              </h3>
              <p className="text-[0.875rem] md:text-[1rem] text-neutral-500 leading-relaxed">
                Our proprietary ingredient Mitopure® is protected under 50+ patents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mitopure Clinically Proven Benefits Section */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden bg-white p-4 md:p-8">
        {/* Background Image with padding and rounded border */}
        <div className="absolute inset-0 md:inset-2 md:rounded-xl overflow-hidden">
          <Image
            src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/c92af07e442e6a81aa270a22a64da56ba026fa22-2800x1327.avif?v=1768641347"
            alt="Athletes running background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-8xl p-4 py-10 md:py-20 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Section - Text Content */}
            <div className="space-y-6 md:space-y-8 text-white">
              {/* Headline */}
              <div className="text-sm md:text-base font-semibold uppercase tracking-wide text-white/90">
                CLINICALLY PROVEN BENEFITS
              </div>

              {/* Benefits List */}
              <div className="space-y-2 md:space-y-3">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  Renewal
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  Strength
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  Energy
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  Bioavailability
                </div>
              </div>

              {/* Supporting Claim */}
              <p className="text-base md:text-lg text-white/90 max-w-xl">
                Mitochondrial renewal increases by +39% after 16 weeks over placebo*
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href="/study-details"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-colors"
                >
                  SEE STUDY DETAILS
                </Link>
              </div>
            </div>

            {/* Right Section - Bar Chart */}
            <div className="lg:flex lg:justify-end">
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 md:p-8 w-full max-w-md">
                {/* Chart Title */}
                <div className="mb-6">
                  <div className="text-white text-sm font-semibold uppercase tracking-wide mb-2">
                    INCREASE IN MITOPHAGY
                  </div>
                </div>

                {/* Chart Container */}
                <div className="relative h-64 md:h-80">
                  {/* Y-axis Labels */}
                  <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-white/70 text-xs md:text-sm pr-2">
                    <span>50%</span>
                    <span>40%</span>
                    <span>30%</span>
                    <span>20%</span>
                    <span>10%</span>
                    <span>0</span>
                  </div>

                  {/* Chart Bars */}
                  <div className="ml-12 md:ml-16 h-full flex items-end gap-6 md:gap-8">
                    {/* Placebo Bar */}
                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-neutral-400 h-[20%] rounded-t"></div>
                      <div className="mt-2 text-white text-xs md:text-sm text-center">
                        PLACEBO
                      </div>
                    </div>

                    {/* Mitopure Bar */}
                    <div className="flex-1 flex flex-col items-center relative">
                      <div className="w-full bg-white h-[39%] rounded-t relative">
                        {/* Percentage Label */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-white text-2xl md:text-3xl font-bold whitespace-nowrap">
                          +39%
                        </div>
                      </div>
                      <div className="mt-2 text-white text-xs md:text-sm text-center font-semibold">
                        mitopure®
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Testimonial Section */}
      <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto w-full max-w-8xl px-5 md:px-8">
        {/* Headline */}
        <h2 className="max-w-2xl text-[2rem] leading-[1.08] tracking-[-0.02em] text-black md:text-[3rem]">
          Find out why the experts trust Urolithin A from Timeline
        </h2>

        <div className="mt-10 grid grid-cols-1 items-center   lg:grid-cols-2">
          {/* Left: Portrait */}
          <div className="w-full">
            <div className="relative h-[400px] w-[400px] overflow-hidden rounded-lg bg-neutral-200">
              <div className="relative aspect-[1/1]">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/3995e79f24939d98e7437ed328d784a762511acd-800x1000.avif?v=1768641847"
                  alt="Dr. Gabrielle Lyon"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Avatars + Quote */}
          <div className="w-full">
            {/* Avatars row - slightly overlapping */}
            <div className="flex items-center -space-x-3">
              {expert_avatars.map((avatar_url, index) => {
                // First two in color, last two in grayscale
                const isColor = index < 2;
                return (
                  <div
                    key={`${avatar_url}-${index}`}
                    className={[
                      "relative h-14 w-14 overflow-hidden rounded-full bg-neutral-200 md:h-16 md:w-16",
                      "ring-2 ring-white z-10",
                      !isColor && "grayscale",
                    ].join(" ")}
                    style={{ zIndex: expert_avatars.length - index }}
                  >
                    <Image
                      src={avatar_url}
                      alt={`Expert ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                );
              })}
            </div>

            {/* Quote */}
            <blockquote className="mt-6 md:mt-8 max-w-[720px] font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed text-black">
              "No other supplement does what Timeline can. It is an amazing advance for muscle health and longevity."
            </blockquote>

            {/* Attribution */}
            <div className="mt-6 md:mt-8 space-y-1">
              <div className="text-lg md:text-xl font-bold text-black">
                Dr. Gabrielle Lyon
              </div>
              <div className="text-base md:text-lg text-neutral-600">
                Founder Institute for Muscle-Centric Medicine®
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <CTASection />
      <Footer />
    </>
  );
}
