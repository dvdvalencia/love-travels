// src/components/Destination.jsx
import { useState } from "react";
import HotelCard from './HotelCard';
import Plan from "@/components/Plan.jsx";
const Destination = ({ data, backgroundImage }) => {
  const [selectedMonth, setSelectedMonth] = useState("");

  // Filtrar hoteles según el mes seleccionado
  const filteredHotels =
    selectedMonth === ""
      ? data.hoteles
      : data.hoteles.filter((hotel) =>
          hotel.fecha.includes(selectedMonth)
        );

  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <br /><br />
      <br />
      <br />
      <br />
      <h1 className="text-4xl font-bold text-center">{data.destino}</h1>
      <p className="mt-2 text-lg text-center">
        Fechas programadas: {data.fechas_programadas}
      </p>
            {/* Dropdown para seleccionar el mes */}
            <select
        className="p-2 mt-4 text-black rounded-lg"
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        <option value="">Todos los meses</option>
        {[
          "Febrero", "Marzo", "Abril", "Mayo", "Junio",
          "Julio", "Agosto", "Septiembre", "Octubre",
          "Noviembre", "Diciembre",
        ].map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>


      <div className="w-11/12 p-4 mt-6 bg-black bg-opacity-50 rounded-lg md:w-2/3">
        <h2 className="text-2xl font-semibold text-center">{data.destino.toUpperCase()} 2025</h2>
        <div className="mt-4 space-y-4">
        {filteredHotels.length > 0 ? (
            filteredHotels.map((hotel, index) => (
              <HotelCard key={index} hotel={hotel} />
            ))
          ) : (
            <p className="text-lg text-center">No hay hoteles disponibles para este mes.</p>
          )}
        </div>
      </div>
      <Plan />
    </div>
  );
};

export default Destination;