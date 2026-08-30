export const PROFILE = {
  name: "uttam bakori",
  role: "visual & ui/ux designer",
  location: "india",
  email: "itsuttampatel@gmail.com",
  linkedin: "https://www.linkedin.com/in/uttambakori",
  behance: "https://behance.net/uttampatel11",
};

export const PROJECTS = [
  {
    id: "flashcut",
    name: "flashcut",
    thumbnail: "/assets/flashcut_thumbnail.jpg",
    purpose: "beat-synced reel montage tool",
    story:
      "a lightweight web studio to turn still artwork or wide midjourney images into beat-synced 9:16 vertical reels without opening heavy video software. cuts snap directly to musical transients right in the browser.",
    url: "https://flashcut-reel-studio.vercel.app",
  },
  {
    id: "scrawl",
    name: "scrawl",
    thumbnail: "/assets/scrawl_thumbnail.jpg",
    purpose: "in-browser canvas sketchpad",
    story:
      "a minimal, touch-first canvas scratchpad for quick wireframes, raw ideas, and traditional folk art. includes modular warli design elements to easily assemble tribal art motifs, with more regional styles in the works.",
    url: "https://scrawl-omega.vercel.app",
  },
];

export const ARTICLES = [
  {
    id: "the-outlier-problem-in-ai-prediction",
    title: "the outlier problem in ai prediction.",
    date: "february 2026",
    readingTime: "4 min read",
    excerpt:
      "large language models work by predicting the most statistically likely next word based on patterns learned from massive amounts of text. this means the model gravitates toward the center of the distribution—the average, the conventional. why the moments that change the world are the ones that probably wouldn't come next.",
    content: [
      {
        heading: "how ai prediction works",
        paragraphs: [
          "Large language models work by predicting the most statistically likely next word (or token) based on patterns learned from massive amounts of text. At its core, the model asks: \"Given everything before this point, what word/response would most probably come next?\"",
          "This means the model gravitates toward the center of the distribution—the average, the conventional, the consensus answer.",
        ],
      },
      {
        heading: "what this means in practice",
        paragraphs: [
          "The AI is trained to favor the fat middle—the safe, common, well-represented response.",
        ],
      },
      {
        heading: "why outliers matter",
        bullets: [
          "Scientific breakthroughs were once outlier ideas (heliocentrism, germ theory, plate tectonics).",
          "Creative genius often means seeing connections nobody else sees.",
          "Interesting conversation often comes from unexpected angles.",
          "Innovation is almost by definition an outlier—something that departs from the norm.",
          "Humor often depends on subverting expectations.",
        ],
      },
      {
        heading: "the deeper concerns",
        bullets: [
          "1. Creativity vs. Probability — Creativity is, almost by definition, improbable. If an idea is highly predictable, we don't call it creative. By optimizing for likelihood, AI systematically filters out novelty.",
          "2. The Homogenization Problem — If everyone uses AI to write, think, and create—and AI always gravitates toward the statistical mean—culture risks becoming blander and more uniform. A kind of intellectual regression to the mean.",
          "3. Confirmation of Consensus ≠ Truth — The most likely answer reflects what most people have said, not necessarily what's correct. History is full of cases where the consensus was wrong and the outlier was right.",
          "4. The 'Interesting' Lives at the Edges — The most interesting people aren't average. The most interesting ideas aren't conventional. The most interesting art isn't predictable. The most interesting scientific findings are surprises.",
        ],
      },
      {
        heading: "a nuance worth adding",
        paragraphs: [
          "AI models can produce outlier responses—temperature settings, sampling methods, and prompting techniques can push toward less probable outputs.",
          "But even then, the model is still drawing from patterns it has seen. It can recombine in novel ways, but it's not generating ideas from genuinely outside its training distribution.",
          "The real outliers—the things nobody has thought of yet—are structurally harder for a prediction engine to produce.",
        ],
      },
      {
        heading: "the bottom line",
        quote:
          "A machine that tells you what probably comes next is enormously useful. But the moments that change the world, spark genuine insight, or make you laugh unexpectedly—those are the moments that probably wouldn't come next.",
      },
    ],
  },
];
