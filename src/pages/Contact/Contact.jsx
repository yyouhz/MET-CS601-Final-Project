// src/pages/Contact/Contact.jsx
import React, { useState, useEffect } from 'react';
import './Contact.css';

// Contact page
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [cityName, setCityName] = useState(null);

  // Get city name from coordinates using OpenStreetMap API and store in cityName variable
  const getCityFromCoordinates = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`
      );
      const data = await response.json();
      if (data.address) {
        return data.address.city || data.address.town || data.address.village || 'Unknown location';
      }
      return 'Unknown location';
    } catch (error) {
      console.error('Error fetching city name:', error);
      return 'Unknown location';
    }
  };

  // Get user's location from browser and store in userLocation variable
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          const city = await getCityFromCoordinates(latitude, longitude);
          setCityName(city);
        },
        (error) => {
          setLocationError(error.message);
        }
      );
    } else {
      setLocationError("Geolocation is not supported by your browser");
    }
  }, []);

  // Handle form changes and update formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission and update status state
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setStatus(null);
    }, 3000);
  };

  // Render the contact page
  return (
    <div className="contact-content">
      <h2>Get in Touch</h2>
      <p className="subtitle">Have a question or want to work together? Feel free to reach out!</p>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <div className="icon email-icon"></div>
            <h4>Email</h4>
            <a href="mailto:ywu115@bu.edu">ywu115@bu.edu</a>
          </div>

          <div className="info-card">
            <div className="icon location-icon"></div>
            <h4>My Location</h4>
            <p>San Diego, California</p>
            {cityName && (
              <p className="user-location">
                Your location: {cityName}
              </p>
            )}
            {locationError && (
              <p className="location-error">{locationError}</p>
            )}
          </div>

          <div className="info-card">
            <div className="icon linkedin-icon-contact"></div>
            <h4>Linkedin</h4>
            <a href="https://www.linkedin.com/in/yuhao-wu-b8a91231b/"
              target="_blank"
              rel="noopener noreferrer">
              Connect with me
            </a>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="10"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>

            {status === 'success' && (
              <div className="success-message">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="error-message">
                There was an error sending your message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;