import React from "react";

import { SEO as Seo } from "../components/seo";
import { Layout } from "../components/layout";

const AboutUsPage = () => {
  return (
    <Layout>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-32">
        <div className="mt-16 md:mt-4 mb-8">
          <h1 className="text-pretty text-5xl font-black">Nosotros</h1>
        </div>
        <div className="grid pt-8 text-left md:gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-pretty text-xl font-semibold mb-4">
              Nuestra historia
            </h3>
            <p className="text-pretty text-md text-gray-500 mb-12">
              Somos una empresa dedicada a la administración de planes de salud,
              creada el 12 de Octubre del año 1967, pionera en esta
              especialidad. Contamos con una red de proveedores de servicios
              salud (PSS) a nivel nacional, adecuada a los nuevos tiempos.
              <br />
              <br />
              Señalando de sobremanera la Clínica Gómez Patiño por ser parte de
              nuestro grupo, además mencionando nuestra gran gama de Centros de
              Atención Primaria, Hospitales, Policlínicas, Centro de
              Diagnósticos, Servicios de Ambulancia, Farmacias, Medios
              odontológicos, cobertura de enfermedades catastróficas, Centro de
              Fisioterapia y rehabilitación, Laboratorio, entre otros.
              Mencionando también nuestros centros de Servicio al Cliente en
              Santo Domingo, San Cristóbal e Higuey.
              <br />
              <br />
              ARS GMA es un concepto que define nuestro sistema de salud
              personal, cuyo objetivo consiste en mejorar el bienestar de
              nuestros asegurados mediante una relación basada en el servicio y
              satisfacción de sus demandas.
              <br />
              <br />
              Nuestra compañía ofrece un servicio de calidad exclusivo, creado a
              la medida de nuestros clientes cada vez más exigente, que apuesta
              por coberturas amplias, originales y flexibles, un acceso a la
              asistencia directa, inmediato y sin burocracia, uno de los cuadros
              médicos más amplios y prestigiosos en el país, además los
              servicios más novedosos, enfocados a la salud y a un mejor
              conocimiento de la prevención, como el que destacamos en el
              programa de “Prevención y Promoción de la Salud”.
              <br />
            </p>
            <h3 className="text-pretty text-xl font-semibold mb-4">
              Nuestra visión
            </h3>
            <p className="text-pretty text-md text-gray-500 mb-12">
              Ser la ARS de mayor prestigio a Nivel Nacional, trabajando de la
              mano con las mejores PSS, con los más modernos y avanzados
              estándares de calidad, y un Capital Humano eficiente, que nos
              permita cumplir con nuestro deber de poner al alcance de nuestros
              Afiliados con un Optimo Servicio de Salud.
            </p>
            <h3 className="text-pretty text-xl font-semibold mb-4">
              Nuestra misión
            </h3>
            <p className="text-pretty text-md text-gray-500 mb-12">
              Optimizar al Máximo la Administración de Riegos de Salud,
              Garantizando el bienestar y satisfacción total de nuestros
              afiliados, con una atención eficiente y personalizada.
            </p>
            <h3 className="text-pretty text-xl font-semibold mb-4">
              Nuestro valores
            </h3>
            <div className="grid md:gap-2 md:grid-cols-2">
              <h2 className="text-pretty text-3xl font-black">Eficiencia</h2>
              <h2 className="text-pretty text-3xl font-black">Cooperación</h2>
              <h2 className="text-pretty text-3xl font-black">Integridad</h2>
              <h2 className="text-pretty text-3xl font-black">Respeto</h2>
              <h2 className="text-pretty text-3xl font-black">Servicio</h2>
              <h2 className="text-pretty text-3xl font-black">Supervisión</h2>
              <h2 className="text-pretty text-3xl font-black">
                Responsabilidad
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <img
                src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                alt="text"
                className="rounded-xl mt-[8rem] mb-4 shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                alt="text"
                className="rounded-xl my-4 shadow-md"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                alt="text"
                className="rounded-xl m-4 shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                alt="text"
                className="rounded-xl m-4 shadow-md"
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AboutUsPage;

export const Head = () => (
  <Seo title="ARS GMA - Tu salud protegida | Nosotros" />
);
