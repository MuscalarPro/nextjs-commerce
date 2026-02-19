import Footer from "components/layout/footer";
import { Metadata } from "next";
import FAQPage from "../../components/faq/FAQPage";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Superpower",
  description:
    "Find answers to commonly asked questions about Superpower membership, lab testing, and more.",
};

export default function Page() {
  return (
    <main>
      <FAQPage />
      
    </main>
  );
}
