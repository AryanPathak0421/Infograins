import React from 'react'
import teamImg from '../../assets/generic-team.jpg'

const HeroSection = () => {
  return (
    <section className="home-hero animate-fade-in">
      <div className="home-hero-image-wrapper">
        <img
          src={teamImg}
          alt="ApTaxLedger Solution Professional Team Collaboration"
          className="home-hero-img"
        />
        <div className="home-hero-overlay"></div>
      </div>
    </section>
  )
}

export default HeroSection

