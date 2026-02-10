"use client";

import Link from "next/link";
import Image from "next/image";

export function ScienceCtaBanner() {
  return (
    <section className="w-full pb-16 md:pb-24 px-4 md:px-6 lg:px-8 bg-black">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative w-full overflow-hidden rounded-[20px] md:rounded-[32px] min-h-[400px] md:min-h-[500px] flex items-center">
            
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Science-CTA-bg.jpg?v=1770706680" // Placeholder, user to replace or I can find a better one
                    alt="Couple enjoying healthy lifestyle"
                    fill
                    className="object-cover object-center"
                    priority
                    onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"; // Fallback
                    }}
                />
                 {/* Gradient Overlay for Text Readability */}
                 <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent md:from-black/20" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-2xl px-8 md:px-16 py-12 flex flex-col items-start gap-6">
                 
                 {/* Powered By Label */}
                 <div className="flex items-center gap-2 mb-2">
                     <span className="text-[10px] md:text-xs font-bold tracking-widest text-white/80 uppercase">Powered by</span>
                     <div className="relative w-16 h-6">
                        <Image 
                            src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/mitopure-logo-red.png?v=1770200800" 
                            alt="Mitopure" 
                            fill 
                            className="object-contain"
                        />
                     </div>
                 </div>

                 {/* Headline */}
                 <h2 className="text-3xl md:text-5xl font-normal text-white leading-[1.1] tracking-tight drop-shadow-sm">
                    Discover our supplement range. <span className="text-white/80">Clinically proven to address aging at the cellular level.</span>
                 </h2>

                 {/* CTA Button */}
                 <div className="pt-4">
                     <Link 
                        href="/shop" 
                        className="bg-white text-black px-8 py-4 rounded-full text-xs md:text-sm font-bold tracking-widest hover:bg-neutral-100 transition-colors inline-block"
                     >
                        SHOP SUPPLEMENTS
                     </Link>
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
}
