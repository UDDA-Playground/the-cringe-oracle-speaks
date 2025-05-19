
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';
import NavLink from '@/components/NavLink';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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

  const { t } = useLanguage();

  // Navigation menu items structured according to requested categories
  const menuItems = [
    {
      title: "Individual Coaching",
      items: [
        { title: "Self Discovery", href: "/self-discovery" }
      ]
    },
    {
      title: "For 2 People",
      items: [
        { title: "Couple's Therapy", href: "/couples-blame-buffer" },
        { title: "Ex-Couple Sheriff", href: "/ex-couple-entanglement" }
      ]
    },
    {
      title: "For Fun",
      items: [
        { title: "Party Conversation", href: "/party-conversation" },
        { title: "Personality Test", href: "/personality-test" }
      ]
    },
    {
      title: "Young",
      href: "/youth-mentor"
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/lovable-uploads/9fc901cc-dfcd-4355-bd83-81a0cf693a4c.png" alt="UDDA Logo" className="h-8" />
        </Link>
        
        {/* Desktop Nav with Dropdown Menus */}
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavLink to="/">{t('nav.home')}</NavLink>
              </NavigationMenuItem>
              
              {menuItems.map((category, index) => (
                <NavigationMenuItem key={index}>
                  {category.items ? (
                    <>
                      <NavigationMenuTrigger className="font-cabinet font-medium">
                        {category.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-3 p-4">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={item.href}
                                  className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  {item.title}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link 
                        to={category.href || "#"} 
                        className="font-cabinet font-medium py-1 hover:text-udda-green transition-colors whitespace-nowrap px-4"
                      >
                        {category.title}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          <LanguageSwitcher className="ml-4" />
        </div>
        
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
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</NavLink>
            
            {/* Mobile dropdowns using Collapsible */}
            {menuItems.map((category, index) => (
              category.items ? (
                <div key={index} className="space-y-2">
                  <div className="font-cabinet font-semibold">{category.title}</div>
                  <div className="pl-4 space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <Link 
                        key={itemIndex} 
                        to={item.href} 
                        className="block font-cabinet py-1 hover:text-udda-green transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  key={index} 
                  to={category.href || "#"} 
                  className="font-cabinet font-medium py-2 hover:text-udda-green transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.title}
                </Link>
              )
            ))}
            
            <div className="pt-2 border-t border-gray-100">
              <LanguageSwitcher className="w-full justify-center" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
