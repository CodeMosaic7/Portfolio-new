import "../styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "HCL Tech",
      period: "May 2025 – July 2025",
      type: "Internship",
      achievements: [
        "Built and deployed 5+ AI-powered applications (Dynamic Cab Pricing, Translation Tools, RAG-based Chatbots)",
        "Designed and optimized ML models with API integration, improving system response efficiency by 30%",
        "Gained practical experience in scalable deployment using FastAPI and Streamlit",
      ],
    },
    {
      title: "ALiAS Lucknow Lead",
      company: "Open Source Community",
      period: "Feb 2024 – July 2025",
      type: "Volunteer",
      achievements: [
        "Led initiatives to promote open-source contributions and foster collaborative tech community",
        "Grew network to 500+ members and increased contributions by 25%",
        "Organized workshops and hackathons to encourage community engagement",
      ],
    },
    {
      title: "IEEE WIE Treasurer",
      company: "IEEE",
      period: "Nov 2024 – Present",
      type: "Volunteer",
      achievements: [
        "Coordinated and managed logistics for national & international conferences",
        "Ensured smooth execution for 500+ participants",
        "Managed budgets and financial planning for organizational events",
      ],
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>
        <p className="experience-subtitle">
          Professional journey and leadership roles
        </p>

        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>

                <div className="experience-meta">
                  <span className="experience-type">{exp.type}</span>
                  <span className="experience-period">{exp.period}</span>
                </div>
              </div>

              <ul className="experience-points">
                {exp.achievements.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
