import React from 'react';
import { MapPin, ArrowUpRight, Bed, Bath } from 'lucide-react';

export default function LatestProperties({ onSelectEstate }) {
  const properties = [
    {
      id: 'villa-aurora',
      title: 'Villa Aurora',
      price: '$8,200,000',
      location: 'Dubai, UAE',
      image: '/images/cliff_villa.png',
      beds: 5,
      baths: 6,
    },
    {
      id: 'skyline-elite',
      title: 'Skyline Elite',
      price: '$12,000,000',
      location: 'New York, USA',
      image: '/images/skyline_penthouse.png',
      beds: 4,
      baths: 4.5,
    },
    {
      id: 'forest-haven',
      title: 'Forest Haven',
      price: '$5,900,000',
      location: 'Zurich, Switzerland',
      image: '/images/eco_estate.png',
      beds: 4,
      baths: 5,
    },
    {
      id: 'azure-coast',
      title: 'Azure Coast',
      price: '$14,000,000',
      location: 'Maldives',
      image: '/images/luxury_interior.png',
      beds: 6,
      baths: 7,
    },
  ];

  return (
    <section className="py-28 relative bg-[#081320] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-3 block">
              Curated Opportunities
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
              Latest <span className="gold-gradient-text">Properties</span>
            </h2>
          </div>
          <p className="text-slate-300 text-sm max-w-md mt-4 md:mt-0 text-left md:text-right">
            Newly minted international listings prepared for instant 3D inspection and immediate acquisition.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectEstate(item.id)}
              className="glass-card rounded-3xl overflow-hidden group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081320] via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5 text-left">
                  <div className="flex items-center gap-1 text-slate-400 text-xs mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {item.location}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-heading text-lg font-bold text-[#D4AF37] mb-4">
                    {item.price}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex justify-between text-xs text-slate-400 border-t border-white/5 mt-auto">
                <span>{item.beds} Beds</span>
                <span>•</span>
                <span>{item.baths} Baths</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
