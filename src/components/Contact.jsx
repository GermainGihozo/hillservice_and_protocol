import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    eventDate: '',
    guests: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your inquiry! We will get back to you within 24 hours.')
    console.log('Form submitted:', formData)
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      eventDate: '',
      guests: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    { icon: <FaPhone />, title: 'Phone', info: '+1 (555) 123-4567' },
    { icon: <FaEnvelope />, title: 'Email', info: 'info@hillsservices.com' },
    { icon: <FaMapMarkerAlt />, title: 'Location', info: '123 Event Street, City, State' },
    { icon: <FaClock />, title: 'Hours', info: 'Mon - Sat: 9:00 AM - 6:00 PM' },
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's discuss how we can make your event unforgettable
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                className="info-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="info-icon">{item.icon}</div>
                <div className="info-details">
                  <h3>{item.title}</h3>
                  <p>{item.info}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Send Us a Message</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
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
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Type *</label>
                <select 
                  id="service" 
                  name="service" 
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service Type</option>
                  <option value="catering">Food & Beverage Catering</option>
                  <option value="event-planning">Event Management & Planning</option>
                  <option value="live-music">Live Music Band</option>
                  <option value="ceremony">Ceremony Management</option>
                  <option value="full-package">Full Event Package</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="eventDate">Event Date</label>
                <input 
                  type="date" 
                  id="eventDate" 
                  name="eventDate" 
                  value={formData.eventDate}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="guests">Expected Guests</label>
                <input 
                  type="number" 
                  id="guests" 
                  name="guests" 
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder="Number of guests"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Tell Us About Your Event *</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary form-submit">
              Send Inquiry
            </button>
          </motion.form>
        </div>

        <motion.div 
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Ready to Make Your Event Magical? ✨</h3>
          <p>Call us now for immediate assistance and exclusive offers!</p>
          <a href="tel:+15551234567" className="btn btn-primary">Call Now: +1 (555) 123-4567</a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
