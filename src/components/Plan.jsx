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
          ALOJAMIENTO: Alojamiento seleccionado en coveñas sobre la primera
          linea del mar. <br />
          ALIMENTACIÓN: Desayuno y cena por noche de alojamiento (entran con
          cena y salen con desayuno), en Apartahotel Acapulco se obsequian los
          almuerzos. <br />
          TARJETA DE ASISTENCIA MÉDICA: Cobertura en caso de accidente
          enfermedad ocasionada por el viaje. <br />
          COORDINADOR ACOMPAÑANTE: durante los recorridos turísticos.
        </p>
      </div>
    </div>
  );
};
export default Plan;



// const Plan = () => {
//     return (
// <div className="w-full max-w-xl mx-auto mt-20">
//   {/* <!-- Tab Buttons --> */}
//   <div className="p-2 bg-blue-500 rounded-t-lg">
//     <div className="flex justify-center space-x-4">
//       <button className="px-4 py-2 font-semibold text-white border-b-4 border-blue-700 hover:bg-blue-700 focus:outline-none tab-button" onclick="showTab('tab1')">Tab 1</button>
//       <button className="px-4 py-2 font-semibold text-white border-b-4 border-blue-700 hover:bg-blue-700 focus:outline-none tab-button" onclick="showTab('tab2')">Tab 2</button>
//       <button className="px-4 py-2 font-semibold text-white border-b-4 border-blue-700 hover:bg-blue-700 focus:outline-none tab-button" onclick="showTab('tab3')">Tab 3</button>
//     </div>
//   </div>

//   {/* <!-- Tab Content --> */}
//   <div id="tab1" className="p-4 bg-white rounded-lg shadow-md tab-content">
//     <h2 className="mb-2 text-2xl font-semibold text-blue-700">Tab 1 Content</h2>
//     <p>
//       Vestibulum condimentum imperdiet velit nec ornare. Nullam lobortis urna posuere quam porta consequat. Donec
//       commodo diam lectus, sit amet tempor dolor scelerisque eget. Vestibulum at lectus dui. Maecenas consectetur tempor
//       ipsum non porttitor. Cras accumsan mattis aliquam. Fusce eleifend maximus elit facilisis condimentum. Mauris non
//       risus sed ligula convallis fermentum.
//       {/* <br> */}
//       Quisque eu purus nunc. Ut eget ligula ac lorem laoreet scelerisque in ut
//       nulla. Quisque volutpat elit eget tellus pharetra, vel sollicitudin velit scelerisque. Vivamus ac libero eu nunc
//       congue malesuada eu vitae est.
//     </p>
//   </div>
//   <div id="tab2" className="hidden p-4 bg-white rounded-lg shadow-md tab-content">
//     <h2 className="mb-2 text-2xl font-semibold text-blue-700">Tab 2 Content</h2>
//     <p>Phasellus eget euismod libero, nec ullamcorper justo. Phasellus eget euismod libero, nec ullamcorper justo.
//       Phasellus eget euismod libero, nec ullamcorper justo. Etiam eget augue in ante gravida facilisis.</p>
//   </div>
//   <div id="tab3" className="hidden p-4 bg-white rounded-lg shadow-md tab-content">
//     <h2 className="mb-2 text-2xl font-semibold text-blue-700">Tab 3 Content</h2>
//     <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut
//       perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis
//       unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
//   </div>
// </div>
      
//       <style>
//       .tab-button.active {
//         background-color: #fff;
//         border-color: #4299e1;
//         color: #4299e1;
//       }
//     </style>
    
//     <script>
//       function showTab(tabId) {
//         // Hide all tab content
//         const tabContents = document.querySelectorAll('.tab-content');
//         tabContents.forEach((content) => {
//           content.classList.add('hidden');
//         });
    
//         // Show the selected tab content
//         const selectedTab = document.getElementById(tabId);
//         if (selectedTab) {
//           selectedTab.classList.remove('hidden');
//         }
    
//         // Remove the 'active' class from all tab buttons
//         const tabButtons = document.querySelectorAll('.tab-button');
//         tabButtons.forEach((button) => {
//           button.classList.remove('active');
//         });
    
//         // Add the 'active' class to the clicked tab button
//         const clickedButton = document.querySelector(`[onclick="showTab('${tabId}')"]`);
//         if (clickedButton) {
//           clickedButton.classList.add('active');
//         }
//       }
    
//       // Initialize the first tab
//       showTab('tab1');
//     </script> 
//     );
//   };
//   export default Plan;