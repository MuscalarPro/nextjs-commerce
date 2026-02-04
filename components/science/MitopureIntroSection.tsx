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
    <section className="relative w-full min-h-screen flex md:items-center  items-end justify-center overflow-hidden bg-white pt-0 p-4 md:p-8 flex flex-col">
      {/* Full Screen Image Section */}
      <div className="relative w-full h-screen bg-black z-0 md:rounded-2xl ">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Text Content Section (Below Image) */}
      <div className="relative z-10 w-full bg-white py-24 px-6 md:px-12 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl text-black font-medium tracking-tight max-w-5xl leading-tight">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-neutral-600 mt-8 max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
