import Image from "next/image";

const BG_IMAGE =
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/the_muscle_protection_stack_simplified_cover_photo_background.jpg?v=1780864493";

const PRODUCT_IMAGE =
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/product_photo_muscle_protection_stack_simplified.png?v=1780864493";

// Chips are laid out in 3 rows of 2 so the middle row can be inset on
// desktop, creating the staggered/zigzag pattern from the mockup. The
// outer rows (0, 2) sit flush; the middle row (1) is pulled in via
// `lg:px-12` so its chips render narrower than the outer ones.
const chipRows: string[][] = [
  ["Urolithin A", "Mitophagy"],
  ["Spermidine", "Autophagy"],
  ["S-Allyl Cysteine", "Super-Antioxidant"],
];

export function MuscleStackPricing() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Full-bleed background photo */}
      <Image
        src={BG_IMAGE}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        priority={false}
      />
      {/* Subtle whitening overlay so the dark heading and chip text both
          read consistently against the varied background tones. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/10 to-white/20"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28 lg:py-32">
        {/* Heading */}
        <h2 className="text-balance text-center text-[2rem] font-semibold leading-tight text-[#1a1a1a] md:text-[2.75rem] lg:text-[3rem]">
          The muscle-protection stack,{" "}
          <span
            className="italic"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontWeight: 500,
            }}
          >
            simplified
          </span>
          .
        </h2>

        {/* Chip grid + product image */}
        <div className="mt-14 grid items-center gap-10 md:mt-20 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Left — ingredient chips. 3-row layout; on lg+ the middle row
              is pulled in to create the staggered/zigzag pattern. Mobile +
              tablet stay as a uniform 2-col grid for readability. */}
          <div className="mx-auto flex w-full max-w-[480px] flex-col gap-3 md:mx-0 md:ml-auto md:mr-0">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {chipRows[0]!.map((name) => (
                <Chip key={name}>{name}</Chip>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:px-12">
              {chipRows[1]!.map((name) => (
                <Chip key={name}>{name}</Chip>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {chipRows[2]!.map((name) => (
                <Chip key={name}>{name}</Chip>
              ))}
            </div>
          </div>

          {/* Right — product photo */}
          <div className="relative mx-auto aspect-square w-full max-w-[320px] md:mx-0 md:max-w-[440px] lg:max-w-[480px]">
            <Image
              src={PRODUCT_IMAGE}
              alt="MuscalarPro Decode Peak Performance [M3] pouch"
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 320px, (max-width: 1024px) 440px, 480px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center justify-center rounded-full border border-white/12 bg-[#3D484E]/55 px-4 py-3 text-center text-[14px] font-medium text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)] backdrop-blur-md md:text-[15px]">
      {children}
    </span>
  );
}
