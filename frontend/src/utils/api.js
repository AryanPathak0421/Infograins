import { servicesDetailed } from '../data/servicesData'
import { testimonials } from '../data/testimonialsData'
import { teamMembers } from '../data/teamData'

/**
 * Mock API service to encapsulate remote data fetching
 */
export const api = {
  // Fetch services details
  getServices: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(servicesDetailed), 400)
    })
  },

  // Fetch testimonials
  getTestimonials: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(testimonials), 300)
    })
  },

  // Fetch team members
  getTeam: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(teamMembers), 300)
    })
  },

  // Submit contact forms
  submitContactForm: async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Mock Form Submitted to Backend:', data)
        resolve({ success: true, message: 'Message sent successfully!' })
      }, 600)
    })
  }
}
