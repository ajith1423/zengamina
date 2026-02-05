import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="network-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-heading">Zengamina</h3>
            <p className="footer-text">Powering Ikelenge</p>
            <p className="footer-text">Reliable electricity for communities in North-Western Zambia</p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subheading">Quick Links</h4>
            <nav className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/what-we-do" className="footer-link">What We Do</Link>
              <Link to="/community" className="footer-link">Community Focus</Link>
              <Link to="/contact" className="footer-link">Contact Us</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="footer-subheading">Contact Information</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <Phone size={18} />
                <a href="tel:+260779387757" className="footer-link">+260 77938 7757</a>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <a href="mailto:sales@zengamina.co.zm" className="footer-link">sales@zengamina.co.zm</a>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <a href="mailto:queries@zengamina.co.zm" className="footer-link">queries@zengamina.co.zm</a>
              </div>
              <div className="contact-item">
                <MapPin size={18} />
                <span className="footer-text-small">Ikelenge District, North-Western Province, Zambia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Zengamina. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
