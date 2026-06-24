import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Gallery.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

  // ============================================
  // 📸 REPLACE THESE IMAGES WITH YOUR OWN PHOTOS
  // ============================================
  // 
  // INSTRUCTIONS:
  // 1. Save your photos in: public/images/
  // 2. Replace the 'image' URLs below with: '/images/your-photo.jpg'
  // 3. Update 'title' and 'description' with your event details
  // 4. Keep the 'category' to work with filters (catering, event, music, ceremony)
  //
  // EXAMPLE:
  // { 
  //   id: 1, 
  //   category: 'catering',
  //   image: '/images/my-catering-photo.jpg',  // 👈 PUT YOUR IMAGE HERE
  //   title: 'Wedding Catering 2024',
  //   description: 'Delicious food service for 150 guests'
  // },
  // ============================================

  const galleryItems = [
    // 🍽️ CATERING PHOTOS (Replace these 3 images)
    { 
      id: 1, 
      category: 'catering', 
      image: '/images/BEN_4118.jpg',
      // 👆 REPLACE with: '/images/catering-1.jpg'
      title: 'Premium Catering Service', 
      description: 'Delicious food and beverage service for events' 
    },
    { 
      id: 4, 
      category: 'catering', 
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=600&fit=crop',
      // 👆 REPLACE with: '/images/catering-2.jpg'
      title: 'Buffet Service Setup', 
      description: 'Professional catering with diverse menu options' 
    },
    { 
      id: 9, 
      category: 'catering', 
      image: '/images/BEN_4125.jpg',
      // 👆 REPLACE with: '/images/catering-3.jpg'
      title: 'Food & Beverage Excellence', 
      description: 'Quality ingredients and presentation' 
    },

    // 📅 EVENT MANAGEMENT PHOTOS (Replace these 3 images)
    { 
      id: 2, 
      category: 'event', 
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
      // 👆 REPLACE with: '/images/event-1.jpg'
      title: 'Corporate Event Management', 
      description: 'Complete event planning and coordination' 
    },
    { 
      id: 7, 
      category: 'event', 
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      // 👆 REPLACE with: '/images/event-2.jpg'
      title: 'Event Setup & Coordination', 
      description: 'Professional event management services' 
    },
    { 
      id: 11, 
      category: 'event', 
      image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop',
      // 👆 REPLACE with: '/images/event-3.jpg'
      title: 'Full Event Planning', 
      description: 'From concept to execution' 
    },

    // 🎸 LIVE MUSIC BAND PHOTOS (Replace these 3 images)
    { 
      id: 3, 
      category: 'music', 
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop',
      // 👆 REPLACE with: '/images/music-1.jpg'
      title: 'Live Band Performance', 
      description: 'Professional musicians for your event' 
    },
    { 
      id: 8, 
      category: 'music', 
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop',
      // 👆 REPLACE with: '/images/music-2.jpg'
      title: 'Musical Entertainment', 
      description: 'Multiple genres and custom setlists' 
    },
    { 
      id: 12, 
      category: 'music', 
      image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800&h=600&fit=crop',
      // 👆 REPLACE with: '/images/music-3.jpg'
      title: 'Band Entertainment', 
      description: 'Making your event unforgettable' 
    },

    // ⭐ CEREMONY MANAGEMENT PHOTOS (Replace these 3 images)
    { 
      id: 5, 
      category: 'ceremony', 
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop',
      // 👆 REPLACE with: '/images/ceremony-1.jpg'
      title: 'Wedding Ceremony Management', 
      description: 'Professional ceremony coordination' 
    },
    { 
      id: 6, 
      category: 'ceremony', 
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
      // 👆 REPLACE with: '/images/ceremony-2.jpg'
      title: 'Graduation Ceremony', 
      description: 'Protocol services and guest management' 
    },
    { 
      id: 10, 
      category: 'ceremony', 
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
      // 👆 REPLACE with: '/images/ceremony-3.jpg'
      title: 'Special Ceremony Planning', 
      description: 'Expert ceremony planning and execution' 
    },
  ]

  // ============================================
  // 📝 QUICK STEPS TO ADD YOUR PHOTOS:
  // ============================================
  // 1. Put your photos in the folder: public/images/
  //    Example: public/images/wedding-1.jpg
  //
  // 2. Change the 'image:' line above to your file name
  //    From: image: 'https://images.unsplash.com/...'
  //    To:   image: '/images/wedding-1.jpg'
  //
  // 3. Update the title and description
  //
  // 4. Save this file and refresh your browser!
  // ============================================

  const filters = [
    { name: 'All Events', value: 'all' },
    { name: 'Catering', value: 'catering' },
    { name: 'Event Management', value: 'event' },
    { name: 'Live Music', value: 'music' },
    { name: 'Ceremonies', value: 'ceremony' },
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-subtitle">
            A glimpse into the magical moments we've created
          </p>
        </motion.div>

        <div className="gallery-filters">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <motion.div 
          className="gallery-grid"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="gallery-item"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(item)}
              >
                <div className="gallery-item-content">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="gallery-image"
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="lightbox-content"
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="lightbox-close" onClick={() => setSelectedImage(null)}>✕</button>
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="lightbox-image"
                />
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Gallery
