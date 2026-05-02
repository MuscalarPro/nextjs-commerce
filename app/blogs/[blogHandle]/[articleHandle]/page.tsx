import CTASection from "components/layout/cta-section";
import Prose from "components/prose";
import { getArticle, getArticles } from "lib/shopify";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail, Link as LinkIcon, ArrowRight } from "lucide-react";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
      clipRule="evenodd"
    />
  </svg>
);

export async function generateMetadata(props: {
  params: Promise<{ blogHandle: string; articleHandle: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const article = await getArticle(params.blogHandle, params.articleHandle);

  if (!article) return notFound();

  const { url, width, height, altText: alt } = article.image || {};
  const siteName = "MuscalarPro";

  return {
    title: `${article.seo?.title || article.title} | ${siteName}`,
    description: article.seo?.description || article.excerpt,
    openGraph: {
      title: `${article.seo?.title || article.title} | ${siteName}`,
      description: article.seo?.description || article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      url: `/blogs/${params.blogHandle}/${params.articleHandle}`,
      images: url
        ? [
            {
              url,
              width,
              height,
              alt: alt || article.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.seo?.title || article.title} | ${siteName}`,
      description: article.seo?.description || article.excerpt,
      images: url ? [url] : [],
    },
  };
}

export default async function ArticlePage(props: {
  params: Promise<{ blogHandle: string; articleHandle: string }>;
}) {
  const params = await props.params;
  const article = await getArticle(params.blogHandle, params.articleHandle);

  if (!article) return notFound();

  // Fetch related articles for the footer
  const relatedArticles = await getArticles({ first: 4 });
  const otherArticles = relatedArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  // Extract TOC and inject IDs into headings
  const toc: { level: number; title: string; id: string }[] = [];
  const modifiedContentHtml = article.contentHtml.replace(
    /<h([23])([^>]*)>(.*?)<\/h\1>/gi,
    (original, level, attributes, content) => {
      const textOnly = content.replace(/<[^>]+>/g, "").trim();
      if (!textOnly) return original;

      const id = textOnly
        .toLowerCase()
        .replace(/[\s\W-]+/g, "-")
        .replace(/^-+|-+$/g, "");

      const existingIdMatch = attributes.match(/id=(['"])(.*?)\1/);
      const finalId = existingIdMatch ? existingIdMatch[2] : id;

      toc.push({ level: parseInt(level), title: textOnly, id: finalId });

      if (!existingIdMatch) {
        return `<h${level}${attributes} id="${id}">${content}</h${level}>`;
      }
      return original;
    }
  );

  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Article Body */}
          <div className="lg:col-span-8">
            <div className="border-t-[1.5px] border-dotted border-gray-300 pt-8 mb-8">
              <p className="text-gray-500 text-[11px] md:text-xs font-semibold tracking-wider uppercase mb-5">
                <span className="text-black">{article.blog.title}</span>{" "}
                <span className="mx-2">·</span>{" "}
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}
              </p>
              
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-normal leading-snug tracking-tight text-black mb-6">
                {article.title}
              </h1>
              
              {article.excerpt && (
                <p className="text-lg md:text-xl text-gray-500 mb-8 leading-relaxed">
                  {article.excerpt}
                </p>
              )}

              <div className="flex items-center gap-4 mb-10">
                <button className="text-black hover:text-gray-600 transition-colors"><FacebookIcon className="w-[18px] h-[18px]" /></button>
                <button className="text-black hover:text-gray-600 transition-colors"><TwitterIcon className="w-[18px] h-[18px]" /></button>
                <button className="text-black hover:text-gray-600 transition-colors"><LinkedinIcon className="w-[18px] h-[18px]" /></button>
                <button className="text-black hover:text-gray-600 transition-colors"><Mail className="w-[18px] h-[18px]" /></button>
                <button className="text-black hover:text-gray-600 transition-colors"><LinkIcon className="w-[18px] h-[18px]" /></button>
              </div>

              {/* Featured Image */}
              {article.image && (
                <div className="relative aspect-[3/2] overflow-hidden rounded-md bg-[#F5F5F7] mb-12">
                  <Image
                    src={article.image.url}
                    alt={article.image.altText || article.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* Article Content */}
              <div className="max-w-none">
                <Prose 
                  className="prose-lg max-w-none prose-headings:font-normal prose-h2:text-3xl md:prose-h2:text-4xl prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-black prose-a:underline prose-li:text-gray-700 prose-headings:scroll-mt-32" 
                  html={modifiedContentHtml} 
                />
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            {/* Newsletter Signup */}
            <div className="bg-[#F6F5F2] p-8 rounded-sm mb-12">
              <h3 className="text-[17px] font-medium text-black mb-1">Knowledge is power</h3>
              <p className="text-gray-500 text-[15px] mb-8">Sign up to our newsletter</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-transparent border-b border-gray-400 py-2 pr-8 text-black placeholder:text-gray-500 focus:outline-none focus:border-black transition-colors rounded-none"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Table of Contents */}
            {toc.length > 0 && (
              <div>
                <h3 className="text-[17px] font-medium text-black mb-4">Table of contents</h3>
                <div className="border-t-[1.5px] border-dotted border-gray-300 pt-6">
                  <ul className="space-y-4 text-gray-500 text-[15px]">
                    {toc.map((item, index) => (
                      <li key={index} className={item.level === 3 ? "pl-4" : ""}>
                        <a 
                          href={`#${item.id}`} 
                          className="hover:text-black transition-colors line-clamp-2"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Related Articles Section */}
      {otherArticles.length > 0 && (
        <section className="bg-white py-24 border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-medium text-black mb-12 text-center">
              Essential Readings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
              {otherArticles.map((article) => (
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
                    <p className="text-gray-500 text-[11px] mb-2 font-semibold tracking-wider uppercase">
                      <span className="text-black">{article.blog.title}</span>{" "}
                      <span className="mx-1">·</span>{" "}
                      {new Date(article.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      })}
                    </p>
                    <h3 className="text-lg font-medium text-black leading-snug group-hover:text-neutral-700 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* <CTASection /> */}
    </main>
  );
}
