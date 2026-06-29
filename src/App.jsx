import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedEstates from './components/FeaturedEstates';
import EstateExplorer3D from './components/EstateExplorer3D';
import AmenitiesGrid from './components/AmenitiesGrid';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import LatestProperties from './components/LatestProperties';
import AnimatedStats from './components/AnimatedStats';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedExplorerEstateId, setSelectedExplorerEstateId] = useState('ocean-cliff-villa');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectEstateForExplorer = (estateId) => {
    // Map IDs to explorer keys
    let key = 'ocean-cliff-villa';
    if (estateId.includes('penthouse') || estateId.includes('skyline')) {
      key = 'skyline-penthouse';
    } else if (estateId.includes('eco') || estateId.includes('forest') || estateId.includes('haven')) {
      key = 'eco-estate';
    } else if (estateId.includes('cliff') || estateId.includes('aurora') || estateId.includes('azure')) {
      key = 'ocean-cliff-villa';
    }

    setSelectedExplorerEstateId(key);
    const el = document.getElementById('explorer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050B14] text-slate-100 font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Fixed Glass Navbar */}
      <Navbar onOpenContact={scrollToContact} />

      {/* Hero Section with WebGL 3D Background */}
      <Hero
        onOpenDemo={() => setDemoModalOpen(true)}
        onOpenContact={scrollToContact}
      />

      {/* Featured Estates 3D Tilt Cards */}
      <FeaturedEstates
        onSelectEstateForExplorer={handleSelectEstateForExplorer}
      />

      {/* Interactive 3D Estate Showroom Explorer */}
      <EstateExplorer3D
        selectedEstateId={selectedExplorerEstateId}
        onScheduleVisit={scrollToContact}
      />

      {/* World-Class Luxury Amenities Grid */}
      <AmenitiesGrid />

      {/* Why Choose Us & AI Matcher */}
      <WhyChooseUs onOpenContact={scrollToContact} />

      {/* Animated Key Statistics */}
      <AnimatedStats />

      {/* Testimonials */}
      <Testimonials />

      {/* Latest Global Properties */}
      <LatestProperties onSelectEstate={handleSelectEstateForExplorer} />

      {/* Private Advisory Consultation Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Demo Simulation Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        onSchedule={scrollToContact}
      />
    </div>
  );
}
