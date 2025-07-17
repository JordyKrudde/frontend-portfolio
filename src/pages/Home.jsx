import React from 'react';
import HeroSection from '../components/blocks/HeroSection';
import ProjectsGrid from '../components/blocks/ProjectsGrid';
import TechStackSection from '../components/blocks/TechStackSection';

function Home() {
  return (
    <>
      <HeroSection />
      <TechStackSection />
      <ProjectsGrid />
    </>
  );
}

export default Home;
