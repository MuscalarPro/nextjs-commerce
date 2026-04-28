"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    quote: "M3 didn't just improve my gym sessions. It gave me the cellular foundation to outperform at 36 like I never could at 26.",
    author: "Onkar",
    role: "36 • Corporate Employee",
    image: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Testimonial_User_1.png?v=1774604153",
  },
  {
    quote: "As someone on GLP-1, I was terrified of losing muscle. M3 is the only reason I've maintained my strength while losing 30lbs.",
    author: "Sarah",
    role: "42 • Entrepreneur",
    image: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Testimonial_User_2.png?v=1774604153",
  },
  {
    quote: "The combination of the app and the M3 stack is a game changer. I actually understand what's happening to my body now.",
    author: "David",
    role: "51 • Physician",
    image: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Testimonial_User_3.png?v=1774604153",
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="mb-16 text-[36px] font-normal text-[#1a3b1a] md:text-[48px] tracking-tight">
          [M3] is changing <br/> thousands of lives
        </h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {testimonials.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative flex h-[380px] w-full flex-col justify-between rounded-[32px] bg-[#0D0D0D] p-10 text-left text-white md:max-w-[380px]"
            >
              <span className="text-[48px] font-serif text-white/20">&quot;</span>
              <p className="mb-8 text-[20px] font-medium leading-relaxed leading-[1.3] text-white">
                {item.quote}
              </p>
              <div className="mt-auto flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20">
                  <Image src={item.image} alt={item.author} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-[16px] font-bold">{item.author}</p>
                  <p className="text-[12px] text-white/50">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="mt-12 flex justify-center gap-2">
           {testimonials.map((_, i) => (
             <button 
               key={i} 
               onClick={() => setActive(i)}
               className={`h-2 rounded-full transition-all ${active === i ? 'w-8 bg-[#693979]' : 'w-2 bg-neutral-200'}`}
             />
           ))}
        </div>
      </div>
    </section>
  );
}
