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
  // 4. Keep the 'category' to work with filters (wedding, corporate, graduation, concert, special)
  //
  // EXAMPLE:
  // { 
  //   id: 1, 
  //   category: 'wedding',
  //   image: '/images/my-wedding-photo.jpg',  // 👈 PUT YOUR IMAGE HERE
  //   title: 'Smith Wedding 2024',
  //   description: 'Beautiful garden ceremony with 150 guests'
  // },
  // ============================================

  const galleryItems = [
    // 💍 WEDDING PHOTOS (Replace these 3 images)
    { 
      id: 1, 
      category: 'wedding', 
      image: '/images/BEN_4118.jpg',
      // 👆 REPLACE with: '/images/wedding-1.jpg'
      title: 'Elegant Wedding Ceremony', 
      description: 'Beautiful outdoor ceremony with floral decorations' 
    },
    { 
      id: 4, 
      category: 'wedding', 
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop',
      // 👆 REPLACE with: '/images/wedding-2.jpg'
      title: 'Garden Wedding Reception', 
      description: 'Romantic venue setup with elegant decor' 
    },
    { 
      id: 9, 
      category: 'wedding', 
      image: '/images/BEN_4125.jpg',
      // 👆 REPLACE with: '/images/wedding-3.jpg'
      title: 'Grand Wedding Reception', 
      description: 'Luxurious ballroom wedding celebration' 
    },

    // 🏢 CORPORATE EVENT PHOTOS (Replace these 3 images)
    { 
      id: 2, 
      category: 'corporate', 
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
      // 👆 REPLACE with: '/images/corporate-1.jpg'
      title: 'Corporate Gala Event', 
      description: 'Annual business conference with 500+ attendees' 
    },
    { 
      id: 7, 
      category: 'corporate', 
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      // 👆 REPLACE with: '/images/corporate-2.jpg'
      title: 'Product Launch Event', 
      description: 'Innovative tech startup product reveal' 
    },
    { 
      id: 11, 
      category: 'corporate', 
      image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop',
      // 👆 REPLACE with: '/images/corporate-3.jpg'
      title: 'Business Conference', 
      description: 'International business summit event' 
    },

    // 🎓 GRADUATION PHOTOS (Replace these 2 images)
    { 
      id: 3, 
      category: 'graduation', 
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
      // 👆 REPLACE with: '/images/graduation-1.jpg'
      title: 'University Graduation', 
      description: 'Memorable graduation ceremony celebration' 
    },
    { 
      id: 12, 
      category: 'graduation', 
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop',
      // 👆 REPLACE with: '/images/graduation-2.jpg'
      title: 'College Commencement', 
      description: 'Outdoor graduation ceremony with family' 
    },

    // 🎸 CONCERT/MUSIC PHOTOS (Replace these 2 images)
    { 
      id: 5, 
      category: 'concert', 
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop',
      // 👆 REPLACE with: '/images/concert-1.jpg'
      title: 'Live Concert Performance', 
      description: 'Music festival with live band entertainment' 
    },
    { 
      id: 8, 
      category: 'concert', 
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop',
      // 👆 REPLACE with: '/images/concert-2.jpg'
      title: 'Band Performance Night', 
      description: 'Live music event with full entertainment' 
    },

    // 🎉 SPECIAL EVENT PHOTOS (Replace these 2 images)
    { 
      id: 6, 
      category: 'special', 
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
      // 👆 REPLACE with: '/images/special-1.jpg'
      title: 'Birthday Celebration', 
      description: '50th birthday party with 200 guests' 
    },
    { 
      id: 10, 
      category: 'special', 
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
      // 👆 REPLACE with: '/images/special-2.jpg'
      title: 'Anniversary Celebration', 
      description: '25th anniversary party with live music' 
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
    { name: 'Weddings', value: 'wedding' },
    { name: 'Corporate', value: 'corporate' },
    { name: 'Graduations', value: 'graduation' },
    { name: 'Concerts', value: 'concert' },
    { name: 'Special', value: 'special' },
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
