import React from 'react'
import ServiceHero from '../components/services/ServiceHero'
import ServiceDetails from '../components/services/ServiceDetails'
import ServicesGrid from '../components/services/ServicesGrid'
import ConsultationBanner from '../components/services/ConsultationBanner'

const Services = () => {
  return (
    <div className="services-page-container">
      {/* Dynamic top banner with solutions trigger */}
      <ServiceHero />

      {/* Dynamic interactive selector tabs and highlighted preview panel */}
      <ServiceDetails />

      {/* Main vertical catalog frames displaying custom red borders */}
      <section className="vertical-services-sec">
        <div className="container">
          <ServicesGrid />
          <ConsultationBanner />
        </div>
      </section>
    </div>
  )
}

export default Services
