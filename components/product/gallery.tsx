"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function Gallery({
  images,
}: {
  images: { src: string; altText: string }[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialIndex = searchParams.has("image")
    ? parseInt(searchParams.get("image")!)
    : 0;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(
    initialIndex
  );

  const updateImage = (index: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("image", index);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const handleImageClick = (index: number) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
      updateImage(index.toString());
    }
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      {/* Mobile: horizontal image slider */}
      <div className="flex gap-3 overflow-x-auto pb-3 md:hidden snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {images.map((image, index) => {
          const isSelected = selectedIndex === index;

          return (
            <div
              key={image.src + index}
              className={`relative flex-none w-[86%] overflow-hidden rounded-md aspect-[3/4] snap-center cursor-pointer ${
                isSelected ? "ring-2 ring-blue-600 ring-offset-2" : ""
              }`}
              onClick={() => handleImageClick(index)}
            >
              <Image
                className="h-full w-full object-cover"
                fill
                sizes="90vw"
                alt={image.altText}
                src={image.src}
                priority={index === 0}
              />
            </div>
          );
        })}
      </div>

      {/* Mobile: infinite marquee text below gallery */}
      <div className="md:hidden">
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
      <div className="hidden md:grid md:grid-cols-2 md:gap-4">
        {images.map((image, index) => {
          const isSelected = selectedIndex === index;

          const baseAspectClass =
            index === 0 || index === 1 ? "aspect-[4/5]" : "aspect-[3/4]";

          return (
            <div
              key={image.src + index}
              className={`relative w-full overflow-hidden cursor-pointer rounded-md ${baseAspectClass} ${
                isSelected ? "ring-2 ring-blue-600 ring-offset-2" : ""
              }`}
              onClick={() => handleImageClick(index)}
            >
              <Image
                className="h-full w-full object-cover"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
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
