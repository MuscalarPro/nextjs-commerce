import Image from "next/image";
import Link from "next/link";

interface LabsCtaSectionProps {
  show?: ("muscalar" | "shop")[];
}

export function LabsCtaSection({
  show = ["muscalar", "shop"],
}: LabsCtaSectionProps) {
  const showMuscalar = show.includes("muscalar");
  const showShop = show.includes("shop");
  const BOTH_SHOWN = showMuscalar && showShop;

  return (
    <section className="w-full py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div
          className={`grid gap-6 md:gap-8 ${
            BOTH_SHOWN ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
          }`}
        >
          {/* Card 1: Muscalar Lab */}
          {showMuscalar && (
            <div className="relative overflow-hidden rounded-[32px] md:rounded-[40px] group">
              {/* Background image */}
              <Image
                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Landscape.jpg?v=1769576689"
                alt="Seed Labs landscape"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="relative flex min-h-[350px] flex-col items-center justify-center px-8 py-16 text-center md:min-h-[420px]">
                <h2 className="text-3xl font-semibold text-white md:text-5xl tracking-tight">
                  M
                </h2>
                <p className="mt-4 max-w-xs text-sm text-white/90 md:text-base leading-relaxed">
                  Because Muscle is the super organ for longevity
                </p>
                <Link
                  href="/science"
                  className="mt-8 rounded-full bg-[#F7F8F2] px-8 py-3 text-sm font-semibold text-[#1E2A1E] shadow-sm hover:bg-white transition-all transform hover:scale-105"
                >
                  Read More
                </Link>
              </div>
            </div>
          )}

          {/* Card 2: Shop [M3] */}
          {showShop && (
            <div className="relative overflow-hidden rounded-[32px] md:rounded-[40px] group">
              {/* Background image */}
              <Image
                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/videoframe_7015.png?v=1768635095"
                alt="Anatomy of Science"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="relative flex min-h-[350px] flex-col items-center justify-center px-8 py-16 text-center md:min-h-[420px]">
                <h2 className="text-3xl font-semibold text-white md:text-5xl tracking-tight">
                  Shop [M3]
                </h2>
                <p className="mt-4 max-w-xs text-sm text-white/90 md:text-base leading-relaxed">
                  Precision-engineered for musclespan and cellular longevity
                </p>
                <Link
                  href="https://muscalarpro.vercel.app/product/daily-synbiotic"
                  className="mt-8 rounded-full bg-[#f7f8f2] px-8 py-3 text-sm font-semibold text-[#1e2a1e] shadow-sm hover:bg-white transition-all transform hover:scale-105"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
