import React from 'react'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/common/Button'
import SectionHeading from '../components/common/SectionHeading'

const Careers = () => {
  const jobs = [
    {
      id: 1,
      title: 'Offshore Accounting Specialist',
      department: 'Finance & Accounts',
      type: 'Full Time',
      location: 'Indore Office / Hybrid',
      desc: 'Seeking a detail-oriented accountant with 3+ years experience in US GAAP compliance, bookkeeping software, and payroll operations.'
    },
    {
      id: 2,
      title: 'Senior Enterprise IT Engineer',
      department: 'Infrastructure',
      type: 'Full Time',
      location: 'New York / Remote',
      desc: 'Looking for a network administrator with experience scaling enterprise WiFi, firewalls, server architecture, and active directories.'
    },
    {
      id: 3,
      title: 'React Frontend Developer',
      department: 'Technology',
      type: 'Full Time',
      location: 'Indore Office',
      desc: 'Join our product team to build high-fidelity user dashboards, premium designs, and smooth animated transitions in React.'
    }
  ]

  const handleApply = (title) => {
    alert(`Thank you for your interest! Applications for the "${title}" position are currently being accepted at: hr@example.com`)
  }

  return (
    <div className="careers-page" style={{ padding: '60px 0', backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <SectionHeading 
          title="Join Our Global Team" 
          subtitle="Work With Us" 
        />

        <div className="services-vertical-list">
          {jobs.map((job) => (
            <Card key={job.id} className="hover-lift animate-slide-up" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                <h3 style={{ fontSize: '22px', margin: '0', color: 'var(--black)' }}>{job.title}</h3>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Badge variant="primary">{job.type}</Badge>
                  <Badge variant="secondary">{job.location}</Badge>
                </div>
              </div>
              
              <span style={{ fontSize: '13px', color: 'var(--primary-red)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {job.department}
              </span>
              
              <p style={{ color: 'var(--text-grey)', fontSize: '15px', lineHeight: '1.7', margin: '0' }}>
                {job.desc}
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px' }}>
                <Button variant="secondary" onClick={() => handleApply(job.title)}>
                  APPLY NOW
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Careers
