// // Amazonas.jsx
// "use client";
// import { useState, useEffect } from "react";
// import Destination from "./Destination";

// const Amazonas = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/amazonas.json")
//       .then((response) => response.json())
//       .then((jsonData) => setData(jsonData))
//       .catch((error) => console.error("Error al cargar el JSON:", error));
//   }, []);

//   if (!data) {
//     return <div className="text-center text-white">Cargando información</div>;
//   }

//   return <Destination data={data} backgroundImage="/BGamazonas.jpg" />;
// };

// export default Amazonas;

// // Boyaca.jsx
// "use client";
// import { useState, useEffect } from "react";
// import Destination from "./Destination";

// const Boyaca = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/boyaca.json")
//       .then((response) => response.json())
//       .then((jsonData) => setData(jsonData))
//       .catch((error) => console.error("Error al cargar el JSON:", error));
//   }, []);

//   if (!data) {
//     return <div className="text-center text-white">Cargando información</div>;
//   }

//   return <Destination data={data} backgroundImage="/BGboyaca.jpg" />;
// };

// export default Boyaca;

// // Buga.jsx
// "use client";
// import { useState, useEffect } from "react";
// import Destination from "./Destination";

// const Buga = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/buga.json")
//       .then((response) => response.json())
//       .then((jsonData) => setData(jsonData))
//       .catch((error) => console.error("Error al cargar el JSON:", error));
//   }, []);

//   if (!data) {
//     return <div className="text-center text-white">Cargando información</div>;
//   }

//   return <Destination data={data} backgroundImage="/BGbuga.jpg" />;
// };

// export default Buga;

// // BogotaVisa.jsx
// "use client";
// import { useState, useEffect } from "react";
// import Destination from "./Destination";

// const BogotaVisa = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/bogota-visa.json")
//       .then((response) => response.json())
//       .then((jsonData) => setData(jsonData))
//       .catch((error) => console.error("Error al cargar el JSON:", error));
//   }, []);

//   if (!data) {
//     return <div className="text-center text-white">Cargando información</div>;
//   }

//   return <Destination data={data} backgroundImage="/BGbogotaVisa.jpg" />;
// };

// export default BogotaVisa;

// // CanoCristales.jsx
// "use client";
// import { useState, useEffect } from "react";
// import Destination from "./Destination";

// const CanoCristales = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/cano-cristales.json")
//       .then((response) => response.json())
//       .then((jsonData) => setData(jsonData))
//       .catch((error) => console.error("Error al cargar el JSON:", error));
//   }, []);

//   if (!data) {
//     return <div className="text-center text-white">Cargando información</div>;
//   }

//   return <Destination data={data} backgroundImage="/BGcanoCristales.jpg" />;
// };

// export default CanoCristales;

// // Tatacoa.jsx
// "use client";
// import { useState, useEffect } from "react";
// import Destination from "./Destination";

// const Tatacoa = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/tatacoa.json")
//       .then((response) => response.json())
//       .then((jsonData) => setData(jsonData))
//       .catch((error) => console.error("Error al cargar el JSON:", error));
//   }, []);

//   if (!data) {
//     return <div className="text-center text-white">Cargando información</div>;
//   }

//   return <Destination data={data} backgroundImage="/BGtatacoa.jpg" />;
// };

// export default Tatacoa;

// // EjeCafetero.jsx
// "use client";
// import { useState, useEffect } from "react";
// import Destination from "./Destination";

// const EjeCafetero = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/eje-cafetero.json")
//       .then((response) => response.json())
//       .then((jsonData) => setData(jsonData))
//       .catch((error) => console.error("Error al cargar el JSON:", error));
//   }, []);

//   if (!data) {
//     return <div className="text-center text-white">Cargando información</div>;
//   }

//   return <Destination data={data} backgroundImage="/BGejeCafetero.jpg" />;
// };

// export default EjeCafetero;

// // LlanosOrientales.jsx
// "use client";
// import { useState, useEffect } from "react";
// import Destination from "./Destination";

// const LlanosOrientales = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/llanos-orientales.json")
//       .then((response) => response.json())
//       .then((jsonData) => setData(jsonData))
//       .catch((error) => console.error("Error al cargar el JSON:", error));
//   }, []);

//   if (!data) {
//     return <div className="text-center text-white">Cargando información</div>;
//   }

//   return <Destination data={data} backgroundImage="/BGllanosOrientales.jpg" />;
// };

// export default LlanosOrientales;

// // Huila.jsx
// "use client";
// import { useState, useEffect } from "react";
// import Destination from "./Destination";

// const Huila = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/huila.json")
//       .then((response) => response.json())
//       .then((jsonData) => setData(jsonData))
//       .catch((error) => console.error("Error al cargar el JSON:", error));
//   }, []);

//   if (!data) {
//     return <div className="text-center text-white">Cargando información</div>;
//   }

//   return <Destination data={data} backgroundImage="/BGhuila.jpg" />;
// };

// export default Huila;

// // NevadoSantaIsabel.jsx
// "use client";
// import { useState, useEffect } from "react";
// import Destination from "./Destination";

// const NevadoSantaIsabel = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/nevado-santa-isabel.json")
//       .then((response) => response.json())
//       .then((jsonData) => setData(jsonData))
//       .catch((error) => console.error("Error al cargar el JSON:", error));
//   }, []);

//   if (!data) {
//     return <div className="text-center text-white">Cargando información</div>;
//   }

//   return <Destination data={data} backgroundImage="/BGnevadoSantaIsabel.jpg" />;
// };

// export default NevadoSantaIsabel;

// // Santander.jsx
// "use client";
// import { useState, useEffect } from "react";
// import Destination from "./Destination";

// const Santander = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/santander.json")
//       .then((response) => response.json())
//       .then((jsonData) => setData(jsonData))
//       .catch((error) => console.error("Error al cargar el JSON:", error));
//   }, []);

//   if (!data) {
//     return <div className="text-center text-white">Cargando información</div>;
//   }

//   return <Destination data={data} backgroundImage="/BGsantander.jpg" />;
// };

// export default Santander;

// // TulcanEcuador.jsx
// "use client";
// import { useState, useEffect } from "react";
// import Destination from "./Destination";

// const TulcanEcuador = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/tulcan-ecuador.json")
//       .then((response) => response.json())
//       .then((jsonData) => setData(jsonData))
//       .catch((error) => console.error("Error al cargar el JSON:", error));
//   }, []);

//   if (!data) {
//     return <div className="text-center text-white">Cargando información</div>;
//   }

//   return <Destination data={data} backgroundImage="/BGtulcanEcuador.jpg" />;
// };

// export default TulcanEcuador;