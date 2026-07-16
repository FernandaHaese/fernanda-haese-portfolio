import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const LANGS = [
  { code: "en", flag: "🇺🇸" },
  { code: "pt", flag: "🇧🇷" },
] as const;

export function LanguageSelector({
  variant = "inline",
  className,
}: {
  variant?: "inline" | "stacked";
  className?: string;
}) {
  const { t, i18n } = useTranslation("common");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGS.find((l) => i18n.language?.startsWith(l.code)) ?? LANGS[0];

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const change = (code: string) => {
    void i18n.changeLanguage(code);
    setOpen(false);
  };

  if (variant === "stacked") {
    return (
      <div
        className={cn("flex flex-col gap-2", className)}
        role="group"
        aria-label={t("language.label")}
      >
        {LANGS.map((l) => {
          const active = i18n.language?.startsWith(l.code);
          return (
            <button
              key={l.code}
              type="button"
              onClick={() => change(l.code)}
              aria-pressed={active}
              className={cn(
                "btn-hard btn-hard-hover flex items-center justify-between gap-3 px-4 py-2 min-h-11 font-semibold",
                active ? "bg-lilac text-ink" : "bg-card text-ink",
              )}
            >
              <span className="flex items-center gap-2">
                <span aria-hidden>{l.flag}</span>
                <span>{t(`language.${l.code}`)}</span>
              </span>
              {active && <Check className="h-4 w-4" aria-hidden />}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("language.label")}
        className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium hover:bg-lilac-soft/70 min-h-9"
      >
        <span aria-hidden>{current.flag}</span>
        <span>{t(`language.${current.code}`)}</span>
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label={t("language.label")}
          className="absolute right-0 z-50 mt-2 min-w-40 card-hard p-1"
        >
          {LANGS.map((l) => {
            const active = i18n.language?.startsWith(l.code);
            return (
              <li key={l.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => change(l.code)}
                  className={cn(
                    "flex w-full items-center justify-between gap-2 rounded-md px-3 py-2 text-sm font-medium min-h-10",
                    active ? "bg-card" : "hover:font-bold",
                  )}
                >
                  <span className="flex items-center gap-2">
                    <span aria-hidden>{l.flag}</span>
                    <span>{t(`language.${l.code}`)}</span>
                  </span>
                  {active && <Check className="h-4 w-4" aria-hidden />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
