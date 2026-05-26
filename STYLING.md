# ApTaxLedger Solution - CSS Styling Guide

## CSS Architecture

### Color System
```css
:root {
  /* Primary Colors */
  --primary-red: #A01A26;      /* Main brand color */
  --dark-red: #7A1520;         /* Hover & pressed states */
  
  /* Neutral Colors */
  --black: #111111;            /* Darkest text & backgrounds */
  --dark-gray: #2A2A2A;        /* Secondary dark color */
  --white: #FFFFFF;            /* Pure white backgrounds */
  --light-gray: #F5F5F5;       /* Light backgrounds, alternating sections */
  --border-gray: #E0E0E0;      /* Subtle borders */
  
  /* Text Colors */
  --text-dark: #333333;        /* Primary text color */
  --text-light: #666666;       /* Secondary text, descriptions */
  
  /* Effects */
  --shadow: 0 4px 12px rgba(0, 0, 0, 0.08);        /* Light shadow */
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);     /* Larger shadow */
  --transition: all 0.3s ease;                      /* Standard transition */
}
```

## Typography

### Font Families
```css
/* Headings */
font-family: 'Poppins', sans-serif;
font-weight: 600-800;

/* Body Text */
font-family: 'Inter', sans-serif;
font-weight: 300-700;
```

### Font Sizes
```
h1 (Hero Title):    48px / 32px (mobile)
h2 (Section):       40px / 28px (mobile)
h3 (Card Titles):   20-24px
h4 (Subtitles):     16-18px
p (Body):          14px
small:             12-13px
```

### Line Heights
```css
h1, h2:     1.2
p, li:      1.6-1.8
```

## Spacing System

### Padding
```css
Small:   8px
Medium:  15px
Large:   20-25px
XL:      30-40px
XXL:     50-60px
```

### Gaps
```css
Components:  15-30px
Grid:        30px
Sections:    80px (vertical padding)
```

## Component Styles

### Buttons
```css
.btn-primary {
  background: var(--primary-red);
  color: var(--white);
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 600;
  transition: var(--transition);
}

.btn-primary:hover {
  background: var(--dark-red);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-large {
  padding: 14px 36px;
  font-size: 15px;
}
```

### Cards
```css
.card {
  background: var(--white);
  border: 1px solid var(--border-gray);
  border-radius: 16px;
  box-shadow: var(--shadow);
  transition: var(--transition);
  padding: 30px;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-red);
}
```

### Forms
```css
input, select, textarea {
  padding: 12px 15px;
  border: 1px solid var(--border-gray);
  border-radius: 8px;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  transition: var(--transition);
}

input:focus {
  outline: none;
  border-color: var(--primary-red);
  box-shadow: 0 0 0 3px rgba(160, 26, 38, 0.1);
}
```

### Icons
```css
/* Circular Icon Container */
.icon-circle {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--primary-red), var(--dark-red));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 40px;
}
```

## Animations

### Fade In Up
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-content {
  animation: fadeInUp 0.8s ease;
}
```

### Hover Effects
```css
/* Lift on Hover */
.card:hover {
  transform: translateY(-8px);
}

/* Scale on Hover */
.image:hover {
  transform: scale(1.05);
}

/* Color Shift */
.link:hover {
  color: var(--primary-red);
}
```

## Responsive Design

### Breakpoints
```css
/* Desktop - Default */
@media (max-width: 1200px) {
  /* Tablet adjustments */
}

@media (max-width: 768px) {
  /* Mobile menu, single column grids */
}

@media (max-width: 480px) {
  /* Small mobile, simplified layout */
}
```

### Mobile Adjustments
```css
@media (max-width: 768px) {
  .navbar .nav-menu {
    display: none;  /* Hidden by default */
  }
  
  .hamburger {
    display: flex;  /* Show hamburger */
  }
  
  .hero-title {
    font-size: 32px;  /* Smaller heading */
  }
  
  .services-grid {
    grid-template-columns: 1fr;  /* Single column */
  }
  
  .contact-wrapper {
    grid-template-columns: 1fr;  /* Stack vertically */
  }
}
```

## Shadow Elevations

```css
/* Elevation 1 - Subtle */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

/* Elevation 2 - Card Hover */
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

/* Elevation 3 - Modal/Overlay */
box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
```

## Border Radius

```css
/* Small elements - Forms, buttons */
border-radius: 6-8px;

/* Cards */
border-radius: 12-16px;

/* Circles */
border-radius: 50%;
```

## Transitions

```css
/* Standard transition */
transition: all 0.3s ease;

/* Specific properties */
transition: transform 0.3s ease, box-shadow 0.3s ease;

/* Faster transitions */
transition: all 0.15s ease;

/* Slower transitions */
transition: all 0.6s ease;
```

## Section Styles

### Hero Section
```css
.hero {
  position: relative;
  min-height: 600px;
  background-image overlay: rgba(0, 0, 0, 0.55);
  color: var(--white);
}
```

### Alternating Sections
```css
.services { background: var(--white); }
.about { background: var(--light-gray); }
.why-choose { background: var(--white); }
.global-presence { background: var(--light-gray); }
.testimonials { background: var(--white); }
.contact { background: var(--light-gray); }
.footer { background: var(--black); }
```

## Grid Layouts

### Service Grid
```css
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

/* Mobile: 1 column */
/* Tablet: 2 columns */
/* Desktop: 3 columns */
```

### Office Grid
```css
.office-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
}
```

### Why Choose Grid
```css
.why-choose-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}
```

## Container

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;  /* Respects viewport edges on mobile */
}
```

## Hover States

```css
/* Button Hover */
.btn-primary:hover {
  background: var(--dark-red);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Card Hover */
.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-red);
}

/* Image Hover */
.card:hover img {
  transform: scale(1.05);
}

/* Link Hover */
.link:hover {
  color: var(--primary-red);
}
```

## Accessibility

```css
/* Focus states for keyboard navigation */
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: 2px solid var(--primary-red);
  outline-offset: 2px;
}

/* High contrast text */
color: var(--text-dark);
background: var(--white);

/* Sufficient line height */
line-height: 1.6;

/* Readable font sizes */
font-size: 14px minimum;
```

## Print Styles

```css
@media print {
  .navbar, .footer {
    display: none;
  }
  
  body {
    color: var(--black);
    background: var(--white);
  }
}
```

---

## Custom Properties Usage Examples

```css
/* Using variables */
.element {
  color: var(--text-dark);
  background: var(--light-gray);
  border: 1px solid var(--border-gray);
  box-shadow: var(--shadow);
  transition: var(--transition);
}

/* Hover state */
.element:hover {
  background: var(--white);
  box-shadow: var(--shadow-lg);
  color: var(--primary-red);
}
```

---

## Tips

1. **Always use CSS variables** for consistency
2. **Test on mobile** using browser DevTools
3. **Use transitions** for smooth interactions
4. **Maintain consistent spacing** throughout
5. **Keep colors limited** to the palette
6. **Use semantic HTML** for accessibility
7. **Test with different fonts** sizes in browser zoom
8. **Verify contrast ratios** for text readability

---

## Resources

- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Grid Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Flexbox Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Animation Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
