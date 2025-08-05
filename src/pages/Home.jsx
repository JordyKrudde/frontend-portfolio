import React from 'react';
import HeroSection from '../components/blocks/HeroSection';
import ProjectsGrid from '../components/blocks/ProjectsGrid';
import TechStackSection from '../components/blocks/TechStackSection';
import ExperienceSection from '../components/blocks/ExperienceSection';

function Home() {
  return (
    <>
      <HeroSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectsGrid />
    </>
  );
}

export default Home;
