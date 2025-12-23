import { ChevronDown } from "lucide-react";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "AI Adaptive Learning Platform",
      period: "June 2025 – July 2025",
      description:
        "Developed an AI-powered platform for children, adapting to mental and intellectual levels through chatbot interaction.",
      achievements: [
        "Implemented chatbot interaction, dashboards, and AI-generated quizzes using React & FastAPI",
        "Increased student engagement by 40%, demonstrating AI's impact on education accessibility",
      ],
      tech: ["React", "FastAPI", "AI/ML", "Python"],
      link: "#",
    },
    {
      title: "Random User Connect Web App",
      period: "April 2025 – May 2025",
      description:
        "Developed a real-time web application to connect random users, enabling seamless chat and interaction.",
      achievements: [
        "Implemented REST APIs, WebSocket communication, and secure user authentication",
        "Ensured smooth connectivity and real-time messaging capabilities",
      ],
      tech: ["Node.js", "WebSocket", "REST API", "Authentication"],
      link: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Featured Projects</h2>
        <p className="projects-subtitle">
          Innovative solutions combining AI/ML and full-stack development
        </p>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-period">{project.period}</span>
                <p className="project-description">{project.description}</p>
              </div>

              <ul className="project-achievements">
                {project.achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>

              <a href={project.link} className="project-link">
                View Project <ChevronDown size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
