export interface OverthinkingPrompt {
  id: string;
  question: string;
  answer: string;
}

export const prompts: OverthinkingPrompt[] = [
  {
    id: "wrong-path",
    question: "What if I picked the wrong path?",
    answer:
      "Then I’ll make it scenic. The detours have better snacks."
  },
  {
    id: "too-much",
    question: "What if my enthusiasm is too much?",
    answer:
      "Then the right rooms will turn up the volume and pass the aux cord."
  },
  {
    id: "not-ready",
    question: "What if I’m not ready yet?",
    answer:
      "Then I’ll stir the cocoa slower, breathe, and step in when the aroma says go."
  },
  {
    id: "silent-night",
    question: "What if the idea falls silent tomorrow?",
    answer:
      "Then I’ll plant it in the mint planter, water it with laughter, and listen again next week."
  }
];
