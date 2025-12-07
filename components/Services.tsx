'use client'

import { motion } from 'framer-motion'
import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa'

const services = [
  {
    icon: <FaLaptopCode className="w-12 h-12" />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies. Responsive, fast, and optimized for conversions.',
    features: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration', 'Performance Optimization'],
    popular: false,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <FaMobileAlt className="w-12 h-12" />,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
    features: ['iOS & Android Apps', 'Cross-Platform Solutions', 'UI/UX Design', 'App Maintenance & Support'],
    popular: true,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: <FaPaintBrush className="w-12 h-12" />,
    title: 'Branding',
    description: 'Complete brand identity solutions that make your business stand out and resonate with your target audience.',
    features: ['Logo Design', 'Brand Strategy', 'Visual Identity', 'Marketing Materials'],
    popular: false,
    gradient: 'from-orange-500 to-red-500',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-primary font-bold text-sm uppercase tracking-wider mb-4 border border-primary/20">
            What We Do
          </span>
          <h2 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100 overflow-hidden ${
                service.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {service.popular && (
                <span className="absolute top-5 right-5 z-10 px-4 py-1 bg-primary text-white rounded-full text-xs font-bold shadow-lg">
                  Popular
                </span>
              )}

              {/* Image */}
              <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${service.gradient}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white opacity-20 scale-150">
                    {service.icon}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6 inline-flex p-3 rounded-xl bg-white/90 backdrop-blur-sm">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-poppins text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="mb-6 leading-relaxed text-gray-600">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-lg text-primary">✓</span>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-bold text-sm text-primary group-hover:gap-4 transition-all"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
