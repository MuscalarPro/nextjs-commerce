import Image from "next/image";

const BG_IMAGE =
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/glp-appetite-model-background-photo.png?v=1780998227";

const GLP1_PRODUCT =
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/40-percent-glp-1-product-image.png?v=1780862978";

const M3_EXERCISE_PRODUCT =
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/m3-exercise-glp-1-section-product-image.png?v=1780862984";

// Section bg + card bg. Cards are ~30% darker than section bg (R/G/B × 0.7).
const SECTION_BG = "#2C3D1B";
const CARD_BG = "#1F2B13";

export function MuscleBoxBand() {
  return (
    <section>
      {/* TOP — model hero with overlaid headline + body */}
      <div className="relative min-h-[480px] md:min-h-[620px] lg:min-h-[720px]">
        <Image
          src={BG_IMAGE}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        {/* Soft dark vignette so the white text stays legible against the
            varied tones of the model's skin / hair / background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-black/35"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/20 to-transparent"
        />

        <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-16 md:px-8 md:pt-20 md:pb-24">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:gap-12 lg:gap-20">
            {/* LEFT — eyebrow + headline */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85 md:text-[12px]">
                The GLP-1{" "}
                <span aria-hidden="true" className="mx-0.5">
                  ↔
                </span>{" "}
                Muscle Link
              </p>
              <h2 className="mt-4 font-sans text-[2rem] font-semibold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] md:mt-5 md:text-[2.5rem] lg:text-[3.25rem]">
                GLP-1s work on appetite. Nothing in the box works on your
                muscle.
              </h2>
            </div>

            {/* RIGHT — body. Pushed down on desktop so it starts at the
                heading's first line, not the eyebrow */}
            <div className="md:pt-10 lg:pt-12">
              <p className="text-[14px] leading-relaxed text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)] md:text-[15px]">
                That&apos;s the gap. The medication quiets hunger and the fat
                comes off &mdash; but a fast deficit pulls from lean muscle at
                the same time, and muscle is what runs your metabolism, blood
                sugar and strength.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM — dark green band with 3 cards. Rounded bottom corners so
          the band reads as a card before transitioning into the next
          (white) section. */}
      <div
        className="relative rounded-b-3xl md:rounded-b-[2.5rem] lg:rounded-b-[3rem]"
        style={{ background: SECTION_BG }}
      >
        {/* Frosted-glass transition that overlaps the bottom of the model
            image above. The combo of `backdrop-blur` + a transparent→opaque
            gradient softens the hard seam so the image and the green band
            read as one continuous piece. Sized so it never reaches the
            cards (cards start at py-10 / md:py-14 = 40-56px from green top,
            blur ends at +12 / +16 / +20 relative to green top). */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-12 h-24 backdrop-blur-lg md:-top-16 md:h-32 lg:-top-20 lg:h-40"
          style={{
            background: `linear-gradient(to bottom, ${SECTION_BG}00 0%, ${SECTION_BG}99 55%, ${SECTION_BG} 100%)`,
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
          <div className="grid gap-4 md:grid-cols-2 md:gap-5">
            {/* LEFT column — two stacked callout cards */}
            <div className="grid gap-4 md:gap-5">
              <CalloutCard
                title="Up to 40%"
                body="of weight lost on a GLP-1 can be muscle, not fat"
                image={GLP1_PRODUCT}
                imageAlt="GLP-1 vial and injection pen"
              />
              <CalloutCard
                title="M3 + exercise"
                body="protects the lean mass the deficit would take"
                image={M3_EXERCISE_PRODUCT}
                imageAlt="MuscalarPro M3 pouch with GLP-1 vial"
              />
            </div>

            {/* RIGHT column — chart card spanning both rows */}
            <ChartCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function CalloutCard({
  title,
  body,
  image,
  imageAlt,
}: {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <article
      className="relative min-h-[240px] overflow-hidden rounded-2xl p-6 md:min-h-[280px] md:p-7 lg:min-h-[300px]"
      style={{ background: CARD_BG }}
    >
      <div className="relative z-10 max-w-[55%]">
        <h3 className="font-sans text-[24px] font-semibold leading-tight tracking-tight text-white md:text-[26px]">
          {title}
        </h3>
        <p className="mt-2 text-[13px] leading-snug text-white/70 md:text-[14px]">
          {body}
        </p>
      </div>

      {/* Product image — bigger, anchored to bottom-right. Cards grow
          taller via min-h above so the image has room to breathe. */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-full w-[55%] max-w-[320px] md:max-w-[360px] lg:max-w-[380px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-contain object-right-bottom"
          sizes="(max-width: 768px) 55vw, 360px"
        />
      </div>
    </article>
  );
}

function ChartCard() {
  return (
    <article
      className="rounded-2xl p-6 md:p-7 lg:p-8"
      style={{ background: CARD_BG }}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/65">
        Did you know?
      </p>
      <h3 className="mt-2 max-w-md font-sans text-[20px] font-semibold leading-tight text-white md:text-[22px]">
        Only 1 in 3 achieve mitophagy from diet and training; GLP-1 use
        complicates it.
      </h3>

      <div className="mt-6 md:mt-7">
        <MitophagyChart />
      </div>
    </article>
  );
}

function MitophagyChart() {
  // Bar heights are scaled against a 0–50% y-axis so both bars sit cleanly
  // in the plot. Labels carry the actual sign (placebo decreases, M3
  // increases) which is the editorial point of the chart.
  const Y_MAX = 50;
  const PLACEBO_MAG = 15; // absolute magnitude of the −15% decline
  const M3_MAG = 39; // +39% gain
  const placeboHeight = (PLACEBO_MAG / Y_MAX) * 100;
  const m3Height = (M3_MAG / Y_MAX) * 100;

  return (
    <div>
      {/* Plot row: y-axis title | y-axis labels | plot */}
      <div className="flex h-56 md:h-64">
        {/* Y-axis title rotated */}
        <div className="relative w-5 shrink-0 md:w-6">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 origin-center -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[9px] font-medium uppercase tracking-wider text-white/65 md:text-[10px]"
          >
            Increase in Mitophagy(%)
          </span>
        </div>

        {/* Y-axis tick labels */}
        <div
          aria-hidden="true"
          className="flex w-8 shrink-0 flex-col-reverse justify-between pr-2 text-right text-[9px] text-white/55 md:text-[10px]"
        >
          {[0, 10, 20, 30, 40, 50].map((v) => (
            <span key={v}>{v}%</span>
          ))}
        </div>

        {/* Plot area: gridlines + bars */}
        <div className="relative flex-1">
          {/* Dashed gridlines */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex flex-col-reverse justify-between"
          >
            {[0, 10, 20, 30, 40, 50].map((v) => (
              <span
                key={v}
                className="border-t border-dashed border-white/15"
              />
            ))}
          </div>

          {/* Bars */}
          <div className="relative z-10 flex h-full items-end justify-around gap-4 px-2 md:gap-8 md:px-4">
            {/* Placebo bar */}
            <div className="flex h-full w-full max-w-[64px] flex-col items-center justify-end gap-1.5">
              <span className="text-[10px] font-medium text-white md:text-[11px]">
                −15%
              </span>
              <div
                className="w-full rounded-t-sm bg-white/40 ring-1 ring-inset ring-white/30"
                style={{
                  height: `${placeboHeight}%`,
                  minHeight: 6,
                }}
              />
            </div>

            {/* M3 bar — highlight */}
            <div className="flex h-full w-full max-w-[64px] flex-col items-center justify-end gap-1.5">
              <span className="text-[10px] font-medium text-white md:text-[11px]">
                +39%
              </span>
              <div
                className="w-full rounded-t-sm bg-white"
                style={{
                  height: `${m3Height}%`,
                  minHeight: 6,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* X-axis tick labels — same 3-col scaffold as the plot row so they
          line up under the bars */}
      <div className="mt-2 flex">
        <div className="w-5 shrink-0 md:w-6" aria-hidden="true" />
        <div className="w-8 shrink-0 pr-2" aria-hidden="true" />
        <div className="flex flex-1 items-center justify-around gap-4 border-t border-white/20 px-2 pt-2 text-[10px] text-white/85 md:gap-8 md:px-4 md:text-[11px]">
          <span className="flex-1 text-center">Placebo</span>
          <span className="flex-1 text-center">Muscalarpro M3</span>
        </div>
      </div>

      {/* X-axis title */}
      <div className="mt-2 flex">
        <div className="w-5 shrink-0 md:w-6" aria-hidden="true" />
        <div className="w-8 shrink-0 pr-2" aria-hidden="true" />
        <div className="flex-1 text-center text-[9px] font-medium uppercase tracking-widest text-white/55 md:text-[10px]">
          Treatment
        </div>
      </div>
    </div>
  );
}
