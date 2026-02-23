"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MemberStory } from "../../data/memberStoriesData";

interface ReviewCardProps {
  story: MemberStory;
  index: number;
}

export default function ReviewCard({ story, index }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative group rounded-[2rem] p-8 md:p-10 border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col justify-between overflow-hidden
        ${index % 3 === 0 ? "md:h-[500px]" : "md:h-[450px]"}
      `}
    >
      {/* Quote */}
      <div className="relative z-10">
        <span className="text-4xl md:text-5xl text-neutral-700 font-serif absolute -top-4 -left-2 opacity-50">
          "
        </span>
        <blockquote className="text-xl md:text-2xl text-white font-normal leading-tight tracking-tight mt-2">
          {story.quote}
        </blockquote>
      </div>

      {/* Member Info */}
      <div className="mt-12 flex items-center gap-4 relative z-10">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border border-white/20 grayscale group-hover:grayscale-0 transition-all duration-700">
          <Image
            src={story.image}
            alt={story.name}
            width={64}
            height={64}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h4 className="text-white font-semibold text-lg">{story.name}</h4>
          <p className="text-neutral-500 text-sm md:text-base font-light">
            {story.age ? `${story.age} • ` : ""}
            {story.role}
          </p>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-white/10 transition-colors duration-700" />
    </motion.div>
  );
}
