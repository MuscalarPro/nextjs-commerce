import Image from "next/image";

export function LabsCtaSection() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-4">
        <div className="relative overflow-hidden rounded-[32px] md:rounded-[40px]">
          {/* Background image */}
          <Image
            src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Landscape.jpg?v=1769576689"
            alt="Seed Labs landscape"
            fill
            priority
            className="object-cover"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Content */}
          <div className="relative flex min-h-[320px] flex-col items-center justify-center px-6 py-16 text-center md:min-h-[380px]">
            {/* Vertical location label - desktop only */}

            <h2 className="text-3xl font-semibold text-white md:text-5xl">
              M3™ [Labs]
            </h2>
            <p className="mt-3 max-w-xl text-sm text-white/90 md:text-base">
              M3™ is a full-formula standard: identity and potency checks, plus screening for common contaminants—because what’s not in your supplement matters too.
            </p>
            <button className="mt-6 rounded-full bg-[#F7F8F2] px-8 py-2.5 text-sm font-medium text-[#1E2A1E] shadow-sm hover:bg-white/90">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
