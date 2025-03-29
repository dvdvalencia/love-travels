// CityMetroComuna13.jsx
"use client";
import { useState, useEffect } from "react";
import Destination from "./Destination";

const CityMetroComuna13 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/city-metro-comuna-13.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error al cargar el JSON:", error));
  }, []);

  if (!data) {
    return <div className="text-center text-white">Cargando información</div>;
  }

  return <Destination data={data} backgroundImage="/BGcityMetroComuna13.jpg" />;
};

export default CityMetroComuna13;
