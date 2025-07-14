import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">My Portfolio</Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/about" className="hover:text-blue-600">About</Link>
            <Link to="/projects" className="hover:text-blue-600">Projects</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
