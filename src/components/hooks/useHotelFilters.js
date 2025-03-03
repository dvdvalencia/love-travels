// import { useState } from "react";

// const useHotelFilters = (hoteles) => {
//   const [selectedMonth, setSelectedMonth] = useState("");
//   const [selectedPrice, setSelectedPrice] = useState("");
//   const [selectedNights, setSelectedNights] = useState("");
//   const [selectedHotel, setSelectedHotel] = useState("");

//   const uniqueHotels = [...new Set(hoteles.map((hotel) => hotel.nombre))];

//   const filteredHotels = hoteles.filter((hotel) => {
//     const matchesMonth =
//       selectedMonth === "" || hotel.fecha.includes(selectedMonth);
//     const matchesPrice =
//       selectedPrice === "" ||
//       (selectedPrice === "0-500000" && hotel.precio <= 500000) ||
//       (selectedPrice === "500000-1000000" &&
//         hotel.precio > 500000 &&
//         hotel.precio <= 1000000) ||
//       (selectedPrice === "1000000+" && hotel.precio > 1000000);
//     const matchesNights =
//       selectedNights === "" || Number(hotel.noches) === Number(selectedNights);
//     const matchesHotel = selectedHotel === "" || hotel.nombre === selectedHotel;

//     return matchesMonth && matchesPrice && matchesNights && matchesHotel;
//   });

//   return {
//     selectedMonth,
//     setSelectedMonth,
//     selectedPrice,
//     setSelectedPrice,
//     selectedNights,
//     setSelectedNights,
//     selectedHotel,
//     setSelectedHotel,
//     uniqueHotels,
//     filteredHotels,
//   };
// };

// export default useHotelFilters;


// import { useState } from "react";

// const useHotelFilters = (hoteles = []) => {
//   console.log("hoteles recibidos:", hoteles);
//   const [selectedMonth, setSelectedMonth] = useState("");
//   const [selectedPrice, setSelectedPrice] = useState("");
//   const [selectedNights, setSelectedNights] = useState("");
//   const [selectedHotel, setSelectedHotel] = useState("");

//   const uniqueHotels = [...new Set(hoteles.map((hotel) => hotel.nombre))];
//   const uniquePrices = [...new Set(hoteles.map((hotel) => hotel.precio))]
//     .sort((a, b) => a - b);

//   const filteredHotels = hoteles.filter((hotel) => {
//     const matchesMonth =
//       selectedMonth === "" || hotel.fecha.includes(selectedMonth);
//     const matchesPrice =
//       selectedPrice === "" ||
//       Number(hotel.precio) === Number(selectedPrice);
//     const matchesNights =
//       selectedNights === "" ||
//       Number(hotel.noches) === Number(selectedNights);
//     const matchesHotel =
//       selectedHotel === "" || hotel.nombre === selectedHotel;

//     return matchesMonth && matchesPrice && matchesNights && matchesHotel;
//   });

//   return {
//     selectedMonth,
//     setSelectedMonth,
//     selectedPrice,
//     setSelectedPrice,
//     selectedNights,
//     setSelectedNights,
//     selectedHotel,
//     setSelectedHotel,
//     uniqueHotels,
//     uniquePrices,
//     filteredHotels,
//   };
// };

// export default useHotelFilters;
import { useState } from "react";

const useHotelFilters = (hoteles = []) => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedNights, setSelectedNights] = useState("");
  const [selectedHotel, setSelectedHotel] = useState("");

  const uniqueHotels = [...new Set(hoteles.map((hotel) => hotel.nombre))];
  const uniquePrices = [...new Set(hoteles.map((hotel) => hotel.precio))]
    .sort((a, b) => a - b);

  const filteredHotels = hoteles.filter((hotel) => {
    const matchesMonth =
      selectedMonth === "" || hotel.fecha.includes(selectedMonth);
    const matchesPrice =
      selectedPrice === "" ||
      Number(hotel.precio) === Number(selectedPrice);
    const matchesNights =
      selectedNights === "" ||
      Number(hotel.noches) === Number(selectedNights);
    const matchesHotel =
      selectedHotel === "" || hotel.nombre === selectedHotel;

    return matchesMonth && matchesPrice && matchesNights && matchesHotel;
  });

  return {
    selectedMonth,
    setSelectedMonth,
    selectedPrice,
    setSelectedPrice,
    selectedNights,
    setSelectedNights,
    selectedHotel,
    setSelectedHotel,
    uniqueHotels,
    uniquePrices,
    filteredHotels,
  };
};

export default useHotelFilters;
