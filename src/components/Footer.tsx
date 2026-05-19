import { Zap, Twitter, Github, Linkedin } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
  Support: ['Documentation', 'Status', 'Community', 'Contact'],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#07070f] pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
                <Zap size={16} className="text-white" fill="white" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">NovaSpark</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              The all-in-one productivity platform for modern teams. Ship faster, collaborate smarter, win together.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: <Twitter size={16} />, label: 'Twitter' },
                { icon: <Github size={16} />, label: 'GitHub' },
                { icon: <Linkedin size={16} />, label: 'LinkedIn' },
              ].map((s) => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/8 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">© 2025 NovaSpark, Inc. All rights reserved.</p>
          <p className="text-slate-500 text-xs">Made with ❤️ for teams everywhere</p>
        </div>
      </div>
    </footer>
  );
}
