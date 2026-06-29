import React from 'react';
import { Waves, Plane, Trees, ShieldCheck, Car, Sunset, Target, Building } from 'lucide-react';

export default function AmenitiesGrid() {
  const amenities = [
    {
      title: 'Infinity Pools',
      icon: <Waves className="w-8 h-8 text-[#D4AF37]" />,
      emoji: '🏊',
      desc: 'Heated cantilevered infinity pools floating over panoramic coastal or skyline horizons.',
    },
    {
      title: 'Private Helipad',
      icon: <Plane className="w-8 h-8 text-[#D4AF37]" />,
      emoji: '🚁',
      desc: 'Dedicated rooftop or grounds helipads engineered for discreet global transport.',
    },
    {
      title: 'Eco Landscaping',
      icon: <Trees className="w-8 h-8 text-[#D4AF37]" />,
      emoji: '🌿',
      desc: 'Botanical sanctuaries with automated organic water management and indigenous flora.',
    },
    {
      title: 'Smart Security',
      icon: <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />,
      emoji: '🔐',
      desc: 'Military-grade biometric access control, encrypted AI surveillance, and safe rooms.',
    },
    {
      title: 'Underground Garage',
      icon: <Car className="w-8 h-8 text-[#D4AF37]" />,
      emoji: '🚘',
      desc: 'Climate-controlled multi-vehicle subterranean galleries with turn-tables.',
    },
    {
      title: 'Private Beaches',
      icon: <Sunset className="w-8 h-8 text-[#D4AF37]" />,
      emoji: '🏖',
      desc: 'Direct, secluded coastal shorelines with private boat docks and beach clubs.',
    },
    {
      title: 'Golf Course',
      icon: <Target className="w-8 h-8 text-[#D4AF37]" />,
      emoji: '🏌',
      desc: 'Championship-grade 9-hole executive greens integrated into estate grounds.',
    },
    {
      title: 'Club House',
      icon: <Building className="w-8 h-8 text-[#D4AF37]" />,
      emoji: '🏛',
      desc: 'Private resident pavilions featuring Michelin-standard kitchens and private spas.',
    },
  ];

  return (
    <section id="amenities" className="py-28 relative bg-[#050B14] overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-3 block">
            World-Class Living Standards
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Luxury <span className="gold-gradient-text">Amenities</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Every residence incorporates bespoke lifestyle infrastructure designed for privacy, wellness, and effortless luxury.
          </p>
        </div>

        {/* 8 Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-3xl flex flex-col items-start text-left group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-between w-full mb-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#D4AF37]/50 group-hover:scale-110 transition-all">
                  {item.icon}
                </div>
                <span className="text-3xl filter drop-shadow">{item.emoji}</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
