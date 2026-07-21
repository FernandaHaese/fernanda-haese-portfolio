import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionTitle } from "@/components/SectionTitle";
import i18n from "@/i18n";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio_/$slug")({
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

function ProjectImageGallery({
  images,
  title,
  label,
}: {
  images?: string[];
  title: string;
  label: string;
}) {
  if (!images?.length) return null;

  const singleImage = images.length === 1;

  return (
    <div
      className={cn("mt-8 grid gap-4", singleImage ? "mx-auto max-w-3xl" : "sm:grid-cols-2")}
      aria-label={label}
    >
      {images.map((image, index) => {
        const isCenteredLastImage =
          images.length > 1 && images.length % 2 !== 0 && index === images.length - 1;

        return (
          <img
            key={image}
            src={image}
            alt={`${title} — ${label} ${index + 1}`}
            width={1600}
            height={1200}
            loading="lazy"
            className={cn(
              "aspect-4/3 w-full rounded-xl border-2 border-ink object-cover",
              isCenteredLastImage &&
                "sm:col-span-2 sm:w-[calc(50%-0.5rem)] sm:justify-self-center",
            )}
          />
        );
      })}
    </div>
  );
}

function ProjectDetails() {
  const { project } = Route.useLoaderData();
  const { t } = useTranslation(["projects", "common"]);
  const router = useRouter();
  const key = `projects:items.${project.translationKey}`;
  const skills = t(`${key}.skills`)
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean);

  const tagClass =
    "inline-flex items-center rounded-lg border-2 border-ink bg-card px-2.5 py-1 text-xs font-semibold ";

  const goBack = () => {
    if (window.history.length > 1) router.history.back();
    else router.navigate({ to: "/portfolio" });
  };

  return (
    <div className="pb-8 px-4 sm:px-6 pt-6 sm:pt-10 ">
      <div className="mx-auto max-w-content">
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
            <div className="min-w-0 mb-6">
              <SectionTitle as="h1">{t(`${key}.title`)}</SectionTitle>
              <p className="mt-5 text-muted-ink leading-relaxed">{t(`${key}.fullDescription`)}</p>
            </div>
            {project.thumbnail && (
              <img
                src={project.thumbnail}
                alt=""
                width={1600}
                height={1200}
                className="mt-8 aspect-video w-full rounded-xl border-2 border-ink object-cover"
              />
            )}
          </div>
        </AnimatedSection>

        {/* Specifications */}
        <AnimatedSection className="mt-6">
          <div className="card-hard p-6 sm:p-8">
            <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)_minmax(0,0.6fr)_minmax(0,1.8fr)] lg:justify-between ">
              {(["role", "client", "timeline", "skills"] as const).map((k) => (
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

        {/* Process */}
        <AnimatedSection className="mt-6">
          <div className="card-hard p-6 sm:p-8">
            <h2 className="text-xl font-extrabold">
              <span className="title-highlight">{t("labels.process")}</span>
            </h2>
            <p className="mt-4 text-muted-ink leading-relaxed">{t(`${key}.process`)}</p>

            <ProjectImageGallery
              images={project.process}
              title={t(`${key}.title`)}
              label={t("labels.process")}
            />
          </div>
        </AnimatedSection>

        {/* Result + gallery */}
        <AnimatedSection className="mt-6">
          <div className="card-hard p-6 sm:p-8">
            <h2 className="text-xl font-extrabold">
              <span className="title-highlight">{t("labels.result")}</span>
            </h2>
            <p className="mt-4 text-muted-ink leading-relaxed">{t(`${key}.result`)}</p>

            <ProjectImageGallery
              images={project.gallery}
              title={t(`${key}.title`)}
              label={t("labels.gallery")}
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
