import {
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import {
  ChartBarIcon as ChartBarSolid,
  ChatBubbleLeftRightIcon as ChatBubbleLeftRightSolid,
  ClipboardDocumentListIcon as ClipboardDocumentListSolid,
  ShoppingBagIcon as ShoppingBagSolid,
} from "@heroicons/react/24/solid";

export type Tab = "Data" | "Protocol" | "Concierge" | "Marketplace";

export interface TabData {
  id: Tab;
  label: string;
  icon: any;
  activeIcon: any;
  image: string;
  description: string;
}

export const TABS: TabData[] = [
  {
    id: "Data",
    label: "Data",
    icon: ChartBarIcon,
    activeIcon: ChartBarSolid,
    image:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Data_1.jpg?v=1771245466",
    description:
      "Track your biomarkers across muscular, metabolic, hormonal, and recovery health graded by category with AI-powered summaries that connect your bloodwork directly to your MuscleSpan protocol.",
  },
  {
    id: "Protocol",
    label: "Protocol",
    icon: ClipboardDocumentListIcon,
    activeIcon: ClipboardDocumentListSolid,
    image:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Protocol_1.jpg?v=1771245462",
    description:
      "Your personalized M3 protocol built on your biomarkers, biological age, and health score. Review your action plan, track key insights, and watch your MuscleSpan improve over time.",
  },
  {
    id: "Concierge",
    label: "Concierge",
    icon: ChatBubbleLeftRightIcon,
    activeIcon: ChatBubbleLeftRightSolid,
    image:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Concierge_1.jpg?v=1771245469",
    description:
      "Your personal MuscleSpan advisor powered by MuscleCare AI for instant answers, with a real care team on standby for complex questions. One message away, anytime.",
  },
  {
    id: "Marketplace",
    label: "Marketplace",
    icon: ShoppingBagIcon,
    activeIcon: ShoppingBagSolid,
    image:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Marketplace_1.jpg?v=1771245465",
    description:
      "Supplements, peptides, and performance gear curated to your protocol and biomarkers. Clinician-vetted, priced below retail, with labs included and free shipping.",
  },
];
