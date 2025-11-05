import { useState, useEffect } from 'react';
import { Github, Mail, Phone, MapPin, ExternalLink, Menu, X, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const skills = {
    'Languages & Runtime': ['JavaScript', 'TypeScript', 'Node.js', 'Java', 'Dart', 'ES6+'],
    'Frontend': ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Context API', 'React Hooks'],
    'Backend': ['Express.js', 'RESTful APIs', 'Middleware', 'Authentication', 'JWT'],
    'Databases': ['MongoDB', 'MySQL', 'PostgreSQL', 'Mongoose'],
    'DevOps & Tools': ['Git', 'GitHub', 'Vercel', 'npm', 'Flutter'],
    'Core Skills': ['OOP', 'Data Structures', 'Algorithms', 'Design Patterns', 'Problem Solving', 'Agile']
  };

  const experience = [
    {
      title: 'Fullstack Freelance Developer',
      period: 'May 2023 - Present',
      location: 'Remote',
      type: 'Freelance',
      highlights: [
        'Collaborated with international teams on enterprise-level applications',
        'Architected and deployed scalable Node.js backend services',
        'Implemented comprehensive testing and debugging strategies',
        'Designed and integrated RESTful APIs with frontend applications',
        'Maintained 99.9% uptime through proactive monitoring and optimization'
      ]
    },
    {
      title: 'Full Stack Developer',
      period: 'Sep 2022 - Apr 2023',
      location: 'Cairo, Egypt',
      company: 'CRA',
      type: 'Remote',
      highlights: [
        'Developed full-stack features using MERN stack',
        'Optimized database queries reducing response time by 40%',
        'Led code reviews and maintained technical documentation',
        'Resolved critical production bugs with minimal downtime',
        'Mentored junior developers on best practices'
      ]
    }
  ];

  const projects = [
    {
      title: 'E-Learning Platform',
      description: 'A comprehensive learning management system with admin dashboard, course management, and student progress tracking.',
      technologies: ['Node.js', 'React', 'MySQL', 'Express.js', 'JWT'],
      features: [
        'Role-based authentication (Admin/Student)',
        'Dynamic course and module management',
        'Real-time progress tracking',
        'Database migrations for version control',
        'Responsive admin dashboard'
      ],
      link: 'https://study-arena-f.vercel.app/',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Noxe - Movie Discovery App',
      description: 'Modern movie browsing application with advanced search, filtering, and detailed movie information.',
      technologies: ['React', 'Context API', 'Joi', 'TMDB API', 'Vercel'],
      features: [
        'Real-time movie search with TMDB API',
        'Advanced filtering and sorting',
        'Form validation with Joi',
        'State management with Context API',
        'Optimized performance and caching'
      ],
      link: 'https://noxe-black.vercel.app/',
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold">
              <span className="text-gray-900">Omar</span>
              <span className="text-blue-600">.</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
              <a
                href="https://github.com/omargbreil"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all"
              >
                GitHub
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-6 bg-white/95 backdrop-blur-lg">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20">
        <div className="max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Available for Freelance
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Hi, I'm <span className="text-blue-600">Omar Magdi</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                Fullstack Developer specializing in building exceptional digital experiences with Node.js, React, and modern web technologies.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all font-medium shadow-lg hover:shadow-xl"
                >
                  Get in Touch
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-900 hover:text-white transition-all font-medium"
                >
                  View Projects
                </button>
              </div>
              <div className="flex gap-6">
                <a href="https://github.com/omargbreil" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github size={24} />
                </a>
                <a href="mailto:omargbreil1@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-gray-900 rounded-3xl p-8 text-white">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-sm">Currently Available</span>
                    </div>
                    <div className="text-4xl font-bold">2+ Years</div>
                    <div className="text-gray-400">Professional Experience</div>
                    <div className="pt-6 border-t border-gray-700">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold">20+</div>
                          <div className="text-gray-400 text-sm">Projects</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">100%</div>
                          <div className="text-gray-400 text-sm">Client Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-gray-400" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a passionate fullstack developer from Alexandria, Egypt, with a strong focus on backend development 
                using Node.js and JavaScript. I specialize in building scalable applications and solving complex technical challenges.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With expertise in both SQL and NoSQL databases, I excel at data migration, modular programming, 
                and implementing RESTful APIs. I thrive in international, cross-functional teams and quickly adapt 
                to new technologies.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-600 mt-1 shrink-0" size={20} />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-gray-600">Alexandria, Egypt</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-blue-600 mt-1 shrink-0" size={20} />
                  <div>
                    <div className="font-medium">Email</div>
                    <a href="mailto:omargbreil1@gmail.com" className="text-blue-600 hover:underline">
                      omargbreil1@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-blue-600 mt-1 shrink-0" size={20} />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-gray-600">(+20) 01098402504</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Education & Training</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <div className="text-sm text-gray-500 mb-1">Jan 2022 - Nov 2022</div>
                  <h4 className="text-xl font-bold mb-2">MERN Stack Development</h4>
                  <div className="text-gray-600 mb-3">Route Academy</div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Intensive full-stack web development program</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Mastered MongoDB, Express.js, React, and Node.js</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Built RESTful APIs and server-side applications</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Applied OOP concepts and agile methodologies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">Work Experience</h2>
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div>
                    <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {job.type}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                    {job.company && <div className="text-gray-600 mb-2">{job.company}</div>}
                    <div className="text-gray-500 text-sm">{job.location}</div>
                  </div>
                  <div className="text-gray-500 mt-4 lg:mt-0 font-medium">{job.period}</div>
                </div>
                <ul className="space-y-3">
                  {job.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-700">
                      <span className="text-blue-600 font-bold mt-1">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <div className={`h-48 bg-linear-to-r ${project.gradient} p-8 flex items-center justify-center`}>
                  <h3 className="text-3xl font-bold text-white text-center">{project.title}</h3>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-sm text-gray-400 mb-3 uppercase tracking-wide">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-sm text-gray-400 mb-3 uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-2 text-gray-700 text-sm">
                          <span className="text-blue-600">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all font-medium group"
                  >
                    View Live Project
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index} className="bg-linear-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-blue-600">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span key={idx} className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-12 bg-linear-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-12 text-blue-100">
            I'm always interested in hearing about new projects and opportunities. 
            Let's create something amazing together!
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="mailto:omargbreil1@gmail.com"
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all font-medium shadow-lg flex items-center gap-2"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://github.com/omargbreil"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all font-medium flex items-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
          <div className="text-blue-100">
            <div className="mb-2">Phone: (+20) 01098402504</div>
            <div>Location: Alexandria, Egypt</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 bg-gray-900 text-white">
     
      </footer>
    </div>
  );
}