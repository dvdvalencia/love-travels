"use client";
import { useState, useEffect } from "react";
import Destination from "./Destination";

const IslaMargarita = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/isla-margarita.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error al cargar el JSON:", error));
  }, []);

  if (!data) {
    return <div className="text-center text-white">Cargando información</div>;
  }

  return <Destination data={data} backgroundImage="/BGislaMargarita.jpg" />;
};

export default IslaMargarita;