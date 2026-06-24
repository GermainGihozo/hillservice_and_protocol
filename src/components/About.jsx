import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const features = [
    { icon: '✓', text: 'Professional Catering Services' },
    { icon: '✓', text: 'Experienced Event Coordinators' },
    { icon: '✓', text: 'Live Band Entertainment' },
    { icon: '✓', text: 'Complete Event Management' },
    { icon: '✓', text: 'Ceremony Planning & Coordination' },
    { icon: '✓', text: 'Competitive Pricing' },
  ]

  const stats = [
    { number: '500+', label: 'Events Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years Experience' },
    { number: '50+', label: 'Team Members' },
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title" style={{ textAlign: 'left' }}>About Us</h2>
            <h3 className="about-subtitle">Food, Music, and Perfect Event Management Since 2014</h3>
            
            <p>
              We are a premier event services company specializing in food & beverage catering, complete event management and planning, live music entertainment, and ceremony coordination. With years of experience in the industry, we bring professionalism, creativity, and exceptional service to every event we manage.
            </p>
            
            <p>
              Our team of experienced event coordinators, professional chefs, talented musicians, and service staff work together to ensure your event runs smoothly from start to finish. From delicious catering to live entertainment and seamless event planning, we handle every detail so you can enjoy your special day.
            </p>

            <div className="about-features">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="feature"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="feature-icon">{feature.icon}</span>
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary mt-2">Get Started</a>
          </motion.div>

          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
