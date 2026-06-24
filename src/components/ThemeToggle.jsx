import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage or system preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme === 'dark'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark-mode')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark-mode')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        className="theme-toggle-track"
        animate={{
          background: isDark 
            ? 'linear-gradient(135deg, #1e293b, #334155)' 
            : 'linear-gradient(135deg, #fbbf24, #f59e0b)'
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="theme-toggle-thumb"
          animate={{
            x: isDark ? 32 : 0,
            rotate: isDark ? 360 : 0,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <motion.div
            animate={{
              opacity: isDark ? 0 : 1,
              rotate: isDark ? -180 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="icon-wrapper"
          >
            <FaSun />
          </motion.div>
          <motion.div
            animate={{
              opacity: isDark ? 1 : 0,
              rotate: isDark ? 0 : 180,
            }}
            transition={{ duration: 0.3 }}
            className="icon-wrapper moon-icon"
          >
            <FaMoon />
          </motion.div>
        </motion.div>
      </motion.div>
      
      <div className="theme-toggle-stars">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="star"
            animate={{
              opacity: isDark ? [0, 1, 0] : 0,
              scale: isDark ? [0, 1, 0] : 0,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 2) * 60}%`,
            }}
          >
            ⭐
          </motion.div>
        ))}
      </div>
    </motion.button>
  )
}

export default ThemeToggle
