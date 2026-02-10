"use client";

import { motion } from "framer-motion";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface ReviewCard {
  id: string;
  type: "video" | "image" | "ui";
  src: string;
  poster?: string;
  username?: string;
  handle?: string;
  followers?: string;
  caption?: string;
  isVerified?: boolean;
  content?: React.ReactNode; // For custom UI cards
}

const reviews: ReviewCard[] = [
  {
    id: "1",
    type: "video",
    src: "https://images.unsplash.com/photo-1556157382-97eda2d622ca?q=80&w=720&auto=format&fit=crop", 
    username: "My Tech CEO",
    handle: "@mytechceo",
    followers: "254k followers",
    caption: "we don't have a revenue problem",
    isVerified: true,
  },
  {
    id: "2",
    type: "video",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=720&auto=format&fit=crop",
    username: "Emmy Tech",
    handle: "@emmyxtech",
    followers: "368k followers",
    caption: "BUT IT'S ONLY 399",
    isVerified: true,
  },
  {
    id: "3",
    type: "video",
    src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=720&auto=format&fit=crop",
    username: "Stefarm Stead",
    handle: "@stefarmstead",
    followers: "90.2k, Alo wellness club trainer",
    caption: "Alright yall, I got to keep it real with you.",
    isVerified: true,
  },
  {
    id: "4",
    type: "video",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=720&auto=format&fit=crop",
    username: "Avni Barman",
    handle: "@avnibarman_",
    followers: "228k followers",
    caption: "actually",
    isVerified: true,
  },
  {
    id: "5",
    type: "ui",
    src: "",
    content: (
      <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-600 p-6 flex flex-col items-center justify-center text-white relative">
        <div className="absolute top-8 left-6 flex items-center gap-3">
             <div className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center">
                 <img src="https://ui-avatars.com/api/?name=Q+J&background=random" className="w-full h-full rounded-full" alt="Quentin" />
             </div>
             <div className="flex flex-col">
                 <span className="font-bold text-sm">Quentin Johnston</span>
                 <span className="text-xs opacity-80">NFL player</span>
             </div>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 w-full max-w-[240px] border border-white/20">
          <h4 className="opacity-70 uppercase text-xs tracking-wider mb-4">superpower To-do List</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-[10px]">✓</div>
              <span className="text-sm">Light Cardio</span>
            </div>
            <div className="flex items-center gap-3 opacity-50">
              <div className="w-5 h-5 rounded-full border border-white/50" />
              <span className="text-sm">Meditation</span>
            </div>
            <div className="flex items-center gap-3 opacity-50">
              <div className="w-5 h-5 rounded-full border border-white/50" />
              <span className="text-sm">Increase Iron Intake</span>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 text-xs font-bold opacity-80">superpower</div>
        </div>
      </div>
    ),
  },
];

export function SuperpowerReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Approx card width
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        // Assuming card width + gap approx 300px
        const index = Math.round(scrollLeft / 300);
        setActiveIndex(index);
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className=" text-[2rem] leading-[1.08] tracking-[-0.02em] text-black md:text-[3rem]"
        >
          MuscalarPro™ is changing thousands of lives
        </motion.h2>
        

      </div>

      <div className="relative">
        <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto pb-12 px-4 md:px-8 hide-scrollbar snap-x snap-mandatory"
            style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                scrollPaddingLeft: '2rem'
            }}
        >
            {reviews.map((review, idx) => (
            <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="snap-center shrink-0 w-[280px] md:w-[320px] lg:w-[360px] aspect-[12/16] rounded-3xl overflow-hidden relative group bg-gray-100"
            >
                {review.type === 'ui' ? (
                    review.content
                ) : (
                    <>
                        {/* Background Media */}
                        <div className="absolute inset-0 bg-gray-300">
                             <img 
                                src={review.src}
                                className="w-full h-full object-cover"
                                alt={review.caption || "Review video"}
                             />
                        </div>
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Top User Info */}
                        <div className="absolute top-5 left-5 right-5 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur overflow-hidden border border-white/30">
                                <img src={`https://ui-avatars.com/api/?name=${review.username}&background=random`} className="w-full h-full object-cover" alt={review.username} />
                            </div>
                            <div className="flex flex-col text-white shadow-sm">
                                <div className="flex items-center gap-1">
                                    <span className="font-semibold text-sm drop-shadow-md">{review.handle}</span>
                                    {review.isVerified && <CheckBadgeIcon className="w-3.5 h-3.5 text-blue-400" />}
                                </div>
                                {review.followers && (
                                    <span className="text-[10px] md:text-xs opacity-90 drop-shadow-md">{review.followers}</span>
                                )}
                            </div>
                        </div>

                        {/* Bottom Caption */}
                        <div className="absolute bottom-8 left-5 right-5">
                            <p className="text-white text-lg md:text-xl font-medium leading-snug drop-shadow-lg">
                                "{review.caption}"
                            </p>
                        </div>
                    </>
                )}
            </motion.div>
            ))}
            
            {/* CTA Card for Mobile end of scroll */}
            <div className="snap-center shrink-0 w-[280px] md:hidden aspect-[9/16] rounded-3xl bg-gray-50 border border-gray-200 flex flex-col items-center justify-center p-8 text-center">
                 <h3 className="text-xl font-medium mb-4">See what others are saying</h3>
                 <button className="px-6 py-3 rounded-full bg-black text-white text-sm font-medium">
                     View all reviews
                 </button>
            </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-4 mt-0">
        <button 
          onClick={() => scroll('left')}
          className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
        </button>

        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-3">
            {reviews.map((_, idx) => (
                <div 
                    key={idx} 
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? "bg-black scale-125" : "bg-gray-300"}`} 
                />
            ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRightIcon className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </section>
  );
}
