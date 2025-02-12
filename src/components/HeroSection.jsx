import React from 'react'

export const HeroSection = () => {
  return (
    <section className="relative h-screen bg-[url('/love-travels.png')] mt-40 bg-cover bg-center flex items-center justify-center">
    <div className="p-8 text-center rounded-lg shadow-lg bg-white/75">
      <h2 className="text-4xl font-bold text-gray-900">
        ¡Explora el mundo con LOVE TRAVELS!
      </h2>
      <p className="mt-4 text-lg text-gray-700">
        Descubre destinos increíbles con los mejores planes de viaje.
      </p>
      <button className="px-6 py-3 mt-6 text-white bg-orange-300 rounded-md shadow-md hover:bg-green-600">
        Planifica tu viaje
      </button>
    </div>
  </section>

  )
}
