import CTASection from "components/layout/cta-section";
import Prose from "components/prose";
import { getArticle, getArticles } from "lib/shopify";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
      url: `/blog/${params.blogHandle}/${params.articleHandle}`,
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

  return (
    <main className="bg-white min-h-screen">
      {/* Article Hero */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="space-y-3"></div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight text-black">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {article.image && (
        <section className="container mx-auto px-4 max-w-6xl mb-16 md:mb-24">
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-gray-100 shadow-xl">
            <Image
              src={article.image.url}
              alt={article.image.altText || article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-3xl mx-auto">
          <Prose className="article-content" html={article.contentHtml} />
        </div>
      </section>

      {/* Related Articles Section */}
      {otherArticles.length > 0 && (
        <section className="bg-[#F9F9FB] py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-normal tracking-tight">
                  Read next
                </h2>
                <p className="text-gray-500 mt-2">
                  More insights from The Read
                </p>
              </div>
              <Link
                href="/blog"
                className="text-sm font-bold uppercase tracking-wider border-b border-black pb-1 hover:gap-4 transition-all"
              >
                View all articles →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.blog.handle}/${article.handle}`}
                  className="group flex flex-col h-full"
                >
                  <div className="w-full aspect-square rounded-2xl overflow-hidden bg-white mb-6 relative">
                    {article.image && (
                      <Image
                        src={article.image.url}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                      {article.blog.title}
                    </p>
                    <h3 className="text-xl font-normal text-black group-hover:text-neutral-700 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </main>
  );
}
