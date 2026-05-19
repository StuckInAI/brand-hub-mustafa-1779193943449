import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { navItems } from '@/lib/data';
import clsx from 'clsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0a0a14]/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
              <Zap size={16} className="text-white" fill="white" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">NovaSpark</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-1.5">
              Log in
            </button>
            <button
              onClick={() => handleNavClick('#pricing')}
              className="text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Get started
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-slate-400 hover:text-white p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0f0f1e] border-t border-white/5 px-4 py-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-left text-slate-300 hover:text-white py-2 text-sm transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#pricing')}
            className="mt-2 w-full text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white px-4 py-2.5 rounded-lg transition-colors"
          >
            Get started free
          </button>
        </div>
      )}
    </header>
  );
}
