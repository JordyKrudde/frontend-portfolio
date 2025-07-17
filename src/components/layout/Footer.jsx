import React, { useRef, useEffect } from 'react';

function Footer() {
  const scrollTextRef = useRef(null);
  
  useEffect(() => {
    let animationId;
    const scrollContainer = scrollTextRef.current;
    
    if (!scrollContainer) return;

    const content = scrollContainer.innerHTML;
    scrollContainer.innerHTML = content + content;
    
    let scrollAmount = 0;
    const speed = 1;
    
    const scroll = () => {
      scrollAmount += speed;
      
      if (scrollAmount >= scrollContainer.firstElementChild.offsetWidth) {
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
  
  return (
    <footer className="bg-black text-white py-12">
      <div className="overflow-hidden border-t border-b border-gray-800 py-8">
        <div className="w-full overflow-hidden">
          <div 
            ref={scrollTextRef} 
            className="flex whitespace-nowrap text-[12rem] font-bold tracking-tighter"
          >
            <span className="mr-8">LET'S TALK -</span>
            <span className="mr-8">LET'S TALK -</span>
            <span className="mr-8">LET'S TALK -</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="text-xl font-light">Jordy Krudde</div>
              <a href="mailto:jordykrudde@gmail.com" className="ml-4 text-sm text-gray-400 hover:text-white">
                Email
              </a>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/jkrudde/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-white/80 hover:text-white transition-colors">
              LINKEDIN <span className="ml-1 text-sm">→</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
