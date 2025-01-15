const HotelCard = ({ hotel }) => {
    return (
      <div className="p-4 bg-gray-800 border border-gray-600 rounded-lg bg-opacity-90">
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
    );
  };
  
  export default HotelCard;