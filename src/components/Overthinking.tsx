import { prompts } from "../data/overthinking";
import { Section } from "./Section";
import { Collapsible } from "./Collapsible";

export const Overthinking = () => {
  return (
    <Section
      id="overthinking"
      eyebrow="Overthinking Corner"
      title="What if...?"
      description="Each question is a familiar visitor. Each answer is a reminder that snacks, jokes, and perspective are close by."
    >
      <div className="space-y-4">
        {prompts.map((prompt) => (
          <Collapsible key={prompt.id} id={prompt.id} label={prompt.question}>
            {prompt.answer}
          </Collapsible>
        ))}
      </div>
    </Section>
  );
};
