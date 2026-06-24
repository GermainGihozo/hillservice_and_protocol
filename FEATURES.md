# ✨ Modern 3D Animations & Vibrant Colors Features

## 🎨 Color Scheme

### Primary Colors
- **Purple**: `#8b5cf6` - Primary brand color
- **Pink**: `#ec4899` - Accent color
- **Blue**: `#3b82f6` - Secondary accent
- **Cyan**: `#06b6d4` - Tertiary accent
- **Orange**: `#f97316` - Warm accent

### Gradient Combinations
- Purple → Pink (Main brand gradient)
- Pink → Orange (Hover states)
- Blue → Cyan (Cool accents)
- Gold (#fbbf24 → #f59e0b) for special highlights

## 🚀 3D Animation Features

### 1. **Hero Section**
- Animated gradient background that shifts between 3 color schemes
- Floating 3D orb with radial gradient
- Parallax scrolling effect
- Sparkle particles
- 3D stat cards with glassmorphism
- Hover: Cards lift and rotate in 3D space

### 2. **Navigation Bar**
- Glassmorphism effect with backdrop blur
- Gradient text logo
- Glowing underline on hover with shadow
- Smooth color transitions

### 3. **Service Cards**
- 3D transform on hover (translateY + rotateX)
- Icon rotation (360°) with bounce animation
- Rotating radial gradient background
- Glassmorphism with backdrop blur
- Gradient border animation on top
- Shadow elevation with color

### 4. **Pricing Cards**
- Dark glassmorphism design
- 3D perspective transform
- Animated gradient borders
- Pulsing badge for "Most Popular"
- Icon rotation animation (360° rotateY)
- Check marks with gradient backgrounds
- Scale and rotate on hover
- Glowing shadows

### 5. **Gallery**
- Filter buttons with gradient backgrounds
- 3D card transforms (rotateY)
- Emoji scale and rotation (360° + bounce)
- Smooth category transitions
- Gradient overlay effects
- Lightbox with scale animation

### 6. **About Section**
- Animated stat cards with 3D rotation
- Gradient number displays
- Pulse animation on hover
- Gradient icons with rotation
- Floating background orbs

### 7. **Contact Section**
- Glassmorphism form with backdrop blur
- Info cards with 3D transform
- Icon rotation (360°) on hover
- Gradient borders
- CTA section with pulsing background
- Input focus with glow effect

### 8. **Footer**
- Dark gradient background
- Social icons with gradient fills
- Icon rotation (360°) on hover
- Gradient text links
- Glowing divider line
- Floating background effects

## 🎭 Animation Techniques Used

### 3D Transforms
```css
transform-style: preserve-3d;
perspective: 1000px;
transform: translateY(-20px) rotateX(5deg) scale(1.02);
```

### Glassmorphism
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(20px);
border: 2px solid rgba(255, 255, 255, 0.2);
```

### Gradient Animations
```css
background: linear-gradient(135deg, color1, color2);
animation: gradientShift 15s ease infinite;
```

### Floating Orbs
```css
@keyframes float3D {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(100px, 100px) scale(1.1); }
  50% { transform: translate(200px, 50px) scale(0.9); }
  75% { transform: translate(50px, 150px) scale(1.05); }
}
```

### Glow Effects
```css
box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
filter: drop-shadow(0 10px 30px rgba(236, 72, 153, 0.5));
```

### Text Gradients
```css
background: linear-gradient(135deg, #8b5cf6, #ec4899);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

## ⚡ Performance Optimizations

- CSS transforms for smooth 60fps animations
- Hardware acceleration with `translateZ(0)`
- Backdrop-filter for glass effects
- Efficient gradient transitions
- Optimized animation timing functions
- Lazy loading animations with `whileInView` from Framer Motion

## 🎯 Interactive Elements

1. **Hover Effects**: Cards lift, rotate, scale, and glow
2. **Focus Effects**: Inputs glow with gradient shadows
3. **Click Effects**: Smooth transitions and feedback
4. **Scroll Effects**: Elements fade in and transform
5. **Filter Effects**: Smooth category transitions
6. **Form Interactions**: Visual feedback on all inputs
7. **Theme Toggle**: Animated dark/light mode with persistent storage

## 🌓 Dark/Light Mode Feature

### Toggle Button
- **Position**: Fixed top-right corner
- **Design**: Animated track with sliding thumb
- **Icons**: Sun ☀️ (light mode) and Moon 🌙 (dark mode)
- **Animation**: 
  - 360° rotation on toggle
  - Spring physics for smooth movement
  - Animated stars appear in dark mode
  - Gradient background transitions

### Dark Mode Colors
- **Backgrounds**: Deep navy blues (#0f172a → #334155)
- **Cards**: Glassmorphism with dark backgrounds
- **Text**: White with proper contrast
- **Gradients**: Maintained with enhanced visibility
- **Borders**: Purple/pink accent glows

### Light Mode Colors
- **Backgrounds**: Colorful gradients (original vibrant design)
- **Cards**: Light glassmorphism effects
- **Text**: Dark navy for readability
- **Gradients**: Full vibrant color spectrum
- **Borders**: Subtle with transparency

### Persistence
- **localStorage**: Saves user preference
- **System Preference**: Respects OS dark mode on first visit
- **Auto-apply**: Instantly applies saved theme on page load

### Smooth Transitions
All theme changes animate smoothly:
```css
transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
```

## 🌈 Color Psychology

- **Purple**: Creativity, luxury, sophistication
- **Pink**: Energy, excitement, passion
- **Blue**: Trust, professionalism, reliability
- **Orange**: Warmth, enthusiasm, celebration
- **Gold**: Premium, success, achievement

Perfect for an event management company that wants to convey:
- ✨ Elegance and sophistication
- 🎉 Energy and excitement
- 💎 Premium quality service
- 🎨 Creativity and innovation
