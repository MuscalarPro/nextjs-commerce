import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex md:items-center  items-end justify-center overflow-hidden bg-white pt-0 p-4 md:p-8">
      <div className="absolute inset-0 md:inset-4 md:rounded-2xl overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://cdn.shopify.com/videos/c/o/v/2e2f6360bc8e41a782106ede268a1065.webm"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-8xl py-10 md:pt-40">
        <div className="mx-auto max-w-5xl left-left md:text-center">
          <h1 className="mb-8 text-3xl font-sans font-normal leading-[1.1] text-white md:text-5xl">
            Unlock your
            <br />
 peak-performance intelligence          </h1>

          <p className="mb-10 text-[1rem] md:text-[1.5rem] leading-relaxed text-white max-w-2xl mx-auto">
mitochondria, muscle strength, peak endurance, and brain support in one daily stack built on Urolithin A human RCTs (~₹100/day)          </p>

          <div className="mb-6">
            <Link
              href="/product/daily-synbiotic"
              className="inline-flex items-center gap-2 rounded-full bg-[#693979] px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#693979] md:px-12 md:py-5 md:text-xl"
            >
              <span>Start Daily M3</span>
              <ArrowRightIcon className="h-6 w-6 md:h-7 md:w-7" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
