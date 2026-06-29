import React from 'react';
import { X, Play, Shield, Sparkles, Compass } from 'lucide-react';

export default function DemoModal({ isOpen, onClose, onSchedule }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#081320] border border-[#D4AF37]/40 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 text-left">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-black transition-colors z-30"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-2">
          <Sparkles className="w-4 h-4" /> 3D Spatial Walkthrough Simulation
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">
          Experience Architectural Immersion
        </h3>

        {/* Video Stage simulation */}
        <div className="relative h-[320px] sm:h-[400px] rounded-2xl overflow-hidden bg-black border border-white/10 mb-6 group">
          <img
            src="/images/cliff_villa.png"
            alt="Demo Walkthrough"
            className="w-full h-full object-cover opacity-60 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

          {/* Interactive HUD */}
          <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-lg text-[11px] font-mono text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            4K Ray-Traced Real-Time Simulation Active
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#D4AF37]/30 border-2 border-[#D4AF37] flex items-center justify-center shadow-2xl shadow-[#D4AF37]/50 group-hover:scale-110 transition-transform cursor-pointer">
              <Play className="w-8 h-8 text-[#D4AF37] fill-[#D4AF37] ml-1" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-white mt-4 bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
              Click to Start 360° Cinematic Tour
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Shield className="w-4 h-4 text-[#D4AF37]" />
            Encrypted Spatial Data & Private Access
          </div>

          <button
            onClick={() => {
              onClose();
              onSchedule();
            }}
            className="font-btn px-6 py-3 rounded-xl bg-gradient-to-r from-[#F5E6B5] to-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
          >
            <Compass className="w-4 h-4" /> Schedule Live Agent Guided Tour
          </button>
        </div>
      </div>
    </div>
  );
}
