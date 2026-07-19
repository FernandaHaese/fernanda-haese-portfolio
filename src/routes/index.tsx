import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import i18n from "@/i18n";
import { projectCategories, projects, type ProjectCategory } from "@/data/projects";
import { services } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    FinisherHeader?: new (config: Record<string, unknown>) => unknown;
  }
}

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
  const finisherInitialized = useRef(false);
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const [visible, setVisible] = useState(6);

  const filtered = projects.filter((p) => filter === "all" || p.categories.includes(filter));
  const shown = filtered.slice(0, visible);

  useEffect(() => {
    if (finisherInitialized.current) return;
    if (!window.FinisherHeader) return;

    // A animação em canvas não respeita o CSS de reduced motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    finisherInitialized.current = true;

    new window.FinisherHeader({
      count: 12,
      size: {
        min: 1300,
        max: 1500,
        pulse: 0,
      },
      speed: {
        x: {
          min: 0.6,
          max: 3,
        },
        y: {
          min: 0.6,
          max: 3,
        },
      },
      colors: {
        background: "#fdf8e1",
        particles: ["#f5c518", "#e5b8f4"],
      },
      blending: "screen",
      opacity: {
        center: 0.6,
        edge: 0,
      },
      skew: 0,
      shapes: ["c"],
    });
  }, []);

  return (
    <div className="pb-8">
      {/* HERO */}
      <section className="finisher-header relative isolate overflow-hidden px-4 sm:px-6 pt-32 sm:pt-36 lg:pt-40 pb-14 sm:pb-20">
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight">
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
      <AnimatedSection className="bg-card border-y-2 border-ink px-4 sm:px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-content grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
          <div className="max-w-xl mx-auto text-center md:mx-0 md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <SectionTitle as="h2">{t("home:about.title")}</SectionTitle>
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
            <p className="mt-6 text-muted-ink leading-relaxed">{t("home:about.description")}</p>
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
              <a
                href={siteConfig.cvPath}
                download
                className="btn-hard btn-hard-hover bg-lilac px-4 py-2 font-semibold min-h-11"
              >
                {t("common:buttons.downloadCV")}
              </a>
              <Link
                to="/about"
                className="btn-hard btn-hard-hover bg-card px-4 py-2 font-semibold min-h-11 inline-flex items-center gap-1.5"
              >
                {t("common:buttons.details")} <ArrowRight className="h-4 w-4" aria-hidden />
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

      {/* SERVICES */}
      <AnimatedSection className="px-4 sm:px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-content">
          <div className="text-center max-w-2xl mx-auto">
            <SectionTitle as="h2" align="center">
              {t("home:services.title")}
            </SectionTitle>
            <p className="mt-4 text-muted-ink">{t("home:services.description")}</p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* PORTFOLIO */}
      <AnimatedSection className="bg-card border-y-2 border-ink px-4 sm:px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-content">
          <div className="text-center">
            <SectionTitle as="h2" align="center">
              {t("home:recentWork.title")}
            </SectionTitle>
          </div>
          <ul
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6"
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
        <div className="mx-auto max-w-2xl mt-6">
          <ContactForm compact />
        </div>
      </AnimatedSection>
    </div>
  );
}
