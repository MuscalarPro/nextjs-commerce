export function SafetyInfo() {
  return (
    <section className="bg-gradient-to-b from-[#D2D4D8] via-[#D8DADD] to-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-20">
        <h3 className="text-balance text-[1.75rem] font-semibold leading-tight text-[#1a1a1a] md:text-[2rem]">
          Important safety information
        </h3>
        <p className="mt-4 max-w-2xl text-balance text-sm leading-relaxed text-[#1a1a1a]/65 md:text-[15px]">
          What you should know before starting or while on a GLP-1. Dr. Ateeb
          Shaikh&apos;s story is shared with permission and is one
          individual&apos;s experience; not a guarantee of results.
        </p>
        <button
          type="button"
          className="mt-6 inline-flex items-center rounded-full border border-[#1a1a1a]/15 bg-white px-6 py-2.5 text-sm font-semibold text-[#1a1a1a] shadow-sm transition-colors hover:bg-neutral-50 md:mt-7"
        >
          Read more
        </button>
      </div>
    </section>
  );
}
