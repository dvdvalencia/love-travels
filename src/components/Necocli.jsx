// Necocli.jsx
"use client";
import { useState, useEffect } from "react";
import Destination from "./Destination";

const Necocli = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/necocli.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error al cargar el JSON:", error));
  }, []);

  if (!data) {
    return <div className="text-center text-white">Cargando información</div>;
  }

  return <Destination data={data} backgroundImage="/BGnecocli.jpg" />;
};

export default Necocli;