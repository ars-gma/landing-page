import * as React from "react";
import { SEO as Seo } from "../components/seo";
import { Link } from "../components/link";
import { ExternalLink } from "../components/externalLink";
import { Layout } from "../components/layout";
import { LINKS } from "../components/header";

const features = [
  {
    name: "Online.",
    description: (
      <>
        A través de esta página web puedes contratar tu seguro médico desde casa
        o empresas y con la máxima seguridad de tus datos personales. Puedes
        acceder desde aquí Contratar o pulsando sobre el enlace de{" "}
        <strong>contratación</strong> que aparece junto con la información de
        cada uno de nuestros Planes de Salud. Ademas podras descargar los
        formularios de afiliación y enviarnoslo via fax.
        <br />
        <br />
        <ExternalLink
          className="table-cell"
          href="http://www.arsgma.com/files/F005_GMA.pdf"
        >
          Formulario para titulares
        </ExternalLink>
        <br />
        <ExternalLink href="http://www.arsgma.com/files/F006_GMA.pdf">
          Formulario para dependientes
        </ExternalLink>
      </>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute top-1 left-1 size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
  {
    name: "Por teléfono.",
    description: (
      <>
        Contactando directamente con nuestro{" "}
        <Link href={LINKS.contactUs} className="font-semibold hover:underline">
          Departamento de Servicios al Cliente
        </Link>{" "}
        en donde le brindaremos la mejor atención.
      </>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute top-1 left-1 size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
        />
      </svg>
    ),
  },
  {
    name: "En nuestras Oficinas.",
    description:
      "Contamos con oficinas repartidas por todo el territorio nacional, en las cuales recibiran la atencion que usted se merece a la hora de la contratacion de cualquier de nuestros servicios que estan a su disposicion.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute top-1 left-1 size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
  },
];

const SubsidiaryPage = () => {
  return (
    <Layout>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-32">
        <div className="mt-16 md:mt-4 mb-8">
          <h1 className="text-pretty text-5xl font-black">Afiliación</h1>
        </div>
        <div className="overflow-hidden py-6">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pt-4 lg:pr-8">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    Más fácil para ti
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-600">
                    En <span className="text-lg/4 text-semibold">ARSGMA</span>{" "}
                    queremos tu bienestar y facilidad para todo proceso de
                    afiliacion, por eso habilitamos diferentes maneras de
                    contratar de nuestros servicios
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          {/* <feature.icon
                            aria-hidden="true"
                            className="absolute top-1 left-1 size-5 text-indigo-600"
                          /> */}
                          {feature.icon}
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div>
                <img
                  alt=""
                  src="https://t4.ftcdn.net/jpg/02/99/17/59/360_F_299175978_79jK6qiH1awsZjJvIOV5R8jPVEfJ7go5.jpg"
                  width={2432}
                  height={1442}
                  className="object-cover w-[48rem] rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[64rem] md:-ml-4 lg:ml-[1rem]"
                />
                <img
                  alt=""
                  src="https://media.istockphoto.com/id/1012323872/photo/medical-insurance-concept-with-family-and-stethoscope-on-wooden-desk.jpg?s=612x612&w=0&k=20&c=fBRwbx_iRR50Kr4uw_ofRrq7nRryP_BeCm5doXpX2Sc="
                  width={2432}
                  height={1442}
                  className="object-cover w-[32rem] rounded-xl ring-1 shadow-xl ring-gray-400/10 mt-[3rem] ml-[-1rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default SubsidiaryPage;

export const Head = () => (
  <Seo title="ARS GMA - Tu salud protegida | Afíliate" />
);
