import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`network-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-wrapper">
        <Link to="/" className="network-logo">
          <img src="/images/zengamina-logo.png" alt="Zengamina" className="logo-image" />
        </Link>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`network-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={`network-nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`network-nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/what-we-do" 
            className={`network-nav-link ${isActive('/what-we-do') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            What We Do
          </Link>
          <Link 
            to="/community" 
            className={`network-nav-link ${isActive('/community') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Community Focus
          </Link>
          <Link 
            to="/contact" 
            className={`network-nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
