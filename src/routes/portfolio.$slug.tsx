import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionTitle } from "@/components/SectionTitle";
import i18n from "@/i18n";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: i18n.t("projects:notFound.title") },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const key = `projects:items.${loaderData.project.translationKey}`;
    const title = `${i18n.t(`${key}.title`)} | Fernanda Haese`;
    const desc = i18n.t(`${key}.shortDescription`);
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/portfolio/${loaderData.project.slug}` },
      ],
      links: [{ rel: "canonical", href: `/portfolio/${loaderData.project.slug}` }],
    };
  },
  notFoundComponent: NotFound,
  component: ProjectDetails,
});

function NotFound() {
  const { t } = useTranslation("projects");
  return (
    <div className="px-4 sm:px-6 py-20 text-center">
      <h1 className="text-3xl font-black">{t("notFound.title")}</h1>
      <p className="mt-3 text-muted-ink">{t("notFound.description")}</p>
      <Link
        to="/portfolio"
        className="mt-6 inline-flex btn-hard btn-hard-hover bg-lilac px-4 py-2 font-semibold"
      >
        {t("notFound.back")}
      </Link>
    </div>
  );
}

function ProjectDetails() {
  const { project } = Route.useLoaderData();
  const { t } = useTranslation(["projects", "common"]);
  const router = useRouter();
  const key = `projects:items.${project.translationKey}`;

  const goBack = () => {
    if (window.history.length > 1) router.history.back();
    else router.navigate({ to: "/portfolio" });
  };

  return (
    <div className="pb-8 px-4 sm:px-6 pt-6 sm:pt-10">
      <div className="mx-auto max-w-4xl">
        <button
          type="button"
          onClick={goBack}
          className="btn-hard btn-hard-hover bg-lilac inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold min-h-9"
        >
          <ArrowLeft className="h-4 w-4" /> {t("common:buttons.back")}
        </button>

        {/* Overview card */}
        <AnimatedSection className="mt-6">
          <div className="card-hard p-6 sm:p-8">
            <SectionTitle as="h1">{t(`${key}.title`)}</SectionTitle>
            <p className="mt-5 text-muted-ink leading-relaxed">{t(`${key}.fullDescription`)}</p>
            <hr className="my-6 border-ink/20" />
            <dl className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 text-sm">
              {(["client", "role", "timeline", "deliverables"] as const).map((k) => (
                <div key={k}>
                  <dt className="text-xs font-bold tracking-wider text-muted-ink">
                    {t(`labels.${k}`)}
                  </dt>
                  <dd className="mt-1 font-semibold">{t(`${key}.${k}`)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </AnimatedSection>

        {/* Brief + Research */}
        <AnimatedSection className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="card-hard p-6">
            <h2 className="text-xl font-extrabold">
              <span className="title-highlight">{t("labels.brief")}</span>
            </h2>
            <p className="mt-4 text-muted-ink leading-relaxed">{t("shared.brief")}</p>
          </div>
          <div className="card-hard p-6">
            <h2 className="text-xl font-extrabold">
              <span className="title-highlight">{t("labels.research")}</span>
            </h2>
            <p className="mt-4 text-muted-ink leading-relaxed">{t("shared.research")}</p>
          </div>
        </AnimatedSection>

        {/* Process */}
        <AnimatedSection className="mt-6">
          <div className="card-hard p-6 sm:p-8">
            <h2 className="text-xl font-extrabold">
              <span className="title-highlight">{t("labels.process")}</span>
            </h2>
            <ol className="mt-6 grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <li key={n} className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-white font-bold text-sm">
                    {n}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-extrabold">{t(`shared.process.step${n}.title`)}</h3>
                    <p className="text-sm text-muted-ink mt-1">
                      {t(`shared.process.step${n}.description`)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </AnimatedSection>

        {/* Result + gallery */}
        <AnimatedSection className="mt-6">
          <div className="card-hard p-6 sm:p-8">
            <h2 className="text-xl font-extrabold">
              <span className="title-highlight">{t("labels.result")}</span>
            </h2>
            <p className="mt-4 text-muted-ink leading-relaxed">{t("shared.result")}</p>

            {/* Gallery placeholders — TODO substituir por galeria real */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2" aria-label={t("labels.gallery")}>
              <div className="bg-placeholder rounded-xl border-2 border-ink aspect-square" />
              <div className="bg-placeholder rounded-xl border-2 border-ink aspect-4/3" />
              <div className="bg-placeholder rounded-xl border-2 border-ink aspect-4/3 sm:col-start-1" />
              <div className="bg-placeholder rounded-xl border-2 border-ink aspect-square" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
