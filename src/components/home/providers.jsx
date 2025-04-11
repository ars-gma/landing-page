import React from "react";
import { LINKS } from "../header";
import { Button } from "../button";
import Provider1Logo from "../../images/provider-1-logo.png";
import Provider2Logo from "../../images/provider-2-logo.png";
import Provider3Logo from "../../images/provider-3-logo.png";
import Provider4Logo from "../../images/provider-4-logo.png";
import Provider5Logo from "../../images/provider-5-logo.png";

export const ProvidersSection = () => {
  return (

    <section id="providers" className="py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-center text-base/7 font-semibold text-brandBlue">
        Prestadoras de Servicios de Salud
      </h2>
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <img
          alt=""
          src={Provider1Logo}
          width={158}
          height={48}
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        />
        <img
          alt=""
          src={Provider2Logo}
          width={158}
          height={48}
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        />
        <img
          alt=""
          src={Provider3Logo}
          width={158}
          height={48}
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        />
        <img
          alt=""
          src={Provider4Logo}
          width={158}
          height={48}
          className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
        />
        <img
          alt=""
          src={Provider5Logo}
          width={158}
          height={48}
          className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
        />
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button href={LINKS.providers} className="rpx-3.5 py-2.5">
          Ver todos
        </Button>
      </div>
    </div>
  </section>
  );
};
