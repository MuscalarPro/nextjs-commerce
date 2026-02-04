import Image from "next/image";

export function ViacapSection() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background with Purple theme */}
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
          <Image
            src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/viacapbg.jpg?v=1770198196"
            alt="Viacap Background"
            fill
            className="object-cover"
            priority
          />
         {/* Greenish Overlay to match tone */}
         <div className="absolute inset-0 bg-[#2C3E36]/30 mix-blend-multiply opacity-40"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-6">
        {/* Glassmorphism Card */}
        <div className="relative w-full h-auto md:h-[700px] rounded-[3rem] overflow-hidden bg-white/10 backdrop-blur-[40px] border border-white/20 shadow-2xl flex flex-col md:flex-row items-center">
            
            {/* Subtle Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />

            {/* Left Content */}
            <div className="relative z-20 w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center h-full text-white">
                <div className="flex items-center gap-2 mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#e9d5ff]"></span>
                    <span className="text-xs md:text-sm tracking-[0.2em] font-medium uppercase text-[#e9d5ff]">MUSCLESPAN™ PROTOCOL</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-normal leading-[1.1] mb-12 tracking-tight">
                    Most probiotics don't survive digestion—<span className="font-medium">DS-01® does.</span>
                </h2>

                {/* Stat Box */}
                <div className="inline-flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 border border-white/20 bg-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-md max-w-lg">
                    <div className="flex flex-col">
                         <span className="text-xs font-bold bg-white/20 px-1.5 py-0.5 rounded text-white inline-block w-fit mb-1">DS-01®</span>
                         <span className="text-lg md:text-xl font-light leading-snug text-[#f3e6ff]">
                             Increases <br/> healthy bacteria by
                         </span>
                    </div>
                    <div className="flex items-start text-[#e9d5ff]">
                        <span className="text-5xl md:text-6xl font-light">↑4.6x</span>
                        <span className="text-xl mt-1">*</span>
                    </div>
                </div>

                <p className="mt-8 text-[10px] md:text-xs text-white/60 max-w-sm leading-relaxed">
                    *in a clinical trial of n=103 individuals with occasional GI challenges
                </p>
            </div>

            {/* Right Content - Capsule Logic */}
            <div className="relative z-20 w-full md:w-1/2 h-full min-h-[400px] flex flex-col md:flex-row items-center justify-center p-4 md:p-8 gap-8 md:gap-8">
                 
                 {/* Capsule Video */}
                 <div className="relative w-[180px] md:w-[300px] h-[450px] md:h-[700px] flex-shrink-0 flex items-center justify-center">
                     <video
                        src="https://cdn.shopify.com/videos/c/o/v/38d767ba3a7c48bf9ce11104f0016e49.webm"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform scale-150 md:scale-[1.75]"
                     />
                 </div>

                 {/* Desktop Only: List Content */}
                 <div className="hidden md:flex flex-col gap-6 md:gap-10 z-10 w-full max-w-[300px]">
                    <p className="text-lg md:text-2xl font-medium text-white leading-snug">
                      These cellular batteries start wearing out in your 30s.
                    </p>
                    
                    <div className="flex flex-col gap-5 md:gap-8">
                       {[
                         "Cellular Energy",
                         "Muscle Strength",
                         "Peak Endurance"
                       ].map((item) => (
                          <div key={item} className="flex items-center gap-4 group cursor-default">
                              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-white">
                                 <span className="text-base -rotate-[135deg] leading-none text-white">
                              ↓
                            </span>
                              </div>
                              <span className="text-base md:text-xl text-white font-medium tracking-wide">{item}</span>
                          </div>
                       ))}
                    </div>
                 </div>

                 {/* Mobile Only: 3 Points (Cellular Batteries) */}
                 <div className="md:hidden flex flex-col items-center text-center w-full mt-[-20px]">
                    <p className="text-sm font-medium text-white mb-6 leading-snug max-w-[250px]">
                      These cellular batteries start wearing out in your 30s.
                    </p>
                    <div className="flex justify-between w-full px-2 max-w-sm gap-4">
                      {/* Item 1 */}
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                        </div>
                        <span className="text-[10px] text-white/90 leading-tight">Cellular <br/> Energy</span>
                      </div>
                      {/* Item 2 */}
                       <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                        </div>
                        <span className="text-[10px] text-white/90 leading-tight">Muscle <br/> Strength</span>
                      </div>
                      {/* Item 3 */}
                       <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                        </div>
                        <span className="text-[10px] text-white/90 leading-tight">Peak <br/> Endurance</span>
                      </div>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
}
