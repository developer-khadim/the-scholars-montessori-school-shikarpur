import React, { useEffect, useRef } from 'react'
import { User, Mail, GraduationCap, Award, Heart, BookOpen } from 'lucide-react'

const Faculty = () => {
  const facultyRef = useRef(null)

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

    if (facultyRef.current) {
      observer.observe(facultyRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const faculty = [
    {
      name: "Dr. Sarah Ahmed",
      designation: "Principal & Founder",
      description: "With over 15 years of experience in Montessori education, Dr. Sarah leads our school with passion and dedication to nurturing young minds.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      qualifications: "PhD in Early Childhood Education, AMI Certified",
      specialties: ["Educational Leadership", "Child Development", "Montessori Philosophy"]
    },
    {
      name: "Ms. Fatima Khan",
      designation: "Head Montessori Teacher",
      description: "A dedicated Montessori educator with 10 years of experience, Ms. Fatima creates magical learning experiences for our children.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      qualifications: "AMI Diploma, M.Ed in Montessori Education",
      specialties: ["Montessori Methods", "Child Psychology", "Creative Arts"]
    },
    {
      name: "Mr. Ali Hassan",
      designation: "Mathematics & Science Teacher",
      description: "Mr. Ali brings mathematics and science to life with hands-on experiments and engaging activities that spark curiosity.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      qualifications: "M.Sc Mathematics, B.Ed, Montessori Training",
      specialties: ["Mathematics", "Science Education", "Problem Solving"]
    },
    {
      name: "Ms. Ayesha Malik",
      designation: "Language & Arts Teacher",
      description: "Ms. Ayesha fosters a love for language and creativity through storytelling, art, and cultural activities.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      qualifications: "M.A English Literature, Montessori Certification",
      specialties: ["Language Development", "Creative Writing", "Cultural Studies"]
    },
    {
      name: "Ms. Zainab Sheikh",
      designation: "Pre-Montessori Specialist",
      description: "Specializing in early childhood development, Ms. Zainab provides gentle guidance for our youngest learners.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      qualifications: "B.Ed Early Childhood, AMI Assistant Training",
      specialties: ["Early Development", "Sensory Learning", "Social Skills"]
    },
    {
      name: "Mr. Usman Ali",
      designation: "Physical Education & Sports",
      description: "Mr. Usman promotes healthy physical development and teamwork through fun, age-appropriate activities.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      qualifications: "B.Sc Physical Education, Child Development Certificate",
      specialties: ["Physical Development", "Team Sports", "Motor Skills"]
    }
  ]

  return (
    <section id="faculty" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in" ref={facultyRef}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Meet Our <span className="gradient-text">Dedicated Faculty</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our experienced and passionate educators are committed to providing the best learning experience for your child. Each teacher brings unique expertise and dedication to our Montessori community.
            </p>
          </div>

          {/* Faculty Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {faculty.map((member, index) => (
              <div
                key={index}
                className="card group hover:shadow-2xl dark:hover:shadow-red-500/20 bg-white dark:bg-gray-800 transition-all duration-500 rounded-2xl border border-gray-100 dark:border-gray-700"
              >
                {/* Faculty Photo */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-school-red rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Faculty Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <div className="flex items-center justify-center space-x-2 text-school-red font-semibold mb-3">
                    <GraduationCap className="w-4 h-4" />
                    <span>{member.designation}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Qualifications */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-4 h-4 text-school-yellow" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Qualifications</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{member.qualifications}</p>
                </div>

                {/* Specialties */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Heart className="w-4 h-4 text-school-red" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Specialties</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty, specIndex) => (
                      <span
                        key={specIndex}
                        className="text-xs bg-red-50 dark:bg-red-900/30 text-school-red px-2 py-1 rounded-full transition-colors duration-300"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Button */}
                <button className="w-full flex items-center justify-center space-x-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 py-2 px-4 rounded-lg hover:bg-school-red hover:text-white transition-all duration-300">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Contact</span>
                </button>
              </div>
            ))}
          </div>

          {/* Faculty Highlights */}
          <div className="bg-gradient-to-r from-blue-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 transition-colors duration-300">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Why Our Faculty Makes the Difference
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our teachers are not just educators; they are mentors, guides, and champions of your child's potential
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: <GraduationCap className="w-8 h-8 text-white" />, title: 'Certified', desc: 'All teachers hold Montessori certifications', bg: 'bg-school-red' },
                { icon: <BookOpen className="w-8 h-8 text-white" />, title: 'Experienced', desc: 'Years of hands-on teaching experience', bg: 'bg-school-blue' },
                { icon: <Heart className="w-8 h-8 text-white" />, title: 'Passionate', desc: 'Genuine love for teaching and children', bg: 'bg-school-yellow' },
                { icon: <Award className="w-8 h-8 text-white" />, title: 'Continuous Learning', desc: 'Regular training and professional development', bg: 'bg-gray-600' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faculty
