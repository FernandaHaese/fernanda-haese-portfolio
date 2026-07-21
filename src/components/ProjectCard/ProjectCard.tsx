import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation(["projects", "common"]);
  const key = `items.${project.translationKey}`;
  return (
    <article className="card-hard overflow-hidden flex flex-col h-full">
      {project.thumbnail ? (
        <img
          src={project.thumbnail}
          alt={t(`${key}.coverAlt`)}
          width={1600}
          height={1200}
          loading="lazy"
          className="aspect-4/3 w-full object-cover border-b-2 border-ink"
        />
      ) : (
        <div className="aspect-4/3 bg-placeholder border-b-2 border-ink" aria-hidden="true" />
      )}
      <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
        <h3 className="text-lg sm:text-xl font-extrabold text-ink">{t(`${key}.title`)}</h3>
        <p className="text-sm text-muted-ink flex-1">{t(`${key}.shortDescription`)}</p>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            to="/portfolio/$slug"
            params={{ slug: project.slug }}
            className="btn-hard btn-hard-hover bg-lilac text-ink items-center  px-3 py-1.5 text-sm font-semibold min-h-9"
          >
            {t("common:buttons.details")}
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hard btn-hard-hover bg-card text-ink inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold min-h-9"
            >
              {t("common:buttons.visit")}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
