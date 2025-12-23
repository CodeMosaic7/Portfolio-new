import { Code } from "lucide-react";
import "../styles/Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={22} />,
      skills: ["Python", "JavaScript"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Code size={22} />,
      skills: [
        "ReactJS",
        "Node.js",
        "Express.js",
        "FastAPI",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
      ],
    },
    {
      title: "Machine Learning & AI",
      icon: <Code size={22} />,
      skills: [
        "Deep Learning",
        "Computer Vision",
        "NLP",
        "Transfer Learning",
        "Model Optimization",
      ],
    },
    {
      title: "Databases & Tools",
      icon: <Code size={22} />,
      skills: ["MySQL", "MongoDB", "Docker", "Git & GitHub", "Postman", "VS Code"],
    },
    {
      title: "Data Science",
      icon: <Code size={22} />,
      skills: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "EDA",
        "Feature Engineering",
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills & Expertise</h2>
        <p className="skills-subtitle">
          Full-stack development, AI/ML, and data science skillset
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">{category.icon}</span>
                <h3 className="skill-heading">{category.title}</h3>
              </div>

              <div className="skill-list">
                {category.skills.map((skill, skillIdx) => (
                  <span key={skillIdx} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
