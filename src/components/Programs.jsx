import React, { useEffect, useRef } from 'react'
import { Baby, BookOpen, Users, GraduationCap, Star, Clock } from 'lucide-react'

const Programs = () => {
  const programsRef = useRef(null)

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

    if (programsRef.current) {
      observer.observe(programsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const programs = [
    {
      icon: <Baby className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: 'Pre-Montessori',
      age: '2-3 years',
      description:
        'Our youngest learners begin their educational journey with sensory exploration, basic motor skills, and social interaction in a safe, nurturing environment.',
      features: [
        'Sensory Activities',
        'Basic Motor Skills',
        'Social Interaction',
        'Language Development'
      ]
    },
    {
      icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: 'Montessori I',
      age: '3-4 years',
      description:
        'Children explore practical life activities, develop concentration, and begin their journey into the world of letters, numbers, and cultural subjects.',
      features: [
        'Practical Life',
        'Sensorial Materials',
        'Language Introduction',
        'Number Concepts'
      ]
    },
    {
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: 'Montessori II',
      age: '4-5 years',
      description:
        'Advanced Montessori activities including reading, writing, mathematics, geography, and science, building on the foundation from Montessori I.',
      features: [
        'Reading & Writing',
        'Mathematics',
        'Geography',
        'Science Exploration'
      ]
    },
    {
      icon: <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: 'Montessori III',
      age: '5-6 years',
      description:
        'Preparation for primary school with advanced academic work, research projects, and leadership opportunities within the classroom community.',
      features: [
        'Advanced Academics',
        'Research Projects',
        'Leadership Skills',
        'Primary Preparation'
      ]
    },
    {
      icon: <Star className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: 'Primary Program',
      age: '6-8 years',
      description:
        'A bridge program that combines Montessori principles with traditional primary education, ensuring smooth transition to formal schooling.',
      features: [
        'Structured Learning',
        'Academic Excellence',
        'Character Building',
        'Future Readiness'
      ]
    }
  ]

  return (
    <section
      id="programs"
      className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in" ref={programsRef}>
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">
              Our <span className="bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-400 dark:to-pink-400 bg-clip-text text-transparent">Academic Programs</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Discover our comprehensive range of educational programs designed
              to nurture your child's development at every stage of their
              learning journey.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-14 lg:mb-16">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700
                           hover:shadow-2xl hover:border-red-200 dark:hover:border-red-800 transition-all duration-500 
                           rounded-xl sm:rounded-2xl p-6 sm:p-8"
              >
                <div className="text-center mb-4 sm:mb-6">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-600 to-pink-600 dark:from-blue-600 dark:to-blue-800
                               rounded-full flex items-center justify-center text-white mx-auto mb-3 sm:mb-4
                               group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  >
                    {program.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {program.title}
                  </h3>
                  <div className="flex items-center justify-center space-x-2 text-red-600 dark:text-yellow-400 font-semibold text-sm sm:text-base">
                    <Clock className="w-4 h-4" />
                    <span>{program.age}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-center">
                  {program.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-sm sm:text-base">
                    Key Features:
                  </h4>
                  {program.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-red-600 dark:bg-yellow-400 rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button className="w-full bg-red-600 hover:bg-red-700 dark:bg-blue-600 dark:hover:bg-yellow-500 
                                   dark:hover:text-gray-900 text-white font-semibold py-2.5 sm:py-3 px-4 rounded-lg 
                                   transition-all duration-300 text-sm sm:text-base shadow-md hover:shadow-lg">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Program Highlights */}
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-100 dark:border-gray-700 transition-colors duration-500">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
                Why Our Programs Stand Out
              </h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 px-4">
                Each program is carefully designed to meet the developmental
                needs of children at different stages.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600 dark:text-yellow-400" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2">
                  Small Class Sizes
                </h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Maximum 15 students per class for personalized attention
                </p>
              </div>

              <div className="text-center group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-100 dark:bg-yellow-900/50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-600 dark:text-blue-400" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2">
                  Montessori Materials
                </h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Authentic Montessori materials for hands-on learning
                </p>
              </div>

              <div className="text-center group sm:col-span-2 lg:col-span-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-red-600 dark:text-yellow-400" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2">
                  Qualified Teachers
                </h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Certified Montessori teachers with years of experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Programs