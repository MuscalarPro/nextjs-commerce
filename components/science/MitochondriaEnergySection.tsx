import Image from "next/image";

interface MitochondriaEnergySectionProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  subtitles:string
}

export function MitochondriaEnergySection({
  title,
  subtitle,
  imageSrc,
  subtitles
}: MitochondriaEnergySectionProps) {
  return (
    <section className="w-full bg-[#f4f4f0] md:bg-neutral-50 relative overflow-hidden flex flex-col md:min-h-[600px] md:flex-row md:items-center mb-8">
      {/* 
        Image Container:
        - Mobile: Relative, Fixed Height, Order 2 (Below text)
        - Desktop: Absolute, Full Background, No Order (Behind text)
      */}
      <div className="relative w-full h-[600px] order-2 md:absolute md:inset-0 md:h-full md:z-0 md:order-none">
          <Image
            src={imageSrc}
            alt="Mitochondria background abstract"
            fill
            className="object-cover object-center"
            priority={false}
          />
           <div className="absolute inset-0 bg-white/10" /> 
      </div>

      <div className="relative z-10 w-full mx-auto max-w-[1440px] px-4 py-12 order-1 md:px-6 md:py-12 md:order-none">
        <div className="flex flex-col md:flex-row justify-end items-center">
            
           {/* Text Content - Right Aligned */}
           <div className="w-full md:w-1/2 md:pl-12">
             <h2 className="text-[1.5rem] md:text-[2.5rem] leading-tight font-normal text-black mb-4">
                {title}
             </h2>
             <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-2">
                {subtitle}
             </p>
             <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                {subtitles}
             </p>
           </div>

        </div>
      </div>
    </section>
  );
}
