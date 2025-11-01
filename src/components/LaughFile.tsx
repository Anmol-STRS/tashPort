import { laughs } from "../data/laughs";
import { Section } from "./Section";
import { Card } from "./Card";

export const LaughFile = () => {
  return (
    <Section
      id="laugh-file"
      eyebrow="Laugh File"
      title="Punchlines queued for any room"
      description="A few favorite one-liners that tend to break tension before it even has a chance to settle in."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {laughs.map((line) => (
          <article key={line.id}>
            <Card className="type-body">{line.quip}</Card>
          </article>
        ))}
      </div>
    </Section>
  );
};
