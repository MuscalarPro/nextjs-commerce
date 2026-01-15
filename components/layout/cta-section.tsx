import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const { SITE_NAME } = process.env;


export default function CTASection() {
  return (
    <section className="relative w-full overflow-hidden text-white">
      {/* Background Image - Person's back/shoulder */}
      <div className="absolute inset-0">
        <Image
          src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/1708.jpg?v=1767904917"
          alt="Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay that transitions from light to dark green, matching page flow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-[#8B4513]/40 to-[#1a5f3f]/80" />
        {/* Additional gradient layer for depth and smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#6B3410]/30 to-[#1a5f3f]/70" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 md:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-4xl space-y-8 text-center md:space-y-10">
          <p className="text-2xl font-sans font-normal leading-relaxed text-white md:text-3xl lg:text-4xl">
            It is our belief that if you improve your health, you can improve
            every other aspect of your life.
          </p>
          <p className="text-2xl font-sans font-normal leading-relaxed text-white md:text-3xl lg:text-4xl">
            However, mainstream medicine has not helped many of us do that.
          </p>
          <p className="text-2xl font-sans font-normal leading-relaxed text-white md:text-3xl lg:text-4xl">
            It is often one size fits all, reacts too late, and misses the full
            picture.
          </p>
          <p className="text-2xl font-sans font-normal leading-relaxed text-white md:text-3xl lg:text-4xl">
            We built {SITE_NAME} to change that.
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <Link
              href="/testing"
              className="inline-flex items-center gap-2 rounded-full bg-[#a638b5] px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#a638b5]/80 sm:px-8 sm:py-3 sm:text-sm md:px-10 md:py-4 md:text-base"
            >
              <span>Start testing</span>
              <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

