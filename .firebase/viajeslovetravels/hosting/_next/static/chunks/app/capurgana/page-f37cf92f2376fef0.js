(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[707],{2086:(e,s,a)=>{Promise.resolve().then(a.bind(a,4137))},4137:(e,s,a)=>{"use strict";a.d(s,{default:()=>l});var r=a(5155),t=a(2115),c=a(4142);let l=()=>{let[e,s]=(0,t.useState)(null);return((0,t.useEffect)(()=>{fetch("/capurgana.json").then(e=>e.json()).then(e=>s(e)).catch(e=>console.error("Error al cargar el JSON:",e))},[]),e)?(0,r.jsx)(c.A,{data:e,backgroundImage:"/BGcapurgana.jpg"}):(0,r.jsx)("div",{className:"text-center text-white",children:"Cargando informaci\xf3n..."})}},4142:(e,s,a)=>{"use strict";a.d(s,{A:()=>o});var r=a(5155),t=a(2115);let c=e=>{let{hotel:s}=e;return(0,r.jsxs)("div",{className:"p-4 bg-gray-800 border border-gray-600 rounded-lg bg-opacity-80",children:[(0,r.jsx)("h3",{className:"text-xl font-bold",children:s.nombre}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Fecha:"})," ",s.fecha]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Precio:"})," $",s.precio.toLocaleString("es-CO")]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Noches:"})," ",s.noches]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Caracter\xedsticas:"})," ",s.caracteristicas]})]})},l=()=>(0,r.jsx)("div",{className:"w-11/12 p-4 mt-6 bg-black bg-opacity-50 rounded-lg md:w-2/3",children:(0,r.jsxs)("div",{className:"p-4 bg-gray-800 border border-gray-600 rounded-lg bg-opacity-90",children:[(0,r.jsx)("h1",{className:"flex-grow text-3xl font-bold text-center",children:"El plan incluye"}),(0,r.jsxs)("p",{children:["TRANSPORTE: De turismo de acuerdo al n\xfamero de personas con TV, ba\xf1o, DVD, sillas reclinables. ",(0,r.jsx)("br",{}),"ALOJAMIENTO: Alojamiento seleccionado en cove\xf1as sobre la primera linea del mar. ",(0,r.jsx)("br",{}),"ALIMENTACI\xd3N: Desayuno y cena por noche de alojamiento (entran con cena y salen con desayuno), en Apartahotel Acapulco se obsequian los almuerzos. ",(0,r.jsx)("br",{}),"TARJETA DE ASISTENCIA M\xc9DICA: Cobertura en caso de accidente enfermedad ocasionada por el viaje. ",(0,r.jsx)("br",{}),"COORDINADOR ACOMPA\xd1ANTE: durante los recorridos tur\xedsticos."]})]})}),o=e=>{let{data:s,backgroundImage:a}=e,[o,n]=(0,t.useState)(""),[i,d]=(0,t.useState)(""),[h,x]=(0,t.useState)(""),u=s.hoteles.filter(e=>{let s=""===o||e.fecha.includes(o),a=""===i||"0-500000"===i&&e.precio<=5e5||"500000-1000000"===i&&e.precio>5e5&&e.precio<=1e6||"1000000+"===i&&e.precio>1e6,r=""===h||Number(e.noches)===Number(h);return s&&a&&r});return(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full min-h-screen text-white",style:{backgroundImage:"url(".concat(a,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:[(0,r.jsx)("h1",{className:"mt-40 text-4xl font-bold text-center",children:s.destino}),(0,r.jsxs)("p",{className:"mt-2 text-lg text-center",children:["Fechas programadas: ",s.fechas_programadas]}),(0,r.jsxs)("div",{className:"flex flex-wrap justify-center gap-4 mt-4",children:[(0,r.jsxs)("select",{className:"p-2 text-gray-200 rounded-lg bg-opacity-80 bg-slate-700",value:o,onChange:e=>n(e.target.value),children:[(0,r.jsx)("option",{value:"",children:"Todos los meses"}),["Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"].map(e=>(0,r.jsx)("option",{value:e,children:e},e))]}),(0,r.jsxs)("select",{className:"p-2 text-gray-200 rounded-lg bg-opacity-80 bg-slate-700",value:i,onChange:e=>d(e.target.value),children:[(0,r.jsx)("option",{value:"",children:"Todos los precios"}),(0,r.jsx)("option",{value:"0-500000",children:"Hasta 500,000"}),(0,r.jsx)("option",{value:"500000-1000000",children:"500,000 - 1,000,000"}),(0,r.jsx)("option",{value:"1000000+",children:"M\xe1s de 1,000,000"})]}),(0,r.jsxs)("select",{className:"p-2 text-gray-200 rounded-lg bg-opacity-80 bg-slate-700",value:h,onChange:e=>x(e.target.value),children:[(0,r.jsx)("option",{value:"",children:"Todas las noches"}),(0,r.jsx)("option",{value:"2",children:"2 Noches"}),(0,r.jsx)("option",{value:"3",children:"3 Noches"}),(0,r.jsx)("option",{value:"4",children:"4 Noches"})]})]}),(0,r.jsxs)("div",{className:"w-11/12 p-4 mt-6 bg-black bg-opacity-50 rounded-lg md:w-2/3",children:[(0,r.jsxs)("h2",{className:"text-2xl font-semibold text-center",children:[s.destino.toUpperCase()," 2025"]}),(0,r.jsx)("div",{className:"mt-4 space-y-4",children:u.length>0?u.map((e,s)=>(0,r.jsx)(c,{hotel:e},s)):(0,r.jsx)("p",{className:"text-lg text-center",children:"No hay fechas disponibles con estas caracteristicas."})})]}),(0,r.jsx)(l,{})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[441,517,358],()=>s(2086)),_N_E=e.O()}]);