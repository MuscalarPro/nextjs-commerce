import Image from "next/image";

const LIME = "#d2f392";

const PRODUCT_IMAGE =
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Updated_product_image.png?v=1779970617";

// Thin-line icons drawn inline (capsule / leaf / globe). Decorative — the
// title carries the meaning.
function CapsuleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
      className="h-7 w-7"
    >
      <g transform="rotate(-45 12 12)">
        <rect x="4" y="8.5" width="16" height="7" rx="3.5" />
        <line x1="12" y1="8.5" x2="12" y2="15.5" />
      </g>
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
      className="h-7 w-7"
    >
      <path d="M20 4C9 4 4 11 4 20c9 0 16-5 16-16Z" strokeLinejoin="round" />
      <path d="M4.5 19.5C8.5 14.5 12.5 11.5 18 9.5" strokeLinecap="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
      className="h-7 w-7"
    >
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </svg>
  );
}

const BENEFITS = [
  {
    Icon: CapsuleIcon,
    title: "Standardized in every dose",
    body: "500 mg Urolithin A, 3 mg spermidine, 0.5 mg S-allyl cysteine — a defined amount in every serving.",
  },
  {
    Icon: LeafIcon,
    title: "Stimulant-free & vegetarian",
    body: "Two veg capsules after a meal. No caffeine, no jitters, no crash.",
  },
  {
    Icon: GlobeIcon,
    title: "Works at the cellular level",
    body: (
      <>
        Targets the mitochondria behind strength, endurance and recovery.
        <sup>*</sup>
      </>
    ),
  },
];

export function UltraEnduranceDelivery() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] text-white">
      {/* Spotlight gradient — premium dark product-shot lighting, in line
          with the brand's dark sections. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 65% at 50% 42%, #313131 0%, #1a1a1a 45%, #0a0a0a 80%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_minmax(0,1.05fr)_1fr] lg:gap-8">
          {/* LEFT — copy */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <h2 className="text-[32px] font-semibold leading-[1.1] tracking-tight md:text-[44px]">
              Same molecule.
              <br />
              Standardized dose.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-[14px] leading-relaxed text-white/60 lg:mx-0 md:text-[15px]">
              Urolithin A is a postbiotic your gut makes from pomegranate — but
              only about{" "}
              <strong className="font-semibold text-white/90">
                1 in 3 people make enough
              </strong>
              . M3 delivers a standardized{" "}
              <strong className="font-semibold text-white/90">500 mg</strong>{" "}
              dose, with spermidine and S-allyl cysteine alongside it. Three
              clinically studied actives, working at the level of the cell.
            </p>
          </div>

          {/* CENTER — product */}
          <div className="order-1 flex items-center justify-center lg:order-2">
            <div className="relative aspect-[1739/2386] w-full max-w-[300px] md:max-w-[360px]">
              <Image
                src={PRODUCT_IMAGE}
                alt="MuscalarPro Decode Peak Performance [M3] supplement"
                fill
                sizes="(max-width: 768px) 300px, 360px"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* RIGHT — benefits */}
          <ul className="order-3 space-y-8 lg:order-3">
            {BENEFITS.map(({ Icon, title, body }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="shrink-0" style={{ color: LIME }}>
                  <Icon />
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold text-white md:text-[18px]">
                    {title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-white/60 md:text-[14px]">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
