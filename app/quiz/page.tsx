"use client";

import { ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { quizQuestions } from "../../data/quiz-data";

type Step = "intro" | number | "email" | "calculating" | "results";

export default function QuizPage() {
  const [step, setStep] = useState<Step>("intro");
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [email, setEmail] = useState("");
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const totalQuestions = quizQuestions.length;
  const currentQuestionIndex = typeof step === "number" ? step - 1 : -1;
  const currentQuestion = currentQuestionIndex >= 0 ? quizQuestions[currentQuestionIndex] : null;

  const handleStart = () => {
    setDirection(1);
    setStep(1);
  };

  const handleNext = () => {
    if (typeof step === "number") {
      if (step < totalQuestions) {
        setDirection(1);
        setStep(step + 1);
      } else {
        setDirection(1);
        setStep("email");
      }
    } else if (step === "email") {
      setDirection(1);
      setStep("calculating");
    }
  };

  const handleOptionSelect = (questionId: number, value: any) => {
    if (!currentQuestion) return;
    
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    // Auto-advance for single select
    setTimeout(() => {
      handleNext();
    }, 400);
  };

  useEffect(() => {
    if (step === "calculating") {
      const timer = setTimeout(() => {
        setDirection(1);
        setStep("results");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <main className="fixed inset-0 z-[9999] flex h-screen w-full bg-white overflow-hidden font-sans">
      {/* LEFT SIDE: Image */}
      <div className="hidden lg:flex w-1/2 h-full items-center justify-center relative border-r border-gray-50">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="relative w-full h-full"
        >
          <Image
            src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/hf_20260331_065913_2e5cb28c-61ea-4a6e-9f48-72dbdcc56b5d.png?v=1775112417"
            alt="MuscalarPro M3"
            fill
            className="object-cover object-bottom"
            priority
          />
        </motion.div>
      </div>

      {/* RIGHT SIDE: Quiz Content */}
      <div className="w-full lg:w-1/2 h-full flex flex-col relative bg-white ">
        {/* Header: Progress & Close */}
        <div className="h-16 flex items-center justify-center px-8 lg:px-16 border-b border-gray-50 flex-shrink-0 z-20 bg-white">
          <div className="flex-1 max-w-[200px]">
             {(typeof step === "number" || step === "email") && (
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ 
                      width: step === "email" ? "100%" : `${(step / totalQuestions) * 100}%` 
                    }}
                    className="bg-[#7c3aed] h-full"
                  />
                </div>
             )}
          </div>
          <Link href="/" className="p-2 hover:bg-gray-50 rounded-full absolute right-8 color-black">
            <XMarkIcon className="w-8 h-8 text-black" />
          </Link>
        </div>

        {/* Content Area */}
        <div className="flex-1 relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            {step === "intro" && (
              <motion.div
                key="intro"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 lg:p-16"
              >
                <div className="space-y-6 max-w-md">
                   <p className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                     TAKE THE 5-MIN QUIZ
                   </p>
                   <h1 className="text-[40px] lg:text-[52px] font-bold leading-tight text-gray-900 tracking-tight">
                     Is M3 right for you?
                   </h1>
                   <p className="text-[17px] text-gray-600 leading-relaxed font-light">
                     Get a personalized assessment of how the M3 stack aligns with your longevity goals.
                   </p>
                   <button 
                     onClick={handleStart}
                     className="w-full py-5 bg-[#7c3aed] text-white rounded-xl font-bold text-[16px] hover:bg-[#6d28d9] transition-all transform hover:scale-[1.02] shadow-xl"
                   >
                     Start Quiz
                   </button>
                </div>
              </motion.div>
            )}

            {typeof step === "number" && currentQuestion && (
              <motion.div
                key={step}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 flex flex-col p-8 lg:px-16 lg:py-8 max-w-2xl mx-auto w-full"
              >
                <div className="flex-1 flex flex-col min-h-0">
                  <div className="space-y-2 mb-8 md:mb-20">
                    <p className="text-sm font-medium text-gray-400 text-center">
                      {step} / {totalQuestions}
                    </p>
                    <h2 className="text-[26px] lg:text-[32px] font-bold leading-tight text-gray-900 tracking-tight text-center ">
                      {currentQuestion.question}
                    </h2>
                  </div>

                  <div className="grid gap-2 w-full overflow-y-auto pr-2 pb-4 scrollbar-hide">
                    {currentQuestion.options.map((option, idx) => {
                      const isSelected = answers[currentQuestion.id] === option.value;
                        
                      return (
                        <button
                          key={idx}
                          onClick={() => handleOptionSelect(currentQuestion.id, option.value)}
                          className={`w-full py-3 md:py-3.5 px-5 mt-1 md:mt-2 text-left border rounded-xl transition-all duration-300 group
                            ${isSelected 
                              ? "border-[#7c3aed] bg-[#7c3aed]/5 shadow-sm" 
                              : "border-gray-100 bg-[#f9f9f9] hover:border-[#7c3aed]/30 hover:bg-white"
                            }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className={`text-[15px] font-medium transition-colors ${isSelected ? "text-[#7c3aed]" : "text-gray-700 group-hover:text-gray-900"}`}>
                              {option.label}
                            </span>
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all flex-shrink-0
                              ${isSelected ? "border-[#7c3aed] bg-[#7c3aed]" : "border-gray-300 group-hover:border-[#7c3aed]"}`}>
                              {isSelected && (
                                <motion.div 
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-2 h-2 rounded-full bg-white" 
                                />
                              )}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50 flex-shrink-0">
                  <button 
                    onClick={() => {
                      if (step > 1) {
                        setDirection(-1);
                        setStep(step - 1);
                      } else {
                        setDirection(-1);
                        setStep("intro");
                      }
                    }}
                    className="text-sm font-medium text-gray-400 hover:text-gray-600 flex items-center gap-2 group transition-colors"
                  >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
                  </button>
                </div>
              </motion.div>
            )}

            {step === "email" && (
              <motion.div
                key="email"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8 lg:p-16"
              >
                <div className="w-full max-w-md space-y-8 text-center">
                  <div className="space-y-4">
                    <h2 className="text-[36px] lg:text-[44px] font-bold text-gray-900 tracking-tight">
                      Your results await
                    </h2>
                    <p className="text-[16px] text-gray-500 font-light">
                      For your personalized testing plan
                    </p>
                  </div>

                  <div className="space-y-4">
                    <input 
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed] transition-all text-gray-900"
                    />
                    <button 
                      onClick={handleNext}
                      disabled={!email || !email.includes("@")}
                      className="w-full py-5 bg-[#7c3aed] text-white rounded-xl font-bold text-[16px] hover:bg-[#6d28d9] transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
                    >
                      Continue
                      <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-[11px] text-gray-400 mt-4 leading-relaxed">
                      By continuing you agree to our <Link href="/privacy" className="underline underline-offset-2 hover:text-[#7c3aed]">privacy policy</Link> and <Link href="/terms" className="underline underline-offset-2 hover:text-[#7c3aed]">terms of service</Link>.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {step === "calculating" && (
              <motion.div
                key="calculating"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
              >
                <div className="relative w-32 h-32 mb-8">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-4 border-[#7c3aed]/20 border-t-[#7c3aed] rounded-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[#7c3aed] font-bold">M3</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Analyzing your results</h2>
                <p className="text-gray-500">Mapping your cellular profile to the M3 stack...</p>
              </motion.div>
            )}

            {step === "results" && (
              <motion.div
                key="results"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 lg:p-16"
              >
                <div className="max-w-md space-y-6 flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#7c3aed] to-[#d946ef] opacity-20 blur-xl" />
                    <div className="relative w-24 h-24 rounded-full border-4 border-transparent bg-gradient-to-tr from-[#7c3aed] to-[#d946ef] p-[2px]">
                       <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <svg 
                            className="w-12 h-12" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="3"
                          >
                            <defs>
                              <linearGradient id="checkmark-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#7c3aed" />
                                <stop offset="100%" stopColor="#d946ef" />
                              </linearGradient>
                            </defs>
                            <motion.path 
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{ pathLength: 1, opacity: 1 }}
                              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                              stroke="url(#checkmark-gradient)"
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              d="M5 13l4 4L19 7" 
                            />
                          </svg>
                       </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-[40px] font-bold text-gray-900 tracking-tight leading-tight">
                      We sent it your way!
                    </h2>
                    <p className="text-[17px] text-gray-500 font-light leading-relaxed max-w-[340px] mx-auto">
                      Check your inbox for your personalized M3 assessment & exclusive offer
                    </p>
                  </div>

                  <div className="pt-8 w-full">
                    <Link 
                      href="/" 
                      className="block w-full py-5 bg-[#7c3aed] text-white rounded-xl font-bold text-[18px] hover:bg-[#6d28d9] transition-all shadow-[0_20px_50px_rgba(124,58,237,0.3)] hover:shadow-[0_10px_30px_rgba(124,58,237,0.4)]"
                    >
                      Close
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
