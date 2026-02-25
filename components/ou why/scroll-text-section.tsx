import { scrollTextContent } from "data/our-why/scrollTextData";

export function ScrollTextSection() {
  return (
    <>
      <section className="relative w-full bg-white">
        <div className="mx-auto max-w-3xl px-4 pt-12 md:pt-0">
          <h2 className="mb-6 font-inter text-left text-[2rem] md:text-[3.5rem] font-normal leading-[1.25] text-black opacity-100 md:opacity-10">
            {scrollTextContent.headline.main}
            <br />
            {scrollTextContent.headline.sub}
          </h2>

          {scrollTextContent.paragraphs.map((para, i) => (
            <p
              key={i}
              className="mb-4 font-inter text-left text-[1.75rem] font-normal leading-[1.4] tracking-[-0.0225em] text-[#71717a]"
            >
              {para}
            </p>
          ))}

          <ul
            className="mb-4 mt-8 flex flex-col gap-10 text-left text-black pl-2 "
            style={{ marginTop: "2rem" }}
          >
            {scrollTextContent.listItems.map((item, i) => (
              <li
                key={i}
                className="flex items-start px-4 text-[1.25rem] md:text-[1.5rem]"
                style={{
                  letterSpacing: "-0.02em",
                  marginTop: 0,
                  marginBottom: 0,
                  fontFamily:
                    '"Nb international pro webfont", Arial, sans-serif',
                  fontWeight: 400,
                  lineHeight: 1.25,
                }}
              >
                <span className="mr-4 mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-black"></span>
                <span>
                  {item.prefix}
                  {item.highlightedText && (
                    <span className="text-[#a638b5]">
                      {item.highlightedText}
                    </span>
                  )}
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* Sticky gradient overlay at bottom - only applies to this section */}
        <div className="pointer-events-none sticky bottom-0 left-0 right-0 z-50 h-36 bg-gradient-to-b from-transparent via-white to-white"></div>
      </section>
    </>
  );
}
