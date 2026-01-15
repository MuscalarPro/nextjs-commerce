export default function CTASection() {
  return (
    <section className="w-full bg-black py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 text-center text-white">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Ready for what&apos;s next
        </p>
        <h2 className="mb-4 font-inter text-[1.9rem] leading-tight md:text-[2.5rem]">
          Build strength for the next decade, not just the next workout.
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-neutral-300 md:text-base">
          Join the MuscalarPro waitlist to get early access to protocols,
          product releases, and education on muscle longevity.
        </p>
        <button className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-xs font-semibold uppercase tracking-wide text-black transition-colors hover:bg-neutral-200 md:px-10 md:py-4 md:text-sm">
          Join the waitlist
        </button>
      </div>
    </section>
  );
}

