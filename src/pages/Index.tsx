import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Download, ExternalLink, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const skills = [
    { name: "Deep Learning", level: 90, category: "AI & ML" },
    { name: "CNNs", level: 85, category: "AI & ML" },
    { name: "Transformers", level: 80, category: "AI & ML" },
    { name: "LLMs", level: 85, category: "AI & ML" },
    { name: "Python", level: 95, category: "Programming" },
    { name: "TensorFlow", level: 85, category: "Frameworks" },
    { name: "PyTorch", level: 80, category: "Frameworks" },
    { name: "LangChain", level: 75, category: "Frameworks" },
    { name: "Telegram Bots", level: 90, category: "Chatbots" },
    { name: "NLP", level: 85, category: "Chatbots" },
  ];

  const projects = [
    {
      title: "Telegram Chatbots",
      description: "Designed and deployed multilingual Telegram bots for different purposes such as trading assistants, resume analyzers, and university info bots. Includes command-based, NLP-powered, and LLM-enhanced versions.",
      tech: ["Python", "Telegram API", "NLP", "LLMs"],
      image: "/placeholder.svg?height=300&width=500",
      github: "https://github.com/Epochalypse00"
    },
    {
      title: "Resume Analyzer AI",
      description: "An interactive chatbot built using NLP that helps users optimize their resumes based on job descriptions.",
      tech: ["Python", "NLP", "Machine Learning", "AI"],
      image: "/placeholder.svg?height=300&width=500",
      github: "https://github.com/Epochalypse00"
    },
    {
      title: "Smart Radar Intruder System",
      description: "Arduino-based radar system using ultrasonic sensors, servo rotation, buzzer alert, and OLED radar display UI.",
      tech: ["Arduino", "C++", "Hardware", "IoT"],
      image: "/placeholder.svg?height=300&width=500",
      github: "https://github.com/Epochalypse00"
    },
    {
      title: "Human Activity Recognition",
      description: "Motion recognition system using a 3D CNN + Transformer Encoder pipeline to classify human activity from video data.",
      tech: ["Python", "3D CNN", "Transformers", "Computer Vision"],
      image: "/placeholder.svg?height=300&width=500",
      github: "https://github.com/Epochalypse00"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Aria Sokhangoo
            </h1>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors duration-300 hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Aria Sokhangoo
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300">
              AI Engineering Student | AI Chatbot Developer | Deep Learning Enthusiast
            </p>
            <p className="text-lg mb-8 text-gray-400">
              Bahçeşehir University, Istanbul • Expected Graduation 2026
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-full transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate AI Engineering student at Bahçeşehir University with a deep fascination for 
                artificial intelligence and practical problem-solving. My journey in AI has led me to specialize 
                in chatbot development, particularly Telegram bots, and deep learning applications.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With experience spanning from embedded systems to large language models, I enjoy bridging 
                the gap between cutting-edge AI research and real-world applications. My expertise includes 
                developing multilingual chatbots, implementing deep learning models, and creating innovative 
                solutions using modern AI frameworks.
              </p>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <blockquote className="text-xl italic text-blue-400 mb-4">
                  "Building ethical, impactful AI to improve real-world systems."
                </blockquote>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">Languages</h3>
              <div className="space-y-3">
                {[
                  { lang: "English", level: "Fluent" },
                  { lang: "Turkish", level: "Fluent" },
                  { lang: "Farsi", level: "Native" }
                ].map((language) => (
                  <div key={language.lang} className="flex justify-between items-center bg-gray-800/30 rounded-lg p-3">
                    <span className="text-gray-300">{language.lang}</span>
                    <span className="text-blue-400">{language.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['AI & ML', 'Programming', 'Frameworks', 'Chatbots'].map((category) => (
              <Card key={category} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">{category}</h3>
                  <div className="space-y-4">
                    {skills.filter(skill => skill.category === category).map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-700 rounded-t-lg mb-6 flex items-center justify-center">
                    <div className="text-gray-400 text-center">
                      <div className="w-16 h-16 bg-gray-600 rounded-lg mb-2 mx-auto flex items-center justify-center">
                        <ExternalLink className="h-8 w-8" />
                      </div>
                      <p className="text-sm">Project Demo Space</p>
                      <p className="text-xs">Upload video or image</p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <h3 className="text-xl font-semibold mb-3 text-blue-400">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-700 text-gray-300 hover:bg-gray-600">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Experience</h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-blue-500 pl-4">
                    <h4 className="text-lg font-semibold text-white">Data Entry Assistant</h4>
                    <p className="text-blue-400 mb-2">Atlastek Metal, Istanbul</p>
                    <p className="text-gray-300 text-sm">
                      Managed Excel-based inventory tracking, customer/supplier coordination, 
                      and warehouse stock handling.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-purple-400">Education</h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-purple-500 pl-4">
                    <h4 className="text-lg font-semibold text-white">BSc in Artificial Intelligence Engineering</h4>
                    <p className="text-purple-400 mb-2">Bahçeşehir University, Istanbul</p>
                    <p className="text-gray-300 text-sm">Expected Graduation: 2026</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Interested in collaborating or discussing AI projects? I'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('mailto:epochalypse.ai@gmail.com')}
            >
              <Mail className="mr-2 h-4 w-4" />
              epochalypse.ai@gmail.com
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <Button 
              variant="ghost" 
              size="lg"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              onClick={() => window.open('https://github.com/Epochalypse00', '_blank')}
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              onClick={() => window.open('https://linkedin.com/in/aria-sokhangoo-027835287', '_blank')}
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              onClick={() => window.open('mailto:epochalypse.ai@gmail.com')}
            >
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Aria Sokhangoo. Building the future with AI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
