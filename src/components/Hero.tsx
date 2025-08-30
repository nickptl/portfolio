import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import cv from "../assets/cv.pdf"; // Importing the CV correctly

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Full Stack
              </span>
              <br />
              <span className="text-gray-900">Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Crafting innovative web solutions, AI/ML applications, and data processing tools 
              that transform ideas into reality
            </p>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {['React', 'Node.js', 'Python', 'AI/ML', 'Data Processing', 'Web Development', 'OCR', 'Face Recognition'].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/projects">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full">
                View My Work
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-3 rounded-full border-2 border-gray-300 hover:border-gray-400"
            >
              <a href={cv} download className="flex items-center">
                Download CV
                <Download className="ml-2" size={20} />
              </a>
            </Button>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto pt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">9+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">5+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
