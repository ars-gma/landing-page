import * as React from "react";
import { SEO as Seo } from "../components/seo";
import { Layout } from "../components/layout";
import { LINKS } from "../components/header";

const NotFoundPage = () => {
  return (
    <Layout>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 h-screen">
        <div className="text-center">
          <p className="text-base text-3xl sm:text-5xl font-semibold text-blue-600">
            404
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Página no encontada
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Lo lamentamos, no pudimos encontrar la página que está buscando.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={LINKS.homeHero}
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Volver al inicio
            </a>
            <a
              href={LINKS.contactUs}
              className="text-sm font-semibold text-gray-900"
            >
              Contactenos <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => (
  <Seo title="ARS GM A- Tu salud protegida | No encontrada" />
);
