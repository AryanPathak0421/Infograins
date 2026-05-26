import React, { useState } from 'react'
import londonImg from '../../assets/london-cityscape.jpg'
import usaImg from '../../assets/new-york-cityscape.jpg'
import indiaImg from '../../assets/mumbai-cityscape.jpg'
import uaeImg from '../../assets/dubai-cityscape.jpg'

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
      city: 'New York',
      image: usaImg
    },
    {
      country: 'India',
      city: 'Mumbai',
      image: indiaImg
    },
    {
      country: 'UAE',
      city: 'Dubai',
      image: uaeImg
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
