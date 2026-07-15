export type SkillGroup = {
  id: "development" | "design" | "tools" | "language";
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "development",
    items: ["HTML/CSS", "Javascript", "Typescript", "React", "Boostrap", "Tailwind", "Git", "Github"],
  },
  {
    id: "design",
    items: ["UX/UI", "Wireframing", "Prototyping", "Design System", "Responsivity", "Acessiblity"],
  },
  {
    id: "tools",
    items: ["Figma", "Framer", "Photoshop", "Illustrator", "Premiere", "Canva"],
  },
  {
    id: "language",
    items: ["English (Fluent)", "Portuguese (Fluent)", "Spanish (Basic)"],
  },
];
