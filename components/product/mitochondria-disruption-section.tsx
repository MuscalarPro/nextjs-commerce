import { mitochondriaDisruptionData } from "data/mitochondriaDisruptionData";
import Image from "next/image";
import { MusclespanButton } from "./product-description";

const [firstTagRow, secondTagRow] = mitochondriaDisruptionData.tagRows;
const allTagsForMobile = [...firstTagRow, ...secondTagRow];

export function MitochondriaDisruptionSection() {
  return (
    <>
      {/* Vaginal Microbiome Disruption Section */}
      <div className="w-full bg-white py-4 md:py-8">
        <div className="mx-auto max-w-7xl px-4 md:px-4">
          <p className="mb-8 text-[2rem] md:text-[3rem] leading-tight text-black">
            Day-to-day life can disrupt the balance of your muscle mitochondria,
            depleting your critical super defender
            <em>mitochondrial quality control</em>.
          </p>

          {/* Tag rows */}
          <div className="flex-col gap-3 hidden md:flex">
            {/* First row of tags */}
            <div className="flex flex-wrap gap-3">
              {firstTagRow.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-neutral-800 bg.white px-3 py-1 text-xs font-medium text-neutral-800"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Second row of tags */}
            <div className="flex flex-wrap gap-3">
              {secondTagRow.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-neutral-800 bg.white px-3 py-1 text-xs font-medium text-neutral-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden bg-white py-4 md:py-2">
        {/* Mobile: cross-fade slider (one image at a time) with overlay tags */}
        <div className="relative w-full overflow-hidden aspect-[3/4] md:hidden">
          {/* Tags overlay */}
          <div className="relative z-10 flex flex-wrap gap-2 px-4 pt-4">
            {allTagsForMobile.map((tag) => (
              <span
                key={`mobile-${tag}`}
                className="inline-flex items-center rounded-full border border-white  px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Cross-fade images */}
          {mitochondriaDisruptionData.imageUrls.map((src, index) => (
            <div
              key={`fade-${index}`}
              className="fade-slide absolute inset-0 z-0"
              style={{ animationDelay: `${index * 4}s` }}
            >
              <Image
                src={src}
                alt={`Disruptor ${index + 1}`}
                fill
                className="h-full w-full object-cover"
                sizes="100vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Desktop: horizontal marquee */}
        <div className="hidden md:block">
          <div className="marquee relative">
            <div className="marquee__track flex w-max items.end">
              {/* Set 1 */}
              <div className="flex">
                {mitochondriaDisruptionData.imageUrls.map((src, index) => (
                  <div
                    key={`set1-${index}`}
                    className="relative w-[200px] flex-shrink-0 overflow-hidden md:w-[300px]"
                  >
                    <Image
                      src={src}
                      alt={`Disruptor ${index + 1}`}
                      width={1200}
                      height={1600}
                      className="h-auto w-full object-cover"
                      sizes="(min-width: 1024px) 450px, (min-width: 768px) 300px, 200px"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Set 2 (duplicate) */}
              <div className="flex" aria-hidden="true">
                {mitochondriaDisruptionData.imageUrls.map((src, index) => (
                  <div
                    key={`set2-${index}`}
                    className="relative w-[200px] flex-shrink-0 overflow-hidden md:w-[300px]"
                  >
                    <Image
                      src={src}
                      alt=""
                      width={1200}
                      height={1600}
                      className="h-auto w.full object-cover"
                      sizes="(min-width: 1024px) 450px, (min-width: 768px) 300px, 200px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Musclespan Button */}
        <div className="mx-auto max-w-7xl px-4 md:px-4 pt-6">
          <MusclespanButton />
        </div>
      </div>
    </>
  );
}
