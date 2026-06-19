import Image from "next/image";

// Placeholder credentials row — swap for MuscalarPro's real, verifiable
// team affiliations when supplied.
const CREDENTIALS = [
  "Stanford Medicine",
  "Harvard Medical School",
  "UCSF",
  "University of Oxford",
];

// Gradient placeholders for the doctor avatars until real photos land.
const AVATARS = [
  "linear-gradient(135deg, #1E3944, #4B8FAA)",
  "linear-gradient(135deg, #14301F, #2F7350)",
  "linear-gradient(135deg, #15203A, #3A4F7A)",
];

type Card = {
  step: number;
  title: string;
  body: React.ReactNode;
  image: string;
  alt: string;
};

const CARDS: Card[] = [
  {
    step: 1,
    title: "Start the protocol",
    body: "Two capsules a day. Three clinically-studied actives that switch on mitochondrial renewal. No stimulants.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/start_with_protocol_001.png?v=1781637727",
    alt: "M3 subscription cycle confirmed in the MuscalarPro app",
  },
  {
    step: 2,
    title: "Track your engine",
    body: (
      <>
        Sync Whoop, Garmin, Oura and Apple Health. M3 turns recovery, HRV and
        VO<sub>2</sub> into one cellular readiness score.
      </>
    ),
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/start_with_protocol_002.png?v=1781637729",
    alt: "Biomarker readout showing how you might be feeling during exercise",
  },
  {
    step: 3,
    title: "Get your protocol",
    body: "Evidence-backed daily actions — dose timing, training load and recovery — tuned to your data, not a generic plan.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/start_with_protocol_003.png?v=1781637728",
    alt: "Today's protocol card listing dose, training and sleep actions",
  },
  {
    step: 4,
    title: "Access everything",
    body: "Your protocol, recovery trends, retest reminders and an athlete community — in one place. You're in control.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/start_with_protocol_004.png?v=1781637728",
    alt: "Protocol, retest and recovery hub with a cellular age assessment",
  },
];

export function UltraEnduranceEcosystem() {
  return (
    <section id="how-it-works" className="w-full scroll-mt-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        {/* Doctors + credentials trust block */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            {/* Overlapping avatar placeholders */}
            <div className="flex -space-x-2.5">
              {AVATARS.map((gradient, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className="h-8 w-8 rounded-full ring-2 ring-white"
                  style={{ background: gradient }}
                />
              ))}
            </div>
            <p className="text-[14px] font-medium text-[#1a1a1a] md:text-[15px]">
              Built by doctors and scientists
            </p>
          </div>

          {/* Credentials ticker — placeholder institution names; swap for
              real, verifiable affiliations. Pure-CSS seamless marquee that
              pauses under prefers-reduced-motion. */}
          <div
            className="relative mt-8 w-full overflow-hidden md:mt-10"
            role="region"
            aria-label="Affiliated institutions"
          >
            {/* Edge fades */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent"
            />
            <div className="ue-ticker flex w-max">
              {/* Two identical copies so the -50% loop is seamless */}
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  aria-hidden={copy === 1 ? "true" : undefined}
                  className="flex shrink-0 items-center gap-x-10 pr-10 md:gap-x-14 md:pr-14"
                >
                  {CREDENTIALS.map((credential) => (
                    <li
                      key={credential}
                      className="whitespace-nowrap text-[14px] font-medium uppercase tracking-[0.08em] text-[#1a1a1a]/35 md:text-[15px]"
                    >
                      {credential}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <style>{`
              @keyframes ue-ticker-scroll {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
              .ue-ticker { animation: ue-ticker-scroll 24s linear infinite; }
              @media (prefers-reduced-motion: reduce) {
                .ue-ticker { animation: none; }
              }
            `}</style>
          </div>
        </div>

        {/* Heading */}
        <div className="mx-auto mt-20 max-w-2xl text-center md:mt-28">
          <h2 className="text-balance text-[34px] font-semibold leading-[1.08] tracking-tight text-[#1a1a1a] md:text-[48px]">
            How it works
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-[#1a1a1a]/60 md:text-[17px]">
            It starts with a full-body baseline — then so much more.
          </p>
        </div>

        {/* Cards */}
        <ul className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {CARDS.map((card) => (
            <li key={card.step}>
              <article>
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-100">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                    className="object-cover"
                  />
                </div>

                <h3 className="mt-5 text-[18px] font-semibold text-[#1a1a1a]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#1a1a1a]/60">
                  {card.body}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
