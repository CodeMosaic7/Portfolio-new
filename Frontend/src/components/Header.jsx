import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'ABOUT' },
    { href: '#talk', label: 'TALK TO ME' },
    { href: '#skills', label: 'SKILLS' },
    { href: '#experience', label: 'EXPERIENCE' },
    { href: '#projects', label: 'PROJECTS' },
    { href: '#contact', label: 'CONTACT' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full border-b border-gray-200 sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto h-[72px] flex flex-row items-center justify-between px-6 py-4">
        <h3 className="text-xl font-bold tracking-wide">MANIKA</h3>
        {/* Desktop Navigation */}
        <div className="hidden min-[821px]:flex flex-row items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="min-[821px]:hidden px-3 py-2 rounded hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="text-2xl">{mobileMenuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-white">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-6 py-3 text-sm font-medium hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;