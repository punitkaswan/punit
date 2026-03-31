# Personal Portfolio Website

A modern, responsive portfolio website with stunning animations, designed specifically for Java Developer & Creative Coder, Punit Kaswan.

🌐 **Live Demo**: [Your portfolio URL here]

---

## 📋 Table of Contents

- [Features](#-features)
- [Sections](#-sections)
- [Design](#-design)
- [Mobile Responsiveness](#-mobile-responsiveness)
- [Installation & Usage](#-installation--usage)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Browser Support](#-browser-support)
- [Project Statistics](#-project-statistics)
- [File Structure](#-file-structure)

---

## ✨ Features

### Core Functionality
- **Animated Particle Background** - Floating particles (50 on desktop, 20 on mobile)
- **Smooth Scroll Animations** - Elements fade in as they enter viewport
- **Responsive Design** - Works perfectly on all devices (5 breakpoints)
- **Mobile Menu** - Hamburger navigation with smooth slide-in animation
- **Visitor Counter** - Increments on every page load with animated count-up
- **Error Handling** - Custom 404 page with automatic redirection
- **Touch-Optimized** - All interactive elements meet 44px minimum touch targets

### Sections
- Hero with gradient text and CTA buttons
- About with profile image, education timeline, and skill tags
- Projects grid with status badges (Completed, Working, Upcoming)
- Academic Journey timeline
- Beyond The Code (leadership & interests)
- Certifications showcase
- Contact form with validation
- Professional footer with social links

---

## 🎯 Sections

### 1. Hero Section
```
Hi, I'm Punit Kaswan
Java Developer & Creative Coder

[View My Work]  [Get In Touch]
```
- Large animated title
- Gradient text effects
- Dual CTA buttons
- Animated scroll indicator

### 2. About Section
- **Profile Image**: Placeholder for your professional photo
- **Education Timeline**:
  - CGPS, Laxmangarh (2009-2020)
  - Prince Academy, Sikar (2020-2022)
  - B.Tech, JECRC University (2023-2027)
- **Skills**: Java, Spring Boot, Microservices, HTML5, CSS3, JavaScript, SQL, Git

### 3. Projects Section
3-column grid with animated cards:

| Project | Status | Description |
|---------|--------|-------------|
| E-Commerce Platform | Completed | Full-stack shopping platform |
| Microservices Dashboard | In Progress | Monitoring dashboard |
| AI Code Review Tool | Upcoming | AI-powered code analysis |

### 4. Academic Journey
Timeline layout showing:
- B.Tech at JECRC University (2023-2027)
- +2 at Prince Academy (2020-2022)
- 10+2 at CGPS (2009-2020)

### 5. Beyond The Code
Leadership & interests grid:
- **Campus Mantri** - Geeks for Geeks, JECRC University (2026-27)
- **Head — Aashayein** - Social initiative, impacted 500+ lives (2025-26)
- **Team Captain — American Football** - JECRC University Team (2025-26)
- **Head — JU Eagles** - Official student forum (2025-26)

### 6. Certifications
Responsive grid:
- Oracle Certified Java Programmer (2024)
- Spring Professional Certification (2024)
- AWS Certified Developer (2023)
- Microsoft Azure Fundamentals (2023)

### 7. Contact Section
- Contact information (email, phone, location)
- Contact form with JavaScript validation
- Social links
- Response feedback messages

### 8. Footer
**Desktop (>768px)**:
```
[© 2024 Punit Kaswan | Crafted with ❤️]  [🌍 Visitors: 1234]
[📷][𝕏][💼][✉️][🐙][🔗]                [Social icons right-aligned]
```

**Mobile (<768px)**:
```
© 2024 Punit Kaswan
Crafted with ❤️
[📷][𝕏][💼][✉️][🐙][🔗] (centered)
🌍 Visitors: 1234
```

---

## 🎨 Design

### Color Scheme
| Element | Color Hex |
|---------|-----------|
| Primary Cyan | `#00d9ff` |
| Primary Green | `#00ff88` |
| Background Dark | `#0a0a0a` |
| Background Secondary | `#1a1a2e` |
| Background Tertiary | `#16213e` |
| Text Primary | `#ffffff` |
| Text Muted | `#cccccc` |
| Text Dim | `#888888` |
| Completed Badge | `#00ff88` (green) |
| Working Badge | `#ffc107` (yellow) |
| Upcoming Badge | `#00d9ff` (cyan) |

### Gradient
```css
linear-gradient(45deg, #00d9ff, #00ff88)
```

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Hero Title**: 3.5rem (desktop), 2rem (mobile)
- **Headings**: Bold, with gradient effects
- **Body**: 1rem (responsive)

---

## 📱 Mobile Responsiveness

### Breakpoints
| Breakpoint | Width | Features |
|------------|-------|----------|
| Extra Small | < 480px | Compact layout, single column |
| Small (Mobile) | 481-768px | Hamburger menu, stacked layouts |
| Medium (Tablet) | 769-1024px | 2-column grids |
| Large (Laptop) | 1025-1440px | Standard desktop layout |
| Extra Large | > 1440px | Max-width container 1400px |

### Mobile optimizations
- Hamburger menu slides in from right
- All sections stack vertically
- Touch targets ≥44px
- Reduced particle count (20 vs 50)
- Simplified animations for performance
- No horizontal scrolling
- Footer stacks: Credits → Social → Visitor counter

---

## 🚀 Installation & Usage

### Quick Start
1. Clone or download the project
2. Open `index.html` in your browser

Or use a local server:
```bash
# Using Python 3
cd E:\Claude\portfolio_website
python -m http.server 8000
# Open: http://localhost:8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

### Browser Console
Open DevTools (F12) to:
- Test animations
- Check responsive breakpoints
- Reset visitor counter:
```javascript
localStorage.removeItem('portfolio_visits');
localStorage.removeItem('portfolio_last_visit');
```

---

## 🔧 Customization

### 1. Personal Information
**File**: `index.html`

Update these sections:
- Hero name and title (lines 13-21)
- About section with your education (lines 79-106)
- Skills tags (lines 107-122)
- Projects (lines 145-187)
- Certifications (lines 218-255)
- Contact information (lines 287-302)
- Social links in footer (lines 358-373)

### 2. Profile Image
**File**: `index.html` (around line 72)
```html
<!-- Replace this: -->
<div class="image-placeholder"></div>

<!-- With this: -->
<img src="your-photo.jpg" alt="Punit Kaswan" class="profile-image">
```

### 3. Colors
**File**: `styles.css`

Search and replace:
- `#00d9ff` (cyan) - Change to your primary color
- `#00ff88` (green) - Change to your secondary color

### 4. Social Links
**File**: `index.html` (footer, lines 358-373)

Replace `yourusername` with actual handles:
```html
<a href="https://instagram.com/yourusername" aria-label="Instagram">
<a href="https://x.com/yourusername" aria-label="X (Twitter)">
<a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn">
<a href="mailto:your.email@example.com" aria-label="Email">
<a href="https://github.com/yourusername" aria-label="GitHub">
<a href="https://yourwebsite.com" aria-label="Website">
```

### 5. Particle Count
**File**: `script.js` (line ~14)
```javascript
const particleCount = isMobile ? 20 : 50; // Change 50 to your preference
```

### 6. Animation Speed
**File**: `styles.css`

Adjust `animation-duration` values:
```css
.fade-in { animation-duration: 0.8s; }
.particles { animation-duration: 15s; }
```

---

## 🌍 Deployment

### Recommended Platforms (Free)

#### Vercel (Best)
1. Drag and drop the folder
2. Automatic 404 handling
3. Global CDN

#### Netlify
1. Drag and drop the folder
2. Add `_redirects` file for 404:
```
/*    /404.html   404
```

#### GitHub Pages
1. Push to GitHub repository
2. Enable Pages in Settings
3. Select branch/folder

### Configure 404 Page (Important!)

**Netlify**: Create `_redirects` in root:
```
/*    /404.html   404
```

**Vercel**: Create `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/404.html" }
  ]
}
```

**Apache**: Add to `.htaccess`:
```
ErrorDocument 404 /404.html
```

**NGINX**:
```
error_page 404 /404.html;
location = /404.html { internal; }
```

---

## 🛠️ Technical Details

### Visitor Counter
- **Storage**: `localStorage` with keys `portfolio_visits` and `portfolio_last_visit`
- **Behavior**: Increments on **every page load/refresh**
- **Animation**: Smooth count-up over 1.5 seconds
- **Privacy**: No IP tracking, no external calls
- **Reset**: Clear localStorage or use incognito mode

### Error Handling System
- Automatic 404 redirection
- Global error listeners
- Promise rejection handling
- Graceful fallbacks

### Performance Optimizations
- Lightweight: <150KB total
- GPU-accelerated CSS transforms
- Lazy animations (Intersection Observer API)
- Reduced particles on mobile
- No heavy external libraries (only Google Fonts)
- Minimal HTTP requests

---

## 📊 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 90+     | ✅ Full |
| Firefox | 88+     | ✅ Full |
| Safari  | 14+     | ✅ Full |
| Edge    | 90+     | ✅ Full |
| Mobile  | Latest  | ✅ Full |

---

## 📈 Project Statistics

| Metric | Value |
|--------|-------|
| Total Files | 9 (3 HTML, 1 CSS, 1 JS, 4+ Docs) |
| Total Size | ~108KB (uncompressed) |
| HTML Lines | ~400 |
| CSS Lines | ~1020 |
| JavaScript Lines | ~554 |
| Sections | 8 |
| Animations | 10+ types |
| Social Icons | 6 (inline SVG) |
| Breakpoints | 5 |
| Development Time | Custom built |

---

## 📁 File Structure

```
portfolio_website/
├── index.html              # Main portfolio page
├── 404.html                # Custom 404 error page
├── redirect.html           # Generic redirect handler
├── styles.css              # All styling & animations
├── script.js               # Interactive functionality
├── README.md               # This file (main documentation)
├── FEATURES.md             # Feature breakdown
├── MOBILE_RESPONSIVENESS.md # Mobile testing guide
├── VISUAL_STRUCTURE.md     # Layout diagrams
├── FINAL_SUMMARY.md        # Complete summary
├── UPDATES.md              # Version history
├── BEYOND_CODE_ADDED.md    # Leadership section details
└── COMPLETE_GUIDE.md       # Comprehensive guide
```

---

## 📱 Testing Checklist

Before deploying, verify:

### Mobile (<768px)
- [ ] Hamburger menu appears and functions
- [ ] Menu slides in from right, closes on click/ESC/outside
- [ ] No horizontal scrolling
- [ ] All touch targets ≥44px
- [ ] Footer stacks correctly (credits → social → visitor)
- [ ] Social icons sized appropriately (32-36px)
- [ ] Single-column layouts throughout
- [ ] Font sizes readable on 320px width

### Desktop (>1024px)
- [ ] Multi-column layouts work (About: 2fr 1fr, Projects: 3 columns)
- [ ] Full navigation menu visible
- [ ] Hover effects on cards and buttons
- [ ] 50 particles animate smoothly
- [ ] Footer: credits left, social center, visitor right

### General
- [ ] All navigation links scroll smoothly to sections
- [ ] Contact form shows validation feedback
- [ ] No console errors in DevTools
- [ ] Animations are smooth (no lag)
- [ ] Visitor counter animates on page load
- [ ] Custom 404 page works (test by visiting non-existent URL)

---

## 🐛 Known Limitations

1. **Visitor Counter** - Client-side only, resets if localStorage cleared
2. **Contact Form** - No backend (add Formspree, Netlify Forms, or custom API)
3. **Images** - Placeholder images used (replace with your actual photos)
4. **SEO** - Basic meta tags only (add Open Graph, structured data)

---

## 🎯 Customization Quick Reference

### Change Gradient Colors
```css
/* In styles.css */
linear-gradient(45deg, #00d9ff, #00ff88)
/* Replace hex values */
```

### Update Year in Footer
```html
<!-- In index.html footer -->
© 2025 Punit Kaswan  <!-- Change year -->
```

### Modify Animation Speed
```css
/* In styles.css */
.fade-in { animation-duration: 0.8s; }
```

### Reset Visitor Counter
```javascript
localStorage.clear();
```

---

## 📞 Support & Resources

### Documentation Files
- `FEATURES.md` - Complete feature list
- `MOBILE_RESPONSIVENESS.md` - Mobile testing guide
- `VISUAL_STRUCTURE.md` - Layout diagrams
- `UPDATES.md` - Version history and changes
- `BEYOND_CODE_ADDED.md` - Leadership section details

### External Resources
- [MDN Web Docs](https://developer.mozilla.org/) - HTML/CSS/JS reference
- [CSS-Tricks](https://css-tricks.com/) - CSS techniques
- [Can I Use](https://caniuse.com/) - Browser compatibility

---

## ⚖️ License

Free to use, modify, and distribute for personal and commercial projects.

Attribution is appreciated but not required.

---

## 🙏 Credits

- **Design & Development**: Punit Kaswan
- **Icons**: [Simple Icons](https://simpleicons.org/) (CC0)
- **Fonts**: [Google Fonts](https://fonts.google.com/) - Poppins
- **Template**: Custom built from scratch

---

## 📝 Changelog

### v3.0 (Current)
- ✅ Added Academic Journey section
- ✅ Added Beyond The Code section with leadership roles
- ✅ Right-aligned footer layout (credits left, visitors right)
- ✅ Removed IP address tracking (privacy-friendly)
- ✅ Simplified visitor counter (increments on every load)
- ✅ Mobile-optimized footer (stacked layout)
- ✅ SVG social icons with brand colors

---

**Ready to showcase your Java development skills!** 🚀

*Built with ❤️ using HTML, CSS, and JavaScript*
