import React, { useState } from 'react';
import { Mail, Phone, User, MessageSquare, Send, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-28 relative bg-[#081320] overflow-hidden border-t border-white/5">
      {/* Background marble-like soft glow circles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-3 block">
            Private Client Advisory
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Ready to Own Your <span className="gold-gradient-text">Dream Estate</span>?
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Schedule a private consultation with our global estate directors to arrange bespoke 3D virtual previews or physical access.
          </p>
        </div>

        {/* Form Container */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#D4AF37]/30 shadow-2xl relative">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-fadeIn">
              <div className="inline-flex p-4 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] mb-2">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-white">Consultation Requested</h3>
              <p className="text-slate-300 max-w-md mx-auto text-sm">
                Thank you, {formData.name}. Senior Private Advisor will contact you within 2 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Lord Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="sterling@luxe.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-sm"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Inquiry Message
                </label>
                <div className="relative">
                  <MessageSquare className="w-5 h-5 text-slate-400 absolute left-4 top-4" />
                  <textarea
                    rows={4}
                    placeholder="I am interested in exploring the Ocean Cliff Villa private tour..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-sm resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full font-btn py-4 rounded-xl bg-gradient-to-r from-[#F5E6B5] via-[#D4AF37] to-[#AA7C11] text-black font-bold text-xs uppercase tracking-widest shadow-xl hover:shadow-[#D4AF37]/30 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Schedule Consultation
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
