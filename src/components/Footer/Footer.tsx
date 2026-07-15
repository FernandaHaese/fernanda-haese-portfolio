import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "@/components/LanguageSelector";
import { SocialLinks } from "@/components/SocialLinks";

const NAV = [
  { to: "/", key: "home" },
  { to: "/portfolio", key: "portfolio" },
  { to: "/about", key: "about" },
  { to: "/contact", key: "contact" },
] as const;

export function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer className="mt-16 sm:mt-24 bg-card border-t-2 border-ink">
      <div className="mx-auto max-w-[var(--container-content)] px-4 sm:px-6 py-8 sm:py-10">
        <div className="hidden md:grid grid-cols-3 items-center gap-6">
          <div className="font-extrabold text-lg">{t("brand")}</div>
          <nav className="flex items-center justify-center gap-6" aria-label="Footer">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="text-sm font-medium hover:underline data-[status=active]:font-bold"
              >
                {t(`navigation.${n.key}`)}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-end gap-3">
            <LanguageSelector />
            <SocialLinks />
          </div>
        </div>

        <div className="md:hidden flex flex-col items-center gap-4">
          <div className="font-extrabold text-lg">{t("brand")}</div>
          <SocialLinks />
        </div>

        <p className="mt-6 text-center text-xs text-muted-ink">
          {t("footer.rights", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
