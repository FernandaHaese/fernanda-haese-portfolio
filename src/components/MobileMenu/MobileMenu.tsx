import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "@/components/LanguageSelector";
import { SocialLinks } from "@/components/SocialLinks";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", key: "home" },
  { to: "/portfolio", key: "portfolio" },
  { to: "/about", key: "about" },
  { to: "/contact", key: "contact" },
] as const;

export function MobileMenu({
  open,
  onClose,
  panelId,
}: {
  open: boolean;
  onClose: () => void;
  panelId: string;
}) {
  const { t } = useTranslation("common");

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-ink/40"
            aria-hidden="true"
          />
          <motion.div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label={t("navigation.home")}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm bg-primary-foreground border-l-2 border-ink shadow-(--shadow-offset-log) flex flex-col overflow-y-auto"
          >
            <div className="flex items-center justify-between p-4 border-b-2 border-ink">
              <span className="font-extrabold text-lg">{t("brand")}</span>
              <button
                type="button"
                onClick={onClose}
                aria-label={t("buttons.closeMenu")}
                className="btn-hard btn-hard-hover bg-lilac inline-flex items-center justify-center h-11 w-11"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1  p-6">
              <ul className="flex flex-col gap-2">
                {NAV.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={onClose}
                      activeOptions={{ exact: item.to === "/" }}
                      className={cn(
                        "block rounded-lg px-3 py-3 text-lg font-semibold min-h-11",
                        "hover:bg-lilac-soft data-[status=active]:bg-lilac",
                      )}
                    >
                      {t(`navigation.${item.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="p-6 border-t-2 border-ink">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-ink mb-3">
                {t("language.label")}
              </p>
              <LanguageSelector variant="stacked" />
            </div>
            <div className="p-6 border-t-2 border-ink">
              <SocialLinks />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
