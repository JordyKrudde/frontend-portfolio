import React, { useEffect, useRef } from 'react';

function TechStackSection() {
  const carouselRef = useRef(null);
  
  useEffect(() => {
    const scrollContainer = carouselRef.current;
    if (!scrollContainer) return;
    
    let animationId;
    let scrollAmount = 0;
    const speed = 1;
    
    const scroll = () => {
      scrollAmount += speed;
      
      if (scrollAmount >= 280) {
        const firstItem = scrollContainer.children[0].cloneNode(true);
        scrollContainer.appendChild(firstItem);
        scrollContainer.removeChild(scrollContainer.children[0]);
        scrollAmount = 0;
      }
      
      scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const tech = [
    { name: 'Github' },
    { name: 'React' },
    { name: 'Tailwind CSS' },
    { name: 'Django' },
    { name: 'Python' },
    { name: 'SCSS' },
    { name: 'Figma' },
    { name: 'Windsurf' },
    { name: 'Docker' },
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
          <div id="blob" className="absolute top-1/5 left-1/2 right-1/2 -translate-x-1/2 filter blur-[8px] z-0"></div>
        </div>
      <section className="py-20 text-white relative overflow-hidden">
        <div className="container mx-auto mb-16 z-10">
          <div className="text-center">
            <p className="text-sm uppercase tracking-widest text-green-400 mb-4">GOOD STUFF</p>
            <h2 className="text-5xl md:text-6xl">TECH I LIKE TO WORK WITH</h2>
          </div>
        </div>
        
        <div className="w-full overflow-hidden mt-16">
          <div 
            ref={carouselRef} 
            className="flex items-center space-x-6 py-8"
            style={{ willChange: 'transform' }}
          >
            {tech.map((tech, index) => (
              <div 
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 w-64 h-48 border border-slate-100/20 rounded-lg flex items-center justify-center p-6 bg-[#5a89fd0d] backdrop-blur-[8px]"
              >
                <div className="text-white text-2xl">{tech.name}</div>
              </div>
            ))}
            
            {tech.map((tech, index) => (
              <div 
                key={`${tech.name}-duplicate-${index}`}
                className="flex-shrink-0 w-64 h-48 border border-slate-100/20 rounded-lg flex items-center justify-center p-6 bg-[#5a89fd0d] backdrop-blur-[8px]"
              >
                <div className="text-white text-2xl">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechStackSection;
