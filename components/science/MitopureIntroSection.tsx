import Image from "next/image";

interface MitopureIntroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export function MitopureIntroSection({
  title,
  description,
  imageSrc,
  imageAlt,
}: MitopureIntroSectionProps) {
  return (
    <section className="w-full bg-white flex flex-col items-center">
      {/* Hero Image Section */}
      <div className="w-full px-4 md:px-8 pt-4 md:pt-8">
        <div className="relative w-full h-[60vh] md:h-[80vh] rounded-[2rem] overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="absolute inset-0 h-full w-full object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* Text Content Section (Below Image) */}
      <div className="w-full max-w-[1440px] px-6 md:px-12 py-16 md:py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-black font-medium tracking-tight max-w-5xl leading-tight">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-neutral-600 mt-8 max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
