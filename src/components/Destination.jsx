// // src/components/Destination.jsx

import DestinationDetails from "./DestinationDetails";
import Filters from "./Filters";
import HotelList from "./HotelList";
import useHotelFilters from "@/components/hooks/useHotelFilters";
// import Plan from "@/components/Plan";


const Destination = ({ data, backgroundImage }) => {
  const { 
    selectedMonth, setSelectedMonth, 
    selectedPrice, setSelectedPrice, 
    selectedNights, setSelectedNights, 
    selectedHotel, setSelectedHotel, 
    uniqueHotels, filteredHotels 
  } = useHotelFilters(data.hoteles);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen text-white"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
      
      <h1 className="mt-40 text-4xl font-bold text-center text-black">{data.destino}</h1>
      <p className="mt-2 text-lg text-center">Fechas programadas: {data.fechas_programadas}</p>

      {/* Filtros */}
      <Filters 
        selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth}
        selectedPrice={selectedPrice} setSelectedPrice={setSelectedPrice}
        selectedNights={selectedNights} setSelectedNights={setSelectedNights}
        selectedHotel={selectedHotel} setSelectedHotel={setSelectedHotel}
        uniqueHotels={uniqueHotels} 
      />

      {/* Lista de hoteles */}
      <HotelList filteredHotels={filteredHotels} />
      <DestinationDetails data={data} />

      {/* <Plan /> */}
    </div>
  );
};

export default Destination;