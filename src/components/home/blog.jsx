import React from "react";

const posts = [
  {
    id: 1,
    title:
      "La Importancia del Cuidado Preventivo en la Salud: Más Vale Preven...",
    href: "#",
    description:
      "En la vida diaria, muchas veces dejamos nuestra salud en segundo plano hasta que aparece una enfermedad o molestia. Sin embargo, el cuidado...",
    date: "Mar 18, 2025",
    datetime: "2025-03-18",
  },
  {
    id: 2,
    title:
      "La Importancia del Cuidado Preventivo en la Salud: Más Vale Preven...",
    href: "#",
    description:
      "En la vida diaria, muchas veces dejamos nuestra salud en segundo plano hasta que aparece una enfermedad o molestia. Sin embargo, el cuidado...",
    date: "Mar 18, 2025",
    datetime: "2025-03-18",
  },
  {
    id: 3,
    title:
      "La Importancia del Cuidado Preventivo en la Salud: Más Vale Preven...",
    href: "#",
    description:
      "En la vida diaria, muchas veces dejamos nuestra salud en segundo plano hasta que aparece una enfermedad o molestia. Sin embargo, el cuidado...",
    date: "Mar 18, 2025",
    datetime: "2025-03-18",
  },
];

export const BlogSection = () => {
  return (
    <section id="blogs" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-brandBlue">
          Últimas noticias y artículos
        </h2>
        <div className="py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
                  <a href="#">
                    <img
                      class="rounded-t-lg"
                      src="https://flowbite.com/docs/images/blog/image-1.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-5">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                      </time>
                    </div>
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {post.title}
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700">
                      {post.description}
                    </p>
                    <a
                      href="#"
                      class="inline-flex items-center py-2 text-sm font-medium text-center hover:text-gray-800"
                    >
                      Ver más
                      <svg
                        class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
