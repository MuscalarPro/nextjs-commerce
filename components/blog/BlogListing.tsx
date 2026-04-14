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

  const featuredArticle = filteredArticles[0];
  const remainingArticles = filteredArticles.slice(1);

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* Immersive Hero Section */}
      <section className="relative overflow-hidden bg-white pt-32 pb-16 md:pt-48 md:pb-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase">
              The MuscalarPro Journal
            </span>
            <h1 className="text-5xl md:text-7xl font-normal tracking-tight text-black mb-6">
              The Read
            </h1>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-500 font-light leading-relaxed">
              Exploring the convergence of longevity science, mitochondrial health, and the future of human performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Category Navigation */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 overflow-x-auto no-scrollbar py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 md:gap-12 h-14 whitespace-nowrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-[13px] font-semibold tracking-wider uppercase transition-all duration-300 ${
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

      <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
        {/* Featured Article Section */}
        {featuredArticle && activeCategory === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-24"
          >
            <Link
              href={`/blog/${featuredArticle.blog.handle}/${featuredArticle.handle}`}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center"
            >
              <div className="lg:col-span-12">
                <div className="relative aspect-[16/8] overflow-hidden rounded-[2.5rem] bg-gray-100">
                  {featuredArticle.image && (
                    <Image
                      src={featuredArticle.image.url}
                      alt={featuredArticle.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      priority
                    />
                  )}
                  {/* Subtle overlay to help text contrast if needed, though we use bottom text */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-8 md:p-12">
                     <div className="space-y-3">
                        <p className="text-white/80 text-sm font-medium uppercase">
                          {featuredArticle.blog.title} — {new Date(featuredArticle.publishedAt).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                        <h2 className="text-3xl md:text-5xl lg:text-5xl font-normal leading-tight text-white max-w-4xl">
                          {featuredArticle.title}
                        </h2>
                     </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Blog Grid - Card styling from LatestNewsSection */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16">
          {(activeCategory === "All" ? remainingArticles : filteredArticles).map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.blog.handle}/${article.handle}`}
              className="group flex flex-col h-full cursor-pointer"
            >
              {/* Image Container - Square Aspect Ratio matching LatestNewsSection */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden bg-[#F5F5F7] mb-6 relative">
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

              {/* Text Content - Typography matching LatestNewsSection */}
              <div className="flex flex-col flex-1">
                <p className="text-gray-500 text-xs md:text-sm mb-2 font-medium uppercase">
                  {article.blog.title}{" "}
                  {new Date(article.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <h3 className="text-xl md:text-2xl font-normal text-black     group-hover:text-neutral-700 transition-colors">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
