export interface Message {
  id: number;
  text: string;
  isUser: boolean;
  delay: number;
}

export const universities = ["Cornell University"];

export const MESSAGES: Message[] = [
  {
    id: 1,
    text: "Hey Ateeb, just checking in on your M3 stack.",
    isUser: false,
    delay: 500,
  },
  {
    id: 2,
    text: "How's training been this week? Any changes in energy, recovery, or sleep since starting Daily M3?",
    isUser: false,
    delay: 1500,
  },
  {
    id: 3,
    text: "Training's been solid lifts feel stronger. But I'm taking M3 before bed and feeling a bit too wired to fall asleep.",
    isUser: true,
    delay: 3000,
  },
  {
    id: 4,
    text: "Got it I just flagged this with your clinician.",
    isUser: false,
    delay: 4500,
  },
  {
    id: 5,
    text: "He suggests moving your M3 capsule to morning (post-breakfast) instead of night. Urolithin A works on mitochondrial turnover throughout the day, so AM dosing won't reduce efficacy. Check how you sleep tonight and update me tomorrow.",
    isUser: false,
    delay: 6000,
  },
];
