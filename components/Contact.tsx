'use client'

import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-primary font-bold text-sm uppercase tracking-wider mb-4 border border-primary/20">
            Get In Touch
          </span>
          <h2 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to take your business to the next level? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex gap-4 items-start group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                <FaMapMarkerAlt className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-poppins text-xl font-bold mb-1">Address</h4>
                <p className="text-gray-600">123 Business Street, City, Country</p>
              </div>
            </div>

            <div className="flex gap-4 items-start group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                <FaEnvelope className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-poppins text-xl font-bold mb-1">Email</h4>
                <p className="text-gray-600">info@abcpvtltd.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-start group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                <FaPhone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-poppins text-xl font-bold mb-1">Phone</h4>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
          >
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                />
              </div>
              <div>
                <select className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all">
                  <option value="">Select Service</option>
                  <option value="web">Web Development</option>
                  <option value="app">App Development</option>
                  <option value="branding">Branding</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your project"
                  rows={5}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
