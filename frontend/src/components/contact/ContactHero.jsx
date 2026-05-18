import React from 'react'

const ContactHero = () => {
  return (
    <section className="contact-banner-sec animate-fade-in">
      <div className="contact-banner-bg">
        <img
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&h=400&fit=crop"
          alt="Contact us banner background"
          className="contact-banner-img"
        />
        <div className="contact-banner-overlay"></div>
      </div>
      <div className="container contact-banner-content">
        <h1 className="contact-banner-title">Contact US</h1>
        <p className="contact-banner-subtitle">
          Discuss your business goals with us. Start a conversation with our experts and explore tailored solutions.
        </p>
      </div>
    </section>
  )
}

export default ContactHero
