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
        "Gained practical experience in scalable deployment using FastAPI and Streamlit"
      ]
    },
    {
      title: "ALiAS Lucknow Lead",
      company: "Open Source Community",
      period: "Feb 2024 - July 2025",
      type: "Volunteer",
      achievements: [
        "Led initiatives to promote open-source contributions and foster collaborative tech community",
        "Grew network to 500+ members and increased contributions by 25%",
        "Organized workshops and hackathons to encourage community engagement"
      ]
    },
    {
      title: "IEEE WIE Treasurer",
      company: "IEEE",
      period: "Nov 2024 - Present",
      type: "Volunteer",
      achievements: [
        "Coordinated and managed logistics for multiple national & international conferences",
        "Ensured smooth execution and high attendee satisfaction for 500+ participants",
        "Managed budgets and financial planning for organizational events"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 px-4 py-20" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Experience
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Professional journey and leadership roles
        </p>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-purple-400 font-medium">{exp.company}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 mb-2">
                    {exp.type}
                  </span>
                  <p className="text-gray-400 text-sm">{exp.period}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIdx) => (
                  <li key={achIdx} className="text-gray-300 flex gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;