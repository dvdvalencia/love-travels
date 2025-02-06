// src/components/Destination.jsx
import { useState } from "react";
import HotelCard from './HotelCard';
import Plan from "@/components/Plan.jsx";
const Destination = ({ data, backgroundImage }) => {
  const [selectedMonth, setSelectedMonth] = useState("");
const [selectedPrice, setSelectedPrice] = useState("");
const [selectedNights, setSelectedNights] = useState("");

const filteredHotels = data.hoteles.filter((hotel) => {
  const matchesMonth = selectedMonth === "" || hotel.fecha.includes(selectedMonth);
  const matchesPrice =
    selectedPrice === "" || 
    (selectedPrice === "0-500000" && hotel.precio <= 500000) ||
    (selectedPrice === "500000-1000000" && hotel.precio > 500000 && hotel.precio <= 1000000) ||
    (selectedPrice === "1000000+" && hotel.precio > 1000000);
  const matchesNights =
    selectedNights === "" || Number(hotel.noches) === Number(selectedNights);

  return matchesMonth && matchesPrice && matchesNights;
});

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

    {/* Filtros */}
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      {/* Filtro por mes */}
      <select
        className="p-2 text-gray-200 rounded-lg bg-opacity-80 bg-slate-700"
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

      {/* Filtro por precio */}
      <select
        className="p-2 text-gray-200 rounded-lg bg-opacity-80 bg-slate-700"
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
      >
        <option value="">Todos los precios</option>
        <option value="0-500000">Hasta 500,000</option>
        <option value="500000-1000000">500,000 - 1,000,000</option>
        <option value="1000000+">Más de 1,000,000</option>
      </select>

      {/* Filtro por noches */}
      <select
        className="p-2 text-gray-200 rounded-lg bg-opacity-80 bg-slate-700"
        value={selectedNights}
        onChange={(e) => setSelectedNights(e.target.value)}
      >
        <option value="">Todas las noches</option>
        <option value="2">2 Noches</option>
        <option value="3">3 Noches</option>
        <option value="4">4 Noches</option>
      </select>
    </div>

      <div className="w-11/12 p-4 mt-6 bg-black bg-opacity-50 rounded-lg md:w-2/3">
        <h2 className="text-2xl font-semibold text-center">{data.destino.toUpperCase()} 2025</h2>
        <div className="mt-4 space-y-4">
        {filteredHotels.length > 0 ? (
            filteredHotels.map((hotel, index) => (
              <HotelCard key={index} hotel={hotel} />
            ))
          ) : (
            <p className="text-lg text-center">No hay fechas disponibles con estas caracteristicas.</p>
          )}
        </div>
      </div>
      <Plan />
    </div>
  );
};

export default Destination;