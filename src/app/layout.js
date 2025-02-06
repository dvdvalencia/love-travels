import NavBar from "@/components/NavBar/NavBar.jsx";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Love Travels - Tu Agencia de Viajes en Medellín, Antioquia",
  description: "Love Travels es tu agencia de viajes en Medellín, Antioquia, especializada en crear experiencias únicas y memorables. Ofrecemos paquetes turísticos, viajes personalizados, destinos nacionales e internacionales, y asesoría experta para que vivas la aventura de tus sueños. ¡Descubre el mundo con nosotros!",

icons: {
  icon:"src/app/favicon.ico"
},
openGraph: {
  title: "Love Travels - Tu Agencia de Viajes en Medellín, Antioquia",
  description: "Love Travels es tu agencia de viajes en Medellín, Antioquia, especializada en crear experiencias únicas y memorables. Ofrecemos paquetes turísticos, viajes personalizados, destinos nacionales e internacionales, y asesoría experta para que vivas la aventura de tus sueños. ¡Descubre el mundo con nosotros!",
  type: "website",
  locale: "es_CO", 
  url: "https://viajeslovetravels.web.app",
  siteName: "Love Travels",
  images: [
    {
      url: "https://viajeslovetravels.web.app/og-image.jpg", // Ruta a tu imagen Open Graph
      width: 1200,
      height: 630,
      alt: "Love Travels - Agencia de Viajes",
    },
  ],
},
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}