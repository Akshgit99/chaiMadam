export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-poppins text-3xl font-extrabold gradient-text">
                ABC
              </span>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Pvt Ltd
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming ideas into digital excellence through innovative web development, 
              app development, and branding solutions.
            </p>
          </div>

          <div>
            <h4 className="font-poppins text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#clients" className="text-gray-400 hover:text-white transition-colors">Clients</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">App Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Branding</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins text-lg font-bold mb-4">Connect</h4>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 ABC Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
