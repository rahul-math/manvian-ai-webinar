import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Menu, X, Calendar, ArrowRight, Palette, Check } from 'lucide-react';

export default function Navbar({ currentTheme = 'amber', onThemeChange }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const themes = [
    { id: 'amber', name: 'Cyber Amber', color: '#F59E0B', label: 'Robotics & Automation' },
    { id: 'cobalt', name: 'Cobalt Blue', color: '#3B82F6', label: 'Aerospace & Enterprise' },
    { id: 'violet', name: 'Neural Violet', color: '#A855F7', label: 'Deep-Tech AI' },
    { id: 'emerald', name: 'Matrix Emerald', color: '#10B981', label: 'Smart Factory 4.0' },
    { id: 'crimson', name: 'Crimson Titanium', color: '#F43F5E', label: 'High-Velocity Stamping' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setThemeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: "What You'll Learn", href: '#learning' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Speaker', href: '#speaker' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/50 py-3.5'
          : 'bg-navy-950/40 backdrop-blur-md border-b border-white/[0.04] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, '#hero')}
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="Manvian Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 flex items-center justify-center shadow-lg group-hover:border-accent-emerald/60 transition-all duration-300">
              <div className="absolute inset-0 rounded-xl bg-accent-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              <div className="relative flex items-center justify-center">
                <Cpu className="w-5 h-5 text-accent-emerald transition-transform group-hover:scale-110" />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent-emerald animate-ping opacity-75" />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white font-display">
                  MANVIAN
                </span>
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-accent-emerald/15 text-accent-emerald border border-accent-emerald/30">
                  AI
                </span>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-medium">
                Industrial Intelligence
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-navy-900/80 border border-white/[0.08] backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white rounded-full hover:bg-white/[0.06] transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Palette Switcher & Register CTA */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Live Palette Selector Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-navy-900 border border-white/10 hover:border-white/20 text-xs text-slate-300 hover:text-white transition-colors"
                title="Change Color Theme"
                aria-label="Color Palette Switcher"
              >
                <Palette className="w-3.5 h-3.5 text-accent-emerald" />
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: themes.find(t => t.id === currentTheme)?.color || '#F59E0B' }} />
                <span className="text-[11px] font-mono capitalize hidden lg:inline">Theme</span>
              </button>

              {themeDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-navy-900/95 border border-white/10 shadow-2xl backdrop-blur-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-400 border-b border-white/[0.06]">
                    Select Color Palette
                  </div>
                  <div className="p-1 space-y-1">
                    {themes.map((theme) => {
                      const isSelected = currentTheme === theme.id;
                      return (
                        <button
                          key={theme.id}
                          onClick={() => {
                            if (onThemeChange) onThemeChange(theme.id);
                            setThemeDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-xl flex items-center justify-between text-xs transition-colors ${
                            isSelected
                              ? 'bg-white/10 text-white font-bold'
                              : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-3 h-3 rounded-full shrink-0 shadow-sm" style={{ backgroundColor: theme.color }} />
                            <div>
                              <div className="font-semibold">{theme.name}</div>
                              <div className="text-[10px] text-slate-400 font-sans">{theme.label}</div>
                            </div>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-accent-emerald shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#register"
              onClick={(e) => handleScrollTo(e, '#register')}
              className="relative group inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-950 bg-accent-emerald hover:brightness-110 rounded-lg shadow-lg shadow-accent-emerald/20 transition-all duration-200 hover:shadow-accent-emerald/40 hover:-translate-y-0.5 focus:outline-none"
            >
              <span>Register Now</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => {
                const nextIdx = (themes.findIndex(t => t.id === currentTheme) + 1) % themes.length;
                if (onThemeChange) onThemeChange(themes[nextIdx].id);
              }}
              className="p-2 rounded-lg bg-navy-900 border border-white/10 text-slate-300"
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              <span className="block w-3.5 h-3.5 rounded-full" style={{ backgroundColor: themes.find(t => t.id === currentTheme)?.color || '#F59E0B' }} />
            </button>
            
            <a
              href="#register"
              onClick={(e) => handleScrollTo(e, '#register')}
              className="px-3 py-1.5 text-xs font-bold text-navy-950 bg-accent-emerald rounded-lg"
            >
              Register
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-navy-900 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-navy-950/98 px-5 pt-4 pb-6 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-4 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Theme Selector Pills */}
            <div className="pt-3 pb-2 border-t border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2 px-1">
                Choose Color Palette:
              </span>
              <div className="flex flex-wrap gap-2">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => {
                      if (onThemeChange) onThemeChange(theme.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1.5 rounded-xl border text-xs flex items-center gap-2 ${
                      currentTheme === theme.id
                        ? 'bg-white/10 border-accent-emerald text-white font-bold'
                        : 'bg-navy-900/60 border-white/10 text-slate-400'
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: theme.color }} />
                    <span>{theme.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <div className="flex items-center gap-2 px-3 text-xs font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse"></span>
                <span>28 Nov 2026 • 11:00 AM IST (Online)</span>
              </div>
              <a
                href="#register"
                onClick={(e) => handleScrollTo(e, '#register')}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-navy-950 bg-accent-emerald rounded-xl transition-colors"
              >
                <span>Reserve Your Free Seat</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
