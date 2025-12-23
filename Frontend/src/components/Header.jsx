import { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "ABOUT" },
    { href: "#talk", label: "TALK TO ME" },
    { href: "#skills", label: "SKILLS" },
    { href: "#experience", label: "EXPERIENCE" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <header className="header">
      <div className="header-inner">
        <h3 className="logo">MANIKA</h3>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="nav-mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
