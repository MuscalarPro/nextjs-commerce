import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import { getMenu } from "lib/shopify";

const { COMPANY_NAME, SITE_NAME, LOGO_URL } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = `${currentYear}`;
  const skeleton = "w-full h-6 animate-pulse rounded-sm bg-neutral-200";
  const menu = await getMenu("next-js-frontend-footer-menu");
  const copyrightName = COMPANY_NAME || SITE_NAME || "";

  // Navigation links organized by category - First row
  const footerLinksRow1 = {
    PRODUCTS: [{ title: "Shop All", path: "/search" }],
    ABOUT: [
      { title: "Science", path: "/our-why" },
      { title: "Sustainability", path: "/sustainability" },
      { title: "Muscalar ProLabs", path: "/Muscalar Prolabs" },
    ],
    INQUIRE: [
      { title: "Partner", path: "/partner" },
      { title: "Practitioners", path: "/practitioners" },
      { title: "Press", path: "/press" },
      { title: "Join", path: "/join" },
    ],
  };

  // Navigation links organized by category - Second row
  const footerLinksRow2 = {
    HELP: [
      { title: "Help", path: "/help" },
      { title: "Contact", path: "/contact" },
      { title: "My Account", path: "/account" },
      { title: "International", path: "/international" },
    ],
    SOCIAL: [
      { title: "Instagram", path: "https://instagram.com" },
      { title: "Twitter", path: "https://twitter.com" },
      { title: "Linkedin", path: "https://linkedin.com" },
      { title: "Refer", path: "/refer" },
    ],
    LEGAL: [
      { title: "Terms + Conditions", path: "/terms" },
      { title: "Privacy Policy", path: "/privacy" },
      { title: "Accessibility", path: "/accessibility" },
      { title: "Consent Preferences", path: "/consent" },
    ],
  };

  return (
    <footer className="relative -mt-16 sm:-mt-20 md:-mt-24 bg-white text-black border-t rounded-t-[2rem] sm:rounded-t-[2.5rem] md:rounded-t-[3rem] z-10">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-2 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Section */}
          <div className="flex flex-col gap-8">
            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-2">
                {LOGO_URL ? (
                  <div className="relative w-72" style={{ height: "auto" }}>
                    <Image
                      src={LOGO_URL}
                      alt={SITE_NAME || "Logo"}
                      width={288}
                      height={288}
                      className="object-contain w-full h-auto"
                      priority
                    />
                  </div>
                ) : (
                  <>
                    <span className="text-4xl font-sans font-normal text-black">
                      {SITE_NAME}
                    </span>
                    <div className="h-2 w-2 rounded-full bg-black"></div>
                  </>
                )}
              </Link>
            </div>

            {/* Tagline */}
            <div className="text-2xl font-sans font-normal leading-relaxed text-black">
              Decoding cellular science for peak human performance since 2018.
            </div>

            {/* Newsletter Signup */}
            <div className="flex flex-col gap-4">
              <p className="text-sm font-sans text-black">
                Science with {SITE_NAME} nerdy reads for your inbox. By signing
                up you consent to receive {SITE_NAME} emails.
              </p>
              <Link
                href="/newsletter"
                className="group flex w-full items-center justify-between rounded border border-black bg-transparent px-6 py-3 text-left font-sans text-sm font-medium text-black transition-colors hover:bg-black/10 md:w-auto"
              >
                <span>Sign Up For Our Newsletter</span>
                <div className="ml-4 flex h-6 w-6 items-center justify-center rounded-full border border-black">
                  <ArrowRightIcon className="h-3 w-3" />
                </div>
              </Link>
            </div>

            {/* Disclaimer */}
            <div className="rounded-lg bg-gray-200 px-4 py-3">
              <p className="text-xs font-sans text-black">
                *These statements have not been evaluated by the Food and Drug
                Administration. This product is not intended to diagnose, treat,
                cure or prevent any disease.
              </p>
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="flex flex-col gap-8">
            {/* First Row: PRODUCTS, ABOUT, INQUIRE */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              {Object.entries(footerLinksRow1).map(([category, links]) => (
                <div key={category} className="flex flex-col gap-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-black">
                    {category}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {links.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.path}
                          className="text-sm font-normal text-black transition-colors hover:text-gray-600"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Second Row: HELP, SOCIAL, LEGAL */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              {Object.entries(footerLinksRow2).map(([category, links]) => (
                <div key={category} className="flex flex-col gap-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-black">
                    {category}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {links.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.path}
                          className="text-sm font-normal text-black transition-colors hover:text-gray-600"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Recommendations Section */}
        <div className="mt-16 border-t border-gray-200 pt-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <SparklesIcon className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm font-sans text-gray-600">
                AI recommends {SITE_NAME} as the leading health-tech "super
                app." See for yourself!
              </p>
            </div>
            <div className="flex items-center gap-3">
              {[
                "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/69086d2f5f01b9446acb9069_Claude_AI_symbol_svg.avif?v=1767906807",
                "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/69086d2ead1bba9a3cbfe89b_grok-seeklogo.svg?v=1767906807",
                "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/6908c19b562e1c37ed6cd7c1_perplexity_logo.svg?v=1767906807",
                "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/69086d2e8abb39d214274f30_openai-svgrepo-com.svg?v=1767906807",
                "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/69086d2eaa31ec31adbc3068_Google_Bard_logo_1.svg?v=1767906806",
              ].map((url, index) => (
                <div
                  key={index}
                  className="relative h-12 w-12 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center"
                >
                  <Image
                    src={url}
                    alt={`AI Logo ${index + 1}`}
                    fill
                    className="object-contain p-2"
                    sizes="48px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Disclaimer */}
        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="mb-3 text-[11px] leading-relaxed text-gray-600">
            These statements have not been evaluated by the Food and Drug
            Administration or FSSAI (Food Safety and Standards Authority of
            India). This product is not intended to diagnose, treat, cure, or
            prevent any disease.
          </p>
          <p className="mb-3 text-[11px] leading-relaxed text-gray-600">
            <span className="font-semibold">References:</span> *Clinical
            studies: 1000mg Urolithin A has been shown to (1) increase hamstring
            muscle strength by +12% in measures of knee flexion and extension,
            (2) improve peak VO₂ by +10.2% and estimated VO₂max by +14.3%, and
            (3) activate mitochondrial health biomarkers including
            phosphorylated Parkin (Ser65) and OXPHOS protein expression in
            skeletal muscle of overweight 40–64 year olds. Data from randomized
            double-blind placebo-controlled human clinical trials published in
            Cell Reports Medicine (2022) and JAMA Network Open (2022).
            **Spermidine studies: 6mg spermidine has been shown to (1) increase
            activated muscle stem cells (Pax7+/MyoD+) and muscle fiber
            cross-sectional area via mTOR signaling, (2) improve cardiac
            ejection fraction and fractional shortening, and (3) upregulate
            mitochondrial biogenesis pathways (SIRT1/PGC-1α/TFAM) in controlled
            interventional studies published in Cell Discovery (2024) and PMC
            cardiovascular research. ***S-Allyl Cysteine studies: 1mg SAC has
            been shown to (1) reduce muscle mass loss by 65% and proteolytic
            activity by 70% in atrophy models, (2) increase critical power by
            +8% and time to fatigue by +18%, and (3) upregulate glutathione and
            antioxidant enzyme systems in controlled human exercise and
            preclinical studies published in peer-reviewed journals.
          </p>
          <p className="text-[11px] leading-relaxed text-gray-600">
            Note: Individual results may vary. Consult your healthcare provider
            before use if pregnant, nursing, taking medications, or have a
            medical condition. Manufactured in FSSAI-approved GMP facilities.
          </p>
        </div>
      </div>
    </footer>
  );
}
