import React from "react";

export const StatsSection = () => {
  return (
    <section id="stats" class="px-3 lg:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center mb-12">
        <h2 className="text-center text-base/7 font-semibold text-brandBlue">
          Nosotros
        </h2>
        <p className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
          Siempre en busqueda de la excelencia
        </p>
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <dl class="grid grid-cols-2 gap-x-8 gap-y-4 sm:gap-y-16 text-center md:grid-cols-5">
          <div class="mx-auto flex flex-wrap content-center justify-center items-center flex-col gap-y-1 sm:px-8 sm:py-4">
            <dt class="text-base text-left leading-7 text-gray-700">Medicos</dt>
            <dd class="text-3xl sm:text-left font-semibold tracking-tight text-gray-900 sm:text-5xl">
              <span class="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-doctors)] before:content-[counter(num)]">
                <span class="sr-only">4200</span>
              </span>
            </dd>
          </div>
          <div class="mx-auto flex flex-wrap content-center justify-center items-center max-w-xs flex-col gap-y-1 sm:px-8 sm:py-4">
            <dt class="text-base text-left leading-7 text-gray-700">Centros</dt>
            <dd class="text-3xl sm:text-left font-semibold tracking-tight text-gray-900 sm:text-5xl">
              <span class="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-centers)] before:content-[counter(num)]">
                <span class="sr-only">1300</span>
              </span>
            </dd>
          </div>
          <div class="mx-auto flex flex-wrap content-center justify-center items-center max-w-xs flex-col gap-y-1 sm:px-8 sm:py-4">
            <dt class="text-base text-left leading-7 text-gray-700">
              Puntos de servicio
            </dt>
            <dd class="text-3xl sm:text-left font-semibold tracking-tight text-gray-900 sm:text-5xl">
              <span class="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-pocs)] before:content-[counter(num)] before:left-[calc(0.4em * var(--n, 1))]">
                <span class="sr-only">6</span>
              </span>
            </dd>
          </div>
          <div class="mx-auto flex flex-wrap content-center justify-center items-center max-w-xs flex-col gap-y-1 sm:px-8 sm:py-4">
            <dt class="text-base sm:text-left leading-7 text-gray-700">
              Atención teléfonica
            </dt>
            <dd class="text-3xl text-left font-semibold tracking-tight text-gray-900 sm:text-5xl">
              <span class="tabular-nums">24/7</span>
            </dd>
          </div>
          <div class="mx-auto flex flex-wrap content-center justify-center items-center max-w-xs flex-col gap-y-1 sm:px-8 sm:py-4">
            <dt class="text-base sm:text-left leading-7 text-gray-700">
              Actividades de salud
            </dt>
            <dd class="text-3xl text-left font-semibold tracking-tight text-gray-900 sm:text-5xl">
              <span class="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-activities)] before:content-[counter(num)] before:left-[calc(0.4em * var(--n, 1))]">
                <span class="sr-only">15</span>
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};
