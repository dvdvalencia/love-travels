const Filters = ({ 
    selectedMonth, setSelectedMonth, 
    selectedPrice, setSelectedPrice, 
    selectedNights, setSelectedNights, 
    selectedHotel, setSelectedHotel, 
    uniqueHotels 
  }) => {
    return (
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {/* Filtro por mes */}
        <select className="p-2 text-gray-200 rounded-lg bg-opacity-80 bg-slate-700"
          value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
          <option value="">Todos los meses</option>
          {["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
            .map((month) => <option key={month} value={month}>{month}</option>)}
        </select>
  
        {/* Filtro por precio */}
        <select className="p-2 text-gray-200 rounded-lg bg-opacity-80 bg-slate-700"
          value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)}>
          <option value="">Todos los precios</option>
          <option value="0-500000">Hasta 500,000</option>
          <option value="500000-1000000">500,000 - 1,000,000</option>
          <option value="1000000+">Más de 1,000,000</option>
        </select>
  
        {/* Filtro por noches */}
        <select className="p-2 text-gray-200 rounded-lg bg-opacity-80 bg-slate-700"
          value={selectedNights} onChange={(e) => setSelectedNights(e.target.value)}>
          <option value="">Todas las noches</option>
          <option value="2">2 Noches</option>
          <option value="3">3 Noches</option>
          <option value="4">4 Noches</option>
        </select>
  
        {/* Filtro por hotel */}
        <select className="p-2 text-gray-200 rounded-lg bg-opacity-80 bg-slate-700"
          value={selectedHotel} onChange={(e) => setSelectedHotel(e.target.value)}>
          <option value="">Todos los hospedajes</option>
          {uniqueHotels.map((hotelName) => (
            <option key={hotelName} value={hotelName}>{hotelName}</option>
          ))}
        </select>
      </div>
    );
  };
  
  export default Filters;
  