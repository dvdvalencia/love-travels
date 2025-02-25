(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[307],{8718:(e,s,a)=>{Promise.resolve().then(a.bind(a,4049))},4142:(e,s,a)=>{"use strict";a.d(s,{A:()=>o});var t=a(5155),r=a(2115);let l=e=>{let{hotel:s}=e;return(0,t.jsxs)("div",{className:"p-4 bg-gray-800 border border-gray-600 rounded-lg bg-opacity-80",children:[(0,t.jsx)("h3",{className:"text-xl font-bold",children:s.nombre}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Fecha:"})," ",s.fecha]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Precio:"})," $",s.precio.toLocaleString("es-CO")]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Noches:"})," ",s.noches]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Caracter\xedsticas:"})," ",s.caracteristicas]})]})},c=()=>(0,t.jsx)("div",{className:"w-11/12 p-4 mt-6 bg-black bg-opacity-50 rounded-lg md:w-2/3",children:(0,t.jsxs)("div",{className:"p-4 bg-gray-800 border border-gray-600 rounded-lg bg-opacity-90",children:[(0,t.jsx)("h1",{className:"flex-grow text-3xl font-bold text-center",children:"El plan incluye"}),(0,t.jsxs)("p",{children:["TRANSPORTE: De turismo de acuerdo al n\xfamero de personas con TV, ba\xf1o, DVD, sillas reclinables. ",(0,t.jsx)("br",{}),"ALOJAMIENTO: Alojamiento seleccionado con aire acondicionado. ",(0,t.jsx)("br",{}),"TARJETA DE ASISTENCIA M\xc9DICA: Cobertura en caso de accidente enfermedad ocasionada por el viaje. ",(0,t.jsx)("br",{}),"COORDINADOR ACOMPA\xd1ANTE: durante los recorridos tur\xedsticos."]})]})}),o=e=>{let{data:s,backgroundImage:a}=e,[o,n]=(0,r.useState)(""),[i,d]=(0,r.useState)(""),[h,x]=(0,r.useState)(""),[u,g]=(0,r.useState)(""),p=[...new Set(s.hoteles.map(e=>e.nombre))],b=s.hoteles.filter(e=>{let s=""===o||e.fecha.includes(o),a=""===i||"0-500000"===i&&e.precio<=5e5||"500000-1000000"===i&&e.precio>5e5&&e.precio<=1e6||"1000000+"===i&&e.precio>1e6,t=""===h||Number(e.noches)===Number(h),r=""===u||e.nombre===u;return s&&a&&t&&r});return(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center w-full min-h-screen text-white",style:{backgroundImage:"url(".concat(a,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:[(0,t.jsx)("h1",{className:"mt-40 text-4xl font-bold text-center text-black",children:s.destino}),(0,t.jsxs)("p",{className:"mt-2 text-lg text-center",children:["Fechas programadas: ",s.fechas_programadas]}),(0,t.jsxs)("div",{className:"flex flex-wrap justify-center gap-4 mt-4",children:[(0,t.jsxs)("select",{className:"p-2 text-gray-200 rounded-lg bg-opacity-80 bg-slate-700",value:o,onChange:e=>n(e.target.value),children:[(0,t.jsx)("option",{value:"",children:"Todos los meses"}),["Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"].map(e=>(0,t.jsx)("option",{value:e,children:e},e))]}),(0,t.jsxs)("select",{className:"p-2 text-gray-200 rounded-lg bg-opacity-80 bg-slate-700",value:i,onChange:e=>d(e.target.value),children:[(0,t.jsx)("option",{value:"",children:"Todos los precios"}),(0,t.jsx)("option",{value:"0-500000",children:"Hasta 500,000"}),(0,t.jsx)("option",{value:"500000-1000000",children:"500,000 - 1,000,000"}),(0,t.jsx)("option",{value:"1000000+",children:"M\xe1s de 1,000,000"})]}),(0,t.jsxs)("select",{className:"p-2 text-gray-200 rounded-lg bg-opacity-80 bg-slate-700",value:h,onChange:e=>x(e.target.value),children:[(0,t.jsx)("option",{value:"",children:"Todas las noches"}),(0,t.jsx)("option",{value:"2",children:"2 Noches"}),(0,t.jsx)("option",{value:"3",children:"3 Noches"}),(0,t.jsx)("option",{value:"4",children:"4 Noches"})]}),(0,t.jsxs)("select",{className:"p-2 text-gray-200 rounded-lg bg-opacity-80 bg-slate-700",value:u,onChange:e=>g(e.target.value),children:[(0,t.jsx)("option",{value:"",children:"Todos los hospedajes"}),p.map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})]}),(0,t.jsxs)("div",{className:"w-11/12 p-4 mt-6 bg-black bg-opacity-50 rounded-lg md:w-2/3",children:[(0,t.jsxs)("h2",{className:"text-2xl font-semibold text-center",children:[s.destino.toUpperCase()," 2025"]}),(0,t.jsx)("div",{className:"mt-4 space-y-4",children:b.length>0?b.map((e,s)=>(0,t.jsx)(l,{hotel:e},s)):(0,t.jsx)("p",{className:"text-lg text-center",children:"No hay fechas disponibles con estas caracteristicas."})})]}),(0,t.jsx)(c,{})]})}},4049:(e,s,a)=>{"use strict";a.d(s,{default:()=>c});var t=a(5155),r=a(2115),l=a(4142);let c=()=>{let[e,s]=(0,r.useState)(null);return((0,r.useEffect)(()=>{fetch("/santaMarta.json").then(e=>e.json()).then(e=>s(e)).catch(e=>console.error("Error al cargar el JSON:",e))},[]),e)?(0,t.jsx)(l.A,{data:e,backgroundImage:"/BGsantaMarta.jpg"}):(0,t.jsx)("div",{className:"text-center text-white",children:"Cargando informaci\xf3n..."})}}},e=>{var s=s=>e(e.s=s);e.O(0,[441,517,358],()=>s(8718)),_N_E=e.O()}]);