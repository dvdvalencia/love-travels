(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[269],{5344:(e,s,r)=>{Promise.resolve().then(r.bind(r,9075))},4142:(e,s,r)=>{"use strict";r.d(s,{A:()=>o});var a=r(5155),t=r(2115);let c=e=>{let{hotel:s}=e;return(0,a.jsxs)("div",{className:"p-4 bg-gray-800 border border-gray-600 rounded-lg bg-opacity-80",children:[(0,a.jsx)("h3",{className:"text-xl font-bold",children:s.nombre}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Fecha:"})," ",s.fecha]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Precio:"})," $",s.precio.toLocaleString("es-CO")]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Noches:"})," ",s.noches]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Caracter\xedsticas:"})," ",s.caracteristicas]})]})},l=()=>(0,a.jsx)("div",{className:"w-11/12 p-4 mt-6 bg-black bg-opacity-50 rounded-lg md:w-2/3",children:(0,a.jsxs)("div",{className:"p-4 bg-gray-800 border border-gray-600 rounded-lg bg-opacity-90",children:[(0,a.jsx)("h1",{className:"flex-grow text-3xl font-bold text-center",children:"El plan incluye"}),(0,a.jsxs)("p",{children:["TRANSPORTE: De turismo de acuerdo al n\xfamero de personas con TV, ba\xf1o, DVD, sillas reclinables. ",(0,a.jsx)("br",{}),"ALOJAMIENTO: Alojamiento seleccionado en cove\xf1as sobre la primera linea del mar. ",(0,a.jsx)("br",{}),"ALIMENTACI\xd3N: Desayuno y cena por noche de alojamiento (entran con cena y salen con desayuno), en Apartahotel Acapulco se obsequian los almuerzos. ",(0,a.jsx)("br",{}),"TARJETA DE ASISTENCIA M\xc9DICA: Cobertura en caso de accidente enfermedad ocasionada por el viaje. ",(0,a.jsx)("br",{}),"COORDINADOR ACOMPA\xd1ANTE: durante los recorridos tur\xedsticos."]})]})}),o=e=>{let{data:s,backgroundImage:r}=e,[o,n]=(0,t.useState)(""),i=""===o?s.hoteles:s.hoteles.filter(e=>e.fecha.includes(o));return(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center w-full min-h-screen text-white",style:{backgroundImage:"url(".concat(r,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:[(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("h1",{className:"text-4xl font-bold text-center",children:s.destino}),(0,a.jsxs)("p",{className:"mt-2 text-lg text-center",children:["Fechas programadas: ",s.fechas_programadas]}),(0,a.jsxs)("select",{className:"p-2 mt-4 text-black rounded-lg",value:o,onChange:e=>n(e.target.value),children:[(0,a.jsx)("option",{value:"",children:"Todos los meses"}),["Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"].map(e=>(0,a.jsx)("option",{value:e,children:e},e))]}),(0,a.jsxs)("div",{className:"w-11/12 p-4 mt-6 bg-black bg-opacity-50 rounded-lg md:w-2/3",children:[(0,a.jsxs)("h2",{className:"text-2xl font-semibold text-center",children:[s.destino.toUpperCase()," 2025"]}),(0,a.jsx)("div",{className:"mt-4 space-y-4",children:i.length>0?i.map((e,s)=>(0,a.jsx)(c,{hotel:e},s)):(0,a.jsx)("p",{className:"text-lg text-center",children:"No hay hoteles disponibles para este mes."})})]}),(0,a.jsx)(l,{})]})}},9075:(e,s,r)=>{"use strict";r.d(s,{default:()=>l});var a=r(5155),t=r(2115),c=r(4142);let l=()=>{let[e,s]=(0,t.useState)(null);return((0,t.useEffect)(()=>{fetch("/tolu.json").then(e=>e.json()).then(e=>s(e)).catch(e=>console.error("Error al cargar el JSON:",e))},[]),e)?(0,a.jsx)(c.A,{data:e,backgroundImage:"/BG-cove\xf1as.jpg"}):(0,a.jsx)("div",{className:"text-center text-white",children:"Cargando informaci\xf3n..."})}}},e=>{var s=s=>e(e.s=s);e.O(0,[441,517,358],()=>s(5344)),_N_E=e.O()}]);