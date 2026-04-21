import CTASection from "components/layout/cta-section";
import { getBlogArticles, getArticles } from "lib/shopify";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogListing } from "../../../components/blog/BlogListing";

export async function generateMetadata(props: {
  params: Promise<{ blogHandle: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const articles = await getBlogArticles({ handle: params.blogHandle, first: 1 });

  if (!articles || articles.length === 0) return notFound();

  const blogTitle = articles[0]?.blog.title || "Blog";
  const siteName = "MuscalarPro";

  return {
    title: `${blogTitle} | The Read | ${siteName}`,
    description: `Explore the latest insights and research in ${blogTitle} on The Read.`,
    openGraph: {
      title: `${blogTitle} | The Read | ${siteName}`,
      description: `Explore the latest insights and research in ${blogTitle} on The Read.`,
      type: "website",
      url: `/blogs/${params.blogHandle}`,
    },
  };
}

export default async function BlogCategoryPage(props: {
  params: Promise<{ blogHandle: string }>;
}) {
  const params = await props.params;
  const articles = await getBlogArticles({ 
    handle: params.blogHandle, 
    first: 100 
  });

  if (!articles || articles.length === 0) {
    // Fallback: Check if the handle is actually an article handle
    const possibleArticles = await getArticles({ query: `handle:${params.blogHandle}`, first: 1 });
    if (possibleArticles && possibleArticles.length > 0) {
      const article = possibleArticles[0];
      if (article) {
        // Redirect to the canonical article URL
        const redirectUrl = `/blogs/${article.blog.handle}/${article.handle}`;
        const { redirect } = await import("next/navigation");
        redirect(redirectUrl);
      }
    }
    return notFound();
  }

  return (
    <main>
      <BlogListing articles={articles} />
      {/* <CTASection /> */}
    </main>
  );
}
