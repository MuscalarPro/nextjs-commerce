import { expertAvatars, expertTestimonialData } from "data/homePageData";
import Image from "next/image";

export function ExpertTestimonialSection() {
  const {
    headline,
    portraitSrc,
    portraitAlt,
    quote,
    name,
    title,
    avatarsInColor,
  } = expertTestimonialData;

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8">
        <h2 className="max-w-2xl text-[2rem] leading-[1.08] tracking-[-0.02em] text-black md:text-[3rem]">
          {headline}
        </h2>

        <div className="mt-10 grid grid-cols-1 items-center lg:grid-cols-2">
          <div className="w-full">
            <div className="relative h-[400px] w-[400px] overflow-hidden rounded-lg bg-neutral-200">
              <div className="relative aspect-[1/1]">
                <Image
                  src={portraitSrc}
                  alt={portraitAlt}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex items-center -space-x-3">
              {expertAvatars.map((avatarUrl, index) => {
                const isColor = index < avatarsInColor;
                return (
                  <div
                    key={`${avatarUrl}-${index}`}
                    className={[
                      "relative h-14 w-14 overflow-hidden rounded-full bg-neutral-200 md:h-16 md:w-16",
                      "ring-2 ring-white z-10",
                      !isColor && "grayscale",
                    ].join(" ")}
                    style={{ zIndex: expertAvatars.length - index }}
                  >
                    <Image
                      src={avatarUrl}
                      alt={`Expert ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                );
              })}
            </div>

            <blockquote className="mt-6 md:mt-8 max-w-[720px] font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed text-black">
              &quot;{quote}&quot;
            </blockquote>

            <div className="mt-6 md:mt-8 space-y-1">
              <div className="text-lg md:text-xl font-bold text-black">
                {name}
              </div>
              <div className="text-base md:text-lg text-neutral-600">
                {title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
