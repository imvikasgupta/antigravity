import React, { useState, useEffect } from 'react';
import { Building2, Menu, X, Phone, Compass } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Estates', href: '#estates' },
    { name: 'Explorer', href: '#explorer' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050B14]/80 backdrop-blur-xl border-b border-[#D4AF37]/20 py-4 shadow-2xl shadow-black/50'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] p-0.5 flex items-center justify-center shadow-lg shadow-[#D4AF37]/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#050B14] rounded-[10px] flex items-center justify-center">
              <Building2 className="w-5 h-5 text-[#D4AF37]" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl tracking-wider text-white flex items-center gap-1">
              LUXE <span className="gold-gradient-text">ESTATES</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-medium">
              Architectural Excellence
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 glass-panel px-8 py-2.5 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition-colors duration-200 tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="font-btn relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-black transition-all duration-300 ease-out rounded-full shadow-lg group bg-gradient-to-r from-[#F5E6B5] via-[#D4AF37] to-[#AA7C11] hover:shadow-[#D4AF37]/30 hover:scale-105"
          >
            <span className="relative flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-4 h-4" /> Schedule Visit
            </span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-[#D4AF37]/20 px-6 py-6 mt-4 space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-200 hover:text-[#D4AF37] py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full font-btn py-3 mt-4 text-xs uppercase tracking-wider font-bold text-black bg-gradient-to-r from-[#F5E6B5] to-[#D4AF37] rounded-xl shadow-lg"
          >
            Schedule Consultation
          </button>
        </div>
      )}
    </nav>
  );
}
