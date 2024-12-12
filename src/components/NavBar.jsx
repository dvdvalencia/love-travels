import React from "react";

const NavBar = () => {
  return (
    <div className="fixed top-0 z-50 w-full p-4 text-white bg-blue-500">
      <nav className="flex items-center justify-between px-6 py-4 text-white bg-green-600">
        <div className="flex items-center space-x-3">
          <img
            src="/love-travels.png"
            alt="Love Travels Logo"
            className="w-11 h-11"
          />
          <h1 className="text-2xl font-bold">Love Travels</h1>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#Destinos" className="hover:text-blue-500">
              Destinos
            </a>
          </li>
          <li>
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
