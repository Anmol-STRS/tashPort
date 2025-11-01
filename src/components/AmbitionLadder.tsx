import { ambitions } from "../data/ambitions";
import { Card } from "./Card";
import { Chip } from "./Chip";
import { Section } from "./Section";

const statusStyles: Record<
  (typeof ambitions)[number]["status"],
  { label: string; className: string }
> = {
  Drafting: {
    label: "Drafting",
    className: "bg-cream text-cocoa border-cocoa/20"
  },
  "In motion": {
    label: "In motion",
    className: "bg-mint text-cocoa border-cocoa/10"
  },
  "Done-ish": {
    label: "Done-ish",
    className: "bg-sage/60 text-charcoal border-cocoa/20"
  }
};

export const AmbitionLadder = () => {
  return (
    <Section
      id="ambition"
      eyebrow="Ambition Ladder"
      title="Goals stacked like chocolate squares"
      description="Every rung is a prompt to gather people, celebrate tiny wins, and season progress with sincerity."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {ambitions.map((ambition) => {
          const status = statusStyles[ambition.status];
          return (
            <article key={ambition.id}>
              <Card className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl text-cocoaDark">
                    {ambition.title}
                  </h3>
                  <Chip
                    className={`border ${status.className} text-xs uppercase tracking-[0.2em]`}
                  >
                    {status.label}
                  </Chip>
                </div>
                <p className="type-body text-charcoal/80">
                  {ambition.description}
                </p>
              </Card>
            </article>
          );
        })}
      </div>
    </Section>
  );
};
