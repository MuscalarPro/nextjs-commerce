import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const { SITE_NAME } = process.env;

export default function CTASection() {
  return (
    <>
      <section className="relative w-full min-h-[80vh] md:min-h-[90vh] overflow-hidden text-white">
        {/* Background Image - Person's back/shoulder */}
        <div className="absolute inset-0">
          <Image
            src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/sp-cover.jpg?v=1768496297"
            alt="Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Content */}
        <div className="relative mx-auto w-full max-w-7xl px-6 py-40 md:px-8 md:py-48 lg:px-12 lg:py-56">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
              {/* Left: Text Content */}
              <div className="flex-1 space-y-8 text-left">
                <p className="text-3xl font-sans font-normal leading-relaxed text-white md:text-4xl lg:text-5xl">
                  Health is your greatest
                  <br />
                  superpower. It's time
                  <br />
                  to unlock it.
                </p>

                {/* CTA Button */}
                <div className="pt-2">
                  <Link
                    href="/testing"
                    className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600 sm:px-8 sm:py-3.5 sm:text-base md:px-10 md:py-4"
                  >
                    <span>Start testing</span>
                    <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
