export interface MenuItem {
  title: string;
  path: string;
  description?: string;
  icon?: string;
  badge?: string;
}

export interface MenuCategory {
  title: string;
  links: MenuItem[];
}

export interface MegaMenuData {
  featured: {
    title: string;
    description: string;
    image: string;
    cta: string;
    path: string;
  };
  categories: MenuCategory[];
}

export const menuData: MegaMenuData = {
  featured: {
    title: "Unlock Your Biological Age Today",
    description: "Learn more about your body",
    image: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Banner.webp?v=1773928577",
    cta: "Explore Programs",
    path: "/search",
  },
  categories: [
    {
      title: "Science",
      links: [
        {
          title: "Science of [M3]",
          path: "/science",
        },
        {
          title: "Benefits",
          path: "/science/benefits",
        },
        {
          title: "How it works",
          path: "/science/how-it-works",
        },
      ],
    },
    {
      title: "Learn more",
      links: [
        { title: "Reviews", path: "/reviews" },
        { title: "Gift Health", path: "/gift" },
        { title: "FAQs", path: "/faqs" },
        { title: "Our Why", path: "/our-why" },
        { title: "Blogs", path: "/blog" },
      ],
    },
    {
      title: "Other",
      links: [
        { title: "Privacy Policy", path: "/policies/privacy-policy" },
        {
          title: "Informed Medical Consent",
          path: "/policies/informed-medical-consent",
        },
        { title: "Terms & Conditions", path: "/policies/term-services" },
      ],
    },
  ],
};
