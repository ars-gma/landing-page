import * as React from "react";
import { SEO as Seo } from "../components/seo";
import { Layout } from "../components/layout";

const ProvidersPage = () => {
  return (
    <Layout>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-32">
        <div className="mt-4 mb-8">
          <h1 className="text-pretty text-5xl font-bold">Directorio Médico</h1>
        </div>
      </main>
    </Layout>
  );
};

export default ProvidersPage;

export const Head = () => (
  <Seo title="ARS GMA - Tu salud protegida | Prestadores" />
);
