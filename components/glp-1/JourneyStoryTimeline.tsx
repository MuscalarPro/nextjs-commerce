import Image from "next/image";
import { Fragment } from "react";

type Entry = {
  label: string;
  subtitle: string;
  quote: string;
  image: string;
};

const entries: Entry[] = [
  {
    label: "WEEK 0",
    subtitle: "The start",
    quote: "At 98 kg on 80-hour weeks, I knew my own chart looked bad.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/htsaw-001.png?v=1780996701",
  },
  {
    label: "MONTH 2",
    subtitle: "The catch",
    quote:
      "I was lighter — but the stairs left me winded and my grip felt soft.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/htsaw-002.png?v=1780996702",
  },
  {
    label: "THE TURN",
    subtitle: "The decision",
    quote: "I stopped chasing the number and started defending the muscle.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/htsaw-003.png?v=1780996701",
  },
  {
    label: "MONTH 3–4",
    subtitle: "The proof",
    quote: "My lifts started climbing again. The fog lifted.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/htsaw-004.png?v=1780996701",
  },
  {
    label: "NOW",
    subtitle: "Today",
    quote:
      "I lost the weight and kept the man. 70 kg, benching 100, 5K in 32 minutes.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/htsaw-005.png?v=1780996702",
  },
];

// Re-used everywhere a 3-col row needs to line up with the cards.
// Hardcoded (no template literal) so Tailwind picks the classes up at build.
const ROW =
  "grid items-center gap-3 grid-cols-[72px_1fr_36px] md:gap-6 md:grid-cols-[120px_1fr_56px]";

export function JourneyStoryTimeline() {
  return (
    <section id="story" className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-20 md:px-8 md:py-28">
        {/* Eyebrow + heading */}
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#555]">
          In his words
        </p>
        <h2 className="mt-3 text-balance text-center text-[2rem] font-semibold leading-tight text-[#1a1a1a] md:text-[2.75rem]">
          How <span className="text-[#169E6F]">the story</span> actually went
        </h2>

        {/* Top dotted segment — runs from heading to the first card */}
        <DottedSegment height="h-10 md:h-14" />

        {/* Timeline rows */}
        <div className="flex flex-col">
          {entries.map((entry, i) => (
            <Fragment key={entry.label}>
              <div className={ROW}>
                {/* Left — label/subtitle */}
                <div className="text-right">
                  <p className="text-[10px] font-semibold tracking-[0.08em] text-[#1a1a1a] md:text-[11px]">
                    {entry.label}
                  </p>
                  <p className="text-[9px] text-[#999] md:text-[10px]">
                    {entry.subtitle}
                  </p>
                </div>

                {/* Centre — bg-image card with bottom quote */}
                <article className="relative aspect-[5/2] overflow-hidden rounded-2xl bg-neutral-200">
                  <Image
                    src={entry.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 70vw, 560px"
                  />
                  {/* Bottom dark wash so the quote always reads */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/65 via-black/20 to-transparent"
                  />
                  <blockquote className="absolute inset-x-3 bottom-3 text-[12px] font-medium leading-snug text-white md:inset-x-5 md:bottom-5 md:text-[15px]">
                    &ldquo;{entry.quote}&rdquo;
                  </blockquote>
                </article>

                {/* Right — numbered badge */}
                <div className="flex items-center justify-start">
                  <div className="flex h-6 w-6 items-center justify-center rounded-[6px] border border-[#1a1a1a]/30 text-[10px] font-medium text-[#1a1a1a] md:h-8 md:w-8 md:text-[12px]">
                    {i + 1}
                  </div>
                </div>
              </div>

              {/* Dotted segment between cards (skip after the last) */}
              {i < entries.length - 1 && (
                <DottedSegment height="h-5 md:h-8" />
              )}
            </Fragment>
          ))}
        </div>

        {/* Bottom terminator — T-shape: solid horizontal bar on top,
            long dotted line below that visually leads into the next section */}
        <div className={ROW}>
          <div />
          <div className="flex flex-col items-center pt-4 md:pt-6">
            <div className="h-px w-20 bg-[#1a1a1a]/55 md:w-32" />
            <div className="h-24 w-px border-l border-dashed border-[#1a1a1a]/45 md:h-40" />
          </div>
          <div />
        </div>
      </div>
    </section>
  );
}

// Small helper: dotted vertical line in the middle column of the timeline
// grid. Used above the first card and between every pair of cards.
function DottedSegment({ height }: { height: string }) {
  return (
    <div className={ROW}>
      <div />
      <div className="flex justify-center py-1">
        <div
          className={`w-px border-l border-dashed border-[#1a1a1a]/35 ${height}`}
        />
      </div>
      <div />
    </div>
  );
}
