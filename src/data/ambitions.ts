export type AmbitionStatus = "Drafting" | "In motion" | "Done-ish";

export interface Ambition {
  id: string;
  title: string;
  description: string;
  status: AmbitionStatus;
}

export const ambitions: Ambition[] = [
  {
    id: "community-supper",
    title: "Host a dusk-hour community supper in the garden courtyard",
    description:
      "Design an evening filled with cocoa-infused recipes, stories under string lights, and handwritten invitations tucked into neighbors’ mail slots.",
    status: "In motion"
  },
  {
    id: "audio-journal",
    title: "Launch a playful audio journal about everyday bravery",
    description:
      "Record voice notes that blend honest overthinking with hopeful conclusions, then stitch them into a monthly mini show for friends.",
    status: "Drafting"
  },
  {
    id: "chocolate-lab",
    title: "Perfect a small-batch chocolate tasting flight at home",
    description:
      "Experiment with spices, citrus peels, and garden herbs until three tiny squares tell a full story of comfort, surprise, and glow.",
    status: "Done-ish"
  },
  {
    id: "letter-trade",
    title: "Start a handwritten letter trade with the funniest people I know",
    description:
      "Mail out cocoa-scented stationery that leaves room for doodles, encouragement, and the kind of jokes that always arrive on time.",
    status: "In motion"
  }
];
