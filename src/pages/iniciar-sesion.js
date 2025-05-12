import React from "react";

import Logo from "../images/logo.png";
import { SEO as Seo } from "../components/seo";

const SignInPage = () => {
  return (
    <div className="flex h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
      <div class="bg-white border border-gray-200 rounded-lg shadow-lg">
        <div className="w-[18rem] md:w-auto block md:grid md:grid-cols-2 md:max-w-full">
          <div className="p-6">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img alt="ARS GMA" src={Logo} className="mx-auto h-10 w-auto" />
              <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Accede a tu cuenta
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Correo electrónico
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jose.perez@gmail.com"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brandBlue"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Contraseña
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      required
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brandBlue"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-brandBlue px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Ingresar
                  </button>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="text-sm font-semibold text-gray-600 hover:text-gray-800"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://oficinavirtual.arsfuturo.com/png/Group%2026%202.png"
              className="max-w-lg rounded-tr-lg rounded-br-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

export const Head = () => (
  <Seo title="ARS GMA - Tu salud protegida | Iniciar sesión" />
);
