import { GraduationCap, Award } from "lucide-react";
const Education = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-slate-900 px-4 py-20" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Education
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Academic background and achievements
        </p>

        <div className="space-y-6">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <GraduationCap className="w-8 h-8 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Bachelor of Technology in Computer Science & Engineering
                </h3>
                <p className="text-purple-400 font-medium mb-2">Honors in AI and ML</p>
                <p className="text-gray-400 mb-2">Amity University Lucknow</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="text-gray-300">2022 - 2026</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                    CGPA: 8.45
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Class 12 (CBSE)
                </h3>
                <p className="text-gray-400 mb-2">Cathedral Senior Secondary School, Lucknow</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="text-gray-300">2021 - 2022</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                    Score: 84%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;