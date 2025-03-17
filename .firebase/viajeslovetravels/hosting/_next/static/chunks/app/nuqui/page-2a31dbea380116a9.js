(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{1718:(e,t,s)=>{Promise.resolve().then(s.bind(s,3901))},9906:(e,t,s)=>{"use strict";s.d(t,{A:()=>d});var l=s(5155);let r=e=>{let{data:t}=e;return t?(0,l.jsx)("div",{className:"flex flex-col items-center justify-center w-full min-h-screen text-white",children:(0,l.jsx)("div",{className:"w-11/12 p-4 mt-6 bg-black bg-opacity-50 rounded-lg md:w-2/3",children:(0,l.jsxs)("div",{className:"p-4 bg-gray-800 border border-gray-600 rounded-lg bg-opacity-70",children:[(0,l.jsx)("h2",{className:"text-2xl font-semibold text-center text-white",children:"\xbfQu\xe9 incluye?"}),(0,l.jsx)("ul",{className:"mt-4 space-y-2 text-white list-disc list-inside",children:t.incluye&&Object.entries(t.incluye).map(e=>{let[t,s]=e;return(0,l.jsxs)("li",{className:"text-lg",children:[(0,l.jsxs)("strong",{children:[t.replace(/_/g," "),":"]})," ",s]},t)})})]})})}):null},a=e=>{let{selectedMonth:t,setSelectedMonth:s,selectedPrice:r,setSelectedPrice:a,selectedNights:c,setSelectedNights:n,selectedHotel:i,setSelectedHotel:o,uniqueHotels:d}=e;return(0,l.jsxs)("div",{className:"flex flex-wrap justify-center gap-4 mt-4",children:[(0,l.jsxs)("select",{className:"p-2 text-gray-200 rounded-lg bg-opacity-80 bg-slate-700",value:t,onChange:e=>s(e.target.value),children:[(0,l.jsx)("option",{value:"",children:"Todos los meses"}),["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"].map(e=>(0,l.jsx)("option",{value:e,children:e},e))]}),(0,l.jsxs)("select",{className:"p-2 text-gray-200 rounded-lg bg-opacity-80 bg-slate-700",value:r,onChange:e=>a(e.target.value),children:[(0,l.jsx)("option",{value:"",children:"Todos los precios"}),(0,l.jsx)("option",{value:"0-500000",children:"Hasta 500,000"}),(0,l.jsx)("option",{value:"500000-1000000",children:"500,000 - 1,000,000"}),(0,l.jsx)("option",{value:"1000000+",children:"M\xe1s de 1,000,000"})]}),(0,l.jsxs)("select",{className:"p-2 text-gray-200 rounded-lg bg-opacity-80 bg-slate-700",value:c,onChange:e=>n(e.target.value),children:[(0,l.jsx)("option",{value:"",children:"Todas las noches"}),(0,l.jsx)("option",{value:"2",children:"2 Noches"}),(0,l.jsx)("option",{value:"3",children:"3 Noches"}),(0,l.jsx)("option",{value:"4",children:"4 Noches"})]}),(0,l.jsxs)("select",{className:"p-2 text-gray-200 rounded-lg bg-opacity-80 bg-slate-700",value:i,onChange:e=>o(e.target.value),children:[(0,l.jsx)("option",{value:"",children:"Todos los hospedajes"}),d.map(e=>(0,l.jsx)("option",{value:e,children:e},e))]})]})},c=e=>{let{hotel:t}=e;return(0,l.jsxs)("div",{className:"p-4 bg-gray-800 border border-gray-600 rounded-lg bg-opacity-80",children:[(0,l.jsx)("h3",{className:"text-xl font-bold",children:t.nombre}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Fecha:"})," ",t.fecha]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Precio:"})," $",t.precio.toLocaleString("es-CO")]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Noches:"})," ",t.noches]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Caracter\xedsticas:"})," ",t.caracteristicas]})]})},n=e=>{let{filteredHotels:t}=e;return(0,l.jsx)("div",{className:"w-11/12 p-4 mt-6 bg-black bg-opacity-50 rounded-lg md:w-2/3",children:(0,l.jsx)("div",{className:"mt-4 space-y-4",children:t.length>0?t.map((e,t)=>(0,l.jsx)(c,{hotel:e},t)):(0,l.jsx)("p",{className:"text-lg text-center",children:"No hay fechas disponibles con estas caracter\xedsticas."})})})};var i=s(2115);let o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],[t,s]=(0,i.useState)(""),[l,r]=(0,i.useState)(""),[a,c]=(0,i.useState)(""),[n,o]=(0,i.useState)(""),d=[...new Set(e.map(e=>e.nombre))],h=[...new Set(e.map(e=>e.precio))].sort((e,t)=>e-t),u=e.filter(e=>{let s=""===t||e.fecha.includes(t),r=""===l||Number(e.precio)===Number(l),c=""===a||Number(e.noches)===Number(a),i=""===n||e.nombre===n;return s&&r&&c&&i});return{selectedMonth:t,setSelectedMonth:s,selectedPrice:l,setSelectedPrice:r,selectedNights:a,setSelectedNights:c,selectedHotel:n,setSelectedHotel:o,uniqueHotels:d,uniquePrices:h,filteredHotels:u}},d=e=>{let{data:t,backgroundImage:s}=e,{selectedMonth:c,setSelectedMonth:i,selectedPrice:d,setSelectedPrice:h,selectedNights:u,setSelectedNights:x,selectedHotel:g,setSelectedHotel:m,uniqueHotels:p,filteredHotels:j}=o(t.hoteles);return(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center w-full min-h-screen text-white",style:{backgroundImage:"url(".concat(s,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:[(0,l.jsx)("h1",{className:"mt-40 text-4xl font-bold text-center text-black",children:t.destino}),(0,l.jsxs)("p",{className:"mt-2 text-lg text-center",children:["Fechas programadas: ",t.fechas_programadas]}),(0,l.jsx)(a,{selectedMonth:c,setSelectedMonth:i,selectedPrice:d,setSelectedPrice:h,selectedNights:u,setSelectedNights:x,selectedHotel:g,setSelectedHotel:m,uniqueHotels:p}),(0,l.jsx)(n,{filteredHotels:j}),(0,l.jsx)(r,{data:t})]})}},3901:(e,t,s)=>{"use strict";s.d(t,{default:()=>c});var l=s(5155),r=s(2115),a=s(9906);let c=()=>{let[e,t]=(0,r.useState)(null);return((0,r.useEffect)(()=>{fetch("/nuqui.json").then(e=>e.json()).then(e=>t(e)).catch(e=>console.error("Error al cargar el JSON:",e))},[]),e)?(0,l.jsx)(a.A,{data:e,backgroundImage:"/BGnuqui.jpg"}):(0,l.jsx)("div",{className:"text-center text-white",children:"Cargando informaci\xf3n"})}}},e=>{var t=t=>e(e.s=t);e.O(0,[441,517,358],()=>t(1718)),_N_E=e.O()}]);