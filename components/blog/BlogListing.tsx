"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Article } from "../../lib/shopify/types";

export function BlogListing({ articles }: { articles: Article[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Get unique blog titles for categories
  const categories = [
    "All",
    ...Array.from(new Set(articles.map((article) => article.blog.title))),
  ];

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((article) => article.blog.title === activeCategory);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-white pt-48 pb-12 px-4">
        <div className="container mx-auto text-center max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-semibold text-black mb-12 tracking-tight leading-[1.1]"
          >
            Insights into the future of health.
          </motion.h1>
        </div>
      </section>

      {/* Sticky Category Navigation */}
      <div className="sticky top-25 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 overflow-x-auto no-scrollbar py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-10 h-16 whitespace-nowrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-[0.95rem] font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "text-black border-b-2 border-black h-full px-1"
                    : "text-gray-400 hover:text-gray-600 px-1"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 py-24 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-16">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.blog.handle}/${article.handle}`}
              className="group flex flex-col h-full cursor-pointer"
            >
              {/* Image Container */}
              <div className="w-full aspect-square rounded-3xl overflow-hidden bg-[#F5F5F7] mb-8 relative">
                {article.image && (
                  <Image
                    src={article.image.url}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    draggable={false}
                  />
                )}
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-1">
                <p className="text-gray-500 text-xs md:text-sm mb-3 font-medium uppercase tracking-wider">
                  {article.blog.title} —{" "}
                  {new Date(article.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <h3 className="text-2xl md:text-3xl font-normal text-black tracking-tight leading-[1.2] group-hover:text-neutral-700 transition-colors">
                  {article.title}
                </h3>
                {article.excerpt && (
                  <p className="mt-4 text-gray-600 line-clamp-2 text-lg leading-relaxed">
                    {article.excerpt}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
