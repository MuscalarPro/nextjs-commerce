import Image from "next/image";
import Link from "next/link";

export function HowItWorksRevitalizeSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[800px] overflow-hidden mt-1">
      {/* Background Image */}
      <div className="absolute inset-0 md:inset-2 md:rounded-2xl overflow-hidden">
        <Image
          src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/491ae5ed9d77ae24a3d56d360dda0eba665a3212-2400x2784.avif?v=1772260237"
          alt="Woman revitalizing mitochondria"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Subtle gradient overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent w-full md:w-3/4" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto px-6 md:px-12 flex items-center">
        <div className="max-w-xl text-white space-y-8 mt-12 md:mt-0">
          <h2 className="text-2xl md:text-4xl lg:text-[38px] font-medium leading-[1.3] drop-shadow-md">
            Mitopure® is clinically proven to revitalize mitochondria, targeting signs of aging at the foundation.
          </h2>
          <div>
            <Link
              href="/science/benefits"
              className="inline-block bg-white text-black px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase hover:bg-neutral-200 transition-colors shadow-lg rounded-full"
            >
              DISCOVER ALL BENEFITS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
