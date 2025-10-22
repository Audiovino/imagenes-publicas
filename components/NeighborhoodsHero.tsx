import React from 'react';

// ✅ VERSIÓN PROFESIONAL - Con imágenes en carpeta /public

const neighborhoods = [
  {
    name: 'Palermo',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
    price: 'USD 2585/m²',
    change: '+6%'
  },
  {
    name: 'Belgrano',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
    price: 'USD 2535/m²',
    change: '+8%'
  },
  {
    name: 'Puerto Madero',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80',
    price: 'USD 4706/m²',
    change: ''
  },
  {
    name: 'Núñez',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    price: 'USD 2238/m²',
    change: ''
  },
  {
    name: 'Colegiales',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    price: 'USD 2364/m²',
    change: ''
  },
  {
    name: 'Coghlan',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80',
    price: 'USD 2260/m²',
    change: ''
  }
];

export default function NeighborhoodsHero() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Explora las zonas con mayor demanda y potencial de crecimiento
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {neighborhoods.map((neighborhood) => (
            <div
              key={neighborhood.name}
              className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  className="w-full h-auto transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback si la imagen no carga
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%234A5568" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="20" fill="white" text-anchor="middle" dy=".3em"%3E' + neighborhood.name + '%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {neighborhood.name}
                </h3>
                <div className="flex items-center justify-between mt-auto">
                  <p className="text-2xl font-bold text-blue-400">
                    {neighborhood.price}
                  </p>
                  {neighborhood.change && (
                    <span className="text-green-400 text-sm font-medium">
                      {neighborhood.change}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
