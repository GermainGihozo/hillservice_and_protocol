import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Let's Make Your Event <span className="text-gold">Magical</span> ✨
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Professional Services, Event Planning, Live Music & Ceremony Management
        </motion.p>

        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a href="#contact" className="btn btn-primary">Book Your Event</a>
          <a href="#services" className="btn btn-secondary">Our Services</a>
        </motion.div>

        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="stat">
            <h3>100+</h3>
            <p>Events Organized</p>
          </div>
          <div className="stat">
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat">
            <h3>2+</h3>
            <p>Years Experience</p>
          </div>
        </motion.div>
      </motion.div>

      <div className="hero-decorations">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
