import { GraduationCap, Award } from "lucide-react";
import "../styles/Education.css";

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        <p className="education-subtitle">
          Academic background and achievements
        </p>

        <div className="education-list">
          {/* Degree */}
          <div className="education-card">
            <div className="education-icon">
              <GraduationCap size={28} />
            </div>

            <div className="education-content">
              <h3 className="education-degree">
                Bachelor of Technology in Computer Science & Engineering
              </h3>
              <p className="education-specialization">
                Honors in AI & Machine Learning
              </p>
              <p className="education-institute">
                Amity University, Lucknow
              </p>

              <div className="education-meta">
                <span>2022 – 2026</span>
                <span className="education-badge">CGPA: 8.45</span>
              </div>
            </div>
          </div>

          {/* Class 12 */}
          <div className="education-card">
            <div className="education-icon">
              <Award size={28} />
            </div>

            <div className="education-content">
              <h3 className="education-degree">Class 12 (CBSE)</h3>
              <p className="education-institute">
                Cathedral Senior Secondary School, Lucknow
              </p>

              <div className="education-meta">
                <span>2021 – 2022</span>
                <span className="education-badge">84%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
