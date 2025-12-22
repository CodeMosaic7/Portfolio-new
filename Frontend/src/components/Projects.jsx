import { ChevronDown } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Adaptive Learning Platform",
      period: "June 2025 – July 2025",
      description: "Developed an AI-powered platform for children, adapting to mental and intellectual levels through chatbot interaction.",
      achievements: [
        "Implemented chatbot interaction, dashboards, and AI-generated quizzes using React & FastAPI",
        "Increased student engagement by 40%, demonstrating AI's impact on education accessibility"
      ],
      tech: ["React", "FastAPI", "AI/ML", "Python"],
      link: "#"
    },
    {
      title: "Random User Connect Web App",
      period: "April 2025 – May 2025",
      description: "Developed a real-time web application to connect random users, enabling seamless chat and interaction.",
      achievements: [
        "Implemented REST APIs, WebSocket communication, and secure user authentication",
        "Ensured smooth connectivity and real-time messaging capabilities"
      ],
      tech: ["Node.js", "WebSocket", "REST API", "Authentication"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 px-4 py-20" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Innovative solutions combining AI/ML and full-stack development
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20 group">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{project.period}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
              </div>

              <ul className="space-y-2 mb-4">
                {project.achievements.map((achievement, achIdx) => (
                  <li key={achIdx} className="text-gray-400 text-sm flex gap-2">
                    <span className="text-purple-400">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIdx) => (
                  <span key={techIdx} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30">
                    {tech}
                  </span>
                ))}
              </div>

              <a href={project.link} className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                <span>View Project</span>
                <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Projects;