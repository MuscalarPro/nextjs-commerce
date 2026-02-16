import { ReactNode } from "react";

export interface ReviewCard {
  id: string;
  type: "video" | "image" | "ui";
  src: string;
  poster?: string;
  username?: string;
  handle?: string;
  followers?: string;
  isVerified?: boolean;
  content?: ReactNode; // For custom UI cards
}

export const reviews: ReviewCard[] = [
  {
    id: "1",
    type: "video",
    src: "https://cdn.shopify.com/videos/c/o/v/98f9311b47f042d2986764eade70dd56.mp4",
    username: "Alex Rivera",
    handle: "@arivera_fit",
    followers: "128k followers",
    isVerified: true,
  },
  {
    id: "2",
    type: "video",
    src: "https://cdn.shopify.com/videos/c/o/v/b479a082bb5d4fa4aec0f8cb5954a763.mp4",
    username: "Sarah Chen",
    handle: "@sarah.c_wellness",
    followers: "45.2k followers",
    isVerified: true,
  },
  {
    id: "4",
    type: "video",
    src: "https://cdn.shopify.com/videos/c/o/v/b100c4b2e0294ae6b83a5a57bdd41daa.mp4",
    username: "Elena Rodriguez",
    handle: "@elena_rodriguez",
    followers: "210k followers",
    isVerified: true,
  },
  {
    id: "6",
    type: "video",
    src: "https://cdn.shopify.com/videos/c/o/v/dafd9cf0d1a8452fbc041cf7fb1ead24.mp4",
    username: "Marcus Thorne",
    handle: "@mthorne_strong",
    followers: "15.4k followers",
    isVerified: false,
  },
  {
    id: "5",
    type: "ui",
    src: "",
    content: (
      <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-600 p-6 flex flex-col items-center justify-center text-white relative">
        <div className="absolute top-8 left-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center">
            <img
              src="https://ui-avatars.com/api/?name=Q+J&background=random"
              className="w-full h-full rounded-full"
              alt="Quentin"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm">Quentin Johnston</span>
            <span className="text-xs opacity-80">NFL player</span>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 w-full max-w-[240px] border border-white/20">
          <h4 className="opacity-70 uppercase text-xs tracking-wider mb-4">
            superpower To-do List
          </h4>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-[10px]">
                ✓
              </div>
              <span className="text-sm">Light Cardio</span>
            </div>
            <div className="flex items-center gap-3 opacity-50">
              <div className="w-5 h-5 rounded-full border border-white/50" />
              <span className="text-sm">Meditation</span>
            </div>
            <div className="flex items-center gap-3 opacity-50">
              <div className="w-5 h-5 rounded-full border border-white/50" />
              <span className="text-sm">Increase Iron Intake</span>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 text-xs font-bold opacity-80">
            superpower
          </div>
        </div>
      </div>
    ),
  },
];
