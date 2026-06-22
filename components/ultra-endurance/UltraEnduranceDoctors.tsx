import Image from "next/image";

const GREEN = "#1F7A4D";

// Single featured doctor — same person, image and quote as the product page
// (/decode-peak-performance-m3 → expert advisory circle).
const DOCTOR = {
  name: "Dr. Rajaram Samant",
  role: "MD Celagenex, Longevity Researcher",
  quote:
    "No other supplement does what M3 can. It is an amazing advance for muscle health and longevity.",
  image:
    "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Dr.Rajaram_samant.jpg?v=1770368004",
};

export function UltraEnduranceDoctors() {
  return (
    <section
      aria-labelledby="ue-doctors-heading"
      className="w-full bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <h2
          id="ue-doctors-heading"
          className="max-w-2xl text-balance text-[34px] font-semibold leading-[1.08] tracking-tight text-[#1a1a1a] md:text-[48px]"
        >
          Led by doctors with 40 years of health and longevity expertise
        </h2>

        {/* Single featured doctor. Stacks on mobile (portrait → quote),
            two columns from md up. Semantic figure/blockquote/figcaption so
            assistive tech reads it as an attributed quotation. */}
        <figure className="mt-12 grid items-center gap-8 md:mt-16 md:grid-cols-[300px_minmax(0,1fr)] md:gap-12 lg:gap-16">
          {/* Portrait */}
          <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl bg-neutral-100 md:max-w-none">
            <Image
              src={DOCTOR.image}
              alt={`Portrait of ${DOCTOR.name}`}
              fill
              sizes="(max-width: 768px) 280px, 300px"
              className="object-cover"
            />
          </div>

          {/* Quote + attribution */}
          <div className="min-w-0">
            <svg
              viewBox="0 0 36 24"
              aria-hidden="true"
              className="h-5 w-auto"
              fill={GREEN}
            >
              <path d="M0 24V13.2C0 5.9 5.4 0.6 13.2 0L14 3.6C9.6 4.6 7 7.6 7 11.4h5.4V24H0zm21.6 0V13.2C21.6 5.9 27 0.6 34.8 0L35.6 3.6C31.2 4.6 28.6 7.6 28.6 11.4H34V24H21.6z" />
            </svg>

            <blockquote className="mt-5 text-balance text-[22px] font-medium leading-[1.35] tracking-tight text-[#1a1a1a] md:text-[28px] lg:text-[31px]">
              {DOCTOR.quote}
            </blockquote>

            <figcaption className="mt-6">
              <span className="block text-[16px] font-semibold text-[#1a1a1a] md:text-[18px]">
                {DOCTOR.name}
              </span>
              <span className="mt-1 block text-[14px] text-[#1a1a1a]/65 md:text-[15px]">
                {DOCTOR.role}
              </span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
