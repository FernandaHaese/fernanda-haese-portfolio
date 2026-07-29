export type ProjectCategory =
  "ux-ui" | "web-design" | "app" | "social-media" | "brand" | "presentation" | "other";

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
    categories: ["ux-ui"],
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
    categories: ["ux-ui", "web-design"],
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
    categories: ["ux-ui", "web-design"],
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
    categories: ["ux-ui", "app"],
    thumbnail: "/images/projects/aplicativo-memorio/imagem-5.webp",
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
    categories: ["web-design", "ux-ui"],
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
  {
    slug: "ekovitra-social-media",
    translationKey: "ekovitraSocialMedia",
    categories: ["social-media"],
    thumbnail: "/images/projects/social-media-ekovitra/imagem-03.png",
    gallery: [
      "/images/projects/social-media-ekovitra/imagem-01.png",
      "/images/projects/social-media-ekovitra/imagem-02.png",
      "/images/projects/social-media-ekovitra/imagem-03.png",
    ],
  },
  {
    slug: "papero-social-media",
    translationKey: "paperoSocialMedia",
    categories: ["social-media"],
    thumbnail: "/images/projects/social-media-papero/imagem-01.png",
    gallery: [
      "/images/projects/social-media-papero/imagem-01.png",
      "/images/projects/social-media-papero/imagem-02.png",
      "/images/projects/social-media-papero/imagem-03.png",
    ],
  },
  {
    slug: "nath-social-media",
    translationKey: "nathSocialMedia",
    categories: ["social-media"],
    thumbnail: "/images/projects/social-media-nath/imagem-02.png",
    gallery: [
      "/images/projects/social-media-nath/imagem-01.png",
      "/images/projects/social-media-nath/imagem-02.png",
    ],
  },
  {
    slug: "abrigo-animal-social-media",
    translationKey: "abrigoAnimalSocialMedia",
    categories: ["social-media"],
    thumbnail: "/images/projects/social-media-anjinhos-de-patas/imagem-01.png",
    gallery: [
      "/images/projects/social-media-anjinhos-de-patas/imagem-01.png",
      "/images/projects/social-media-anjinhos-de-patas/imagem-02.png",
      "/images/projects/social-media-anjinhos-de-patas/imagem-03.png",
    ],
  },
  {
    slug: "app-galeria-artte",
    translationKey: "appGaleriaArtte",
    categories: ["ux-ui", "app"],
    thumbnail: "/images/projects/app-galeria-artte/imagem-04.png",
    gallery: [
      "/images/projects/app-galeria-artte/imagem-04.png",
      "/images/projects/app-galeria-artte/imagem-05.png",
      "/images/projects/app-galeria-artte/imagem-06.png",
    ],
    process: [
      "/images/projects/app-galeria-artte/imagem-01.png",
      "/images/projects/app-galeria-artte/imagem-02.png",
    ],
  },
  {
    slug: "id-ekovitra",
    translationKey: "idEkovitra",
    categories: ["brand"],
    thumbnail: "/images/projects/id-ekovitra/imagem-04.png",
    gallery: [
      "/images/projects/id-ekovitra/imagem-01.png",
      "/images/projects/id-ekovitra/imagem-02.png",
      "/images/projects/id-ekovitra/imagem-03.png",
      "/images/projects/id-ekovitra/imagem-04.png",
      "/images/projects/id-ekovitra/imagem-06.png",
      "/images/projects/id-ekovitra/imagem-07.png",
      "/images/projects/id-ekovitra/imagem-08.png",
    ],
  },
  {
    slug: "id-viva-inovacoes",
    translationKey: "idVivaInovacoes",
    categories: ["brand"],
    thumbnail: "/images/projects/id-viva-inovacoes/imagem-01.png",
    gallery: [
      "/images/projects/id-viva-inovacoes/imagem-01.png",
      "/images/projects/id-viva-inovacoes/imagem-03.png",
      "/images/projects/id-viva-inovacoes/imagem-04.png",
      "/images/projects/id-viva-inovacoes/imagem-05.png",
    ],
  },
  {
    slug: "id-nucleo-saber",
    translationKey: "idNucleoSaber",
    categories: ["brand"],
    thumbnail: "/images/projects/id-nucleo-saber/imagem-01.png",
    gallery: [
      "/images/projects/id-nucleo-saber/imagem-01.png",
      "/images/projects/id-nucleo-saber/imagem-02.png",
      "/images/projects/id-nucleo-saber/imagem-03.png",
      "/images/projects/id-nucleo-saber/imagem-04.png",
      "/images/projects/id-nucleo-saber/imagem-05.png",
      "/images/projects/id-nucleo-saber/imagem-06.png",
      "/images/projects/id-nucleo-saber/imagem-07.png",
    ],
  },
];

const categories: ProjectCategory[] = [
  "ux-ui",
  "web-design",
  "app",
  "social-media",
  "brand",
  "presentation",
  "other",
];

export const projectCategories: ("all" | ProjectCategory)[] = [
  "all",
  ...categories.filter((category) =>
    projects.some((project) => project.categories.includes(category)),
  ),
];
