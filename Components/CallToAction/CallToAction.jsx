import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './CallToAction.css';

const CallToAction = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: 'consultation'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        service: formData.service,
        message: formData.message,
        to_name: 'Effective Solutions Team',
        reply_to: formData.email,
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        service: 'consultation'
      });

      // Optional: Store data in Google Sheets (alternative method)
      await storeInGoogleSheets(formData);

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Optional: Alternative method to store in Google Sheets
  const storeInGoogleSheets = async (data) => {
    try {
      const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        console.log('Data stored in Google Sheets successfully');
      }
    } catch (error) {
      console.error('Error storing in Google Sheets:', error);
    }
  };

  return (
    <section className="cta_Section" id="call-to-action-section">
      <div className="ca-container">
        <div className="ca-content">
          <div className="ca-text">
            <div className="ca-header">
              <h2>Ready to Transform Your Business?</h2>
              <p>Let's discuss how our innovative solutions can drive your success in Industry 4.0</p>
            </div>

            <div className="ca-benefits">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h4>Free Consultation</h4>
                  <p>Get expert advice tailored to your specific needs</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h4>Cutting-Edge Technology</h4>
                  <p>Access to latest AI, IoT, and biomedical innovations</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h4>Proven Results</h4>
                  <p>Join 50+ satisfied clients worldwide</p>
                </div>
              </div>
            </div>

            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <span>Call us at</span>
                  <strong>+94 76 621 0120</strong>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2"/>
                    <polyline points="22,6 12,13 2,6" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <span>Email us at</span>
                  <strong>info@effectivesolutions.com</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="ca-form">
            <div className="form-header"> 
              <h3>Get Started Today</h3>
              <p>Fill out the form and we'll get back to you within 24 hours</p>
            </div>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="status-message success">
                <div className="status-icon">✓</div>
                <div>
                  <h4>Thank you for your message!</h4>
                  <p>We'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="status-message error">
                <div className="status-icon">✗</div>
                <div>
                  <h4>Something went wrong</h4>
                  <p>Please try again or contact us directly.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                >
                  <option value="consultation">Free Consultation</option>
                  <option value="ai-solutions">AI Solutions</option>
                  <option value="iot-development">IoT Development</option>
                  <option value="biomedical-tech">Biomedical Technology</option>
                  <option value="software-development">Software Development</option>
                  <option value="system-integration">System Integration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Sending...' : 'Get Started'}</span>
                {isSubmitting ? (
                  <svg className="loading-spinner" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </form>

            <div className="form-footer">
              <p>🔒 Your information is secure and confidential</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;