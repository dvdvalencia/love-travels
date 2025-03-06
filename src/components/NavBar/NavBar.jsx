"use client";
import { useState } from "react";
import Link from "next/link";
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isInteriorOpen, setIsInteriorOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
    "Bahía de Triganá":"/trigana",
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
    "Boyacá": "/boyaca",
    "Buga": "/buga",
    "Bogotá - Plan Visa": "/bogota-visa",
    "Caño Cristales": "/cano-cristales",
    "Desierto de la Tatacoa": "/tatacoa",
    "Eje Cafetero": "/eje-cafetero",
    "Llanos Orientales": "/llanos-orientales",
    "Huila al Límite": "/huila",
    "Nevado de Santa Isabel": "/nevado-santa-isabel",
    "Santander": "/santander",
    "Sur de Colombia y Tulcán Ecuador": "/tulcan-ecuador",
  };

  return (    // <div className="fixed top-0 z-50 w-full h-auto bg-[url('/BGnavBar.jpeg')] text-white ">
      <div className="fixed top-0 z-50 w-full h-auto text-white bg-[url('/BGnavBar.jpeg')] bg-cover bg-center  "
      // style={{ backgroundImage: 'url(/BGnavBar.jpeg)' }}
>

      <nav className="flex flex-col items-center justify-between px-6 py-4 text-white">
        {/* Logo */}
        <div className="flex items-center w-full space-x-3">
          <Link href="/">
          <img src="/love-travels-logo.ico" alt="Love Travels Logo" className="w-20 h-20" />
          </Link>
          <Link href="/" className="flex-grow text-5xl font-bold text-center">
          <h1 >LOVE TRAVELS</h1>
          </Link>
          <button className="block ml-auto " onClick={toggleMenu}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Navegación */}
        <ul className={`flex ${isMenuOpen ? 'flex-col space-y-2' : 'hidden'} mt-2 sm:flex-row sm:space-y-0 sm:space-x-8 sm:mt-0 sm:flex`}>
          <NavItem label="PLAYA Y MAR" isOpen={isDropdownOpen} toggle={toggleDropdown}>
            <DropdownMenu locations={seaLocations} customRoutes={customRoutes} />
          </NavItem>

          <NavItem label="INTERIOR DE COLOMBIA" isOpen={isInteriorOpen} toggle={toggleInteriorDropdown}>
            <DropdownMenu locations={interiorLocations} customRoutes={customRoutes} />
          </NavItem>

          <li>
            <Link href="/contacto">
              <button className="px-8 py-2 text-lg text-white bg-green-600 rounded hover:bg-green-700">
                CONTACTO
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
