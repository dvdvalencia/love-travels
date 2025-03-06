(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[179],{4314:(e,t,s)=>{Promise.resolve().then(s.bind(s,5126))},9906:(e,t,s)=>{"use strict";s.d(t,{A:()=>d});var l=s(5155);let a=e=>{let{data:t}=e;return t?(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center w-full min-h-screen text-white",children:[(0,l.jsx)("h1",{className:"mt-40 text-4xl font-bold text-center text-black",children:t.destino}),(0,l.jsxs)("p",{className:"mt-2 text-lg text-center",children:["Fechas programadas: ",t.fechas_programadas]}),(0,l.jsx)("div",{className:"w-11/12 p-4 mt-6 bg-black bg-opacity-50 rounded-lg md:w-2/3",children:(0,l.jsxs)("div",{className:"p-4 bg-gray-800 border border-gray-600 rounded-lg bg-opacity-70",children:[(0,l.jsx)("h2",{className:"text-2xl font-semibold text-center text-white",children:"\xbfQu\xe9 incluye?"}),(0,l.jsx)("ul",{className:"mt-4 space-y-2 text-white list-disc list-inside",children:t.incluye&&Object.entries(t.incluye).map(e=>{let[t,s]=e;return(0,l.jsxs)("li",{className:"text-lg",children:[(0,l.jsxs)("strong",{children:[t.replace(/_/g," "),":"]})," ",s]},t)})})]})})]}):null},r=e=>{let{selectedMonth:t,setSelectedMonth:s,selectedPrice:a,setSelectedPrice:r,selectedNights:c,setSelectedNights:n,selectedHotel:o,setSelectedHotel:i,uniqueHotels:d}=e;return(0,l.jsxs)("div",{className:"flex flex-wrap justify-center gap-4 mt-4",children:[(0,l.jsxs)("select",{className:"p-2 text-gray-200 rounded-lg bg-opacity-80 bg-slate-700",value:t,onChange:e=>s(e.target.value),children:[(0,l.jsx)("option",{value:"",children:"Todos los meses"}),["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"].map(e=>(0,l.jsx)("option",{value:e,children:e},e))]}),(0,l.jsxs)("select",{className:"p-2 text-gray-200 rounded-lg bg-opacity-80 bg-slate-700",value:a,onChange:e=>r(e.target.value),children:[(0,l.jsx)("option",{value:"",children:"Todos los precios"}),(0,l.jsx)("option",{value:"0-500000",children:"Hasta 500,000"}),(0,l.jsx)("option",{value:"500000-1000000",children:"500,000 - 1,000,000"}),(0,l.jsx)("option",{value:"1000000+",children:"M\xe1s de 1,000,000"})]}),(0,l.jsxs)("select",{className:"p-2 text-gray-200 rounded-lg bg-opacity-80 bg-slate-700",value:c,onChange:e=>n(e.target.value),children:[(0,l.jsx)("option",{value:"",children:"Todas las noches"}),(0,l.jsx)("option",{value:"2",children:"2 Noches"}),(0,l.jsx)("option",{value:"3",children:"3 Noches"}),(0,l.jsx)("option",{value:"4",children:"4 Noches"})]}),(0,l.jsxs)("select",{className:"p-2 text-gray-200 rounded-lg bg-opacity-80 bg-slate-700",value:o,onChange:e=>i(e.target.value),children:[(0,l.jsx)("option",{value:"",children:"Todos los hospedajes"}),d.map(e=>(0,l.jsx)("option",{value:e,children:e},e))]})]})},c=e=>{let{hotel:t}=e;return(0,l.jsxs)("div",{className:"p-4 bg-gray-800 border border-gray-600 rounded-lg bg-opacity-80",children:[(0,l.jsx)("h3",{className:"text-xl font-bold",children:t.nombre}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Fecha:"})," ",t.fecha]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Precio:"})," $",t.precio.toLocaleString("es-CO")]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Noches:"})," ",t.noches]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Caracter\xedsticas:"})," ",t.caracteristicas]})]})},n=e=>{let{filteredHotels:t}=e;return(0,l.jsxs)("div",{className:"w-11/12 p-4 mt-6 bg-black bg-opacity-50 rounded-lg md:w-2/3",children:[(0,l.jsx)("h2",{className:"text-2xl font-semibold text-center",children:"HOTELES DISPONIBLES"}),(0,l.jsx)("div",{className:"mt-4 space-y-4",children:t.length>0?t.map((e,t)=>(0,l.jsx)(c,{hotel:e},t)):(0,l.jsx)("p",{className:"text-lg text-center",children:"No hay fechas disponibles con estas caracter\xedsticas."})})]})};var o=s(2115);let i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],[t,s]=(0,o.useState)(""),[l,a]=(0,o.useState)(""),[r,c]=(0,o.useState)(""),[n,i]=(0,o.useState)(""),d=[...new Set(e.map(e=>e.nombre))],h=[...new Set(e.map(e=>e.precio))].sort((e,t)=>e-t),x=e.filter(e=>{let s=""===t||e.fecha.includes(t),a=""===l||Number(e.precio)===Number(l),c=""===r||Number(e.noches)===Number(r),o=""===n||e.nombre===n;return s&&a&&c&&o});return{selectedMonth:t,setSelectedMonth:s,selectedPrice:l,setSelectedPrice:a,selectedNights:r,setSelectedNights:c,selectedHotel:n,setSelectedHotel:i,uniqueHotels:d,uniquePrices:h,filteredHotels:x}},d=e=>{let{data:t,backgroundImage:s}=e,{selectedMonth:c,setSelectedMonth:o,selectedPrice:d,setSelectedPrice:h,selectedNights:x,setSelectedNights:u,selectedHotel:g,setSelectedHotel:m,uniqueHotels:p,filteredHotels:j}=i(t.hoteles);return(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center w-full min-h-screen text-white",style:{backgroundImage:"url(".concat(s,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:[(0,l.jsx)("h1",{className:"mt-40 text-4xl font-bold text-center text-black",children:t.destino}),(0,l.jsxs)("p",{className:"mt-2 text-lg text-center",children:["Fechas programadas: ",t.fechas_programadas]}),(0,l.jsx)(r,{selectedMonth:c,setSelectedMonth:o,selectedPrice:d,setSelectedPrice:h,selectedNights:x,setSelectedNights:u,selectedHotel:g,setSelectedHotel:m,uniqueHotels:p}),(0,l.jsx)(n,{filteredHotels:j}),(0,l.jsx)(a,{data:t})]})}},5126:(e,t,s)=>{"use strict";s.d(t,{default:()=>c});var l=s(5155),a=s(2115),r=s(9906);let c=()=>{let[e,t]=(0,a.useState)(null);return((0,a.useEffect)(()=>{fetch("/sanAndres.json").then(e=>e.json()).then(e=>t(e)).catch(e=>console.error("Error al cargar el JSON:",e))},[]),e)?(0,l.jsx)(r.A,{data:e,backgroundImage:"/BGsanAndres.jpg"}):(0,l.jsx)("div",{className:"text-center text-white",children:"Cargando informaci\xf3n..."})}}},e=>{var t=t=>e(e.s=t);e.O(0,[441,517,358],()=>t(4314)),_N_E=e.O()}]);