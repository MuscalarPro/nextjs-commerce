"use client";

import { latestNewsData } from "data/homePageData";
import Image from "next/image";
import Link from "next/link";

export function LatestNewsSection() {
  const { heading, ctaLabel, ctaHref, posts } = latestNewsData;

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6 lg:px-8">
        {/* Header: heading left, CTA right */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl lg:text-4xl">
            {heading}
          </h2>
          <Link
            href={ctaHref}
            className="inline-flex shrink-0 items-center justify-center rounded-md border-2 border-neutral-900 bg-white px-5 py-2.5 text-sm font-medium uppercase tracking-wide text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
          >
            {ctaLabel}
          </Link>
        </div>

        {/* Horizontal scrollable card list */}
        <div className="-mx-4 overflow-x-auto px-4 pb-2 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex min-w-0 gap-6 snap-x snap-mandatory">
            {posts.map((post) => (
              <li
                key={post.id}
                className="flex w-[280px] shrink-0 snap-start md:w-[320px]"
              >
                <Link
                  href={post.href}
                  className="group flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      className="object-cover transition-transform group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 280px, 320px"
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-4 md:p-5">
                    <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                      {post.category} – {post.date}
                    </p>
                    <h3 className="text-base font-bold leading-snug text-neutral-900 md:text-lg line-clamp-3 group-hover:text-neutral-700">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
