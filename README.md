# Infograins - Premium Corporate Website

A modern, professional corporate website built with **React** and **Vite** for accounting, outsourcing, consulting, and IT services.

## Features

✨ **Modern Design**
- Clean, elegant interface with white, black, and deep red color palette
- Glassmorphism effects and smooth shadows
- Responsive design for all devices (desktop, tablet, mobile)
- Premium business imagery with cinematic hero section

📱 **Key Sections**
- Top information bar with social icons and contact details
- Sticky navigation bar with smooth scrolling
- Hero section with overlay and CTA buttons
- 11 service cards with hover effects
- About Us section with mission, vision, values, and culture cards
- Who We Are section with company achievements
- Why Choose Us section with 6 key benefits
- Global Presence section with office locations
- Client testimonials with star ratings
- Contact form with validation
- Information-rich footer with newsletter subscription

🎨 **Design Features**
- Responsive grid layouts
- Smooth animations and transitions
- Hover effects on cards and buttons
- Mobile-first approach
- Accessibility-focused

## Tech Stack

- **React 18** - UI library
- **Vite** - Fast build tool and dev server
- **CSS3** - Modern styling with CSS variables
- **Font Awesome 6** - Icons
- **Google Fonts** - Premium typography

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will open automatically at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Project Structure

```
infograins/
├── frontend/
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # Entry point
│   ├── index.css              # Global styles
│   ├── Navbar.jsx             # Navigation bar
│   ├── TopBar.jsx             # Top information bar
│   ├── Hero.jsx               # Hero section
│   ├── Services.jsx           # Services grid
│   ├── About.jsx              # About section
│   ├── WhyChoose.jsx          # Why Choose Us section
│   ├── GlobalPresence.jsx     # Global office locations
│   ├── Testimonials.jsx       # Client testimonials
│   ├── Contact.jsx            # Contact form
│   └── Footer.jsx             # Footer
├── index.html                 # HTML entry point
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies
└── README.md                 # This file
```

## Component Details

### App.jsx
Main application component that combines all sections

### Navbar
- Sticky navigation with logo and menu items
- Hamburger menu for mobile
- Active link indicators
- Call-to-action buttons

### Hero Section
- Background image with dark overlay
- Large headline and description
- Two CTA buttons
- Fade-in animation

### Services
- Grid of 11 service cards
- Icons, images, and descriptions
- Hover effects with zoom
- Link to service details

### About
- Mission, Vision, Values, Culture cards
- Who We Are section with company stats
- Achievements list

### Why Choose Us
- 6 benefit cards
- Icons and descriptions
- Hover effects

### Global Presence
- 4 office location cards
- Images with zoom on hover
- Contact information

### Testimonials
- Client review cards
- Star ratings
- Client avatars and positions
- Testimonial text

### Contact
- Two-column layout (responsive)
- Contact information card with business hours
- Form with validation
- All service options in dropdown

### Footer
- Company information
- Quick links
- Office locations
- Newsletter subscription form

## Color Palette

```css
--primary-red: #A01A26
--dark-red: #7A1520
--black: #111111
--white: #FFFFFF
--light-gray: #F5F5F5
--text-dark: #333333
--text-light: #666666
```

## Typography

- **Headings:** Poppins (Bold, 600-800 weight)
- **Body:** Inter (Light to Bold, 300-700 weight)
- **Sizes:** Responsive and scalable

## Responsive Breakpoints

- **Desktop:** Full layout with all features
- **Tablet (768px):** Adjusted spacing and grid columns
- **Mobile (480px):** Single column, simplified navigation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Fast load times with Vite's optimized bundling
- Optimized images with lazy loading
- Minimal CSS with CSS variables
- Efficient React component structure

## Customization

### Colors
Edit CSS variables in `frontend/index.css`:
```css
:root {
  --primary-red: #A01A26;
  --dark-red: #7A1520;
  /* ... more variables ... */
}
```

### Content
Update component files to change:
- Service descriptions (Services.jsx)
- About content (About.jsx)
- Office locations (GlobalPresence.jsx)
- Testimonials (Testimonials.jsx)

### Images
Replace image URLs in components:
```jsx
<img src="your-image-url" alt="description" />
```

## Contact & Support

For inquiries:
- Email: hello@infograins.com
- Phone: +1-800-123456
- Address: 123 Business Avenue, NY 10001

## License

© 2024 Infograins. All Rights Reserved.

## Future Enhancements

- [ ] Blog/Resources section
- [ ] Service detail pages
- [ ] Client dashboard
- [ ] Live chat integration
- [ ] Analytics integration
- [ ] Dark mode theme
- [ ] Multi-language support
- [ ] SEO optimization

---

**Built with ❤️ for premium business solutions.**
