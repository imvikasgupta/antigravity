import React from 'react';
import Hero3DScene from './Hero3DScene';
import { ArrowRight, Play, Sparkles, ShieldCheck, Eye } from 'lucide-react';

export default function Hero({ onOpenDemo, onOpenContact }) {
  const floatingCards = [
    {
      id: 'villa',
      title: 'Cliff Villa',
      icon: '🏖',
      tag: 'Ultra Luxury',
      price: '$18.5M',
      href: '#estates',
      pos: 'top-12 left-4 md:left-12',
    },
    {
      id: 'penthouse',
      title: 'Skyline Penthouse',
      icon: '🏙',
      tag: 'Urban Icon',
      price: '$24.0M',
      href: '#estates',
      pos: 'top-24 right-4 md:right-16',
    },
    {
      id: 'eco',
      title: 'Eco Estate',
      icon: '🌿',
      tag: 'Sustainable',
      price: '$12.8M',
      href: '#estates',
      pos: 'bottom-16 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-24',
    },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#081320] via-[#050B14] to-[#050B14]">
      {/* 3D Background Canvas */}
      <Hero3DScene />

      {/* Ambient Radial Lighting Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-sky-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Sub-header badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-[#D4AF37]/30 mb-8 animate-float">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-200">
            Luxury Villas • Sky Penthouses • Eco Living
          </span>
        </div>

        {/* Hero Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
          Find Your <span className="gold-gradient-text">Dream Estate</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-300 font-normal mb-10 leading-relaxed">
          Experience architectural excellence with immersive interactive 3D property exploration. Curated residences for discerning global visionaries.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
          <a
            href="#estates"
            className="font-btn w-full sm:w-auto px-8 py-4 rounded-full text-black font-semibold text-sm tracking-wider uppercase bg-gradient-to-r from-[#F5E6B5] via-[#D4AF37] to-[#AA7C11] hover:shadow-xl hover:shadow-[#D4AF37]/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            Explore Estates
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenDemo}
            className="font-btn w-full sm:w-auto px-8 py-4 rounded-full text-white font-medium text-sm tracking-wider uppercase glass-panel border border-white/20 hover:border-[#D4AF37]/60 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <div className="w-7 h-7 rounded-full bg-[#D4AF37]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
            </div>
            Watch Demo
          </button>
        </div>

        {/* Floating Property Hotspots / Preview Cards Grid */}
        <div className="relative w-full max-w-4xl mx-auto h-[260px] sm:h-[300px] mt-4 rounded-3xl glass-panel border border-white/10 p-6 overflow-hidden flex flex-col justify-between shadow-2xl">
          {/* Subtle grid lines background inside stage */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#D4AF37]" /> Interactive 3D Hotspot Preview
            </span>
            <span className="text-[11px] px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 font-mono">
              Hover to Inspect
            </span>
          </div>

          {/* Floating UI Labels in Stage */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 my-auto">
            {floatingCards.map((card) => (
              <a
                key={card.id}
                href={card.href}
                className="glass-card p-4 rounded-2xl flex flex-col text-left group cursor-pointer hover:border-[#D4AF37]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{card.icon}</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-white/10 text-slate-300">
                    {card.tag}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base text-white group-hover:text-[#D4AF37] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-[#D4AF37] font-mono font-semibold mt-1">
                  Starting at {card.price}
                </p>
              </a>
            ))}
          </div>

          <div className="relative z-10 text-[11px] text-slate-400 text-center flex items-center justify-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> Verified Architectural Virtual Explorations Available
          </div>
        </div>
      </div>
    </section>
  );
}
