import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Sarah Williams',
      title: 'Private Investor, London',
      rating: 5,
      quote: 'The experience was simply outstanding. Exploring properties in full 3D interactive clarity made our international transaction smooth and confident.',
    },
    {
      name: 'Michael Chen',
      title: 'Tech Executive, San Francisco',
      rating: 5,
      quote: 'A true luxury buying experience. Luxe Estates delivers high-tech architectural visualization with gold-standard personalized consulting.',
    },
    {
      name: 'Emily Carter',
      title: 'Architectural Critic, Paris',
      rating: 5,
      quote: 'The most beautiful estate platform. The level of detail in the virtual exploration models matches the reality of these trophy homes.',
    },
  ];

  return (
    <section className="py-28 relative bg-[#050B14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-3 block">
            Client Endorsements
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Global Visionary <span className="gold-gradient-text">Reviews</span>
          </h2>
          <p className="text-slate-300 text-lg">
            Hear from leaders and collectors who trust Luxe Estates for their primary residences and global portfolios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-3xl flex flex-col justify-between relative group hover:-translate-y-2 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-[#D4AF37]/20 absolute top-6 right-6 group-hover:text-[#D4AF37]/40 transition-colors" />

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>

                <p className="text-slate-200 text-base italic leading-relaxed mb-8">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 text-left">
                <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#D4AF37] transition-colors">
                  {rev.name}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">{rev.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
