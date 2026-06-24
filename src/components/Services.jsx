import React from 'react'
import { motion } from 'framer-motion'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '🍽️',
      title: 'Food & Beverage Service',
      description: 'Professional catering services with delicious food and beverages for all types of events.',
      features: ['Professional Catering', 'Diverse Menu Options', 'Quality Ingredients']
    },
    {
      icon: '🎯',
      title: 'Event Management',
      description: 'Complete event management and planning services to ensure your event runs smoothly from start to finish.',
      features: ['Full Event Planning', 'Vendor Coordination', 'Timeline Management']
    },
    {
      icon: '🎸',
      title: 'Live Music Band',
      description: 'Professional live band entertainment with talented musicians to make your event unforgettable.',
      features: ['Multiple Genres', 'Professional Musicians', 'Custom Setlists']
    },
    {
      icon: '✨',
      title: 'Ceremony Management',
      description: 'Expert ceremony planning and coordination for weddings, graduations, and special occasions.',
      features: ['Protocol Services', 'Ceremony Coordination', 'Guest Management']
    },
    {
      icon: '🎉',
      title: 'Event Planning',
      description: 'Comprehensive event planning services for weddings, corporate events, and celebrations.',
      features: ['Budget Planning', 'Venue Selection', 'Design & Decor']
    },
    {
      icon: '🎊',
      title: 'Full Event Packages',
      description: 'Complete event packages combining catering, music, and management for a stress-free experience.',
      features: ['All-Inclusive Service', 'One-Stop Solution', 'Customizable Packages']
    },
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Professional food & beverage catering, event management, live music, and ceremony planning
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
