"use client"
import { useState } from "react";

const NavBar = () => {
  // Estado para manejar la visibilidad del menú desplegable
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Función para alternar el menú desplegable
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
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
        {/* Menú desplegable de Destinos */}
        <li className="relative">
          <button
            id="dropdownDefaultButton"
            onClick={toggleDropdown}
            className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            type="button"
          >
            Destinos
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
            id="dropdown"
            className={`${
              isDropdownOpen ? "block" : "hidden"
            } z-10 absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#dashboard"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#settings"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#earnings"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#signout"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </li>          <li>
            <a href="#about" className="hover:text-blue-500">
              Hoteles
            </a>
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
