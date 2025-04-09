import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useLocation } from "@reach/router";

import Logo from "../images/logo.png";
import { classNames } from "../utils/helpers";

export const LINKS = {
  home: "/",
  homeHero: "/#home",
  register: "/afiliate",
  providers: "/prestadoras",
  plans: "/#plans",
  contactUs: "/contactanos",
  faqs: "/preguntas-frecuentes",
};

const navigation = [
  { name: "Afíliate", href: LINKS.register },
  { name: "Prestadoras", href: LINKS.providers },
  { name: "Planes", href: LINKS.plans },
  { name: "Contactanos", href: LINKS.contactUs },
];

const mobileNavigation = [
  ...navigation,
  { name: "Preguntas frecuentes", href: LINKS.faqs }
]

export const Header = () => {
  const location = useLocation();
  const isHomeDisplaying = location.pathname === LINKS.home;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
      <header
        className={`${
          isHomeDisplaying ? "fixed" : "absolute"
        } bg-white border inset-x-0 top-0 z-50 max-w-[95%] sm:max-w-[85%] m-auto mt-[1rem] rounded-[3rem] shadow-md`}
      >
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="/#home" className="-m-1.5 p-1.5">
              <span className="sr-only">ARS GMA</span>
              <img alt="" src={Logo} className="h-12 lg:h-[6rem] w-auto" />
            </a>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Abrir menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex md:gap-x-12 items-center">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  "text-lg font-semibold text-gray-900 hover:text-primary",
                  index === 0 &&
                    "bg-blue-600 py-2 px-8 border border-solid border-blue-700 text-white rounded-[3rem] hover:bg-blue-700 hover:border-blue-800 hover:text-white"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between px-3 py-4">
              <a href={LINKS.home} className="-m-1.5 p-1.5">
                <span className="sr-only">ARS GMA</span>
                <img alt="" src={Logo} className="h-12 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Cerrar menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 px-4 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {mobileNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 border-b border-gray-400"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute bottom-[2rem] w-auto">
              <span className="text-sm text-gray-500">
                © 2009 <a href={LINKS.home}>ARS GMA</a>. Todos los Derechos
                Reservados.
              </span>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
};
