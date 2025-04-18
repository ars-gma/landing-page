import React from "react";
import { Button } from "../button";
import { LINKS } from "../header";
import Background from "../../images/hero-background.png";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative isolate px-6 pt-4 md:pt-32 lg:px-8 bg-zinc-50"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 h-full w-full sm:px-[4rem] lg:px-32 py-32 sm:pt-[2rem] sm:pb-[12rem] lg:pt-[2rem] lg:pb-[14rem]">
        <div className="mx-auto max-w-2xl">
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
              href={LINKS.affiliate}
              className="animation-pulse transition-discrete bg-gradient2"
            >
              Afiliate con nosotros
            </Button>
          </div>
        </div>

        {/* tablet */}
        <div className="hidden md:block lg:hidden">
          {/* right side */}
          <div className="absolute block bg-background1 top-[10rem] right-[-5rem] h-[45%] w-[35%] rotate-45 shadow-lg z-0" />
          <div className="absolute block bg-white top-[1rem] right-[-5rem] h-[45%] w-[35%] rotate-45 shadow-lg z-1" />
          <div className="absolute block bg-green-600 top-[1.5rem] right-[-3rem] h-[40%] w-[30%] rotate-45 z-2" />
          <div className="absolute block bg-brandGreen top-[27rem] right-[12rem] h-[6%] w-[5%] rotate-45 z-4" />
        </div>
        {/* desktop */}
        <div className="hidden lg:block">
          {/* left side */}
          <div className="absolute block bg-background1 top-[30rem] left-[-36rem] h-[60%] w-[50%] rotate-45 shadow-lg z-0" />
          <div className="absolute block bg-brandGreen top-[38rem] left-[5rem] h-[10%] w-[5%] rotate-45 z-4" />

          {/* right side */}
          <div className="absolute block bg-background1 top-[20rem] right-[-5rem] h-[60%] w-[50%] rotate-45 shadow-lg" />
          <div className="absolute block bg-white top-[11rem] right-[-5rem] h-[60%] w-[52%] rotate-45 shadow-lg" />
          <div className="absolute block top-[11.5rem] right-[-3rem] h-[55%] w-[45%] rotate-452">
            <img src={Background} alt="" className="absolute rotate-[368deg]" />
          </div>
          <div className="absolute block bg-brandGreen top-[38rem] right-[35rem] h-[10%] w-[5%] rotate-45" />
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
