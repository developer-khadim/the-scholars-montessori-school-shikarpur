import React from 'react'
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle, Heart } from 'lucide-react'

const Footer = () => {

  
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: 'Facebook', url: 'https://www.facebook.com/p/The-Scholars-Montessori-School-Shikarpur-100069119565612/', color: 'bg-blue-600' },
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram', url: '#', color: 'bg-pink-600' },
  ]
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition-colors duration-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid gap-8 sm:gap-10 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* School Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
              The Scholars' Montessori School
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
              Empowering young minds through Montessori education — nurturing curiosity, independence, and a lifelong love for learning.
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

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Home', 'About Us', 'Programs', 'Faculty', 'Contact'].map((link, i) => (
                <li key={i}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-sm sm:text-base hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start space-x-3 justify-center sm:justify-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-left"> Shikarpur</span>
              </li>
              <li className="flex items-start space-x-3 justify-center sm:justify-start">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base">0333 7270740</span>
              </li>
              <li className="flex items-start space-x-3 justify-center sm:justify-start">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base break-all">info@example.com</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4">
              Working Hours
            </h4>
            <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm sm:text-base">
              <li>Mon–Thu: 7:30 AM – 2:00 PM</li>
              <li>Fri: 7:30 AM – 12:30 PM</li>
              <li>Sat: 7:30 AM – 2:00 PM</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 dark:border-gray-700"></div>

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 space-y-2 sm:space-y-0">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} The Scholars' Montessori School — All Rights Reserved
          </p>
          <div className="flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-600 dark:text-red-400 mx-1 fill-current" />
            <span>by Khadim Ali</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer