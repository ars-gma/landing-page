import React from "react";
import { Button } from "../button";
import { LINKS } from "../header";

export const FaqsSection = () => {
  return (
    <section id="faqs" class="py-24">
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
                <h6 class="text-lg text-center font-medium text-brandBlue mb-2 lg:text-left">
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
                    La base de un seguro médico está en la libre elección de tu
                    médico, ya sea del cuadro médico propio o bien a través de
                    un producto de reembolso, que te permite también ir a
                    cualquier médico del mundo.
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
  );
};
