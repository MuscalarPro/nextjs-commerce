"use client";

import { memberStories } from "../../data/home/memberStoriesData";
import ReviewCard from "./ReviewCard";

export default function ReviewsGrid() {
  return (
    <section className="bg-black py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* We'll use a simple approach to create a staggered feel:
              different heights on cards (handled in ReviewCard) 
              and maybe some responsive column offsets if needed.
          */}
          {memberStories.map((story, i) => (
            <div
              key={story.id}
              className={`flex flex-col
                ${i % 3 === 1 ? "lg:mt-12" : ""}
                ${i % 2 === 1 ? "md:mt-8 lg:mt-0" : ""}
              `}
            >
              <ReviewCard story={story} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
