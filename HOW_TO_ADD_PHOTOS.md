# 📸 How to Add Your Real Photos - Step by Step

## 🎯 Quick Overview

You need to replace 12 placeholder images with your own event photos in the gallery section.

---

## 📁 Step 1: Prepare Your Photos

### Photo Requirements:
- **Format**: JPG or PNG
- **Recommended Size**: 800x600 pixels (4:3 ratio)
- **File Size**: Under 500KB each (optimized for web)
- **Naming**: Use simple names like `wedding-1.jpg`, `corporate-1.jpg`

### How Many Photos to Prepare:

| Category | Number of Photos |
|----------|-----------------|
| 💍 Weddings | 3 photos |
| 🏢 Corporate Events | 3 photos |
| 🎓 Graduations | 2 photos |
| 🎸 Concerts/Music | 2 photos |
| 🎉 Special Events | 2 photos |
| **TOTAL** | **12 photos** |

---

## 📂 Step 2: Put Photos in the Right Folder

1. **Navigate to your project folder**:
   ```
   d:\mine\projects\hillservice_and_protocol\
   ```

2. **Open the `public` folder**

3. **Open the `images` folder** (already exists)

4. **Copy your photos** into this folder:
   ```
   public/
     └── images/
         ├── logo.svg (already there - don't touch!)
         ├── wedding-1.jpg    👈 ADD YOUR PHOTO HERE
         ├── wedding-2.jpg    👈 ADD YOUR PHOTO HERE
         ├── wedding-3.jpg    👈 ADD YOUR PHOTO HERE
         ├── corporate-1.jpg  👈 ADD YOUR PHOTO HERE
         ├── corporate-2.jpg  👈 ADD YOUR PHOTO HERE
         ├── corporate-3.jpg  👈 ADD YOUR PHOTO HERE
         ├── graduation-1.jpg 👈 ADD YOUR PHOTO HERE
         ├── graduation-2.jpg 👈 ADD YOUR PHOTO HERE
         ├── concert-1.jpg    👈 ADD YOUR PHOTO HERE
         ├── concert-2.jpg    👈 ADD YOUR PHOTO HERE
         ├── special-1.jpg    👈 ADD YOUR PHOTO HERE
         └── special-2.jpg    👈 ADD YOUR PHOTO HERE
   ```

---

## 🔧 Step 3: Update the Code

1. **Open this file in your code editor**:
   ```
   src/components/Gallery.jsx
   ```

2. **Find the section** that starts with:
   ```javascript
   // 📸 REPLACE THESE IMAGES WITH YOUR OWN PHOTOS
   ```

3. **Look for lines** that say:
   ```javascript
   image: 'https://images.unsplash.com/photo-...',
   // 👆 REPLACE with: '/images/wedding-1.jpg'
   ```

4. **Replace the URL** with your photo path:
   
   **BEFORE:**
   ```javascript
   { 
     id: 1, 
     category: 'wedding', 
     image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
     title: 'Elegant Wedding Ceremony', 
     description: 'Beautiful outdoor ceremony' 
   },
   ```

   **AFTER:**
   ```javascript
   { 
     id: 1, 
     category: 'wedding', 
     image: '/images/wedding-1.jpg',  // 👈 YOUR PHOTO!
     title: 'Smith Wedding - June 2024',  // 👈 UPDATE THIS TOO!
     description: 'Beautiful garden ceremony with 150 guests'  // 👈 AND THIS!
   },
   ```

5. **Repeat for all 12 photos**

---

## 📝 Complete Example

Here's what your updated code should look like:

```javascript
const galleryItems = [
  // 💍 WEDDING PHOTOS
  { 
    id: 1, 
    category: 'wedding', 
    image: '/images/wedding-1.jpg',  // ✅ Your photo
    title: 'Johnson Wedding 2024', 
    description: 'Outdoor ceremony at Garden Valley' 
  },
  { 
    id: 4, 
    category: 'wedding', 
    image: '/images/wedding-2.jpg',  // ✅ Your photo
    title: 'Davis Reception', 
    description: 'Elegant ballroom celebration' 
  },
  { 
    id: 9, 
    category: 'wedding', 
    image: '/images/wedding-3.jpg',  // ✅ Your photo
    title: 'Martinez Wedding', 
    description: 'Beach ceremony at sunset' 
  },

  // 🏢 CORPORATE EVENTS
  { 
    id: 2, 
    category: 'corporate', 
    image: '/images/corporate-1.jpg',  // ✅ Your photo
    title: 'TechCorp Annual Gala', 
    description: 'Corporate event with 500 attendees' 
  },
  // ... continue for all 12 photos
]
```

---

## ✅ Step 4: Check Your Work

1. **Save the file** (`Gallery.jsx`)

2. **Open your website** in browser:
   ```
   http://localhost:5173/
   ```

3. **Scroll to Gallery section**

4. **Verify**:
   - ✅ All 12 photos are showing
   - ✅ Photos are clear and not blurry
   - ✅ Click a photo - lightbox opens
   - ✅ Try filters - photos filter correctly
   - ✅ Hover over photos - zoom effect works

---

## 🎨 Visual Guide - Where Files Go

```
Your Computer
│
└── d:\mine\projects\hillservice_and_protocol\
    │
    ├── public/
    │   └── images/
    │       ├── logo.svg (✅ Already there)
    │       ├── wedding-1.jpg    👈 PUT PHOTO HERE
    │       ├── wedding-2.jpg    👈 PUT PHOTO HERE
    │       └── ... (all 12 photos)
    │
    └── src/
        └── components/
            └── Gallery.jsx  👈 EDIT THIS FILE
```

---

## 🔍 Checklist

### Before you start:
- [ ] I have 12 event photos ready
- [ ] Photos are in JPG or PNG format
- [ ] Photos are optimized (under 500KB each)
- [ ] Photos are named clearly (wedding-1.jpg, etc.)

### During setup:
- [ ] Photos copied to `public/images/` folder
- [ ] Opened `Gallery.jsx` in code editor
- [ ] Found the section with image URLs
- [ ] Replaced URLs with my photo paths
- [ ] Updated titles and descriptions
- [ ] Saved the file

### After setup:
- [ ] Website refreshed in browser
- [ ] Gallery shows my photos
- [ ] All 12 photos are visible
- [ ] Lightbox works when clicking photos
- [ ] Filters work correctly
- [ ] Photos look good on mobile

---

## ⚡ Quick Tips

### ✅ DO:
- Use clear, descriptive file names
- Optimize photos before uploading
- Update titles and descriptions
- Test on different devices
- Keep aspect ratio consistent (4:3 recommended)

### ❌ DON'T:
- Use spaces in file names (use dashes instead)
- Upload huge files (over 1MB)
- Delete the `logo.svg` file
- Forget to save after editing
- Use special characters in file names

---

## 🐛 Troubleshooting

### Photo not showing?
1. Check file name matches exactly (case-sensitive!)
2. Check file is in `public/images/` folder
3. Hard refresh browser (Ctrl + F5)
4. Check browser console for errors (F12)

### Photo looks blurry?
- Upload higher resolution image
- Check original photo quality
- Ensure image is at least 800x600px

### Wrong photo showing?
- Check the `id` numbers are unique
- Verify file path is correct
- Clear browser cache

---

## 📞 Need Help?

1. **Check the file path** - most common issue!
2. **File names** must match exactly
3. **Save the file** after editing
4. **Refresh browser** to see changes

---

## 🎉 You're Done!

Once all 12 photos are added and the website looks good, you're all set! Your gallery now showcases your real event photos to potential clients.

**Next Steps:**
- Test on mobile devices
- Share with team for feedback
- Add more photos if needed (just follow the same pattern)
- Deploy your website when ready!

---

**Your beautiful event gallery is ready! 📸✨**
