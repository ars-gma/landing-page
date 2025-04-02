import * as React from "react";
import { SEO as Seo } from "../components/seo";
import { Layout } from "../components/layout";

const FaqsPage = () => {
  return (
    <Layout>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-32">
        <div className="mt-4 mb-8 text-center">
          <h1 className="text-pretty text-5xl font-black">
            Preguntas frecuentes
          </h1>
          <h4 className="mt-2 text-pretty text-2xl text-gray-500">
            Si no encuentras la respuesta que necesitas, no dudes en comunicarte
            con nosotros.
          </h4>
        </div>
        <div class="grid pt-8 text-left border-t border-gray-200 md:gap-4 md:grid-cols-3">
          <div>
            <div class="mb-10">
              <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900">
                <svg
                  class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                ¿Qué puede cubrir un seguro médico?
              </h3>
              <p class="text-pretty text-gray-500">
                Las coberturas habituales de un seguro médico se organizan en
                torno a cinco grupos de atención médica:
                <br />
                <br />
                <ul className="space-y-1 list-disc list-inside">
                  <li>
                    <span className="font-bold">Medicina primaria</span> incluye
                    la atención médica general y la pediátrica, así como los
                    servicios de ambulancia y de urgencias (domiciliarias o
                    ambulatorias).
                  </li>
                  <li>
                    <span className="font-bold">Asistencia especializada</span>{" "}
                    es la atención médica prestada por el especialista en las
                    pruebas diagnósticas o en las intervenciones quirúrgicas, ya
                    sean en consulta o durante una hospitalización.
                  </li>
                  <li>
                    <span className="font-bold">Hospitalización</span> todos los
                    servicios que necesitas a la hora de una intervención
                    quirúrgica.
                  </li>
                  <li>
                    <span className="font-bold">Programas de salud</span> suelen
                    ser programas especializados a disposición de los clientes
                    que lo necesiten como, entre otros, la preparación al parto,
                    la atención cardiovascular, la deshabituación tabáquica,
                    etc.
                  </li>
                </ul>
              </p>
            </div>
            <div class="mb-10">
              <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                <svg
                  class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                ¿Qué pruebas y especialidades incluye el seguro?
              </h3>
              <p class="text-gray-500 ">
                Infórmate sobre las especialidades médicas, quirúrgicas y
                pruebas diagnósticas que pone a tu disposición la compañía y a
                los que puedes acceder con cada seguro.
              </p>
            </div>
            <div class="mb-10">
              <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                <svg
                  class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                ¿Podré elegir el especialista que necesito?
              </h3>
              <p class="text-gray-500 ">
                Otro factor importante a la hora de decidirte por un seguro
                médico u otro, es que revises si tus médicos de referencia están
                concertados por la aseguradora.
                <br />
                <br />
                La base de un seguro médico está en la libre elección de tu
                médico, ya sea del cuadro médico propio o bien a través de un
                producto de reembolso, que te permite también ir a cualquier
                médico del mundo.
              </p>
            </div>
            <div class="mb-10">
              <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                <svg
                  class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                ¿Es importante que la compañía disponga de centros propios,
                además de los centros concertados?
              </h3>
              <p class="text-gray-500 ">
                Es destacable que la compañía disponga de centros médicos
                propios en exclusiva para sus clientes, o bien, centros médicos
                concertados en los que se trata de manera preferente a los
                clientes de la compañía de seguros médicos.
                <br />
                Muy probablemente, en los centros propios de la compañía, al ser
                multiespecialidad, te ahorres desplazamientos ya que podrás ser
                atendido para diferentes pruebas diagnósticas.
              </p>
            </div>
          </div>
          <div>
            <div class="mb-10">
              <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                <svg
                  class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                ¿Qué he de valorar en los centros médicos?
              </h3>
              <p class="text-gray-500 ">
                También es importante valorar los centros, tanto propios como
                concertados, que la compañía pone a tu disposición: el estado de
                las instalaciones, accesibilidad, disponibilidad de parking,
                habitaciones, posibilidad de tener cama para acompañante en caso
                de hospitalización, menús, cafetería.
                <br />
                <br />
                Todo aquello que facilite y haga más agradable la estancia a
                toda la familia en caso de ingreso.
                <br />
                <br />
                Además, debes informarte de si los centros están dotados de los
                últimos tratamientos y avances tecnológicos.
              </p>
            </div>
            <div class="mb-10">
              <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                <svg
                  class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                ¿Por qué escoger una compañía y no otra?
              </h3>
              <p class="text-gray-500 ">
                Ya que contratar un seguro médico se hace pensando en el medio y
                largo plazo, asegúrate que la compañía tiene prestigio y
                demostrada experiencia.
                <br />
                <br />
                Es fundamental que te ofrezca los mejores especialistas y las
                técnicas más novedosas, sobre todo, en aquellas especialidades
                en las que tengas mayor interés (ginecología, pediatría,
                traumatología, entre otras).
              </p>
            </div>
            <div class="mb-10">
              <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                <svg
                  class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                ¿Puedo incluir seguro dental?
              </h3>
              <p class="text-gray-500 ">
                Muchos seguros médicos incluyen odontoestomatología básica, que
                cubre por ejemplo extracciones, curas estomatológicas derivadas
                de éstas o limpiezas de boca.
                <br />
                <br />
                Sin embargo si deseas tener acceso a otros servicios como
                pruebas diagnósticas, tratamientos preventivos, cirugías,
                prótesis o correctores debes contratar un seguro dental. Por
                esta razón debes tener en cuenta si la compañía ofrece seguro
                dental complementario con amplia cobertura y que te ofrezca
                precios adecuados.
              </p>
            </div>
            <div class="mb-10">
              <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                <svg
                  class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Además de seguros médicos y dentales… ¿Qué otros servicios me
                puede ofrecer una aseguradora de salud?
              </h3>
              <p class="text-gray-500 ">
                Ya que la salud es mucho más que curar enfermedades, ahora
                puedes acceder a una amplia oferta de servicios de salud, muy
                relacionados con el bienestar personal. De ahí que sea
                recomendable solicitar información sobre los servicios de salud
                con los que cuenta la compañía, tales como servicos de
                ambulancia, odontologicos, etc.
              </p>
            </div>
          </div>
          <div>
            <div class="mb-10">
              <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                <svg
                  class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                ¿Podré acceder directamente a todas las coberturas?
              </h3>
              <p class="text-gray-500 ">
                Previamente a contratar tu seguro médico, consulta si contempla
                períodos de espera.
                <br />
                El <span className="font-bold">periodo de espera</span> es una
                medida muy frecuente en los seguros médicos y consiste en el
                plazo de tiempo (establecido por meses transcurridos a partir de
                la fecha de vigencia de tu seguro) durante el cual no entran aún
                en vigor algunas de las coberturas incluidas dentro de las
                garantías de la póliza.
              </p>
            </div>
            <div class="mb-10">
              <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                <svg
                  class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                ¿He de pagar por ir al médico?
              </h3>
              <p class="text-gray-500 ">
                Normalmente los seguros de cuadro médico (no así los de
                reembolso) conllevan una coparticipación en el coste de los
                servicios o copago. El copago es una cantidad mínima establecida
                que el asegurado ha de abonar por cada uso de los servicios
                asistenciales.
                <br />
                <br />
                Los copagos son una medida implantada por la mayoría de las
                compañías de seguros de salud con el fin de concienciar del uso
                responsable de los servicios médicos. Por otra parte, con el
                copago se evitan subidas genéricas de la prima a toda la cartera
                de clientes gracias a la distribución de dicho coste según el
                uso de servicios médicos realizado por cada cliente.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default FaqsPage;

export const Head = () => (
  <Seo title="ARS GMA - Tu salud protegida | Preguntas Frecuentes" />
);
