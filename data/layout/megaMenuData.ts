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
    image: "/glp-1-medications.png",
    cta: "Explore Programs",
    path: "/search",
  },
  categories: [
    {
      title: "PRODUCT",
      links: [
        {
          title: "How it Works",
          description: "Get the most from your first premium health membership",
          path: "/how-it-works",
          icon: "/guide-testing.png",
        },
        {
          title: "What We Test",
          description:
            "100+ biomarkers included in your annual superpower test panel",
          path: "/what-we-test",
          icon: "/guide-prescriptions.png",
        },
        {
          title: "Superpower for Organizations",
          description:
            "All the benefits of Superpower tailored to your organization",
          path: "/organizations",
          icon: "/guide-concierge.png",
        },
      ],
    },
    {
      title: "LEARN MORE",
      links: [
        { title: "Reviews", path: "/reviews" },
        { title: "Gift Health", path: "/gift", badge: "[limited time]" },
        { title: "FAQs", path: "/faqs" },
        { title: "Our Why", path: "/our-why" },
        { title: "Blog", path: "/blog" },
      ],
    },
    {
      title: "OTHER",
      links: [
        { title: "Privacy Policy", path: "/policies/privacy-policy" },
        {
          title: "Informed Medical Consent",
          path: "/policies/informed-medical-consent",
        },
        { title: "Terms & Conditions", path: "/policies/terms-of-service" },
      ],
    },
  ],
};
