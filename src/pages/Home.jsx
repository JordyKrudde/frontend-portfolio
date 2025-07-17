import React from 'react';
import HeroSection from '../components/blocks/HeroSection';
import ClientsSection from '../components/blocks/ClientsSection';
import ProjectsGrid from '../components/blocks/ProjectsGrid';

function Home() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <ProjectsGrid />
    </>
  );
}

export default Home;
