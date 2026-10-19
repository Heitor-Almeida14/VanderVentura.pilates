import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { KineticMarquee } from './components/KineticMarquee';
import { MethodEditorial } from './components/MethodEditorial';
import { ApparatusShowcase } from './components/ApparatusShowcase';
import { PostureAnalyzer } from './components/PostureAnalyzer';
import { PlansAndPasses } from './components/PlansAndPasses';
import { ScheduleSimulator } from './components/ScheduleSimulator';
import { StudioGallery } from './components/StudioGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-vv-offwhite text-vv-black overflow-x-hidden">
      {/* Interactive Cursor for Desktop */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar />

      <main id="main-content">
        {/* Hero Section */}
        <Hero />

        {/* High-speed kinetic marquee */}
        <KineticMarquee />

        {/* Editorial Philosophy & Clinical Method */}
        <MethodEditorial />

        {/* Interactive Equipment & Biomechanics Showcase (Dark Section) */}
        <ApparatusShowcase />

        {/* Interactive Posture / Spine Before & After Comparison Slider */}
        <PostureAnalyzer />

        {/* Corporate Benefits (Wellhub / Totalpass) & Studio Plans */}
        <PlansAndPasses />

        {/* Multi-step Interactive Schedule Booking Calculator */}
        <ScheduleSimulator />

        {/* Daily Studio Atmosphere & Instagram Feed */}
        <StudioGallery />

        {/* Student Testimonials & Google 4.9 Score */}
        <ReviewsSection />

        {/* Strategic Location & Route Guides on Av. Cupecê */}
        <LocationSection />

        {/* Transparent FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Monumental Footer */}
      <Footer />
    </div>
  );
};

export default App;
