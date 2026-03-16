import { CartProvider } from "components/cart/cart-context";
import ElevenLabsAgent from "components/elevenlabs/ElevenLabsAgent";
import Footer from "components/layout/footer";
import { Navbar } from "components/layout/navbar";
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
      <body className="bg-neutral-50 text-black selection:bg-teal-300 font-sans">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z7S45M341R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Z7S45M341R');
          `}
        </Script>
        <CartProvider cartPromise={cart}>
          <Navbar />
          <main>
            {children}
            <Toaster closeButton />
            {/* <WelcomeToast /> */}
          </main>
          <CTASection/>
          <Footer />
          <ElevenLabsAgent />
        </CartProvider>
      </body>
    </html>
  );
}
