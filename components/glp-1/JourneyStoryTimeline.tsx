type Entry = {
  label: string;
  subtitle: string;
  quote: string;
  body: string;
};

const entries: Entry[] = [
  {
    label: "WEEK 0",
    subtitle: "The start",
    quote: "At 98 kg on 80-hour weeks, I knew my own chart looked bad.",
    body: "Mounjaro made sense. The appetite noise went quiet, the weight started falling — for the first time in years the scale moved the right way.",
  },
  {
    label: "MONTH 2",
    subtitle: "The catch",
    quote:
      "I was lighter — but the stairs left me winded and my grip felt soft.",
    body: "As a doctor I knew what it was. A fast deficit doesn't only burn fat — the body pulls from muscle too. Much of what I lost wasn't fat at all.",
  },
  {
    label: "THE TURN",
    subtitle: "The decision",
    quote:
      "I stopped chasing the number and started defending the muscle.",
    body: "I didn't quit Mounjaro — the fat loss was real. I changed everything around it: lifting, protein, and M3 for the layer training can't reach.",
  },
  {
    label: "MONTH 3–4",
    subtitle: "The proof",
    quote: "My lifts started climbing again. The fog lifted.",
    body: "Strength and energy held instead of fading. The plateau eased — because the muscle keeping my metabolism active was still there.",
  },
  {
    label: "NOW",
    subtitle: "Today",
    quote:
      "I lost the weight and kept the man. 70 kg, benching 100, 5K in 32 minutes.",
    body: "Same medication. Completely different outcome — because this time the body underneath got stronger, not smaller.",
  },
];

export function JourneyStoryTimeline() {
  return (
    <section id="story" className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-20 md:px-8 md:py-28">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#555]">
          In his words
        </p>
        <h2 className="mt-3 text-balance text-center text-[2rem] font-semibold leading-tight text-[#1a1a1a] md:text-[2.75rem]">
          How <span className="text-[#169E6F]">the story</span> actually went
        </h2>

        <div className="mt-12 flex flex-col gap-5 md:mt-16 md:gap-6">
          {entries.map((entry) => (
            <article
              key={entry.label}
              className="relative grid grid-cols-1 gap-4 rounded-2xl bg-[#F4F5F6] px-5 py-6 md:grid-cols-[140px_1fr_60px] md:gap-6 md:px-10 md:py-8"
            >
              {/* Left — timeline label */}
              <div className="md:pt-1">
                <p className="text-[11px] font-semibold tracking-[0.12em] text-[#555]">
                  {entry.label}
                </p>
                <p className="mt-1 text-[11px] text-[#999]">{entry.subtitle}</p>
              </div>

              {/* Center — quote + body */}
              <div className="md:pr-2">
                <blockquote className="font-sans text-lg font-medium leading-snug text-[#1a1a1a] md:text-[20px]">
                  &ldquo;{entry.quote}&rdquo;
                </blockquote>
                <p className="mt-4 text-sm leading-relaxed text-[#8a8a8a]">
                  {entry.body}
                </p>
              </div>

              {/* Right — large serif quote mark (Playfair Display) */}
              <span
                aria-hidden="true"
                className="absolute right-5 top-5 text-6xl leading-none text-[#D6D9DC] md:static md:flex md:items-start md:justify-end md:pt-1 md:text-7xl"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontWeight: 500,
                  fontStyle: "italic",
                }}
              >
                &rdquo;
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
