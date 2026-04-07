"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasConsent = localStorage.getItem("muscalar_cookie_consent");
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("muscalar_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("muscalar_cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-12 md:right-12 z-[60]"
        >
          <div className="bg-white/90 backdrop-blur-2xl border border-neutral-100 rounded-[2rem] p-5 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 max-w-7xl mx-auto">
            <div className="flex-1 space-y-4">
              <h2 className="text-[24px] md:text-[28px] font-semibold text-black leading-tight">
                This website uses cookies
              </h2>
              <div className="space-y-4 max-w-4xl">
                <p className="text-[14px] md:text-[16px] text-neutral-600 leading-relaxed font-normal">
                  We use cookies to personalise content and offers, to support our social
                  media features, and to analyse how visitors interact with our site.
                </p>
                <p className="text-[14px] md:text-[16px] text-neutral-600 leading-relaxed font-normal">
                  We also share data about your browsing experience with our advertising and
                  analytics partners, who may combine it with information you've provided to
                  them or that they've collected from your use of their services.
                </p>
              </div>
              <button 
                className="flex items-center gap-2 text-[#7C3AED] font-semibold hover:underline group"
                onClick={() => {}}
              >
                <span>Show Details</span>
                <ChevronRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
              <button
                onClick={handleAccept}
                className="w-full lg:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-[#7C3AED] text-white font-semibold rounded-2xl hover:bg-[#6D28D9] transition-all shadow-md shadow-[#7C3AED]/20 active:scale-95 text-center min-w-[180px] sm:min-w-[200px]"
              >
                Accept cookies
              </button>
              <button
                onClick={handleDecline}
                className="w-full lg:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-white border border-neutral-200 text-neutral-700 font-semibold rounded-2xl hover:bg-neutral-50 transition-all active:scale-95 text-center min-w-[180px] sm:min-w-[200px]"
              >
                Decline cookies
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
