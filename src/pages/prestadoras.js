import React, { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { SEO as Seo } from "../components/seo";
import { Layout } from "../components/layout";
import { providers as unformatProviders } from "../resources/providers";
import { classNames } from "../utils/helpers";
import { Link } from "../components/link";
import { CLINIC, DOCTOR, LABORATORY, PHARMACY } from "../utils/constants";

const PAGINATION = 12;

const ProvidersPage = () => {
  const [list, setList] = useState([]);
  const [types, setTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [filterText, setFilterText] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [startPagination, setStartPagination] = useState(1);
  const [endPagination, setEndPagination] = useState(PAGINATION);
  const [totalPagination, setTotalPagination] = useState(PAGINATION);

  const providers = unformatProviders.map((item) => ({
    ...item,
    phone: item.phone.replace(/\./g, ""),
  }));

  const onPreviousClick = () => {
    if (currentPage - 1 > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onNextClick = () => {
    if (currentPage < pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // TODO get access
  // const getProviders = async () => {
  //   fetch("http://arsgma.com/app/router.php", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  //       Origin: "arsgma.com",
  //     },
  //     body: JSON.stringify({
  //       app: "4rsgm4",
  //       task: "buscar",
  //       provincias: "Distrito Nacional",
  //       nombre: "",
  //       tipo: "todos",
  //       especialidad: "todas",
  //     }),
  //   })
  //     .then((r) => console.log("response", r))
  //     .catch((err) => console.log("error", err));
  // };

  const getIconByType = (type) => {
    const map = {
      [CLINIC]: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
        />
      ),
      [LABORATORY]: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      ),
      [DOCTOR]: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      ),
      [PHARMACY]: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
        />
      ),
    };
    const element = map[type] || (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      />
    );
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7 text-gray-500 mb-3"
      >
        {element}
      </svg>
    );
  };

  const filterByType = (type) => {
    setSelectedType(type);
    setCurrentPage(1);
  };

  const filterByCity = (city) => {
    setSelectedCity(city);
    setCurrentPage(1);
  };

  const filterBySpecialty = (specialty) => {
    setSelectedSpecialty(specialty);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (list?.length === 0 && providers?.length > 0) {
      setList(providers.slice(0, PAGINATION + 1));
      setPages(parseInt(Math.ceil(providers.length / PAGINATION)));
      setTypes(
        [...new Set(providers.map((item) => item.type))].filter((t) => t)
      );
      setCities([...new Set(providers.map((item) => item.city))]);
    }
  }, []);

  useEffect(() => {
    const hasSearchFilter = filterText.length > 1;
    const hasSelectedType = !!selectedType;
    const hasSelectedCity = !!selectedCity;
    if (hasSearchFilter || hasSelectedType || hasSelectedCity) {
      const filteredList = providers.filter((provider) => {
        let result = false;
        if (hasSearchFilter && hasSelectedType && hasSelectedCity) {
          result =
            (provider.title.toUpperCase().includes(filterText?.toUpperCase()) ||
              provider.city.toUpperCase().includes(filterText?.toUpperCase()) ||
              provider.type
                .toUpperCase()
                .includes(filterText?.toUpperCase())) &&
            provider.city === selectedCity &&
            provider.type === selectedType;
        } else if (hasSearchFilter && hasSelectedType) {
          result =
            (provider.title.toUpperCase().includes(filterText?.toUpperCase()) ||
              provider.city.toUpperCase().includes(filterText?.toUpperCase()) ||
              provider.type
                .toUpperCase()
                .includes(filterText?.toUpperCase())) &&
            provider.type === selectedType;
        } else if (hasSearchFilter && hasSelectedCity) {
          result =
            (provider.title.toUpperCase().includes(filterText?.toUpperCase()) ||
              provider.city.toUpperCase().includes(filterText?.toUpperCase()) ||
              provider.type
                .toUpperCase()
                .includes(filterText?.toUpperCase())) &&
            provider.city === selectedCity;
        } else if (hasSelectedType && hasSelectedCity) {
          result =
            provider.city === selectedCity && provider.type === selectedType;
        } else if (hasSelectedCity) {
          result = provider.city === selectedCity;
        } else if (hasSelectedType) {
          result = provider.type === selectedType;
        }
        return result && provider;
      });
      const end =
        currentPage * PAGINATION > filteredList.length
          ? filteredList.length
          : currentPage * PAGINATION;
      const start = end > PAGINATION - 1 ? Math.abs(end - (PAGINATION - 1)) : 1;
      if (filteredList.length > 0) {
        setStartPagination(start);
        setEndPagination(end);
        setList(filteredList.slice(start - 1, end));
        setPages(parseInt(Math.ceil(filteredList.length / PAGINATION)));
        setTotalPagination(filteredList.length);
      } else {
        setStartPagination(null);
        setEndPagination(null);
        setTotalPagination(null);
        setPages(0);
        setList([]);
      }
    } else {
      const end =
        currentPage * PAGINATION > providers.length
          ? providers.length
          : currentPage * PAGINATION;
      const start = end - (PAGINATION - 1);
      setStartPagination(start);
      setEndPagination(end);
      setList(providers.slice(start, end + 1));
      setPages(parseInt(Math.ceil(providers.length / PAGINATION)));
      setTotalPagination(providers.length);
    }
  }, [filterText, selectedCity, selectedType, selectedSpecialty, currentPage]);

  useEffect(() => {
    if (cities.length === 1) {
      setSelectedCity(cities[0]);
    }

    if (types.length === 1) {
      setSelectedType(types[0]);
    }
  }, [cities, types]);

  return (
    <Layout>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-32">
        <div className="mt-16 md:mt-4 mb-8">
          <h1 className="text-pretty text-5xl font-black">Directorio Médico</h1>
        </div>
        <div className="grid grid-cols-1 h-full w-full">
          <form className="w-lg md:mx-32 lg:mx-64 mb-4">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Buscador
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block bg-white w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Buscar prestadores por nombre, tipo, o ciudad"
                required
                onChange={(e) => setFilterText(e.target.value)}
              />
            </div>
          </form>
          <div className="flex justify-center items-center w-md md:mx-64 lg:mx-128 mb-2">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                  {selectedType || "Tipo"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="-mr-1 size-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  {types.map((type) => (
                    <MenuItem key={type}>
                      <a
                        href="#"
                        onClick={() => filterByType(type)}
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                      >
                        {type}
                      </a>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>
            <Menu as="div" className="relative inline-block text-left ml-3">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                  {selectedCity || "Ciudad"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="-mr-1 size-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  {cities.map((city) => (
                    <MenuItem key={city}>
                      <a
                        href="#"
                        onClick={() => filterByCity(city)}
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                      >
                        {city}
                      </a>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>
            {/* TODO do not display clear if there is a default one */}
            {/* {(selectedCity || selectedType || selectedType) && (
              <button class="ml-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Limpiar filtros
              </button>
            )} */}
          </div>
          {list.length === 0 ? (
            <div className="flex justify-center mt-2">
              <h5 className="text-lg font-normal tracking-tight text-gray-900">
                Lo sentimos, no pudimos encontrar lo que buscas con la
                información suministrada.
              </h5>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full w-full">
              {list.map((item) => (
                <div
                  key={item.key}
                  className="group relative cursor-pointer overflow-hidden bg-white shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl max-w-sm p-6 border border-gray-200 rounded-lg"
                >
                  <Link
                    href={`tel:${item.phone}`}
                    className="transition duration-500 hover:scale-125"
                  >
                    {getIconByType(item.type)}
                    <h5 className="mb-1 text-xl font-semibold tracking-tight text-gray-900">
                      {item.title}
                    </h5>
                    <p className="font-lg text-gray-500">{item.type}</p>
                    <p className="mb-3 font-normal text-gray-400">
                      {item.city}
                    </p>
                    <div className="flex flex-row items-center font-medium text-gray-500">
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
                      {item.phoneText}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
          <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6 mt-8">
            {pages > 1 && (
              <div className="flex flex-1 justify-between items-center sm:hidden">
                {currentPage !== 1 && (
                  <Link
                    onClick={onPreviousClick}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Anterior
                  </Link>
                )}
                {startPagination && endPagination && totalPagination && (
                  <div>
                    <p className="text-xs text-center text-gray-700">
                      Mostrando
                      <span className="font-medium"> {startPagination} </span>a
                      <span className="font-medium"> {endPagination} </span>
                      de
                      <span className="font-medium"> {totalPagination} </span>
                      resultados
                    </p>
                  </div>
                )}
                {currentPage !==
                  parseInt(Math.ceil(totalPagination / PAGINATION)) && (
                  <Link
                    onClick={onNextClick}
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Siguiente
                  </Link>
                )}
              </div>
            )}
            {startPagination && endPagination && totalPagination && (
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Mostrando
                    <span className="font-medium"> {startPagination} </span>a
                    <span className="font-medium"> {endPagination} </span>
                    de
                    <span className="font-medium"> {totalPagination} </span>
                    resultados
                  </p>
                </div>
                {pages > 1 && (
                  <div>
                    <nav
                      className="isolate inline-flex -space-x-px rounded-md shadow-xs"
                      aria-label="Paginación"
                    >
                      {currentPage !== 1 && (
                        <Link
                          onClick={onPreviousClick}
                          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                          <span className="sr-only">Anterior</span>
                          <svg
                            className="size-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Link>
                      )}
                      {Array.from({ length: pages }).map((_, index) => (
                        <Link
                          key={`link_${index}`}
                          onClick={() => goToPage(index + 1)}
                          aria-current={currentPage === index + 1 && "page"}
                          className={classNames(
                            currentPage === index + 1 &&
                              "bg-blue-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
                            "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                          )}
                        >
                          {index + 1}
                        </Link>
                      ))}
                      {currentPage !==
                        parseInt(Math.ceil(totalPagination / PAGINATION)) && (
                        <Link
                          onClick={onNextClick}
                          className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                          <span className="sr-only">Siguiente</span>
                          <svg
                            className="size-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Link>
                      )}
                    </nav>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ProvidersPage;

export const Head = () => (
  <Seo title="ARS GMA - Tu salud protegida | Prestadores" />
);
