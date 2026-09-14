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

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { BackgroundOrbs } from "@/components/background-orbs";

function NotFoundComponent() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-paper text-brown">
      <BackgroundOrbs />
      <div className="relative mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-4 text-center">
        <h1 className="font-display text-7xl font-bold text-brown">404</h1>
        <h2 className="mt-4 font-display text-xl text-brown">Page not found</h2>
        <p className="mt-2 text-sm text-bark">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-cream"
        >
          Go home
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
    <div className="relative min-h-screen overflow-hidden bg-paper text-brown">
      <BackgroundOrbs />
      <div className="relative mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-4 text-center">
        <h1 className="font-display text-xl font-semibold text-brown">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-bark">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-cream"
          >
            Try again
          </button>
          <Link
            to="/"
            className="rounded-full bg-paper px-4 py-2 text-sm font-semibold text-brown ring-1 ring-brown/20"
          >
            Go home
          </Link>
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
      { title: "Mara Ellison — Software Developer & Digital Advertising Agent" },
      {
        name: "description",
        content:
          "Mara Ellison builds calm software and the warm ad campaigns that bring people to it — one person, the whole story from architecture to audience.",
      },
      { name: "author", content: "Mara Ellison" },
      { property: "og:title", content: "Mara Ellison — Software Developer & Digital Advertising Agent" },
      {
        property: "og:description",
        content:
          "Mara Ellison builds calm software and the warm ad campaigns that bring people to it — one person, the whole story from architecture to audience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Karla:wght@400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
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
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen overflow-hidden bg-paper text-brown">
        <BackgroundOrbs />
        <div className="relative flex min-h-screen flex-col">
          <SiteNav />
          <main className="flex-1">
            <Outlet />
          </main>
          <SiteFooter />
        </div>
      </div>
    </QueryClientProvider>
  );
}
