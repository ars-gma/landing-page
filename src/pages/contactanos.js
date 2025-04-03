import * as React from "react";
import { SEO as Seo } from "../components/seo";
import { Link } from "../components/link";
import { Layout } from "../components/layout";

const ContactUsPage = () => {
  return (
    <Layout>
      {/* px-6 2 md:px-[12rem] lg:px-[16rem] */}
      <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 md:px-[4rem] lg:px-[16rem]">
        <div className="mt-16 md:mt-4 mb-8">
          <h1 className="text-pretty text-5xl font-black">Comunicate</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 h-full w-full">
          <div className="order-first col-span-3 md:col-span-1 md-col-end-1 h-full mt-8 md:mr-4">
            <h1 className="text-balance text-2xl font-semibold">
              Ponte en contacto
            </h1>
            <p className="mt-4 text-lg font-medium text-pretty md:mr-4">
              ¿Tienes dudas? Amplia información sobre nuestros servicios?
              Aclaremos sus necesidades con un servicios personalizado.
            </p>
            <div className="grid grid-cols-1">
              <div className="mt-6">
                <p className="text-lg font-bold text-pretty">
                  Punto de contacto
                </p>
              </div>
              <div className="mt-3">
                <p className="text-md font-semibold text-pretty">
                  Santo Domingo
                </p>
                <p className="text-sm font-light italic text-pretty">
                  Calle A #1, Gazcue
                </p>
                <p className="text-sm font-semibold text-pretty mt-1">
                  Oficina principal
                </p>
                <Link href="tel:8096854620" className="hover:text-blue-600">
                  Tel. 8096854620
                </Link>
                <p className="text-sm font-semibold text-pretty mt-1">
                  Desde el interior
                </p>
                <Link href="tel:8092000761" className="hover:text-blue-600">
                  Tel. 8092000761
                </Link>
              </div>
              <div className="mt-3">
                <p className="text-lg font-semibold text-pretty">Soporte</p>
                <Link
                  href="mailto:correo@arsgma.com"
                  className="hover:text-blue-600"
                >
                  correo@arsgma.com
                </Link>
              </div>
              <div className="mt-6">
                <p className="text-lg font-bold text-pretty">
                  Nuestras oficinas en el país
                </p>
              </div>
              <div className="mt-3">
                <p className="text-md font-semibold text-pretty">Higüey</p>
                <p className="text-sm font-light italic text-pretty">
                  Calle B #2, Matas
                </p>
                <Link href="tel:8097461488" className="hover:text-blue-600">
                  Tel. 8097461488
                </Link>
              </div>
              <div className="mt-3">
                <p className="text-md font-semibold text-pretty">
                  San Cristóbal
                </p>
                <p className="text-sm font-light italic text-pretty">
                  Calle C #3, Matas
                </p>
                <Link href="tel:8095278207" className="hover:text-blue-600">
                  Tel. 8095278207
                </Link>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 md:col-start-2 h-full w-full mt-12 sm:mt-0 md:pl-2 lg:pl-4 md:pr-8 lg:pr-12">
            <h1 className="text-balance text-4xl font-black mt-8">
              ¿Aún necesitas ayuda?
            </h1>
            <form action="#" method="POST" className="mx-auto mt-4">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 w-full">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Nombre
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Jose Perez"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="taxId"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Cedula
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="taxId"
                      name="taxId"
                      type="text"
                      placeholder="001-1234567-8"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Correo electrónico
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jose.perez@gmail.com"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Teléfono
                  </label>
                  <div className="mt-2.5">
                    <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-600">
                      <input
                        id="phone-number"
                        name="phone-number"
                        type="text"
                        placeholder="8091234567"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Mensaje
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                      placeholder="Dejanos saber tus dudas o preguntas."
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block rounded-md bg-blue-600 px-12 py-4 text-center text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Hablemos
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ContactUsPage;

export const Head = () => (
  <Seo title="ARS GMA - Tu salud protegida | Contactanos" />
);
