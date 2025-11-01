import { Section } from "./Section";

const moodboardItems = [
  {
    src: "/images/mood-calm.png",
    alt: "Soft cocoa gradient with a glowing ring",
    caption: "Calm cocoa mornings"
  },
  {
    src: "/images/mood-warmth.png",
    alt: "Deep chocolate backdrop with warm light",
    caption: "Warmth that lingers"
  },
  {
    src: "/images/mood-fresh.png",
    alt: "Mint and sage gradient with gentle highlights",
    caption: "Fresh leaves and promises"
  },
  {
    src: "/images/mood-spark.png",
    alt: "Swirling chocolate tones with subtle sparkle",
    caption: "Sparks of bold laughter"
  },
  {
    src: "/images/mood-serene.png",
    alt: "Creamy tones with soft green glow",
    caption: "Serene window light"
  },
  {
    src: "/images/mood-story.png",
    alt: "Moody chocolate hues with a story pulse",
    caption: "Stories brewing slowly"
  }
];

export const Moodboard = () => {
  return (
    <Section
      id="moodboard"
      eyebrow="Moodboard"
      title="Chocolatey textures with gentle garden accents"
      description="Scenes that smell like cocoa, feel like open windows, and sound like friends laughing in the kitchen."
    >
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
        {moodboardItems.map((item) => (
          <figure
            key={item.src}
            className="glass-panel overflow-hidden rounded-[var(--radius-card)]"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <figcaption className="px-4 py-3 text-sm text-charcoal/70">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
};
