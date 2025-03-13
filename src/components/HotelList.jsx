import HotelCard from "./HotelCard";

const HotelList = ({ filteredHotels }) => {
  return (
    <div className="w-11/12 p-4 mt-6 bg-black bg-opacity-50 rounded-lg md:w-2/3">
      {/* <h2 className="text-2xl font-semibold text-center">HOTELES DISPONIBLES</h2> */}
      <div className="mt-4 space-y-4">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel, index) => <HotelCard key={index} hotel={hotel} />)
        ) : (
          <p className="text-lg text-center">No hay fechas disponibles con estas características.</p>
        )}
      </div>
    </div>
  );
};

export default HotelList;
