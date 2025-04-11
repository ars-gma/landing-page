import React, { useState } from "react";
import { SEO as Seo } from "../components/seo";
import { Layout } from "../components/layout";
import { PricingCard } from "../components/pricingCard";
import { HeroSection } from "../components/home/hero";
import { ProvidersSection } from "../components/home/providers";
import { StatsSection } from "../components/home/stats";
import { PlansSection } from "../components/home/plans";
import { HealthSection } from "../components/home/health";
import { FaqsSection } from "../components/home/faqs";
import Logo from "../images/logo.png";

const basicTiers = [
  {
    name: "Plan de Servicio de Salud",
    id: "tier-pssd",
    href: "mailto:correo@arsgma.com?subject=Conocer más sobre el plan de Servicio de Salud&body=Buen dia,%0D%0A%0D%0A Me interesaría saber más sobre el plan de Servicio de Salud.",
    priceMonthly: "$29",
    description: "",
    features: [
      "Prevención & Promoción - Ilimitada",
      "Atención Ambulatoria	- Ilimitada",
      "Odontología - Ilimitada",
      "Emergencia - Ilimitada",
      "Parto Cesarea - Ilimitada",
      "Cirugías - 90%",
      "Hemoterapía - 90%",
      "Apoyo DX	- Ilimitada",
      "Atenciones de alto costo - RD$1,000,000.00 por año",
      "Rehabilitación - Ilimitada",
      "Medicamentos Ambulatorios - RD$3,000.00 por año",
    ],
    featured: true,
  },
];

const complentaryTiers = [
  {
    name: "Real",
    id: "tier-basic",
    href: "mailto:correo@arsgma.com?subject=Conocer más sobre el plan Real&body=Buen dia,%0D%0A%0D%0A Me interesaría saber más sobre el plan Real.",
    priceMonthly: "$29",
    description:
      "Elaborado para satisfacer todos sus necesidades y estandares en el area de la salud preventiva.",
    features: [
      "Laboratorio - Cuota Moderadora 10%",
      "Plan Clásico - Dental Service",
      "Habitación RD$ 3,000.00",
      "Medicamentos Ambulatorios RD$ 5,000.00",
    ],
    featured: false,
  },
  {
    name: "Imperial",
    id: "tier-premium",
    href: "mailto:correo@arsgma.com?subject=Conocer más sobre el plan Imperial&body=Buen dia,%0D%0A%0D%0A Me interesaría saber más sobre el plan Imperial.",
    priceMonthly: "$99",
    description:
      "Elaborado para satisfacer todos sus necesidades y estandares en el area de la salud preventiva.",
    features: [
      "Prevención & Promoción	- Ilimitada",
      "Atención Ambulatoria	- Ilimitada",
      "Laboratorio - No Cuota Moderadora",
      "Plan VIP - Dental Service",
      "Habitación RD$ 4,000.00",
      "Medicamentos Ambulatorios RD$ 7,000.00",
    ],
    featured: true,
  },
];

const volunteerTiers = [
  {
    name: "Voluntario DE",
    id: "volunteer-de",
    href: "mailto:correo@arsgma.com?subject=Conocer más sobre el plan voluntario DE&body=Buen dia,%0D%0A%0D%0A Me interesaría saber más sobre el plan voluntario DE.",
    priceMonthly: "$29",
    description:
      "Es un plan de medicina prepagada en el cual ponemos a tu alcance los servicios de salud que necesitas. Cuentas con una amplia cobertura local en  atención ambulatoria,  ayudas diagnósticas,  servicios de hosptilización, cirugías y parto",
    features: [
      "Laboratios - 70% (RD$5,000.00 por año)",
      "Rayos X - 80% (RD$5,000.00 por año)",
      "Habitación - 100% (RD$2,100.00 por día/ilimitado)",
      "Medicinas de internamiento - 100% (RD$6,000.00 por caso)",
      "Niños nacidos con Problemas - 100% (hasta RD$25,000.00)",
      "Casos catastróficos - Límite anual desde RD$350,000.00",
    ],
    featured: false,
  },
  {
    name: "Voluntario LUXE",
    id: "volunteer-luxe",
    href: "mailto:correo@arsgma.com?subject=Conocer más sobre el plan voluntario LUXE&body=Buen dia,%0D%0A%0D%0A Me interesaría saber más sobre el plan voluntario LUXE.",
    priceMonthly: "$99",
    description:
      "Es un plan de medicina prepagada en el cual ponemos a tu alcance los servicios de salud que necesitas. Cuentas con una amplia cobertura local en  atención ambulatoria,  ayudas diagnósticas,  servicios de hosptilización, cirugías y parto",
    features: [
      "Cobertura ambulatoria - Ilimitadas. Diferencia RD$200.00",
      "Laboratorio - 90% (RD$12,000.00 por año)",
      "Rayos X - 80% (RD$10,000.00 por año)",
      "Estudios especiales - 90% (Ilimitadas)",
      "Habitación - 100% (RD$3,500.00 por día/ilimitado)",
      "Medicinas de internamiento - 100% (RD$10,000.00 por caso)",
      "Niños nacidos con Problemas - 100% (hasta RD$50,000.00)",
      "Casos catastróficos - Límite anual desde RD$1,000,000.00",
    ],
    featured: true,
  },
  {
    name: "Voluntario B",
    id: "volunteer-b",
    href: "mailto:correo@arsgma.com?subject=Conocer más sobre el plan voluntario B&body=Buen dia,%0D%0A%0D%0A Me interesaría saber más sobre el plan voluntario B.",
    priceMonthly: "$59",
    description:
      "Es un plan de medicina prepagada en el cual ponemos a tu alcance los servicios de salud que necesitas. Cuentas con una amplia cobertura local en  atención ambulatoria,  ayudas diagnósticas,  servicios de hosptilización, cirugías y parto",
    features: [
      "Laboratorios - 80% (RD$5,000.00 por año)",
      "Rayos X - 80% (RD$8,000.00 por año)",
      "Habitación - 100% (RD$2,500.00 por día/ilimitado)",
      "Medicinas de internamiento - 100% (RD$10,000.00 por caso)",
      "Niños nacidos con Problemas - 100% (hasta RD$40,000.00)",
      "Casos catastróficos - Límite anual desde RD$500,000.00",
    ],
    featured: false,
  },
];

const tabsData = [
  {
    key: 0,
    label: "Básico",
    content: (
      <>
        <p className="mx-auto mt-6 max-w-4xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
          El Plan de Servicio de Salud (PDSS) es el plan se salud que se
          encargará de asegurar a todos los ciudadanos dominicanos la protección
          integral de su salud física y mental, independientemente de su
          condición social, laboral o económica. De manera adjunta les
          detallamos algunas de las coberturas del plan.
        </p>
        <div className="mx-auto mt-4 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-xl lg:grid-cols-1">
          {basicTiers.map((tier, tierIdx) => (
            <PricingCard data={tier} index={tierIdx} />
          ))}
        </div>
      </>
    ),
  },
  {
    key: 1,
    label: "Complementarios",
    content: (
      <>
        <p className="mx-auto mt-6 max-w-4xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
          Nuestros Planes Complementarios son planes creados para generar un
          aumento de su cobertura dentro del Plan de Servicios de Salud, son
          planes diseñados para esas personas que necesitan algun tipo de
          incremento en su cobertura y al mismo tiempo servicios que este no
          incluye, para un mejoría del mismo.
          <br />
          <br />
          Actualmente poseemos el Plan Real y el Plan Imperial, elaborados para
          satisfacer todos sus necesidades y estandares en el area de la salud
          preventiva.
        </p>
        <div className="mx-auto mt-4 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {complentaryTiers.map((tier, tierIdx) => (
            <PricingCard data={tier} index={tierIdx} />
          ))}
        </div>
      </>
    ),
  },
  {
    key: 2,
    label: "Voluntarios",
    content: (
      <>
        <p className="mx-auto mt-6 max-w-4xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
          Nuestros Planes Voluntarios o Familiares esta disenados pensando en
          satisfacer sus necesidades de salud. Los mismos estan elaborados
          tomando en considereacion los mas altos estanderes de servicios y
          calidad.
        </p>
        <div className="mx-auto mt-4 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-5xl lg:grid-cols-3">
          {volunteerTiers.map((tier, tierIdx) => (
            <PricingCard data={tier} index={tierIdx} />
          ))}
        </div>
      </>
    ),
  },
];

const IndexPage = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  return (
    <Layout>
      <main>
        {isBannerVisible && (
          <div
            id="banner"
            tabindex="-1"
            class="fixed bottom-0 start-0 z-50 flex justify-between w-full p-4 border-t border-gray-200 bg-white"
          >
            <div class="flex flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0">
              <a
                href="https://flowbite.com/"
                class="flex items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:border-e md:mb-0"
              >
                <img src={Logo} class="h-6 me-2" alt="ARS GMA Logo" />
              </a>
              <p class="flex items-center text-sm font-normal text-gray-500">
                <span className="text-md">
                  Encuentra toda la información que necesites en nuestra{" "}
                  <strong>Guía Médica</strong>
                </span>
                .
              </p>
            </div>
            <div class="flex items-center shrink-0">
              <a
                href={"/guia_medica.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                download
                class="px-5 py-2 me-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
              >
                Descargar{" "}
              </a>
              <button
                data-dismiss-target="#banner"
                type="button"
                class="shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5"
                onClick={() => setIsBannerVisible(false)}
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Cerrar cartel</span>
              </button>
            </div>
          </div>
        )}

        <HeroSection />
        <ProvidersSection />
        <StatsSection />
        <PlansSection data={tabsData} />
        <HealthSection />
        <FaqsSection />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo />;
