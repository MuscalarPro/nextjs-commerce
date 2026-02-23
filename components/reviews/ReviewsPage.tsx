import CTASection from "../layout/cta-section";
import Footer from "../layout/footer";
import ReviewsGrid from "./ReviewsGrid";
import ReviewsHero from "./ReviewsHero";

export default function ReviewsPage() {
  return (
    <main className="bg-black min-h-screen">
      <ReviewsHero />
      <ReviewsGrid />

      {/* Black background CTA section to match the theme */}
      <div className="bg-black">
        <CTASection />
      </div>

      <Footer />
    </main>
  );
}
