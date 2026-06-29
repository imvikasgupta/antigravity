import React, { useState } from 'react';
import { Bed, Waves, Shield, Maximize2, X, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';

export default function FeaturedEstates({ onSelectEstateForExplorer }) {
  const [activeModalEstate, setActiveModalEstate] = useState(null);

  const estates = [
    {
      id: 'ocean-cliff-villa',
      title: 'Ocean Cliff Villa',
      category: 'Ultra Luxury Residence',
      icon: '🏖',
      image: '/images/cliff_villa.png',
      price: '$18,500,000',
      location: 'Amalfi Coast, Italy',
      bedrooms: 6,
      bathrooms: 8,
      area: '12,400 sq.ft',
      features: ['Infinity Edge Pool', 'Private Beach Access', 'Smart Automation', 'Wine Cellar'],
      description: 'Perched high on dramatic Mediterranean cliffs, Ocean Cliff Villa offers uninterrupted panoramic sea views, cantilevered architectural balconies, and direct private beach elevators.',
      cta: 'View Estate',
    },
    {
      id: 'skyline-penthouse',
      title: 'Skyline Penthouse',
      category: 'Luxury Skyscraper Apartment',
      icon: '🏙',
      image: '/images/skyline_penthouse.png',
      price: '$24,000,000',
      location: 'Manhattan, New York',
      bedrooms: 4,
      bathrooms: 5.5,
      area: '8,900 sq.ft',
      features: ['Private Roof Helipad', 'Keyed Elevator Access', '360° Skyline Views', 'Spa Suite'],
      description: 'Crown jewel of the city skyline. Features soar-high 16-foot floor-to-ceiling glass, private heated rooftop plunge pool, and custom architectural finishes throughout.',
      cta: 'Explore Residence',
    },
    {
      id: 'eco-estate',
      title: 'Eco Estate',
      category: 'Nature-Inspired Sustainable Living',
      icon: '🌿',
      image: '/images/eco_estate.png',
      price: '$12,800,000',
      location: 'Lucerne, Switzerland',
      bedrooms: 5,
      bathrooms: 6,
      area: '10,200 sq.ft',
      features: ['Zero Carbon Solar Glass', 'Private Forest Reserve', 'Lake Frontage Dock', 'Organic Greenhouse'],
      description: 'Harmonizing extreme luxury with zero-footprint sustainability. Set amidst private Alpine woodlands with organic geothermal heating and crystal lake views.',
      cta: 'Discover Estate',
    },
  ];

  // Mouse tilt movement handler for each card
  const handleMouseMove = (e, cardId) => {
    const card = document.getElementById(`card-${cardId}`);
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleMouseLeave = (cardId) => {
    const card = document.getElementById(`card-${cardId}`);
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
  };

  return (
    <section id="estates" className="py-28 relative bg-[#050B14] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-3 block">
            Exclusive Architectural Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Featured <span className="gold-gradient-text">Estates</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Discover signature masterpieces engineered with visionary architecture, pristine materials, and immersive spatial design.
          </p>
        </div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {estates.map((estate) => (
            <div
              key={estate.id}
              id={`card-${estate.id}`}
              onMouseMove={(e) => handleMouseMove(e, estate.id)}
              onMouseLeave={() => handleMouseLeave(estate.id)}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 transform-gpu group cursor-pointer"
            >
              <div>
                {/* Image & Overlay */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={estate.image}
                    alt={estate.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081320] via-transparent to-black/40" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#050B14]/80 text-[#D4AF37] border border-[#D4AF37]/30 backdrop-blur-md">
                      {estate.icon} {estate.category}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalEstate(estate);
                      }}
                      className="w-9 h-9 rounded-full bg-black/60 hover:bg-[#D4AF37] text-white hover:text-black flex items-center justify-center transition-colors backdrop-blur-md"
                      title="Quick Specs"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs text-slate-300 block font-mono uppercase tracking-wider">Guide Price</span>
                    <span className="font-heading text-2xl font-bold text-white tracking-wide">
                      {estate.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {estate.location}
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-4 group-hover:text-[#D4AF37] transition-colors">
                    {estate.title}
                  </h3>
                  <p className="text-slate-300 text-sm line-clamp-2 mb-6 leading-relaxed">
                    {estate.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs text-slate-300 mb-6">
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-[#D4AF37]" />
                      <span>{estate.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Waves className="w-4 h-4 text-[#D4AF37]" />
                      <span>{estate.area}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 flex gap-3">
                <button
                  onClick={() => setActiveModalEstate(estate)}
                  className="font-btn flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-[#D4AF37] text-white hover:text-black text-xs font-semibold uppercase tracking-wider border border-white/10 hover:border-[#D4AF37] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {estate.cta}
                </button>
                <button
                  onClick={() => onSelectEstateForExplorer(estate.id)}
                  className="font-btn py-3 px-4 rounded-xl bg-[#D4AF37]/20 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black text-xs font-bold uppercase tracking-wider border border-[#D4AF37]/40 transition-all duration-300 flex items-center justify-center"
                  title="3D Explorer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Drawer Modal */}
      {activeModalEstate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-[#081320] border border-[#D4AF37]/30 rounded-3xl overflow-hidden shadow-2xl p-6 md:p-8">
            <button
              onClick={() => setActiveModalEstate(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="h-64 md:h-full rounded-2xl overflow-hidden">
                <img
                  src={activeModalEstate.image}
                  alt={activeModalEstate.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-[#D4AF37]">
                  {activeModalEstate.category}
                </span>
                <h3 className="font-heading text-3xl font-bold text-white mt-1 mb-2">
                  {activeModalEstate.title}
                </h3>
                <p className="text-[#D4AF37] font-heading font-bold text-2xl mb-4">
                  {activeModalEstate.price}
                </p>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  {activeModalEstate.description}
                </p>

                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                    Key Highlights
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-200">
                    {activeModalEstate.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    const id = activeModalEstate.id;
                    setActiveModalEstate(null);
                    onSelectEstateForExplorer(id);
                  }}
                  className="w-full font-btn py-3.5 rounded-xl bg-gradient-to-r from-[#F5E6B5] to-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                >
                  Enter 3D Interactive Showroom <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
