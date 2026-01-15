"use client";

import Image from "next/image";

export function Gallery({
  images,
}: {
  images: { src: string; altText: string }[];
}) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      {/* Mobile: horizontal image slider */}
      <div className="flex gap-4 overflow-x-auto pb-4 md:hidden snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
        {images.map((image, index) => (
          <div
            key={image.src + index}
            className="relative flex-none w-[88%] overflow-hidden rounded-2xl aspect-[3/4] snap-center shadow-lg"
          >
            <Image
              className="h-full w-full object-cover transition-transform duration-500"
              fill
              sizes="90vw"
              alt={image.altText}
              src={image.src}
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Mobile: infinite marquee text below gallery */}
      <div className="md:hidden mt-6">
        <div className="overflow-hidden">
          <div className="flex w-[200%] animate-marquee whitespace-nowrap text-xs tracking-wide uppercase [will-change:transform]">
            <span className="flex items-center pr-8">
              <span className="font-semibold text-black">
                #1 Doctor Recommended
              </span>
              <span className="mx-3 text-neutral-400">•</span>
              <span className="text-neutral-500">Urolithin A Brand</span>
            </span>
            <span className="flex items-center pr-8">
              <span className="font-semibold text-black">
                #1 Doctor Recommended
              </span>
              <span className="mx-3 text-neutral-400">•</span>
              <span className="text-neutral-500">Urolithin A Brand</span>
            </span>
          </div>
        </div>
      </div>

      {/* Desktop / larger screens: masonry-style 2-column gallery */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-6">
        {images.map((image, index) => {
          const baseAspectClass =
            index === 0 || index === 1 ? "aspect-[4/5]" : "aspect-[3/4]";

          return (
            <div
              key={image.src + index}
              className={`relative w-full ${baseAspectClass}`}
            >
              <Image
                className="h-full w-full object-contain transition-transform duration-700"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt={image.altText}
                src={image.src}
                priority={index <= 1}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
