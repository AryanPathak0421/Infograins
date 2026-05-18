import React from 'react'

const GlobalPresence = () => {
  return (
    <section className="about-global-presence-sec animate-fade-in">
      <div className="container">
        <h2 className="about-global-presence-title">Global Presence</h2>
        <div className="about-global-presence-grid">
          <div className="global-presence-building-card hover-lift">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop"
              alt="New York Skyscraper Building Night"
              className="building-img"
            />
          </div>
          <div className="global-presence-building-card hover-lift">
            <img
              src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=500&fit=crop"
              alt="Singapore Glass Office Building Daytime"
              className="building-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalPresence
