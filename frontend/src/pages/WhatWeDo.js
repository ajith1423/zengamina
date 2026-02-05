import { Zap, Users, Building2, Heart } from 'lucide-react';
import './WhatWeDo.css';

const WhatWeDo = () => {
  return (
    <div className="what-we-do-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="display-medium animated">What We Do</h1>
          <p className="body-large hero-subtitle animated delay-200">Delivering reliable electricity and comprehensive power solutions to Ikelenge District</p>
        </div>
      </section>

      {/* Main Services */}
      <section className="services-detail-section">
        <div className="container">
          <h2 className="heading-2 section-title">Our Core Services</h2>
          <div className="services-detail-grid">
            <div className="service-detail-card">
              <div className="service-icon">
                <Zap size={40} color="#008000" />
              </div>
              <h3 className="heading-3">Electricity Supply</h3>
              <p className="body-medium">Consistent and reliable electricity distribution to residential, commercial, and institutional customers throughout Ikelenge District.</p>
              <ul className="service-list">
                <li>24/7 power availability</li>
                <li>Stable voltage supply</li>
                <li>Regular infrastructure maintenance</li>
                <li>Quick fault response</li>
              </ul>
            </div>

            <div className="service-detail-card">
              <div className="service-icon">
                <Building2 size={40} color="#008000" />
              </div>
              <h3 className="heading-3">Business Solutions</h3>
              <p className="body-medium">Tailored electricity solutions for businesses, ensuring uninterrupted operations and supporting economic growth in the region.</p>
              <ul className="service-list">
                <li>Commercial power connections</li>
                <li>Load management support</li>
                <li>Business account services</li>
                <li>Dedicated customer support</li>
              </ul>
            </div>

            <div className="service-detail-card">
              <div className="service-icon">
                <Users size={40} color="#008000" />
              </div>
              <h3 className="heading-3">Residential Service</h3>
              <p className="body-medium">Dependable electricity for households, powering daily life and improving quality of living for families across Ikelenge.</p>
              <ul className="service-list">
                <li>Home electricity connections</li>
                <li>Meter installation and reading</li>
                <li>Flexible payment options</li>
                <li>Energy usage guidance</li>
              </ul>
            </div>

            <div className="service-detail-card">
              <div className="service-icon">
                <Heart size={40} color="#008000" />
              </div>
              <h3 className="heading-3">Institutional Support</h3>
              <p className="body-medium">Priority electricity supply for essential services including schools, healthcare facilities, and public institutions.</p>
              <ul className="service-list">
                <li>Hospitals and clinics power priority</li>
                <li>Educational facility support</li>
                <li>Government building services</li>
                <li>Community center connections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Focus */}
      <section className="focus-section">
        <div className="container">
          <h2 className="heading-2 section-title">Our Service Focus</h2>
          <div className="focus-content">
            <div className="focus-item">
              <h3 className="heading-3">Stability</h3>
              <p className="body-medium">Maintaining consistent power supply with minimal disruptions to ensure communities can depend on electricity for their daily needs.</p>
            </div>
            <div className="focus-item">
              <h3 className="heading-3">Availability</h3>
              <p className="body-medium">Expanding our network coverage to reach more households and businesses, ensuring widespread access to electricity.</p>
            </div>
            <div className="focus-item">
              <h3 className="heading-3">Community Service</h3>
              <p className="body-medium">Working closely with local communities to understand their needs and deliver responsive, customer-focused service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="infrastructure-section">
        <div className="container">
          <div className="infrastructure-content">
            <div className="infrastructure-image">
              <img src="https://images.unsplash.com/photo-1759542877886-39d81e8f2eee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHx1dGlsaXR5JTIwd29ya2Vyc3xlbnwwfHx8fDE3NzAyNTkwNzB8MA&ixlib=rb-4.1.0&q=85" alt="Utility workers" />
            </div>
            <div className="infrastructure-text">
              <h2 className="heading-2">Professional Infrastructure Management</h2>
              <p className="body-medium">Our dedicated team maintains and monitors power infrastructure across Ikelenge District, ensuring safe and reliable electricity delivery to all customers.</p>
              <p className="body-medium">We invest in regular maintenance, upgrades, and rapid response capabilities to minimize service disruptions and maintain high standards of power quality.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
