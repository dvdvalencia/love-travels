const Plan = () => {
  return (
    
    <div className="w-11/12 p-4 mt-6 bg-black bg-opacity-50 rounded-lg md:w-2/3">
      <div className="p-4 bg-gray-800 border border-gray-600 rounded-lg bg-opacity-90">
        <h1 className="flex-grow text-3xl font-bold text-center">
          El plan incluye
        </h1>
        <p>
          TRANSPORTE: De turismo de acuerdo al número de personas con TV, baño,
          DVD, sillas reclinables. <br />
          ALOJAMIENTO: Alojamiento seleccionado con aire acondicionado. <br />
          {/* ALIMENTACIÓN: Desayuno y cena por noche de alojamiento (entran con
          cena y salen con desayuno), en Apartahotel Acapulco se obsequian los
          almuerzos. <br /> */}
          TARJETA DE ASISTENCIA MÉDICA: Cobertura en caso de accidente
          enfermedad ocasionada por el viaje. <br />
          COORDINADOR ACOMPAÑANTE: durante los recorridos turísticos.
        </p>
      </div>
    </div>
  );
};
export default Plan;


