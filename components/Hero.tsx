'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #14B8A6 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-poppins text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-8">
            <span className="block">Transforming Ideas</span>
            <span className="block">Into Digital</span>
            <span className="block gradient-text">Excellence</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We create stunning web experiences, powerful mobile apps, and memorable brands 
            that drive growth and engagement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="#contact"
              className="btn-gradient text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="bg-white border-2 border-gray-900 text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-900 hover:text-white transition-all"
            >
              Our Services
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div>
              <h3 className="font-poppins text-4xl md:text-5xl font-extrabold gradient-text mb-2">50+</h3>
              <p className="text-sm md:text-base text-gray-600 font-semibold">Projects Completed</p>
            </div>
            <div>
              <h3 className="font-poppins text-4xl md:text-5xl font-extrabold gradient-text mb-2">30+</h3>
              <p className="text-sm md:text-base text-gray-600 font-semibold">Happy Clients</p>
            </div>
            <div>
              <h3 className="font-poppins text-4xl md:text-5xl font-extrabold gradient-text mb-2">100%</h3>
              <p className="text-sm md:text-base text-gray-600 font-semibold">Satisfaction</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
