export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 text-white bg-gray-900">
        <div className="flex items-center space-x-3">
          <img
            src="/love-travels-logo.ico"
            alt="Love Travels Logo"
            className="w-10 h-10"
          />
          <h1 className="text-2xl font-bold">Love Travels</h1>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#services" className="hover:text-green-400">
              Servicios
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-green-400">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-400">
              Contacto
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen bg-[url('/public/hero-image.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="p-8 text-center rounded-lg shadow-lg bg-white/75">
          <h2 className="text-4xl font-bold text-gray-900">
            ¡Explora el mundo con Love Travels!
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Descubre destinos increíbles con los mejores planes de viaje.
          </p>
          <button className="px-6 py-3 mt-6 text-white bg-orange-300 rounded-md shadow-md hover:bg-green-600">
            Planifica tu viaje
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-white bg-gray-900">
        <div className="text-center">
          <p className="text-sm">© {new Date().getFullYear()} Love Travels. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
