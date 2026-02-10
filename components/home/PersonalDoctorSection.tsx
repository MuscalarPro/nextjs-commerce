"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { LockClosedIcon, MicrophoneIcon, PhotoIcon, VideoCameraIcon, ChevronLeftIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";

const universities = [
 "Cornell University",
];

const Typewriter = ({ words, delay = 2500 }: { words: string[]; delay?: number }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const word = words[currentWordIndex % words.length] || "";

    const type = () => {
      setCurrentText(prev => {
        if (isDeleting) {
          return word.substring(0, prev.length - 1);
        } else {
          return word.substring(0, prev.length + 1);
        }
      });
    };

    const speed = isDeleting ? 30 : 50;
    
    if (!isDeleting && currentText === word) {
      const timeout = setTimeout(() => setIsDeleting(true), delay);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex(prev => prev + 1);
      return;
    }

    const timeout = setTimeout(type, speed);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, delay]);

  return (
    <span>
      {currentText}
      <span className="animate-pulse ml-0.5">|</span>
    </span>
  );
};


export function PersonalDoctorSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#F9F8FC] to-[#DACFE5] py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header Content */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 inline-block rounded-2xl bg-[#dadada]/40 px-6 py-3 text-lg md:text-xl text-slate-800 backdrop-blur-md shadow-sm"
          >
            <Typewriter 
              words={[
                "Am I starting to have cognitive issues, or just burned out?",
                "Why do I feel tired even after 8 hours of sleep?",
                "Is there a supplement to help with my focus?",
                "How can I improve my longevity?"
              ]} 
            />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Your personal MuscleSpan <br /> doctor, one message away.

          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
         AI surfaces your performance insights, but a clinician helps you act on them. Loop in a doctor anytime to answer training, recovery, and supplementation questions—so you're never guessing.​
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <button className="bg-[#693979] hover:bg-[#693979] text-white rounded-full px-8 py-3.5 font-medium transition-all transform hover:scale-105 active:scale-95 shadow-lg">
             Talk to M3 Concierge
            </button>
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 uppercase tracking-wide">
              <LockClosedIcon className="w-3 h-3" />
              <span>HIPAA • Private</span>
            </div>
          </motion.div>
        </div>

        {/* Phone Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-[320px] md:max-w-[360px]"
        >
          <div className="relative rounded-[3rem] border-8 border-slate-900 bg-slate-900 overflow-hidden shadow-2xl h-[600px] md:h-[700px]">
            {/* Screen Content */}
            <div className="h-full w-full bg-[#f2f2f7] flex flex-col pt-12 pb-8 rounded-[2.5rem] overflow-hidden relative">
              {/* Status Bar Mockup */}
              <div className="absolute top-0 w-full px-6 py-3 flex justify-between text-black font-semibold text-xs z-20">
                <span>9:41</span>
                <div className="flex gap-1.5">
                  <div className="w-4 h-2.5 bg-black rounded-sm" />
                  <div className="w-4 h-2.5 bg-black rounded-sm" />
                </div>
              </div>

              {/* Dynamic Island Area */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-20" />

              {/* Chat Header */}
              <div className="flex items-center justify-between px-4 pb-4 pt-2 border-b border-slate-200/50 bg-[#f2f2f7]/80 backdrop-blur-md sticky top-0 z-10">
                <ChevronLeftIcon className="w-6 h-6 text-blue-500" />
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold overflow-hidden">
                    <img src="https://ui-avatars.com/api/?name=Mito&background=random" alt="Mito" className="w-full h-full object-cover opacity-80" />
                  </div>
                  <span className="text-xs font-medium mt-0.5">Mito ›</span>
                </div>
                <VideoCameraIcon className="w-6 h-6 text-blue-500" />
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-hidden px-4 py-6 space-y-4">
                {/* Incoming Message 1 */}
                <div className="flex flex-col items-start max-w-[85%]">
                  <div className="bg-[#e9e9eb] text-black px-4 py-2.5 rounded-2xl rounded-tl-sm text-[15px] leading-snug">
                    Hey David, just popping in to see how things have been.
                  </div>
                </div>

                {/* Incoming Message 2 */}
                <div className="flex flex-col items-start max-w-[85%]">
                  <div className="bg-[#e9e9eb] text-black px-4 py-2.5 rounded-2xl rounded-tl-sm text-[15px] leading-snug">
                    Any progress on your goals, or anything feeling off?
                  </div>
                </div>

                {/* Outgoing Message */}
                <div className="flex flex-col items-end self-end max-w-[85%] ml-auto">
                  <div className="bg-[#007aff] text-white px-4 py-2.5 rounded-2xl rounded-tr-sm text-[15px] leading-snug">
                    I started taking the morning adaptogen we talked about, but I feel more wired at night and can't sleep.
                  </div>
                </div>

                {/* Incoming Message 3 */}
                <div className="flex flex-col items-start max-w-[85%]">
                  <div className="bg-[#e9e9eb] text-black px-4 py-2.5 rounded-2xl rounded-tl-sm text-[15px] leading-snug">
                    Got it - I just checked with your clinician.
                  </div>
                </div>

                {/* Incoming Message 4 */}
                <div className="flex flex-col items-start max-w-[85%]">
                  <div className="bg-[#e9e9eb] text-black px-4 py-2.5 rounded-2xl rounded-tl-sm text-[15px] leading-snug">
                    He suggests moving the adaptogen to 3 PM and reducing the dose by 25%. Check how you feel tonight and update me tomorrow.
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="px-3 pt-2 pb-1 bg-[#f2f2f7]">
                <div className="flex items-center gap-3">
                  <PhotoIcon className="w-6 h-6 text-slate-400 shrink-0" />
                  <div className="flex-1 relative">
                    <input 
                      type="text" 
                      placeholder="iMessage" 
                      className="w-full bg-white border border-slate-300 rounded-full py-1.5 pl-4 pr-10 text-[15px] focus:outline-none focus:border-blue-500 placeholder:text-slate-400"
                      disabled
                    />
                    <MicrophoneIcon className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Universites - Auto Runner */}
        <div className="mt-20 overflow-hidden relative w-full">
          <p className="text-sm text-slate-500/80 mb-8 font-medium text-center">
            Built by physicians and researchers at the forefront of longevity science
          </p>
          
          {/* <div className="flex relative overflow-hidden mask-linear-gradient">
            <motion.div 
              className="flex gap-12 whitespace-nowrap items-center"
              animate={{ x: "-50%" }}
              transition={{ 
                repeat: Infinity, 
                ease: "linear", 
                duration: 20 
              }}
              style={{ width: "fit-content" }}
            >
              {[...universities, ...universities].map((uni, i) => (
                <span key={`${uni}-${i}`} className="text-lg md:text-xl font-serif text-slate-700/60 font-medium shrink-0">
                  {uni}
                </span>
              ))}
            </motion.div>
          </div> */}
           <p className="text-lg text-slate-500/80 font-semibold text-center">
            Cornell University          </p>
        </div>
      </div>
    </section>
  );
}
