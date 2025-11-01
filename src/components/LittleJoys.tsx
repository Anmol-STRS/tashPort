import { Section } from "./Section";
import { Chip } from "./Chip";

const joys = [
  "chocolatey smell",
  "fresh leaves",
  "first page of a notebook",
  "golden hour windows",
  "long voice notes"
];

export const LittleJoys = () => {
  return (
    <Section
      id="little-joys"
      eyebrow="Little Joys"
      title="Tiny sparks I collect like shiny wrappers"
    >
      <div className="flex flex-wrap gap-3">
        {joys.map((joy) => (
          <Chip key={joy}>{joy}</Chip>
        ))}
      </div>
    </Section>
  );
};
