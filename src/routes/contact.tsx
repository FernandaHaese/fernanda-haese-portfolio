import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";
import { SectionTitle } from "@/components/SectionTitle";
import i18n from "@/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: i18n.t("contact:meta.title") },
      { name: "description", content: i18n.t("contact:meta.description") },
      { property: "og:title", content: i18n.t("contact:meta.title") },
      { property: "og:description", content: i18n.t("contact:meta.description") },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useTranslation("contact");
  return (
    <div className="pb-8 px-4 sm:px-6 pt-10 sm:pt-16">
      <div className="mx-auto max-w-2xl">
        <AnimatedSection>
          <div className="text-center">
            <SectionTitle as="h1" align="center">
              {t("title")}
            </SectionTitle>
            <p className="mt-4 text-muted-ink">{t("description")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection className="mt-10">
          <ContactForm />
        </AnimatedSection>
      </div>
    </div>
  );
}
