import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const { SITE_NAME } = process.env;

export default function CTASection() {
  return (
    <>
      <section className="relative w-full h-[120vh] min-h-[900px]">
        {/* Sticky Background Container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Top concave curve overlay */}
          <div className="absolute top-0 left-0 right-0 z-20 h-8 w-full bg-white rounded-b-[2rem] sm:h-10 sm:rounded-b-[2.5rem] md:h-12 md:rounded-b-[3rem]" />
          <Image
            src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/sp-cover.jpg?v=1768496297"
            alt="Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-8 lg:px-12">
              <div className="mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
                  {/* Left: Text Content */}
                  <div className="flex-1 space-y-8 text-left">
                    <h2 className="text-3xl font-sans font-normal leading-relaxed text-white md:text-6xl lg:text-7xl">
                      Muscle is your greatest superpower.
                    </h2>
                    {/* <p className="text-3xl font-sans font-normal leading-relaxed text-white md:text-4xl lg:text-5xl">
                      Health is your greatest
                      <br className="hidden md:block" />
                      Protect it today to extend your
                      <br />
                      musclespan—and your lifespan.
                    </p> */}

                    {/* CTA Button */}
                    <div className="pt-2">
                      <Link
                        href="/our-why"
                        className="inline-flex items-center gap-2 rounded-full bg-[#693979] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#693979] sm:px-8 sm:py-3.5 sm:text-base md:px-10 md:py-4"
                      >
                        <span>Start your musclespan protocol </span>
                        <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
