import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Image1 from '../assets/img3.jpg'
import Image2 from '../assets/img4.jpg'
import Image3 from '../assets/img5.jpg'
import Image4 from '../assets/img6.jpg'
import Image5 from '../assets/img7.jpg'
import Image6 from '../assets/img8.jpg'
import Image7 from '../assets/img9.jpg'
import Image8 from '../assets/img10.jpg'
import Image9 from '../assets/img11.jpg'

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Future Innovation Tech',
      description: 'A modern technology company website showcasing innovative solutions and services with responsive design and interactive features.',
      image: Image1,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      liveUrl: 'https://futureinnovationtech.in',
      category: 'Web Development'
    },
    {
      title: 'Tiffin Choice',
      description: 'A comprehensive food delivery platform connecting customers with local tiffin services, featuring order management and payment integration.',
      image: Image2,
      technologies: ['React', 'Node.js', 'MongoDB', 'Payment Gateway'],
      liveUrl: 'https://tiffinchoice.in',
      category: 'Web Development'
    },
    {
      title: 'Kamla Infosys',
      description: 'Corporate information systems website with modern design, showcasing company services and client portfolio.',
      image: Image3,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      liveUrl: 'https://kamlainfosys.in',
      category: 'Web Development'
    },
    {
      title: 'Zemos Food',
      description: 'Restaurant website with online menu, reservation system, and food ordering capabilities with modern UI/UX design.',
      image: Image4,
      technologies: ['React', 'Express.js', 'MySQL', 'Stripe'],
      liveUrl: 'https://zemosfood.com',
      category: 'Web Development'
    },
    {
      title: 'Hand Sign Detection',
      description: 'AI-powered computer vision application that recognizes and interprets hand gestures in real-time using machine learning algorithms.',
      image: Image5,
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'MediaPipe'],
      githubUrl: '#',
      category: 'AI/ML'
    },
    {
      title: 'Business Card OCR',
      description: 'Automated data extraction tool that converts business card information into structured Excel files using OCR technology.',
      image: Image6,
      technologies: ['Python', 'Tesseract OCR', 'Pandas', 'OpenCV'],
      githubUrl: '#',
      category: 'Data Processing'
    },
    {
      title: 'Face Recognition Attendance',
      description: 'Employee attendance management system using facial recognition technology with real-time location tracking for business owners.',
      image: Image7,
      technologies: ['Python', 'Face Recognition', 'Flask', 'SQLite'],
      githubUrl: '#',
      category: 'AI/ML'
    },
    {
      title: 'PDF to Excel Converter',
      description: 'Document processing tool that converts PDF files to Excel format using Ollama AI for intelligent data extraction and formatting.',
      image: Image8,
      technologies: ['Python', 'Ollama', 'PyPDF2', 'Pandas'],
      githubUrl: '#',
      category: 'Data Processing'
    },
    {
      title: 'Old Book Marketplace',
      description: 'E-commerce platform for buying and selling used books with user authentication, search functionality, and secure payment processing.',
      image: Image9,
      technologies: ['React', 'Node.js', 'MongoDB', 'PayPal API'],
      githubUrl: '#',
      category: 'Web Development'
    }
  ];

  const categories = ['All', 'Web Development', 'AI/ML', 'Data Processing'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of web applications, AI/ML solutions, and data processing tools 
            I've built to solve real-world problems.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={filter === category 
                ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
                : "hover:bg-gray-100"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              category={project.category}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in working together?
          </h2>
          <p className="text-gray-600 mb-6">
            I'm always open to discussing new opportunities and exciting projects.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-full"
          >
            <a href="/contact">Get In Touch</a>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}