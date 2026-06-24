import React from 'react'
import { motion } from 'framer-motion'
import { FaStar, FaGem, FaCrown } from 'react-icons/fa'
import './Pricing.css'

const Pricing = () => {
  const pricingPlans = [
    {
      icon: <FaStar />,
      name: 'Basic Package',
      price: '300,000',
      period: '/event',
      currency: 'Rwf',
      description: 'Perfect for small gatherings and intimate celebrations',
      features: [
        'Event Planning Consultation',
        'Basic Food & Beverage Service',
        'Up to 50 Guests',
        'Standard Setup',
        '4 Hours Coverage',
      ],
      unavailable: ['Live Band', 'Full Catering Menu', 'Ceremony Management']
    },
    {
      icon: <FaGem />,
      name: 'Premium Package',
      price: '500,000',
      period: '/event',
      currency: 'Rwf',
      description: 'Most popular choice for memorable events',
      features: [
        'Complete Event Management',
        
        'Full Food & Beverage Menu',
        'Up to 150 Guests',
        'Professional Service Staff',
        'Live Music Band (4 Hours)',
        'Ceremony Coordination',
        '8 Hours Coverage',
        'Event Planning Services',
      ],
      unavailable: [],
      featured: true
    },
    {
      icon: <FaCrown />,
      name: 'Luxury Package',
      price: '1,000,000',
      period: '/event',
      currency: 'Rwf',
      description: 'Ultimate full-service experience for your special day',
      features: [
     
        'Premium Food & Beverage Selection',
        'Unlimited Guests',
        'Full Professional Staff',
        'Live Band (Full Event)',
        'Complete Ceremony Management',
        'Full Day Coverage',
        'Bar Service',
        'Custom Menu Design',
        'Event Planner on Site',
        'Protocol Services',
      ],
      unavailable: []
    },
  ]

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Pricing</h2>
          <p className="section-subtitle">
            Transparent pricing for event management, and live music services - no hidden fees
          </p>
        </motion.div>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`pricing-card ${plan.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {plan.featured && <div className="pricing-badge">Most Popular</div>}
              
              <div className="pricing-header">
                <div className="pricing-icon">{plan.icon}</div>
                <h3>{plan.name}</h3>
                <div className="pricing-price">
                  <span className="currency">{plan.currency}</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <p className="pricing-description">{plan.description}</p>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
                {plan.unavailable.map((feature, i) => (
                  <li key={`unavailable-${i}`} className="unavailable">{feature}</li>
                ))}
              </ul>

              <a href="#contact" className="btn btn-primary">Choose Package</a>
            </motion.div>
          ))}
        </div>

        <motion.p 
          className="pricing-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <strong>Custom packages available!</strong> Contact us for tailored food & beverage, music, and event planning solutions.
        </motion.p>
      </div>
    </section>
  )
}

export default Pricing
