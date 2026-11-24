import React from 'react';
import { 
  Cpu, 
  Mail, 
  MapPin, 
  Phone, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Github, 
  ArrowUp,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-navy-950 text-slate-400 pt-16 pb-12 border-t border-white/[0.06] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Brand Column (Cols 1-5) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-3.5 mb-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 flex items-center justify-center shadow-lg group-hover:border-accent-emerald transition-colors">
                <Cpu className="w-5 h-5 text-accent-emerald" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white font-display flex items-center gap-1.5">
                  MANVIAN
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-emerald"></span>
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-accent-blue/90 font-bold">
                  Industrial AI Platform
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Manvian empowers discrete and continuous manufacturers worldwide to deploy computer vision, predictive telemetry, and autonomous intelligence across their shop floors.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-navy-950 hover:bg-navy-900 border border-white/10 text-slate-300 hover:text-accent-blue flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-navy-950 hover:bg-navy-900 border border-white/10 text-slate-300 hover:text-accent-blue flex items-center justify-center transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-navy-950 hover:bg-navy-900 border border-white/10 text-slate-300 hover:text-red-400 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-navy-950 hover:bg-navy-900 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (Cols 6-8) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Webinar Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleNavClick(e, '#hero')}
                  className="hover:text-accent-emerald transition-colors"
                >
                  Home / Overview
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="hover:text-accent-emerald transition-colors"
                >
                  About the Webinar
                </a>
              </li>
              <li>
                <a
                  href="#learning"
                  onClick={(e) => handleNavClick(e, '#learning')}
                  className="hover:text-accent-emerald transition-colors"
                >
                  What You'll Learn
                </a>
              </li>
              <li>
                <a
                  href="#agenda"
                  onClick={(e) => handleNavClick(e, '#agenda')}
                  className="hover:text-accent-emerald transition-colors"
                >
                  Webinar Agenda
                </a>
              </li>
              <li>
                <a
                  href="#speaker"
                  onClick={(e) => handleNavClick(e, '#speaker')}
                  className="hover:text-accent-emerald transition-colors"
                >
                  Meet Your Speaker
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  onClick={(e) => handleNavClick(e, '#benefits')}
                  className="hover:text-accent-emerald transition-colors"
                >
                  Why Attend
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleNavClick(e, '#faq')}
                  className="hover:text-accent-emerald transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (Cols 9-12) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Event Inquiries & Contact
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-xs">Email:</span>
                  <a href="mailto:webinars@manvian.com" className="text-slate-200 hover:text-accent-emerald transition-colors font-mono">
                    webinars@manvian.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-xs">Direct Support Hotline:</span>
                  <span className="text-slate-200 font-mono">+1 (800) 555-MANV / +91 80 4123 4567</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-xs">Headquarters:</span>
                  <span className="text-slate-200">Manvian Industrial AI Labs, 400 Tech Boulevard, CA & Bangalore Tech Park</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-3 rounded-2xl bg-navy-950 border border-white/10 flex items-center justify-between text-[11px] font-mono">
              <span className="text-accent-emerald flex items-center gap-1.5 font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                SOC-2 Type II & ISO 27001
              </span>
              <span className="text-slate-500 font-semibold">256-Bit SSL</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 Manvian Technologies Inc. All rights reserved. "Building the Smart Factory of Tomorrow" is an executive industrial initiative.
          </div>

          <div className="flex items-center gap-6">
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="hover:text-slate-300 transition-colors">Terms of Service</a>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-navy-950 hover:bg-navy-900 border border-white/10 text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 shadow"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-mono">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
