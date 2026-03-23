import React from 'react';
import ScrollProgress from '../components/ScrollProgressSection';
import Navbar from '../components/NavbarSection';
import Hero from '../components/HeroSection';
import WorkSection from '../components/ContainSection';
import AboutSection from '../components/AboutSection';

function HomePage() {
  return (
    <div>
          <ScrollProgress />
      <Navbar />
      <Hero />
       <WorkSection />
        <AboutSection />

    </div>
  );
}

export default HomePage;