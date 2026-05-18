import React, { useState } from 'react'
import { servicesTabs, servicesDetailed } from '../../data/servicesData'

const ServiceDetails = () => {
  const [activeTab, setActiveTab] = useState(0)
  const currentService = servicesDetailed[activeTab] || servicesDetailed[0]

  return (
    <div>
      {/* Tabs Menu Strip */}
      <div className="services-tabs-bar animate-slide-down">
        <div className="container tabs-flex">
          {servicesTabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-item-btn ${index === activeTab ? 'active-tab-item' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Active Service Preview Panel */}
      <div className="container" style={{ margin: '40px auto 0' }}>
        <div 
          className="service-block-frame animate-fade-in" 
          style={{ 
            backgroundColor: 'var(--light-red-bg)', 
            borderColor: 'var(--red-border)',
            padding: '30px' 
          }}
        >
          <div className="service-block-text-col">
            <span className="section-label-top">Active Highlight</span>
            <h2 className="service-block-title" style={{ fontSize: '24px' }}>
              {currentService.title}
            </h2>
            <p className="service-block-desc" style={{ color: 'var(--text-dark)' }}>
              {currentService.desc}
            </p>
          </div>
          <div className="service-block-img-col">
            <div className="mockup-frame" style={{ maxWidth: '300px' }}>
              <img src={currentService.image} alt={currentService.title} className="mockup-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails
