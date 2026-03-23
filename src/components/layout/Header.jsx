import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center pt-6 z-50">
      <header className={`relative max-w-5xl w-fit h-fit rounded-full transition-all duration-300 border border-gray-600/30 ${scrolled ? 'bg-black/50 backdrop-blur-sm' : 'bg-black/40 backdrop-blur-sm'}`}>
        <nav className="px-6 py-4">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <div className="flex items-center">
              <a href="/#home" className="text-white hover:text-green-400 transition-colors px-7 uppercase">Home</a>
              <div className="h-5 border-l border-gray-500/50"></div>
              <a href="/#experience" className="text-white hover:text-green-400 transition-colors px-7 uppercase">Werkervaring</a>
              <div className="h-5 border-l border-gray-500/50"></div>
              <a href="/#projects" className="text-white hover:text-green-400 transition-colors px-7 uppercase">Projecten</a>
              <div className="h-5 border-l border-gray-500/50"></div>
              <Link to="/blog" className="text-white hover:text-green-400 transition-colors px-7 uppercase">Blog</Link>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden absolute top-full mt-2 bg-black/50 backdrop-blur-sm border border-gray-600/30 rounded-lg overflow-hidden z-50 w-fit left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
          <div className="flex flex-col py-4 px-6 bg-black/50 backdrop-blur-sm">
            <div className="flex flex-col items-center">
              <a
                href="/#home"
                className="text-white hover:text-green-400 transition-colors py-3 px-7"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </a>
              <div className="w-full border-t border-gray-500/50 my-1"></div>
              <a
                href="/#experience"
                className="text-white hover:text-green-400 transition-colors py-3 px-7"
                onClick={() => setMobileMenuOpen(false)}
              >
                WERKERVARING
              </a>
              <div className="w-full border-t border-gray-500/50 my-1"></div>
              <a
                href="/#projects"
                className="text-white hover:text-green-400 transition-colors py-3 px-7"
                onClick={() => setMobileMenuOpen(false)}
              >
                PROJECTEN
              </a>
              <div className="w-full border-t border-gray-500/50 my-1"></div>
              <Link
                to="/blog"
                className="text-white hover:text-green-400 transition-colors py-3 px-7"
                onClick={() => setMobileMenuOpen(false)}
              >
                BLOG
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
