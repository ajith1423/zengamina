import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="display-medium animated">About Zengamina</h1>
          <p className="body-large hero-subtitle animated delay-200">Powering communities with reliable electricity across North-Western Zambia</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2 className="heading-2">Who We Are</h2>
              <p className="body-medium">Zengamina is a Zambia-based power company dedicated to delivering reliable electricity to communities in the Ikelenge District of North-Western Province.</p>
              <p className="body-medium">We understand the vital role that consistent power supply plays in daily life, from lighting homes to supporting healthcare facilities, schools, and local businesses. Our commitment is to ensure that communities across Ikelenge have access to stable and dependable electricity.</p>
            </div>
            <div className="content-image">
              <img src="https://images.unsplash.com/photo-1762834083499-47aefc357f44" alt="Power infrastructure" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="heading-2 section-title">Our Commitment</h2>
          <div className="values-grid">
            <div className="network-card">
              <h3 className="heading-3">Service Reliability</h3>
              <p className="body-medium">We prioritize consistent and stable electricity supply, ensuring minimal disruptions to the communities we serve.</p>
            </div>
            <div className="network-card">
              <h3 className="heading-3">Local Presence</h3>
              <p className="body-medium">Operating close to the people of Ikelenge District, we understand local needs and respond quickly to service requirements.</p>
            </div>
            <div className="network-card">
              <h3 className="heading-3">Long-Term Partnership</h3>
              <p className="body-medium">Our commitment to North-Western Zambia is built on sustainable service delivery and community development.</p>
            </div>
            <div className="network-card">
              <h3 className="heading-3">Professional Standards</h3>
              <p className="body-medium">We maintain high technical and safety standards in all our operations, ensuring quality service for all customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2 className="heading-1">Our Mission</h2>
            <p className="body-large">To provide reliable, accessible electricity that powers daily life, supports economic growth, and strengthens communities across Ikelenge District.</p>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="content-section">
        <div className="container">
          <h2 className="heading-2 section-title">Serving Ikelenge District</h2>
          <div className="service-area-content">
            <p className="body-large">Located in North-Western Province of Zambia, Ikelenge District is home to diverse communities that rely on consistent electricity for their daily needs.</p>
            <p className="body-medium">Zengamina is proud to serve this region, working closely with local institutions, businesses, and households to ensure they have the power they need to thrive.</p>
            <div className="service-area-features">
              <div className="feature-item">
                <h4 className="heading-3">Residential Service</h4>
                <p className="body-medium">Reliable power for homes and families</p>
              </div>
              <div className="feature-item">
                <h4 className="heading-3">Institutional Support</h4>
                <p className="body-medium">Dependable electricity for schools and healthcare facilities</p>
              </div>
              <div className="feature-item">
                <h4 className="heading-3">Business Solutions</h4>
                <p className="body-medium">Stable power supply for commercial enterprises</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
