import Image from "next/image";

export function ViacapSection() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background with Purple theme */}
      <div className="absolute inset-0 bg-[#fbf5ff] z-0">
         <div className="absolute inset-0 bg-gradient-to-br from-[#f3e8ff] via-[#e9d5ff] to-[#fae8ff] opacity-60"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-6">
        {/* Glassmorphism Card */}
        <div className="relative w-full min-h-[600px] md:h-[700px] rounded-[3rem] overflow-hidden bg-[#7B2A8A]/90 backdrop-blur-3xl border border-white/20 shadow-2xl flex flex-col md:flex-row items-center">
            
            {/* Darker Overlay Gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7B2A8A] via-[#9f52e1] to-[#c13868] opacity-90 pointer-events-none" />

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
            <div className="relative z-20 w-full md:w-1/2 h-full min-h-[400px] flex flex-col items-center justify-center p-8">
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
                        <h4 className="text-[10px] font-bold tracking-widest uppercase text-[#d4fbd4] mb-1">OUTER LAYER — FOR YOUR MITOCHONDRIA</h4>
                        <p className="text-[11px] text-white/80 leading-relaxed">
                           Clinically studied Urolithin A (1 g/day) supports mitochondrial quality control (mitophagy biology) and improved fatigue resistance (contractions‑to‑fatigue) in older adults (n=66). (JAMA Netw Open 2022)

                        </p>
                        {/* Line connector */}
                        <div className="absolute top-2 right-[-60px] w-[50px] h-[1px] border-t border-dashed border-white/40"></div>
                     </div>

                     {/* Annotation: Inner Capsule */}
                     <div className="hidden md:block absolute bottom-[30%] right-[-30%] w-[180px] text-left">
                        <h4 className="text-[10px] font-bold tracking-widest uppercase text-[#d4fbd4] mb-1">INNER LAYER — FOR YOUR OUTPUT</h4>
                        <p className="text-[11px] text-white/80 leading-relaxed">
                           Human trials link 1 g/day Urolithin A with strength gains (~12%) and clinically meaningful endurance signals (peak VO₂, 6‑minute walk) alongside biomarker shifts. (Cell Rep Med 2022)

                        </p>
                         {/* Line connector */}
                         <div className="absolute top-2 left-[-60px] w-[50px] h-[1px] border-t border-dashed border-white/40"></div>
                     </div>
                 </div>

                 {/* Mobile Only: 3 Points (Cellular Batteries) */}
                 <div className="md:hidden mt-8 flex flex-col items-center text-center w-full">
                    <p className="text-sm font-medium text-white mb-8 leading-snug max-w-[250px]">
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
