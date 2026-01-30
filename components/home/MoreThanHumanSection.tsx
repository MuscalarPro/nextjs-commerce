import Image from "next/image";
import Link from "next/link";

const ANATOMY_IMAGE =
  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/videoframe_7015.png?v=1768635095";

export function MoreThanHumanSection() {
  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="mx-auto max-w-8xl px-4 md:px-6">
        <div className="grid gap-2 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="space-y-4 md:space-y-8">
            <h2 className="text-[2rem] md:text-[3rem] text-[#1a3319] leading-tight text-center md:text-left">
              You are more than human.
            </h2>

            <p className="text-[1rem] md:text-[1.25rem] text-neutral-700 leading-relaxed max-w-2xl text-center md:text-left mx-auto md:mx-0">
              Your body isn't yours alone—it's home to 38 trillion microbes that
              power your digestion, immunity and more. Take a few minutes to
              learn how their health impacts your health—and how to maximize
              both.
            </p>

            <div className="pt-4 hidden md:block">
              <Link
                href="/science/microbiome-101"
                className="inline-flex items-center gap-3 rounded-full bg-[#1a3319] px-8 py-4 text-white font-semibold hover:bg-[#1a3319]/90 transition-colors"
              >
                <span>Discover</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
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
