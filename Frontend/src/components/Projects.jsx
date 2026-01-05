import { ChevronDown } from "lucide-react";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "MELLO.AI : AI Adaptive Learning Platform",
      period: "June 2025 – July 2025",
      description:
        "Developed an AI-powered platform for children, adapting to mental and intellectual levels through chatbot interaction.",
      achievements: [
        "Implemented chatbot interaction, dashboards, and AI-generated quizzes using React & FastAPI",
        "Increased student engagement by 40%, demonstrating AI's impact on education accessibility",
      ],
      tech: ["React", "FastAPI", "AI/ML", "Python"],
      link: "https://github.com/CodeMosaic7/learning-potato",
    },
    {
      title: "MEETLINE : Random User Connect Web App",
      period: "April 2025 – May 2025",
      description:
        "Developed a real-time web application to connect random users, enabling seamless chat and interaction.",
      achievements: [
        "Implemented REST APIs, WebSocket communication, and secure user authentication",
        "Ensured smooth connectivity and real-time messaging capabilities",
      ],
      tech: ["Node.js", "WebSocket", "REST API", "Authentication"],
      link: "https://github.com/CodeMosaic7/MEET-LINE",
    },
    {
      title: "Asha AI Chatbot",
      period: "March 2025 – April 2025",
      description:
        "Developed an AI chatbot for Asha, providing real-time assistance and information.",
      achievements: [
        "Implemented natural language processing for understanding user queries",
        "Integrated with external APIs for dynamic information retrieval",
      ],

      tech: ["Streamlit", "LangChain", "REST API"],
      link: "https://github.com/CodeMosaic7/Asha-ai-chatbot",
    },
    {
      title: "Next-Step",
      period: "September 2025 – Present",
      description:
        "Developing a platform to provide personalized guidance to students to build a successful career of their choice.",
      achievements: [
        "Implemented AI-driven personalized recommendations and career matching",
        "Integrated with external APIs for dynamic information retrieval",
      ],

      tech: ["React", "FastAPI", "AI/ML", "Python"],
      link: "https://github.com/CodeMosaic7/Next-Step",
    },
    {
      title: "Stock Market Prediction",
      period: "May 2025",
      description:
        "Developed a machine learning model to predict stock market trends and assist investors in making informed decisions.",
      achievements: [
        "Implemented LSTM for time series forecasting",
        "visualizes both actual and predicted stock prices in real time using interactive charts.",
      ],

      tech: ["React", "FastAPI", "LSTM", "Python","Alpha Vantage","Vercel"],
      link: "https://github.com/CodeMosaic7/Stock-Marker-Prediction",
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
