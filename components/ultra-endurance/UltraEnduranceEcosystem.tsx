import Image from "next/image";

// Brand orange — matches the hero accent.
const ORANGE = "#E05A30";

const JOURNALS = [
  "Nature Metabolism",
  "Cell Reports Medicine",
  "JAMA Network Open",
  "Sports Medicine",
  "Nature Aging",
  "Nature Medicine",
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
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        {/* Published-science strip */}
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1a1a1a] md:text-[12px]">
            The science is published — not promised
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:mt-8 md:gap-x-8">
            {JOURNALS.map((journal) => (
              <li
                key={journal}
                className="text-[15px] text-[#1a1a1a]/80 md:text-[17px]"
              >
                {journal}
              </li>
            ))}
          </ul>
        </div>

        <hr className="mt-10 border-t border-[#1a1a1a]/10 md:mt-12" />

        {/* Ecosystem heading */}
        <div className="mx-auto mt-20 max-w-2xl text-center md:mt-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1a1a1a] md:text-[12px]">
            The M3 ecosystem
          </p>
          <h2 className="mt-4 text-balance text-[34px] font-semibold leading-[1.08] tracking-tight text-[#1a1a1a] md:mt-5 md:text-[48px]">
            It starts with the{" "}
            <span style={{ color: ORANGE }}>protocol</span> — then so much more.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-[#1a1a1a]/60 md:text-[17px]">
            A supplement that rebuilds the engine, an app that tracks it, and a
            protocol that adapts to your training.
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
