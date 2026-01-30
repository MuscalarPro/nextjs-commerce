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
            src="https://cdn.shopify.com/videos/c/o/v/43f54af17a9b447bae865765edd8a740.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-8xl py-10 md:pt-40">
        <div className="mx-auto max-w-5xl left-left md:text-center">
          <h1 className="mb-8 text-3xl font-sans font-normal leading-[1.1] text-white md:text-5xl">
            Unlock your new
            <br />
            health intelligence
          </h1>

          <p className="mb-10 text-[1rem] md:text-[1.5rem] leading-relaxed text-white max-w-2xl mx-auto">
            100+ lab tests. Every year. Detect early signs of 1,000+ conditions.
            All for only $17/month.
          </p>

          <div className="mb-6">
            <Link
              href="/testing"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-orange-600 md:px-12 md:py-5 md:text-xl"
            >
              <span>Join Today</span>
              <ArrowRightIcon className="h-6 w-6 md:h-7 md:w-7" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
