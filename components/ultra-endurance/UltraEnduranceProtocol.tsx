import Image from "next/image";

// Brand lime — the home-page accent. Used as accent text on this dark
// section, where it reads with high contrast (matches the lime accents
// on the home page's dark cards).
const LIME = "#d2f392";

type Ingredient = {
  index: string;
  title: string;
  subtitle: string;
  body: React.ReactNode;
  statHighlight: React.ReactNode;
  statDescriptor: string;
  image: string;
  alt: string;
};

const INGREDIENTS: Ingredient[] = [
  {
    index: "/ 01 · Renew",
    title: "Urolithin A",
    subtitle: "Pomegranate extract · Standardised to Urolithin A · 500 mg",
    body: (
      <>
        A postbiotic that triggers mitophagy — clearing damaged mitochondria so
        efficient ones take over. The most clinically-studied driver of
        mitochondrial renewal, with human data on strength, endurance, VO
        <sub>2</sub>max and recovery.
      </>
    ),
    statHighlight: "+10–12%",
    statDescriptor: "muscle strength in clinical studies of Urolithin A",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Gemini_Generated_Image_ox02ipox02ipox02_1.png?v=1781637561",
    alt: "Molecular structure of Urolithin A",
  },
  {
    index: "/ 02 · Clean",
    title: "Spermidine",
    subtitle: "Wheat germ extract · Standardised to Spermidine · 3 mg",
    body: (
      <>
        A natural polyamine and caloric-restriction mimetic that induces
        autophagy — the cell&apos;s quality-control system. In endurance
        athletes, autophagy activators reduced oxidative stress and
        muscle-injury markers from hard training.
      </>
    ),
    statHighlight: (
      <>
        <span aria-hidden="true">↓</span> damage
      </>
    ),
    statDescriptor: "lower oxidative stress & muscle-injury markers in athletes",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Gemini_Generated_Image_w7s7kmw7s7kmw7s7_1.png?v=1781637560",
    alt: "Molecular structure of Spermidine",
  },
  {
    index: "/ 03 · Protect",
    title: "S-allyl cysteine",
    subtitle: "Aged garlic extract · Standardised to S-allyl cysteine · 0.5 mg",
    body: (
      <>
        The stable, bioavailable organosulfur compound from aged garlic. A
        potent antioxidant shown — in endurance athletes — to improve VO
        <sub>2</sub>max, lactate threshold, arterial flexibility and recovery
        time.
      </>
    ),
    statHighlight: (
      <>
        <span aria-hidden="true">↑</span> VO<sub>2</sub>max
      </>
    ),
    statDescriptor: "aerobic fitness & recovery in endurance-athlete trial",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/hf_20260615_094934_a719db16-6916-44a1-a12d-31f326b6b85e-Photoroom_1.png?v=1781637559",
    alt: "Molecular structure of S-allyl cysteine",
  },
];

function TextCard({ item }: { item: Ingredient }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md md:p-8">
      <p className="text-[11px] uppercase tracking-[0.12em] text-white/45">
        {item.index}
      </p>
      <h3 className="mt-2 text-[22px] font-semibold text-white md:text-[26px]">
        {item.title}
      </h3>
      <p className="mt-1.5 text-[10px] uppercase tracking-[0.12em] text-white/45 md:text-[11px]">
        {item.subtitle}
      </p>
      <p className="mt-4 text-[14px] leading-relaxed text-white/70">
        {item.body}
      </p>
      <div className="mt-5 border-t border-white/10 pt-4">
        <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span
            className="text-[16px] font-semibold md:text-[18px]"
            style={{ color: LIME }}
          >
            {item.statHighlight}
          </span>
          <span className="text-[11px] text-white/55 md:text-[12px]">
            {item.statDescriptor}
          </span>
        </p>
      </div>
    </div>
  );
}

function ImageCard({ item }: { item: Ingredient }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md md:p-10">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(max-width: 1024px) 90vw, 440px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export function UltraEnduranceProtocol() {
  return (
    <section className="w-full bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55 md:text-[12px]">
            The protocol
          </p>
          <h2 className="mt-4 text-balance text-[32px] font-semibold leading-[1.08] tracking-tight text-white md:mt-5 md:text-[46px]">
            <span style={{ color: LIME }}>Three actives</span>. One cellular
            operating system.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/60 md:text-[17px]">
            A Layer-Zero protocol that works beneath training — on the machinery
            training depends on.
          </p>
        </div>

        {/* Timeline.
            Desktop (lg+): centre spine with a node per row, text + molecule
            alternate sides in a [1fr auto 1fr] grid.
            Mobile / tablet (< lg): the zigzag collapses to a single clean
            column — molecule card then text card per ingredient, generous
            spacing, no spine (which reads as clutter at narrow widths). */}
        <div className="relative mt-16 md:mt-20">
          {/* Centre spine — desktop only */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/15 lg:block"
          />

          <ul className="space-y-12 lg:space-y-20">
            {INGREDIENTS.map((item, i) => {
              const textLeft = i % 2 === 0; // rows 1 & 3 text-left, row 2 text-right
              return (
                <li
                  key={item.title}
                  className="relative flex flex-col gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-x-12"
                >
                  {/* Molecule (mobile: first; desktop: positioned by side) */}
                  <div
                    className={
                      textLeft
                        ? "lg:col-start-3 lg:row-start-1"
                        : "lg:col-start-1 lg:row-start-1"
                    }
                  >
                    <ImageCard item={item} />
                  </div>

                  {/* Node dot — desktop only */}
                  <span
                    aria-hidden="true"
                    className="z-10 hidden h-3.5 w-3.5 rounded-full bg-white ring-4 ring-[#0a0a0a] lg:col-start-2 lg:row-start-1 lg:block"
                  />

                  {/* Text */}
                  <div
                    className={
                      textLeft
                        ? "lg:col-start-1 lg:row-start-1"
                        : "lg:col-start-3 lg:row-start-1"
                    }
                  >
                    <TextCard item={item} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
