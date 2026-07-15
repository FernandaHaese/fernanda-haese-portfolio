import { Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

// Behance icon — Lucide doesn't ship one; inline SVG matches size + strokeWidth
function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M7.799 5.5c.98 0 1.86.08 2.66.35.79.26 1.46.6 2 1.05.53.44.94.99 1.22 1.63.29.65.43 1.4.43 2.26 0 .92-.21 1.7-.63 2.32-.42.63-1.05 1.14-1.87 1.55 1.12.32 1.96.9 2.51 1.72.55.82.83 1.82.83 2.98 0 .94-.18 1.75-.55 2.44-.36.68-.86 1.24-1.48 1.68-.63.44-1.35.77-2.17.98-.81.21-1.66.32-2.55.32H0V5.5h7.799zM7.4 12.4c.72 0 1.31-.17 1.77-.52.46-.34.69-.9.69-1.68 0-.43-.08-.79-.23-1.06-.15-.28-.36-.5-.62-.66-.26-.16-.56-.27-.9-.34-.34-.06-.7-.09-1.06-.09H3.4v4.35H7.4zm.22 7.28c.4 0 .78-.04 1.13-.11.36-.08.67-.21.94-.4.27-.19.49-.44.65-.76.16-.32.24-.72.24-1.2 0-.94-.27-1.62-.79-2.03-.53-.4-1.23-.6-2.11-.6H3.4v5.1h4.22zM19.06 19.86c.47.45 1.15.68 2.03.68.63 0 1.18-.16 1.63-.48.46-.32.74-.66.85-1.02H26c-.38 1.18-.97 2.03-1.75 2.54-.79.51-1.74.77-2.85.77-.78 0-1.48-.12-2.11-.37-.62-.25-1.15-.6-1.59-1.06a4.66 4.66 0 01-1-1.61 6.11 6.11 0 01-.35-2.1c0-.74.12-1.42.36-2.05.24-.63.58-1.18 1.02-1.64.44-.46.96-.82 1.57-1.08.6-.26 1.27-.4 2-.4.82 0 1.53.16 2.13.48.61.32 1.11.75 1.5 1.28.4.54.68 1.15.87 1.84.17.68.23 1.4.19 2.15h-6.83c0 .81.28 1.62.75 2.07zm3.57-5.6c-.38-.4-.99-.62-1.75-.62-.5 0-.92.09-1.24.26-.32.17-.58.38-.77.62-.19.24-.32.49-.4.76-.07.26-.11.5-.13.7h4.24c-.12-.66-.34-1.16-.72-1.56zM17.5 6.9h5.3v1.36h-5.3V6.9z" />
    </svg>
  );
}

export function SocialLinks({
  className,
  iconClassName,
  variant = "lilac",
}: {
  className?: string;
  iconClassName?: string;
  variant?: "lilac" | "outline";
}) {
  const { t } = useTranslation("common");
  const btnBase =
    "btn-hard btn-hard-hover inline-flex items-center justify-center min-h-11 min-w-11 h-11 w-11";
  const btnVariant =
    variant === "lilac" ? "bg-lilac text-ink" : "bg-card text-ink";

  const items = [
    { key: "behance", href: siteConfig.socialLinks.behance, icon: BehanceIcon, label: t("social.behance") },
    { key: "linkedin", href: siteConfig.socialLinks.linkedin, icon: Linkedin, label: t("social.linkedin") },
    { key: "github", href: siteConfig.socialLinks.github, icon: Github, label: t("social.github") },
  ];

  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {items.map(({ key, href, icon: Icon, label }) => (
        <li key={key}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={label}
            className={cn(btnBase, btnVariant)}
          >
            <Icon className={cn("h-5 w-5", iconClassName)} />
          </a>
        </li>
      ))}
    </ul>
  );
}
