// data.ts (or wherever you keep constants)
export const timelinedata = [
  {
    id: 1,
    label: "Hour 8",
    title: "Urolithin A reaches every muscle cell",
    points: [
      "Plasma Urolithin A peaks within 6 to 8 hours¹",
      "The mitochondrial signaling cascade initiates",
      "Damaged mitochondria get tagged for clearance",
    ],
  },
  {
    id: 2,
    label: "Day 7",
    title: "Mitophagy switches on",
    points: [
      "Daily dosing keeps the cleanup cycle running",
      "Autophagy reactivates protein recycling in fibers",
      "Post-training soreness windows start to shrink",
    ],
  },
  {
    id: 3,
    label: "Day 30",
    title: "Energy production climbs",
    points: [
      "Energy machinery (OXPHOS) ramps up",
      "Acylcarnitines — a stress marker — begin to decline",
      "Effort at the same intensity feels less costly",
    ],
  },
  {
    id: 4,
    label: "Day 60",
    title: "Gains move from cells to sensation",
    points: [
      "Early strength and endurance changes emerge²",
      "Recovery between training sessions shortens",
      "Biomarker shifts start registering in training logs",
    ],
  },
  {
    id: 5,
    label: "Day 120",
    title: "The 16-week data lands",
    points: [
      "+12% hamstring strength in adults 40 to 65²",
      "+41% skeletal muscle endurance vs placebo²",
      "-40% CRP, a systemic inflammation marker²",
    ],
  },
  {
    id: 6,
    label: "Day 365",
    title: "The adaptations compound",
    points: [
      "Each cycle of cleanup builds on the previous",
      "Mitophagy activation stays dose-responsive³",
      "Year-plus human data still being gathered in active trials",
    ],
  },
] as const;
