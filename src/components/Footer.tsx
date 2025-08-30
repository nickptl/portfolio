import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-gray-300 mb-4">
              Full Stack Developer passionate about creating innovative web solutions, 
              AI/ML applications, and data processing tools.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/nickptl" className="text-gray-300 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/naitik-patel-197174268/" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:patelnaitik525@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
              <a href="tel:7984076356" className="text-gray-300 hover:text-white transition-colors">
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Portfolio. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}