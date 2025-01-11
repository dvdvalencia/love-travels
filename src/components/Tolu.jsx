"use client";

import { useState, useEffect } from "react";

const Tolu = () => {
  const [data, setData] = useState(null);

  // Cargar el archivo JSON al montar el componente
  useEffect(() => {
    fetch("/tolu.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error al cargar el JSON:", error));
  }, []);

  if (!data) {
    return <div className="text-center text-white">Cargando información...</div>;
  }

  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen text-white"
      style={{
        backgroundImage: `url(${data.BGimagen})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl font-bold text-center">{data.destino}</h1>
      <p className="mt-2 text-lg text-center">
        Fechas programadas: {data.fechas_programadas}
      </p>

      <div className="w-11/12 p-4 mt-6 bg-black bg-opacity-50 rounded-lg md:w-2/3">
        <h2 className="text-2xl font-semibold text-center">Hoteles</h2>
        <div className="mt-4 space-y-4">
          {data.hoteles.map((hotel, index) => (
            <div
              key={index}
              className="p-4 bg-gray-800 border border-gray-600 rounded-lg"
            >
              <h3 className="text-xl font-bold">{hotel.nombre}</h3>
              <p>
                <strong>Fecha:</strong> {hotel.fecha}
              </p>
              <p>
                <strong>Precio:</strong> ${hotel.precio.toLocaleString("es-CO")}
              </p>
              <p>
                <strong>Noches:</strong> {hotel.noches}
              </p>
              <p>
                <strong>Características:</strong> {hotel.caracteristicas}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tolu;
