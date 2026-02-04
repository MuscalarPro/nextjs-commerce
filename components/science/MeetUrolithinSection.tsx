import Image from "next/image";

interface MeetUrolithinSectionProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function MeetUrolithinSection({
  title = "Meet Urolithin A, a rare molecule that renews our cellular powerhouses",
  description = "Our scientists unlocked the power of Urolithin A, a molecule that stimulates this crucial recycling and cleansing process - ultimately protecting cells from age-associated decline.",
  ctaLabel = "SCIENTIFIC RESEARCH",
  ctaHref = "/science/research", // change if you have a real route
  imageSrc = "/images/science/Meet-Urolithin.avif",
  imageAlt = "Urolithin A molecule background",
}: MeetUrolithinSectionProps) {
  return (
    <section className="relative w-full bg-[#f4f4f0] py-10 md:py-12 overflow-hidden">
      {/* Full Width Background Image */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={false}
          className="object-cover object-left"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px] md:min-h-[460px]">
          {/* Empty left column */}
          <div className="hidden md:block" />

          {/* Right column text */}
          <div className="flex flex-col justify-center py-10 md:py-0 md:pl-10 lg:pl-16 md:pr-4 lg:pr-8 w-full">
            <h2 className="text-[1.8rem] md:text-[2.35rem] leading-[1.1] font-normal text-black tracking-tight">
              {title}
            </h2>

            <p className="mt-6 text-sm md:text-base text-neutral-600 leading-relaxed w-full">
              {description}
            </p>

            {/* CTA row */}
            <div className="mt-8 md:mt-12">
              <a
                href={ctaHref}
                className="inline-flex items-center group"
              >
                {/* Plus Icon Circle */}
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-neutral-400 group-hover:border-black transition-colors mr-3">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-neutral-600 group-hover:text-black transition-colors">
                    <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </span>

                <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-neutral-500 underline underline-offset-4 decoration-neutral-300 group-hover:text-black group-hover:decoration-black transition-all">
                  {ctaLabel}
                </span>
              </a>
            </div>
          </div>

          {/* Mobile Image (Below Text) */}
          <div className="block md:hidden relative w-[calc(100%+2rem)] -mx-4 aspect-[4/3] mt-8">
            <Image 
              src={imageSrc} 
              alt={imageAlt} 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 0vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
