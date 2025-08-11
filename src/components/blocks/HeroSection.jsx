import React from 'react';
import Button from '../ui/Button';

function HeroSection() {
  return (
    <section 
      className="relative py-12 md:py-20 px-6 text-white md:mt-20 mt-12"
      id="home"
    > 
      <div className="container flex justify-center mx-auto relative z-10">
        <div className="max-w-5xl">
          <p className="text-xl font-light text-green-400 tracking-wide uppercase">Jordy Krudde | Frontend Developer</p>
          <h1 className="text-5xl md:text-7xl text-white mb-8">Developer met passie voor mooie en functionele web ervaringen</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mb-12">
            Gespecialiseerd in het ontwikkelen van moderne web applicaties met focus op visueel aantrekkelijke, toegankelijke en gebruiksvriendelijke web ervaringen.
          </p>
          <Button 
              variant="primary" 
              size="lg" 
              className="bg-teal-900/40 border border-teal-700/50 text-white hover:bg-teal-800/50 rounded-full py-4 px-8 flex items-center space-x-4 transition-all duration-300"
              href="https://wa.me/31640287003"
            >
              <span>Stuur mij een bericht via WhatsApp</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
