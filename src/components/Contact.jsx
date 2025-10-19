


import React, { useEffect, useRef } from 'react'
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Facebook,
  Instagram,
  MessageCircle,
  Send,
} from 'lucide-react'

const Contact = () => {
  const contactRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )

    if (contactRef.current) observer.observe(contactRef.current)
    return () => observer.disconnect()
  }, [])

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: 'XJ5Q+6V5, Shikarpur',
      description: 'Visit us at our beautiful campus in Shikarpur',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '0333 7270740',
      description: 'Call us during school hours for assistance',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      details:
        'Mon–Thu: 7:30 AM–2:00 PM\nFri: 7:30 AM–12:30 PM\nSat: 7:30 AM–2:00 PM\nSun: Closed',
      description: "We're available during these hours",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'info@scholarsmontessori.edu.pk',
      description: 'Email us anytime — we reply within 24 hours',
    },
  ]

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: 'Facebook', url: 'https://www.facebook.com/p/The-Scholars-Montessori-School-Shikarpur-100069119565612/', color: 'bg-blue-600' },
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram', url: '#', color: 'bg-pink-600' },
  ]

  return (
    <section
      id="contact"
      className="section-padding bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in" ref={contactRef}>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have questions about our programs or want to schedule a visit? We’re here to help!
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="card text-center group hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 dark:text-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-school-red to-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <div className="text-school-red font-semibold mb-2 whitespace-pre-line">
                  {info.details}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="card bg-white dark:bg-gray-800 dark:text-gray-100">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-school-red focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-900"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-school-red focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-900"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-school-red focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-900"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-school-red focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-900"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2 hover:scale-[1.02] transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Map + Social Links */}
            <div className="space-y-8">
              <div className="card bg-white dark:bg-gray-800 dark:text-gray-100">
                <h3 className="text-2xl font-bold mb-4">Find Us on Map</h3>
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.172201646206!2d68.63716277614046!3d27.95801201438994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39343bec7276868f%3A0xb6c68261711f78d5!2sThe%20Scholar's%20Montessori%20School%20Shikarpur!5e0!3m2!1sen!2s!4v1760868646853!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="The Scholars' Montessori School Map"
                  ></iframe>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  <strong>Directions:</strong> Located conveniently in Shikarpur with easy access from all
                  major areas.
                </p>
              </div>

              <div className="card bg-white dark:bg-gray-800 dark:text-gray-100">
                <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Stay connected and get updates on events, activities, and achievements.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`${social.color} w-12 h-12 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 hover:shadow-lg`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-school-red to-red-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Child's Journey?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Limited seats available for the upcoming academic year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-school-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call Now: 0333 7270740</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-school-red transition-all duration-300">
                Schedule a Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
