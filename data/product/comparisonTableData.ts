export interface ComparisonRow {
  feature: string;
  m3Stack: string;
  typicalMuscleBuilding: string;
  typicalLongevity: string;
}

export const comparisonData: ComparisonRow[] = [
  {
    feature: "Clinically Studied Urolithin A Dose (1,000 mg/day)",
    m3Stack: "✓",
    typicalMuscleBuilding: "-",
    typicalLongevity: "Partial",
  },
  {
    feature: "Strength Endpoints in Human RCTs (Urolithin A Core)",
    m3Stack: "✓",
    typicalMuscleBuilding: "Partial",
    typicalLongevity: "Partial",
  },
  {
    feature:
      "Endurance/Fatigue-Resistance Endpoints in Human RCTs (Urolithin A Core)",
    m3Stack: "✓",
    typicalMuscleBuilding: "Partial",
    typicalLongevity: "Partial",
  },
  {
    feature:
      "Mobility-Type Performance Endpoint (6-min walk) in Urolithin A Research",
    m3Stack: "✓",
    typicalMuscleBuilding: "-",
    typicalLongevity: "Partial",
  },
  {
    feature: "Multi-Pathway Cellular Stack (Mitophagy + Autophagy Support)",
    m3Stack: "✓",
    typicalMuscleBuilding: "-",
    typicalLongevity: "Partial",
  },
  {
    feature: "Single Daily Capsule Protocol",
    m3Stack: "✓",
    typicalMuscleBuilding: "-",
    typicalLongevity: "-",
  },
  {
    feature: "Stimulant-Free Positioning",
    m3Stack: "✓",
    typicalMuscleBuilding: "Varies",
    typicalLongevity: "Varies",
  },
];
