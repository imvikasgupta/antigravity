import React from 'react';
import { Building2, ArrowUp, Globe, Share2, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050B14] border-t border-white/10 pt-20 pb-12 relative z-10 text-left">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#050B14] rounded-[10px] flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-[#D4AF37]" />
                </div>
              </div>
              <span className="font-heading font-bold text-xl tracking-wider text-white">
                LUXE <span className="gold-gradient-text">ESTATES</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Luxury Real Estate Worldwide. Pioneering spatial technology and 3D architectural exploration for iconic global residences.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="p-2.5 rounded-full glass-panel text-slate-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="p-2.5 rounded-full glass-panel text-slate-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="p-2.5 rounded-full glass-panel text-slate-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186c-.273-.966-1.033-1.726-2.002-2.002-1.774-.476-8.896-.476-8.896-.476s-7.123 0-8.896.476c-.969.276-1.729 1.036-2.002 2.002-.477 1.773-.477 5.46-.477 5.46s0 3.687.477 5.46c.273.966 1.033 1.726 2.002 2.002 1.773.477 8.896.477 8.896.477s7.123 0 8.896-.477c.969-.276 1.729-1.036 2.002-2.002.477-1.773.477-5.46.477-5.46s0-3.687-.477-5.46zm-13.498 9.214v-6.799l6.253 3.4-6.253 3.399z"/></svg>
              </a>
            </div>
          </div>


          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#estates" className="hover:text-[#D4AF37] transition-colors">Properties</a></li>
              <li><a href="#explorer" className="hover:text-[#D4AF37] transition-colors">Investments</a></li>
              <li><a href="#amenities" className="hover:text-[#D4AF37] transition-colors">Amenities</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Legal & Disclosures
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Verification Standards</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Cookie Preferences</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-2">
              Private Newsletter
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Subscribe for confidential off-market architectural listings and quarterly global real estate market updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="vip@domain.com"
                className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] flex-1"
              />
              <button className="font-btn px-4 py-2.5 rounded-xl bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#F5E6B5] transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 LUXE ESTATES Worldwide. All Rights Reserved. Mastercrafted Architecture.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-[#D4AF37] transition-colors"
          >
            Back to Top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
