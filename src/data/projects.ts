export type ProjectCategory = "ux-ui" | "web-design" | "front-end" | "back-end" | "full-stack";

export type Project = {
  slug: string;
  translationKey: string;
  categories: ProjectCategory[];
  thumbnail?: string;
  gallery?: string[];
};

// TODO: substituir por projetos reais quando disponíveis
export const projects: Project[] = [
  { slug: "finance-dashboard", translationKey: "financeDashboard", categories: ["ux-ui", "web-design"] },
  { slug: "travel-app", translationKey: "travelApp", categories: ["ux-ui", "front-end"] },
  { slug: "brand-site", translationKey: "brandSite", categories: ["web-design", "front-end"] },
  { slug: "task-manager", translationKey: "taskManager", categories: ["full-stack"] },
  { slug: "portfolio-cms", translationKey: "portfolioCms", categories: ["back-end", "full-stack"] },
  { slug: "landing-page", translationKey: "landingPage", categories: ["web-design"] },
];

export const projectCategories: ("all" | ProjectCategory)[] = [
  "all",
  "ux-ui",
  "web-design",
  "front-end",
  "back-end",
  "full-stack",
];
