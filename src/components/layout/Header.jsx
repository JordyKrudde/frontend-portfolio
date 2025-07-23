import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center pt-6 z-50">
      <header className={`max-w-5xl w-fit h-fit rounded-full transition-all duration-300 border border-gray-600/30 ${scrolled ? 'bg-black/70 backdrop-blur-sm' : 'bg-black/40 backdrop-blur-sm'}`}>
        <nav className="px-6 py-4">
          <div className="flex items-center space-x-12">
            <div className="flex items-center">
              <a href="#home" className="text-white hover:text-green-400 transition-colors px-7">HOME</a>
              <div className="h-5 border-l border-gray-500/50"></div>
              <a href="#projects" className="text-white hover:text-green-400 transition-colors px-7">PROJECTS</a>
              <div className="h-5 border-l border-gray-500/50"></div>
              <Link to="/blog" className="text-white hover:text-green-400 transition-colors px-7">BLOG</Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
