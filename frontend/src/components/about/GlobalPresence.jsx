import React, { useState } from 'react'
import londonImg from '../../Golden Hour at Westminster.jpg.jpeg'
import usaImg from '../../Golden Hour Empire State Building New York Cityscape Wallpaper 4K - WallpaperScapes.jpg.jpeg'
import indiaImg from '../../Top 18 Things to Do in Mumbai.jpg.jpeg'

const GlobalPresence = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const locations = [
    {
      country: 'UK',
      city: 'London',
      image: londonImg
    },
    {
      country: 'USA',
      city: 'Dallas',
      image: usaImg
    },
    {
      country: 'India',
      city: 'Indore',
      image: indiaImg
    }
  ]

  return (
    <section className="about-global-presence-sec animate-fade-in">
      <div className="container">
        <h2 className="about-global-presence-title">Global Presence</h2>
        <div className="global-presence-wrapper">
          {/* Background Images Layer */}
          {locations.map((loc, index) => (
            <div
              key={index}
              className={`presence-bg-slide ${index === activeIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url("${loc.image}")` }}
            />
          ))}

          {/* Columns Layer */}
          <div className="presence-cols-container">
            {locations.map((loc, index) => (
              <div
                key={index}
                className={`presence-col ${index === activeIndex ? 'active' : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="presence-col-content">
                  <span className="presence-country">{loc.country}</span>
                  <span className="presence-city">{loc.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalPresence
