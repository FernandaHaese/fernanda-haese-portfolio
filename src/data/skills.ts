export type SkillGroup = {
  id: "development" | "design" | "tools" | "language";
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "development",
    items: [
      "htmlCss",
      "javascript",
      "typescript",
      "react",
      "bootstrap",
      "tailwind",
      "git",
      "github",
    ],
  },
  {
    id: "design",
    items: [
      "uxUi",
      "webDesign",
      "wireframing",
      "prototyping",
      "responsiveness",
      "accessibility",
      "visualId",
      "socialMedia",
    ],
  },
  {
    id: "tools",
    items: ["figma", "framer", "photoshop", "illustrator", "premiere", "canva"],
  },
  {
    id: "language",
    items: ["englishFluent", "portugueseFluent", "spanishBasic"],
  },
];
