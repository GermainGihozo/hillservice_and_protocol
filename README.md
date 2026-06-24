# Hills Services & Protocol - Professional Event Management Website

A stunning, modern React website for Hills Services & Protocol - providing premium event management, protocol services, and live entertainment for all occasions.

## 🌟 Features

### Professional Design
- ✨ Modern, elegant UI with smooth animations (Framer Motion)
- 🎨 Luxurious color scheme with gold accents
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🚀 Lightning-fast performance with Vite
- ♿ Accessibility-focused components

### Complete Sections
1. **Hero Section** - Eye-catching landing with statistics
2. **Services** - 6 beautifully designed service cards
3. **Pricing** - 3 pricing tiers with detailed features
4. **Gallery** - Interactive filterable image gallery with lightbox
5. **About** - Company information with stats
6. **Contact** - Comprehensive contact form with info cards
7. **Footer** - Social links and site navigation

### Interactive Elements
- Smooth scroll navigation
- Animated service cards
- Interactive gallery with filters
- Form validation
- Mobile hamburger menu
- Hover effects throughout
- Lightbox for gallery images
- **Dark/Light mode toggle with persistent storage**

## 🌓 Dark/Light Mode

The website includes a beautiful animated theme toggle:

- **Position**: Fixed top-right corner
- **Features**:
  - Smooth animated transitions
  - Sun/Moon icon rotation
  - Animated stars in dark mode
  - Saves preference to localStorage
  - Respects system preference on first visit
  - 3D spring animation on toggle

### Toggle Behavior
- **Light Mode**: Vibrant colorful backgrounds with glassmorphism
- **Dark Mode**: Deep dark gradients with enhanced contrast
- **Persistence**: Your theme choice is saved and restored on next visit

## 📦 Services Offered

- 💍 **Weddings** - Complete wedding planning and coordination
- 🏢 **Corporate Meetings** - Professional business event management
- 🎓 **Graduations** - Ceremony organization and protocol services
- 🎶 **Concerts** - Event management for musical performances
- 🎉 **Special Events** - Custom event planning for any occasion
- 🎸 **Live Music Band** - Professional entertainment services

## 💰 Pricing Packages

- **Basic Package** - $999/event (Up to 50 guests)
- **Premium Package** - $2,499/event (Up to 150 guests, Most Popular)
- **Luxury Package** - $4,999/event (Unlimited guests, Full VIP service)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```
The site will open at `http://localhost:5173`

3. **Build for Production**
```bash
npm run build
```

4. **Preview Production Build**
```bash
npm run preview
```

## 📁 Project Structure

```
hillservice_and_protocol/
├── public/                # Static assets
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.jsx    # Navigation bar
│   │   ├── Hero.jsx      # Hero section
│   │   ├── Services.jsx  # Services showcase
│   │   ├── Pricing.jsx   # Pricing cards
│   │   ├── Gallery.jsx   # Image gallery
│   │   ├── About.jsx     # About section
│   │   ├── Contact.jsx   # Contact form
│   │   └── Footer.jsx    # Footer
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies
└── vite.config.js        # Vite configuration
```

## 🎨 Customization

### Update Contact Information

Edit `src/components/Contact.jsx` and `src/components/Footer.jsx`:
- Phone number
- Email address
- Physical location
- Business hours
- Social media links

### Change Colors

Modify CSS variables in `src/index.css`:
```css
:root {
  --primary-gold: #d4af37;
  --primary-dark: #1a1a2e;
  --accent-pink: #e94560;
}
```

### Update Services

Edit the `services` array in `src/components/Services.jsx`:
```javascript
const services = [
  {
    icon: '💍',
    title: 'Your Service',
    description: 'Your description',
    features: ['Feature 1', 'Feature 2']
  }
]
```

### Modify Pricing

Update the `pricingPlans` array in `src/components/Pricing.jsx`:
```javascript
const pricingPlans = [
  {
    name: 'Package Name',
    price: '999',
    features: ['Feature 1', 'Feature 2']
  }
]
```

### Add Gallery Images

Replace the emoji placeholders in `src/components/Gallery.jsx` with actual images:
```javascript
const galleryItems = [
  {
    id: 1,
    category: 'wedding',
    image: '/path/to/image.jpg',
    title: 'Event Title'
  }
]
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **CSS3** - Styling with custom properties
- **Google Fonts** - Poppins & Playfair Display
- **localStorage** - Theme persistence

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🎯 Performance

- Fast page loads with Vite
- Optimized animations
- Lazy loading ready
- SEO-friendly structure
- Responsive images support

## 📞 Support

For questions or issues:
- Email: info@hillsservices.com
- Phone: +1 (555) 123-4567

## 📄 License

© 2024 Hills Services & Protocol. All rights reserved.

---

**Let's make your event magical! ✨**
