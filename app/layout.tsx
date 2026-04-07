import { CartProvider } from "components/cart/cart-context";
import ElevenLabsAgent from "components/elevenlabs/ElevenLabsAgent";
import Footer from "components/layout/footer";
import { Navbar } from "components/layout/navbar";
import WelcomePopup from "components/layout/WelcomePopup";
import CookieBanner from "components/layout/CookieBanner";
import { getCart } from "lib/shopify";
import { baseUrl } from "lib/utils";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import Script from "next/script";
import "./globals.css";
import CTASection from "components/layout/cta-section";

const { SITE_NAME } = process.env;
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart();

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PN9JJVQL');`}
        </Script>
      </head>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 font-sans">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PN9JJVQL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <CartProvider cartPromise={cart}>
          <Navbar />
          <main>
            {children}
            <Toaster closeButton />
            {/* <WelcomeToast /> */}
          </main>
          <CTASection/>
          <Footer />
          <WelcomePopup />
          <CookieBanner />
          <ElevenLabsAgent />
        </CartProvider>
      </body>
    </html>
  );
}
