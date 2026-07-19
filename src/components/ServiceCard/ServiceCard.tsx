import { useTranslation } from "react-i18next";
import { Code2, PanelsTopLeft, MonitorSmartphone, Megaphone, type LucideIcon } from "lucide-react";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

const servicePresentation: Record<string, { icon: LucideIcon; color: string }> = {
  "ux-ui": {
    icon: PanelsTopLeft,
    color: "bg-card",
  },
  "web-design": {
    icon: MonitorSmartphone,
    color: "bg-card",
  },
  frontend: {
    icon: Code2,
    color: "bg-card",
  },
  "digital-presence": {
    icon: Megaphone,
    color: "bg-card",
  },
};

export function ServiceCard({ service }: { service: Service }) {
  const { t } = useTranslation("home");
  const base = `services.items.${service.translationKey}`;
  const presentation = servicePresentation[service.id] ?? {
    icon: Code2,
    color: "bg-card",
  };
  const Icon = presentation.icon;

  return (
    <article className={cn("card-hard h-full p-5 sm:p-6", presentation.color)}>
      <div className="flex items-start gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-lilac-soft"
          aria-hidden="true"
        >
          <Icon className="h-6 w-6" strokeWidth={1.8} />
        </div>

        <div className="min-w-0">
          <h3 className="text-lg font-extrabold">{t(`${base}.title`)}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-ink">{t(`${base}.description`)}</p>
        </div>
      </div>
    </article>
  );
}
