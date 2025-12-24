import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I’m <span className="hero-name">Manika!</span>
        </h1>

        <p className="hero-tagline">
          I’m a passionate Web & AI Developer.
        </p>

        <p className="hero-description">
          I love using technology to solve real-world problems.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">View Projects</button>
          <button className="btn-secondary">Contact Me</button>
        </div>
      </div>

      <div className="hero-visual">
        <img src="../image.svg" alt="Hero Illustration" />
      </div>
    </section>
  );
};

export default Hero;
