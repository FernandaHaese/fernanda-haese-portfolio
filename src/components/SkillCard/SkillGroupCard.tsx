import { useTranslation } from "react-i18next";
import type { SkillGroup } from "@/data/skills";

export function SkillGroupCard({ group }: { group: SkillGroup }) {
  const { t } = useTranslation("about");
  return (
    <div className="card-hard p-5 sm:p-6">
      <h3 className="text-base font-extrabold mb-4">
        {t(`skills.groups.${group.id}`)}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li key={item}>
            <span className="inline-flex items-center rounded-lg border-2 border-ink bg-card px-2.5 py-1 text-xs font-semibold shadow-[2px_2px_0_0_#000]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
