export type StoryStatus = "drafting" | "in-motion" | "done-ish";

export interface Story {
  slug: string;
  title: string;
  mood: "calm" | "warmth" | "fresh";
  content: string;
}

export const stories: Story[] = [
  {
    slug: "the-rain-delay",
    title: "The Rain Delay",
    mood: "warmth",
    content:
      "Rain hammered the bus stop awning, and the only umbrella in sight was a grocery bag that I reshaped into a makeshift crown. The bag crinkled with every laugh, and two strangers joined in the coronation. We marched into the bakery across the street, drenched but determined, smelling like cocoa powder and second chances. I was late for the meeting, hair ridiculous, agenda forgotten. The team stared, then softened when they heard about the crown. Sometimes ambition is getting there anyway and letting the room remember the joy before the spreadsheets."
  },
  {
    slug: "the-missing-bookmark",
    title: "The Missing Bookmark",
    mood: "calm",
    content:
      "I once halted an entire Sunday because my favorite bookmark vanished between two chapters. My brain built a flowchart of catastrophic outcomes: lost focus, a story forever unmoored, a disappointing Monday. I searched the couch, the teapot, even the plant shelf. Hours later, the bookmark surfaced—sticking out of the front cover where I placed it to remember page one. I laughed out loud, poured hot chocolate, and texted a friend: crisis resolved, plot twist predictable. Overthinking still knocks, but now I answer with a punchline before I open the door too wide."
  },
  {
    slug: "the-garden-shortcut",
    title: "The Garden Shortcut",
    mood: "fresh",
    content:
      "There is a garden path near my apartment with a gate that never truly closes. One evening I slipped through, hoping to shave five minutes off the walk home. Instead I found string lights, accordion music, and neighbors trading herb cuttings like secret handshakes. Someone handed me a sprig of mint and a story about how their grandmother brewed courage. I kept the sprig, made tea, and promised myself to stay curious enough to enter half-open gates. Shortcut accomplished, confidence amplified, and the long way will never look the same again."
  }
];
