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

  const recentPosts = [
    ...filteredArticles.slice(0, 2),
    ...filteredArticles.slice(6),
  ];
  const essentialReadings = filteredArticles.slice(2, 6);

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
              Exploring the convergence of longevity science, mitochondrial
              health, and the future of human performance.
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Recent Posts */}
          <div
            className={
              essentialReadings.length > 0 ? "lg:col-span-8" : "lg:col-span-12"
            }
          >
            <h2 className="text-2xl md:text-[28px] font-normal text-black mb-6">
              Recent posts
            </h2>
            <div className="border-t-[1.5px] border-dotted border-gray-300 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
                {recentPosts.map((article) => (
                  <Link
                    key={article.id}
                    href={`/blogs/${article.blog.handle}/${article.handle}`}
                    className="group flex flex-col h-full cursor-pointer"
                  >
                    <div className="w-full aspect-[3/2] rounded-md overflow-hidden bg-[#F5F5F7] mb-5 relative">
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

                    <div className="flex flex-col flex-1">
                      <p className="text-gray-500 text-[11px] md:text-xs mb-3 font-semibold tracking-wider uppercase">
                        <span className="text-black">{article.blog.title}</span>{" "}
                        <span className="mx-1">·</span>{" "}
                        {new Date(article.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                          },
                        )}
                      </p>
                      <h3 className="text-xl md:text-[22px] font-normal text-black leading-snug group-hover:text-neutral-700 transition-colors">
                        {article.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Essential Readings */}
          {essentialReadings.length > 0 && (
            <div className="lg:col-span-4">
              <h2 className="text-2xl md:text-[28px] font-normal text-black mb-6">
                Essential Readings
              </h2>
              <div className="border-t-[1.5px] border-dotted border-gray-300 pt-8 flex flex-col gap-8">
                {essentialReadings.map((article, index) => (
                  <Link
                    key={article.id}
                    href={`/blogs/${article.blog.handle}/${article.handle}`}
                    className="group flex gap-4 cursor-pointer"
                  >
                    <span className="w-4 flex-shrink-0 text-xs font-semibold text-gray-800 pt-[1px]">
                      {index + 1}
                    </span>
                    <div className="flex flex-col">
                      <p className="text-gray-500 text-[10px] md:text-[11px] mb-2 font-semibold tracking-wider uppercase">
                        <span className="text-black">{article.blog.title}</span>{" "}
                        <span className="mx-1">·</span>{" "}
                        {new Date(article.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                          },
                        )}
                      </p>
                      <h3 className="text-base md:text-[17px] font-medium text-black leading-snug group-hover:text-neutral-700 transition-colors">
                        {article.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
