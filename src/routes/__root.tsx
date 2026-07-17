import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

import appCss from "../styles.css?url";
import "../i18n";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  const { t } = useTranslation("common");
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-black">404</h1>
        <h2 className="mt-4 text-xl font-bold">{t("notFound.title")}</h2>
        <p className="mt-2 text-sm text-muted-ink">{t("notFound.description")}</p>
        <Link
          to="/"
          className="mt-6 inline-flex btn-hard btn-hard-hover bg-lilac text-ink px-5 py-2.5 font-semibold"
        >
          {t("notFound.cta")}
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-bold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-ink">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-hard btn-hard-hover bg-lilac px-4 py-2 font-semibold"
          >
            Try again
          </button>
          <a href="/" className="btn-hard btn-hard-hover bg-card px-4 py-2 font-semibold">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Fernanda Haese | Designer & Front-End Developer" },
      {
        name: "description",
        content:
          "Portfolio of Fernanda Haese — Digital Designer and Front-End Developer creating clean, accessible interfaces.",
      },
      { property: "og:title", content: "Fernanda Haese | Designer & Front-End Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Fernanda Haese — Digital Designer and Front-End Developer creating clean, accessible interfaces.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Fernanda Haese" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#FDF8E1" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/Logo.png", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Fernanda Haese",
          jobTitle: "Digital Designer & Front-End Developer",
          url: "/",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <script src="/finisher-header.es5.min.js" />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:bg-lilac focus:text-ink focus:px-3 focus:py-2 focus:rounded-md focus:border-2 focus:border-ink focus:font-semibold"
      >
        Skip to main content
      </a>
      <div className="min-h-dvh flex flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
