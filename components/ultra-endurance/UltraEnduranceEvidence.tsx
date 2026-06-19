import Image from "next/image";

// Brand green — deep shade of the home palette's green for accents on
// light backgrounds (~4.9:1 on white, AA for all text sizes).
const GREEN = "#1F7A4D";

type EvidenceCard = {
  stat: React.ReactNode;
  label: string;
  body: React.ReactNode;
  image: string;
  alt: string;
};

const CARDS: EvidenceCard[] = [
  {
    stat: "+10–12%",
    label: "Muscle strength",
    body: (
      <>
        Urolithin A, 4 months — while placebo lost ~10%.<sup>2</sup>
      </>
    ),
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/hf_20260615_105850_97d65345-eaf6-494a-b2ab-ac7d75215357.png?v=1781637563",
    alt: "Athlete in a deep overhead stretch",
  },
  {
    stat: "+17%",
    label: "Leg muscle endurance",
    body: "More contractions to fatigue after 8 weeks.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/hf_20260615_112855_271f52ee-a955-4453-ac19-ec1d208af1e2.png?v=1781637563",
    alt: "Athlete driving a knee up mid-movement",
  },
  {
    stat: "−37%",
    label: "Muscle-damage marker",
    body: "Creatine kinase, 24h post-race, trained runners.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/hf_20260615_114418_6e202164-ca4e-4e20-b1af-944eb143832c.png?v=1781637563",
    alt: "Trail runner powering over rocks",
  },
  {
    stat: (
      <>
        <span aria-hidden="true">↑</span> VO<sub>2</sub>max
      </>
    ),
    label: "Aerobic engine",
    body: "Improved in adults & endurance athletes.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/hf_20260615_114615_ea40e834-5fc9-4bc4-b9ec-22c9eeb9b35c.png?v=1781637563",
    alt: "Sprinter mid-stride",
  },
];

export function UltraEnduranceEvidence() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1a1a1a] md:text-[12px]">
            The evidence
          </p>
          <h2 className="mt-4 text-balance text-[34px] font-semibold leading-[1.08] tracking-tight text-[#1a1a1a] md:mt-5 md:text-[48px]">
            Backed by data. <span style={{ color: GREEN }}>Not hype.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-[#1a1a1a]/60 md:text-[17px]">
            Peer-reviewed, placebo-controlled human research on M3&apos;s actives
            — including studies run in athletes.
          </p>
        </div>

        <hr className="mt-10 border-t border-[#1a1a1a]/10 md:mt-12" />

        {/* Cards — portrait photos with a bottom overlay.
            1 col mobile → 2 col tablet → 4 col desktop. A gradient scrim
            keeps the white overlay text legible over any photo. */}
        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14 md:gap-5 lg:grid-cols-4">
          {CARDS.map((card) => (
            <li key={card.label}>
              <article className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-200">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                  className="object-cover"
                />
                {/* Scrim for legibility */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
                />
                {/* Overlay content, bottom-left */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
                  {/* Small marker badge */}
                  <span
                    aria-hidden="true"
                    className="mb-3 flex h-5 w-5 items-center justify-center rounded-md bg-white/90"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-sm"
                      style={{ background: GREEN }}
                    />
                  </span>
                  <p className="text-[22px] font-semibold leading-none md:text-[24px]">
                    {card.stat}
                  </p>
                  <h3 className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90 md:text-[12px]">
                    {card.label}
                  </h3>
                  <p className="mt-2 max-w-[220px] text-[12px] leading-snug text-white/70 md:text-[13px]">
                    {card.body}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
