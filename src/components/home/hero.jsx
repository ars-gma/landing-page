import React from "react";
import { Button } from "../button";
import { LINKS } from "../header";
import Background from "../../images/hero-background.png";

export const HeroSection = () => {
  return (
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
            En ARS GMA, contamos con una amplia Red de Prestadoras de Servicios
            de Salud, las cuales están ubicadas de una manera estratégica para
            garantizar los servicios en todo el país con los estándares mas
            altos de calidad en sus areas a fines.
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
  );
};
