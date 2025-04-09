import React, { useState } from "react";
import { SEO as Seo } from "../components/seo";
import { Layout } from "../components/layout";
import { Button } from "../components/button";
import Background from "../images/hero-background.png";
import Provider1Logo from "../images/provider-1-logo.png";
import Provider2Logo from "../images/provider-2-logo.png";
import Provider3Logo from "../images/provider-3-logo.png";
import Provider4Logo from "../images/provider-4-logo.png";
import Provider5Logo from "../images/provider-5-logo.png";
import { LINKS } from "../components/header";
import { Tabs } from "../components/tabs";
import { PricingCard } from "../components/pricingCard";

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
  const [activeTabIndex, setActiveTabIndex] = useState(1);

  return (
    <Layout>
      <main>
        <section
          id="home"
          className="relative isolate px-6 pt-4 md:pt-32 lg:px-8 bg-zinc-50 bg-[url(../images/hero-background-2.png)] bg-bottom bg-cover bg-no-repeat"
        >
          <img
            decoding="async"
            src="https://www.arsfuturo.com/wp-content/plugins/webteck-core/assets/img/shape/shape_2.png"
            alt=""
            className="hidden sm:block absolute top-[10rem] left-[20%] z-[-1] animate-[spin_15s_infinite]"
          />
          <img
            decoding="async"
            src="https://www.arsfuturo.com/wp-content/plugins/webteck-core/assets/img/shape/shape_3.png"
            alt=""
            className="hidden sm:block absolute top-[42rem] left-[40%] z-[-1] animation-sideToSide"
          />
          <img
            decoding="async"
            src="https://www.arsfuturo.com/wp-content/plugins/webteck-core/assets/img/shape/hero-shape2.png"
            alt=""
            className="hidden sm:block absolute top-[12rem] left-[60%] z-[-1] animate-[bounce_3s_infinite]"
          />
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 h-full w-full md:px-32">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 ">
              <h1 className="text-5xl font-bold tracking-tight text-balance sm:text-8xl font-black">
                Protegiendo tu salud
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500">
                En ARS GMA, contamos con una amplia Red de Prestadoras de
                Servicios de Salud, las cuales están ubicadas de una manera
                estratégica para garantizar los servicios en todo el país con
                los estándares mas altos de calidad en sus areas a fines.
              </p>
              <div className="mt-10 flex items-center justify-left gap-x-6">
                <Button
                  href={LINKS.register}
                  className="animation-pulse transition-discrete bg-gradient2"
                >
                  Afiliate con nosotros
                </Button>
              </div>
            </div>
            <div className="bg-white h-fit w-[80%] p-[1rem] rounded-xl shadow-lg hidden md:block md:mt-[8rem] md:ml-[8rem]">
              <img src={Background} alt="" />
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
        </section>

        <section id="providers" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-base/7 font-semibold text-blue-600">
              Prestadoras de Servicios de Salud
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                alt=""
                src={Provider1Logo}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <img
                alt=""
                src={Provider2Logo}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <img
                alt=""
                src={Provider3Logo}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <img
                alt=""
                src={Provider4Logo}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              />
              <img
                alt=""
                src={Provider5Logo}
                width={158}
                height={48}
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              />
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button href={LINKS.providers} className="rpx-3.5 py-2.5">
                Ver todos
              </Button>
            </div>
          </div>
        </section>

        <section id="stats" class="px-3 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <p className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
              Siempre mejorando para dar lo mejor
            </p>
          </div>
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div class="mx-auto flex flex-wrap content-center justify-center max-w-xs flex-col gap-y-4 bg-white/60 rounded-3xl px-8 py-4 ring-1 ring-gray-900/10">
                <dt class="text-base leading-7 text-gray-700">
                  Prestadoras de servicios de salud
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  <span class="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-providers)] before:content-[counter(num)]">
                    <span class="sr-only">6000</span>
                  </span>
                </dd>
              </div>
              <div class="mx-auto flex flex-wrap content-center justify-center max-w-xs flex-col gap-y-4 bg-white/60 rounded-3xl px-8 py-4 ring-1 ring-gray-900/10">
                <dt class="text-base leading-7 text-gray-700">
                  Programa de prevención y promoción
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  <span class="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-pocs)] before:content-[counter(num)]">
                    <span class="sr-only">13</span>
                  </span>
                </dd>
              </div>
              <div class="mx-auto flex flex-wrap content-center justify-center max-w-xs flex-col gap-y-4 bg-white/60 rounded-3xl px-8 py-4 ring-1 ring-gray-900/10">
                <dt class="text-base leading-7 text-gray-700">
                  Puntos de servicio al cliente
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  <span class="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-programs)] before:content-[counter(num)] before:left-[calc(0.4em * var(--n, 1))]">
                    <span class="sr-only">6</span>
                  </span>
                </dd>
              </div>
            </dl>
          </div>
          <div className="mx-auto max-4xl text-center mt-4">
            <p className="mt-6 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
              Nuestro objetivo es acercanos a nuestros clientes, puedes
              encontrar más sobre nosotros en nuestra guía médica.
              <br />
              <br />
              <a
                href={"/guia_medica.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-xl bg-blue-700 px-12 py-4 text-md font-pretty text-white shadow-xs hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                download
              >
                Descargar
              </a>
            </p>
          </div>
        </section>

        <section
          id="plans"
          className="relative isolate px-3 py-24 sm:py-32 lg:px-8"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base/7 font-semibold text-primary">Planes</h2>
            <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
              Elije el plan que más te convenga
            </p>
          </div>
          <Tabs
            data={tabsData}
            activeTabIndex={activeTabIndex}
            onClick={(e) => setActiveTabIndex(e)}
          />
        </section>

        <section
          id="health"
          className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
        >
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              aria-hidden="true"
              className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            >
              <defs>
                <pattern
                  x="50%"
                  y={-1}
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                width="100%"
                height="100%"
                strokeWidth={0}
              />
            </svg>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base/7 font-semibold text-blue-600">
                    Tu Salud
                  </p>
                  <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    La Promoción de la Salud
                  </h1>
                  <p className="mt-6 text-xl/8 text-gray-700">
                    Es considerada como uno de los pilares de la acción de la
                    salud pública; es una estrategia transformadora que
                    involucra al individuo y a su medio social donde tiene como
                    objetivo proporcionar los medios necesarios para mejorar la
                    salud y ejercer un mayor control sobre la misma.
                  </p>
                </div>
              </div>
            </div>
            <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="https://www.gruporecoletas.com/noticias/wp-content/uploads/2022/01/UPS-web.png"
                className="w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
              />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                  <p>
                    La Promoción de la Salud plantea cinco vertientes claves:
                  </p>
                  <ul className="mt-8 space-y-4 text-gray-600">
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="mt-1 size-5 flex-none text-blue-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                        />
                      </svg>

                      <span>
                        <strong className="font-semibold text-gray-900">
                          Políticas saludables
                        </strong>
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="mt-1 size-5 flex-none text-blue-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                        />
                      </svg>

                      <span>
                        <strong className="font-semibold text-gray-900">
                          Fortalecimiento de la participación social
                        </strong>
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="mt-1 size-5 flex-none text-blue-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                        />
                      </svg>

                      <span>
                        <strong className="font-semibold text-gray-900">
                          Fortalecimiento de destrezas y potencialidades
                          individuales
                        </strong>
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="mt-1 size-5 flex-none text-blue-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                        />
                      </svg>

                      <span>
                        <strong className="font-semibold text-gray-900">
                          Creación de entornos saludables
                        </strong>
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="mt-1 size-5 flex-none text-blue-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                        />
                      </svg>

                      <span>
                        <strong className="font-semibold text-gray-900">
                          Reorientación de los servicios de salud
                        </strong>
                      </span>
                    </li>
                  </ul>
                  <p className="mt-8">
                    La Promoción de la Salud y la Prevención de las Enfermedades
                    son todas aquellas acciones, procedimientos e intervenciones
                    integrales, orientadas a que la población, como individuos y
                    como familias, mejoren sus condiciones para vivir y
                    disfrutar de una vida saludable y para mantenerse sanos. El
                    propósito de los programas de Promoción y Prevención es
                    ofrecer servicios integrales que potencialicen la salud de
                    los afiliados y sus familias, y promuevan en ellos una vida
                    más digna, feliz, placentera y productiva.
                  </p>
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                    Temas a desarrollar
                  </h2>
                  <p className="mt-6">
                    Con estos Programas se busca que los individuos y las
                    familias, en conjunto con sus servicios de salud,
                    desarrollen acciones y lleven a cabo comportamientos,
                    prácticas y actitudes personales, colectivas y duraderas,
                    que mejoren su bienestar y calidad de vida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="py-24">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
              <div class="w-full lg:w-1/2">
                <img
                  src="https://pagedone.io/asset/uploads/1696230182.png"
                  alt=""
                  class="w-full rounded-xl object-cover shadow-xl ring-gray-400/10"
                />
              </div>
              <div class="w-full lg:w-1/2">
                <div class="lg:max-w-xl">
                  <div class="mb-6 lg:mb-16">
                    <h6 class="text-lg text-center font-medium text-blue-600 mb-2 lg:text-left">
                      Preguntas frecuentas
                    </h6>
                    <h2 class="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 lg:text-left">
                      ¿Tienes algunas dudas?
                    </h2>
                  </div>
                  <div>
                    <div class="pb-8 border-b border-solid border-gray-200">
                      <h5 className="text-base font-semibold text-gray-800">
                        ¿Por qué escoger una compañía y no otra?
                      </h5>
                      <p class="text-base font-normal text-gray-600 ">
                        Ya que contratar un seguro médico se hace pensando en el
                        medio y largo plazo, asegúrate que la compañía tiene
                        prestigio y demostrada experiencia.
                      </p>
                    </div>
                    <div class="py-8 border-b border-solid border-gray-200">
                      <h5 className="text-base font-semibold text-gray-800">
                        ¿Podré elegir el especialista que necesito?
                      </h5>
                      <p class="text-base font-normal text-gray-600 ">
                        La base de un seguro médico está en la libre elección de
                        tu médico, ya sea del cuadro médico propio o bien a
                        través de un producto de reembolso, que te permite
                        también ir a cualquier médico del mundo.
                      </p>
                    </div>
                    <div class="py-8">
                      <h5 className="text-base font-semibold text-gray-800">
                        ¿Podré acceder directamente a todas las coberturas?
                      </h5>
                      <p class="text-base font-normal text-gray-600 ">
                        Previamente a contratar tu seguro médico, consulta si
                        contempla períodos de espera.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button href={LINKS.faqs}>
                      Ver todas las preguntas frecuentes
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo />;
