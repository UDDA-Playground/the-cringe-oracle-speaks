
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const CmoHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/lovable-uploads/9fc901cc-dfcd-4355-bd83-81a0cf693a4c.png" alt="UDDA Logo" className="h-8" />
        </Link>
        
        {/* Desktop Nav - Simplified for CMO section */}
        <nav className="hidden md:flex items-center space-x-8">
          <button className="bg-blue-600 text-white font-bold py-2 px-5 rounded-full hover:bg-blue-700 transition-colors shadow-md whitespace-nowrap">
            Log In
          </button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Nav - Simplified for CMO section */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full shadow-md">
              Log In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default CmoHeader;
