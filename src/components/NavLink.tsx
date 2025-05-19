
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, className = '', onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`font-cabinet font-medium py-1 ${isActive ? 'text-udda-green' : 'hover:text-udda-green transition-colors'} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;
