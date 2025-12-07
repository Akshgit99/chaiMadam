'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const clients = [
  {
    name: 'Tech Solutions Inc',
    project: 'E-commerce Platform Redesign',
    website: 'https://example.com',
    tags: ['Web Development', 'UI/UX'],
    gradient: 'from-teal-400 to-cyan-500',
    icon: '💻',
  },
  {
    name: 'Digital Agency Pro',
    project: 'Corporate Website',
    website: 'https://example.com',
    tags: ['Web Development', 'CMS'],
    gradient: 'from-emerald-400 to-teal-500',
    icon: '🚀',
  },
  {
    name: 'Innovation Hub',
    project: 'SaaS Platform',
    website: 'https://example.com',
    tags: ['Web App', 'API'],
    gradient: 'from-cyan-400 to-blue-500',
    icon: '⚡',
  },
  {
    name: 'Brand Solutions Ltd',
    project: 'Complete Rebranding',
    website: 'https://example.com',
    tags: ['Branding', 'Design'],
    gradient: 'from-purple-400 to-pink-500',
    icon: '🎨',
  },
  {
    name: 'Mobile First Co',
    project: 'Mobile Shopping App',
    website: 'https://example.com',
    tags: ['App Development', 'iOS'],
    gradient: 'from-blue-400 to-indigo-500',
    icon: '📱',
  },
  {
    name: 'Retail Solutions',
    project: 'Multi-vendor Marketplace',
    website: 'https://example.com',
    tags: ['E-commerce', 'Mobile'],
    gradient: 'from-orange-400 to-red-500',
    icon: '🛒',
  },
]

export default function ClientsCarousel() {
  return (
    <section id="clients" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-primary font-bold text-sm uppercase tracking-wider mb-4 border border-primary/20">
            Our Success Stories
          </span>
          <h2 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Trusted by <span className="gradient-text">Leading Brands</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Proud to work with amazing clients who trust us with their digital presence
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!pb-12"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <motion.a
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group overflow-hidden"
              >
                <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${client.gradient}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl opacity-30">{client.icon}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="font-poppins text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {client.name}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4">
                    {client.project}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {client.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-xs font-semibold text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
