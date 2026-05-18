# 📋 Infograins Project - Complete File Reference

## 📁 Project Structure Map

```
d:\Practice-Projects\Infograins/
│
├── 📄 index.html                    ← Main HTML entry point
├── 📄 vite.config.js                ← Vite build configuration
├── 📄 package.json                  ← Dependencies & scripts
├── 📄 .gitignore                    ← Git ignore rules
├── 📄 .env.example                  ← Environment variables template
│
├── 📄 README.md                     ← Full documentation
├── 📄 SETUP.md                      ← Quick start guide
├── 📄 STYLING.md                    ← CSS styling reference
├── 📄 PROJECT_REFERENCE.md          ← This file
│
└── 📁 frontend/                     ← React application source
    ├── App.jsx                      ← Main app component
    ├── main.jsx                     ← React entry point
    ├── index.css                    ← All global styles
    │
    ├── Navbar.jsx                   ← Sticky navigation
    ├── TopBar.jsx                   ← Top info bar
    ├── Hero.jsx                     ← Hero section
    ├── Services.jsx                 ← 11 Service cards
    ├── About.jsx                    ← About & Who We Are
    ├── WhyChoose.jsx                ← Why Choose Us section
    ├── GlobalPresence.jsx           ← Office locations
    ├── Testimonials.jsx             ← Client reviews
    ├── Contact.jsx                  ← Contact form
    └── Footer.jsx                   ← Footer with newsletter
```

---

## 🚀 Quick Commands Reference

```bash
# Install dependencies (one-time)
npm install

# Start development server (auto-reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install specific package
npm install package-name

# Update all dependencies
npm update
```

---

## 📄 File Descriptions

### Configuration Files

| File | Purpose |
|------|---------|
| `index.html` | Main HTML template, loads React app |
| `vite.config.js` | Vite build tool configuration |
| `package.json` | Project metadata & dependencies |
| `.gitignore` | Tells Git which files to ignore |
| `.env.example` | Template for environment variables |

### Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Complete project documentation |
| `SETUP.md` | Installation & setup instructions |
| `STYLING.md` | CSS architecture & styling guide |
| `PROJECT_REFERENCE.md` | This file - file reference |

### React Components

| File | Purpose | Key Features |
|------|---------|--------------|
| `App.jsx` | Main component wrapper | Imports all sections |
| `main.jsx` | React entry point | ReactDOM.createRoot |
| `Navbar.jsx` | Top navigation | Sticky, responsive, active links |
| `TopBar.jsx` | Top info bar | Social icons, contact, tagline |
| `Hero.jsx` | Hero section | Image overlay, CTA buttons |
| `Services.jsx` | Service cards grid | 11 services, hover effects |
| `About.jsx` | About section | 4 info cards + Who We Are |
| `WhyChoose.jsx` | Benefits section | 6 benefit cards with icons |
| `GlobalPresence.jsx` | Office locations | 4 offices with images |
| `Testimonials.jsx` | Client reviews | 3 testimonials with ratings |
| `Contact.jsx` | Contact form + info | Form validation, 2-column layout |
| `Footer.jsx` | Footer section | Links, newsletter, copyright |

### Styling

| File | Lines | Purpose |
|------|-------|---------|
| `frontend/index.css` | 1,200+ | All styles (CSS variables, responsive) |

---

## 🎨 CSS Organization in index.css

```
├── CSS Variables (Colors, shadows, transitions)
├── Global Styles (*, body, h1-h6, containers)
├── Top Info Bar (.top-info-bar, .info-left, .info-right)
├── Navbar (.navbar, .nav-menu, .nav-link, .hamburger)
├── Buttons (.btn-primary, .btn-secondary, .btn-large)
├── Hero Section (.hero, .hero-background, .hero-content)
├── Section Headers (.section-header)
├── Services (.services, .services-grid, .service-card)
├── About (.about, .about-card, .who-we-are)
├── Why Choose (.why-choose, .why-card)
├── Global Presence (.global-presence, .office-card)
├── Testimonials (.testimonials, .testimonial-card)
├── Contact (.contact, .contact-form, .form-group)
├── Footer (.footer, .footer-section, .newsletter-form)
└── Responsive Media Queries (768px, 480px breakpoints)
```

---

## 🔌 Component Props & Data Structure

### Services Component
```jsx
servicesData = [
  {
    id: number,
    title: string,
    description: string,
    icon: string (FontAwesome class),
    image: string (URL)
  }
]
```

### About Component
```jsx
aboutCards = [
  {
    id: number,
    title: string,
    description: string,
    icon: string (FontAwesome class)
  }
]
```

### GlobalPresence Component
```jsx
offices = [
  {
    id: number,
    city: string,
    address: string,
    phone: string,
    image: string (URL)
  }
]
```

### Testimonials Component
```jsx
testimonials = [
  {
    id: number,
    text: string,
    author: string,
    position: string,
    image: string (URL),
    rating: number (1-5)
  }
]
```

### Contact Component
```jsx
formData = {
  fullname: string,
  mobile: string,
  email: string,
  company: string,
  service: string,
  details: string
}
```

---

## 🎯 Common Customizations

### Where to Edit...

**Company Name & Branding:**
- `frontend/Navbar.jsx` - Logo text
- `frontend/Footer.jsx` - Company info
- `frontend/Contact.jsx` - Email address

**Services:**
- `frontend/Services.jsx` - Add/remove services, update descriptions

**Team/About Info:**
- `frontend/About.jsx` - Mission, Vision, Values, Who We Are

**Office Locations:**
- `frontend/GlobalPresence.jsx` - Add new office cards

**Client Testimonials:**
- `frontend/Testimonials.jsx` - Update client reviews

**Contact Details:**
- `frontend/TopBar.jsx` - Phone, email, location
- `frontend/Contact.jsx` - Office hours, email, form

**Colors:**
- `frontend/index.css` - CSS variables at top

**Fonts:**
- `index.html` - Google Fonts links
- `frontend/index.css` - font-family declarations

---

## 📊 Component Hierarchy

```
App.jsx
├── TopBar.jsx
├── Navbar.jsx
├── Hero.jsx
├── Services.jsx
│   └── servicesData array (11 items)
├── About.jsx
│   ├── aboutCards array (4 items)
│   └── whoWeAreData (text + image)
├── WhyChoose.jsx
│   └── whyCards array (6 items)
├── GlobalPresence.jsx
│   └── offices array (4 items)
├── Testimonials.jsx
│   └── testimonials array (3 items)
├── Contact.jsx
│   ├── contactInfo (text)
│   └── contactForm (form data)
└── Footer.jsx
    ├── footerLinks (array)
    └── newsletter (form)
```

---

## 🔑 Key Files to Edit for Content

### Essential Edits (DO THIS FIRST):
1. **Navbar & Footer** - Company branding
2. **Contact Info** - Replace phone, email, address
3. **Hero Section** - Update headline & description
4. **Services** - Update service titles & descriptions

### Important Edits:
5. **About Section** - Company mission, vision, values
6. **Global Presence** - Your office locations
7. **Testimonials** - Your actual client reviews
8. **Footer** - Newsletter signup endpoint

### Visual Customization:
9. **Colors** - Change CSS variables in `index.css`
10. **Images** - Replace all unsplash.com URLs with your own
11. **Typography** - Adjust sizes in responsive breakpoints

---

## 🔗 External Dependencies

### NPM Packages
```json
{
  "react": "^18.2.0",        // UI library
  "react-dom": "^18.2.0"     // React rendering
}
```

### Dev Dependencies
```json
{
  "@vitejs/plugin-react": "^4.0.0",  // Vite React support
  "vite": "^4.4.0"                   // Build tool
}
```

### CDN Resources (in index.html)
```html
<!-- Font Awesome Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
```

---

## 📱 Responsive Design Files

All responsive logic is in **`frontend/index.css`**:

```css
/* Tablet - 768px */
@media (max-width: 768px) {
  /* Adjustments for tablets */
}

/* Mobile - 480px */
@media (max-width: 480px) {
  /* Adjustments for phones */
}
```

---

## 🧪 Testing Checklist

- [ ] Run `npm install` without errors
- [ ] Run `npm run dev` - server starts
- [ ] All pages load without console errors
- [ ] Responsive on mobile (DevTools F12)
- [ ] Buttons are clickable
- [ ] Form validates required fields
- [ ] Links scroll to sections (anchor tags work)
- [ ] Images load properly
- [ ] No broken styling
- [ ] Build succeeds: `npm run build`

---

## 📚 Additional Resources

**Documentation Files:**
- `README.md` - Full project overview
- `SETUP.md` - Installation guide
- `STYLING.md` - CSS architecture

**External Links:**
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Font Awesome Icons](https://fontawesome.com)
- [Google Fonts](https://fonts.google.com)
- [Unsplash Images](https://unsplash.com)

---

## 📞 Getting Help

1. Check **SETUP.md** for installation issues
2. Check **STYLING.md** for CSS customization
3. Check component files for structure
4. Review console for JavaScript errors (F12)
5. Check network tab for image loading issues

---

## 🎉 Success Indicators

✅ `npm install` completes
✅ `npm run dev` runs on localhost:3000
✅ All 9 sections visible on page
✅ Mobile menu works on smaller screens
✅ All buttons are clickable
✅ Form validates inputs
✅ `npm run build` creates dist folder
✅ No console errors (F12 Developer Tools)

---

**Last Updated:** 2024
**Version:** 1.0.0
**Built With:** React 18 + Vite
