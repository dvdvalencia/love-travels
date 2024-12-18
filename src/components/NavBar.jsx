"use client";
import { useState } from "react";

const NavBar = () => {
  // Estado para manejar la visibilidad del menú desplegable
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isInteriorOpen, setIsInteriorOpen] = useState(false);
  // Función para alternar el menú desplegable
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  const toggleInteriorDropdown = () => {
    setIsInteriorOpen((prevState) => !prevState);
  };

  const interiorLocations = [
    "Amazonas",
    "Boyacá",
    "Buga",
    "Bogotá - Plan Visa",
    "Caño Cristales",
    "Desierto de la Tatacoa",
    "Eje Cafetero",
    "Llanos Orientales",
    "Huila al Límite",
    "Nevado de Santa Isabel",
    "Nevado del Ruiz",
    "Santander",
    "Sur de Colombia y Tulcán Ecuador",
  ];

  const seaLocations = [
    "Tolú y Coveñas",
    "Arboletes",
    "Bahía Solano",
    "Bahía de Triganá",
    "Capurganá Aéreo y Terrestre",
    "Combinado por el caribe - Terrestre",
    "Isla Fuerte",
    "Isla Palma",
    "Isla Margarita - Venezuela",
    "La Guajira Aéreo y Terrestre",
    "Santa Marta Aéreo y Terrestre",
    "San Andrés",
    "San Bernardo del Viento",
    "Necoclí",
    "Nuquí",
    "Providencia"
  ];
  
  return (
    <div className="fixed top-0 z-50 w-full p-4 text-white bg-blue-500">
      <nav className="flex items-center justify-between px-6 py-4 text-white bg-green-600">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/love-travels.png"
            alt="Love Travels Logo"
            className="w-11 h-11"
          />
          <h1 className="text-2xl font-bold">Love Travels</h1>
        </div>

        {/* Navegación */}
        <ul className="flex items-center space-x-6">
          {/* Menú desplegable de MAR */}
          <li className="relative">
            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
              type="button"
            >
              MAR
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            <div
              className={`${
                isDropdownOpen ? "block" : "hidden"
              } absolute z-10 mt-2 bg-white rounded-lg shadow-lg w-64`}
            >
              <ul className="py-2 text-sm text-gray-700 divide-y divide-gray-100 dark:bg-gray-700 dark:text-gray-200">
                {seaLocations.map((location) => (
                  <li key={location}>
                    <a
                      href={`#${location.replace(/\s+/g, "-").toLowerCase()}`}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {location}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          
          {/* Menú desplegable de INTERIOR */}
          <li className="relative">
            <button
              onClick={toggleInteriorDropdown}
              className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
            >
              Interior de Colombia
              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            <div
              className={`${
                isInteriorOpen ? "block" : "hidden"
              } absolute z-10 mt-2 bg-white rounded-lg shadow-lg w-64`}
            >
              <ul className="py-2 text-sm text-gray-700 divide-y divide-gray-100 dark:bg-gray-700 dark:text-gray-200">
                {interiorLocations.map((location) => (
                  <li key={location}>
                    <a
                      href={`#${location.replace(/\s+/g, "-").toLowerCase()}`}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {location}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          
          <li>
            <a href="#contact" className="hover:text-blue-500">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
