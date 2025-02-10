"use client";
import { useState } from "react";
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isInteriorOpen, setIsInteriorOpen] = useState(false);

  const toggleDropdown = () => {
    isInteriorOpen && setIsInteriorOpen(false);
    setIsDropdownOpen(!isDropdownOpen);
  };
  

  const toggleInteriorDropdown = () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false); 
    }
    setIsInteriorOpen(!isInteriorOpen);
  };

  const interiorLocations = [
    "Amazonas", "Boyacá", "Buga", "Bogotá - Plan Visa", "Caño Cristales", "Desierto de la Tatacoa",
    "Eje Cafetero", "Llanos Orientales", "Huila al Límite", "Nevado de Santa Isabel", "Nevado del Ruiz",
    "Santander", "Sur de Colombia y Tulcán Ecuador",
  ];

  const seaLocations = [
    "Tolú y Coveñas", "Arboletes", "Bahía Solano", "Bahía de Triganá", "Capurganá",
    "Cartagena", "Combinado por el caribe - Terrestre", "Isla Fuerte", "Isla Palma",
    "Isla Margarita - Venezuela", "La Guajira", "Santa Marta",
    "San Andrés", "San Bernardo del Viento", "Necoclí", "Nuquí", "Providencia",
  ];

  const customRoutes = {
    "Tolú y Coveñas": "/tolu",
    "Arboletes": "/arboletes",
    "Bahía Solano": "/bahia-solano",
    "Bahía de Triganá":"trigana",
    "Capurganá": "/capurgana",
    "Cartagena": "/cartagena",
    "Combinado por el caribe - Terrestre": "/combinado",
    "Isla Fuerte": "/isla-fuerte",
    "Isla Palma": "/isla-palma",
    "Isla Margarita - Venezuela": "/isla-margarita",
    "La Guajira": "/guajira",
    "Santa Marta": "/santamarta",
    "San Andrés": "/san-andres",
    "San Bernardo del Viento": "/san-bernardo",
    "Necoclí": "/necocli",
    "Nuquí": "/nuqui",
    "Providencia": "/providencia",


    "Amazonas": "/amazonas",
  };

  return (
    <div className="fixed top-0 z-50 w-full h-40 text-white "
      style={{ backgroundImage: 'url(https://th.bing.com/th/id/R.5587996ef551036d330197fc977c8fb8?rik=N5NC1d4AGjzTFg&riu=http%3a%2f%2fisclinical.com%2fmedia%2frevslider%2fSuperSerum%2fSS_BG.jpg&ehk=ZbZJcRrlkPesJMWjtIp45JqLS8yOG6pQskbipmtnmB0%3d&risl=&pid=ImgRaw&r=0)' }}
    >
      <nav className="flex flex-col items-center justify-between px-6 py-4 text-white">
        {/* Logo */}
        <div className="flex items-center w-full space-x-3">
          <img src="/love-travels.png" alt="Love Travels Logo" className="w-20 h-20" />
          <h1 className="flex-grow text-5xl font-bold text-center">LOVE TRAVELS</h1>
        </div>

        {/* Navegación */}
        <ul className="flex items-center mt-2 space-x-8">
          <NavItem label="MAR" isOpen={isDropdownOpen} toggle={toggleDropdown}>
            <DropdownMenu locations={seaLocations} customRoutes={customRoutes} />
          </NavItem>

          <NavItem label="Interior de Colombia" isOpen={isInteriorOpen} toggle={toggleInteriorDropdown}>
            <DropdownMenu locations={interiorLocations} customRoutes={customRoutes} />
          </NavItem>

          <li>
            <a href="/contacto">
              <button className="px-8 py-2 text-lg text-white bg-green-600 rounded hover:bg-green-700">
                Contacto
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
