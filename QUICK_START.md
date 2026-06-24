# 🚀 Quick Start Guide - Hills Services & Protocol

## 🌐 Your Website is LIVE!

**Access at:** `http://localhost:5173/`

---

## ✨ What You Have

### 🎨 Complete Sections
1. **Hero** - Animated gradient background with 3D stats
2. **Services** - 6 service cards with 3D animations
3. **Pricing** - 3 pricing tiers with glassmorphism
4. **Gallery** - Filterable image gallery with lightbox
5. **About** - Company info with animated stats
6. **Contact** - Form with 3D info cards
7. **Footer** - Social links and navigation

### 🌓 **NEW: Dark/Light Mode Toggle**
- **Location**: Top-right corner (fixed position)
- **Features**:
  - ☀️ Light mode with vibrant gradients
  - 🌙 Dark mode with deep navy themes
  - Animated sun/moon icons with rotation
  - ⭐ Twinkling stars in dark mode
  - Saves preference to browser
  - Respects system theme on first visit
  - Smooth spring animation

### 🎭 Modern Features
- 3D transforms and rotations
- Glassmorphism effects
- Gradient animations
- Parallax scrolling
- Smooth transitions
- Mobile responsive
- Accessibility compliant

---

## 🎯 Try These Features

### 1. Theme Toggle
- Click the sun/moon button in top-right
- Watch the smooth transition
- Refresh page - theme persists!

### 2. Hero Section
- Notice the animated gradient background
- Hover over stat cards (3D rotation)
- See the floating orb animation

### 3. Service Cards
- Hover to see 3D lift and rotate
- Icons spin 360° with bounce
- Gradient borders appear

### 4. Pricing Cards
- Dark glassmorphism design
- "Most Popular" badge pulses
- Hover for 3D perspective shift
- Icons rotate on Y-axis

### 5. Gallery
- Click filter buttons
- Watch smooth category transitions
- Click image to open lightbox
- See 3D card rotations

### 6. Contact Form
- Click inputs to see glow effect
- Info cards slide on hover
- Icons rotate 360°

### 7. Navigation
- Mobile menu (hamburger icon)
- Smooth scroll to sections
- Glowing link underlines

---

## 📝 Customize Your Content

### Update Contact Information
**File**: `src/components/Contact.jsx`
```javascript
const contactInfo = [
  { icon: <FaPhone />, title: 'Phone', info: '+1 YOUR-NUMBER' },
  { icon: <FaEnvelope />, title: 'Email', info: 'your@email.com' },
  // ...
]
```

**File**: `src/components/Footer.jsx`
```javascript
<li>📞 +1 YOUR-NUMBER</li>
<li>📧 your@email.com</li>
```

### Change Colors
**File**: `src/index.css`
```css
:root {
  --primary-purple: #8b5cf6;  /* Change to your color */
  --primary-pink: #ec4899;
  /* ... */
}
```

### Edit Services
**File**: `src/components/Services.jsx`
```javascript
const services = [
  {
    icon: '💍',
    title: 'Your Service Name',
    description: 'Your description',
    features: ['Feature 1', 'Feature 2']
  }
]
```

### Modify Pricing
**File**: `src/components/Pricing.jsx`
```javascript
const pricingPlans = [
  {
    name: 'Package Name',
    price: '999',
    features: ['Your features']
  }
]
```

### Add Gallery Images
**File**: `src/components/Gallery.jsx`
```javascript
const galleryItems = [
  {
    id: 1,
    category: 'wedding',
    emoji: '💒', // Replace with image URL
    title: 'Event Name'
  }
]
```

---

## 🎨 Theme Customization

### Change Dark Mode Colors
**File**: `src/index.css`
```css
.dark-mode {
  --text-dark: #f1f5f9;  /* Text color */
  --bg-light: #0f172a;   /* Background */
}

.dark-mode .services {
  background: linear-gradient(135deg, #color1, #color2);
}
```

### Move Theme Toggle Button
**File**: `src/components/ThemeToggle.css`
```css
.theme-toggle {
  top: 90px;    /* Change position */
  right: 30px;  /* Change position */
}
```

---

## 📱 Test Responsive Design

1. Open DevTools (F12)
2. Click device icon (Ctrl+Shift+M)
3. Test different screen sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1920px

---

## 🚀 Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

The built files will be in the `dist/` folder.

---

## 📦 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Drag `dist/` folder to netlify.com/drop
2. Or connect GitHub repo

### GitHub Pages
```bash
npm run build
# Upload dist/ folder to gh-pages branch
```

---

## 🔧 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install dependencies
npm install

# Update dependencies
npm update
```

---

## 📚 Documentation

- **README.md** - Complete setup guide
- **FEATURES.md** - Detailed animation features
- **THEME_GUIDE.md** - Dark/light mode documentation
- **QUICK_START.md** - This file!

---

## 🎉 Next Steps

1. ✅ **Test the website** - Click around and explore
2. ✅ **Try dark mode** - Toggle and see the magic
3. ✅ **Update content** - Add your information
4. ✅ **Customize colors** - Make it yours
5. ✅ **Add images** - Replace placeholders
6. ✅ **Test mobile** - Ensure responsiveness
7. ✅ **Deploy** - Share with the world!

---

## 💡 Tips

- **Hot Reload**: Changes save automatically
- **Theme Persistence**: Your theme choice is saved
- **Browser DevTools**: Use for debugging
- **Mobile First**: Always test mobile view
- **Accessibility**: All features are screen-reader friendly

---

## 🐛 Troubleshooting

### Port 5173 already in use
```bash
# Kill existing process
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

### Changes not showing
1. Save the file (Ctrl+S)
2. Check console for errors (F12)
3. Hard refresh (Ctrl+F5)

### Dark mode not persisting
- Check browser allows localStorage
- Try incognito mode to test

---

## 📞 Need Help?

Check the documentation files or review component code for examples.

**Happy building! 🚀✨**
