import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const BG_IMAGE =
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/glp-1-appetite-section-cover-photo-background.jpg?v=1780862972";

const GLP1_PRODUCT =
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/40-percent-glp-1-product-image.png?v=1780862978";

const M3_EXERCISE_PRODUCT =
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/m3-exercise-glp-1-section-product-image.png?v=1780862984";

export function MuscleBoxBand() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-900">
      {/* Full-bleed background image */}
      <Image
        src={BG_IMAGE}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        priority={false}
      />
      {/* Subtle dark overlay so white text reads against any frame area */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/20"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28 lg:py-32">
        {/* TOP — eyebrow + heading on the left, supporting copy on the right */}
        <div className="grid items-start gap-8 md:grid-cols-[1.5fr_1fr] md:gap-12 lg:gap-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75">
              The GLP-1{" "}
              <span aria-hidden="true" className="mx-0.5">
                ↔
              </span>{" "}
              Muscle Link
            </p>
            <h2 className="mt-4 font-sans text-[2rem] font-semibold leading-[1.08] tracking-tight text-white md:mt-6 md:text-[2.625rem] lg:text-[3.25rem]">
              GLP-1s work on appetite. Nothing in the box works on your muscle.
            </h2>
          </div>
          {/* Pushed down on desktop so it starts at the heading's first line */}
          <div className="md:pt-12 lg:pt-14">
            <p className="text-[15px] leading-relaxed text-white/85 md:text-[16px]">
              That&apos;s the gap. The medication quiets hunger and the fat
              comes off &mdash; but a fast deficit pulls from lean muscle at
              the same time, and muscle is what runs your metabolism, blood
              sugar and strength.
            </p>
          </div>
        </div>

        {/* BOTTOM — two callout cards */}
        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2 md:gap-6 lg:mt-24">
          <CalloutCard
            iconType="x"
            title="Up to 40%"
            body="of weight lost on a GLP-1 can be muscle, not fat"
            image={GLP1_PRODUCT}
            imageAlt="GLP-1 vial and injection pen"
          />
          <CalloutCard
            iconType="check"
            title="M3 + exercise"
            body="protects the lean mass the deficit would take"
            image={M3_EXERCISE_PRODUCT}
            imageAlt="MuscalarPro M3 pouch with GLP-1 vial"
          />
        </div>

        {/* Carousel controls — visual only, per spec */}
        <div className="mt-8 flex items-center justify-end gap-2 md:mt-10">
          {/* Pill indicator (active page marker) */}
          <div
            aria-hidden="true"
            className="flex h-9 w-16 items-center rounded-full bg-white/95 px-1.5"
          >
            <div className="h-6 w-7 rounded-full bg-black" />
          </div>
          <button
            type="button"
            aria-label="Previous slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            <ChevronLeftIcon className="h-4 w-4" strokeWidth={2.5} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            <ChevronRightIcon className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}

function CalloutCard({
  iconType,
  title,
  body,
  image,
  imageAlt,
}: {
  iconType: "x" | "check";
  title: string;
  body: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <article className="relative min-h-[200px] overflow-hidden rounded-3xl border border-white/15 bg-black/45 p-6 backdrop-blur-md md:min-h-[230px] md:p-7 lg:p-8">
      {/* Icon — top left in a dark circle */}
      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 ring-1 ring-white/10">
        {iconType === "x" ? (
          <XMarkIcon className="h-4 w-4 text-white" strokeWidth={3} />
        ) : (
          <CheckIcon
            className="h-4 w-4 text-[#d2f392]"
            strokeWidth={3}
          />
        )}
      </div>

      {/* Copy block — bottom-left, constrained so the product image has room
          to breathe on the right edge of the card. */}
      <div className="relative z-10 mt-10 max-w-[60%] md:mt-12">
        <h3 className="font-sans text-2xl font-semibold leading-tight tracking-tight text-white md:text-[28px]">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-snug text-white/75 md:text-[15px]">
          {body}
        </p>
      </div>

      {/* Product image — anchored to bottom-right, fills the right half of
          the card. Uses object-contain so the cutout PNG keeps its native
          aspect. */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-full w-1/2 max-w-[280px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-contain object-right-bottom"
          sizes="(max-width: 768px) 50vw, 280px"
        />
      </div>
    </article>
  );
}
