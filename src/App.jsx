import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import LearningOutcomes from './components/LearningOutcomes';
import Agenda from './components/Agenda';
import Speaker from './components/Speaker';
import Benefits from './components/Benefits';
import Registration from './components/Registration';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { Calendar, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('amber'); // New default: Vibrant Cyber Amber & Robotics

  useEffect(() => {
    // Apply theme data attribute to document element
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowFloatingCTA(true);
      } else {
        setShowFloatingCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToRegister = (e) => {
    e.preventDefault();
    const element = document.querySelector('#register');
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
    <div className="min-h-screen bg-navy-950 text-white selection:bg-accent-emerald selection:text-navy-950 font-sans antialiased transition-colors duration-300">
      {/* 1. Navigation Bar with Theme Switcher */}
      <Navbar currentTheme={currentTheme} onThemeChange={setCurrentTheme} />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About the Webinar */}
        <About />

        {/* 4. What You'll Learn */}
        <LearningOutcomes />

        {/* 5. Webinar Agenda */}
        <Agenda />

        {/* 6. Speaker Profile */}
        <Speaker />

        {/* 7. Why Attend? */}
        <Benefits />

        {/* 8. Registration Section (Conversion Anchor) */}
        <Registration />

        {/* 9. FAQ Section */}
        <FAQ />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Floating Bottom CTA for quick registration on scroll */}
      {showFloatingCTA && (
        <aside
          aria-label="Quick registration shortcut"
          className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <a
            href="#register"
            onClick={scrollToRegister}
            className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-accent-emerald hover:brightness-110 text-navy-950 font-extrabold text-xs sm:text-sm tracking-wide shadow-2xl shadow-accent-emerald/40 hover:shadow-accent-emerald/60 hover:-translate-y-1 transition-all border border-white/20 group"
          >
            <Calendar className="w-4 h-4 text-navy-950" />
            <span>Register Free</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </aside>
      )}
    </div>
  );
}
