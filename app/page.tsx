import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import CTASection from "components/layout/cta-section";
import Footer from "components/layout/footer";
import type { Metadata } from "next";
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

      <CTASection />
      <Footer />
    </>
  );
}
