const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap- bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="text-center space-y-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 animate-fade-in">
          Hi, I'm <span className="!text-blue-600">Manika</span>!
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 font-medium">
          I'm a passionate web and AI developer.
        </p>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          I love using technology to solve real-world problems.
        </p>
        
        <div className="pt-4 flex gap-4 justify-center">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl">
            View Projects
          </button>
          <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl border-2 border-indigo-600">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;