import React from 'react';
import Button from '../ui/Button';

function HeroSection() {
  return (
    <section 
      className="relative py-20 px-6 text-white md:mt-20 mt-6"
      id="home"
    > 
      <div className="container flex justify-center mx-auto relative z-10">
        <div className="max-w-5xl">
          <p className="text-xl font-light text-green-400 tracking-wide">JORDY KRUDDE | FRONTEND DEVELOPER</p>
          <h1 className="text-5xl md:text-7xl text-white mb-8">Frontend developer met een passie voor het creëren van mooie en functionele web ervaringen</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mb-12">
            Ik ben gespecialiseerd in het bouwen van responsieve en gebruiksvriendelijke websites met moderne technologieën zoals React, Tailwind CSS en meer. Laten we samen iets geweldigs creëren! 
            <span className="text-green-400 ml-1">♥</span>
          </p>
          <Button 
              variant="primary" 
              size="lg" 
              className="bg-teal-900/40 border border-teal-700/50 text-white hover:bg-teal-800/50 rounded-full py-4 px-8 flex items-center space-x-4 transition-all duration-300 cursor-auto"
              href="#"
            >
              <span>Stuur mij een bericht</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
