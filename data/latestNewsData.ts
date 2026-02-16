export interface NewsPost {
  id: string;
  image: string;
  category: string;
  date: string;
  title: string;
  href: string;
}

export const latestNewsData = {
  heading: "Latest news",
  ctaLabel: "OUR BLOG",
  ctaHref: "/blog",
  posts: [
    {
      id: "1",
      image:
        "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/b485b93561e51f71971486b8536327613ab6fe13-200x200.avif?v=1769862141",
      category: "NUTRITION",
      date: "JAN 21, 2026",
      title: "Is Breakfast an Important Meal for Longevity?",
      href: "/blog/breakfast-longevity",
    },
    {
      id: "2",
      image:
        "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/28dd101626c16670736402e02f8c508ac43c4a43-200x200.avif?v=1769862140",
      category: "NEWS - NUTRITION",
      date: "JAN 07, 2026",
      title: "The Science Behind Why Pet Owners Tend to Live Longer",
      href: "/blog/pet-owners-longevity",
    },
    {
      id: "3",
      image:
        "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/5b501065befb37c8272dacfd4f3c75893e919621-200x200.avif?v=1769862140",
      category: "NUTRITION",
      date: "DEC 17, 2025",
      title: "Healthy Holiday Eating Made Easy: Feel Good, Stay Balanced",
      href: "/blog/healthy-holiday-eating",
    },
    {
      id: "4",
      image:
        "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/8cfa59bd043663ba44edd0d2e456db1fa3d65432-200x200.avif?v=1769862140",
      category: "NEWS - NUTRITION - STUDIES",
      date: "DEC 12, 2025",
      title: "2025's Breakthrough Findings on Urolithin A",
      href: "/blog/urolithin-a-2025",
    },
    {
      id: "5",
      image:
        "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/5b501065befb37c8272dacfd4f3c75893e919621-200x200_1.avif?v=1769862140",
      category: "NUTRITION",
      date: "DEC 01, 2025",
      title: "Why Whole Foods Matter for Healthy Aging",
      href: "/blog/whole-foods-aging",
    },
  ],
} as const;
