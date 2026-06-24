# 📸 Gallery & Logo Integration Guide

## ✨ What's New

### 🎨 **Your Logo is Live!**
- **Location**: Navigation bar (top-left)
- **Features**:
  - Beautiful SVG with mountains, trees, and sun
  - "HILLS SERVICES & PROTOCOL" text
  - "Excellent service on time" tagline
  - Hover effect with glow
  - Scales down on scroll for compact view
  - Fully responsive

### 📷 **Real Image Gallery**
- **12 high-quality event photos** from Unsplash
- **Categories**:
  - 4 Wedding images
  - 3 Corporate event images
  - 2 Graduation ceremony images
  - 2 Concert/music images
  - 1 Special event image
- **Features**:
  - Professional event photography
  - Lazy loading for performance
  - Hover zoom effect
  - Lightbox with full image view
  - Filterable by category

---

## 🖼️ Gallery Images

### Wedding Events (4 images)
1. **Elegant Wedding Ceremony** - Outdoor ceremony with floral decorations
2. **Garden Wedding Reception** - Romantic venue with elegant decor
3. **Grand Wedding Reception** - Luxurious ballroom celebration

### Corporate Events (3 images)
4. **Corporate Gala Event** - Business conference with 500+ attendees
5. **Product Launch Event** - Tech startup product reveal
6. **Business Conference** - International business summit

### Graduation Events (2 images)
7. **University Graduation** - Memorable graduation ceremony
8. **College Commencement** - Outdoor ceremony with family

### Concert/Music Events (2 images)
9. **Live Concert Performance** - Music festival entertainment
10. **Band Performance Night** - Live music event

### Special Events (1 image)
11. **Birthday Celebration** - 50th birthday party with 200 guests

---

## 🎯 How to Use Your Own Images

### Option 1: Replace with Your Photos (Recommended)

1. **Prepare your images**:
   - Recommended size: 800x600px (4:3 ratio)
   - Format: JPG or PNG
   - Optimized for web (under 500KB each)

2. **Add images to project**:
```bash
# Place your images in the public/images folder
public/
  └── images/
      ├── wedding-1.jpg
      ├── wedding-2.jpg
      ├── corporate-1.jpg
      └── ...
```

3. **Update Gallery.jsx**:
```javascript
const galleryItems = [
  { 
    id: 1, 
    category: 'wedding', 
    image: '/images/wedding-1.jpg',  // Your image path
    title: 'Your Event Title', 
    description: 'Your description' 
  },
  // ... more items
]
```

### Option 2: Use Different Stock Photos

Replace the Unsplash URLs in `Gallery.jsx`:
```javascript
image: 'https://images.unsplash.com/photo-xxxxx?w=800&h=600&fit=crop'
```

Search for images at:
- [Unsplash](https://unsplash.com/) - Free high-quality photos
- [Pexels](https://www.pexels.com/) - Free stock photos
- [Pixabay](https://pixabay.com/) - Free images

### Option 3: Mix Local and Online Images

```javascript
const galleryItems = [
  { 
    id: 1, 
    image: '/images/my-event.jpg',  // Local file
    // ...
  },
  { 
    id: 2, 
    image: 'https://images.unsplash.com/photo-xxxxx',  // Online
    // ...
  },
]
```

---

## 🎨 Customize Your Logo

### Option 1: Replace SVG Content

Edit `public/images/logo.svg` with your design software or code editor.

### Option 2: Use PNG/JPG Logo

1. **Save your logo** as `public/images/logo.png`

2. **Update Navbar.jsx**:
```javascript
<img src="/images/logo.png" alt="Hills Services & Protocol" className="nav-logo" />
```

3. **Adjust size in Navbar.css**:
```css
.nav-logo {
  height: 60px;  /* Adjust as needed */
  width: auto;
}
```

### Option 3: Use External Logo URL

```javascript
<img src="https://your-domain.com/logo.png" alt="Your Company" className="nav-logo" />
```

---

## 🎭 Gallery Customization

### Change Grid Layout

Edit `Gallery.css`:
```css
.gallery-grid {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* Change 300px to adjust card size */
  /* Options: 250px (smaller), 350px (larger) */
}
```

### Adjust Image Height

```css
.gallery-item {
  height: 350px;  /* Change from 300px */
}
```

### Change Hover Effect

```css
.gallery-item:hover .gallery-image {
  transform: scale(1.2);  /* More zoom */
  filter: brightness(1.1);  /* Add brightness */
}
```

### Modify Overlay

```css
.gallery-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.95), transparent);
  /* Change colors or transparency */
}
```

---

## 🎨 Logo Styling

### Change Logo Size

```css
.nav-logo {
  height: 55px;  /* Desktop size */
}

.navbar.scrolled .nav-logo {
  height: 48px;  /* Scrolled size */
}

@media (max-width: 768px) {
  .nav-logo {
    height: 40px;  /* Mobile size */
  }
}
```

### Add Logo Background

```css
.nav-logo {
  background: white;
  padding: 5px 10px;
  border-radius: 10px;
}
```

### Change Hover Effect

```css
.nav-logo:hover {
  transform: scale(1.1) rotate(5deg);  /* Add rotation */
  filter: brightness(1.2);  /* Brighten on hover */
}
```

---

## 📊 Image Optimization

### Recommended Sizes
- **Gallery Images**: 800x600px (4:3 ratio)
- **Logo**: 200x100px or vector (SVG)
- **File Size**: Under 500KB per image

### Optimization Tools
- **Online**: 
  - [TinyPNG](https://tinypng.com/) - PNG/JPG compression
  - [Squoosh](https://squoosh.app/) - Advanced optimization
  - [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization

- **Command Line**:
```bash
# Install imagemagick
npm install -g imagemagick

# Resize and optimize
convert input.jpg -resize 800x600 -quality 85 output.jpg
```

---

## 🎯 Add More Gallery Categories

1. **Update filter buttons** in `Gallery.jsx`:
```javascript
const filters = [
  { name: 'All Events', value: 'all' },
  { name: 'Weddings', value: 'wedding' },
  { name: 'Corporate', value: 'corporate' },
  { name: 'Your Category', value: 'yourcategory' },  // New
]
```

2. **Add category to images**:
```javascript
{ 
  id: 13, 
  category: 'yourcategory',  // Match filter value
  image: '/images/your-image.jpg',
  title: 'Your Title' 
}
```

---

## 🚀 Performance Tips

### Lazy Loading
Images already use lazy loading:
```javascript
<img loading="lazy" />
```

### Add Placeholders
```javascript
<img 
  src={item.image} 
  placeholder="blur"
  blurDataURL="/images/placeholder.jpg"
/>
```

### Use WebP Format
```bash
# Convert images to WebP (smaller file size)
cwebp input.jpg -o output.webp -q 85
```

Then update image paths:
```javascript
image: '/images/wedding-1.webp'
```

---

## 🎨 Dark Mode Gallery

Gallery adapts to dark mode automatically! The overlay and cards adjust contrast for optimal viewing in both themes.

---

## 📱 Mobile Optimization

Gallery is fully responsive:
- **Desktop**: 3-4 columns
- **Tablet**: 2 columns
- **Mobile**: 1 column

Images maintain aspect ratio and quality across all devices.

---

## 🔧 Troubleshooting

### Logo not showing
- Check file path: `/images/logo.svg` (must be in `public/` folder)
- Try hard refresh: Ctrl+F5
- Check browser console for errors

### Images not loading
- Verify image URLs are correct
- Check network tab in DevTools
- Ensure images are publicly accessible
- Try different image URLs

### Gallery layout broken
- Check CSS grid values
- Inspect element in DevTools
- Verify image aspect ratios

### Images too large/slow
- Optimize images (see optimization section)
- Use lazy loading (already implemented)
- Consider CDN for hosting images

---

## 📸 Photo Credits

Current gallery uses Unsplash photos under [Unsplash License](https://unsplash.com/license):
- Free to use
- No attribution required
- Commercial use allowed

When using your own photos, ensure you have proper rights and permissions.

---

**Your gallery and logo are now live! 🎉📷**
