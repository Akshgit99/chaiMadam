import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ClientsCarousel from '@/components/ClientsCarousel'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <ClientsCarousel />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
