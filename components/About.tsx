'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '✓',
    title: 'Expert Team',
    description: 'Skilled professionals with years of experience',
  },
  {
    icon: '✓',
    title: 'Quality Assured',
    description: 'Rigorous testing and quality control processes',
  },
  {
    icon: '✓',
    title: 'On-Time Delivery',
    description: 'We respect deadlines and deliver on schedule',
  },
  {
    icon: '✓',
    title: '24/7 Support',
    description: 'Always here to help when you need us',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-primary font-bold text-sm uppercase tracking-wider mb-4 border border-primary/20">
              About Us
            </span>
            <h2 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Why Choose <span className="gradient-text">ABC Pvt Ltd</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We are a team of passionate designers, developers, and strategists dedicated to 
              helping businesses thrive in the digital world. Our mission is to deliver innovative 
              solutions that drive real results.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-poppins text-xl font-bold mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary via-accent to-secondary">
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '30px 30px'
                }}
              />
              
              <div className="absolute top-10 left-10 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl animate-float max-w-[200px]">
                <span className="text-4xl">🎨</span>
                <p className="font-bold text-sm mt-2 text-gray-900">Creative Design</p>
              </div>
              <div className="absolute top-1/2 right-10 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl animate-float max-w-[200px]" style={{ animationDelay: '1s' }}>
                <span className="text-4xl">💻</span>
                <p className="font-bold text-sm mt-2 text-gray-900">Clean Code</p>
              </div>
              <div className="absolute bottom-10 left-1/4 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl animate-float max-w-[200px]" style={{ animationDelay: '2s' }}>
                <span className="text-4xl">🚀</span>
                <p className="font-bold text-sm mt-2 text-gray-900">Fast Delivery</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
