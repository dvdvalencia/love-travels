// src/components/Destination.jsx
import HotelCard from './HotelCard';

const Destination = ({ data, backgroundImage }) => {
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
      <h1 className="text-4xl font-bold text-center">{data.destino}</h1>
      <p className="mt-2 text-lg text-center">
        Fechas programadas: {data.fechas_programadas}
      </p>

      <div className="w-11/12 p-4 mt-6 bg-black bg-opacity-50 rounded-lg md:w-2/3">
        <h2 className="text-2xl font-semibold text-center">{data.destino.toUpperCase()} 2025</h2>
        <div className="mt-4 space-y-4">
          {data.hoteles.map((hotel, index) => (
            <HotelCard key={index} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;