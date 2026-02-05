import { Lightbulb, GraduationCap, Home, Store } from 'lucide-react';
import './Community.css';

const Community = () => {
  return (
    <div className="community-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="display-medium animated">Community Focus</h1>
          <p className="body-large hero-subtitle animated delay-200">Empowering lives through reliable electricity in Ikelenge District</p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="container">
          <h2 className="heading-2 section-title">Improving Daily Life Through Power</h2>
          <p className="body-large impact-intro">Access to reliable electricity transforms communities, enabling better education, healthcare, commerce, and quality of life for families across Ikelenge District.</p>
          
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-icon">
                <Home size={40} color="#008000" />
              </div>
              <h3 className="heading-3">Household Empowerment</h3>
              <p className="body-medium">Reliable electricity enables families to study after dark, preserve food safely, access information, and improve their overall standard of living.</p>
            </div>

            <div className="impact-card">
              <div className="impact-icon">
                <GraduationCap size={40} color="#008000" />
              </div>
              <h3 className="heading-3">Educational Support</h3>
              <p className="body-medium">Power for schools means better learning environments with proper lighting, access to technology, and extended study hours for students.</p>
            </div>

            <div className="impact-card">
              <div className="impact-icon">
                <Lightbulb size={40} color="#008000" />
              </div>
              <h3 className="heading-3">Healthcare Enhancement</h3>
              <p className="body-medium">Dependable electricity for clinics and health centers ensures proper medical equipment operation, vaccine storage, and emergency lighting.</p>
            </div>

            <div className="impact-card">
              <div className="impact-icon">
                <Store size={40} color="#008000" />
              </div>
              <h3 className="heading-3">Commerce Growth</h3>
              <p className="body-medium">Local businesses can operate longer hours, use modern equipment, and serve customers better with consistent power supply.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Image Section */}
      <section className="community-image-section">
        <div className="container">
          <div className="community-image-grid">
            <div className="community-image-item">
              <img src="https://images.unsplash.com/photo-1597684233833-329bf7035965" alt="Rural community" />
              <div className="image-caption">
                <p className="body-small">Supporting communities across North-Western Zambia</p>
              </div>
            </div>
            <div className="community-image-item">
              <img src="https://images.pexels.com/photos/17644335/pexels-photo-17644335.jpeg" alt="Community life" />
              <div className="image-caption">
                <p className="body-small">Empowering families with reliable electricity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section className="development-section">
        <div className="container">
          <h2 className="heading-2 section-title">Strengthening Local Development</h2>
          <div className="development-content">
            <div className="development-text">
              <p className="body-large">Zengamina is committed to being more than just a power provider. We are partners in community development, working alongside residents, local leaders, and institutions to strengthen Ikelenge District.</p>
              <div className="development-points">
                <div className="development-point">
                  <h4 className="heading-3">Economic Growth</h4>
                  <p className="body-medium">Reliable electricity attracts businesses, creates employment opportunities, and enables entrepreneurship within the community.</p>
                </div>
                <div className="development-point">
                  <h4 className="heading-3">Quality of Life</h4>
                  <p className="body-medium">Access to consistent power improves safety, enables modern conveniences, and enhances overall living standards.</p>
                </div>
                <div className="development-point">
                  <h4 className="heading-3">Future Opportunities</h4>
                  <p className="body-medium">Stable electricity infrastructure lays the foundation for continued growth and development in the region.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* People-Focused Section */}
      <section className="people-section">
        <div className="container">
          <div className="people-content">
            <h2 className="heading-1">People-Focused Service</h2>
            <p className="body-large">At Zengamina, we understand that behind every electricity connection is a family, a school, a clinic, or a business counting on reliable power. Our commitment is to serve the people of Ikelenge District with dedication and care.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
