import React, { useEffect, useRef } from 'react'
import { ChevronDown, Star, Users, BookOpen } from 'lucide-react'

const Hero = () => {
    const heroRef = useRef(null)

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

        if (heroRef.current) {
            observer.observe(heroRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-10"
                style={{
                    backgroundImage: "url('https://cdn.pixabay.com/photo/2016/09/28/04/35/classroom-1699745_1280.jpg')"
                }}
            ></div>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-32 h-32 bg-school-red rounded-full"></div>
                <div className="absolute top-40 right-32 w-24 h-24 bg-school-yellow rounded-full"></div>
                <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-school-blue rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-28 h-28 bg-school-red rounded-full"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center fade-in" ref={heroRef}>
                    {/* School Logo Placeholder */}
                    <div className="mb-8">
                        <div className="w-32 h-32 mx-auto bg-[#ed185f] rounded-full flex items-center justify-center ">
                            {/* <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-school-red">SMS</span>
                </div> */}
                            <img src="/logo.jpg" alt="logo" className="w-28 h-28  rounded-full" />
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white mb-6">
                        The Scholars' <br />
                        <span className="gradient-text">Montessori School</span>
                    </h1>

                    {/* Tagline */}
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Nurturing young minds with love, care, and excellence in education
                    </p>

                    {/* Quick Stats */}
                    <div className="flex flex-wrap justify-center gap-8 mb-12">
                        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                            <Star className="w-5 h-5 text-school-yellow" />
                            <span className="font-semibold">Excellence</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                            <Users className="w-5 h-5 text-school-blue" />
                            <span className="font-semibold">Community</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                            <BookOpen className="w-5 h-5 text-school-red" />
                            <span className="font-semibold">Learning</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('admission')}
              className=" dark:bg-transparent dark:text-white dark:border-primary border-2 border-school-red btn-primary text-lg px-8 py-4"
            >
              Enroll Now
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className=" dark:bg-school-red dark:text-white  border-2 border-school-red btn-secondary bg-transparent text-lg px-8 py-4"
            >
              Learn More
            </button>
          </div> */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <button
                            onClick={() => scrollToSection('admission')}
                            className="dark:bg-transparent dark:text-white dark:border-primary border-2 border-school-red hover:bg-transparent hover:text-school-red btn-primary text-lg px-8 py-4
               transition-all duration-300 ease-in-out
               hover:bg-school-red hover:text-white dark:hover:bg-school-red dark:hover:text-white"
                        >
                            Enroll Now
                        </button>

                        <button
                            onClick={() => scrollToSection('about')}
                            className="dark:bg-school-red dark:text-white border-2 border-school-red btn-secondary bg-transparent text-lg px-8 py-4
               transition-all duration-300 ease-in-out
               hover:bg-school-red hover:text-white dark:hover:bg-transparent dark:hover:text-school-red dark:hover:border-primary"
                        >
                            Learn More
                        </button>
                    </div>


                    {/* Quick Navigation */}

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <button
                    onClick={() => scrollToSection('about')}
                    className="text-gray-400 hover:text-school-red transition-colors duration-300"
                >
                    <ChevronDown className="w-8 h-8" />
                </button>
            </div>
        </section>
    )
}

export default Hero
