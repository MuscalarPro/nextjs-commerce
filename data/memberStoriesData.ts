export interface MemberStory {
  id: string;
  name: string;
  age?: number;
  role?: string;
  quote: string;
  image: string;
  category: string;
}

export const memberStories: MemberStory[] = [
  {
    id: "1",
    name: "Alex Rivera",
    age: 34,
    role: "Tech Entrepreneur",
    quote:
      "Superpower didn't just give me data; it gave me a roadmap to vitality I didn't know was possible.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    category: "Performance",
  },
  {
    id: "2",
    name: "Sarah Chen",
    age: 29,
    role: "Marathon Runner",
    quote:
      "My recovery times have halved. I feel like I'm 20 again, but with the wisdom of my 30s.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    category: "Recovery",
  },
  {
    id: "3",
    name: "Marcus Thorne",
    age: 45,
    role: "Venture Capitalist",
    quote:
      "In the high-stakes world of VC, clarity is everything. Superpower keeps my mind sharp and my body resilient.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    category: "Clarity",
  },
  {
    id: "4",
    name: "Elena Rodriguez",
    age: 38,
    role: "Biotech Researcher",
    quote:
      "As a scientist, I was skeptical. But the results speak for themselves. The protocol is rigorous and effective.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    category: "Science",
  },
  {
    id: "5",
    name: "David Park",
    age: 52,
    role: "Retired Athlete",
    quote:
      "I thought my best days were behind me. Superpower proved me wrong. I'm stronger now than I was a decade ago.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    category: "Strength",
  },
  {
    id: "6",
    name: "Sophia Loren",
    age: 31,
    role: "Yoga Instructor",
    quote:
      "Balance is more than just physical. It's about how your cells communicate. This is true holistic health.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    category: "Balance",
  },
  {
    id: "7",
    name: "James Wilson",
    age: 42,
    role: "Software Architect",
    quote:
      "The integration with my existing routine was seamless. It's the ultimate upgrade for your human OS.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    category: "Integration",
  },
  {
    id: "8",
    name: "Isabella Votto",
    age: 27,
    role: "Creative Director",
    quote:
      "Creativity requires energy. Superpower ensures my tank is always full and ready for the next big idea.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    category: "Energy",
  },
];
