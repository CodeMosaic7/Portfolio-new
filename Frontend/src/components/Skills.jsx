import { Code } from "lucide-react";
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "JavaScript"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Code className="w-6 h-6" />,
      skills: ["ReactJS", "Node.js", "Express.js", "FastAPI", "TensorFlow", "Keras", "Scikit-learn"]
    },
    {
      title: "Machine Learning & AI",
      icon: <Code className="w-6 h-6" />,
      skills: ["Deep Learning", "Computer Vision", "NLP", "Transfer Learning", "Model Optimization"]
    },
    {
      title: "Databases & Tools",
      icon: <Code className="w-6 h-6" />,
      skills: ["MySQL", "MongoDB", "Docker", "Git & GitHub", "Postman", "VS Code"]
    },
    {
      title: "Data Science",
      icon: <Code className="w-6 h-6" />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA", "Feature Engineering"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 px-4 py-20" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Skills & Expertise
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Comprehensive skill set spanning full-stack development, AI/ML, and data science
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-purple-400">{category.icon}</div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span key={skillIdx} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Skills;