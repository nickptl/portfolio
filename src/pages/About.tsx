import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code, Database, Brain, Globe, Award, Calendar, MapPin, Download, ExternalLink } from 'lucide-react';
import myImages from '../assets/img1.jpg'
import myImages1 from '../assets/img2.jpg'

export default function About() {
  // Placeholder images - you can replace these with your actual images
  const profileImages = [
    myImages, // Replace with your first image
    myImages1  // Replace with your second image
  ];

  const skills = {
    'Frontend Development': {
      icon: <Globe size={20} />,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript', 'Vue.js'],
      color: 'from-blue-500 to-cyan-500'
    },
    'Backend Development': {
      icon: <Database size={20} />,
      skills: ['Node.js', 'Python', 'Express.js', 'REST APIs', 'Database Design', 'MongoDB'],
      color: 'from-green-500 to-emerald-500'
    },
    'AI/ML & Computer Vision': {
      icon: <Brain size={20} />,
      skills: ['Computer Vision', 'OCR Technology', 'Face Recognition', 'Data Processing', 'Ollama', 'TensorFlow'],
      color: 'from-purple-500 to-pink-500'
    },
    'Tools & Technologies': {
      icon: <Code size={20} />,
      skills: ['Git', 'Docker', 'VS Code', 'Figma', 'Postman', 'Excel Automation'],
      color: 'from-orange-500 to-red-500'
    }
  };

  const achievements = [
    {
      icon: <Award className="text-yellow-600" size={24} />,
      title: '9+ Projects Completed',
      description: 'Successfully delivered diverse projects ranging from web applications to AI solutions'
    },
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: 'Full Stack Expertise',
      description: 'Proficient in both frontend and backend technologies with modern frameworks'
    },
    {
      icon: <Brain className="text-purple-600" size={24} />,
      title: 'AI/ML Specialist',
      description: 'Specialized in computer vision, OCR, and machine learning applications'
    }
  ];

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Freelance & Contract Work',
      period: '2025 - Present',
      location: 'Remote',
      description: 'Developing comprehensive web applications, AI/ML solutions, and data processing tools for various clients. Specialized in creating innovative solutions that bridge technology and real-world business needs.',
      highlights: ['Built 4+ commercial websites', 'Developed AI-powered applications', 'Created automated data processing tools']
    },
    {
      title: 'Web Developer',
      company: 'Various Projects',
      period: '2025',
      location: 'Remote',
      description: 'Created multiple websites including e-commerce platforms, business websites, and food delivery systems with focus on user experience and performance.',
      highlights: ['E-commerce development', 'Payment gateway integration', 'Responsive design implementation']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full stack developer who transforms ideas into digital reality through 
            innovative web solutions, AI/ML applications, and intelligent data processing tools.
          </p>
        </div>

        {/* Hero Section with Image and Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
          {/* Profile Images Carousel */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <ImageCarousel 
                images={profileImages} 
                autoRotate={true} 
                interval={5000} 
              />
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-15 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Personal Introduction */}
          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Globe className="text-blue-600" size={32} />
                  Hello, I'm a Developer
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    I am a dedicated full stack developer with a passion for creating innovative 
                    solutions that bridge the gap between technology and real-world problems. 
                    My expertise spans across modern web development, artificial intelligence, and automated data processing.
                  </p>
                  <p>
                    I enjoy working on challenging projects that involve cutting-edge technologies 
                    like computer vision, OCR systems, and intelligent automation tools. Every project 
                    I undertake is an opportunity to learn, grow, and create something meaningful.
                  </p>
                  <p>
                    When I'm not coding, I'm exploring new technologies, contributing to open-source projects, 
                    and staying updated with the latest trends in web development and AI.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Download className="mr-2" size={18} />
                    Download CV
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/projects">
                      <ExternalLink className="mr-2" size={18} />
                      View Projects
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, data]) => (
              <Card key={category} className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${data.color} text-white`}>
                      {data.icon}
                    </div>
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline"
                        className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 transition-all duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
                <CardContent className="p-8">
                  <div className="border-l-4 border-gradient-to-b from-blue-600 to-purple-600 pl-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                        <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-4 text-gray-600 mt-2 lg:mt-0">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Key Highlights:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white border-0 shadow-2xl">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-xl mb-8 opacity-90">
                Ready to bring your ideas to life? I'm available for new projects and collaborations.
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold"
              >
                <a href="/contact">Get In Touch</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}