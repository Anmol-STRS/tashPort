import { stories } from "../data/stories";
import { Card } from "./Card";
import { Section } from "./Section";
import { Chip } from "./Chip";

const moodLabels: Record<(typeof stories)[number]["mood"], string> = {
  calm: "Calm",
  warmth: "Warmth",
  fresh: "Fresh"
};

export const Stories = () => {
  return (
    <Section
      id="stories"
      eyebrow="Stories I Tell"
      title="Three vignettes that keep me honest"
      description="These are the stories I replay when I want to remember why ambition feels better with laughter and why curiosity beats fear."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {stories.map((story) => (
          <article key={story.slug}>
            <Card className="flex flex-col gap-4">
              <Chip className="self-start bg-mint/70 text-xs uppercase tracking-[0.25em] text-cocoa/90">
                {moodLabels[story.mood]}
              </Chip>
              <h3 className="font-display text-2xl text-cocoaDark">
                {story.title}
              </h3>
              <p className="type-body text-charcoal/80">{story.content}</p>
            </Card>
          </article>
        ))}
      </div>
    </Section>
  );
};
