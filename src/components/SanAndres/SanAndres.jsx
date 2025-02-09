"use client"
import React, { useState } from "react";
import data from "./sanAndres.json";

const HotelFilter = () => {
  const [price, setPrice] = useState(0);
  const [nights, setNights] = useState(0);

  const filteredHotels = data.filter(
    (hotel) => hotel.precio >= price && hotel.noches >= nights
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Filtrar Hoteles</h2>
      <div className="mb-4">
        <label className="block">Precio mínimo:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="p-2 border"
        />
      </div>
      <div className="mb-4">
        <label className="block">Número de noches:</label>
        <input
          type="number"
          value={nights}
          onChange={(e) => setNights(Number(e.target.value))}
          className="p-2 border"
        />
      </div>
      <ul>
        {filteredHotels.map((hotel) => (
          <li key={hotel.id} className="p-2 mb-2 border">
            <h3 className="font-bold">{hotel.nombre}</h3>
            <p>Precio: {hotel.precio}</p>
            <p>Noches: {hotel.noches}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelFilter;
