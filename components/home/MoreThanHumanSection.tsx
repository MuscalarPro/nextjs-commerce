import Image from "next/image";
import Link from "next/link";

const ANATOMY_IMAGE =
  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/videoframe_7015.png?v=1768635095";

export function MoreThanHumanSection() {
  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <div className="grid gap-2 md:grid-cols-2 md:items-center md:gap-12">
          <div className="space-y-4 md:space-y-8">
            <h2 className="text-[1.5rem] md:text-[2.5rem] text-[#1a3319] leading-tight text-center md:text-left">
              You are more than human.
            </h2>

            <p className="text-[0.875rem] md:text-[1rem] text-neutral-700 leading-relaxed max-w-2xl text-center md:text-left mx-auto md:mx-0">
              Your body isn't yours alone—it's home to 38 trillion microbes that
              power your digestion, immunity and more. Take a few minutes to
              learn how their health impacts your health—and how to maximize
              both.
            </p>

            <div className="pt-4 hidden md:block">
              <Link
                href="/science/microbiome-101"
                className="inline-flex items-center rounded-full bg-[#36542D] pl-8 pr-2 py-2 text-white font-semibold hover:bg-[#1a3319]/90 transition-colors group"
              >
                <span className="pr-2">Discover</span>
                <span className="inline-flex items-center justify-center rounded-full bg-[#0f1a0f] border-2 border-white/20 shadow-sm w-10 h-10 group-hover:bg-[#1a3319]/95">
                  <svg
                    className="w-4 h-4 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          <div className="relative md:h-[75vh] h-[40vh] rounded-2xl overflow-hidden">
            <Image
              src={ANATOMY_IMAGE}
              alt="Human anatomy illustration with video controls"
              fill
              className="object-cover object-center w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
