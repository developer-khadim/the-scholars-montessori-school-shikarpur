import React, { useEffect, useRef, useState } from 'react'
import { Camera, Heart, Users, BookOpen } from 'lucide-react'

const Gallery = () => {
  const galleryRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )

    const current = galleryRef.current
    if (current) observer.observe(current)

    return () => {
      if (current) observer.unobserve(current)
      observer.disconnect()
    }
  }, [])

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      title: "Montessori Classroom",
      category: "Learning Environment",
      description: "Children engaged in hands-on learning activities",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
      title: "Art & Creativity",
      category: "Creative Expression",
      description: "Students expressing their creativity through art",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
      title: "Outdoor Activities",
      category: "Physical Development",
      description: "Children enjoying outdoor play and exploration",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
      title: "Science Exploration",
      category: "STEM Learning",
      description: "Young scientists discovering the world around them",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      title: "Reading Corner",
      category: "Language Development",
      description: "Cozy reading spaces that inspire a love for books",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop",
      title: "Group Activities",
      category: "Social Learning",
      description: "Children learning together and building friendships",
    },

  ]

  const categories = [
    "All",
    "Learning Environment",
    "Creative Expression",
    "Physical Development",
    "STEM Learning",
    "Language Development",
    "Social Learning",
    "Creative Arts",
    "Life Skills",
    "Community Events",
  ]

  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <section id="gallery" className="section-padding bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div  className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in" ref={galleryRef}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              School <span className="gradient-text">Gallery</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Take a visual journey through our school life — the joy, learning, and growth that happens every day at The Scholars' Montessori School.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-school-red text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-school-red hover:text-white hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16 text-gray-800 dark:text-white">
            {[
              { icon: <Camera />, num: "500+", text: "Memorable Moments", color: "bg-school-red" },
              { icon: <Users />, num: "150+", text: "Happy Students", color: "bg-school-blue" },
              { icon: <BookOpen />, num: "50+", text: "Learning Activities", color: "bg-school-yellow" },
              { icon: <Heart />, num: "100%", text: "Parent Satisfaction", color: "bg-gray-600" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {React.cloneElement(item.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.num}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl transition-all duration-300">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Want to See More?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a visit to experience our school environment firsthand and see the Montessori magic in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary hover:bg-transparent hover:text-school-red border-2 border-school-red transition-all duration-300">
                Schedule a Visit
              </button>
              <button className="btn-secondary border-2 border-school-red bg-transparent hover:bg-school-red hover:text-white transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white text-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200 z-10"
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-lg opacity-90">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
