import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import i18n from "@/i18n";
import { projectCategories, projects, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: i18n.t("portfolio:meta.title") },
      { name: "description", content: i18n.t("portfolio:meta.description") },
      { property: "og:title", content: i18n.t("portfolio:meta.title") },
      { property: "og:description", content: i18n.t("portfolio:meta.description") },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

function Portfolio() {
  const { t } = useTranslation(["portfolio", "common"]);
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const [visible, setVisible] = useState(6);

  const filtered = projects.filter((p) => filter === "all" || p.categories.includes(filter));
  const shown = filtered.slice(0, visible);

  return (
    <div className="pb-8 px-4 sm:px-6 pt-10 sm:pt-16">
      <div className="mx-auto max-w-content">
        <div className="text-center">
          <SectionTitle as="h1" align="center" className="hidden sm:inline-block">
            {t("portfolio:titleDesktop")}
          </SectionTitle>
          <SectionTitle as="h1" align="center" className="sm:hidden inline-block">
            {t("portfolio:titleMobile")}
          </SectionTitle>
        </div>

        <AnimatedSection className="mt-8">
          <ul
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
            role="tablist"
            aria-label={t("portfolio:titleDesktop")}
          >
            {projectCategories.map((cat) => {
              const active = filter === cat;
              return (
                <li key={cat}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => {
                      setFilter(cat);
                      setVisible(6);
                    }}
                    className={cn(
                      "btn-hard btn-hard-hover px-3 sm:px-4 py-1.5 text-sm font-semibold min-h-9",
                      active ? "bg-lilac" : "bg-card",
                    )}
                  >
                    {t(`portfolio:filters.${cat}`)}
                  </button>
                </li>
              );
            })}
          </ul>
        </AnimatedSection>

        <div className="mt-10">
          {shown.length === 0 ? (
            <p className="text-center text-muted-ink">{t("portfolio:empty")}</p>
          ) : (
            <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {shown.map((p) => (
                  <motion.div
                    key={p.slug}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ProjectCard project={p} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        {visible < filtered.length && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + 6)}
              className="btn-hard btn-hard-hover bg-card px-5 py-2.5 font-semibold min-h-11"
            >
              {t("portfolio:seeMore")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
