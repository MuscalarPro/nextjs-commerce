import Image from "next/image";

type Step = {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

const steps: Step[] = [
  {
    title: "The GLP-1 cuts intake",
    body: "Appetite drops, you eat far less, and the body burns through fat — and, on a fast cut, muscle too.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/the_glp-1_cuts_intake.png?v=1780863545",
    imageAlt: "Hand holding food, illustrating reduced intake",
  },
  {
    title: "Muscle quietly leaves",
    body: "Without resistance training and protein, lean mass shrinks alongside the fat. Strength and metabolism dip with it.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/muscle_leaves_quietly.png?v=1780863546",
    imageAlt: "Lower back showing muscle definition",
  },
  {
    title: "M3 supports the cell",
    body: "Clinical Urolithin A supports mitophagy — the renewal that keeps muscle cells energised so more of what you lose is fat.",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/m3_supports_the_cell.jpg?v=1780998415",
    imageAlt: "Microscopic view of mitochondria",
  },
];

export function ThreeStepsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        {/* Heading block */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1a1a1a]/55">
            How it actually works
          </p>
          <h2 className="mt-3 text-balance text-[2rem] font-semibold leading-tight text-[#1a1a1a] md:text-[2.75rem]">
            <span className="text-[#169E6F]">Muscle &amp; GLP-1</span>, in three
            steps
          </h2>
          <p className="mt-4 text-balance text-[15px] leading-relaxed text-[#1a1a1a]/70 md:text-base">
            Where the medication ends and where M3 begins &mdash; the simplest
            version.
          </p>
        </div>

        {/* 3-up grid of step cards */}
        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {steps.map((s) => (
            <article key={s.title}>
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-100">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 400px"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold leading-tight text-[#1a1a1a] md:text-[19px]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#8a8a8a]">
                  {s.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
