import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { api } from '../../utils/api'
import Input from '../ui/Input'
import Select from '../ui/Select'
import Textarea from '../ui/Textarea'
import Button from '../common/Button'

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState(null)

  const initialValues = {
    fullName: 'Rahul Jain',
    mobileNumber: '+91-7877593063',
    emailAddress: 'email@example.com',
    companyName: 'XYZ',
    selectedService: 'ABC',
    projectDetails: ''
  }

  const handleFormSubmit = async (values) => {
    setIsSubmitting(true)
    setSubmitResult(null)
    try {
      const response = await api.submitContactForm(values)
      setSubmitResult({ success: true, message: `Form submitted! Welcome, ${values.fullName}.\nWe will respond to you within 1 business day.` })
      alert(`Form submitted! Welcome, ${values.fullName}.\nWe will respond to you within 1 business day.`)
      resetForm()
    } catch (err) {
      setSubmitResult({ success: false, message: 'Failed to submit form. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const { values, handleChange, handleSubmit, resetForm } = useForm(initialValues, handleFormSubmit)

  const serviceOptions = [
    { value: 'ABC', label: 'ABC' },
    { value: 'accounting', label: 'Accounting & Bookkeeping' },
    { value: 'outsourcing', label: 'Operations Outsourcing' },
    { value: 'it_services', label: 'Enterprise IT Services' },
    { value: 'wifi_networking', label: 'WiFi & Enterprise Networking' }
  ]

  return (
    <div className="form-right-inputs-col animate-slide-up">
      <form onSubmit={handleSubmit} className="contact-overlap-form">
        
        {/* Full name */}
        <Input
          id="fullName"
          name="fullName"
          label="Full name"
          required
          value={values.fullName}
          onChange={handleChange}
        />

        {/* Mobile & Email horizontal */}
        <div className="form-row-half">
          <Input
            id="mobileNumber"
            name="mobileNumber"
            label="Mobile number"
            required
            value={values.mobileNumber}
            onChange={handleChange}
          />
          <Input
            id="emailAddress"
            name="emailAddress"
            label="Email address"
            type="email"
            required
            value={values.emailAddress}
            onChange={handleChange}
          />
        </div>

        {/* Company Name */}
        <Input
          id="companyName"
          name="companyName"
          label="Company name"
          value={values.companyName}
          onChange={handleChange}
        />

        {/* Dropdown service select */}
        <Select
          id="selectedService"
          name="selectedService"
          label="Select the service you would like to explore"
          required
          value={values.selectedService}
          onChange={handleChange}
          options={serviceOptions}
        />

        {/* Project Details textarea */}
        <Textarea
          id="projectDetails"
          name="projectDetails"
          label="Project Details"
          value={values.projectDetails}
          onChange={handleChange}
          placeholder="Enter your project details here..."
        />

        {/* Submit button right aligned */}
        <div className="form-submit-row">
          <Button 
            type="submit" 
            variant="secondary"
            disabled={isSubmitting}
            style={{ minWidth: '150px' }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </div>

        {submitResult && (
          <div style={{
            marginTop: '15px',
            padding: '12px',
            borderRadius: '6px',
            backgroundColor: submitResult.success ? '#dcfce7' : '#fee2e2',
            color: submitResult.success ? '#15803d' : '#b91c1c',
            fontSize: '14px',
            textAlign: 'center',
            fontWeight: '600'
          }}>
            {submitResult.message}
          </div>
        )}

      </form>
    </div>
  )
}

export default ContactForm
