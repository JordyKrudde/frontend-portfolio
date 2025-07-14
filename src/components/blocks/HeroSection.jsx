import React from 'react';
import Button from '../ui/Button';

function HeroSection({ 
  title = "Hi, I'm a Developer", 
  subtitle = "I build amazing web experiences", 
  ctaText = "View My Work", 
  ctaLink = "#projects",
  backgroundImage = null,
  alignment = "center" // can be "left", "center", or "right"
}) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end"
  };

  const bgStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {};

  return (
    <section 
      className="relative py-20 px-6 flex items-center justify-center min-h-[60vh] bg-gradient-to-br from-blue-900 to-purple-800 text-white"
      style={bgStyle}
    >
      {/* Overlay for better text readability when using background images */}
      {backgroundImage && <div className="absolute inset-0 bg-black bg-opacity-50"></div>}
      
      <div className={`container mx-auto relative z-10 flex flex-col ${alignmentClasses[alignment]} space-y-6`}>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">{title}</h1>
        <p className="text-xl md:text-2xl max-w-2xl">{subtitle}</p>
        <div className="mt-8">
          <Button 
            variant="primary" 
            size="lg" 
            className="bg-white text-blue-900 hover:bg-gray-100"
            onClick={() => window.location.href = ctaLink}
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
