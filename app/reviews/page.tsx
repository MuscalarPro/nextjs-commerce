import { Metadata } from "next";
import ReviewsPage from "../../components/reviews/ReviewsPage";

export const metadata: Metadata = {
  title: "Member Stories | Superpower",
  description:
    "Hear from members of the Superpower community about their transformations and health journeys.",
};

export default function Page() {
  return <ReviewsPage />;
}
