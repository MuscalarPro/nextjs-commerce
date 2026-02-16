export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  items: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    title: "Membership",
    items: [
      {
        id: "mem-1",
        question: "What exactly does my membership include?",
        answer:
          "Your membership includes access to our comprehensive health platform, personalized health insights, and exclusive member pricing on lab tests and supplements.",
      },
      {
        id: "mem-2",
        question: "Which tests are included in my membership?",
        answer:
          "Membership includes our core health panel, with options to add specialized tests at member-only rates.",
      },
      {
        id: "mem-3",
        question: "How long is the membership commitment?",
        answer:
          "We offer both monthly and annual membership options to fit your needs.",
      },
    ],
  },
  {
    title: "Lab Testing",
    items: [
      {
        id: "lab-1",
        question: "What should I expect during a blood draw?",
        answer:
          "During a blood draw, a phlebotomist will use a small needle to collect blood samples. The process is quick, usually taking less than 15 minutes.",
      },
      {
        id: "lab-2",
        question: "How do I prepare for a blood draw?",
        answer:
          "You typically need to fast for 8-12 hours before your appointment. Drink plenty of water to stay hydrated.",
      },
      {
        id: "lab-3",
        question: "Where can I take my blood test?",
        answer:
          "We have a network of over 2,000 certified labs across the country.",
      },
    ],
  },
  {
    title: "Concierge",
    items: [
      {
        id: "con-1",
        question: "How do I contact my health concierge?",
        answer:
          "You can reach your health concierge directly through the Superpower app or via email for any questions regarding your health plan.",
      },
    ],
  },
  {
    title: "Payments",
    items: [
      {
        id: "pay-1",
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards, as well as HSA/FSA cards for eligible services.",
      },
    ],
  },
  {
    title: "Marketplace",
    items: [
      {
        id: "mar-1",
        question: "What is MuscularPro M3?",
        answer:
          "MuscularPro M3 is a daily 'MuscleSpan' supplement positioned for mitochondrial health and muscle strength.",
      },
    ],
  },
  {
    title: "Privacy & Security",
    items: [
      {
        id: "pri-1",
        question: "How is my health data protected?",
        answer:
          "Your privacy is our priority. We use industry-standard encryption and follow all HIPAA guidelines to ensure your data is secure.",
      },
    ],
  },
];
