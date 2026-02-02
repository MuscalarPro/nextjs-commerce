import Image from "next/image";

export function ViacapSection() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background with Green/Organic texture */}
      <div className="absolute inset-0 bg-[#eef1ef] z-0">
        {/* Placeholder for the organic background texture */}
        <div className="absolute inset-0 bg-[url('https://cdn.shopify.com/s/files/1/0668/1486/9571/files/green-microbe-bg_2000x.jpg?v=1684340000')] bg-cover bg-center opacity-80 mix-blend-multiply filter blur-sm"></div>
         {/* Fallback gradient if image fails/not ideal */}
         <div className="absolute inset-0 bg-gradient-to-br from-[#d4e4d4] via-[#e2ebe2] to-[#c8dcc8] opacity-60"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-6">
        {/* Glassmorphism Card */}
        <div className="relative w-full min-h-[600px] md:h-[700px] rounded-[3rem] overflow-hidden bg-[#36542D]/20 backdrop-blur-3xl border border-white/20 shadow-2xl flex flex-col md:flex-row items-center">
            
            {/* Darker Overlay Gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#36542D]/40 to-transparent pointer-events-none" />

            {/* Left Content */}
            <div className="relative z-20 w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center h-full text-white">
                <div className="flex items-center gap-2 mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#9fff9f]"></span>
                    <span className="text-xs md:text-sm tracking-[0.2em] font-medium uppercase text-[#d4fbd4]">Viacap® Technology</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-normal leading-[1.1] mb-12 tracking-tight">
                    Most probiotics don't survive digestion—<span className="font-medium">DS-01® does.</span>
                </h2>

                {/* Stat Box */}
                <div className="inline-flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 border border-white/20 bg-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-md max-w-lg">
                    <div className="flex flex-col">
                         <span className="text-xs font-bold bg-white/20 px-1.5 py-0.5 rounded text-white inline-block w-fit mb-1">DS-01®</span>
                         <span className="text-lg md:text-xl font-light leading-snug text-[#ebfbeb]">
                             Increases <br/> healthy bacteria by
                         </span>
                    </div>
                    <div className="flex items-start text-[#9fff9f]">
                        <span className="text-5xl md:text-6xl font-light">↑4.6x</span>
                        <span className="text-xl mt-1">*</span>
                    </div>
                </div>

                <p className="mt-8 text-[10px] md:text-xs text-white/60 max-w-sm leading-relaxed">
                    *in a clinical trial of n=103 individuals with occasional GI challenges
                </p>
            </div>

            {/* Right Content - Capsule Logic */}
            <div className="relative z-20 w-full md:w-1/2 h-full min-h-[400px] flex items-center justify-center p-8">
                 {/* This would be the 3D Image */}
                 <div className="relative w-[300px] md:w-[400px] h-full flex items-center justify-center">
                     {/* Capsule Video */}
                     <video
                        src="https://cdn.shopify.com/videos/c/o/v/38d767ba3a7c48bf9ce11104f0016e49.webm"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform scale-125 md:scale-150"
                     />

                     {/* Annotation: Outer Capsule */}
                     <div className="hidden md:block absolute top-[20%] left-[-20%] w-[180px] text-right">
                        <h4 className="text-[10px] font-bold tracking-widest uppercase text-[#d4fbd4] mb-1">Outer Capsule</h4>
                        <p className="text-[11px] text-white/80 leading-relaxed">
                            Shields probiotics from stomach acid in the digestive tract, while delivering prebiotics to stimulate the growth of beneficial bacteria.
                        </p>
                        {/* Line connector */}
                        <div className="absolute top-2 right-[-60px] w-[50px] h-[1px] border-t border-dashed border-white/40"></div>
                     </div>

                     {/* Annotation: Inner Capsule */}
                     <div className="hidden md:block absolute bottom-[30%] right-[-30%] w-[180px] text-left">
                        <h4 className="text-[10px] font-bold tracking-widest uppercase text-[#d4fbd4] mb-1">Inner Capsule</h4>
                        <p className="text-[11px] text-white/80 leading-relaxed">
                            Delivers 24 live strains of probiotics to the colon, where they're needed most.
                        </p>
                         {/* Line connector */}
                         <div className="absolute top-2 left-[-60px] w-[50px] h-[1px] border-t border-dashed border-white/40"></div>
                     </div>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
}
