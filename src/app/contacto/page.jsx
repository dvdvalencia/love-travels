import React from "react";

const Contacto = () => {
  return (
    <div className="bg-blue-300">
      <section className="relative mt-40 text-gray-800 body-font bg-[url(/BGcontacto.jpeg)] bg-no-repeat bg-center ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-12 text-center">
            <h1 className="mb-4 text-2xl font-medium sm:text-3xl title-font">
              Contáctenos
            </h1>
          </div>
          <form
            action="https://viajeslovetravels.web.app/{form-id}"
            method="post"
          >
            {/* wa.link/mhinmk https://www.instagram.com/lovetravels_turism?igsh=d3l0djJzZ2g3cDA1 */}
            <div className="mx-auto lg:w-1/2 md:w-2/3">
              <div className="flex flex-wrap -m-2">
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="text-sm leading-7 text-gray-600"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    />
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="text-sm leading-7 text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    />
                  </div>
                </div>
                <div className="w-full p-2">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="text-sm leading-7 text-gray-600"
                    >
                      Mensage
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full p-2">
                  <button
                    type="submit"
                    className="flex px-8 py-2 mx-auto text-lg text-white bg-green-600 border-0 rounded focus:outline-none hover:bg-green-700"
                  >
                    Enviar
                  </button>
                </div>
                <div className="w-full p-2 pt-8 mt-8 text-center border-t border-gray-200">
                  <p className="my-5 leading-normal">
                    Medellin, Antioquia
                    <br />
                    Colombia
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-4 text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://wa.link/mhinmk"
                      target="_blank"
                      className="flex items-center"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-10 h-10 text-green-600"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21.764 17.71a9.935 9.935 0 0 1-4.213 4.213c-2.878 1.501-6.338 1.647-9.261.41l-5.644 1.459 1.459-5.644c-1.237-2.923-1.091-6.383.41-9.261A9.935 9.935 0 0 1 6.29 2.236a9.935 9.935 0 0 1 9.261-.41 9.935 9.935 0 0 1 4.213 4.213c1.501 2.878 1.647 6.338.41 9.261zm-2.24-2.576c-.36-.18-2.12-1.04-2.45-1.16-.33-.12-.57-.18-.81.18-.24.36-.93 1.16-1.15 1.4-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.77-1.07-.96-1.79-2.15-2-2.5-.21-.36-.02-.56.16-.74.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.98-1.1-2.68-.3-.72-.6-.62-.81-.63-.21-.01-.45-.01-.69-.01-.24 0-.63.09-.96.45-.33.36-1.25 1.22-1.25 2.98 0 1.76 1.28 3.47 1.46 3.71.18.24 2.53 4.16 6.18 5.84.87.38 1.56.6 2.09.77.88.28 1.68.24 2.32.15.71-.1 2.12-.86 2.41-1.7.3-.84.3-1.58.21-1.74-.09-.17-.33-.27-.69-.45z"></path>
                      </svg>
                    </a>

                    <a
                      href="https://www.instagram.com/lovetravels_turism?igsh=d3l0djJzZ2g3cDA1"
                      target="_blank"
                      className="flex items-center"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-10 h-10 text-red-700"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>

                    
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
