import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillGroupCard } from "@/components/SkillCard";
import i18n from "@/i18n";
import { siteConfig } from "@/data/siteConfig";
import { skillGroups } from "@/data/skills";
import { experience } from "@/data/experience";
import { education } from "@/data/education";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: i18n.t("about:meta.title") },
      { name: "description", content: i18n.t("about:meta.description") },
      { property: "og:title", content: i18n.t("about:meta.title") },
      { property: "og:description", content: i18n.t("about:meta.description") },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

// Mobile order (per reference): Tools, Language, Development, Design
const mobileOrder = ["tools", "language", "development", "design"] as const;

function About() {
  const { t } = useTranslation(["about", "common"]);

  const orderedForMobile = mobileOrder
    .map((id) => skillGroups.find((g) => g.id === id))
    .filter((g): g is (typeof skillGroups)[number] => !!g);

  return (
    <div className="pb-8">
      {/* Header block */}
      <AnimatedSection className="px-4 sm:px-6 pt-10 sm:pt-16 pb-10">
        <div className="mx-auto max-w-content grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
          <div className="max-w-xl mx-auto text-center md:mx-0 md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <SectionTitle as="h1">{t("about:title")}</SectionTitle>
            </div>
            {/* Mobile photo below title */}
            <div className="md:hidden mt-6 flex justify-center">
              <img
                src="/images/profile/fernanda-haese.webp"
                alt={t("about:photoAlt")}
                width={1000}
                height={1000}
                loading="lazy"
                className="card-hard w-48 h-48 object-cover object-center"
              />
            </div>
            <p className="mt-6 text-muted-ink leading-relaxed">{t("about:description")}</p>
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
              <a
                href={siteConfig.cvPath}
                download
                className="btn-hard btn-hard-hover bg-lilac px-4 py-2 font-semibold min-h-11"
              >
                {t("common:buttons.downloadCV")}
              </a>
              <Link
                to="/contact"
                className="btn-hard btn-hard-hover bg-card px-4 py-2 font-semibold min-h-11 inline-flex items-center gap-2"
              >
                {t("common:buttons.getInTouch")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          {/* Desktop photo right */}
          <div className="hidden md:block">
            <img
              src="/images/profile/fernanda-haese.webp"
              alt={t("about:photoAlt")}
              width={1000}
              height={1000}
              className="card-hard w-64 h-64 object-cover object-center"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Skills & Tools */}
      <AnimatedSection className="px-4 sm:px-6 py-10">
        <div className="mx-auto max-w-content">
          <div className="flex flex-col items-center md:items-start">
            <SectionTitle as="h2">{t("about:skills.title")}</SectionTitle>
          </div>
          {/* Desktop: two-column grid, source order (Development, Design, Tools, Language) */}
          <div className="mt-8 hidden md:grid grid-cols-2 gap-6">
            {skillGroups.map((g) => (
              <SkillGroupCard key={g.id} group={g} />
            ))}
          </div>
          {/* Mobile: Tools, Language, Development, Design */}
          <div className="mt-8 md:hidden grid gap-6">
            {orderedForMobile.map((g) => (
              <SkillGroupCard key={g.id} group={g} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Experience */}
      <AnimatedSection className="px-4 sm:px-6 py-10">
        <div className="mx-auto max-w-content">
          <div className="flex flex-col items-center md:items-start">
            <SectionTitle as="h2">{t("about:experience.title")}</SectionTitle>
          </div>
          <div className="mt-8 flex flex-col gap-5">
            {experience.map((item) => {
              const base = `about:experience.items.${item.translationKey}`;
              return (
                <article key={item.id} className="card-hard p-5 sm:p-6">
                  {/* Mobile: date on top */}
                  <p className="md:hidden text-xs text-muted-ink font-medium">{item.date}</p>
                  <div className="mt-2 md:mt-0 md:flex md:items-start md:justify-between md:gap-6">
                    <div className="min-w-0">
                      <h3 className="text-lg font-extrabold">{t(`${base}.role`)}</h3>
                      <p className="text-sm text-muted-ink">{t(`${base}.company`)}</p>
                    </div>
                    <p className="hidden md:block text-sm text-muted-ink font-medium shrink-0">
                      {item.date}
                    </p>
                  </div>
                  <p className="mt-3 text-sm text-muted-ink leading-relaxed hidden md:block">
                    {t(`${base}.description`)}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Education */}
      <AnimatedSection className="px-4 sm:px-6 py-10">
        <div className="mx-auto max-w-content">
          <div className="flex flex-col items-center md:items-start">
            <SectionTitle as="h2">{t("about:education.title")}</SectionTitle>
          </div>
          <div className="mt-8 flex flex-col gap-5">
            {education.map((item) => {
              const base = `about:education.items.${item.translationKey}`;
              return (
                <article key={item.id} className="card-hard p-5 sm:p-6">
                  <p className="md:hidden text-xs text-muted-ink font-medium">{item.date}</p>
                  <div className="mt-2 md:mt-0 md:flex md:items-start md:justify-between md:gap-6">
                    <div className="min-w-0">
                      <h3 className="text-lg font-extrabold">{t(`${base}.course`)}</h3>
                      <p className="text-sm text-muted-ink">{t(`${base}.institution`)}</p>
                    </div>
                    <p className="hidden md:block text-sm text-muted-ink font-medium shrink-0">
                      {item.date}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
