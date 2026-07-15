# Portfólio Fernanda Haese

Site multi-página fiel às referências (cápsula preta, cards com sombra deslocada, fundo creme, destaques lilás), com i18n EN/PT-BR, animações Framer Motion e totalmente responsivo mobile-first.

## Rotas (TanStack Router — file-based)

O projeto usa TanStack Start, então em vez de `react-router` e `src/pages/`, uso o roteador nativo em `src/routes/`. A estrutura mental (Home, About, Portfolio, Project, Contact, 404) é idêntica.

```
src/routes/
  __root.tsx              layout com Header + Outlet + Footer + i18n
  index.tsx               /                 Home
  about.tsx               /about            About Me
  portfolio.tsx           /portfolio        Portfolio
  portfolio.$slug.tsx     /portfolio/:slug  Project Details
  contact.tsx             /contact          Contact
```

404 já existe em `__root.tsx` (`notFoundComponent`) e será estilizado no tema.

## Stack

- TanStack Start (React 19 + TS + Vite) — já instalado
- Tailwind v4 — já instalado
- `framer-motion` — a instalar
- `i18next`, `react-i18next`, `i18next-browser-languagedetector` — a instalar
- `lucide-react` — já instalado (ícones + Behance/Linkedin/Github oficiais do lucide)
- `react-hook-form` + `zod` para o form de contato

## Design tokens (`src/styles.css`)

Adiciono no `@theme`:

- `--color-cream: #FDF8E1`, `--color-lilac: #E5B8F4`, `--color-ink: #000`, `--color-muted: #5F5F5F`, `--color-placeholder: #C4C4C4`
- `--shadow-offset: 4px 4px 0 0 #000` (sombra dura deslocada)
- `--radius-capsule: 9999px`, `--radius-card: 20px`
- Fonte: Inter via `<link>` no `__root.tsx`
- Utility `.title-highlight` (faixa lilás atrás da parte inferior do texto via `background: linear-gradient(transparent 60%, var(--color-lilac) 60%)`)

## Componentes (`src/components/`)

`Header/` (cápsula desktop + botão hamburger mobile com Sheet animado), `Footer/` (linha preta topo, layout desktop/mobile distintos), `Button/` (variantes: lilac, outline, ghost — todos com borda preta + shadow offset), `SectionTitle/` (aplica `.title-highlight`), `ProjectCard/`, `ServiceCard/`, `SkillTag/` + `SkillGroupCard/`, `ExperienceCard/`, `EducationCard/`, `SocialLinks/`, `LanguageSelector/` (dropdown desktop, lista dentro do menu mobile, `aria-pressed`), `ContactForm/`, `MobileMenu/` (bloqueia scroll, fecha em Esc/click-out/link, `aria-expanded`/`aria-controls`), `AnimatedSection/` (fade + translateY, respeita `prefers-reduced-motion`), `HeroDecorations/` (SVGs leves das formas).

## Dados (`src/data/`)

`siteConfig.ts`, `projects.ts` (6 projetos placeholder com slug, categorias, thumbnail, gallery), `skills.ts` (Development/Design/Tools/Language), `experience.ts`, `education.ts`, `services.ts`. Sem textos aqui — só chaves de tradução e dados técnicos.

## i18n (`src/i18n/index.ts` + `src/locales/{en,pt}/*.json`)

Namespaces: `common`, `home`, `about`, `portfolio`, `projects`, `contact`. Detector: `localStorage` → `navigator` → fallback `en`. `load: "languageOnly"`. Ao trocar: atualiza `document.documentElement.lang` (`pt-BR`/`en`) e persiste. Head metadata por rota lê `i18n.t()` para title/description.

## Assets

- CV placeholder em `public/files/fernanda-haese-cv.pdf` (arquivo vazio identificado, pronto para substituição)
- Foto da Fernanda: crio um placeholder identificado em `src/assets/` (comentário `// TODO: substituir pela foto real`)
- Imagens de projetos: divs cinzas `#C4C4C4` com o mesmo comentário

## Contato

`submitContactForm()` isolado em `src/lib/contact.ts` — hoje só faz `await new Promise(r => setTimeout(r, 800))` e **lança erro** ("Integração não configurada") para não simular sucesso falso. Documentado com TODO para Formspree/EmailJS/Resend/Supabase. UI mostra os três estados corretamente.

## SEO

`head()` por rota (title/description/og traduzidos), JSON-LD Person + WebSite em `__root.tsx`, `og:image` só em rotas leaf quando houver imagem real (placeholder omite), `robots.txt` e `sitemap.xml` em `public/`.

## Acessibilidade & Performance

Skip link, um `<h1>` por página, foco visível (`outline` lilás + offset), tap targets ≥44px, `aria-current="page"` no link ativo, `aria-live` no form, imagens com `width`/`height` e `loading="lazy"` fora da primeira dobra, lazy import das rotas pesadas (Project Details), animações respeitam `prefers-reduced-motion`.

## Fora do escopo desta entrega

- Backend real de envio de e-mail (função isolada, pronta para plugar)
- CV e fotografia definitivos (placeholders com caminho fixo)
- Conteúdo real dos projetos (Lorem Ipsum das referências mantido)
