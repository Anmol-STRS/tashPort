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
      <div className="flex flex-nowrap gap-2.5 overflow-x-auto pb-2 sm:flex-wrap sm:gap-3 sm:overflow-visible sm:pb-0">
        {joys.map((joy) => (
          <Chip key={joy}>{joy}</Chip>
        ))}
      </div>
    </Section>
  );
};
