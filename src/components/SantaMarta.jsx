"use client";

import { useState, useEffect } from "react";
import Destination from './Destination';

const SantaMarta = () => {
  const [data, setData] = useState(null);

  // Cargar el archivo JSON al montar el componente
  useEffect(() => {
    fetch("/santaMarta.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error al cargar el JSON:", error));
  }, []);

  if (!data) {
    return <div className="text-center text-white">Cargando información...</div>;
  }

  return <Destination data={data} backgroundImage="/BGsantaMarta.jpg" />;
};

export default SantaMarta;
