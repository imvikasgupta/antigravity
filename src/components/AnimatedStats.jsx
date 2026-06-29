import React, { useEffect, useState, useRef } from 'react';
import { Home, Globe, Award, DollarSign } from 'lucide-react';

export default function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: 'Luxury Homes', value: 2500, suffix: '+', icon: <Home className="w-6 h-6 text-[#D4AF37]" /> },
    { label: 'Countries Active', value: 65, suffix: '+', icon: <Globe className="w-6 h-6 text-[#D4AF37]" /> },
    { label: 'Client Satisfaction', value: 98, suffix: '%', icon: <Award className="w-6 h-6 text-[#D4AF37]" /> },
    { label: 'Property Value Transacted', value: 8, prefix: '$', suffix: 'B+', icon: <DollarSign className="w-6 h-6 text-[#D4AF37]" /> },
  ];

  return (
    <section ref={sectionRef} className="py-20 relative bg-[#050B14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-3xl text-center flex flex-col items-center justify-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 mb-4 group-hover:border-[#D4AF37]/50 transition-colors">
                {stat.icon}
              </div>
              <div className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-2 gold-gradient-text">
                {stat.prefix || ''}
                {isVisible ? <Counter value={stat.value} /> : '0'}
                {stat.suffix}
              </div>
              <span className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const incrementTime = 30;
    const steps = duration / incrementTime;
    const stepValue = end / steps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count.toLocaleString()}</span>;
}
