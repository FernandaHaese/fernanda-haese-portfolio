import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { HeroDecorations } from "@/components/HeroDecorations";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import i18n from "@/i18n";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: i18n.t("home:meta.title") },
      { name: "description", content: i18n.t("home:meta.description") },
      { property: "og:title", content: i18n.t("home:meta.title") },
      { property: "og:description", content: i18n.t("home:meta.description") },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const { t } = useTranslation(["home", "common"]);
  const featured = projects.slice(0, 6);

  return (
    <div className="pb-8">
      {/* HERO */}
      <section className="relative px-4 sm:px-6 pt-10 sm:pt-16 pb-14 sm:pb-20">
        <HeroDecorations />
        <div className="mx-auto max-w-3xl text-center relative">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight">
            <span className="block">
              {t("home:hero.greeting")}{" "}
              <span className="title-highlight">{t("home:hero.name")}</span>
            </span>
            <span className="block">{t("home:hero.role")}</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-ink max-w-xl mx-auto">
            {t("home:hero.description")}
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="btn-hard btn-hard-hover bg-lilac text-ink inline-flex items-center gap-2 px-5 py-2.5 font-semibold min-h-11"
            >
              {t("common:buttons.getInTouch")} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/portfolio"
              className="btn-hard btn-hard-hover bg-card text-ink inline-flex items-center gap-2 px-5 py-2.5 font-semibold min-h-11"
            >
              {t("common:buttons.myWork")}
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT (resumido) */}
      <AnimatedSection className="bg-card border-y-2 border-ink">
        <div className="mx-auto max-w-content px-4 sm:px-6 py-14 sm:py-20 grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-xl">
            <SectionTitle as="h2">
              {t("home:about.title", { defaultValue: "About Me" })}
            </SectionTitle>
            <p className="mt-5 text-muted-ink leading-relaxed">{t("home:about.description")}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={siteConfig.cvPath}
                download
                className="btn-hard btn-hard-hover bg-lilac px-4 py-2 font-semibold min-h-11"
              >
                {t("common:buttons.downloadCV")}
              </a>
              <Link
                to="/about"
                className="btn-hard btn-hard-hover bg-card px-4 py-2 font-semibold min-h-11"
              >
                {t("common:buttons.seeMore")}
              </Link>
            </div>
          </div>
          {/* TODO: substituir por foto real da Fernanda */}
          <div
            className="justify-self-center card-hard bg-placeholder w-52 h-52 sm:w-64 sm:h-64"
            aria-label={t("home:about.title")}
          />
        </div>
      </AnimatedSection>

      {/* SERVICES */}
      <AnimatedSection className="px-4 sm:px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-content">
          <div className="text-center max-w-2xl mx-auto">
            <SectionTitle as="h2" align="center">
              {t("home:services.title")}
            </SectionTitle>
            <p className="mt-4 text-muted-ink">{t("home:services.description")}</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              to="/contact"
              className="btn-hard btn-hard-hover bg-lilac inline-flex items-center gap-2 px-5 py-2.5 font-semibold min-h-11"
            >
              {t("common:buttons.getInTouch")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* RECENT WORK */}
      <AnimatedSection className="bg-card border-y-2 border-ink px-4 sm:px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-content">
          <div className="text-center">
            <SectionTitle as="h2" align="center">
              {t("home:recentWork.title")}
            </SectionTitle>
          </div>
          <div id="recent-work" className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              to="/portfolio"
              className="btn-hard btn-hard-hover bg-card px-5 py-2.5 font-semibold min-h-11"
            >
              {t("common:buttons.seeMore")}
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* CONTACT SNIPPET */}
      <AnimatedSection className="px-4 sm:px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTitle as="h2" align="center">
            {t("home:contact.title")}
          </SectionTitle>
          <p className="mt-4 text-muted-ink">{t("home:contact.description")}</p>
        </div>
        <div className="mx-auto max-w-2xl mt-10">
          <ContactForm compact />
        </div>
      </AnimatedSection>
    </div>
  );
}
