import logoText from '../assets/logo-text.png';

const FOOTER_LINKS = {
  Product: [
    { label: 'Home', href: '#home' },
    { label: 'Technologies', href: '#technologies' },
    { label: 'Projects', href: '#projects' },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Careers', href: '#careers' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand block */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <img src={logoText} alt="Dev Stack Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold gradient-text">Dev Stack</span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            {/* Social links */}
            <div className="flex gap-4 mt-5">
              {['GitHub', 'Twitter', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-gray-500 hover:text-pink-500 transition-colors duration-200 font-medium"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-bold tracking-widest uppercase text-gray-900 mb-4">
                {group}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-pink-500 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-400">
            © {year} Dev Stack. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#privacy" className="text-sm text-gray-400 hover:text-pink-500 transition-colors">
              Privacy
            </a>
            <a href="#terms" className="text-sm text-gray-400 hover:text-pink-500 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
