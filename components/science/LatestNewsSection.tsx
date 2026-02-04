import Link from "next/link";

interface NewsItem {
  category: string;
  date: string;
  title: string;
  imageSrc: string;
  slug: string;
}

const newsItems: NewsItem[] = [
  {
    category: "NUTRITION",
    date: "DEC 17, 2025",
    title: "Healthy Holiday Eating Made Easy: Feel Good, Stay Balanced",
    imageSrc: "/images/science/blog-1.jpg", // Placeholder
    slug: "healthy-holiday-eating",
  },
  {
    category: "NEWS",
    date: "DEC 12, 2025",
    title: "2025's Top Research on Urolithin A and Longevity",
    imageSrc: "/images/science/blog-2.jpg", // Placeholder
    slug: "2025-top-research",
  },
  {
    category: "SCIENCE",
    date: "NOV 28, 2025",
    title: "The Role of Mitochondria in Athletic Performance",
    imageSrc: "/images/science/blog-3.jpg", // Placeholder
    slug: "mitochondria-athletic-performance",
  },
];

export function LatestNewsSection() {
  return (
    <section className="w-full bg-white py-12 md:py-24 border-t border-neutral-100">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        {/* Heading */}
        <h2 className="text-[2rem] md:text-[2.5rem] leading-[1.1] font-normal text-black mb-8 md:mb-12">
          Latest news
        </h2>

        {/* Slider / Grid Container */}
        {/* Mobile: Horizontal Scroll. Desktop: Grid */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 md:gap-8 pb-8 md:pb-12 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide snap-x snap-mandatory">
          {newsItems.map((item, index) => (
            <Link 
              href={`/blog/${item.slug}`} 
              key={index} 
              className="min-w-[85vw] md:min-w-0 snap-center flex flex-col group cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] md:aspect-[3/2] mb-6 bg-neutral-100 rounded-lg overflow-hidden">
                 {/* Placeholder for real image */}
                 <div className="absolute inset-0 flex items-center justify-center text-neutral-300">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                 </div>
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <div className="text-[0.65rem] md:text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">
                  {item.category} <span className="mx-1">·</span> {item.date}
                </div>
                <h3 className="text-lg md:text-xl font-medium text-black leading-tight group-hover:text-neutral-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center md:justify-start">
            <Link href="/blog" className="inline-block w-full md:w-auto text-center border border-black text-black bg-transparent hover:bg-black hover:text-white transition-colors uppercase py-3 px-12 text-xs font-bold tracking-widest rounded-md">
                Our Blog
            </Link>
        </div>

      </div>
    </section>
  );
}
