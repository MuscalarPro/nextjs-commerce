import CTASection from "components/layout/cta-section";
import Footer from "components/layout/footer";
import { AgeDial } from "components/roi/age-dial";
import { ScrollTextSection } from "components/roi/scroll-text-section";
import { StatsSection } from "components/roi/stats-section";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Why",
  description: "Our Why - Learn about our why and value proposition.",
};

export default function OurWhyPage() {
  return (
    <>
      {/* Banner Section */}
      <section className="w-full bg-white md:h-screen">
        {/* Mobile Hero Video - Sticky Behind Navbar */}
        <div className="sticky top-0 left-0 right-0 w-full h-[80vh] pb-16 md:hidden">
          <div className="relative w-full h-full overflow-hidden rounded-b-[2rem]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: "50% 75%" }}
            >
              <source
                src="https://cdn.shopify.com/videos/c/o/v/1e2c4954c1ef4b4fada104347c79c077.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        {/* Desktop Hero Video */}
        <div className="relative mx-auto hidden max-w-8xl px-4 py-6 sm:px-6 sm:py-8 md:block md:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
            <div className="relative aspect-[18/9] w-full md:aspect-[21/9] lg:aspect-[24/9]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "50% 75%" }}
              >
                <source
                  src="https://cdn.shopify.com/videos/c/o/v/105ff9a3b1d64bdd8ba94ac09ae39c91.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll-triggered Text + Bullets (white) */}
      <ScrollTextSection />

     

      {/* Why Is It So Hard Section (white, centered like screenshot) */}
      <section className="relative w-full bg-white py-16 pb-32 md:py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 font-inter text-[2.25rem] md:text-[3.25rem] font-normal leading-[1.25] text-black">
            Why is it so hard to stay strong?
          </h2>
          <p className="mx-auto max-w-4xl font-inter text-[1.25rem] md:text-[1.75rem] font-normal leading-[1.4] text-[#71717a]">
            In a world with more gyms, more protein, and more
            &quot;optimization&quot; than ever why does it still feel hard to
            maintain muscle, energy, and recovery?
          </p>
        </div>
        {/* Sticky gradient overlay at bottom - only applies to this section */}
        <div className="pointer-events-none sticky bottom-0 left-0 right-0 z-50 h-32 bg-gradient-to-b from-transparent via-white/60 to-white" />
      </section>

      {/* Video Section with Purple to Black Overlay */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-8xl px-6 md:px-8">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[2.75rem] lg:rounded-[3.25rem]">
            <div className="relative w-full aspect-[9/16] sm:aspect-[3/4] md:aspect-auto md:min-h-[640px] lg:min-h-[150vh]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source
                  src="https://cdn.shopify.com/videos/c/o/v/824b7f003c53476bb1f1a8a155667ebc.mp4"
                  type="video/mp4"
                />
              </video>

              {/* Purple to Black Gradient Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#a638b5]/60 via-[#a638b5]/30 to-black/80" />

              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between px-6 py-8 text-left text-white sm:px-8 sm:py-12 md:px-16 md:py-16 lg:px-20 lg:py-24">
                <div className="space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8">
                  <div className="space-y-12 text-xl font-normal text-center md:text-5xl">
                    <p>Where do I start?</p>
                    <p>Who do I trust?</p>
                    <p className="mx-auto max-w-xl">
                      What actually moves the needle: training... or cellular
                      renewal?
                    </p>
                    <p className="mx-auto max-w-xl">
                      What products and practices do I really need?
                    </p>
                  </div>
                </div>

                <div className="mx-auto max-w-xl space-y-4 text-center text-xl md:text-5xl">
                  <p>The questions are simple.</p>
                  <p className="text-white">
                    The answers <br />
                    <span className="text-[#9F3EAC]">
                      frustratingly complex
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHITE: Health deserves a revolution (heading + product UI image) */}
      <section className="relative w-full bg-white py-12 pb-32">
        <div className="mx-auto w-full max-w-8xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 font-inter text-[2.5rem] md:text-[3.25rem] font-normal leading-[1.25] text-black">
              Muscle deserves a revolution
            </h2>
          </div>

          {/* Video Section */}
          <div className="mx-auto mt-10 w-full max-w-4xl">
            {/* Mobile Video */}
            <div className="relative w-full md:hidden">
              <div className="relative overflow-hidden rounded-[2rem]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-auto w-full object-contain"
                >
                  <source
                    src="https://cdn.shopify.com/videos/c/o/v/fd5055e35c7f4f2685195c221ed7f2f2.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            {/* Desktop Video */}
            <div className="relative mx-auto hidden w-full max-w-4xl md:block">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-auto w-full object-contain"
                >
                  <source
                    src="https://cdn.shopify.com/videos/c/o/v/eb9fd3fdff7d4ee0913520cad39035ac.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>

          {/* WHITE: So we built superpower (narrative block) */}
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="font-inter text-[0.875rem] font-normal uppercase tracking-[0.2em] text-neutral-600">
              So we built it.
            </p>

            <div className="relative mx-auto mt-2 h-12 w-64 md:h-16 md:w-64">
              <Image
                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Muscalarpro_-_black.png?v=1768045102"
                alt="MuscalarPro"
                fill
                className="object-contain object-center"
                sizes="(min-width: 768px) 20rem, 15rem"
              />
            </div>

            <div className="mx-auto mt-8 max-w-4xl space-y-5 text-left font-inter text-[1.25rem] font-normal leading-[1.4] text-[#71717a] md:text-[1.75rem]">
              <p>
                The world&apos;s first cellular optimization protocol designed
                for the Organ of Longevity: skeletal muscle.
              </p>
              <p>
                We deliver clinically informed mitochondrial renewal molecules
                and vetted geroprotectors for people who want more than
                aesthetics people who want to stay strong, capable, and vital
                for decades.
              </p>
              <p>
                Because muscle isn&apos;t just something you &quot;build.&quot;
                It&apos;s your metabolic reserve, your resilience against
                injury, and a primary defense against the slow slide into
                frailty.
              </p>
              <p>
                If a muscle longevity protocol were built today - based on
                modern cellular biology instead of old bodybuilding dogma it
                would look completely different. Cellular. Mitochondrial.
                Autophagic.
              </p>
              <p className="font-medium text-black">
                And as life demands more of your body, your nutrition has to do
                more than &quot;support workouts.&quot;
              </p>
              <p className="font-medium text-black">
                It has to protect the tissue that protects your future.
              </p>
            </div>
          </div>
        </div>
        {/* Sticky gradient overlay at bottom - only applies to this section */}
        <div className="pointer-events-none sticky bottom-0 left-0 right-0 z-50 h-32 bg-gradient-to-b from-transparent via-white/60 to-white" />
      </section>

      <section className="w-full bg-gradient-to-b from-white via-neutral-500 to-black pb-0 pt-6 sm:pt-8 md:pt-12">
        {/* Mobile: Full width, no padding */}
        <div className="relative w-full overflow-hidden md:hidden">
          <div className="relative w-full">
            <Image
              src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/WhatsApp_Image_2025-12-23_at_11.50.11_PM.jpg?v=1768369096"
              alt="VO2 Hero"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
              sizes="100vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#a638b5] via-[#b84ac5] to-[#a638b5] mix-blend-overlay" />
          </div>
        </div>

        {/* Desktop: Original structure unchanged */}
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-6 lg:px-8">
          <div className="mb-0 overflow-hidden rounded-[1.5rem] sm:mb-0 sm:rounded-[2rem] md:mb-0 md:rounded-[2.5rem]">
            {/* Desktop Image */}
            <div className="relative hidden w-full md:block">
              <Image
                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/VO2max-2-e1695986084451-1.webp?v=1768046267"
                alt="VO2 Max"
                width={1200}
                height={800}
                className="h-auto w-full object-contain"
                sizes="(min-width: 768px) 72rem, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLACK: Our Mission + How we do it */}

      <section className="w-full bg-black py-12 sm:py-16 md:py-24">
        <div className="mx-auto w-full max-w-8xl px-4 sm:px-6 md:px-6 lg:px-8 text-white">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 font-inter text-[2rem] md:text-[2.75rem] font-normal leading-[1.25] text-white">
              Our Mission
            </h2>
            <p className="mb-6 font-inter text-[1rem] md:text-[1.5rem] font-normal leading-[1.4] text-white">
              To shift the paradigm from &quot;Lifespan&quot; to
              &quot;Musclespan&quot;.
            </p>
            <p className="mb-6 font-inter text-[1rem] md:text-[1.5rem] font-normal leading-[1.4] text-white">
              To provide clinically-dosed molecules that support cellular
              renewal, so you can stay strong at 40, 50, and beyond.
            </p>

            <AgeDial />

            <h2 className="mb-6 mt-12 font-inter text-[1.75rem] md:text-[2.25rem] font-normal leading-[1.25] text-white sm:mt-16">
              How we do it
            </h2>
            <div className="space-y-5 font-inter text-[1rem] font-normal leading-[1.4] text-[#71717a] md:text-[1.75rem] sm:space-y-6">
              <p>
                We&apos;ve created a protocol that lets you peek inside your
                muscle biology so you can take control of your musclespan.
              </p>
              <p>
                Every cycle begins with the same question: are your muscle cells
                getting stronger or just getting older?
              </p>
              <p>
                So we target the systems that dictate performance over decades:
                mitochondrial quality control and cellular cleanup.
              </p>
              <p>
                We curate what matters and cut what doesn&apos;t with a clear,
                transparent stack built around renewal, cleanup, and protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Orange placeholder section with black to white gradient */}
      <section className="w-full bg-gradient-to-b from-black via-neutral-500 to-white pb-0 pt-6 sm:pt-8 md:pt-12">
        <div className="mx-auto w-full max-w-8xl px-4 sm:px-6 md:px-6 lg:px-8">
          <div className="mb-0 overflow-hidden rounded-[1.5rem] bg-gradient-to-tr from-[#a638b5] via-[#b84ac5] to-[#a638b5] sm:mb-0 sm:rounded-[2rem] md:mb-0 md:rounded-[2.5rem]">
            {/* Mobile Image - Original Aspect Ratio */}
            <div className="relative w-full md:hidden">
              <Image
                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/SnapInsta.to_448070978_414890137676763_2097514751453973289_n_1.jpg?v=1768046494"
                alt="Image"
                width={1200}
                height={800}
                className="h-auto w-full object-contain"
                sizes="100vw"
              />
            </div>
            {/* Desktop Image - Fixed Height */}
            <div className="relative hidden h-48 w-full sm:h-56 md:block md:h-64 lg:h-80 xl:h-96">
              <Image
                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/SnapInsta.to_448070978_414890137676763_2097514751453973289_n_1.jpg?v=1768046494"
                alt="Image"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1280px) 88rem, (min-width: 768px) 100vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Text section with white background */}
      <section className="w-full bg-white pb-12 pt-6 sm:pb-16 sm:pt-8 md:pb-24 md:pt-12">
        <div className="mx-auto w-full max-w-8xl px-4 sm:px-6 md:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl px-4 pb-4 pt-2 text-left text-black sm:px-6 sm:pb-6 sm:pt-4 md:px-0 md:pb-8 md:pt-6">
            <h2 className="mb-6 font-inter text-[1.75rem] md:text-[2.25rem] font-normal leading-[1.25] text-black ">
              Looking Forward
            </h2>
            <p className="mb-6 font-inter text-[1rem] md:text-[1.5rem] font-normal leading-[1.4] text-[#71717a] ">
              In the next decade, we believe the convergence of muscle-centric
              medicine, mitochondrial science, and geroprotection will change
              how we age.
            </p>
            <p className="mb-6 font-inter text-[1rem] md:text-[1.5rem] font-normal leading-[1.4] text-[#71717a] ">
              Musclespan begins now.
            </p>
            <p className="mb-4 font-inter text-[1rem] md:text-[1.5rem] font-normal leading-[1.4] text-[#71717a] ">
              The future of longevity isn&apos;t another drug. It&apos;s your
              muscle.
            </p>

            <button className="w-full rounded-full bg-black px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-neutral-800 sm:w-auto sm:px-8 sm:py-3 sm:text-sm md:px-10 md:py-4 md:text-base">
              Join our waitlist
            </button>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
