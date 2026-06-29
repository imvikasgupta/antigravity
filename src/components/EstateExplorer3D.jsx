import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Compass, Calendar, MapPin, Bed, Bath, Maximize, Check, Layers, Sparkles } from 'lucide-react';

export default function EstateExplorer3D({ selectedEstateId, onScheduleVisit }) {
  const [activeEstateKey, setActiveEstateKey] = useState('ocean-cliff-villa');
  const mountRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (selectedEstateId) {
      setActiveEstateKey(selectedEstateId);
      const section = document.getElementById('explorer');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedEstateId]);

  const estateData = {
    'ocean-cliff-villa': {
      title: 'Ocean Cliff Villa',
      subtitle: 'Modern Cantilevered Cliff Masterpiece',
      price: '$18,500,000',
      location: 'Amalfi Coast, Italy',
      area: '12,400 sq.ft',
      bedrooms: '6 Beds',
      bathrooms: '8 Baths',
      year: '2025 Architectural Build',
      image: '/images/cliff_villa.png',
      color: 0xd4af37,
      shape: 'box',
    },
    'skyline-penthouse': {
      title: 'Skyline Penthouse',
      subtitle: 'Ultra-Skyscraper Sky Sanctuary',
      price: '$24,000,000',
      location: 'Manhattan, New York',
      area: '8,900 sq.ft',
      bedrooms: '4 Beds',
      bathrooms: '5.5 Baths',
      year: '2026 Icon Tower',
      image: '/images/skyline_penthouse.png',
      color: 0x38bdf8,
      shape: 'cylinder',
    },
    'eco-estate': {
      title: 'Eco Estate',
      subtitle: 'Zero-Carbon Lakeside Residence',
      price: '$12,800,000',
      location: 'Lucerne, Switzerland',
      area: '10,200 sq.ft',
      bedrooms: '5 Beds',
      bathrooms: '6 Baths',
      year: '2025 Eco Benchmark',
      image: '/images/eco_estate.png',
      color: 0x34d399,
      shape: 'torus',
    },
  };

  const activeData = estateData[activeEstateKey] || estateData['ocean-cliff-villa'];

  // Three.js Interactive Showroom Scene Setup
  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 4, 14);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Grid Floor
    const gridHelper = new THREE.GridHelper(30, 30, 0xd4af37, 0x1e293b);
    gridHelper.position.y = -2;
    scene.add(gridHelper);

    // 3D Architectural Blueprint Model placeholder mesh
    let geometry;
    if (activeData.shape === 'box') {
      geometry = new THREE.BoxGeometry(4, 3.5, 4);
    } else if (activeData.shape === 'cylinder') {
      geometry = new THREE.CylinderGeometry(2, 2, 6, 8);
    } else {
      geometry = new THREE.TorusKnotGeometry(2, 0.6, 100, 16);
    }

    const material = new THREE.MeshPhongMaterial({
      color: activeData.color,
      emissive: 0x050b14,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = 1;
    scene.add(mesh);

    // Inner glowing core
    const coreGeo = new THREE.SphereGeometry(1.2, 16, 16);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.y = 1;
    scene.add(coreMesh);

    // Lighting
    const amb = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(amb);
    const p1 = new THREE.PointLight(activeData.color, 3, 30);
    p1.position.set(8, 10, 8);
    scene.add(p1);

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      mesh.rotation.y = elapsedTime * 0.4;
      mesh.rotation.x = Math.sin(elapsedTime * 0.5) * 0.1;
      coreMesh.position.y = 1 + Math.sin(elapsedTime * 1.5) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, [activeEstateKey]);

  return (
    <section id="explorer" className="py-28 relative bg-[#081320] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" /> WebGL Scrollytelling Engine
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Interactive <span className="gold-gradient-text">Estate Explorer</span>
          </h2>
          <p className="text-slate-300 text-lg">
            Explore every detail. Click an estate below to enter real-time spatial inspection.
          </p>

          {/* Selector Switches */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {Object.keys(estateData).map((key) => {
              const item = estateData[key];
              const isActive = activeEstateKey === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveEstateKey(key)}
                  className={`font-btn px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#F5E6B5] to-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20 scale-105'
                      : 'glass-panel text-slate-300 hover:text-white hover:border-[#D4AF37]/50'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-black' : 'bg-[#D4AF37]'}`} />
                  {item.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Showroom & Specs Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel p-6 sm:p-10 rounded-3xl border border-[#D4AF37]/20 shadow-2xl relative overflow-hidden">
          {/* Background Ambient Image Overlay */}
          <div className="absolute inset-0 opacity-15 pointer-events-none transition-all duration-700">
            <img src={activeData.image} alt="Background rendering" className="w-full h-full object-cover filter blur-md" />
          </div>

          {/* Left / Top 3D Canvas viewport */}
          <div className="lg:col-span-7 relative h-[400px] sm:h-[480px] rounded-2xl overflow-hidden bg-black/60 border border-white/10 flex items-center justify-center">
            {/* Live Three.js Mount */}
            <div ref={mountRef} className="absolute inset-0 z-10" />

            {/* Stage Overlay HUD controls */}
            <div className="absolute top-4 left-4 z-20 glass-panel px-4 py-2 rounded-xl border border-white/10 text-xs flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-mono text-slate-200">Interactive 3D Mesh HUD</span>
            </div>

            <div className="absolute bottom-4 right-4 z-20 glass-panel px-4 py-2 rounded-xl border border-white/10 text-[11px] font-mono text-[#D4AF37]">
              Orbit 360° Enabled
            </div>
          </div>

          {/* Right Property Details Panel */}
          <div className="lg:col-span-5 relative z-20 space-y-6 text-left">
            <div>
              <span className="text-xs font-mono uppercase text-[#D4AF37] tracking-widest block mb-1">
                {activeData.subtitle}
              </span>
              <h3 className="font-heading text-3xl font-bold text-white mb-2">
                {activeData.title}
              </h3>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                {activeData.location}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-baseline justify-between">
              <span className="text-xs text-slate-400 font-mono uppercase">Valuation</span>
              <span className="font-heading text-3xl font-bold text-[#D4AF37]">
                {activeData.price}
              </span>
            </div>

            {/* Spec Matrix */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-xl flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Maximize className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Area</span>
                  <span className="text-sm font-semibold text-white">{activeData.area}</span>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Bed className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Bedrooms</span>
                  <span className="text-sm font-semibold text-white">{activeData.bedrooms}</span>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Bath className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Bathrooms</span>
                  <span className="text-sm font-semibold text-white">{activeData.bathrooms}</span>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Status</span>
                  <span className="text-sm font-semibold text-white">Ready for Tour</span>
                </div>
              </div>
            </div>

            {/* Schedule Visit Action */}
            <button
              onClick={onScheduleVisit}
              className="w-full font-btn py-4 rounded-2xl bg-gradient-to-r from-[#F5E6B5] via-[#D4AF37] to-[#AA7C11] text-black font-bold text-sm uppercase tracking-wider shadow-xl hover:shadow-[#D4AF37]/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
            >
              <Compass className="w-5 h-5" /> Schedule Private Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
