import React from 'react'

const HeroSection = () => {
  return (
    <section className="home-hero animate-fade-in">
      <div className="home-hero-image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=600&fit=crop"
          alt="Infograins Professional Team Collaboration"
          className="home-hero-img"
        />
        <div className="home-hero-overlay"></div>
      </div>
    </section>
  )
}

export default HeroSection
