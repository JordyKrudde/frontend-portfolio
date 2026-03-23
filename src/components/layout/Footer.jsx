function Footer() {  
  return (
    <footer className="bg-black text-white py-12">
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
          
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/jkrudde/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-white/80 hover:text-white transition-colors group">
              LINKEDIN <span className="ml-1 text-sm transform transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a href="https://github.com/jordykrudde" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-white/80 hover:text-white transition-colors group">
              GITHUB <span className="ml-1 text-sm transform transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Jordy Krudde. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
