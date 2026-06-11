import Image from "next/image";

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

// Mobile keeps side columns tight (no horizontal connectors). Desktop widens
// both side columns to fit a short dashed line between the label/badge and
// the card. Hardcoded (no template literal) so Tailwind picks the classes up.
const ROW =
  "grid items-center gap-3 grid-cols-[72px_1fr_36px] md:gap-3 md:grid-cols-[150px_1fr_90px]";

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

        {/* Top spine — gradient dashed, ~2px weight, fades IN as it
            approaches the first card */}
        <div className={ROW}>
          <div />
          <div className="flex justify-center py-1">
            <VerticalDashed height="h-10 md:h-14" gradient="fadeIn" />
          </div>
          <div />
        </div>

        {/* Timeline rows — flex column with gap between cards. No dashed
            segments between cards anymore. */}
        <div className="flex flex-col gap-5 md:gap-6">
          {entries.map((entry, i) => (
            <div key={entry.label} className={ROW}>
              {/* Left col — label + short horizontal dashed line.
                  Line is desktop-only; mobile keeps the label tight against
                  the card. justify-end packs everything to the card side. */}
              <div className="flex items-center justify-end gap-2 md:gap-3">
                <div className="text-right">
                  <p className="text-[10px] font-semibold tracking-[0.08em] text-[#1a1a1a] md:text-[11px]">
                    {entry.label}
                  </p>
                  <p className="text-[9px] text-[#999] md:text-[10px]">
                    {entry.subtitle}
                  </p>
                </div>
                <HorizontalDashed className="hidden md:block w-10 lg:w-12" />
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

              {/* Right col — short horizontal dashed line + numbered badge.
                  Line is desktop-only for the same reason as the left side. */}
              <div className="flex items-center justify-start gap-2 md:gap-3">
                <HorizontalDashed className="hidden md:block w-10 lg:w-12" />
                <div className="flex h-6 w-6 items-center justify-center rounded-[6px] border border-[#1a1a1a]/30 text-[10px] font-medium text-[#1a1a1a] md:h-8 md:w-8 md:text-[12px]">
                  {i + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom terminator — solid horizontal bar (matched weight to the
            dashed verticals) followed by a gradient dashed line that fades
            OUT as it descends into the next section */}
        <div className={ROW}>
          <div />
          <div className="flex flex-col items-center pt-4 md:pt-6">
            <div className="h-0.5 w-20 rounded-full bg-[#1a1a1a]/60 md:w-32" />
            <VerticalDashed height="h-24 md:h-40" gradient="fadeOut" />
          </div>
          <div />
        </div>
      </div>
    </section>
  );
}

// 2px-wide vertical dashed line. Optional fade-in / fade-out gradient is
// rendered by giving the div a `linear-gradient` background and then
// masking it with a `repeating-linear-gradient` so only the dash regions
// remain — that way the dashes themselves carry the gradient.
function VerticalDashed({
  height,
  gradient,
}: {
  height: string;
  gradient?: "fadeIn" | "fadeOut";
}) {
  const baseColor = "rgba(26,26,26,0.6)";
  const fadedColor = "rgba(26,26,26,0.08)";
  const background =
    gradient === "fadeIn"
      ? `linear-gradient(to bottom, ${fadedColor}, ${baseColor})`
      : gradient === "fadeOut"
        ? `linear-gradient(to bottom, ${baseColor}, ${fadedColor})`
        : baseColor;

  return (
    <div
      className={`w-0.5 ${height}`}
      style={{
        background,
        WebkitMaskImage:
          "repeating-linear-gradient(to bottom, black 0 6px, transparent 6px 12px)",
        maskImage:
          "repeating-linear-gradient(to bottom, black 0 6px, transparent 6px 12px)",
      }}
    />
  );
}

// 1px horizontal dashed line for left/right card connectors. Same mask
// technique as the vertical helper, but oriented to the right.
function HorizontalDashed({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px flex-shrink-0 ${className}`}
      style={{
        background: "rgba(26,26,26,0.5)",
        WebkitMaskImage:
          "repeating-linear-gradient(to right, black 0 5px, transparent 5px 10px)",
        maskImage:
          "repeating-linear-gradient(to right, black 0 5px, transparent 5px 10px)",
      }}
    />
  );
}
