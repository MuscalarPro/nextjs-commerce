import { CheckIcon } from "@heroicons/react/24/outline";

// Brand green — deep shade of the home palette's green for accents on
// light backgrounds (~4.9:1 on white, AA for all text sizes).
const GREEN = "#1F7A4D";

// Light card background for the text cards (from the design).
const TEXT_CARD_BG = "#F8EEE7";

// Placeholder loop — reuses the ultra-endurance hero clip. Muted, looped,
// no controls, exactly like the hero.
const PLACEHOLDER_VIDEO =
  "https://cdn.shopify.com/videos/c/o/v/8c51be2b569249d4a8c11fbfcee0d28a.mp4";

type VideoCard = {
  type: "video";
  quote: string;
  name: string;
  tag: string;
};

type TextCard = {
  type: "text";
  label: string;
  title: string;
  body: React.ReactNode;
};

type Card = VideoCard | TextCard;

const CARDS: Card[] = [
  {
    type: "video",
    quote: "My splits held in the back half of HYROX for the first time.",
    name: "Arjun Nair",
    tag: "HYROX",
  },
  {
    type: "text",
    label: "/ HYROX",
    title: "Run. Station. Repeat.",
    body: (
      <>
        HYROX punishes the athlete whose engine fades between stations. M3
        targets strength-endurance and the recovery to clear each block — so the
        back half doesn&apos;t undo the front.
      </>
    ),
  },
  {
    type: "video",
    quote: "Recovery between double-days stopped wrecking me.",
    name: "Rohan Iyer",
    tag: "HYROX",
  },
  {
    type: "text",
    label: "/ ULTRA-ENDURANCE",
    title: "The long game.",
    body: (
      <>
        Hours of output flood the system with oxidative stress. M3&apos;s
        autophagy + antioxidant layer is built to manage that load — protecting
        cells across the distance and after it.
      </>
    ),
  },
  {
    type: "video",
    quote: "The readiness score actually changed how I train.",
    name: "Karthik Menon",
    tag: "HYROX",
  },
];

const CARD_SIZE = "h-[440px] w-[280px] shrink-0 snap-start md:w-[300px]";

function VideoCardView({ card }: { card: VideoCard }) {
  return (
    <article
      className={`relative overflow-hidden rounded-2xl bg-black ${CARD_SIZE}`}
    >
      <video
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      >
        <source src={PLACEHOLDER_VIDEO} type="video/mp4" />
      </video>
      {/* Scrim so the quote card lifts off the footage */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"
      />
      {/* Testimonial */}
      <figure className="absolute inset-x-3 bottom-3">
        <div className="rounded-xl border border-white/10 bg-black/50 p-3.5 backdrop-blur-md">
          <blockquote className="text-[12px] italic leading-snug text-white">
            &ldquo;{card.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-2 flex items-center gap-1 text-[10px] text-white/60">
            <CheckIcon className="h-3 w-3 shrink-0" strokeWidth={2.5} />
            <span>
              {card.name} · {card.tag}
            </span>
          </figcaption>
        </div>
      </figure>
    </article>
  );
}

function TextCardView({ card }: { card: TextCard }) {
  return (
    <article
      className={`rounded-2xl p-6 md:p-7 ${CARD_SIZE}`}
      style={{ background: TEXT_CARD_BG }}
    >
      <p
        className="text-[11px] font-semibold uppercase tracking-[0.14em]"
        style={{ color: GREEN }}
      >
        {card.label}
      </p>
      <h3 className="mt-3 text-[18px] font-semibold text-[#1a1a1a]">
        {card.title}
      </h3>
      <p className="mt-3 text-[13px] leading-relaxed text-[#1a1a1a]/65">
        {card.body}
      </p>
    </article>
  );
}

export function UltraEnduranceSocialProof() {
  return (
    <section className="w-full bg-white">
      {/* Heading */}
      <div className="mx-auto max-w-6xl px-4 pt-20 md:px-8 md:pt-28">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1a1a1a] md:text-[12px]">
          Social proof
        </p>
        <h2 className="mt-4 max-w-3xl text-balance text-[34px] font-semibold leading-[1.08] tracking-tight text-[#1a1a1a] md:mt-5 md:text-[48px]">
          Used by athletes, coaches, and people{" "}
          <span style={{ color: GREEN }}>chasing the line.</span>
        </h2>
      </div>

      {/* Horizontal scroller — scrollbar hidden for a clean look. Breaks out
          of the max-width container so cards bleed toward the viewport edge;
          padding re-insets the first card to align with the heading.
          Focusable + labelled so keyboard users can arrow-scroll it. */}
      <div
        role="region"
        aria-label="Athlete testimonials and training benefits"
        tabIndex={0}
        className="mt-10 overflow-x-auto pb-4 [scrollbar-width:none] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F7A4D]/50 md:mt-14 [&::-webkit-scrollbar]:hidden"
      >
        <ul className="flex snap-x snap-mandatory gap-4 pl-4 pr-4 md:gap-5 md:pl-8 md:pr-8 lg:pl-[max(2rem,calc((100vw-1152px)/2+2rem))] lg:pr-[max(2rem,calc((100vw-1152px)/2+2rem))]">
          {CARDS.map((card, i) => (
            <li key={i} className="flex">
              {card.type === "video" ? (
                <VideoCardView card={card} />
              ) : (
                <TextCardView card={card} />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Closing divider — black at 25%. */}
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <hr
          className="mt-12 md:mt-16"
          style={{ borderColor: "rgba(0,0,0,0.25)" }}
        />
      </div>
    </section>
  );
}
