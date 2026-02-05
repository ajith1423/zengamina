import { Link } from 'react-router-dom';
import { Zap, Users, Clock, Award, Phone } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="display-large animated">Powering Ikelenge</h1>
          <p className="body-large hero-text animated delay-200">
            Reliable electricity for homes, institutions, and businesses across Ikelenge District, North-Western Zambia
          </p>
          <div className="hero-actions animated delay-400">
            <Link to="/contact" className="btn-primary">Get Connected Today</Link>
            <a href="tel:+260779387757" className="btn-secondary">
              <Phone size={20} style={{ marginRight: '8px', display: 'inline' }} />
              Call: +260 77938 7757
            </a>
          </div>
        </div>
      </section>

      {/* Connection Steps */}
      <section className="connection-steps-section">
        <div className="container">
          <h2 className="heading-1 section-title">Get Connected to Electricity in 5 Easy Steps</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="heading-3">Visit Our Office</h3>
              <p className="body-small">Contact our customer service team in Ikelenge District</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="heading-3">Submit Application</h3>
              <p className="body-small">Fill out the connection application form with required documents</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="heading-3">Site Assessment</h3>
              <p className="body-small">Our team conducts a technical assessment of your property</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3 className="heading-3">Installation</h3>
              <p className="body-small">Professional installation of meter and connection equipment</p>
            </div>
            <div className="step-card">
              <div className="step-number">5</div>
              <h3 className="heading-3">Get Powered</h3>
              <p className="body-small">Start enjoying reliable electricity supply immediately</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-section">
        <div className="container">
          <h2 className="heading-1 section-title">Why Choose Zengamina</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon-wrapper">
                <Zap size={40} color="white" />
              </div>
              <h3 className="heading-2\">Reliable Supply</h3>
              <p className="body-medium">Consistent 24/7 power supply with minimal disruptions for all your electricity needs</p>
            </div>
            <div className="service-card">
              <div className="service-icon-wrapper">
                <Clock size={40} color="white" />
              </div>
              <h3 className="heading-2">Fast Connection</h3>
              <p className="body-medium">Quick and efficient connection process to get you powered up in no time</p>
            </div>
            <div className="service-card">
              <div className="service-icon-wrapper">
                <Users size={40} color="white" />
              </div>
              <h3 className="heading-2">Expert Support</h3>
              <p className="body-medium">Qualified technical team available on ground to assist you anytime</p>
            </div>
            <div className="service-card">
              <div className="service-icon-wrapper">
                <Award size={40} color="white" />
              </div>
              <h3 className="heading-2">Local Presence</h3>
              <p className="body-medium">Serving Ikelenge District with dedicated local support and commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>1000+</h3>
              <p>Customers Connected</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Customer Support</p>
            </div>
            <div className="stat-item">
              <h3>99%</h3>
              <p>Uptime Reliability</p>
            </div>
            <div className="stat-item">
              <h3>5+</h3>
              <p>Years of Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy Units Section */}
      <section className="buy-units-section">
        <div className="container">
          <div className="buy-units-content">
            <div className="buy-units-text">
              <h2 className="heading-1">Buy Electricity Units at Your Convenience</h2>
              <p className="body-large">We are now Mobile Ready - No more struggling to buy power units!</p>
              <div className="payment-methods">
                <div className="payment-method">
                  <div className="payment-icon">
                    <Phone size={32} color="var(--brand-primary)" />
                  </div>
                  <div>
                    <h4 className="heading-3">Mobile Money</h4>
                    <p className="body-medium">Pay via MTN, Airtel, or Zamtel mobile money</p>
                  </div>
                </div>
                <div className="payment-method">
                  <div className="payment-icon">
                    <Zap size={32} color="var(--brand-primary)" />
                  </div>
                  <div>
                    <h4 className="heading-3">Instant Activation</h4>
                    <p className="body-medium">Units loaded automatically to your meter</p>
                  </div>
                </div>
                <div className="payment-method">
                  <div className="payment-icon">
                    <Clock size={32} color="var(--brand-primary)" />
                  </div>
                  <div>
                    <h4 className="heading-3">24/7 Availability</h4>
                    <p className="body-medium">Buy units anytime, anywhere</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="buy-units-image">
              <img src="https://images.pexels.com/photos/4199524/pexels-photo-4199524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Mobile payment" />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Information Section */}
      <section className="safety-section">
        <div className="container">
          <h2 className="heading-1 section-title">Health & Safety - Be Aware, Stay Safe</h2>
          <div className="safety-grid">
            <div className="safety-card">
              <h3 className="heading-3">Report Electrical Issues</h3>
              <p className="body-medium">Immediately report fallen, rotten, or leaning electricity poles to our emergency line</p>
              <a href="tel:+260779387757" className="btn-secondary">Emergency: +260 77938 7757</a>
            </div>
            <div className="safety-card">
              <h3 className="heading-3">Illegal Connections</h3>
              <p className="body-medium">Help us minimize electricity-related fatalities by reporting illegal connections and vandalism in your area</p>
            </div>
            <div className="safety-card">
              <h3 className="heading-3">Use Certified Electricians</h3>
              <p className="body-medium">Always use qualified electricians to check and repair cables, sockets, and connections to prevent fire outbreaks</p>
            </div>
            <div className="safety-card">
              <h3 className="heading-3">Vegetation Clearance</h3>
              <p className="body-medium">Report vegetation growth along power lines. Clearance is our responsibility - never attempt it yourself</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="heading-1 section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="body-medium">"Power supply has been stable and reliable since we got connected. My business can now operate without interruptions."</p>
              <div className="testimonial-author">
                <strong>John M.</strong> - Ikelenge Business Owner
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="body-medium">"The connection process was fast and the customer service team was very helpful. Now our children can study at night."</p>
              <div className="testimonial-author">
                <strong>Mary K.</strong> - Ikelenge Resident
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="body-medium">"Buying units through mobile money is so convenient. I don't have to travel to town anymore to purchase electricity."</p>
              <div className="testimonial-author">
                <strong>Patrick L.</strong> - Rural Customer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas with Image */}
      <section className="service-areas-section">
        <div className="container">
          <div className="service-areas-content">
            <div className="service-areas-image">
              <img src="https://images.unsplash.com/photo-1650658357305-d796f94ccfba?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwyfHxzdHJlZXQlMjBsaWdodGluZ3xlbnwwfHx8fDE3NzAyNjA0Mzl8MA&ixlib=rb-4.1.0&q=85" alt="Night lighting" />
            </div>
            <div className="service-areas-text">
              <h2 className="heading-1">Lighting Up Ikelenge District</h2>
              <p className="body-large">We provide comprehensive electricity coverage across North-Western Province</p>
              <ul className="service-list">
                <li>Urban and peri-urban areas</li>
                <li>Rural communities</li>
                <li>Commercial centers</li>
                <li>Healthcare facilities</li>
                <li>Educational institutions</li>
                <li>Industrial zones</li>
              </ul>
              <Link to="/community" className="btn-primary">Learn About Our Impact</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-1">Ready to Get Connected?</h2>
            <p className="body-large">Join hundreds of satisfied customers enjoying reliable electricity in Ikelenge District</p>
            <Link to="/contact" className="btn-primary btn-cta">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
