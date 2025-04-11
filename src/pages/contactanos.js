import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { SEO as Seo } from "../components/seo";
import { Link } from "../components/link";
import { Layout } from "../components/layout";

const ContactUsPage = () => {
  const [showSuccessAlert, setSuccessShowAlert] = useState(false);
  const [showErrorAlert, setErrorhowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    setSuccessShowAlert(false);
    setErrorhowAlert(false);
    setLoading(true);
    try {
      emailjs.sendForm(
        process.env.GATSBY_EMAILJS_SERVICE_ID,
        process.env.GATSBY_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.GATSBY_EMAILJS_PUBLIC_KEY,
        }
      );
      setSuccessShowAlert(true);
      document.getElementById("alert-success").focus();
    } catch (error) {
      setErrorhowAlert(true);
      document.getElementById("alert-error").focus();
    } finally {
      setLoading(false);
    }
  };
  return (
    <Layout>
      <main className="grid min-h-full place-items-center py-24 px-6 sm:py-32 md:px-[4rem] lg:px-[10rem]">
        <div
          id="alert-error"
          class={`${
            showErrorAlert ? "visible" : "hidden"
          } absolute top-[9rem] flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50`}
          role="alert"
        >
          <svg
            class="shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span class="sr-only">Informativo</span>
          <div class="ms-3 text-sm font-medium">
            Hubo un problema enviando el mensaje, si el problema sigue
            ocurriendo favor de comunicarse por teléfono o correo electrónico.
          </div>
          <button
            type="button"
            class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8"
            data-dismiss-target="#alert-2"
            aria-label="Cerrar"
            onClick={() => setErrorhowAlert(false)}
          >
            <span class="sr-only">Cerrar</span>
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
          </button>
        </div>
        <div
          id="alert-success"
          class={`${
            showSuccessAlert ? "visible" : "hidden"
          } flex absolute top-[9rem] items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50`}
          role="alert"
        >
          <svg
            class="shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span class="sr-only">Informativo</span>
          <div class="ms-3 text-sm font-medium">
            Se ha enviado tu mensaje, te estaremos contactando proximamente.
          </div>
          <button
            type="button"
            class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8"
            data-dismiss-target="#alert-3"
            aria-label="Cerrar"
            onClick={() => setSuccessShowAlert(false)}
          >
            <span class="sr-only">Cerrar</span>
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
          </button>
        </div>
        <div className="mt-16 md:mt-4 mb-8">
          <h1 className="text-pretty text-5xl font-black">Comunicate</h1>
        </div>
        <div className="flex flex-col sm:flex-row h-full w-full">
          <div className="h-full w-full sm:w-[45%] mt-8">
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
                  Distrito Nacional
                </p>
                <p className="text-sm font-light italic text-pretty">
                  Av. Independencia no. 701, Gazcue
                </p>
                <Link
                  href="mailto:info@arsgma.com"
                  className="text-brandBlue border-b-2 border-dotted decoration-brandBlue font-semibold hover:text-blue-700 hover:underline"
                >
                  info@arsgma.com
                </Link>
                <div className="grid grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-pretty mt-1">
                      Teléfono
                    </p>
                    <Link
                      href="tel:8096853000"
                      className="text-brandBlue border-b-2 border-dotted decoration-brandBlue font-semibold hover:text-blue-700 hover:underline"
                    >
                      809.685.3000
                    </Link>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-pretty mt-1">
                      Central
                    </p>
                    <Link
                      href="tel:8096854620"
                      className="text-brandBlue border-b-2 border-dotted decoration-brandBlue font-semibold hover:text-blue-700 hover:underline"
                    >
                      809.685.4620
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-lg font-bold text-pretty">
                  Nuestras oficinas en el país
                </p>
              </div>
              <div className="mt-3">
                <p className="text-md font-semibold text-pretty">Santiago</p>
                <p className="text-sm font-light italic text-pretty">
                  Av. 27 de Febrero, Plaza del Paseo, Los Jardines
                  Metropolitanos
                </p>
                <Link
                  href="mailto:santiago@arsgma.com"
                  className="text-brandBlue border-b-2 border-dotted decoration-brandBlue font-semibold hover:text-blue-700 hover:underline"
                >
                  santiago@arsgma.com
                </Link>
                <div className="grid grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-pretty mt-1">
                      Teléfono
                    </p>
                    <Link
                      href="tel:8098258513"
                      className="text-brandBlue border-b-2 border-dotted decoration-brandBlue font-semibold hover:text-blue-700 hover:underline"
                    >
                      809.825.8513{" "}
                    </Link>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-pretty mt-1">
                      Central
                    </p>
                    <Link
                      href="tel:8096853000"
                      className="text-brandBlue border-b-2 border-dotted decoration-brandBlue font-semibold hover:text-blue-700 hover:underline"
                    >
                      809.685.3000
                    </Link>{" "}
                    (Ext. 280)
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-md font-semibold text-pretty">Higüey</p>
                <p className="text-sm font-light italic text-pretty">
                  Calle Libertad esq. Colón, Plaza Brian 2do nivel
                </p>
                <Link
                  href="mailto:higuey@arsgma.com"
                  className="text-brandBlue border-b-2 border-dotted decoration-brandBlue font-semibold hover:text-blue-700 hover:underline"
                >
                  higuey@arsgma.com
                </Link>
                <div className="grid grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-pretty mt-1">
                      Teléfono
                    </p>
                    <Link
                      href="tel:8097461488"
                      className="text-brandBlue border-b-2 border-dotted decoration-brandBlue font-semibold hover:text-blue-700 hover:underline"
                    >
                      809.746.1488
                    </Link>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-pretty mt-1">
                      Central
                    </p>
                    <Link
                      href="tel:8096853000"
                      className="text-brandBlue border-b-2 border-dotted decoration-brandBlue font-semibold hover:text-blue-700 hover:underline"
                    >
                      809.685.3000
                    </Link>{" "}
                    (Ext. 285)
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-md font-semibold text-pretty">
                  San Juan de la Magüana
                </p>
                <p className="text-sm font-light italic text-pretty">
                  Calle Pedro J. Heyaime no. 68, Plaza Wao Gallery 2do nivel
                </p>
                <Link
                  href="mailto:sanjuan@arsgma.com"
                  className="text-brandBlue border-b-2 border-dotted decoration-brandBlue font-semibold hover:text-blue-700 hover:underline"
                >
                  sanjuan@arsgma.com
                </Link>
                <div className="grid grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-pretty mt-1">
                      Teléfono
                    </p>
                    <Link
                      href="tel:8095574484"
                      className="text-brandBlue border-b-2 border-dotted decoration-brandBlue font-semibold hover:text-blue-700 hover:underline"
                    >
                      809.557.4484{" "}
                    </Link>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-pretty mt-1">
                      Central
                    </p>
                    <Link
                      href="tel:8096853000"
                      className="text-brandBlue border-b-2 border-dotted decoration-brandBlue font-semibold hover:text-blue-700 hover:underline"
                    >
                      809.685.3000
                    </Link>{" "}
                    (Ext. 295)
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-md font-semibold text-pretty">
                  San Cristóbal
                </p>
                <p className="text-sm font-light italic text-pretty">
                  Calle General Leger esq. Sanchez no. 38 Edif. Guerrero Medina
                </p>
                <Link
                  href="mailto:sancristobal@arsgma.com"
                  className="text-brandBlue border-b-2 border-dotted decoration-brandBlue font-semibold hover:text-blue-700 hover:underline"
                >
                  sancristobal@arsgma.com
                </Link>
                <div className="grid grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-pretty mt-1">
                      Teléfono
                    </p>
                    <Link
                      href="tel:8095278207"
                      className="text-brandBlue border-b-2 border-dotted decoration-brandBlue font-semibold hover:text-blue-700 hover:underline"
                    >
                      809.527.8207
                    </Link>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-pretty mt-1">
                      Central
                    </p>
                    <Link
                      href="tel:8096853000"
                      className="text-brandBlue border-b-2 border-dotted decoration-brandBlue font-semibold hover:text-blue-700 hover:underline"
                    >
                      809.685.3000
                    </Link>{" "}
                    (Ext. 290)
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-md font-semibold text-pretty">
                  San Francisco de Macoris
                </p>
                <p className="text-sm font-light italic text-pretty">
                  Calle Colón no. 72, Local 201, Plaza Universo
                </p>
                <Link
                  href="mailto:santiago@arsgma.com"
                  className="text-brandBlue border-b-2 border-dotted decoration-brandBlue font-semibold hover:text-blue-700 hover:underline"
                >
                  santiago@arsgma.com
                </Link>
                <div className="grid grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-pretty mt-1">
                      Teléfono
                    </p>
                    <Link
                      href="tel:8095883607"
                      className="text-brandBlue border-b-2 border-dotted decoration-brandBlue font-semibold hover:text-blue-700 hover:underline"
                    >
                      809.588.3607
                    </Link>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-pretty mt-1">
                      Central
                    </p>
                    <Link
                      href="tel:8096853000"
                      className="text-brandBlue border-b-2 border-dotted decoration-brandBlue font-semibold hover:text-blue-700 hover:underline"
                    >
                      809.685.3000
                    </Link>{" "}
                    (Ext. 275)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-full sm:w-[55%] mt-12 sm:mt-0">
            <h1 className="text-balance text-4xl font-black mt-8">
              ¿Aún necesitas ayuda?
            </h1>
            <form ref={form} onSubmit={sendEmail} className="mx-auto mt-4">
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
                      required
                      id="name"
                      name="user_name"
                      type="text"
                      placeholder="Jose Perez"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brandBlue"
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
                      required
                      id="taxId"
                      name="user_tax_id"
                      type="text"
                      placeholder="001-1234567-8"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brandBlue"
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
                      required
                      id="email"
                      name="user_email"
                      type="email"
                      placeholder="jose.perez@gmail.com"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brandBlue"
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
                    <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-brandBlue">
                      <input
                        id="phone-number"
                        name="user_phone"
                        type="text"
                        placeholder="8091234567"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brandBlue"
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
                      required
                      id="message"
                      name="user_message"
                      rows={4}
                      placeholder="Dejanos saber tus dudas o preguntas."
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brandBlue"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  disabled={loading}
                  className="block rounded-md bg-brandBlue px-12 py-4 text-center text-sm font-semibold text-white shadow-xs hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
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
