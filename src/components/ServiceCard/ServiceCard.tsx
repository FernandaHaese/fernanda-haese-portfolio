import { useTranslation } from "react-i18next";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const { t } = useTranslation("home");
  const base = `services.items.${service.translationKey}`;
  return (
    <article className="card-hard p-5 sm:p-6 flex flex-col gap-3 h-full">
      <h3 className="text-lg font-extrabold">{t(`${base}.title`)}</h3>
      <p className="text-sm text-muted-ink flex-1">{t(`${base}.description`)}</p>
      {/* TODO: substituir por imagem/ilustração do serviço */}
      <div className="mt-2 aspect-[4/3] bg-placeholder rounded-lg" aria-hidden="true" />
    </article>
  );
}
