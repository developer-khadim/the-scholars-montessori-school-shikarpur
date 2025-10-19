import React, { useEffect, useRef, useState } from 'react'
import {
  FileText,
  Calendar,
  Users,
  CheckCircle,
  Phone,
  Clock,
  Star
} from 'lucide-react'

const Admission = () => {
  const admissionRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    program: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    if (admissionRef.current) observer.observe(admissionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        childAge: '',
        program: '',
        message: ''
      })
    }, 3000)
  }

  const admissionSteps = [
    {
      step: 1,
      title: 'Inquiry & Visit',
      description:
        'Contact us to schedule a school visit and learn about our programs',
      icon: <Phone className='w-6 h-6' />
    },
    {
      step: 2,
      title: 'Application',
      description: 'Submit the admission form with required documents',
      icon: <FileText className='w-6 h-6' />
    },
    {
      step: 3,
      title: 'Assessment',
      description: 'Meet with our teachers for a friendly assessment',
      icon: <Users className='w-6 h-6' />
    },
    {
      step: 4,
      title: 'Enrollment',
      description: 'Complete enrollment and prepare for the journey',
      icon: <CheckCircle className='w-6 h-6' />
    }
  ]

  const programs = [
    'Pre-Montessori (2–3 years)',
    'Montessori I (3–4 years)',
    'Montessori II (4–5 years)',
    'Montessori III (5–6 years)',
    'Primary Program (6–8 years)'
  ]

  return (
    <section id='admission' className='section-padding bg-white dark:bg-gray-900'>
      <div  className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className='fade-in' ref={admissionRef}>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6'>
              <span className='gradient-text'>Admission</span> Process
            </h2>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
              Begin your child's educational journey with us. Our admission
              process ensures the best fit for your child and family.
            </p>
          </div>

          {/* Admission Steps */}
          <div className='mb-16'>
            <h3 className='text-3xl font-bold text-gray-800 dark:text-white text-center mb-12'>
              How to Apply
            </h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {admissionSteps.map((step, index) => (
                <div key={index} className='relative'>
                  <div className='card text-center group hover:shadow-2xl transition-all duration-500 dark:bg-gray-800'>
                    <div className='w-16 h-16 bg-gradient-to-br from-school-red to-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                      {step.icon}
                    </div>
                    <div className='absolute -top-2 -right-2 w-8 h-8 bg-school-yellow rounded-full flex items-center justify-center text-white font-bold text-sm'>
                      {step.step}
                    </div>
                    <h4 className='text-xl font-bold text-gray-800 dark:text-white mb-3'>
                      {step.title}
                    </h4>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                      {step.description}
                    </p>
                  </div>

                  {index < admissionSteps.length - 1 && (
                    <div className='hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-school-red to-school-yellow transform -translate-y-1/2'></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility & Dates */}
          <div className='grid lg:grid-cols-2 gap-12 mb-16'>
            {/* Left */}
            <div>
              <h3 className='text-3xl font-bold text-gray-800 dark:text-white mb-6'>
                Eligibility & Requirements
              </h3>
              {[
                'Age Requirements',
                'Health Records',
                'Parental Involvement',
                'School Visit'
              ].map((item, i) => (
                <div key={i} className='flex items-start space-x-4 mb-6'>
                  <div className='w-8 h-8 bg-school-red rounded-full flex items-center justify-center mt-1'>
                    <CheckCircle className='w-4 h-4 text-white' />
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 dark:text-white mb-2'>
                      {item}
                    </h4>
                    <p className='text-gray-600 dark:text-gray-400'>
                      {item === 'Age Requirements'
                        ? 'Children must meet the age criteria for their program.'
                        : item === 'Health Records'
                        ? 'Updated vaccination and medical records required.'
                        : item === 'Parental Involvement'
                        ? 'Parents commit to supporting the Montessori journey.'
                        : 'Visit required to understand our environment.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right */}
            <div>
              <h3 className='text-3xl font-bold text-gray-800 dark:text-white mb-6'>
                Important Dates
              </h3>
              <div className='space-y-4'>
                <div className='flex items-center space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
                  <Calendar className='w-6 h-6 text-school-blue' />
                  <div>
                    <h4 className='font-bold text-gray-800 dark:text-white'>
                      Application Deadline
                    </h4>
                    <p className='text-gray-600 dark:text-gray-400'>
                      March 31, 2024
                    </p>
                  </div>
                </div>
                <div className='flex items-center space-x-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg'>
                  <Clock className='w-6 h-6 text-school-yellow' />
                  <div>
                    <h4 className='font-bold text-gray-800 dark:text-white'>
                      Assessment Period
                    </h4>
                    <p className='text-gray-600 dark:text-gray-400'>
                      April 1–15, 2024
                    </p>
                  </div>
                </div>
                <div className='flex items-center space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg'>
                  <Star className='w-6 h-6 text-green-600' />
                  <div>
                    <h4 className='font-bold text-gray-800 dark:text-white'>
                      Results Announcement
                    </h4>
                    <p className='text-gray-600 dark:text-gray-400'>
                      April 20, 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className='bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12'>
            <div className='max-w-4xl mx-auto'>
              <div className='text-center mb-8'>
                <h3 className='text-3xl font-bold text-gray-800 dark:text-white mb-4'>
                  Ready to Begin the Journey?
                </h3>
                <p className='text-lg text-gray-600 dark:text-gray-400'>
                  Fill out the form and we’ll reach out within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className='text-center py-12'>
                  <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <CheckCircle className='w-8 h-8 text-green-600' />
                  </div>
                  <h4 className='text-2xl font-bold text-gray-800 dark:text-white mb-2'>
                    Thank You!
                  </h4>
                  <p className='text-gray-600 dark:text-gray-400'>
                    We’ve received your application.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <input
                      type='text'
                      name='name'
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder='Parent/Guardian Name *'
                      className='w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-school-red focus:border-transparent transition-all duration-200'
                    />
                    <input
                      type='email'
                      name='email'
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder='Email Address *'
                      className='w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-school-red focus:border-transparent transition-all duration-200'
                    />
                  </div>

                  <div className='grid md:grid-cols-2 gap-6'>
                    <input
                      type='tel'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder='Phone Number'
                      className='w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-school-red focus:border-transparent transition-all duration-200'
                    />
                    <input
                      type='text'
                      name='childAge'
                      value={formData.childAge}
                      onChange={handleInputChange}
                      placeholder="Child's Age"
                      className='w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-school-red focus:border-transparent transition-all duration-200'
                    />
                  </div>

                  <select
                    name='program'
                    value={formData.program}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-school-red focus:border-transparent transition-all duration-200'
                  >
                    <option value=''>Select Program</option>
                    {programs.map((p, i) => (
                      <option key={i}>{p}</option>
                    ))}
                  </select>

                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder='Tell us about your child...'
                    className='w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-school-red focus:border-transparent transition-all duration-200'
                  />

                  <div className='text-center'>
                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className='btn-primary text-lg px-12 py-4 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105'
                    >
                      {isSubmitting ? (
                        <div className='flex items-center space-x-2'>
                          <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                          <span>Submitting...</span>
                        </div>
                      ) : (
                        'Submit Application'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Admission
