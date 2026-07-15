import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "@/components/LanguageSelector";
import { SocialLinks } from "@/components/SocialLinks";
import { MobileMenu } from "@/components/MobileMenu";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", key: "home" },
  { to: "/portfolio", key: "portfolio" },
  { to: "/about", key: "about" },
  { to: "/contact", key: "contact" },
] as const;

export function Header() {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(false);
  const panelId = "mobile-menu-panel";

  return (
    <header className="w-full pt-4 sm:pt-6 px-4 sm:px-6">
      <div className="mx-auto max-w-[var(--container-content)]">
        <div className="card-hard rounded-full flex items-center gap-4 px-4 sm:px-6 py-2.5 sm:py-3">
          <Link to="/" className="font-extrabold text-base sm:text-lg tracking-tight shrink-0">
            {t("brand")}
          </Link>

          <nav
            className="hidden lg:flex flex-1 items-center justify-center gap-6"
            aria-label={t("navigation.home")}
          >
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className={cn(
                  "text-sm font-medium px-2 py-1 rounded-md hover:text-ink",
                  "data-[status=active]:font-bold data-[status=active]:text-ink",
                )}
                activeProps={{ "aria-current": "page" }}
              >
                {t(`navigation.${item.key}`)}
              </Link>
            ))}
            <LanguageSelector />
          </nav>

          <div className="hidden lg:flex items-center gap-3 ml-auto">
            <SocialLinks />
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t("buttons.openMenu")}
            aria-expanded={open}
            aria-controls={panelId}
            className="lg:hidden ml-auto btn-hard btn-hard-hover bg-lilac inline-flex items-center justify-center h-11 w-11"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} panelId={panelId} />
    </header>
  );
}
