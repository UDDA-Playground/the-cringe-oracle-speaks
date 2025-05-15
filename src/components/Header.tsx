
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Check if the current path is the CMO page or a subpage
  const isCmoPage = location.pathname.startsWith('/cmo');
  
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

  // If on CMO page, use the CMO header instead
  if (isCmoPage) {
    return null;
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-cabinet font-black text-udda-green">UDDA</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/self-discovery" className="font-cabinet font-medium py-1 hover:text-udda-green transition-colors whitespace-nowrap">
            Self Discovery
          </Link>
          <Link to="/couples-blame-buffer" className="font-cabinet font-medium py-1 hover:text-udda-green transition-colors whitespace-nowrap">
            Couple's Therapy
          </Link>
          <Link to="/ex-couple-entanglement" className="font-cabinet font-medium py-1 hover:text-udda-green transition-colors whitespace-nowrap">
            Ex-Couple Sheriff
          </Link>
          <Link to="/party-conversation" className="font-cabinet font-medium py-1 hover:text-udda-green transition-colors whitespace-nowrap">
            Party Conversation
          </Link>
          <button className="bg-udda-purple text-white font-bold py-2 px-5 rounded-full hover:bg-udda-lavender transition-colors shadow-md whitespace-nowrap">
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
      
      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/self-discovery" className="font-cabinet font-medium py-2 hover:text-udda-green transition-colors">
              Self Discovery
            </Link>
            <Link to="/couples-blame-buffer" className="font-cabinet font-medium py-2 hover:text-udda-green transition-colors">
              Couple's Therapy
            </Link>
            <Link to="/ex-couple-entanglement" className="font-cabinet font-medium py-2 hover:text-udda-green transition-colors">
              Ex-Couple Sheriff
            </Link>
            <Link to="/party-conversation" className="font-cabinet font-medium py-2 hover:text-udda-green transition-colors">
              Party Conversation
            </Link>
            <button className="bg-udda-purple text-white font-bold py-2 px-4 rounded-full w-full shadow-md">
              Log In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
