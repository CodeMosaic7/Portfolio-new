import "../styles/Footer.css";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        <h3 className="footer-heading">Let’s Connect</h3>

        <div className="social-links">
          <a 
            href="mailto:manikasrivastava084@gmail.com" 
            className="social-icon"
            aria-label="Email"
          >
            <Mail size={22} />
            <span>Email</span>
          </a>

          <a 
            href="https://github.com/CodeMosaic7" 
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={22} />
            <span>GitHub</span>
          </a>

          <a 
            href="https://in.linkedin.com/in/manika-srivastava-80328125a" 
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
            <span>LinkedIn</span>
          </a>
        </div>

        <p className="footer-text">
          © 2025 <span>Manika Srivastava</span>. Built with React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
