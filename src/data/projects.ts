export type ProjectCategory =
  "ux-ui" | "web-design" | "front-end" | "brand" | "social-media" | "other";

export type Project = {
  slug: string;
  translationKey: string;
  categories: ProjectCategory[];
  thumbnail?: string;
  gallery?: string[];
  process?: string[];
  liveUrl?: string;
};

// TODO: substituir por projetos reais quando disponíveis
export const projects: Project[] = [
  {
    slug: "brotai-platform",
    translationKey: "brotaiPlatform",
    categories: ["ux-ui", "front-end"],
    thumbnail: "/images/projects/plataforma-brotai/imagem-8.webp",
    gallery: [
      "/images/projects/plataforma-brotai/imagem-8.webp",
      "/images/projects/plataforma-brotai/imagem-7.webp",
      "/images/projects/plataforma-brotai/imagem-6.webp",
      "/images/projects/plataforma-brotai/imagem-5.webp",
      "/images/projects/plataforma-brotai/imagem-9.webp",
      "/images/projects/plataforma-brotai/imagem-10.webp",
    ],
    process: [
      "/images/projects/plataforma-brotai/imagem-1.webp",
      "/images/projects/plataforma-brotai/imagem-2.webp",
      "/images/projects/plataforma-brotai/imagem-3.png",
      "/images/projects/plataforma-brotai/imagem-4.png",
    ],
  },
  {
    slug: "website-ekovitra",
    translationKey: "websiteEkovitra",
    categories: ["ux-ui", "web-design", "front-end"],
    thumbnail: "/images/projects/website-ekovitra/imagem-6.webp",
    gallery: [
      "/images/projects/website-ekovitra/imagem-6.webp",
      "/images/projects/website-ekovitra/imagem-5.webp",
      "/images/projects/website-ekovitra/imagem-4.webp",
      "/images/projects/website-ekovitra/imagem-12.webp",
      "/images/projects/website-ekovitra/imagem-9.webp",
    ],
    process: [
      "/images/projects/website-ekovitra/imagem-2.webp",
      "/images/projects/website-ekovitra/imagem-3.webp",
    ],
    liveUrl: "https://ekovitra.com/",
  },
  {
    slug: "sensen-games-website",
    translationKey: "sensenGamesWebsite",
    categories: ["ux-ui", "front-end", "web-design"],
    thumbnail: "/images/projects/website-sensen-games/imagem-1.webp",
    gallery: [
      "/images/projects/website-sensen-games/imagem-1.webp",
      "/images/projects/website-sensen-games/imagem-4.webp",
      "/images/projects/website-sensen-games/imagem-5.webp",
    ],
    process: [
      "/images/projects/website-sensen-games/imagem-2.webp",
      "/images/projects/website-sensen-games/imagem-3.webp",
    ],
    liveUrl: "https://fernandahaese.github.io/Sensen-Games/",
  },
  {
    slug: "app-memorio",
    translationKey: "memorioApp",
    categories: ["ux-ui"],
    thumbnail: "/images/projects/aplicativo-memorio/imagem-2.webp",
    gallery: [
      "/images/projects/aplicativo-memorio/imagem-3.webp",
      "/images/projects/aplicativo-memorio/imagem-2.webp",
      "/images/projects/aplicativo-memorio/imagem-4.webp",
    ],
    process: ["/images/projects/aplicativo-memorio/imagem-8.png"],
  },
  {
    slug: "helena-duarte-website",
    translationKey: "helenaDuarteWebsite",
    categories: ["web-design", "ux-ui", "front-end"],
    thumbnail: "/images/projects/website-helena-duarte/imagem-4.webp",
    gallery: [
      "/images/projects/website-helena-duarte/imagem-4.webp",
      "/images/projects/website-helena-duarte/imagem-5.webp",
      "/images/projects/website-helena-duarte/imagem-2.webp",
      "/images/projects/website-helena-duarte/imagem-3.webp",
    ],
    liveUrl: "https://fernandahaese.github.io/Helena-Duarte/",
  },
  {
    slug: "nat-plus-chatbot",
    translationKey: "natPlusChatbot",
    categories: ["ux-ui"],
    thumbnail: "/images/projects/chatbot-nat/imagem-7.webp",
    gallery: [
      "/images/projects/chatbot-nat/imagem-3.webp",
      "/images/projects/chatbot-nat/imagem-4.webp",
      "/images/projects/chatbot-nat/imagem-5.webp",
      "/images/projects/chatbot-nat/imagem-6.webp",
      "/images/projects/chatbot-nat/imagem-7.webp",
      "/images/projects/chatbot-nat/imagem-1.webp",
    ],
    liveUrl: "https://fernandahaese.github.io/Projeto-Natura/",
  },
];

export const projectCategories: ("all" | ProjectCategory)[] = [
  "all",
  "ux-ui",
  "web-design",
  "front-end",
  "brand",
  "social-media",
  "other",
];
