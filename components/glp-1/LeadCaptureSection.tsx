"use client";

import Image from "next/image";
import { useState } from "react";

export function LeadCaptureSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle lead capture logic here
    console.log("Email captured:", email);
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="relative overflow-hidden rounded-[48px] bg-black p-8 text-white md:p-20">
          {/* Motion Blur Background */}
          <div className="absolute inset-0 z-0 bg-[#345c6b]">
            <Image 
              src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Group_154.png?v=1777416004" 
              alt="Motion Blur" 
              fill 
              className="object-cover object-right"
            />
          </div>

          <div className="relative z-10 max-w-xl">
            <h2 className="mb-6 text-[42px] font-normal leading-[1.1] tracking-tight md:text-[54px]">
              Unlock your free <br /> GLP-1 Muscle <br /> Protection Guide
            </h2>
            <p className="mb-12 text-[18px] leading-relaxed text-white/70">
              Written by longevity physicians to protect your musclespan on any GLP-1. 
              Everything you need, in plain English.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-2xl bg-white px-6 py-4 text-black text-[16px] focus:outline-none focus:ring-2 focus:ring-[#d2f392]"
              />
              <button 
                type="submit"
                className="w-full rounded-full bg-black py-4 text-[16px] font-bold text-white transition-all hover:bg-neutral-900 border border-white/10 active:scale-95"
              >
                Get the guide
              </button>
            </form>

            <p className="mt-6 text-[10px] text-white/30 leading-relaxed">
              By creating an account using email, I agree to the Terms & Conditions, 
              and acknowledge the Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
