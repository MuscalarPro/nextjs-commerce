"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

const HEALTH_GOALS = [
  "Muscle strength & recovery",
  "Longevity & cellular health",
  "Energy & endurance",
  "Metabolic health",
  "Gut & microbiome health",
  "Brain & cognitive performance",
];

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasBeenDismissed = localStorage.getItem("muscalar_welcome_dismissed");
    if (!hasBeenDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000); // Show after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    localStorage.setItem("muscalar_welcome_dismissed", "true");
  };

  if (!mounted) return null;

  const toggleGoal = (goal: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send data to an API
    console.log("Newsletter signup:", { email, selectedGoals });
    handleDismiss();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/10 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
          >
            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 z-10 p-2 text-neutral-400 hover:text-black transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {/* Left Side: Image */}
            <div className="w-full md:w-[40%] p-6 md:pr-0 self-stretch">
              <div className="relative w-full h-full rounded-3xl overflow-hidden min-h-[350px] md:min-h-0">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/hf_20260407_051311_a8c99f11-3bb7-4c68-b11d-76f7f1924cae.png?v=1775540655"
                  alt="MuscalarPro Longevity"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full md:w-[60%] p-6 sm:p-8 md:p-12 md:pl-10 flex flex-col justify-center">
              <h2 className="text-[32px] md:text-[36px] font-semibold text-black mb-6 leading-[1.1] tracking-tight">
                Get 20% off your first Muscalarpro M3 order
              </h2>
              <p className="text-[15px] md:text-[17px] text-neutral-600 mb-10 leading-relaxed max-w-[480px]">
                Sign up to claim your welcome discount and receive exclusive longevity insights, 
                early access to offers, and science-backed updates — straight to your inbox.
              </p>

              <div className="mb-6">
                <h3 className="text-black font-semibold mb-3">Help us personalise your experience.</h3>
                <p className="body-text-sm text-neutral-500 mb-4">What are you looking to improve as you age?</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5 mb-10">
                  {HEALTH_GOALS.map((goal) => (
                    <label key={goal} className="flex items-center space-x-4 cursor-pointer group">
                      <div className="relative">
                        <input
                          type="checkbox"
                          className="peer sr-only"
                          checked={selectedGoals.includes(goal)}
                          onChange={() => toggleGoal(goal)}
                        />
                        <div className="w-7 h-7 border-[1.5px] border-neutral-200 rounded-full group-hover:border-[#7C3AED] peer-checked:bg-[#7C3AED] peer-checked:border-[#7C3AED] transition-all duration-200 shadow-sm" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity">
                          <div className="w-2.5 h-2.5 bg-white rounded-full shadow-inner" />
                        </div>
                      </div>
                      <span className="text-[17px] text-neutral-600 group-hover:text-black transition-colors font-normal">
                        {goal}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow">
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-6 py-4.5 bg-neutral-50/50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent outline-none transition-all placeholder:text-neutral-400 text-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="px-10 py-4 bg-gradient-to-r from-[#7C3AED] to-[#9333EA] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#7C3AED]/20 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap min-w-[200px]"
                >
                  Accept cookies
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
