import React, { useState, useEffect } from 'react';

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techCategories = [
    { icon: <span className="text-2xl">💻</span>, title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"] },
    { icon: <span className="text-2xl">🛢️</span>, title: "Backend", skills: ["Node.js", "Express.js", "MongoDB", "API Integration"] },
    { icon: <span className="text-2xl">🔧</span>, title: "Tools & DSA", skills: ["Git", "GitHub", "VS Code", "Postman", "Cloudflare", "Firebase", "Java DSA"] }
  ];

  const projects = [
    {
      title: "Alumni Connect",
      description: "A platform bridging alumni and current students for mentorship and career guidance.",
      features: [
        "Community section for alumni-student connections",
        "Video call feature for face-to-face guidance",
        "Secure authentication and email-based contact system",
        "🏆 Secured First Place in Spectra 2K25"
      ],
      tech: ["React.js", "Firebase Auth", "Node.js", "Express.js", "REST APIs"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "StreetPaws – Animal Welfare System",
      description: "Supporting stray and wild animals through essential services and community features.",
      features: [
        "Nearby animal hospitals and pet shelters finder",
        "Donation system for animal welfare causes",
        "AI assistant for user guidance",
        "Dedicated news section for animal care updates",
        "🥉 Achieved Third Rank in CertifyO Foundation Certification"
      ],
      tech: ["React.js", "Firebase Auth", "Node.js", "Express.js", "MongoDB", "OpenAI API", "Tailwind CSS", "Cloudflare"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "EcoShop",
      description: "Displays product eco-scores calculated from factors like production, travel, and sustainability metrics.",
      features: [
        "Customer-facing platform for eco-conscious shopping with add-to-cart functionality",
        "AI-powered chatbot provides instant user assistance and guidance.",
        "Personalized product recommendations based on eco-scores and user preferences.",
        "Secure authentication and dynamic product listings with image uploads",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      gradient: "from-green-500 to-teal-600"
    }
  ];

  const certifications = [
    "Data Structures & Algorithms in Java – Apna College",
    "Full Stack Web Development – Apna College"
  ];

  // SCROLL TO SECTIONS
  const handleNavClick = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white overflow-hidden relative">

      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-88 h-88 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-6000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              VA
            </div>
            <div className="hidden md:flex space-x-8">
              {['about', 'skills', 'projects', 'experience', 'certifications'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className={`capitalize transition-all duration-300 ${
                    activeSection === section
                      ? 'text-cyan-400 font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 pt-20">

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Vaishnavi Adhav
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Computer Engineering Student | Full Stack Developer
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8 rounded-full"></div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <a href="mailto:adhavvaishnavi52@gmail.com"
                className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <span className="text-xl group-hover:text-cyan-400 transition-colors">✉️</span>
                <span>Email</span>
              </a>

              <a href="https://github.com/vaishnavi4049" target="_blank"
                className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <span className="text-xl group-hover:text-cyan-400 transition-colors">🔗</span>
                <span>GitHub</span>
              </a>

              <a href="https://www.linkedin.com/in/vaishnavi-adhav-b5b346362" target="_blank"
                className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <span className="text-xl group-hover:text-cyan-400 transition-colors">💼</span>
                <span>LinkedIn</span>
              </a>

              <a href="/VAISHNAVI_ADHAV CV.pdf" target="_blank"
                className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg">
                <span className="text-xl">📄</span>
                <span>Resume</span>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a dedicated Computer Engineering student with practical experience in full-stack web development and a strong understanding of Data Structures and Algorithms in Java. I have worked on several real-world projects, which has helped me develop solid problem-solving skills and a clear approach to building efficient and user-friendly applications.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="skills" className="py-20 px-6 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Tech Stack
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {techCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-cyan-400">{category.icon}</div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] shadow-xl">
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-6 text-lg">{project.description}</p>

                  <h4 className="text-lg font-semibold mb-3 text-cyan-400">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span> {feature}
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-lg font-semibold mb-3 text-cyan-400">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6 bg-black/20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </h2>

            <div className="space-y-8">

              {/* Experience 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] shadow-xl">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  Member, Call Of Code – PVPIT, Bavdhan
                </h3>
                <ul className="space-y-2 text-gray-300 text-lg">
                  <li>• Participated in multiple national and college-level hackathons focused on web development.</li>
                  <li>• Built real-world projects with responsive UI, backend integration, and API handling.</li>
                  <li>• Secured 1st and 3rd place in web development events for innovative full-stack applications.</li>
                  <li>• Strengthened problem-solving and communication skills with focus on DSA.</li>
                </ul>
              </div>

              {/* Experience 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] shadow-xl">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  Vice-President, 1st Year – PVPIT, Bavdhan
                </h3>
                <ul className="space-y-2 text-gray-300 text-lg">
                  <li>• Led departmental activities and represented the student body.</li>
                  <li>• Coordinated events and managed communication between students and faculty.</li>
                  <li>• Demonstrated initiative, leadership, and organizational skills.</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Certifications
            </h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] flex items-center gap-4">
                  <span className="text-2xl text-cyan-400">🏆</span>
                  <span className="text-lg">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 text-center border-t border-white/20">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-400 mb-4">
              © 2025 Vaishnavi Adhav. Crafted with passion and code.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:adhavvaishnavi52@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                ✉️
              </a>
              <a href="https://github.com/vaishnavi4049" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors">
                🔗
              </a>
              <a href="https://www.linkedin.com/in/vaishnavi-adhav-b5b346362" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors">
                💼
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </div>
  );
}
