export function ScrollTextSection() {
  return (
    <>
      <section className="relative w-full bg-white">
        <div className="mx-auto max-w-3xl px-4 pt-12 md:pt-0">
          <h2 className="mb-8 font-inter text-left text-[2.5rem] md:text-[3.5rem] font-normal leading-[1.25] text-black opacity-100 md:opacity-10">
            Peak Performance is broken--&gt;
          </h2>

          <p className="mb-4 font-inter text-left text-[1.75rem] font-normal leading-[1.4] tracking-[-0.0225em] text-[#71717a]">
            From poor food quality, to inescapable environmental toxins and a
            modern lifestyle that is hijacking our biology, it has never been
            harder to be healthy.
          </p>

          <p className="mb-4 font-inter text-left text-[1.75rem] font-normal leading-[1.4] tracking-[-0.0225em] text-[#71717a]">
            And it's clear that existing institutions aren't working.
          </p>

          <p className="mb-4 font-inter text-left text-[1.75rem] font-normal leading-[1.4] tracking-[-0.0225em] text-[#71717a]">
            The supplement industry monetizes our confusion with under-dosed
            "fairy dust," while the medical system waits for us to break before
            intervening. No one is proactively engineering your resilience.
          </p>

          <p className="mt-4 mb-8 font-inter text-left text-[1.75rem] font-normal leading-[1.4] tracking-[-0.0225em] text-[#71717a]">
            Your prime is shrinking.
          </p>

          <ul
            className="mb-4 mt-8 flex flex-col gap-12 text-left text-black px-4 "
            style={{ marginTop: "2rem" }}
          >
            <li
              className="flex items-start px-4 text-[1.25rem] md:text-[1.5rem]"
              style={{
                letterSpacing: "-0.02em",
                marginTop: 0,
                marginBottom: 0,
                fontFamily: '"Nb international pro webfont", Arial, sans-serif',
                fontWeight: 400,
                lineHeight: 1.25,
              }}
            >
              <span className="mr-4 mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-black"></span>
              <span>
                Lifespan is{" "}
                <span className="text-[#a638b5]">going backwards</span>
              </span>
            </li>
            <li
              className="flex items-start px-4 text-[1.25rem] md:text-[1.5rem]"
              style={{
                letterSpacing: "-0.02em",
                marginTop: 0,
                marginBottom: 0,
                fontFamily: '"Nb international pro webfont", Arial, sans-serif',
                fontWeight: 400,
                lineHeight: 1.25,
              }}
            >
              <span className="mr-4 mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-black"></span>
              <span>
                <span className="text-[#a638b5]">88%</span> of people are
                metabolically unhealthy
              </span>
            </li>
            <li
              className="flex items-start px-4 text-[1.25rem] md:text-[1.5rem]"
              style={{
                letterSpacing: "-0.02em",
                marginTop: 0,
                marginBottom: 0,
                fontFamily: '"Nb international pro webfont", Arial, sans-serif',
                fontWeight: 400,
                lineHeight: 1.25,
              }}
            >
              <span className="mr-4 mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-black"></span>
              <span>
                <span className="text-[#a638b5]">5,000+ chemicals</span> exists
                in the Indian food supply
              </span>
            </li>
            <li
              className="flex items-start px-4 text-[1.25rem] md:text-[1.5rem]"
              style={{
                letterSpacing: "-0.02em",
                marginTop: 0,
                marginBottom: 0,
                fontFamily: '"Nb international pro webfont", Arial, sans-serif',
                fontWeight: 400,
                lineHeight: 1.25,
              }}
            >
              <span className="mr-4 mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-black"></span>
              <span>
                Obesity rates have more than{" "}
                <span className="text-[#a638b5]">tripled</span> since 1960
              </span>
            </li>
            <li
              className="flex items-start px-4 text-[1.25rem] md:text-[1.5rem]"
              style={{
                letterSpacing: "-0.02em",
                marginTop: 0,
                marginBottom: 0,
                fontFamily: '"Nb international pro webfont", Arial, sans-serif',
                fontWeight: 400,
                lineHeight: 1.25,
              }}
            >
              <span className="mr-4 mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-black"></span>
              <span>
                Indians put an average of{" "}
                <span className="text-[#a638b5]">100</span> chemicals on their
                bodies each day
              </span>
            </li>
            <li
              className="flex items-start px-4 text-[1.25rem] md:text-[1.5rem]"
              style={{
                letterSpacing: "-0.02em",
                marginTop: 0,
                marginBottom: 0,
                fontFamily: '"Nb international pro webfont", Arial, sans-serif',
                fontWeight: 400,
                lineHeight: 1.25,
              }}
            >
              <span className="mr-4 mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-black"></span>
              <span>
                <span className="text-[#a638b5]">
                  Musclespan crashes alongside{" "}
                </span>
                the missing link to metabolic collapse and infertility
              </span>
            </li>
            <li
              className="flex items-start px-4 text-[1.25rem] md:text-[1.5rem]"
              style={{
                letterSpacing: "-0.02em",
                marginTop: 0,
                marginBottom: 0,
                fontFamily: '"Nb international pro webfont", Arial, sans-serif',
                fontWeight: 400,
                lineHeight: 1.25,
              }}
            >
              <span className="mr-4 mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-black"></span>
              <span>
                Female infertility is at record highs, male testosterone and
                sperm count at record lows
              </span>
            </li>
          </ul>
        </div>
        {/* Sticky gradient overlay at bottom - only applies to this section */}
        <div className="pointer-events-none sticky bottom-0 left-0 right-0 z-50 h-24 bg-gradient-to-b from-transparent via-white/60 to-white"></div>
      </section>
    </>
  );
}
