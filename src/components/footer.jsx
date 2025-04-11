import React from "react";

import Logo from "../images/logo.png";
import { LINKS } from "./header";

export const Footer = () => {
  return (
    <footer className="bg-brandBlue">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between md:py-8">
          <div className="flex items-center content-center h-[6rem] w-[6rem] mb-6 md:mb-0 bg-white rounded-full">
            <a href={LINKS.homeHero} className="flex items-center">
              <img src={Logo} className="h-12 ml-2" alt="ARS GMS logo" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Recursos
              </h2>
              <ul className="text-brandWhite font-medium">
                <li className="mb-4">
                  <a href={LINKS.services} className="hover:text-white">
                    Afíliate
                  </a>
                </li>
                <li className="mb-4">
                  <a href={LINKS.plans} className="hover:text-white">
                    Planes
                  </a>
                </li>
                <li className="mb-4">
                  <a href={LINKS.providers} className="hover:text-white">
                    Prestadoras
                  </a>
                </li>
                <li className="mb-4">
                  <a href={LINKS.faqs} className="hover:text-white">
                    Preguntas frecuentes
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href={"/guia_medica.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                    download
                  >
                    Guía médica
                  </a>
                </li>
                <li>
                  <a
                    href={"/solicitud_reembolso.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                    download
                  >
                    Solicitud de reembolso
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-xs md:w-auto">
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Contactanos
              </h2>
              <ul className="text-brandWhite font-medium">
                <li className="mb-4">
                  <a
                    href="tel:8096853000"
                    className="flex flex-row items-center mt-2 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                    809.685.3000
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="mailto:info@arsgma.com?subject=ARS GMA"
                    className="flex flex-row items-center mt-2 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                    info@arsgma.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/place/ARS+GMA/data=!4m2!3m1!1s0x0:0x69a11520c913303c?sa=X&ved=1t:2428&ictx=111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center mt-2 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    Av. Independencia no. 701, Gazcue
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Legal
              </h2>
              <ul className="text-brandWhite font-medium">
                <li className="mb-4">
                  <a
                    href={"/ley87-01.pdf"}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-white"
                    download
                  >
                    Sistema Dominicano de Seguridad Social
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href={"/ley42-00.pdf"}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-white"
                    download
                  >
                    Ley General Sobre la Discapacidad
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href={"/ley50-88.pdf"}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-white"
                    download
                  >
                    Ley Sobre Drogas y Sustancias Controladas
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href={"/ley42-01.pdf"}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-white"
                    download
                  >
                    Ley General de Salud
                  </a>
                </li>
                <li>
                  <a
                    href={"/ley177-09.pdf"}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-white"
                    download
                  >
                    Ley de Amnistia
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-brandWhite sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-brandWhite sm:text-center">
            © 2009 <a href={LINKS.home}>ARS GMA</a>. Todos los Derechos
            Reservados.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/arsgma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brandWhite hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://x.com/arsgma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brandWhite hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://www.instagram.com/arsgmard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brandWhite hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
