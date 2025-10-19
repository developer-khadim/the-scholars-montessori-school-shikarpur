import React, { useEffect, useRef } from 'react'
import { Book, Heart, Users, Award, Target, Eye } from 'lucide-react'

const About = () => {
  const aboutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: <Book className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Our Mission",
      description:
        "To provide a nurturing environment where children develop their full potential through Montessori principles, fostering independence, creativity, and a lifelong love for learning."
    },
    {
      icon: <Eye className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Our Vision",
      description:
        "To be the leading Montessori school in Shikarpur, recognized for excellence in early childhood education and for developing confident, compassionate, and capable young learners."
    },
    {
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Why Choose Us",
      description:
        "We offer a unique blend of traditional Montessori methods with modern educational approaches, experienced teachers, small class sizes, and a supportive community environment."
    }
  ]

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in" ref={aboutRef}>
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">
              About <span className="bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-400 dark:to-pink-400 bg-clip-text text-transparent">Our School</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Discover the heart of our educational philosophy and what makes
              The Scholars' Montessori School a special place for your child's
              growth and development.
            </p>
          </div>

          {/* Welcome Message */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-12 sm:mb-14 lg:mb-16">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">
                Welcome to Our Learning Community
              </h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                At The Scholars' Montessori School Shikarpur, we believe that
                every child is unique and deserves an education that nurtures
                their individual potential. Our school provides a warm,
                welcoming environment where children can explore, discover, and
                grow at their own pace.
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                Founded on the principles of Dr. Maria Montessori, we combine
                time-tested educational methods with modern approaches to create
                an enriching experience that prepares children for success in
                all aspects of life.
              </p>
              <div className="flex items-center space-x-3 sm:space-x-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-700 dark:text-gray-200">
                  Excellence in Education Since Our Founding
                </span>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="w-full h-64 sm:h-80 lg:h-96 rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="https://cdn.pixabay.com/photo/2016/09/28/04/35/classroom-1699745_1280.jpg" 
                  alt="Montessori classroom with students learning" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-yellow-400 dark:bg-yellow-500 rounded-full opacity-20 dark:opacity-30 -z-10"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-500 dark:bg-blue-400 rounded-full opacity-20 dark:opacity-30 -z-10"></div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl 
                           transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-red-200 dark:hover:border-red-800"
              >
                <div className="text-red-600 dark:text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Philosophy Section */}
          <div className="mt-12 sm:mt-14 lg:mt-16 bg-gradient-to-br from-blue-50 via-purple-50 to-yellow-50 dark:from-gray-800 dark:via-gray-750 dark:to-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 transition-colors duration-500 shadow-lg">
            <div className="text-center">
              <div className="inline-block p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-full shadow-md mb-4 sm:mb-6">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-red-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">
                Our Educational Philosophy
              </h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
                We believe in the Montessori method's core principle: "Follow
                the child." Our approach respects each child's natural
                development, encourages independence, and fosters a love for
                learning that lasts a lifetime. We create prepared environments
                where children can explore, experiment, and discover the world
                around them at their own pace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About