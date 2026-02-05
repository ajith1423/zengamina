import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import './Contact.css';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission for frontend demo
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="display-medium animated">Contact Us</h1>
          <p className="body-large hero-subtitle animated delay-200">Get in touch with Zengamina for electricity services and inquiries</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2 className="heading-2">Get In Touch</h2>
              <p className="body-medium">We're here to assist you with any questions about our electricity services in Ikelenge District.</p>
              
              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="detail-icon">
                    <Phone size={24} color="#008000" />
                  </div>
                  <div className="detail-text">
                    <h4 className="heading-3">Phone</h4>
                    <a href="tel:+260779387757" className="body-medium contact-link">+260 77938 7757</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon">
                    <Mail size={24} color="#008000" />
                  </div>
                  <div className="detail-text">
                    <h4 className="heading-3">Email</h4>
                    <a href="mailto:sales@zengamina.co.zm" className="body-medium contact-link">sales@zengamina.co.zm</a>
                    <a href="mailto:queries@zengamina.co.zm" className="body-medium contact-link">queries@zengamina.co.zm</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon">
                    <MapPin size={24} color="#008000" />
                  </div>
                  <div className="detail-text">
                    <h4 className="heading-3">Location</h4>
                    <p className="body-medium">Ikelenge District<br />North-Western Province<br />Zambia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="heading-3">Send Us a Message</h3>
                
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+260 XXX XXX XXX"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="How can we help you?"
                  />
                </div>

                <button type="submit" className="btn-primary btn-submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={20} style={{ marginLeft: '8px' }} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2 className="heading-2 section-title">Our Service Area</h2>
          <div className="map-wrapper">
            <iframe
              title="Ikelenge District Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245423.79477024167!2d24.1!3d-11.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDEyJzAwLjAiUyAyNMKwMDYnMDAuMCJF!5e0!3m2!1sen!2szm!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '24px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
