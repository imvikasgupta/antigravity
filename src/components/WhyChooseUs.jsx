import React, { useState } from 'react';
import { CheckCircle, Sparkles, ArrowRight, X, Bot, Filter, Building2 } from 'lucide-react';

export default function WhyChooseUs({ onOpenContact }) {
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiStep, setAiStep] = useState(1);
  const [selectedPreference, setSelectedPreference] = useState('');

  const benefits = [
    'Premium Ultra-Luxury Properties',
    'Verified Global Architectural Listings',
    'Dedicated Private Client Consultants',
    'High-Yield Global Investment Opportunities',
    'Immersive 3D Virtual Property Tours',
    'Proprietary AI Property Matching Algorithm',
  ];

  return (
    <section id="why-us" className="py-28 relative bg-[#081320] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Large Architectural Rendering */}
          <div className="lg:col-span-6 relative group">
            <div className="relative h-[480px] sm:h-[560px] rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl glass-panel">
              <img
                src="/images/luxury_interior.png"
                alt="Architectural Excellence Rendering"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel p-6 rounded-2xl border border-white/15 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                  <span className="font-heading font-bold text-white text-lg">Unrivaled Craftsmanship</span>
                </div>
                <p className="text-xs text-slate-300">
                  Every estate is evaluated by structural engineers, master architects, and global wealth advisors.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Luxury Experience Content */}
          <div className="lg:col-span-6 text-left space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-3 block">
                The Luxe Estates Standard
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                Luxury <span className="gold-gradient-text">Experience</span> Redefined
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                We connect high-net-worth individuals and corporate entities with world-class residential benchmarks. Our digital-first, 3D-assisted platform ensures complete security and unmatched discretion.
              </p>
            </div>

            {/* Checkmark list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-start gap-3 glass-card p-3.5 rounded-xl border border-white/5">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onOpenContact}
                className="font-btn px-8 py-4 rounded-full bg-gradient-to-r from-[#F5E6B5] via-[#D4AF37] to-[#AA7C11] text-black font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setAiStep(1);
                  setAiModalOpen(true);
                }}
                className="font-btn px-8 py-4 rounded-full glass-panel border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Bot className="w-4 h-4" /> Try AI Property Matcher
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* AI Matcher Modal */}
      {aiModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#081320] border border-[#D4AF37]/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-left">
            <button
              onClick={() => setAiModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-[#D4AF37]/20 text-[#D4AF37]">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">AI Property Matcher</h3>
                <p className="text-xs text-slate-400">Intelligent Architectural Recommendation Engine</p>
              </div>
            </div>

            {aiStep === 1 && (
              <div className="space-y-4">
                <p className="text-sm text-slate-200">What is your primary architectural aesthetic preference?</p>
                <div className="space-y-2">
                  {['Coastal Modern Glass Villa', 'High-Rise Urban Penthouse', 'Sustainable Alpine Eco Sanctuary'].map((pref, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setSelectedPreference(pref);
                        setAiStep(2);
                      }}
                      className="w-full text-left p-4 rounded-xl glass-panel hover:border-[#D4AF37] text-sm text-slate-200 hover:text-white flex justify-between items-center transition-all"
                    >
                      <span>{pref}</span>
                      <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {aiStep === 2 && (
              <div className="space-y-6 text-center py-4">
                <div className="inline-block p-4 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] animate-bounce">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-heading text-2xl font-bold text-white mb-2">99.4% Match Found!</h4>
                  <p className="text-sm text-slate-300">
                    Based on your selection of <span className="text-[#D4AF37] font-semibold">"{selectedPreference}"</span>, our engine has recommended our curated portfolio.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setAiModalOpen(false);
                    const el = document.getElementById('estates');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full font-btn py-3.5 rounded-xl bg-gradient-to-r from-[#F5E6B5] to-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider shadow-lg"
                >
                  Inspect Matched Estates
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
