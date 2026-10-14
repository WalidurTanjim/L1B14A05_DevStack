import { useState } from 'react';
import logoText from '../assets/logo-text.png';
import hamburgerIcon from '../assets/hamburger.png';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ───── DESKTOP NAV ───── */}
          <div className="hidden md:flex items-center justify-between h-16">
            {/* Left: brand */}
            <a href="#home" className="flex items-center gap-2 shrink-0">
              <img src={logoText} alt="Dev Stack Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold gradient-text">Dev Stack</span>
            </a>

            {/* Center: nav links */}
            <nav className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-pink-500 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: auth buttons */}
            <div className="flex items-center gap-3">
              <button className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors duration-200 px-3 py-1.5">
                Sign In
              </button>
              <button className="gradient-bg text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity duration-200 shadow-md">
                Sign Up
              </button>
            </div>
          </div>

          {/* ───── MOBILE NAV ───── */}
          <div className="flex md:hidden items-center justify-between h-14">
            {/* Left: hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-pink-500 transition-colors"
              aria-label="Toggle menu"
            >
              <img src={hamburgerIcon} alt="Menu" className="h-6 w-6" />
            </button>

            {/* Center: logo */}
            <a href="#home" className="flex items-center gap-1.5">
              <img src={logoText} alt="Dev Stack Logo" className="h-7 w-auto" />
              <span className="text-lg font-bold gradient-text">Dev Stack</span>
            </a>

            {/* Right: auth buttons */}
            <div className="flex items-center gap-2">
              <button className="text-xs font-medium text-gray-700 hover:text-pink-500 transition-colors px-2 py-1">
                Sign In
              </button>
              <button className="gradient-bg text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:opacity-90 transition-opacity shadow-sm">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* ───── MOBILE DROPDOWN MENU ───── */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <nav className="flex flex-col px-4 py-3 gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors py-2 px-2 rounded-md hover:bg-pink-50"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
