import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  Activity, 
  ShieldCheck, 
  Radio, 
  Layers,
  ChevronRight,
  Zap,
  Eye,
  SlidersHorizontal
} from 'lucide-react';

export default function Hero() {
  // Countdown Timer calculation towards Nov 28, 2026 11:00 AM IST
  const targetDate = new Date('2026-11-28T11:00:00+05:30').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [activeTelemetryTab, setActiveTelemetryTab] = useState('vision');

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
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
    <section id="hero" className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-navy-950 flex items-center transition-colors duration-300">
      {/* Background Ambience & Precise Industrial Grid */}
      <div className="absolute inset-0 bg-industrial-grid opacity-75 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial-ambient pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-accent-emerald/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Webinar & Industry 4.0 Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-white/10 text-xs font-semibold tracking-wide mb-6 shadow-xl backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald"></span>
              </span>
              <span className="text-accent-emerald font-mono tracking-wider font-bold">LIVE WEBINAR</span>
              <span className="text-white/20">|</span>
              <span className="text-slate-300 font-mono tracking-wider">INDUSTRY 4.0</span>
              <span className="text-white/20">|</span>
              <span className="text-accent-blue font-mono font-medium">FREE EXECUTIVE PASS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight font-display text-white leading-[1.1] mb-6">
              Transform Manufacturing with the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-emerald via-amber-200 to-accent-blue">
                Power of AI
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl font-normal">
              How Artificial Intelligence is revolutionizing modern production lines, predictive maintenance, sub-millimeter optical inspection, and end-to-end factory automation. Learn the battle-tested engineering blueprint for tomorrow's autonomous smart factory.
            </p>

            {/* Key Event Metadata Row */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl glass-panel-luxury border border-white/[0.08]">
                <div className="p-2.5 rounded-xl bg-accent-emerald/10 text-accent-emerald border border-accent-emerald/20">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Date</div>
                  <div className="text-sm font-bold text-white font-display">28 Nov 2026</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl glass-panel-luxury border border-white/[0.08]">
                <div className="p-2.5 rounded-xl bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Time (IST)</div>
                  <div className="text-sm font-bold text-white font-display">11:00 AM – 12:30 PM</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-3 p-3.5 rounded-2xl glass-panel-luxury border border-white/[0.08]">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Radio className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Format</div>
                  <div className="text-sm font-bold text-white font-display">Live Online Stream</div>
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#register"
                onClick={(e) => handleScrollTo(e, '#register')}
                className="relative inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider text-navy-950 bg-accent-emerald hover:bg-emerald-400 rounded-xl shadow-2xl shadow-accent-emerald/30 transition-all duration-300 hover:shadow-accent-emerald/50 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent-emerald group"
              >
                <span>Reserve Your Free Seat</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#about"
                onClick={(e) => handleScrollTo(e, '#about')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-semibold text-slate-200 bg-navy-900/80 hover:bg-navy-800/80 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200 hover:text-white backdrop-blur-md"
              >
                <Play className="w-3.5 h-3.5 text-accent-blue fill-accent-blue" />
                <span>Explore Webinar</span>
              </a>
            </div>

            {/* Live Countdown Timer Widget */}
            <div className="w-full max-w-lg p-4 rounded-2xl glass-panel-luxury border border-white/[0.08] shadow-2xl mb-7">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-mono text-slate-300 flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-accent-emerald animate-pulse" />
                  Live Broadcast Countdown
                </span>
                <span className="text-[11px] text-emerald-400 font-mono font-semibold">
                  Nov 28, 2026 • 11:00 AM IST
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-navy-950/90 border border-white/[0.06] rounded-xl p-2.5">
                  <div className="text-2xl font-bold font-mono text-white tracking-tight">{timeLeft.days}</div>
                  <div className="text-[9px] uppercase tracking-wider text-slate-400 font-mono mt-0.5">Days</div>
                </div>
                <div className="bg-navy-950/90 border border-white/[0.06] rounded-xl p-2.5">
                  <div className="text-2xl font-bold font-mono text-white tracking-tight">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-[9px] uppercase tracking-wider text-slate-400 font-mono mt-0.5">Hours</div>
                </div>
                <div className="bg-navy-950/90 border border-white/[0.06] rounded-xl p-2.5">
                  <div className="text-2xl font-bold font-mono text-white tracking-tight">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-[9px] uppercase tracking-wider text-slate-400 font-mono mt-0.5">Mins</div>
                </div>
                <div className="bg-navy-950/90 border border-white/[0.06] rounded-xl p-2.5">
                  <div className="text-2xl font-bold font-mono text-accent-emerald tracking-tight">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-[9px] uppercase tracking-wider text-slate-400 font-mono mt-0.5">Secs</div>
                </div>
              </div>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-400">
              <div className="flex -space-x-2 overflow-hidden">
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-navy-950 bg-gradient-to-tr from-sky-600 to-blue-500 text-[10px] font-bold text-white flex items-center justify-center">TC</span>
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-navy-950 bg-gradient-to-tr from-emerald-600 to-teal-500 text-[10px] font-bold text-white flex items-center justify-center">MK</span>
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-navy-950 bg-gradient-to-tr from-amber-600 to-orange-500 text-[10px] font-bold text-white flex items-center justify-center">AR</span>
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-navy-950 bg-navy-800 text-[10px] font-bold text-accent-emerald border border-white/10 flex items-center justify-center">+500</span>
              </div>
              <p className="font-medium text-slate-300">
                <span className="text-white font-semibold">Designed for the Next Generation of Manufacturing Leaders</span>, Plant Heads & Automation Engineers.
              </p>
            </div>

          </div>

          {/* Right Column: Realistic Industrial Robotics & Live Telemetry HUD */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Specular Ambient Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-accent-emerald/30 via-accent-blue/20 to-purple-500/20 blur-2xl opacity-70"></div>

              {/* Main Machine Telemetry Viewport */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-navy-950 shadow-2xl">
                
                {/* Live Diagnostic Bar */}
                <div className="px-4 py-3 bg-navy-950/95 border-b border-white/[0.08] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse"></span>
                    <span className="text-white font-semibold tracking-wide">ROBOTIC CELL // LINE-04</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-accent-blue text-[11px]">
                    <Activity className="w-3.5 h-3.5" />
                    <span>OPC-UA ACTIVE</span>
                  </div>
                </div>

                {/* Industrial Photo with Tech HUD Layers */}
                <div className="relative aspect-[4/3] bg-navy-900 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                    alt="Advanced robotic arms operating in an intelligent manufacturing facility"
                    className="w-full h-full object-cover object-center scale-[1.02] filter contrast-105"
                    loading="eager"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/smart-factory.svg';
                    }}
                  />
                  
                  {/* Subtle dark technical vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40 pointer-events-none" />

                  {/* Laser Scanline Beam moving continuously */}
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent-emerald to-transparent opacity-80 animate-scanline pointer-events-none" />

                  {/* Optical Inspection Target Reticle */}
                  <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-accent-blue/80 rounded-xl pointer-events-none p-2 flex flex-col justify-between backdrop-blur-[1px] bg-sky-500/5">
                    <div className="flex justify-between">
                      <span className="w-2.5 h-2.5 border-t-2 border-l-2 border-accent-blue"></span>
                      <span className="w-2.5 h-2.5 border-t-2 border-r-2 border-accent-blue"></span>
                    </div>
                    
                    <div className="bg-navy-950/90 border border-accent-blue/40 px-2 py-1 rounded text-center self-center shadow-lg">
                      <div className="text-[9px] font-mono text-accent-blue font-bold tracking-widest uppercase">CV INFERENCE</div>
                      <div className="text-[11px] font-mono text-accent-emerald font-extrabold">99.4% CONF</div>
                    </div>

                    <div className="flex justify-between">
                      <span className="w-2.5 h-2.5 border-b-2 border-l-2 border-accent-blue"></span>
                      <span className="w-2.5 h-2.5 border-b-2 border-r-2 border-accent-blue"></span>
                    </div>
                  </div>

                  {/* Real-Time Waveform Graphic on bottom of camera feed */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-navy-950/85 border border-white/10 backdrop-blur-md flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-end gap-1 h-5 w-12 px-1">
                        <span className="w-1 bg-accent-emerald rounded-full waveform-bar-1"></span>
                        <span className="w-1 bg-accent-emerald rounded-full waveform-bar-2"></span>
                        <span className="w-1 bg-accent-emerald rounded-full waveform-bar-3"></span>
                        <span className="w-1 bg-accent-emerald rounded-full waveform-bar-4"></span>
                        <span className="w-1 bg-accent-emerald rounded-full waveform-bar-5"></span>
                      </div>
                      <div className="text-[10px] font-mono text-slate-300">
                        Vibration Telemetry: <span className="text-accent-emerald font-bold">NORMAL (0.42 mm/s)</span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono text-accent-blue font-bold">
                      12ms INFERENCE
                    </span>
                  </div>

                </div>

                {/* Bottom Machine Status Bar */}
                <div className="p-3.5 bg-navy-950 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-accent-emerald" />
                    <span className="text-slate-300">Predictive Engine: <span className="text-white font-semibold">Active</span></span>
                  </div>
                  <span className="text-emerald-400 font-bold">MTBF: 3,420 Hours</span>
                </div>

              </div>

              {/* Floating Realistic Badge 1: Downtime Reduction */}
              <div className="absolute -top-6 -left-6 sm:-left-8 glass-panel-luxury p-3.5 sm:p-4 rounded-2xl shadow-2xl max-w-[210px] sm:max-w-[230px] border border-accent-emerald/30 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-accent-emerald shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">35% Downtime Cut</div>
                    <div className="text-[10px] text-slate-400 font-mono">Predictive Machine Care</div>
                  </div>
                </div>
              </div>

              {/* Floating Realistic Badge 2: Optical Inspection */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 glass-panel-luxury p-3.5 sm:p-4 rounded-2xl shadow-2xl max-w-[220px] sm:max-w-[240px] border border-accent-blue/30">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-accent-blue shrink-0">
                    <Eye className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">99.4% Flaw Detection</div>
                    <div className="text-[10px] text-slate-400 font-mono">Edge Neural Vision</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
